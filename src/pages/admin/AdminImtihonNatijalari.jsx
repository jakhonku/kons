import { useState, useMemo } from 'react';
import {
  Plus, Edit3, Trash2, Search, X, FileText, Download, Eye,
  ChevronUp, ChevronDown, Loader2, Upload
} from 'lucide-react';
import { useAdminImtihonNatijalari } from '../../hooks/useAdminStorage';
import { uploadFile } from '../../lib/supabase';

const EMPTY = {
  title: '',
  file_url: '',
  sana: new Date().toISOString().split('T')[0],
  sort_order: 0,
};

export default function AdminImtihonNatijalari() {
  const { items, loading, error, add, update, remove } = useAdminImtihonNatijalari();

  const [editing, setEditing] = useState(null); // null, 'new', or id
  const [form, setForm] = useState(EMPTY);
  const [query, setQuery] = useState('');
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formError, setFormError] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      return !q || (item.title || '').toLowerCase().includes(q);
    });
  }, [items, query]);

  function openNew() {
    setEditing('new');
    setForm({
      ...EMPTY,
      sana: new Date().toISOString().split('T')[0],
      sort_order: items.length,
    });
    setSelectedFile(null);
    setFormError('');
  }

  function openEdit(item) {
    setEditing(item.id);
    setForm({
      title: item.title || '',
      file_url: item.file_url || '',
      sana: item.sana || new Date().toISOString().split('T')[0],
      sort_order: item.sort_order ?? 0,
    });
    setSelectedFile(null);
    setFormError('');
  }

  function closeForm() {
    setEditing(null);
    setForm(EMPTY);
    setSelectedFile(null);
    setFormError('');
  }

  function setField(key, val) {
    setForm((f) => ({ ...f, [key]: val }));
  }

  // Handle file selection and auto-extract title
  function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setSelectedFile(file);

    // Extract filename without extension
    const baseName = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
    // Replace underscores/dashes with space and format
    const autoTitle = baseName
      .replace(/[_-]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    setForm((f) => ({
      ...f,
      title: f.title ? f.title : autoTitle, // update only if title is empty, or overwrite it anyway. Let's pre-fill it.
    }));
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
    if (!form.title.trim()) {
      setFormError("Fayl nomi/sarlavhasi majburiy.");
      return;
    }
    if (!selectedFile && !form.file_url) {
      setFormError("Hujjat fayli yuklanishi shart.");
      return;
    }

    setSubmitting(true);
    setFormError('');

    let finalFileUrl = form.file_url;

    // If a new file was chosen, upload it first
    if (selectedFile) {
      setUploading(true);
      const { url, error: upErr } = await uploadFile(selectedFile, 'imtihon-natijalari', 'any');
      setUploading(false);
      if (upErr) {
        setFormError(`Faylni yuklashda xatolik: ${upErr.message}`);
        setSubmitting(false);
        return;
      }
      finalFileUrl = url;
    }

    const payload = {
      title: form.title.trim(),
      file_url: finalFileUrl,
      sana: form.sana,
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
          <h1 className="admin-page-title">Imtihon natijalari</h1>
          <p className="admin-page-sub">
            Imtihon natijalari qaydnomalari va PDF fayllarini yuklang
          </p>
        </div>
        <button type="button" className="admin-btn admin-btn-primary" onClick={openNew}>
          <Plus size={16} /> Yangi fayl yuklash
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
            placeholder="Natija nomini qidiring…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Form modal */}
      {editing !== null && (
        <div className="admin-modal" role="dialog" aria-modal="true">
          <div className="admin-modal-backdrop" onClick={closeForm} />
          <div className="admin-modal-card">
            <header className="admin-modal-head">
              <h2>
                {editing === 'new' ? 'Yangi natija yuklash' : "Natijani tahrirlash"}
              </h2>
              <button type="button" className="admin-icon-btn" onClick={closeForm}>
                <X size={18} />
              </button>
            </header>

            <form onSubmit={handleSave} className="admin-form">
              <div className="admin-form-grid">
                
                <label className="admin-field admin-field-full">
                  <span className="admin-field-label">
                    Fayl tanlash (PDF) <span style={{ color: 'red' }}>*</span>
                  </span>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <input
                      type="file"
                      accept=".pdf,application/pdf"
                      onChange={handleFileChange}
                      required={editing === 'new'}
                      style={{ display: 'none' }}
                      id="results-file-input"
                    />
                    <label
                      htmlFor="results-file-input"
                      className="admin-btn admin-btn-ghost"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer', margin: 0 }}
                    >
                      <Upload size={16} />
                      {selectedFile ? 'Fayl almashtirish' : 'Fayl tanlash'}
                    </label>
                    <span style={{ fontSize: '0.88rem', color: '#666' }}>
                      {selectedFile ? selectedFile.name : (form.file_url ? 'Mavjud fayl yuklangan' : 'Fayl tanlanmagan')}
                    </span>
                  </div>
                </label>

                <label className="admin-field admin-field-full">
                  <span className="admin-field-label">
                    Natija nomi / Sarlavha <span style={{ color: 'red' }}>*</span>
                  </span>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) => setField('title', e.target.value)}
                    placeholder="Fayl yuklanganda avtomatik to'ldiriladi"
                    required
                  />
                  <small style={{ color: '#666', marginTop: 4, display: 'block' }}>
                    Fayl tanlaganingizda nomi avtomatik olinadi, zarurat bo'lsa o'zgartirishingiz mumkin.
                  </small>
                </label>

                <label className="admin-field admin-field-full">
                  <span className="admin-field-label">
                    Sana <span style={{ color: 'red' }}>*</span>
                  </span>
                  <input
                    type="date"
                    value={form.sana}
                    onChange={(e) => setField('sana', e.target.value)}
                    required
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
                  disabled={submitting || uploading}
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="admin-btn admin-btn-primary"
                  disabled={submitting || uploading}
                >
                  {uploading ? 'Fayl yuklanmoqda...' : (submitting ? 'Saqlanmoqda…' : 'Saqlash')}
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
                <strong>«{confirmDelete.title}»</strong> imtihon natijasini o'chirmoqchimisiz?
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
          <FileText size={32} strokeWidth={1.4} />
          <h3>Imtihon natijasi topilmadi</h3>
          <p>
            {query
              ? 'Hech narsa topilmadi'
              : "Hali imtihon natijalari fayli qo'shilmagan"}
          </p>
          {!query && (
            <button type="button" className="admin-btn admin-btn-primary" onClick={openNew}>
              <Plus size={16} /> Birinchi faylni yuklang
            </button>
          )}
        </div>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th style={{ width: 60 }}>Tartib</th>
                <th>Sana</th>
                <th>Sarlavha</th>
                <th>Fayl</th>
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
                  <td style={{ whiteSpace: 'nowrap', fontSize: '0.88rem', color: '#555' }}>
                    {item.sana}
                  </td>
                  <td>
                    <div className="admin-cell-title">
                      {item.title}
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <a
                        href={item.file_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="admin-btn admin-btn-ghost"
                        style={{ padding: '4px 8px', display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem' }}
                        title="Ko'rish"
                      >
                        <Eye size={12} /> Ko'rish
                      </a>
                      <a
                        href={item.file_url}
                        download
                        className="admin-btn admin-btn-ghost"
                        style={{ padding: '4px 8px', display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem' }}
                        title="Yuklab olish"
                      >
                        <Download size={12} /> Yuklab olish
                      </a>
                    </div>
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
