-- 009_harden_storage.sql
-- ─────────────────────────────────────────────────────────────
-- XAVFSIZLIK: kons-media bucket uchun server tomonida fayl turi va
-- hajmini cheklash (M-4). Mijoz tomonidagi MIME tekshiruvi bypass
-- qilinadi — bu cheklov Supabase Storage darajasida majburlanadi.
--  - SVG ataylab ruxsat etilmagan (public bucketda XSS vektori bo'lishi mumkin).
--  - Hajm chegarasi: 25 MB (qisqa videolarga yetarli).
-- Supabase Dashboard → SQL Editor da ishga tushiring. Idempotent.
-- ─────────────────────────────────────────────────────────────

update storage.buckets
set
  file_size_limit = 26214400, -- 25 MB
  allowed_mime_types = array[
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/gif',
    'image/avif',
    'video/mp4',
    'video/webm'
  ]
where id = 'kons-media';
