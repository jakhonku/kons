import { isVideoUrl } from './supabase';

export { isVideoUrl };

/* YouTube havolasidan video ID ajratib oladi (turli formatlarni qoʻllab-quvvatlaydi). */
export function youtubeId(url) {
  if (!url) return null;
  const m = String(url).match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
  );
  return m ? m[1] : null;
}

/* Embed (iframe) uchun havola. */
export function youtubeEmbed(url) {
  const id = youtubeId(url);
  return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : null;
}

/* YouTube avtomatik muqova rasmi. */
export function youtubeThumb(url) {
  const id = youtubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
}

/* Berilgan video uchun eng mos muqovani tanlaydi:
   admin yuklagan thumb → YouTube avtomatik thumb → boʻsh. */
export function resolveThumb(video) {
  if (!video) return '';
  if (video.thumb) return video.thumb;
  return youtubeThumb(video.video_url) || '';
}
