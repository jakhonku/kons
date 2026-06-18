-- 013_multilang_columns.sql
-- ─────────────────────────────────────────────────────────────
-- SCHEMA DRIFT TUZATISH: admin panel (AdminNews, AdminPosters) ko'p tilli
-- ustunlarni (ru/en) bazaga yozadi, lekin ular schema.sql da yaratilmagan edi.
-- Bu migratsiya yetishmayotgan ustunlarni qo'shadi. Idempotent.
-- Supabase Dashboard → SQL Editor da ishga tushiring.
-- ─────────────────────────────────────────────────────────────

-- ── NEWS ──
alter table public.news add column if not exists title_ru   text;
alter table public.news add column if not exists title_en   text;
alter table public.news add column if not exists excerpt_ru text;
alter table public.news add column if not exists excerpt_en text;
alter table public.news add column if not exists body_ru    text;
alter table public.news add column if not exists body_en    text;
alter table public.news add column if not exists images_ru  text[];
alter table public.news add column if not exists images_en  text[];

-- ── POSTERS (afishalar) ──
alter table public.posters add column if not exists title_ru       text;
alter table public.posters add column if not exists title_en       text;
alter table public.posters add column if not exists artist_ru      text;
alter table public.posters add column if not exists artist_en      text;
alter table public.posters add column if not exists venue_ru       text;
alter table public.posters add column if not exists venue_en       text;
alter table public.posters add column if not exists description_ru text;
alter table public.posters add column if not exists description_en text;
alter table public.posters add column if not exists image_ru       text;
alter table public.posters add column if not exists image_en       text;
alter table public.posters add column if not exists images_ru      text[];
alter table public.posters add column if not exists images_en      text[];
