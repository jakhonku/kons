import { useMemo, useState } from 'react';
import { Plus, Edit3, Trash2, Search, X, Image as ImageIcon, MapPin, Clock, Loader2, Eye } from 'lucide-react';
import { useAdminPosters } from '../../hooks/useAdminStorage';
import { uploadVideo, isVideoUrl } from '../../lib/supabase';
import ImageGalleryEditor from '../../components/admin/ImageGalleryEditor';
import PreviewModal from '../../components/admin/PreviewModal';

const HALLS = ['Katta Zal', 'Kichik Zal', 'Organ Zali', 'Kamer Zali'];

const EMPTY = {
  title: '',
  title_ru: '',
  title_en: '',
  artist: '',
  artist_ru: '',
  artist_en: '',
  venue: 'Katta Zal',
  venue_ru: 'Большой Зал',
  venue_en: 'Grand Hall',
  date: '',
  time: '',
  price: '',
  free: false,
  tags: '',
  description: '',
  description_ru: '',
  description_en: '',
  image: '',
  image_ru: '',
  image_en: '',
  images: [],
  video: '',
  ticket_url: '',
};

export default function AdminPosters() {
  const { items, loading, error, add, update, remove } = useAdminPosters();

  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('Barchasi');
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [formError, setFormError] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [formLang, setFormLang] = useState('uz');

  useEffect(() => {
    if (params.get('new') === '1') {
      openNew();
      params.delete('new');
      setParams(params, { replace: true });
    }
  }, [params, setParams]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((p) => {
      const matchesHall = filter === 'Barchasi' || p.venue === filter;
      const matchesQ = !q || (p.title || '').toLowerCase().includes(q) || (p.artist || '').toLowerCase().includes(q);
      return matchesHall && matchesQ;
    });
  }, [items, query, filter]);

  function openNew() {
    setEditing('new');
    setForm({ ...EMPTY, date: new Date().toISOString().slice(0, 10) });
    setFormError('');
  }

  function openEdit(item) {
    setEditing(item.id);
    setForm({
      title: item.title || '',
      title_ru: item.title_ru || '',
      title_en: item.title_en || '',
      artist: item.artist || '',
      artist_ru: item.artist_ru || '',
      artist_en: item.artist_en || '',
      venue: item.venue || 'Katta Zal',
      venue_ru: item.venue_ru || '',
      venue_en: item.venue_en || '',
      date: item.date || '',
      time: item.time || '',
      price: item.price || '',
      free: !!item.free,
      tags: item.tags || '',
      description: item.description || '',
      description_ru: item.description_ru || '',
      description_en: item.description_en || '',
      image: item.image || '',
      image_ru: item.image_ru || '',
      image_en: item.image_en || '',
      images: (Array.isArray(item.images) ? item.images.filter(Boolean) : (item.image ? [item.image] : [])),
      video: item.video || '',
      ticket_url: item.ticket_url || '',
    });
    setFormError('');
  }

  function close() {
    setEditing(null);
    setForm(EMPTY);
    setFormError('');
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!form.title.trim() || submitting) return;
    setSubmitting(true);
    setFormError('');
    const payload = {
      title: form.title,
      title_ru: form.title_ru,
      title_en: form.title_en,
      artist: form.artist,
      artist_ru: form.artist_ru,
      artist_en: form.artist_en,
      venue: form.venue,
      venue_ru: form.venue_ru,
      venue_en: form.venue_en,
      date: form.date || null,
      time: form.time,
      price: form.free ? '' : form.price,
      free: form.free,
      tags: form.tags,
      description: form.description,
      description_ru: form.description_ru,
      description_en: form.description_en,
      image: form.images?.[0] || form.image || '',
      image_ru: form.image_ru,
      image_en: form.image_en,
      images: form.images || [],
      video: form.video,
      ticket_url: (form.ticket_url || '').trim() || null,
    };
    const result = editing === 'new' ? await add(payload) : await update(editing, payload);
    setSubmitting(false);
    if (!result.ok) {
      setFormError(result.error || 'Saqlashda xatolik');
      return;
    }
    close();
  }

  async function onPickVideo(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingImage(true);
    setFormError('');
    const { url, error: upErr } = await uploadVideo(file, 'posters-videos');
    setUploadingImage(false);
    e.target.value = '';
    if (upErr) {
      setFormError(`Video yuklanmadi: ${upErr.message}`);
      return;
    }
    setForm((f) => ({ ...f, video: url }));
  }

  async function doDelete() {
    if (!confirmDelete) return;
    const result = await remove(confirmDelete.id);
    if (result.ok) setConfirmDelete(null);
    else alert(result.error || 'Oʻchirib boʻlmadi');
  }

  return (
    <div className="admin-page">
      <div className="admin-page-head">
        <div>
          <h1 className="admin-page-title">Afishalar</h1>
          <p className="admin-page-sub">Konsert va tadbir afishalari</p>
        </div>
        <button type="button" className="admin-btn admin-btn-primary" onClick={openNew}>
          <Plus size={16} /> Afisha qoʻshish
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
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tadbir nomi yoki ijrochi boʻyicha qidirish..."
          />
        </div>
        <div className="admin-filter-chips">
          {['Barchasi', ...HALLS].map((h) => (
            <button
              key={h}
              type="button"
              onClick={() => setFilter(h)}
              className={`admin-chip${filter === h ? ' is-active' : ''}`}
            >
              {h}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="admin-empty-block">
          <Loader2 size={28} className="admin-spin" />
          <h3>Yuklanmoqda…</h3>
        </div>
      ) : filtered.length === 0 ? (
        <div className="admin-empty-block">
          <ImageIcon size={32} strokeWidth={1.4} />
          <h3>Afisha topilmadi</h3>
          <p>{items.length === 0 ? 'Birinchi afishani qoʻshing' : 'Filtrga mos afisha yoʻq'}</p>
          {items.length === 0 && (
            <button type="button" className="admin-btn admin-btn-primary" onClick={openNew}>
              <Plus size={16} /> Afisha qoʻshish
            </button>
          )}
        </div>
      ) : (
        <div className="admin-poster-grid">
          {filtered.map((p) => (
            <article key={p.id} className="admin-poster-card">
              <div className="admin-poster-image">
                {p.image ? (
                  <img src={p.image} alt={p.title} />
                ) : (
                  <div className="admin-poster-placeholder"><ImageIcon size={24} /></div>
                )}
                {p.free && <span className="admin-poster-badge">BEPUL</span>}
              </div>
              <div className="admin-poster-body">
                <h3>{p.title}</h3>
                {p.artist && <div className="admin-poster-artist">{p.artist}</div>}
                <div className="admin-poster-meta">
                  <span><MapPin size={12} /> {p.venue}</span>
                  {p.date && <span><Clock size={12} /> {p.date}{p.time ? ` · ${p.time}` : ''}</span>}
                </div>
                {!p.free && p.price && <div className="admin-poster-price">{p.price}</div>}
              </div>
              <div className="admin-poster-actions">
                <button type="button" className="admin-icon-btn" onClick={() => openEdit(p)} title="Tahrirlash">
                  <Edit3 size={15} />
                </button>
                <button type="button" className="admin-icon-btn is-danger" onClick={() => setConfirmDelete(p)} title="Oʻchirish">
                  <Trash2 size={15} />
                </button>
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
              <h2>{editing === 'new' ? 'Yangi afisha' : 'Afishani tahrirlash'}</h2>
              <button type="button" className="admin-icon-btn" onClick={close} disabled={submitting}><X size={18} /></button>
            </header>
            <form onSubmit={onSubmit} className="admin-form">
              <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #eee' }}>
                <button type="button" onClick={() => setFormLang('uz')} className={`admin-chip ${formLang === 'uz' ? 'is-active' : ''}`} style={{ padding: '8px 20px' }}>UZBEK (Asosiy)</button>
                <button type="button" onClick={() => setFormLang('ru')} className={`admin-chip ${formLang === 'ru' ? 'is-active' : ''}`} style={{ padding: '8px 20px' }}>RUSSIAN</button>
                <button type="button" onClick={() => setFormLang('en')} className={`admin-chip ${formLang === 'en' ? 'is-active' : ''}`} style={{ padding: '8px 20px' }}>ENGLISH</button>
              </div>

              <div className="admin-form-grid">

                <label className="admin-field">
                  <span className="admin-field-label">Zal</span>
                  <select 
                    value={formLang === 'uz' ? form.venue : formLang === 'ru' ? form.venue_ru : form.venue_en} 
                    onChange={(e) => {
                      if (formLang === 'uz') setForm({ ...form, venue: e.target.value });
                      else if (formLang === 'ru') setForm({ ...form, venue_ru: e.target.value });
                      else setForm({ ...form, venue_en: e.target.value });
                    }}
                  >
                    {HALLS.map((h) => <option key={h} value={h}>{h}</option>)}
                  </select>
                </label>

                <label className="admin-field">
                  <span className="admin-field-label">Sana</span>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                  />
                </label>

                <label className="admin-field">
                  <span className="admin-field-label">Vaqt</span>
                  <input
                    type="time"
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                  />
                </label>

                <label className="admin-field">
                  <span className="admin-field-label">Narx</span>
                  <input
                    type="text"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    placeholder="50,000 UZS"
                    disabled={form.free}
                  />
                </label>

                <label className="admin-field admin-field-full admin-checkbox">
                  <input
                    type="checkbox"
                    checked={form.free}
                    onChange={(e) => setForm({ ...form, free: e.target.checked, price: e.target.checked ? '' : form.price })}
                  />
                  <span>Bepul kirish</span>
                </label>

                <label className="admin-field admin-field-full">
                  <span className="admin-field-label">Bilet havolasi (ixtiyoriy)</span>
                  <input
                    type="url"
                    value={form.ticket_url}
                    onChange={(e) => setForm({ ...form, ticket_url: e.target.value })}
                    placeholder="https://iticket.uz/event/... (boʻsh qoldirsangiz iticket.uz bosh sahifasiga olib boradi)"
                    disabled={form.free}
                  />
                  <span className="admin-cell-sub" style={{ marginTop: 4 }}>
                    Agar boʻsh boʻlsa — &quot;BILET OLISH&quot; tugmasi <strong>iticket.uz</strong> bosh sahifasiga olib boradi.
                  </span>
                </label>

                <label className="admin-field admin-field-full">
                  <span className="admin-field-label">Teglar (vergul bilan)</span>
                  <input
                    type="text"
                    value={form.tags}
                    onChange={(e) => setForm({ ...form, tags: e.target.value })}
                    placeholder="Konsert, Simfonik, Klassika"
                  />
                </label>


                <label className="admin-field admin-field-full">
                  <span className="admin-field-label">Afisha Rasmlari ({formLang.toUpperCase()}) (Birinchisi asosiy)</span>
                  {formLang === 'uz' && (
                    <ImageGalleryEditor
                      images={form.images || []}
                      onChange={(images) => setForm({ ...form, images })}
                      folder="posters"
                    />
                  )}
                  {formLang === 'ru' && (
                    <ImageGalleryEditor
                      images={form.images_ru || []}
                      onChange={(images) => setForm({ ...form, images_ru: images })}
                      folder="posters"
                    />
                  )}
                  {formLang === 'en' && (
                    <ImageGalleryEditor
                      images={form.images_en || []}
                      onChange={(images) => setForm({ ...form, images_en: images })}
                      folder="posters"
                    />
                  )}
                </label>

                <label className="admin-field admin-field-full">
                  <span className="admin-field-label">Video (ixtiyoriy)</span>
                  <div className="admin-image-pick">
                    <input type="file" accept="video/*" onChange={onPickVideo} disabled={uploadingImage} />
                    <input
                      type="url"
                      value={form.video || ''}
                      onChange={(e) => setForm({ ...form, video: e.target.value })}
                      placeholder="yoki video URL (mp4/webm) yoki YouTube havolasi"
                    />
                  </div>
                  {form.video && isVideoUrl(form.video) && (
                    <div className="admin-image-preview">
                      <video src={form.video} controls style={{ maxWidth: '100%', maxHeight: 200, borderRadius: 8 }} />
                      <button type="button" className="admin-btn admin-btn-ghost" onClick={() => setForm({ ...form, video: '' })}>
                        Olib tashlash
                      </button>
                    </div>
                  )}
                  {form.video && !isVideoUrl(form.video) && (
                    <div className="admin-image-preview">
                      <span className="admin-cell-sub" style={{ wordBreak: 'break-all' }}>{form.video}</span>
                      <button type="button" className="admin-btn admin-btn-ghost" onClick={() => setForm({ ...form, video: '' })}>
                        Olib tashlash
                      </button>
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
                <button type="button" className="admin-btn admin-btn-ghost" onClick={() => setShowPreview(true)} disabled={submitting}>
                  <Eye size={14} /> Oldindan koʻrish
                </button>
                <button type="submit" className="admin-btn admin-btn-primary" disabled={submitting || uploadingImage}>
                  {submitting ? 'Saqlanmoqda…' : (editing === 'new' ? 'Joylash' : 'Saqlash')}
                </button>
              </footer>
            </form>
          </div>
        </div>
      )}

      {showPreview && (
        <PreviewModal kind="poster" data={form} onClose={() => setShowPreview(false)} />
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
              <p><strong>{confirmDelete.title}</strong> afishasini oʻchirishni xohlaysizmi?</p>
            </div>
            <footer className="admin-form-foot">
              <button type="button" className="admin-btn admin-btn-ghost" onClick={() => setConfirmDelete(null)}>Bekor qilish</button>
              <button type="button" className="admin-btn admin-btn-danger" onClick={doDelete}>
                Oʻchirish
              </button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}
