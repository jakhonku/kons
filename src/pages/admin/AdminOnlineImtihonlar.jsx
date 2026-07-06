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
        <button type="button" className="admin-btn admin-btn-primary" onClick={openNew}>
          <Plus size={16} /> Yangi imtihon
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
            placeholder="Imtihon nomini qidiring…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="admin-filter-chips">
          {['Barchasi', ...HOLAT_OPTIONS.map((o) => o.value)].map((h) => (
            <button
              key={h}
              type="button"
              className={`admin-chip${filterHolat === h ? ' is-active' : ''}`}
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
        <div className="admin-modal" role="dialog" aria-modal="true">
          <div className="admin-modal-backdrop" onClick={closeForm} />
          <div className="admin-modal-card">
            <header className="admin-modal-head">
              <h2>
                {editing === 'new' ? 'Yangi imtihon' : "Imtihonni tahrirlash"}
              </h2>
              <button type="button" className="admin-icon-btn" onClick={closeForm}>
                <X size={18} />
              </button>
            </header>

            <form onSubmit={handleSave} className="admin-form">
              <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #eee' }}>
                {['uz', 'ru', 'en'].map((l) => (
                  <button
                    key={l}
                    type="button"
                    className={`admin-chip${formLang === l ? ' is-active' : ''}`}
                    onClick={() => setFormLang(l)}
                    style={{ padding: '8px 20px' }}
                  >
                    {l === 'uz' ? 'UZBEK (Asosiy)' : l === 'ru' ? 'RUSSIAN' : 'ENGLISH'}
                  </button>
                ))}
              </div>

              <div className="admin-form-grid">
                {formLang === 'uz' && (
                  <label className="admin-field admin-field-full">
                    <span className="admin-field-label">
                      Imtihon nomi (O'zbekcha) <span style={{ color: 'red' }}>*</span>
                    </span>
                    <input
                      type="text"
                      value={form.nomi}
                      onChange={(e) => setField('nomi', e.target.value)}
                      placeholder="Masalan: Fortepiano ixtisosligi imtihoni"
                      required
                    />
                  </label>
                )}
                {formLang === 'ru' && (
                  <label className="admin-field admin-field-full">
                    <span className="admin-field-label">Название (Русский)</span>
                    <input
                      type="text"
                      value={form.nomi_ru}
                      onChange={(e) => setField('nomi_ru', e.target.value)}
                      placeholder="Экзамен по специальности фортепиано"
                    />
                  </label>
                )}
                {formLang === 'en' && (
                  <label className="admin-field admin-field-full">
                    <span className="admin-field-label">Name (English)</span>
                    <input
                      type="text"
                      value={form.nomi_en}
                      onChange={(e) => setField('nomi_en', e.target.value)}
                      placeholder="Piano Specialty Exam"
                    />
                  </label>
                )}

                {formLang === 'uz' && (
                  <label className="admin-field admin-field-full">
                    <span className="admin-field-label">Tavsif (O'zbekcha)</span>
                    <textarea
                      rows={3}
                      value={form.tavsif}
                      onChange={(e) => setField('tavsif', e.target.value)}
                      placeholder="Imtihon haqida qo'shimcha ma'lumot…"
                    />
                  </label>
                )}
                {formLang === 'ru' && (
                  <label className="admin-field admin-field-full">
                    <span className="admin-field-label">Описание (Русский)</span>
                    <textarea
                      rows={3}
                      value={form.tavsif_ru}
                      onChange={(e) => setField('tavsif_ru', e.target.value)}
                    />
                  </label>
                )}
                {formLang === 'en' && (
                  <label className="admin-field admin-field-full">
                    <span className="admin-field-label">Description (English)</span>
                    <textarea
                      rows={3}
                      value={form.tavsif_en}
                      onChange={(e) => setField('tavsif_en', e.target.value)}
                    />
                  </label>
                )}

                <label className="admin-field admin-field-full">
                  <span className="admin-field-label">
                    Zoom havola <span style={{ color: 'red' }}>*</span>
                  </span>
                  <input
                    type="url"
                    value={form.zoom_link}
                    onChange={(e) => setField('zoom_link', e.target.value)}
                    placeholder="https://us05web.zoom.us/j/..."
                    required
                  />
                </label>

                <label className="admin-field">
                  <span className="admin-field-label">Sana</span>
                  <input
                    type="date"
                    value={form.sana}
                    onChange={(e) => setField('sana', e.target.value)}
                  />
                </label>

                <label className="admin-field">
                  <span className="admin-field-label">Vaqt</span>
                  <input
                    type="time"
                    value={form.vaqt}
                    onChange={(e) => setField('vaqt', e.target.value)}
                  />
                </label>

                <label className="admin-field">
                  <span className="admin-field-label">Holat</span>
                  <select
                    value={form.holat}
                    onChange={(e) => setField('holat', e.target.value)}
                  >
                    {HOLAT_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="admin-field">
                  <span className="admin-field-label">Tartib raqami</span>
                  <input
                    type="number"
                    min={0}
                    value={form.sort_order}
                    onChange={(e) => setField('sort_order', e.target.value)}
                  />
                </label>

                {formError && (
                  <div className="admin-field-full">
                    <div className="admin-login-error">{formError}</div>
                  </div>
                )}
              </div>

              <footer className="admin-form-foot">
                <button
                  type="button"
                  className="admin-btn admin-btn-ghost"
                  onClick={closeForm}
                  disabled={submitting}
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="admin-btn admin-btn-primary"
                  disabled={submitting}
                >
                  {submitting ? 'Saqlanmoqda…' : 'Saqlash'}
                </button>
              </footer>
            </form>
          </div>
        </div>
      )}

      {/* Confirm delete */}
      {confirmDelete && (
        <div className="admin-modal" role="dialog" aria-modal="true">
          <div className="admin-modal-backdrop" onClick={() => setConfirmDelete(null)} />
          <div className="admin-modal-card admin-modal-sm">
            <header className="admin-modal-head">
              <h2>O'chirishni tasdiqlang</h2>
              <button type="button" className="admin-icon-btn" onClick={() => setConfirmDelete(null)}>
                <X size={18} />
              </button>
            </header>
            <div className="admin-modal-body">
              <p>
                <strong>«{confirmDelete.nomi}»</strong> imtihonini o'chirmoqchimisiz?
                Bu amalni qaytarib bo'lmaydi.
              </p>
            </div>
            <footer className="admin-form-foot">
              <button
                type="button"
                className="admin-btn admin-btn-ghost"
                onClick={() => setConfirmDelete(null)}
              >
                Bekor qilish
              </button>
              <button
                type="button"
                className="admin-btn admin-btn-primary is-danger"
                onClick={() => handleDelete(confirmDelete.id)}
              >
                O'chirish
              </button>
            </footer>
          </div>
        </div>
      )}

      {/* Table / Empty block */}
      {loading ? (
        <div className="admin-empty-block">
          <Loader2 size={28} className="admin-spin" />
          <h3>Yuklanmoqda…</h3>
        </div>
      ) : sortedItems.length === 0 ? (
        <div className="admin-empty-block">
          <Video size={32} strokeWidth={1.4} />
          <h3>Online imtihon topilmadi</h3>
          <p>
            {query || filterHolat !== 'Barchasi'
              ? 'Hech narsa topilmadi'
              : "Hali online imtihon qo'shilmagan"}
          </p>
          {!query && filterHolat === 'Barchasi' && (
            <button type="button" className="admin-btn admin-btn-primary" onClick={openNew}>
              <Plus size={16} /> Birinchi imtihonni qo'shing
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
                <th style={{ width: 120, textAlign: 'right' }}>Amallar</th>
              </tr>
            </thead>
            <tbody>
              {sortedItems.map((item, idx) => (
                <tr key={item.id}>
                  <td>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
                      <button
                        type="button"
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
                        type="button"
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
                    <div className="admin-cell-title">
                      {item.nomi}
                    </div>
                    {item.tavsif && (
                      <div className="admin-cell-sub">
                        {item.tavsif}
                      </div>
                    )}
                  </td>
                  <td>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      {item.sana && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.83rem', color: '#555' }}>
                          <Calendar size={13} strokeWidth={1.8} style={{ color: '#888' }} />
                          {new Date(item.sana).toLocaleDateString('uz-UZ', {
                            year: 'numeric', month: 'short', day: '2-digit',
                          })}
                        </span>
                      )}
                      {item.vaqt && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.83rem', color: '#555' }}>
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
                  <td style={{ textAlign: 'right' }}>
                    <button
                      type="button"
                      className="admin-icon-btn"
                      title="Tahrirlash"
                      onClick={() => openEdit(item)}
                    >
                      <Edit3 size={15} />
                    </button>
                    <button
                      type="button"
                      className="admin-icon-btn is-danger"
                      title="O'chirish"
                      onClick={() => setConfirmDelete(item)}
                    >
                      <Trash2 size={15} />
                    </button>
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
