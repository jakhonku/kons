-- Add video column to news and posters tables
-- Run in Supabase Dashboard → SQL Editor

alter table public.news
  add column if not exists video text;

alter table public.posters
  add column if not exists video text;
