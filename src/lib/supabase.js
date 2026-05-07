import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabaseConfigured = !!(url && anonKey);

if (!supabaseConfigured) {
  // eslint-disable-next-line no-console
  console.error(
    '[Supabase] VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY is missing.\n' +
    '1) Make sure .env.local exists at the project root with both values.\n' +
    '2) STOP the dev server (Ctrl+C) and run `npm run dev` again — Vite only reads env files at startup.'
  );
}

export const supabase = createClient(url ?? 'https://invalid.local', anonKey ?? 'invalid', {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: false,
    storageKey: 'kons-admin-auth',
  },
});

export const STORAGE_BUCKET = 'kons-media';

const ALLOWED_KINDS = {
  image: /^image\//,
  video: /^video\//,
  any: /.*/,
};

export async function uploadFile(file, folder = 'uploads', kind = 'any') {
  if (!file) return { url: null, error: new Error('No file') };

  const allowedRegex = ALLOWED_KINDS[kind] ?? ALLOWED_KINDS.any;
  if (!allowedRegex.test(file.type || '')) {
    return { url: null, error: new Error(`Faqat ${kind === 'image' ? 'rasm' : kind === 'video' ? 'video' : 'fayl'} qabul qilinadi`) };
  }

  const ext = (file.name.split('.').pop() || 'bin').toLowerCase();
  const path = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const { error } = await supabase.storage
    .from(STORAGE_BUCKET)
    .upload(path, file, { cacheControl: '3600', upsert: false, contentType: file.type });
  if (error) return { url: null, error };
  const { data } = supabase.storage.from(STORAGE_BUCKET).getPublicUrl(path);
  return { url: data.publicUrl, path, error: null };
}

export const uploadImage = (file, folder = 'uploads') => uploadFile(file, folder, 'image');
export const uploadVideo = (file, folder = 'videos') => uploadFile(file, folder, 'video');

export function isVideoUrl(url) {
  if (!url) return false;
  return /\.(mp4|webm|ogg|mov|m4v)(\?|$)/i.test(url);
}
