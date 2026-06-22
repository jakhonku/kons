import { useState } from 'react';
import { Plus, Trash2, ArrowUp, ArrowDown, Loader2, Image as ImageIcon } from 'lucide-react';
import { uploadImage } from '../../lib/supabase';
import { compressImage } from '../../lib/imageCompress';

export default function ImageGalleryEditor({ images = [], onChange, folder = 'gallery', max = 10 }) {
  const MAX_IMAGES = max;
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  async function handleFiles(e) {
    const files = Array.from(e.target.files || []);
    e.target.value = '';
    if (files.length === 0) return;

    const remaining = MAX_IMAGES - images.length;
    if (remaining <= 0) {
      setError(`Eng koʻpi ${MAX_IMAGES} ta rasm yuklash mumkin`);
      return;
    }
    const toUpload = files.slice(0, remaining);

    setUploading(true);
    setError('');
    const next = [...images];
    for (const file of toUpload) {
      const optimized = await compressImage(file).catch(() => file);
      const { url, error: upErr } = await uploadImage(optimized, folder);
      if (upErr) {
        setError(`Yuklashda xato: ${upErr.message}`);
        continue;
      }
      next.push(url);
    }
    setUploading(false);
    onChange(next);
  }

  function addUrl() {
    const url = window.prompt('Rasm URL manzilini kiriting:');
    if (!url) return;
    if (images.length >= MAX_IMAGES) {
      setError(`Eng koʻpi ${MAX_IMAGES} ta rasm yuklash mumkin`);
      return;
    }
    onChange([...images, url.trim()]);
  }

  function move(index, delta) {
    const newIndex = index + delta;
    if (newIndex < 0 || newIndex >= images.length) return;
    const next = [...images];
    [next[index], next[newIndex]] = [next[newIndex], next[index]];
    onChange(next);
  }

  function remove(index) {
    const next = images.filter((_, i) => i !== index);
    onChange(next);
  }

  return (
    <div className="image-gallery-editor">
      <div className="image-gallery-toolbar">
        <label className="admin-btn admin-btn-ghost" style={{ cursor: 'pointer' }}>
          <Plus size={14} /> Rasm yuklash
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFiles}
            disabled={uploading || images.length >= MAX_IMAGES}
            style={{ display: 'none' }}
          />
        </label>
        <button type="button" className="admin-btn admin-btn-ghost" onClick={addUrl} disabled={uploading || images.length >= MAX_IMAGES}>
          + URL orqali
        </button>
        <span className="image-gallery-count">
          {images.length} / {MAX_IMAGES}
        </span>
        {uploading && (
          <span className="image-gallery-uploading">
            <Loader2 size={14} className="admin-spin" /> Yuklanmoqda…
          </span>
        )}
      </div>

      {error && <div className="admin-login-error" style={{ marginTop: 8 }}>{error}</div>}

      {images.length === 0 ? (
        <div className="image-gallery-empty">
          <ImageIcon size={28} />
          <span>Hozircha rasm yoʻq. {MAX_IMAGES} tagacha rasm yuklashingiz mumkin.</span>
        </div>
      ) : (
        <div className="image-gallery-grid">
          {images.map((url, i) => (
            <div key={`${url}-${i}`} className="image-gallery-item">
              <div className="image-gallery-thumb">
                <img src={url} alt={`#${i + 1}`} />
                {i === 0 && <span className="image-gallery-cover-badge">Asosiy</span>}
                <span className="image-gallery-index">#{i + 1}</span>
              </div>
              <div className="image-gallery-actions">
                <button type="button" className="admin-icon-btn" onClick={() => move(i, -1)} disabled={i === 0} title="Yuqoriga">
                  <ArrowUp size={14} />
                </button>
                <button type="button" className="admin-icon-btn" onClick={() => move(i, 1)} disabled={i === images.length - 1} title="Pastga">
                  <ArrowDown size={14} />
                </button>
                <button type="button" className="admin-icon-btn is-danger" onClick={() => remove(i)} title="Oʻchirish">
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <p className="image-gallery-hint">
        Birinchi rasm — <strong>asosiy rasm</strong> (kartochkada va sahifa boshida koʻrinadi).
        Tartibni oʻzgartirish uchun ↑ ↓ tugmalaridan foydalaning.
      </p>
    </div>
  );
}
