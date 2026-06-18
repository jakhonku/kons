-- 014_submit_murojaat.sql
-- ─────────────────────────────────────────────────────────────
-- TUZATISH: anon (mehmon) murojaat yozishi RLS tomonidan rad etilardi
--   (ERROR 42501: new row violates row-level security policy).
-- Yechim: SECURITY DEFINER funksiya orqali yozish. Funksiya egasi (postgres)
-- nomidan ishlaydi → RLS'ni xavfsiz aylanib o'tadi va faqat shu nazorat
-- qilingan yo'l orqali murojaat qo'shiladi. Yangi arizaning id'sini qaytaradi.
-- status / created_at server tomonidan o'rnatiladi (mijoz boshqara olmaydi).
-- Supabase Dashboard → SQL Editor da ishga tushiring. Idempotent.
-- ─────────────────────────────────────────────────────────────

create or replace function public.submit_murojaat(
  p_full_name text,
  p_phone     text,
  p_email     text,
  p_type      text,
  p_subject   text,
  p_message   text
)
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare
  new_id bigint;
begin
  -- Minimal validatsiya
  if coalesce(btrim(p_full_name), '') = '' or coalesce(btrim(p_message), '') = '' then
    raise exception 'Familiya-ism va murojaat matni majburiy';
  end if;

  insert into public.messages (full_name, phone, email, type, subject, message, status)
  values (
    left(btrim(p_full_name), 200),
    left(coalesce(btrim(p_phone), ''), 50),
    left(coalesce(btrim(p_email), ''), 320),
    left(coalesce(btrim(p_type), ''), 100),
    left(coalesce(btrim(p_subject), ''), 300),
    left(coalesce(btrim(p_message), ''), 5000),
    'new'
  )
  returning id into new_id;

  return new_id;
end
$$;

revoke all on function public.submit_murojaat(text, text, text, text, text, text) from public;
grant execute on function public.submit_murojaat(text, text, text, text, text, text) to anon, authenticated;
