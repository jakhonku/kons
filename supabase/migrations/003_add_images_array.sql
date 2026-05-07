-- Add images array column for multi-image gallery (max 10, ordered)
-- Run in Supabase Dashboard → SQL Editor

alter table public.news
  add column if not exists images text[] default '{}'::text[];

alter table public.posters
  add column if not exists images text[] default '{}'::text[];

notify pgrst, 'reload schema';
