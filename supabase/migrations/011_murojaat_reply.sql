-- 011_murojaat_reply.sql
-- ─────────────────────────────────────────────────────────────
-- FUNKSIYA: Murojaatga email orqali javob berish.
--  - reply_text : admin yozgan javob matni
--  - replied_at : javob yuborilgan vaqt
-- Murojaat raqami (OK-XXXXXX) alohida saqlanmaydi — u messages.id dan
-- hosil qilinadi (frontend va edge function bir xil formatda ko'rsatadi).
-- Supabase Dashboard → SQL Editor da ishga tushiring. Idempotent.
-- ─────────────────────────────────────────────────────────────

alter table public.messages add column if not exists reply_text text;
alter table public.messages add column if not exists replied_at timestamptz;

alter table public.messages drop constraint if exists messages_len_reply;
alter table public.messages
  add constraint messages_len_reply check (reply_text is null or char_length(reply_text) <= 8000);
