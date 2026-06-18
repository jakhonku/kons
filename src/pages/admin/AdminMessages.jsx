import { useEffect, useMemo, useState } from 'react';
import { Mail, Trash2, Search, Loader2, MessageSquare, User, Phone, Calendar, CheckCircle2, Clock, X, Send, Hash } from 'lucide-react';
import { useAdminMessages } from '../../hooks/useAdminStorage';

const refOf = (id) => 'OK-' + String(id).padStart(6, '0');

const STATUS = {
  new:      { text: 'Yangi',          color: '#b8860b', bg: '#fdf6e3' },
  read:     { text: 'Koʻrilgan',      color: '#1d4ed8', bg: '#eef2ff' },
  resolved: { text: 'Javob berilgan', color: '#0a7c46', bg: '#e9f7ef' },
  archived: { text: 'Arxivlangan',    color: '#666',    bg: '#f0f0f0' },
};

export default function AdminMessages() {
  const { items, loading, error, remove, update } = useAdminMessages();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('Barchasi');
  const [selected, setSelected] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [sending, setSending] = useState(false);
  const [replyError, setReplyError] = useState('');
  const [justSent, setJustSent] = useState(false);

  // Boshqa murojaat tanlanganda javob maydonini moslashtirish
  useEffect(() => {
    setReplyText(selected?.reply_text || '');
    setReplyError('');
    setJustSent(false);
  }, [selected?.id]);

  async function handleSendReply() {
    if (!selected || !replyText.trim()) return;
    if (!selected.email) {
      setReplyError('Bu murojaatda email manzil koʻrsatilmagan — javob yuborib boʻlmaydi.');
      return;
    }
    setSending(true);
    setReplyError('');
    setJustSent(false);
    const res = await update(selected.id, {
      reply_text: replyText.trim(),
      status: 'resolved',
      replied_at: new Date().toISOString(),
    });
    setSending(false);
    if (res.ok) {
      setSelected(res.data);
      setJustSent(true);
    } else {
      setReplyError('Javobni yuborishda xatolik: ' + res.error);
    }
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((m) => {
      const matchesFilter = filter === 'Barchasi' || m.status === filter;
      const matchesQ = !q || 
        (m.full_name || '').toLowerCase().includes(q) || 
        (m.subject || '').toLowerCase().includes(q) ||
        (m.email || '').toLowerCase().includes(q);
      return matchesFilter && matchesQ;
    });
  }, [items, query, filter]);

  async function toggleStatus(msg) {
    const next = msg.status === 'read' ? 'new' : 'read';
    await update(msg.id, { status: next });
  }

  async function doDelete() {
    if (!confirmDelete) return;
    const res = await remove(confirmDelete.id);
    if (res.ok) {
      setConfirmDelete(null);
      if (selected?.id === confirmDelete.id) setSelected(null);
    }
  }

  const stats = {
    total: items.length,
    new: items.filter(m => m.status === 'new').length,
    read: items.filter(m => m.status === 'read').length,
  };

  return (
    <div className="admin-page">
      <div className="admin-page-head">
        <div>
          <h1 className="admin-page-title">Murojaatlar</h1>
          <p className="admin-page-sub">Foydalanuvchilardan kelgan xabar va takliflar</p>
        </div>
      </div>

      {error && (
        <div className="admin-login-error" style={{ marginBottom: 16 }}>
          Murojaatlarni yuklashda xato: {error}
          <div style={{ fontSize: '0.78rem', marginTop: 6, opacity: 0.85 }}>
            Agar &quot;permission denied&quot; / RLS xatosi boʻlsa — kirgan admin emailingiz
            <code> is_admin()</code> roʻyxatida yoʻq. Quyidagi yechimga qarang.
          </div>
        </div>
      )}

      <div className="admin-stats-grid" style={{ marginBottom: 24 }}>
        <div className="admin-stat-card">
          <div className="admin-stat-label">Jami</div>
          <div className="admin-stat-value">{stats.total}</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-label">Yangi</div>
          <div className="admin-stat-value" style={{ color: 'var(--gold)' }}>{stats.new}</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-label">Oʻqilgan</div>
          <div className="admin-stat-value" style={{ color: '#10b981' }}>{stats.read}</div>
        </div>
      </div>

      <div className="admin-toolbar">
        <div className="admin-search">
          <Search size={16} />
          <input 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            placeholder="Ism, mavzu yoki email boʻyicha qidirish..." 
          />
        </div>
        <div className="admin-filter-chips">
          {['Barchasi', 'new', 'read'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`admin-chip ${filter === f ? 'is-active' : ''}`}
            >
              {f === 'Barchasi' ? 'Barchasi' : (f === 'new' ? 'Yangi' : 'Oʻqilgan')}
            </button>
          ))}
        </div>
      </div>

      <div className="admin-messages-layout">
        <div className="admin-messages-list">
          {loading ? (
            <div className="admin-empty-block"><Loader2 className="admin-spin" /></div>
          ) : filtered.length === 0 ? (
            <div className="admin-empty-block">
              <MessageSquare size={32} opacity={0.3} />
              <p>Murojaatlar topilmadi</p>
            </div>
          ) : (
            filtered.map((m) => (
              <div 
                key={m.id} 
                className={`admin-message-item ${selected?.id === m.id ? 'is-selected' : ''} ${m.status === 'new' ? 'is-unread' : ''}`}
                onClick={() => {
                  setSelected(m);
                  if (m.status === 'new') update(m.id, { status: 'read' });
                }}
              >
                <div className="admin-msg-item-head">
                  <span className="admin-msg-item-name">{m.full_name}</span>
                  <span className="admin-msg-item-date">
                    {new Date(m.created_at).toLocaleDateString('uz-UZ')}
                  </span>
                </div>
                <div className="admin-msg-item-subject">{m.subject}</div>
                <div className="admin-msg-item-type">{m.type}</div>
              </div>
            ))
          )}
        </div>

        <div className="admin-messages-detail">
          {selected ? (
            <div className="admin-msg-view">
              <header className="admin-msg-view-head">
                <div className="admin-msg-view-info">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 6 }}>
                    <h2 style={{ margin: 0 }}>{selected.subject}</h2>
                    {(() => {
                      const st = STATUS[selected.status] || STATUS.new;
                      return (
                        <span style={{ background: st.bg, color: st.color, padding: '3px 12px', borderRadius: 20, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.5px' }}>
                          {st.text}
                        </span>
                      );
                    })()}
                  </div>
                  <div className="admin-msg-meta-row">
                    <span title="Murojaat raqami"><Hash size={14} /> {refOf(selected.id)}</span>
                    <span title="F.I.O"><User size={14} /> {selected.full_name}</span>
                    <span title="Email"><Mail size={14} /> {selected.email}</span>
                    <span title="Telefon"><Phone size={14} /> {selected.phone}</span>
                    <span title="Sana"><Calendar size={14} /> {new Date(selected.created_at).toLocaleString('uz-UZ')}</span>
                  </div>
                </div>
                <div className="admin-msg-actions">
                  <button 
                    className="admin-btn admin-btn-ghost" 
                    onClick={() => toggleStatus(selected)}
                    title={selected.status === 'read' ? 'Yangi deb belgilash' : 'Oʻqilgan deb belgilash'}
                  >
                    {selected.status === 'read' ? <Clock size={16} /> : <CheckCircle2 size={16} />}
                  </button>
                  <button 
                    className="admin-btn admin-btn-ghost is-danger" 
                    onClick={() => setConfirmDelete(selected)}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </header>

              <div className="admin-msg-body">
                <div className="admin-msg-label">Xabar matni:</div>
                <div className="admin-msg-content">{selected.message}</div>
              </div>

              {/* Avval yuborilgan javob */}
              {selected.replied_at && (
                <div style={{ background: '#f0f7f2', border: '1px solid #cdeada', borderRadius: 10, padding: '14px 16px', marginTop: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#0a7c46', fontWeight: 600, fontSize: '0.82rem' }}>
                    <CheckCircle2 size={15} /> Javob yuborilgan · {new Date(selected.replied_at).toLocaleString('uz-UZ')}
                  </div>
                  <div style={{ whiteSpace: 'pre-wrap', color: '#1a4732', fontSize: '0.9rem', marginTop: 8 }}>{selected.reply_text}</div>
                </div>
              )}

              {/* Email javob kompozitori */}
              <div style={{ marginTop: 18, border: '1px solid #e6e1d6', borderRadius: 12, overflow: 'hidden' }}>
                <div style={{ background: '#0c0c1e', color: '#fff', padding: '12px 18px', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Mail size={16} />
                  <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>
                    {selected.replied_at ? 'Javobni tahrirlab qayta yuborish' : 'Email orqali javob yuborish'}
                  </span>
                </div>

                <div style={{ padding: '16px 18px' }}>
                  {/* Email "konvert" sarlavhasi */}
                  <div style={{ fontSize: '0.82rem', color: '#555', borderBottom: '1px dashed #e6e1d6', paddingBottom: 10, marginBottom: 12 }}>
                    <div style={{ display: 'flex', gap: 8, marginBottom: 4 }}>
                      <span style={{ color: '#999', minWidth: 60 }}>Kimga:</span>
                      <strong style={{ color: selected.email ? 'var(--navy)' : '#e53e3e' }}>
                        {selected.email || 'email koʻrsatilmagan'}
                      </strong>
                    </div>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <span style={{ color: '#999', minWidth: 60 }}>Mavzu:</span>
                      <span>Re: {selected.subject} · <span style={{ color: 'var(--gold-dark)', fontWeight: 600 }}>{refOf(selected.id)}</span></span>
                    </div>
                  </div>

                  <textarea
                    rows={5}
                    value={replyText}
                    onChange={(e) => { setReplyText(e.target.value); setJustSent(false); }}
                    maxLength={8000}
                    placeholder="Hurmatli fuqaro, murojaatingiz yuzasidan…"
                    className="admin-textarea"
                    disabled={!selected.email}
                    style={{ width: '100%' }}
                  />
                  <div style={{ textAlign: 'right', fontSize: '0.72rem', color: '#999', marginTop: 4 }}>
                    {replyText.length} / 8000
                  </div>

                  {replyError && (
                    <p style={{ color: '#e53e3e', fontSize: '0.82rem', marginTop: 8 }}>{replyError}</p>
                  )}

                  {justSent && (
                    <div style={{ background: '#f0f7f2', border: '1px solid #cdeada', color: '#0a7c46', borderRadius: 8, padding: '10px 14px', marginTop: 12, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <CheckCircle2 size={16} /> Javob saqlandi va <strong>{selected.email}</strong> manziliga yuborildi.
                    </div>
                  )}

                  <div style={{ marginTop: 14, display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      className="admin-btn admin-btn-primary"
                      onClick={handleSendReply}
                      disabled={sending || !replyText.trim() || !selected.email}
                      style={{ opacity: (sending || !replyText.trim() || !selected.email) ? 0.6 : 1 }}
                    >
                      {sending ? <Loader2 size={16} className="admin-spin" /> : <Send size={16} />}
                      {sending ? 'Yuborilmoqda…' : (selected.replied_at ? 'Qayta yuborish' : 'Javobni yuborish')}
                    </button>
                    <span style={{ fontSize: '0.74rem', color: '#888' }}>
                      Javob saqlanadi va fuqaro emailiga avtomatik (OK-raqam bilan) yuboriladi.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="admin-msg-empty">
              <Mail size={48} opacity={0.1} />
              <p>Murojaatni oʻqish uchun roʻyxatdan tanlang</p>
            </div>
          )}
        </div>
      </div>

      {confirmDelete && (
        <div className="admin-modal">
          <div className="admin-modal-backdrop" onClick={() => setConfirmDelete(null)} />
          <div className="admin-modal-card admin-modal-sm">
            <header className="admin-modal-head">
              <h2>Oʻchirishni tasdiqlang</h2>
              <button className="admin-icon-btn" onClick={() => setConfirmDelete(null)}><X size={18} /></button>
            </header>
            <div className="admin-modal-body">
              <p><strong>{confirmDelete.full_name}</strong>ning murojaatini oʻchirib tashlamoqchimisiz?</p>
            </div>
            <footer className="admin-form-foot">
              <button className="admin-btn admin-btn-ghost" onClick={() => setConfirmDelete(null)}>Bekor qilish</button>
              <button className="admin-btn admin-btn-danger" onClick={doDelete}>Oʻchirish</button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}
