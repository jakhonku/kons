import { useState } from 'react';
import { Plus, Edit3, Trash2, X, ArrowUp, ArrowDown, Radio, Loader2 } from 'lucide-react';
import { useAdminTicker } from '../../hooks/useAdminStorage';

const CATEGORIES = ['Yangilik', 'Voqealar', 'Mukofotlar', "Ta'lim", 'Xalqaro', 'Eʼlon'];

const EMPTY = { title: '', category: 'Yangilik', link: '' };

export default function AdminTicker() {
  const { items, loading, error, add, update, remove } = useAdminTicker();

  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  function openNew() {
    setEditing('new');
    setForm({ ...EMPTY });
    setFormError('');
  }

  function openEdit(item) {
    setEditing(item.id);
    setForm({
      title: item.title || '',
      category: item.category || 'Yangilik',
      link: item.link || '',
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
      title: form.title.trim(),
      category: form.category,
      link: form.link?.trim() || null,
    };
    if (editing === 'new') {
      const maxOrder = items.reduce((m, it) => Math.max(m, it.sort_order || 0), 0);
      payload.sort_order = maxOrder + 1;
    }
    const result = editing === 'new' ? await add(payload) : await update(editing, payload);
    setSubmitting(false);
    if (!result.ok) {
      setFormError(result.error || 'Saqlashda xatolik');
      return;
    }
    close();
  }

  async function move(item, delta) {
    const sorted = [...items].sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0));
    const idx = sorted.findIndex((i) => i.id === item.id);
    const newIdx = idx + delta;
    if (newIdx < 0 || newIdx >= sorted.length) return;
    const swap = sorted[newIdx];
    await Promise.all([
      update(item.id, { sort_order: swap.sort_order ?? 0 }),
      update(swap.id, { sort_order: item.sort_order ?? 0 }),
    ]);
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
          <h1 className="admin-page-title">Yangiliklar lentasi</h1>
          <p className="admin-page-sub">Bosh sahifada aylanib turadigan qisqa yangiliklar</p>
        </div>
        <button type="button" className="admin-btn admin-btn-primary" onClick={openNew}>
          <Plus size={16} /> Lenta yangilik
        </button>
      </div>

      {error && (
        <div className="admin-login-error" style={{ marginBottom: 16 }}>
          Maʼlumotlarni yuklashda xato: {error}
        </div>
      )}

      {loading ? (
        <div className="admin-empty-block">
          <Loader2 size={28} className="admin-spin" />
          <h3>Yuklanmoqda…</h3>
        </div>
      ) : items.length === 0 ? (
        <div className="admin-empty-block">
          <Radio size={32} strokeWidth={1.4} />
          <h3>Lenta boʻsh</h3>
          <p>Bosh sahifa lentasi koʻrinmaydi. Birinchi yangilikni qoʻshing.</p>
          <button type="button" className="admin-btn admin-btn-primary" onClick={openNew}>
            <Plus size={16} /> Lenta yangilik
          </button>
        </div>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th style={{ width: 60 }}>#</th>
                <th>Sarlavha</th>
                <th style={{ width: 140 }}>Kategoriya</th>
                <th style={{ width: 180 }}>Havola</th>
                <th style={{ width: 180, textAlign: 'right' }}>Amallar</th>
              </tr>
            </thead>
            <tbody>
              {items.map((it, i) => (
                <tr key={it.id}>
                  <td>
                    <strong>{i + 1}</strong>
                  </td>
                  <td>
                    <div className="admin-cell-title">{it.title}</div>
                  </td>
                  <td><span className="admin-pill">{it.category || 'Yangilik'}</span></td>
                  <td>
                    {it.link ? (
                      <a href={it.link} target="_blank" rel="noreferrer" style={{ color: 'var(--gold-dark)', fontSize: '0.82rem', wordBreak: 'break-all' }}>
                        {it.link.length > 24 ? it.link.slice(0, 24) + '…' : it.link}
                      </a>
                    ) : <span style={{ color: '#aaa' }}>—</span>}
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <button type="button" className="admin-icon-btn" onClick={() => move(it, -1)} disabled={i === 0} title="Yuqoriga">
                      <ArrowUp size={14} />
                    </button>
                    <button type="button" className="admin-icon-btn" onClick={() => move(it, 1)} disabled={i === items.length - 1} title="Pastga">
                      <ArrowDown size={14} />
                    </button>
                    <button type="button" className="admin-icon-btn" onClick={() => openEdit(it)} title="Tahrirlash">
                      <Edit3 size={15} />
                    </button>
                    <button type="button" className="admin-icon-btn is-danger" onClick={() => setConfirmDelete(it)} title="Oʻchirish">
                      <Trash2 size={15} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <p className="image-gallery-hint" style={{ marginTop: 14 }}>
        Tartib lentadagi ketma-ketlikni belgilaydi. ↑ ↓ tugmalar bilan oʻzgartiring.
        Havola kiritilsa — lentadagi yangilik bosilganda oʻsha havolaga olib boradi.
      </p>

      {editing && (
        <div className="admin-modal" role="dialog" aria-modal="true">
          <div className="admin-modal-backdrop" onClick={() => !submitting && close()} />
          <div className="admin-modal-card admin-modal-sm">
            <header className="admin-modal-head">
              <h2>{editing === 'new' ? 'Yangi lenta yangiligi' : 'Lenta yangilikni tahrirlash'}</h2>
              <button type="button" className="admin-icon-btn" onClick={close} disabled={submitting}><X size={18} /></button>
            </header>
            <form onSubmit={onSubmit} className="admin-form">
              <div className="admin-form-grid" style={{ gridTemplateColumns: '1fr' }}>
                <label className="admin-field">
                  <span className="admin-field-label">Sarlavha *</span>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    required
                    placeholder="Lenta'da koʻrinadigan qisqa matn"
                    maxLength={140}
                  />
                </label>

                <label className="admin-field">
                  <span className="admin-field-label">Kategoriya</span>
                  <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
                    {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </label>

                <label className="admin-field">
                  <span className="admin-field-label">Havola (ixtiyoriy)</span>
                  <input
                    type="url"
                    value={form.link}
                    onChange={(e) => setForm({ ...form, link: e.target.value })}
                    placeholder="https://... yoki /yangiliklar/admin-12"
                  />
                  <span className="admin-cell-sub" style={{ marginTop: 4 }}>
                    Boʻsh boʻlsa — lenta yangiligi bosish mumkin emas (faqat koʻrinadi).
                  </span>
                </label>

                {formError && (
                  <div className="admin-login-error">{formError}</div>
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
              <p>&quot;{confirmDelete.title}&quot; lenta yangiligini oʻchirishni xohlaysizmi?</p>
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
