import { useState } from 'react';
import { Plus, Edit3, Trash2, X, ArrowUp, ArrowDown, Send, Loader2, ExternalLink } from 'lucide-react';
import { useAdminTelegram } from '../../hooks/useAdminStorage';
import { parseTelegramUrl } from '../../components/TelegramPostEmbed';

const EMPTY = { post_url: '', caption: '' };

export default function AdminTelegram() {
  const { items, loading, error, add, update, remove } = useAdminTelegram();

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
      post_url: item.post_url || '',
      caption: item.caption || '',
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
    if (!form.post_url.trim() || submitting) return;
    const parsed = parseTelegramUrl(form.post_url);
    if (!parsed) {
      setFormError('Notoʻgʻri Telegram URL. Format: https://t.me/CHANNEL/POSTID');
      return;
    }
    setSubmitting(true);
    setFormError('');
    const payload = {
      post_url: form.post_url.trim(),
      caption: form.caption?.trim() || null,
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
          <h1 className="admin-page-title">Telegram postlar</h1>
          <p className="admin-page-sub">Yangiliklar sahifasidagi &quot;Telegram&quot; tabida koʻrinadi</p>
        </div>
        <button type="button" className="admin-btn admin-btn-primary" onClick={openNew}>
          <Plus size={16} /> Telegram post
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
          <Send size={32} strokeWidth={1.4} />
          <h3>Hozircha post yoʻq</h3>
          <p>Telegram kanal postining havolasini paste qiling — sayt rasmiy widget bilan koʻrsatadi.</p>
          <button type="button" className="admin-btn admin-btn-primary" onClick={openNew}>
            <Plus size={16} /> Telegram post
          </button>
        </div>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th style={{ width: 60 }}>#</th>
                <th>URL</th>
                <th>Izoh (ixtiyoriy)</th>
                <th style={{ width: 200, textAlign: 'right' }}>Amallar</th>
              </tr>
            </thead>
            <tbody>
              {items.map((it, i) => {
                const parsed = parseTelegramUrl(it.post_url);
                return (
                  <tr key={it.id}>
                    <td><strong>{i + 1}</strong></td>
                    <td>
                      <a href={it.post_url} target="_blank" rel="noreferrer" style={{ color: 'var(--gold-dark)', fontSize: '0.86rem', display: 'inline-flex', gap: 6, alignItems: 'center' }}>
                        {parsed ? `@${parsed.channel}/${parsed.postId}` : it.post_url}
                        <ExternalLink size={12} />
                      </a>
                    </td>
                    <td>
                      <div className="admin-cell-sub">{it.caption || <span style={{ color: '#aaa' }}>—</span>}</div>
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
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <p className="image-gallery-hint" style={{ marginTop: 14 }}>
        <strong>Format:</strong> <code>https://t.me/CHANNEL/POSTID</code> — masalan,
        <code> https://t.me/conservatory_uz/45</code>.
        Faqat <strong>ochiq (public)</strong> kanallar uchun ishlaydi.
        Postni Telegramʼda uzun bosib &quot;Copy Link&quot; qilish orqali olishingiz mumkin.
      </p>

      {editing && (
        <div className="admin-modal" role="dialog" aria-modal="true">
          <div className="admin-modal-backdrop" onClick={() => !submitting && close()} />
          <div className="admin-modal-card admin-modal-sm">
            <header className="admin-modal-head">
              <h2>{editing === 'new' ? 'Yangi Telegram post' : 'Postni tahrirlash'}</h2>
              <button type="button" className="admin-icon-btn" onClick={close} disabled={submitting}><X size={18} /></button>
            </header>
            <form onSubmit={onSubmit} className="admin-form">
              <div className="admin-form-grid" style={{ gridTemplateColumns: '1fr' }}>
                <label className="admin-field">
                  <span className="admin-field-label">Telegram post havolasi *</span>
                  <input
                    type="url"
                    value={form.post_url}
                    onChange={(e) => setForm({ ...form, post_url: e.target.value })}
                    required
                    placeholder="https://t.me/conservatory_uz/45"
                  />
                </label>

                <label className="admin-field">
                  <span className="admin-field-label">Izoh (ixtiyoriy)</span>
                  <input
                    type="text"
                    value={form.caption}
                    onChange={(e) => setForm({ ...form, caption: e.target.value })}
                    placeholder="Post ustida koʻrinadigan qisqa izoh"
                    maxLength={200}
                  />
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
              <p>Bu Telegram postni oʻchirishni xohlaysizmi?</p>
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
