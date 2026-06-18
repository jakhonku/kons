-- 008_harden_messages.sql
-- ─────────────────────────────────────────────────────────────
-- XAVFSIZLIK: messages jadvalini mustahkamlash (H-2, M-2, M-3)
--  - Maydon uzunliklarini cheklash → oversized payload / flood himoyasi
--  - status / created_at / updated_at ni SERVER tomonida majburlash:
--    anon (mehmon) foydalanuvchi bu qiymatlarni soxtalashtira olmaydi.
-- Supabase Dashboard → SQL Editor → New query da ishga tushiring. Idempotent.
-- ─────────────────────────────────────────────────────────────

-- 1) Uzunlik va status qiymati cheklovlari (CHECK) — har doim majburlanadi
alter table public.messages drop constraint if exists messages_len_full_name;
alter table public.messages drop constraint if exists messages_len_phone;
alter table public.messages drop constraint if exists messages_len_email;
alter table public.messages drop constraint if exists messages_len_type;
alter table public.messages drop constraint if exists messages_len_subject;
alter table public.messages drop constraint if exists messages_len_message;
alter table public.messages drop constraint if exists messages_status_chk;

alter table public.messages
  add constraint messages_len_full_name check (char_length(full_name) <= 200),
  add constraint messages_len_phone     check (phone   is null or char_length(phone)   <= 50),
  add constraint messages_len_email     check (email   is null or char_length(email)   <= 320),
  add constraint messages_len_type      check (type    is null or char_length(type)    <= 100),
  add constraint messages_len_subject   check (subject is null or char_length(subject) <= 300),
  add constraint messages_len_message   check (message is null or char_length(message) <= 5000),
  add constraint messages_status_chk    check (status in ('new','read','archived','resolved','spam'));

-- 2) Mijoz yuborgan status / created_at / updated_at ni bekor qilib,
--    server tomonida majburlash. Admin bo'lmagan har qanday insert uchun
--    qiymatlar qat'iy o'rnatiladi (M-2 — data integrity).
create or replace function public.messages_force_defaults()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_admin() then
    new.status     := 'new';
    new.created_at := now();
    new.updated_at := now();
  end if;
  return new;
end
$$;

drop trigger if exists messages_force_defaults_ins on public.messages;
create trigger messages_force_defaults_ins
  before insert on public.messages
  for each row execute function public.messages_force_defaults();
