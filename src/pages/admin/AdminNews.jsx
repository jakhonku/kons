import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Plus, Edit3, Trash2, Search, X, Star, StarOff, Image as ImageIcon, Loader2, Eye } from 'lucide-react';
import { useAdminNews } from '../../hooks/useAdminStorage';
import { uploadVideo, isVideoUrl } from '../../lib/supabase';
import ImageGalleryEditor from '../../components/admin/ImageGalleryEditor';
import PreviewModal from '../../components/admin/PreviewModal';

const CATEGORIES = ['Voqealar', 'Mukofotlar', "Ta'lim", 'Xalqaro', 'Eʼlonlar'];

const EMPTY = {
  title: '',
  category: 'Voqealar',
  date: '',
  excerpt: '',
  body: '',
  image: '',
  images: [],
  video: '',
  featured: false,
};

export default function AdminNews() {
  const { items, loading, error, add, update, remove } = useAdminNews();
  const [params, setParams] = useSearchParams();

  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('Barchasi');
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [formError, setFormError] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    if (params.get('new') === '1') {
      openNew();
      params.delete('new');
      setParams(params, { replace: true });
    }
  }, [params, setParams]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((n) => {
      const matchesCat = filter === 'Barchasi' || n.category === filter;
      const matchesQ = !q || (n.title || '').toLowerCase().includes(q) || (n.excerpt || '').toLowerCase().includes(q);
      return matchesCat && matchesQ;
    });
  }, [items, query, filter]);

  function openNew() {
    setEditing('new');
    setForm({ ...EMPTY, date: new Date().toISOString().slice(0, 10) });
    setFormError('');
  }

  function openEdit(item) {
    setEditing(item.id);
    const imgs = Array.isArray(item.images) ? item.images.filter(Boolean) : [];
    if (imgs.length === 0 && item.image) imgs.push(item.image);
    setForm({
      title: item.title || '',
      category: item.category || 'Voqealar',
      date: item.date || '',
      excerpt: item.excerpt || '',
      body: item.body || '',
      image: item.image || '',
      images: imgs,
      video: item.video || '',
      featured: !!item.featured,
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
      category: form.category,
      date: form.date || null,
      excerpt: form.excerpt,
      body: form.body,
      image: form.images?.[0] || form.image || '',
      images: form.images || [],
      video: form.video,
      featured: form.featured,
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
    const { url, error: upErr } = await uploadVideo(file, 'news-videos');
    setUploadingImage(false);
    e.target.value = '';
    if (upErr) {
      setFormError(`Video yuklanmadi: ${upErr.message}`);
      return;
    }
    setForm((f) => ({ ...f, video: url }));
  }

  async function toggleFeatured(item) {
    await update(item.id, { featured: !item.featured });
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
          <h1 className="admin-page-title">Yangiliklar</h1>
          <p className="admin-page-sub">Saytdagi yangiliklar boshqaruvi</p>
        </div>
        <button type="button" className="admin-btn admin-btn-primary" onClick={openNew}>
          <Plus size={16} /> Yangi qoʻshish
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
            placeholder="Sarlavha boʻyicha qidirish..."
          />
        </div>
        <div className="admin-filter-chips">
          {['Barchasi', ...CATEGORIES].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={`admin-chip${filter === c ? ' is-active' : ''}`}
            >
              {c}
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
          <h3>Yangilik topilmadi</h3>
          <p>{items.length === 0 ? 'Birinchi yangilikni qoʻshing' : 'Filtrga mos yangilik yoʻq'}</p>
          {items.length === 0 && (
            <button type="button" className="admin-btn admin-btn-primary" onClick={openNew}>
              <Plus size={16} /> Yangi qoʻshish
            </button>
          )}
        </div>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th style={{ width: 80 }}>Rasm</th>
                <th>Sarlavha</th>
                <th>Kategoriya</th>
                <th>Sana</th>
                <th>Asosiy</th>
                <th style={{ width: 120, textAlign: 'right' }}>Amallar</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((n) => (
                <tr key={n.id}>
                  <td>
                    <div className="admin-thumb">
                      {n.image ? <img src={n.image} alt="" /> : <ImageIcon size={16} />}
                    </div>
                  </td>
                  <td>
                    <div className="admin-cell-title">{n.title}</div>
                    {n.excerpt && <div className="admin-cell-sub">{n.excerpt.slice(0, 80)}{n.excerpt.length > 80 ? '…' : ''}</div>}
                  </td>
                  <td><span className="admin-pill">{n.category}</span></td>
                  <td>{n.date || '—'}</td>
                  <td>
                    <button
                      type="button"
                      className="admin-icon-btn"
                      onClick={() => toggleFeatured(n)}
                      title={n.featured ? 'Asosiyni olib tashlash' : 'Asosiy qilish'}
                    >
                      {n.featured ? <Star size={16} fill="#c9a84c" stroke="#c9a84c" /> : <StarOff size={16} />}
                    </button>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <button type="button" className="admin-icon-btn" onClick={() => openEdit(n)} title="Tahrirlash">
                      <Edit3 size={15} />
                    </button>
                    <button type="button" className="admin-icon-btn is-danger" onClick={() => setConfirmDelete(n)} title="Oʻchirish">
                      <Trash2 size={15} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {editing && (
        <div className="admin-modal" role="dialog" aria-modal="true">
          <div className="admin-modal-backdrop" onClick={() => !submitting && close()} />
          <div className="admin-modal-card">
            <header className="admin-modal-head">
              <h2>{editing === 'new' ? 'Yangi yangilik' : 'Yangilikni tahrirlash'}</h2>
              <button type="button" className="admin-icon-btn" onClick={close} disabled={submitting}><X size={18} /></button>
            </header>
            <form onSubmit={onSubmit} className="admin-form">
              <div className="admin-form-grid">
                <label className="admin-field admin-field-full">
                  <span className="admin-field-label">Sarlavha *</span>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    required
                    placeholder="Yangilik sarlavhasi"
                  />
                </label>

                <label className="admin-field">
                  <span className="admin-field-label">Kategoriya</span>
                  <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
                    {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
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

                <label className="admin-field admin-field-full">
                  <span className="admin-field-label">Qisqa tavsif</span>
                  <textarea
                    rows={2}
                    value={form.excerpt}
                    onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                    placeholder="Roʻyxatda koʻriniadigan qisqa matn"
                  />
                </label>

                <label className="admin-field admin-field-full">
                  <span className="admin-field-label">Toʻliq matn</span>
                  <textarea
                    rows={6}
                    value={form.body}
                    onChange={(e) => setForm({ ...form, body: e.target.value })}
                    placeholder="Yangilikning toʻliq matni"
                  />
                </label>

                <label className="admin-field admin-field-full">
                  <span className="admin-field-label">Rasmlar (10 tagacha, tartib admin tomonidan)</span>
                  <ImageGalleryEditor
                    images={form.images || []}
                    onChange={(images) => setForm({ ...form, images })}
                    folder="news"
                  />
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

                <label className="admin-field admin-field-full admin-checkbox">
                  <input
                    type="checkbox"
                    checked={form.featured}
                    onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                  />
                  <span>Asosiy yangilik (sahifa yuqorisida koʻrinadi)</span>
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
        <PreviewModal kind="news" data={form} onClose={() => setShowPreview(false)} />
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
              <p><strong>{confirmDelete.title}</strong> yangiligini oʻchirishni xohlaysizmi? Bu amalni bekor qilib boʻlmaydi.</p>
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
