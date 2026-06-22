import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Plus, Edit3, Trash2, Search, X, Video as VideoIcon, Loader2, Star } from 'lucide-react';
import { useAdminVideos } from '../../hooks/useAdminStorage';
import { uploadVideo, uploadImage, isVideoUrl } from '../../lib/supabase';
import { youtubeThumb, resolveThumb } from '../../lib/video';

const EMPTY = {
  title: '',
  title_ru: '',
  title_en: '',
  category: 'Konsertlar',
  video_url: '',
  thumb: '',
  featured: false,
};

export default function AdminVideos() {
  const { items, loading, error, add, update, remove } = useAdminVideos();
  const [params, setParams] = useSearchParams();

  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('Barchasi');
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formError, setFormError] = useState('');
  const [formLang, setFormLang] = useState('uz');

  useEffect(() => {
    if (params.get('new') === '1') {
      openNew();
      params.delete('new');
      setParams(params, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const categories = useMemo(
    () => ['Barchasi', ...Array.from(new Set(items.map((v) => v.category).filter(Boolean)))],
    [items]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((v) => {
      const matchesCat = filter === 'Barchasi' || v.category === filter;
      const matchesQ = !q || (v.title || '').toLowerCase().includes(q);
      return matchesCat && matchesQ;
    });
  }, [items, query, filter]);

  function openNew() {
    setEditing('new');
    setForm({ ...EMPTY });
    setFormLang('uz');
    setFormError('');
  }

  function openEdit(item) {
    setEditing(item.id);
    setForm({
      title: item.title || '',
      title_ru: item.title_ru || '',
      title_en: item.title_en || '',
      category: item.category || 'Konsertlar',
      video_url: item.video_url || '',
      thumb: item.thumb || '',
      featured: !!item.featured,
    });
    setFormLang('uz');
    setFormError('');
  }

  function close() {
    setEditing(null);
    setForm(EMPTY);
    setFormError('');
  }

  async function onPickVideo(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setFormError('');
    const { url, error: upErr } = await uploadVideo(file, 'videos');
    setUploading(false);
    e.target.value = '';
    if (upErr) { setFormError(`Video yuklanmadi: ${upErr.message}`); return; }
    setForm((f) => ({ ...f, video_url: url }));
  }

  async function onPickThumb(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setFormError('');
    const { url, error: upErr } = await uploadImage(file, 'video-thumbs');
    setUploading(false);
    e.target.value = '';
    if (upErr) { setFormError(`Muqova yuklanmadi: ${upErr.message}`); return; }
    setForm((f) => ({ ...f, thumb: url }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (submitting) return;
    if (!form.title.trim()) {
      setFormLang('uz');
      setFormError('Video nomi (UZBEK) majburiy — iltimos kiriting.');
      return;
    }
    if (!form.video_url.trim()) {
      setFormError('Video havolasi yoki fayli majburiy (YouTube havolasi yoki mp4 yuklang).');
      return;
    }
    setSubmitting(true);
    setFormError('');
    const payload = {
      title: form.title,
      title_ru: form.title_ru,
      title_en: form.title_en,
      category: form.category || 'Umumiy',
      video_url: form.video_url.trim(),
      thumb: form.thumb.trim() || youtubeThumb(form.video_url) || '',
      featured: form.featured,
    };
    const result = editing === 'new' ? await add(payload) : await update(editing, payload);
    setSubmitting(false);
    if (!result.ok) { setFormError(result.error || 'Saqlashda xatolik'); return; }
    close();
  }

  async function doDelete() {
    if (!confirmDelete) return;
    const result = await remove(confirmDelete.id);
    if (result.ok) setConfirmDelete(null);
    else alert(result.error || 'Oʻchirib boʻlmadi');
  }

  const previewThumb = resolveThumb(form);

  return (
    <div className="admin-page">
      <div className="admin-page-head">
        <div>
          <h1 className="admin-page-title">Video galereya</h1>
          <p className="admin-page-sub">Videolarni joylang — YouTube havolasi yoki mp4 fayl</p>
        </div>
        <button type="button" className="admin-btn admin-btn-primary" onClick={openNew}>
          <Plus size={16} /> Video qoʻshish
        </button>
      </div>

      {error && (
        <div className="admin-login-error" style={{ marginBottom: 16 }}>
          Maʼlumotlarni yuklashda xato: {error}
        </div>
      )}

      <div className="admin-toolbar">
        <div className="admin-search">
          <Search size={16} strokeWidth={1.7} />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Video nomi boʻyicha qidirish..." />
        </div>
        {categories.length > 1 && (
          <div className="admin-filter-chips">
            {categories.map((c) => (
              <button key={c} type="button" onClick={() => setFilter(c)} className={`admin-chip${filter === c ? ' is-active' : ''}`}>
                {c}
              </button>
            ))}
          </div>
        )}
      </div>

      {loading ? (
        <div className="admin-empty-block">
          <Loader2 size={28} className="admin-spin" />
          <h3>Yuklanmoqda…</h3>
        </div>
      ) : filtered.length === 0 ? (
        <div className="admin-empty-block">
          <VideoIcon size={32} strokeWidth={1.4} />
          <h3>Video topilmadi</h3>
          <p>{items.length === 0 ? 'Birinchi videoni qoʻshing' : 'Filtrga mos video yoʻq'}</p>
          {items.length === 0 && (
            <button type="button" className="admin-btn admin-btn-primary" onClick={openNew}>
              <Plus size={16} /> Video qoʻshish
            </button>
          )}
        </div>
      ) : (
        <div className="admin-poster-grid">
          {filtered.map((v) => (
            <article key={v.id} className="admin-poster-card">
              <div className="admin-poster-image">
                {resolveThumb(v) ? (
                  <img src={resolveThumb(v)} alt={v.title} />
                ) : (
                  <div className="admin-poster-placeholder"><VideoIcon size={24} /></div>
                )}
                {v.featured && <span className="admin-poster-badge">ASOSIY</span>}
              </div>
              <div className="admin-poster-body">
                <h3>{v.title}</h3>
                <div className="admin-poster-meta">
                  <span><VideoIcon size={12} /> {v.category || 'Umumiy'}</span>
                </div>
              </div>
              <div className="admin-poster-actions">
                <button type="button" className="admin-icon-btn" onClick={() => openEdit(v)} title="Tahrirlash"><Edit3 size={15} /></button>
                <button type="button" className="admin-icon-btn is-danger" onClick={() => setConfirmDelete(v)} title="Oʻchirish"><Trash2 size={15} /></button>
              </div>
            </article>
          ))}
        </div>
      )}

      {editing && (
        <div className="admin-modal" role="dialog" aria-modal="true">
          <div className="admin-modal-backdrop" onClick={() => !submitting && close()} />
          <div className="admin-modal-card">
            <header className="admin-modal-head">
              <h2>{editing === 'new' ? 'Yangi video' : 'Videoni tahrirlash'}</h2>
              <button type="button" className="admin-icon-btn" onClick={close} disabled={submitting}><X size={18} /></button>
            </header>
            <form onSubmit={onSubmit} className="admin-form">
              <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #eee' }}>
                <button type="button" onClick={() => setFormLang('uz')} className={`admin-chip ${formLang === 'uz' ? 'is-active' : ''}`} style={{ padding: '8px 20px' }}>UZBEK (Asosiy)</button>
                <button type="button" onClick={() => setFormLang('ru')} className={`admin-chip ${formLang === 'ru' ? 'is-active' : ''}`} style={{ padding: '8px 20px' }}>RUSSIAN</button>
                <button type="button" onClick={() => setFormLang('en')} className={`admin-chip ${formLang === 'en' ? 'is-active' : ''}`} style={{ padding: '8px 20px' }}>ENGLISH</button>
              </div>

              <div className="admin-form-grid">
                <label className="admin-field admin-field-full">
                  <span className="admin-field-label">Video nomi ({formLang.toUpperCase()}){formLang === 'uz' ? ' *' : ''}</span>
                  <input
                    type="text"
                    value={formLang === 'uz' ? form.title : formLang === 'ru' ? form.title_ru : form.title_en}
                    onChange={(e) => {
                      if (formLang === 'uz') setForm({ ...form, title: e.target.value });
                      else if (formLang === 'ru') setForm({ ...form, title_ru: e.target.value });
                      else setForm({ ...form, title_en: e.target.value });
                    }}
                    placeholder="Masalan: Simfonik orkestr — Bahor ohanglari"
                  />
                </label>

                <label className="admin-field">
                  <span className="admin-field-label">Kategoriya</span>
                  <input
                    type="text"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    placeholder="Konsertlar, Master-klass, Hujjatli, Intervyu..."
                  />
                </label>

                <label className="admin-field admin-checkbox" style={{ alignSelf: 'end' }}>
                  <input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} />
                  <span>Asosiy video (sahifa boshida katta koʻrinadi)</span>
                </label>

                <label className="admin-field admin-field-full">
                  <span className="admin-field-label">Video havolasi (YouTube) yoki mp4 fayl *</span>
                  <div className="admin-image-pick">
                    <input type="file" accept="video/*" onChange={onPickVideo} disabled={uploading} />
                    <input
                      type="url"
                      value={form.video_url}
                      onChange={(e) => setForm({ ...form, video_url: e.target.value })}
                      placeholder="https://youtu.be/... yoki https://...mp4"
                    />
                  </div>
                  {form.video_url && isVideoUrl(form.video_url) && (
                    <div className="admin-image-preview">
                      <video src={form.video_url} controls style={{ maxWidth: '100%', maxHeight: 200, borderRadius: 8 }} />
                    </div>
                  )}
                </label>

                <label className="admin-field admin-field-full">
                  <span className="admin-field-label">Muqova rasmi (ixtiyoriy — YouTube uchun avtomatik olinadi)</span>
                  <div className="admin-image-pick">
                    <input type="file" accept="image/*" onChange={onPickThumb} disabled={uploading} />
                    <input
                      type="url"
                      value={form.thumb}
                      onChange={(e) => setForm({ ...form, thumb: e.target.value })}
                      placeholder="yoki muqova rasmi URL"
                    />
                  </div>
                  {previewThumb && (
                    <div className="admin-image-preview">
                      <img src={previewThumb} alt="muqova" style={{ maxWidth: '100%', maxHeight: 180, borderRadius: 8 }} />
                      {form.thumb && (
                        <button type="button" className="admin-btn admin-btn-ghost" onClick={() => setForm({ ...form, thumb: '' })}>
                          Olib tashlash
                        </button>
                      )}
                    </div>
                  )}
                </label>

                {formError && (
                  <div className="admin-field-full">
                    <div className="admin-login-error">{formError}</div>
                  </div>
                )}
              </div>

              <footer className="admin-form-foot">
                <button type="button" className="admin-btn admin-btn-ghost" onClick={close} disabled={submitting}>Bekor qilish</button>
                <button type="submit" className="admin-btn admin-btn-primary" disabled={submitting || uploading}>
                  {submitting ? 'Saqlanmoqda…' : (editing === 'new' ? 'Joylash' : 'Saqlash')}
                </button>
              </footer>
            </form>
          </div>
        </div>
      )}

      {confirmDelete && (
        <div className="admin-modal" role="dialog" aria-modal="true">
          <div className="admin-modal-backdrop" onClick={() => setConfirmDelete(null)} />
          <div className="admin-modal-card admin-modal-sm">
            <header className="admin-modal-head">
              <h2>Oʻchirishni tasdiqlang</h2>
              <button type="button" className="admin-icon-btn" onClick={() => setConfirmDelete(null)}><X size={18} /></button>
            </header>
            <div className="admin-modal-body">
              <p><strong>{confirmDelete.title}</strong> videosini oʻchirishni xohlaysizmi?</p>
            </div>
            <footer className="admin-form-foot">
              <button type="button" className="admin-btn admin-btn-ghost" onClick={() => setConfirmDelete(null)}>Bekor qilish</button>
              <button type="button" className="admin-btn admin-btn-danger" onClick={doDelete}>Oʻchirish</button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}
