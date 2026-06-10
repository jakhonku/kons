-- 007_fix_messages_insert.sql
-- ─────────────────────────────────────────────────────────────
-- TUZATISH: "Online murojaat" formasi ishlamayotgan edi.
-- Anon (mehmon) foydalanuvchi messages jadvaliga INSERT qila olmasdi:
--   ERROR 42501 — "new row violates row-level security policy for table messages"
-- Sabab: live bazada anon uchun INSERT siyosati yo'q edi.
-- Quyidagi skript anon + authenticated rollariga murojaat yuborish ruxsatini beradi.
-- Supabase Dashboard → SQL Editor → New query da ishga tushiring. Idempotent (qayta ishga tushirsa bo'ladi).
-- ─────────────────────────────────────────────────────────────

alter table public.messages enable row level security;

-- Jadval darajasidagi grant (kafolat uchun — RLS asosiy darvoza bo'lib qoladi)
grant insert on table public.messages to anon, authenticated;

-- Har kim murojaat yubora oladi (anon va authenticated)
drop policy if exists "messages_insert_public" on public.messages;

create policy "messages_insert_public"
  on public.messages
  for insert
  to anon, authenticated
  with check (true);
