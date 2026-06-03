-- Supabase database setup for Ailei
-- Run this script in your database SQL editor or via psql.

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  full_name text,
  role text not null default 'user',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.courses (
  id text primary key,
  title text not null,
  subtitle text,
  description text,
  modules text[],
  duration text,
  price numeric,
  category text,
  details text,
  created_at timestamptz not null default now()
);

create table if not exists public.course_schedules (
  id text primary key,
  course_id text not null references public.courses(id) on delete cascade,
  date text,
  day text,
  duration text,
  title text not null,
  location text,
  address text,
  price numeric not null default 0,
  status text not null default 'available',
  details text,
  month text,
  ticket_label text,
  spots_available int,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.bookings (
  id uuid not null default gen_random_uuid() primary key,
  user_id uuid references auth.users(id),
  booker_email text not null,
  first_name text not null,
  last_name text not null,
  address text,
  city text,
  email text not null,
  phone text,
  dob text,
  photo_id text,
  company text,
  height text,
  shoe_size text,
  swimming text,
  weight text,
  hear_about text,
  uscg_credential text,
  text_messages text,
  cancellation_agreed boolean default false,
  courses jsonb not null default '[]',
  total_cost numeric not null default 0,
  confirm_amount text,
  status text not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.payments (
  id uuid not null default gen_random_uuid() primary key,
  booking_id uuid references public.bookings(id) on delete cascade,
  provider text not null,
  reference text not null unique,
  amount numeric not null default 0,
  status text not null default 'pending',
  metadata jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql strict;

create trigger if not exists update_profiles_updated_at
  before update on public.profiles
  for each row execute function public.update_updated_at_column();

create trigger if not exists update_course_schedules_updated_at
  before update on public.course_schedules
  for each row execute function public.update_updated_at_column();

create trigger if not exists update_bookings_updated_at
  before update on public.bookings
  for each row execute function public.update_updated_at_column();

create trigger if not exists update_payments_updated_at
  before update on public.payments
  for each row execute function public.update_updated_at_column();

alter table public.profiles enable row level security;
alter table public.course_schedules enable row level security;
alter table public.bookings enable row level security;
alter table public.payments enable row level security;

create or replace function public.is_admin() returns boolean
language sql stable as $$
  select exists (
    select 1 from public.profiles where id = auth.uid() and role = 'admin'
  );
$$;

create policy "Allow users to manage their profile"
  on public.profiles
  for all
  to authenticated
  using (auth.uid() = id)
  with check (auth.uid() = id);

create policy "Allow admins to manage profiles"
  on public.profiles
  for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

create policy "Public can view course schedules"
  on public.course_schedules
  for select
  to public
  using (true);

create policy "Admins can manage course schedules"
  on public.course_schedules
  for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

create policy "Public can submit bookings"
  on public.bookings
  for insert
  to public
  with check (true);

create policy "Admins can read bookings"
  on public.bookings
  for select
  to authenticated
  using (public.is_admin());

create policy "Admins can update bookings"
  on public.bookings
  for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

create policy "Admins can delete bookings"
  on public.bookings
  for delete
  to authenticated
  using (public.is_admin());

create policy "Public can create payments"
  on public.payments
  for insert
  to public
  with check (true);

create policy "Admins can read and manage payments"
  on public.payments
  for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- After creating your admin user in Supabase Auth,
-- add a matching profile record like this:
-- INSERT INTO public.profiles (id, email, role) VALUES ('<auth_user_id>', 'admin@example.com', 'admin');
