import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Plus, Edit3, Trash2, Search, X, Image as ImageIcon, Images, Calendar, Loader2 } from 'lucide-react';
import { useAdminGallery } from '../../hooks/useAdminStorage';
import ImageGalleryEditor from '../../components/admin/ImageGalleryEditor';

const MAX_ALBUM_IMAGES = 60;

const EMPTY = {
  title: '',
  title_ru: '',
  title_en: '',
  category: 'Umumiy',
  album_date: '',
  images: [],
};

export default function AdminGallery() {
  const { items, loading, error, add, update, remove } = useAdminGallery();
  const [params, setParams] = useSearchParams();

  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('Barchasi');
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [submitting, setSubmitting] = useState(false);
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
    () => ['Barchasi', ...Array.from(new Set(items.map((a) => a.category).filter(Boolean)))],
    [items]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((a) => {
      const matchesCat = filter === 'Barchasi' || a.category === filter;
      const matchesQ = !q || (a.title || '').toLowerCase().includes(q);
      return matchesCat && matchesQ;
    });
  }, [items, query, filter]);

  function openNew() {
    setEditing('new');
    setForm({ ...EMPTY, album_date: new Date().toISOString().slice(0, 10) });
    setFormLang('uz');
    setFormError('');
  }

  function openEdit(item) {
    setEditing(item.id);
    setForm({
      title: item.title || '',
      title_ru: item.title_ru || '',
      title_en: item.title_en || '',
      category: item.category || 'Umumiy',
      album_date: item.album_date || '',
      images: Array.isArray(item.images) ? item.images.filter(Boolean) : [],
    });
    setFormLang('uz');
    setFormError('');
  }

  function close() {
    setEditing(null);
    setForm(EMPTY);
    setFormError('');
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (submitting) return;
    if (!form.title.trim()) {
      setFormLang('uz');
      setFormError('Albom nomi (UZBEK) majburiy — iltimos kiriting.');
      return;
    }
    if (!form.images || form.images.length === 0) {
      setFormError('Kamida bitta rasm yuklang.');
      return;
    }
    setSubmitting(true);
    setFormError('');
    const payload = {
      title: form.title,
      title_ru: form.title_ru,
      title_en: form.title_en,
      category: form.category || 'Umumiy',
      album_date: form.album_date || null,
      cover: form.images[0] || '',
      images: form.images,
    };
    const result = editing === 'new' ? await add(payload) : await update(editing, payload);
    setSubmitting(false);
    if (!result.ok) {
      setFormError(result.error || 'Saqlashda xatolik');
      return;
    }
    close();
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
          <h1 className="admin-page-title">Foto galereya</h1>
          <p className="admin-page-sub">Galereya albomlari — rasmlarni albomlarga ajratib joylang</p>
        </div>
        <button type="button" className="admin-btn admin-btn-primary" onClick={openNew}>
          <Plus size={16} /> Albom qoʻshish
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
            placeholder="Albom nomi boʻyicha qidirish..."
          />
        </div>
        {categories.length > 1 && (
          <div className="admin-filter-chips">
            {categories.map((c) => (
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
        )}
      </div>

      {loading ? (
        <div className="admin-empty-block">
          <Loader2 size={28} className="admin-spin" />
          <h3>Yuklanmoqda…</h3>
        </div>
      ) : filtered.length === 0 ? (
        <div className="admin-empty-block">
          <Images size={32} strokeWidth={1.4} />
          <h3>Albom topilmadi</h3>
          <p>{items.length === 0 ? 'Birinchi albomni qoʻshing' : 'Filtrga mos albom yoʻq'}</p>
          {items.length === 0 && (
            <button type="button" className="admin-btn admin-btn-primary" onClick={openNew}>
              <Plus size={16} /> Albom qoʻshish
            </button>
          )}
        </div>
      ) : (
        <div className="admin-poster-grid">
          {filtered.map((a) => (
            <article key={a.id} className="admin-poster-card">
              <div className="admin-poster-image">
                {a.cover ? (
                  <img src={a.cover} alt={a.title} />
                ) : (
                  <div className="admin-poster-placeholder"><ImageIcon size={24} /></div>
                )}
                <span className="admin-poster-badge">{(a.images?.length || 0)} ta rasm</span>
              </div>
              <div className="admin-poster-body">
                <h3>{a.title}</h3>
                <div className="admin-poster-meta">
                  <span><ImageIcon size={12} /> {a.category || 'Umumiy'}</span>
                  {a.album_date && <span><Calendar size={12} /> {a.album_date}</span>}
                </div>
              </div>
              <div className="admin-poster-actions">
                <button type="button" className="admin-icon-btn" onClick={() => openEdit(a)} title="Tahrirlash">
                  <Edit3 size={15} />
                </button>
                <button type="button" className="admin-icon-btn is-danger" onClick={() => setConfirmDelete(a)} title="Oʻchirish">
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
              <h2>{editing === 'new' ? 'Yangi albom' : 'Albomni tahrirlash'}</h2>
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
                  <span className="admin-field-label">Albom nomi ({formLang.toUpperCase()}){formLang === 'uz' ? ' *' : ''}</span>
                  <input
                    type="text"
                    value={formLang === 'uz' ? form.title : formLang === 'ru' ? form.title_ru : form.title_en}
                    onChange={(e) => {
                      if (formLang === 'uz') setForm({ ...form, title: e.target.value });
                      else if (formLang === 'ru') setForm({ ...form, title_ru: e.target.value });
                      else setForm({ ...form, title_en: e.target.value });
                    }}
                    placeholder="Masalan: «Navroʻz sadolari» festivali"
                  />
                </label>

                <label className="admin-field">
                  <span className="admin-field-label">Kategoriya</span>
                  <input
                    type="text"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    placeholder="Tadbirlar, Konsert zali, Bino..."
                  />
                </label>

                <label className="admin-field">
                  <span className="admin-field-label">Sana</span>
                  <input
                    type="date"
                    value={form.album_date}
                    onChange={(e) => setForm({ ...form, album_date: e.target.value })}
                  />
                </label>

                <label className="admin-field admin-field-full">
                  <span className="admin-field-label">Albom rasmlari (birinchisi muqova) *</span>
                  <ImageGalleryEditor
                    images={form.images || []}
                    onChange={(images) => setForm({ ...form, images })}
                    folder="gallery"
                    max={MAX_ALBUM_IMAGES}
                  />
                </label>

                {formError && (
                  <div className="admin-field-full">
                    <div className="admin-login-error">{formError}</div>
                  </div>
                )}
              </div>

              <footer className="admin-form-foot">
                <button type="button" className="admin-btn admin-btn-ghost" onClick={close} disabled={submitting}>Bekor qilish</button>
                <button type="submit" className="admin-btn admin-btn-primary" disabled={submitting}>
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
              <p><strong>{confirmDelete.title}</strong> albomini oʻchirishni xohlaysizmi?</p>
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
