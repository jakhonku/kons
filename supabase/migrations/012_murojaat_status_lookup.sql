-- 012_murojaat_status_lookup.sql
-- ─────────────────────────────────────────────────────────────
-- FUNKSIYA: Murojaatchi o'z arizasi holatini va navbatini ko'rishi.
-- messages jadvali public SELECT'ga YOPIQ (faqat admin o'qiydi), shuning uchun
-- bu SECURITY DEFINER funksiya FAQAT kerakli maydonlarni qaytaradi:
-- raqam, ism, tur, holat, navbat. (Xabar matni va telefon QAYTARILMAYDI — maxfiylik.)
-- Qidiruv: ariza raqami (OK-XXXXXX yoki raqam) yoki ism bo'yicha.
-- Supabase Dashboard → SQL Editor da ishga tushiring. Idempotent.
-- ─────────────────────────────────────────────────────────────

create or replace function public.murojaat_status(q text)
returns table (
  reference       text,
  full_name       text,
  type            text,
  status          text,
  created_at      timestamptz,
  queue_position  int,
  answered        boolean
)
language sql
security definer
stable
set search_path = public
as $$
  with base as (
    select m.id, m.full_name, m.type, m.status, m.created_at,
           (m.reply_text is not null and length(btrim(m.reply_text)) > 0) as answered
    from public.messages m
    where length(btrim(coalesce(q, ''))) >= 2
      and (
        case
          -- Raqam bo'yicha (OK-000123, OK123 yoki 123)
          when upper(btrim(q)) ~ '^(OK)?-?[0-9]+$'
            then m.id = nullif(regexp_replace(q, '[^0-9]', '', 'g'), '')::bigint
          -- Aks holda ism bo'yicha
          else m.full_name ilike '%' || btrim(q) || '%'
        end
      )
      and m.status <> 'spam'
  )
  select
    'OK-' || lpad(b.id::text, 6, '0')                        as reference,
    b.full_name,
    b.type,
    b.status,
    b.created_at,
    case
      when b.status in ('resolved', 'archived') then null
      else (
        select count(*)::int
        from public.messages mm
        where mm.status in ('new', 'read')
          and mm.created_at <= b.created_at
      )
    end                                                       as queue_position,
    b.answered
  from base b
  order by b.created_at desc
  limit 20
$$;

revoke all on function public.murojaat_status(text) from public;
grant execute on function public.murojaat_status(text) to anon, authenticated;
