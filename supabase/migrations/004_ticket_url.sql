-- Add ticket_url field to posters
-- If empty/null, frontend falls back to default ITICKET_URL

alter table public.posters
  add column if not exists ticket_url text;

notify pgrst, 'reload schema';
