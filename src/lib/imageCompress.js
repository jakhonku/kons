/* ============================================================
   Rasmni yuklashdan oldin brauzerda siqish/kichraytirish.
   Maqsad: original 3–8 MB foto rasmlarini ~200–400 KB ga keltirib,
   sayt (ayniqsa yangiliklar) tez ochilishini taʼminlash.
   ============================================================ */

const DEFAULT_MAX_DIM = 1200;   // eng katta tomon (px)
const DEFAULT_QUALITY = 0.75;   // JPEG/WebP sifati

// Bularni siqmaymiz (animatsiya / vektor buziladi)
const SKIP_TYPES = ['image/gif', 'image/svg+xml'];

export async function compressImage(file, { maxDim = DEFAULT_MAX_DIM, quality = DEFAULT_QUALITY } = {}) {
  if (!file || !file.type || !file.type.startsWith('image/')) return file;
  if (SKIP_TYPES.includes(file.type)) return file;

  let source;
  try {
    source = await loadImage(file);
  } catch {
    return file; // dekod xatosi — originalni qoldiramiz
  }

  const width = source.naturalWidth || source.width;
  const height = source.naturalHeight || source.height;
  if (!width || !height) return file;

  const scale = Math.min(1, maxDim / Math.max(width, height));
  const targetW = Math.round(width * scale);
  const targetH = Math.round(height * scale);

  const canvas = document.createElement('canvas');
  canvas.width = targetW;
  canvas.height = targetH;
  const ctx = canvas.getContext('2d');
  if (!ctx) return file;
  ctx.drawImage(source, 0, 0, targetW, targetH);
  if (source.close) source.close();

  let outputType = 'image/webp';
  let ext = 'webp';

  // canvas.toBlob orqali WebP formatda siqishga harakat qilamiz
  let blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/webp', quality));

  // Agar brauzer WebP formatini qo'llab-quvvatlamasa (toBlob 'image/webp' qaytarmasa), JPEG'ga qaytamiz
  if (!blob || blob.type !== 'image/webp') {
    blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/jpeg', quality));
    outputType = 'image/jpeg';
    ext = 'jpg';
  }

  if (!blob) return file;

  // Agar kichraytirilmagan boʻlsa va siqish foyda bermasa — originalni qoldiramiz
  if (scale === 1 && blob.size >= file.size) return file;

  const baseName = (file.name || 'image').replace(/\.[^.]+$/, '');
  return new File([blob], `${baseName}.${ext}`, { type: outputType, lastModified: Date.now() });
}

async function loadImage(file) {
  if (typeof createImageBitmap === 'function') {
    try {
      return await createImageBitmap(file);
    } catch {
      // fallback'ga oʻtamiz
    }
  }
  const url = URL.createObjectURL(file);
  try {
    return await new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = url;
    });
  } finally {
    setTimeout(() => URL.revokeObjectURL(url), 0);
  }
}
