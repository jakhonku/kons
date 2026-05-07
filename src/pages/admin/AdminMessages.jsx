import { useMemo, useState } from 'react';
import { Mail, Trash2, Search, Loader2, MessageSquare, User, Phone, Calendar, CheckCircle2, Clock, X, Reply } from 'lucide-react';
import { useAdminMessages } from '../../hooks/useAdminStorage';

export default function AdminMessages() {
  const { items, loading, error, remove, update } = useAdminMessages();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('Barchasi');
  const [selected, setSelected] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);

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
                  <h2>{selected.subject}</h2>
                  <div className="admin-msg-meta-row">
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

              <div className="admin-msg-reply-box">
                <div className="admin-msg-label">Javob qaytarish (E-mail orqali):</div>
                <div style={{ position: 'relative', marginTop: 12 }}>
                  <textarea 
                    rows={4} 
                    placeholder="Foydalanuvchiga yoziladigan javob matni..." 
                    className="admin-textarea"
                  />
                  <div style={{ marginTop: 16, display: 'flex', gap: 12 }}>
                    <a 
                      href={`mailto:${selected.email}?subject=Re: ${selected.subject}`}
                      className="admin-btn admin-btn-primary"
                    >
                      <Reply size={16} /> E-mail orqali javob yozish
                    </a>
                    <p style={{ fontSize: '0.75rem', color: '#666', alignSelf: 'center' }}>
                      * Javob foydalanuvchining koʻrsatilgan elektron pochtasiga yuboriladi.
                    </p>
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
