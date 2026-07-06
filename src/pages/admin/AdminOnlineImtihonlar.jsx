import { useState, useMemo } from 'react';
import {
  Plus, Edit3, Trash2, Search, X, Video, Link as LinkIcon,
  ChevronUp, ChevronDown, Loader2, Calendar, Clock, CheckCircle,
  AlertCircle, Clock3,
} from 'lucide-react';
import { useAdminOnlineImtihonlar } from '../../hooks/useAdminStorage';

const HOLAT_OPTIONS = [
  { value: 'kutilmoqda', label: 'Kutilmoqda', color: '#f59e0b' },
  { value: 'faol',       label: 'Faol (hozir)',   color: '#22c55e' },
  { value: 'yakunlangan', label: 'Yakunlangan',  color: '#94a3b8' },
];

const EMPTY = {
  nomi: '',
  nomi_ru: '',
  nomi_en: '',
  tavsif: '',
  tavsif_ru: '',
  tavsif_en: '',
  zoom_link: '',
  sana: '',
  vaqt: '',
  holat: 'kutilmoqda',
  sort_order: 0,
};

function HolatBadge({ holat }) {
  const opt = HOLAT_OPTIONS.find((o) => o.value === holat) || HOLAT_OPTIONS[0];
  const Icon =
    holat === 'faol'
      ? CheckCircle
      : holat === 'yakunlangan'
      ? AlertCircle
      : Clock3;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        padding: '2px 10px',
        borderRadius: 99,
        fontSize: '0.72rem',
        fontWeight: 600,
        background: opt.color + '20',
        color: opt.color,
        border: `1px solid ${opt.color}40`,
      }}
    >
      <Icon size={12} strokeWidth={2} />
      {opt.label}
    </span>
  );
}

export default function AdminOnlineImtihonlar() {
  const { items, loading, error, add, update, remove } =
    useAdminOnlineImtihonlar();

  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [query, setQuery] = useState('');
  const [filterHolat, setFilterHolat] = useState('Barchasi');
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [formLang, setFormLang] = useState('uz');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      const matchHolat =
        filterHolat === 'Barchasi' || item.holat === filterHolat;
      const matchQ =
        !q ||
        (item.nomi || '').toLowerCase().includes(q) ||
        (item.tavsif || '').toLowerCase().includes(q);
      return matchHolat && matchQ;
    });
  }, [items, query, filterHolat]);

  function openNew() {
    setEditing('new');
    setForm({
      ...EMPTY,
      sana: new Date().toISOString().slice(0, 10),
      sort_order: items.length,
    });
    setFormError('');
    setFormLang('uz');
  }

  function openEdit(item) {
    setEditing(item.id);
    setForm({
      nomi: item.nomi || '',
      nomi_ru: item.nomi_ru || '',
      nomi_en: item.nomi_en || '',
      tavsif: item.tavsif || '',
      tavsif_ru: item.tavsif_ru || '',
      tavsif_en: item.tavsif_en || '',
      zoom_link: item.zoom_link || '',
      sana: item.sana || '',
      vaqt: item.vaqt || '',
      holat: item.holat || 'kutilmoqda',
      sort_order: item.sort_order ?? 0,
    });
    setFormError('');
    setFormLang('uz');
  }

  function closeForm() {
    setEditing(null);
    setForm(EMPTY);
    setFormError('');
  }

  function setField(key, val) {
    setForm((f) => ({ ...f, [key]: val }));
  }

  async function moveItem(item, dir) {
    const sorted = [...items].sort((a, b) => a.sort_order - b.sort_order);
    const idx = sorted.findIndex((x) => x.id === item.id);
    const swapIdx = idx + dir;
    if (swapIdx < 0 || swapIdx >= sorted.length) return;
    const swapItem = sorted[swapIdx];
    await Promise.all([
      update(item.id, { sort_order: swapItem.sort_order }),
      update(swapItem.id, { sort_order: item.sort_order }),
    ]);
  }

  async function handleSave(e) {
    e.preventDefault();
    if (!form.nomi.trim()) {
      setFormError("Imtihon nomi (O'zbekcha) majburiy.");
      return;
    }
    if (!form.zoom_link.trim()) {
      setFormError('Zoom havola majburiy.');
      return;
    }
    setSubmitting(true);
    setFormError('');

    const payload = {
      nomi: form.nomi.trim(),
      nomi_ru: form.nomi_ru.trim() || null,
      nomi_en: form.nomi_en.trim() || null,
      tavsif: form.tavsif.trim() || null,
      tavsif_ru: form.tavsif_ru.trim() || null,
      tavsif_en: form.tavsif_en.trim() || null,
      zoom_link: form.zoom_link.trim(),
      sana: form.sana || null,
      vaqt: form.vaqt.trim() || null,
      holat: form.holat,
      sort_order: Number(form.sort_order) || 0,
    };

    const res =
      editing === 'new'
        ? await add(payload)
        : await update(editing, payload);

    setSubmitting(false);
    if (!res.ok) {
      setFormError(res.error || 'Xatolik yuz berdi.');
      return;
    }
    closeForm();
  }

  async function handleDelete(id) {
    await remove(id);
    setConfirmDelete(null);
  }

  const sortedItems = [...filtered].sort((a, b) => a.sort_order - b.sort_order);

  return (
    <div className="admin-page">
      <div className="admin-page-head">
        <div>
          <h1 className="admin-page-title">Online imtihonlar</h1>
          <p className="admin-page-sub">
            Zoom havolalari va imtihon ma'lumotlarini boshqaring
          </p>
        </div>
        <button className="admin-btn-primary" onClick={openNew}>
          <Plus size={16} strokeWidth={2} /> Yangi imtihon
        </button>
      </div>

      {error && (
        <div className="admin-error-banner">{error}</div>
      )}

      <div className="admin-toolbar">
        <div className="admin-search-wrap">
          <Search size={16} className="admin-search-icon" />
          <input
            className="admin-search"
            placeholder="Imtihon nomini qidiring…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button className="admin-search-clear" onClick={() => setQuery('')}>
              <X size={14} />
            </button>
          )}
        </div>
        <div className="admin-filters">
          {['Barchasi', ...HOLAT_OPTIONS.map((o) => o.value)].map((h) => (
            <button
              key={h}
              className={`admin-filter-btn${filterHolat === h ? ' is-active' : ''}`}
              onClick={() => setFilterHolat(h)}
            >
              {h === 'Barchasi'
                ? 'Barchasi'
                : HOLAT_OPTIONS.find((o) => o.value === h)?.label || h}
            </button>
          ))}
        </div>
      </div>

      {/* Form modal */}
      {editing !== null && (
        <div className="admin-modal-overlay" onClick={closeForm}>
          <div
            className="admin-modal"
            style={{ maxWidth: 640 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="admin-modal-head">
              <h2 className="admin-modal-title">
                {editing === 'new' ? 'Yangi imtihon' : "Imtihonni tahrirlash"}
              </h2>
              <button className="admin-modal-close" onClick={closeForm}>
                <X size={20} />
              </button>
            </div>

            <div className="admin-lang-tabs" style={{ margin: '0 0 20px' }}>
              {['uz', 'ru', 'en'].map((l) => (
                <button
                  key={l}
                  className={`admin-lang-tab${formLang === l ? ' is-active' : ''}`}
                  onClick={() => setFormLang(l)}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <form onSubmit={handleSave} className="admin-form">
              {formLang === 'uz' && (
                <div className="admin-form-group">
                  <label className="admin-form-label">
                    Imtihon nomi (O'zbekcha) <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    className="admin-form-input"
                    value={form.nomi}
                    onChange={(e) => setField('nomi', e.target.value)}
                    placeholder="Masalan: Fortepiano ixtisosligi imtihoni"
                  />
                </div>
              )}
              {formLang === 'ru' && (
                <div className="admin-form-group">
                  <label className="admin-form-label">Название (Русский)</label>
                  <input
                    className="admin-form-input"
                    value={form.nomi_ru}
                    onChange={(e) => setField('nomi_ru', e.target.value)}
                    placeholder="Экзамен по специальности фортепиано"
                  />
                </div>
              )}
              {formLang === 'en' && (
                <div className="admin-form-group">
                  <label className="admin-form-label">Name (English)</label>
                  <input
                    className="admin-form-input"
                    value={form.nomi_en}
                    onChange={(e) => setField('nomi_en', e.target.value)}
                    placeholder="Piano Specialty Exam"
                  />
                </div>
              )}

              {formLang === 'uz' && (
                <div className="admin-form-group">
                  <label className="admin-form-label">Tavsif (O'zbekcha)</label>
                  <textarea
                    className="admin-form-input"
                    rows={3}
                    value={form.tavsif}
                    onChange={(e) => setField('tavsif', e.target.value)}
                    placeholder="Imtihon haqida qo'shimcha ma'lumot…"
                  />
                </div>
              )}
              {formLang === 'ru' && (
                <div className="admin-form-group">
                  <label className="admin-form-label">Описание (Русский)</label>
                  <textarea
                    className="admin-form-input"
                    rows={3}
                    value={form.tavsif_ru}
                    onChange={(e) => setField('tavsif_ru', e.target.value)}
                  />
                </div>
              )}
              {formLang === 'en' && (
                <div className="admin-form-group">
                  <label className="admin-form-label">Description (English)</label>
                  <textarea
                    className="admin-form-input"
                    rows={3}
                    value={form.tavsif_en}
                    onChange={(e) => setField('tavsif_en', e.target.value)}
                  />
                </div>
              )}

              <div className="admin-form-group">
                <label className="admin-form-label">
                  Zoom havola <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  className="admin-form-input"
                  type="url"
                  value={form.zoom_link}
                  onChange={(e) => setField('zoom_link', e.target.value)}
                  placeholder="https://us05web.zoom.us/j/..."
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div className="admin-form-group" style={{ margin: 0 }}>
                  <label className="admin-form-label">Sana</label>
                  <input
                    className="admin-form-input"
                    type="date"
                    value={form.sana}
                    onChange={(e) => setField('sana', e.target.value)}
                  />
                </div>
                <div className="admin-form-group" style={{ margin: 0 }}>
                  <label className="admin-form-label">Vaqt</label>
                  <input
                    className="admin-form-input"
                    type="time"
                    value={form.vaqt}
                    onChange={(e) => setField('vaqt', e.target.value)}
                  />
                </div>
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Holat</label>
                <select
                  className="admin-form-input"
                  value={form.holat}
                  onChange={(e) => setField('holat', e.target.value)}
                >
                  {HOLAT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Tartib raqami</label>
                <input
                  className="admin-form-input"
                  type="number"
                  min={0}
                  value={form.sort_order}
                  onChange={(e) => setField('sort_order', e.target.value)}
                />
              </div>

              {formError && (
                <div className="admin-form-error">{formError}</div>
              )}

              <div className="admin-form-actions">
                <button
                  type="button"
                  className="admin-btn-outline"
                  onClick={closeForm}
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="admin-btn-primary"
                  disabled={submitting}
                >
                  {submitting ? (
                    <Loader2 size={16} className="admin-spin" />
                  ) : (
                    'Saqlash'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Confirm delete */}
      {confirmDelete && (
        <div className="admin-modal-overlay" onClick={() => setConfirmDelete(null)}>
          <div
            className="admin-modal"
            style={{ maxWidth: 400 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="admin-modal-head">
              <h2 className="admin-modal-title">O'chirishni tasdiqlash</h2>
              <button className="admin-modal-close" onClick={() => setConfirmDelete(null)}>
                <X size={20} />
              </button>
            </div>
            <p style={{ marginBottom: 24, color: '#555' }}>
              <strong>«{confirmDelete.nomi}»</strong> imtihonini o'chirmoqchimisiz?
              Bu amalni qaytarib bo'lmaydi.
            </p>
            <div className="admin-form-actions">
              <button
                className="admin-btn-outline"
                onClick={() => setConfirmDelete(null)}
              >
                Bekor qilish
              </button>
              <button
                className="admin-btn-danger"
                onClick={() => handleDelete(confirmDelete.id)}
              >
                O'chirish
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Table */}
      {loading ? (
        <div className="admin-loading">
          <Loader2 size={28} className="admin-spin" />
        </div>
      ) : sortedItems.length === 0 ? (
        <div className="admin-empty-state">
          <Video size={40} strokeWidth={1.2} />
          <p>
            {query || filterHolat !== 'Barchasi'
              ? 'Hech narsa topilmadi'
              : "Hali online imtihon qo'shilmagan"}
          </p>
          {!query && filterHolat === 'Barchasi' && (
            <button className="admin-btn-primary" onClick={openNew}>
              <Plus size={15} /> Birinchi imtihonni qo'shing
            </button>
          )}
        </div>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th style={{ width: 60 }}>Tartib</th>
                <th>Imtihon nomi</th>
                <th>Sana / Vaqt</th>
                <th>Holat</th>
                <th>Zoom havola</th>
                <th style={{ width: 120 }}>Amallar</th>
              </tr>
            </thead>
            <tbody>
              {sortedItems.map((item, idx) => (
                <tr key={item.id}>
                  <td>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
                      <button
                        className="admin-icon-btn"
                        title="Yuqoriga"
                        onClick={() => moveItem(item, -1)}
                        disabled={idx === 0}
                      >
                        <ChevronUp size={14} />
                      </button>
                      <span style={{ fontSize: '0.8rem', color: '#888' }}>
                        {item.sort_order}
                      </span>
                      <button
                        className="admin-icon-btn"
                        title="Pastga"
                        onClick={() => moveItem(item, 1)}
                        disabled={idx === sortedItems.length - 1}
                      >
                        <ChevronDown size={14} />
                      </button>
                    </div>
                  </td>
                  <td>
                    <div style={{ fontWeight: 500, color: 'var(--navy)' }}>
                      {item.nomi}
                    </div>
                    {item.tavsif && (
                      <div
                        style={{
                          fontSize: '0.78rem',
                          color: '#777',
                          marginTop: 2,
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          maxWidth: 260,
                        }}
                      >
                        {item.tavsif}
                      </div>
                    )}
                  </td>
                  <td>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      {item.sana && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.83rem' }}>
                          <Calendar size={13} strokeWidth={1.8} style={{ color: '#888' }} />
                          {new Date(item.sana).toLocaleDateString('uz-UZ', {
                            year: 'numeric', month: 'short', day: '2-digit',
                          })}
                        </span>
                      )}
                      {item.vaqt && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.83rem' }}>
                          <Clock size={13} strokeWidth={1.8} style={{ color: '#888' }} />
                          {item.vaqt}
                        </span>
                      )}
                      {!item.sana && !item.vaqt && (
                        <span style={{ color: '#bbb', fontSize: '0.8rem' }}>—</span>
                      )}
                    </div>
                  </td>
                  <td>
                    <HolatBadge holat={item.holat} />
                  </td>
                  <td>
                    <a
                      href={item.zoom_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 5,
                        fontSize: '0.78rem',
                        color: '#2563eb',
                        textDecoration: 'none',
                        maxWidth: 160,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                      title={item.zoom_link}
                    >
                      <LinkIcon size={12} />
                      Zoom
                    </a>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button
                        className="admin-icon-btn"
                        title="Tahrirlash"
                        onClick={() => openEdit(item)}
                      >
                        <Edit3 size={15} />
                      </button>
                      <button
                        className="admin-icon-btn admin-icon-btn-danger"
                        title="O'chirish"
                        onClick={() => setConfirmDelete(item)}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
