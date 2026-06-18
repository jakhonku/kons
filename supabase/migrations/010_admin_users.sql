-- 010_admin_users.sql
-- ─────────────────────────────────────────────────────────────
-- XAVFSIZLIK: admin identifikatsiyasini qattiq kodlangan emaildan
-- ko'p-adminli, boshqariladigan modelga o'tkazish (M-1).
--  - admin_users jadvali orqali bir nechta admin qo'shish mumkin.
--  - app_metadata.role = 'admin' custom claim ham qo'llab-quvvatlanadi.
--  - Eski qattiq kodlangan email ORQAGA MOSLIK uchun saqlanadi
--    (admin paneldan qulflanib qolmaslik kafolati).
-- Supabase Dashboard → SQL Editor da ishga tushiring. Idempotent.
-- ─────────────────────────────────────────────────────────────

create table if not exists public.admin_users (
  user_id    uuid primary key references auth.users(id) on delete cascade,
  email      text,
  created_at timestamptz not null default now()
);

alter table public.admin_users enable row level security;

-- Faqat adminlar admin_users jadvalini ko'ra/boshqara oladi
drop policy if exists "admin_users_admin_all" on public.admin_users;
create policy "admin_users_admin_all"
  on public.admin_users for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- is_admin() ni kengaytirish — bir nechta manbani tekshiradi.
-- SECURITY DEFINER (egasi sifatida ishlaydi) → admin_users so'rovida
-- RLS chetlab o'tiladi, rekursiya bo'lmaydi.
create or replace function public.is_admin()
returns boolean
language sql
security definer
stable
set search_path = public
as $$
  select coalesce(
    -- 1) JWT email admin_users jadvalida bor
    exists (
      select 1 from public.admin_users a
      where lower(a.email) = lower(auth.jwt() ->> 'email')
    )
    -- 2) auth uid admin_users jadvalida bor
    or exists (
      select 1 from public.admin_users a
      where a.user_id = auth.uid()
    )
    -- 3) custom claim: app_metadata.role = 'admin' (faqat service_role o'rnatadi)
    or (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
    -- 4) ORQAGA MOSLIK: eski qattiq kodlangan admin email
    or lower(auth.jwt() ->> 'email') = lower('admin@konservatoriya.uz'),
    false
  )
$$;

revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to authenticated;

-- ─────────────────────────────────────────────────────────────
-- ESLATMA: hozirgi adminni admin_users jadvaliga qo'shish uchun
-- (auth.users dan user_id ni oling), masalan:
--
--   insert into public.admin_users (user_id, email)
--   select id, email from auth.users
--   where lower(email) = lower('admin@konservatoriya.uz')
--   on conflict (user_id) do nothing;
--
-- So'ngra 4-band(qattiq kodlangan email) ni kelajakda olib tashlash mumkin.
-- ─────────────────────────────────────────────────────────────
