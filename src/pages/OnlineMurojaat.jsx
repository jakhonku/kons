import { useState } from 'react';
import PageHero from '../components/PageHero';
import { supabase } from '../lib/supabase';
import { Loader2, Search } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Interaktiv xizmatlar' },
  { label: 'Online murojaat' },
];

const STATUS_LABEL = {
  new: { text: 'Navbatda', color: '#b8860b', bg: '#fdf6e3' },
  read: { text: 'Koʻrib chiqilmoqda', color: '#1d4ed8', bg: '#eef2ff' },
  resolved: { text: 'Javob berilgan', color: '#0a7c46', bg: '#f0f7f2' },
  archived: { text: 'Yopilgan', color: '#666', bg: '#f3f3f3' },
};

const MUROJAAT_TURLARI = [
  'Taklif',
  'Shikoyat',
  "Maʼlumot soʻrash",
  "Hamkorlik takliflari",
  'Boshqa',
];

export default function OnlineMurojaat() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [reference, setReference] = useState('');

  // Honeypot — botlar uchun yashirin maydon. Odam hech qachon to'ldirmaydi.
  const [honeypot, setHoneypot] = useState('');

  // Ariza holatini tekshirish
  const [lookupOpen, setLookupOpen] = useState(false);
  const [lookupQuery, setLookupQuery] = useState('');
  const [lookupLoading, setLookupLoading] = useState(false);
  const [lookupResults, setLookupResults] = useState(null); // null = hali qidirilmagan
  const [lookupError, setLookupError] = useState('');

  async function handleLookup(e) {
    e.preventDefault();
    const q = lookupQuery.trim();
    if (q.length < 2) {
      setLookupError('Kamida 2 ta belgi kiriting (ism yoki ariza raqami).');
      return;
    }
    setLookupLoading(true);
    setLookupError('');
    const { data, error: err } = await supabase.rpc('murojaat_status', { q });
    setLookupLoading(false);
    if (err) {
      setLookupResults(null);
      setLookupError('Qidirishda xatolik yuz berdi. Birozdan soʻng urinib koʻring.');
      return;
    }
    setLookupResults(data || []);
  }

  const [form, setForm] = useState({
    full_name: '',
    phone: '',
    email: '',
    type: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Bot honeypotni to'ldirgan bo'lsa — jimgina "muvaffaqiyat" ko'rsatamiz, hech narsa yubormaymiz.
    if (honeypot) {
      setSubmitted(true);
      return;
    }

    setSubmitting(true);
    setError('');

    // SECURITY DEFINER RPC orqali yoziladi (RLS'ni xavfsiz aylanib o'tadi).
    // status va created_at server tomonidan o'rnatiladi. Funksiya yangi id'ni qaytaradi.
    const { data, error: err } = await supabase.rpc('submit_murojaat', {
      p_full_name: form.full_name,
      p_phone: form.phone,
      p_email: form.email,
      p_type: form.type,
      p_subject: form.subject,
      p_message: form.message,
    });

    setSubmitting(false);
    if (!err) {
      // Haqiqiy murojaat raqami — DB qaytargan id dan (barqaror, emaildagi raqam bilan bir xil)
      setReference(data ? 'OK-' + String(data).padStart(6, '0') : '');
      setSubmitted(true);
    } else {
      // eslint-disable-next-line no-console
      console.error('Murojaat yuborishda xatolik:', err.message);
      setError('Murojaatni yuborishda xatolik yuz berdi. Iltimos, birozdan soʻng qaytadan urinib koʻring yoki telefon orqali bogʻlaning.');
    }
  };

  return (
    <main className="content-wrapper">
      <PageHero
        tag="Interaktiv xizmatlar"
        title="Online"
        emphasis="murojaat"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">
          <article className="article-body">
            <p className="lead">
              Oʻzbekiston Respublikasi Konstitutsiyasining 35-moddasi va "Jismoniy va yuridik
              shaxslarning murojaatlari toʻgʻrisida"gi qonun asosida har bir fuqaroning konservatoriyaga
              murojaat qilish huquqi mavjud. Murojaatlar 14 ish kuni ichida koʻrib chiqiladi va
              rasmiy javob yuboriladi.
            </p>
          </article>

          <div style={{ display: 'grid', gap: '40px', marginBottom: '60px' }} className="murojaat-layout">

            <div style={{ background: 'var(--white)', border: '1px solid var(--light-border)', padding: '32px 36px' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '1.4rem', fontWeight: 500, marginBottom: '8px' }}>
                Murojaat shakli
              </h2>
              <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '28px' }}>
                Barcha maydonlar majburiy. Maxfiy maʼlumotlar Oʻzbekiston Respublikasi qonunchiligi asosida himoya qilinadi.
              </p>

              {submitted ? (
                <div style={{ background: 'var(--light-50)', border: '1px solid var(--gold)', padding: '32px', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '3px', color: 'var(--gold-dark)', marginBottom: '12px', textTransform: 'uppercase' }}>
                    Muvaffaqiyatli yuborildi
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '1.4rem', fontWeight: 500, marginBottom: '14px' }}>
                    Murojaatingiz qabul qilindi
                  </h3>
                  <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '20px' }}>
                    {reference && <>Murojaat raqami: <strong style={{ color: 'var(--navy)' }}>{reference}</strong><br /></>}
                    Tasdiq xati elektron pochtangizga yuborildi. 14 ish kuni ichida koʻrsatgan
                    elektron pochtangizga rasmiy javob yuboriladi.
                  </p>
                  <button onClick={() => { setSubmitted(false); setForm({ full_name: '', phone: '', email: '', type: '', subject: '', message: '' }); }} className="btn-outline">
                    Yangi murojaat
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="form-grid">
                  {/* Honeypot — ekrandan yashirin, faqat botlar to'ldiradi */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
                    aria-hidden="true"
                  />
                  <div className="form-group">
                    <label>Familiya, Ism *</label>
                    <input
                      type="text"
                      required
                      maxLength={200}
                      placeholder="Aliyev Bobur"
                      value={form.full_name}
                      onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Telefon *</label>
                    <input
                      type="tel"
                      required
                      maxLength={50}
                      placeholder="+998 90 123-45-67"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      required
                      maxLength={320}
                      placeholder="example@gmail.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Murojaat turi *</label>
                    <select
                      required
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                    >
                      <option value="" disabled>Tanlang</option>
                      {MUROJAAT_TURLARI.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div className="form-group span-2">
                    <label>Mavzu *</label>
                    <input
                      type="text"
                      required
                      maxLength={300}
                      placeholder="Murojaat mavzusi"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    />
                  </div>
                  <div className="form-group span-2">
                    <label>Murojaat matni *</label>
                    <textarea
                      rows="6"
                      required
                      maxLength={5000}
                      placeholder="Murojaat batafsil tavsifi..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  {error && (
                    <div style={{ gridColumn: '1 / -1', color: '#e53e3e', fontSize: '0.85rem', marginBottom: '10px' }}>
                      {error}
                    </div>
                  )}

                  <div style={{ gridColumn: '1 / -1' }}>
                    <button
                      type="submit"
                      className="btn-submit"
                      disabled={submitting}
                      style={{
                        padding: '14px 36px',
                        background: 'var(--navy)',
                        color: 'var(--white)',
                        border: 'none',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        cursor: submitting ? 'not-allowed' : 'pointer',
                        opacity: submitting ? 0.7 : 1,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}
                    >
                      {submitting ? <Loader2 size={16} className="admin-spin" /> : null}
                      {submitting ? 'Yuborilmoqda...' : 'Yuborish →'}
                    </button>
                  </div>
                </form>
              )}
            </div>

            <aside style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ background: 'var(--light-50)', border: '1px solid var(--light-border)', borderLeft: '3px solid var(--gold)', padding: '22px 26px' }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '3px', color: 'var(--gold-dark)', marginBottom: '10px', textTransform: 'uppercase' }}>Muddatlar</div>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', color: '#555', lineHeight: 1.8 }}>
                  <li>• Standart murojaat — 14 ish kuni</li>
                  <li>• Tezkor savollar — 5 ish kuni</li>
                  <li>• Hamkorlik takliflari — 30 kun</li>
                </ul>
              </div>
              <div style={{ background: 'var(--white)', border: '1px solid var(--light-border)', padding: '22px 26px' }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '3px', color: 'var(--gold-dark)', marginBottom: '10px', textTransform: 'uppercase' }}>Telefonda murojaat</div>
                <a href="tel:+998712345677" style={{ color: 'var(--navy)', fontSize: '1.05rem', fontFamily: 'var(--font-display)', textDecoration: 'none' }}>+998 71 234-56-77</a>
                <div style={{ fontSize: '0.78rem', color: '#888', marginTop: '4px' }}>Dushanba – Juma, 09:00 – 18:00</div>
              </div>
              <div style={{ background: 'var(--white)', border: '1px solid var(--light-border)', padding: '22px 26px' }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '3px', color: 'var(--gold-dark)', marginBottom: '10px', textTransform: 'uppercase' }}>Yuzma-yuz qabul</div>
                <div style={{ color: '#555', fontSize: '0.85rem', lineHeight: 1.7 }}>
                  Toshkent sh., Shayxontohur tumani,<br />
                  Botir Zokirov koʻchasi 1-uy<br />
                  Bosh bino, 1-qavat
                </div>
              </div>
            </aside>
          </div>

          {/* ── Ariza holatini tekshirish ── */}
          <div style={{ marginBottom: '60px', borderTop: '1px solid var(--light-border)', paddingTop: '28px' }}>
            <button
              type="button"
              onClick={() => setLookupOpen((v) => !v)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                color: 'var(--gold-dark)', fontSize: '0.8rem', fontWeight: 700,
                letterSpacing: '1px', textTransform: 'uppercase',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
              }}
            >
              <Search size={15} /> Murojaatchilar arizasi — holatini tekshirish
            </button>

            {lookupOpen && (
              <div style={{ marginTop: '20px', maxWidth: '640px' }}>
                <p style={{ color: '#888', fontSize: '0.82rem', marginBottom: '14px' }}>
                  Ariza raqami (masalan <strong>OK-000123</strong>) yoki familiya-ismingizni kiriting.
                </p>
                <form onSubmit={handleLookup} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <input
                    type="text"
                    value={lookupQuery}
                    onChange={(e) => setLookupQuery(e.target.value)}
                    placeholder="OK-000123 yoki Aliyev Bobur"
                    maxLength={200}
                    style={{ flex: '1 1 260px', padding: '12px 14px', border: '1px solid var(--light-border)', fontSize: '0.9rem' }}
                  />
                  <button
                    type="submit"
                    disabled={lookupLoading}
                    style={{
                      padding: '12px 24px', background: 'var(--navy)', color: 'var(--white)',
                      border: 'none', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '1.5px',
                      textTransform: 'uppercase', cursor: lookupLoading ? 'not-allowed' : 'pointer',
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                    }}
                  >
                    {lookupLoading ? <Loader2 size={15} className="admin-spin" /> : <Search size={15} />}
                    Qidirish
                  </button>
                </form>

                {lookupError && (
                  <p style={{ color: '#e53e3e', fontSize: '0.85rem', marginTop: '12px' }}>{lookupError}</p>
                )}

                {lookupResults && !lookupError && (
                  lookupResults.length === 0 ? (
                    <p style={{ color: '#888', fontSize: '0.88rem', marginTop: '16px' }}>
                      Hech qanday ariza topilmadi. Raqam yoki ismni tekshirib qaytadan urinib koʻring.
                    </p>
                  ) : (
                    <div style={{ marginTop: '18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {lookupResults.map((r) => {
                        const s = STATUS_LABEL[r.status] || { text: r.status, color: '#666', bg: '#f3f3f3' };
                        return (
                          <div key={r.reference} style={{ background: 'var(--white)', border: '1px solid var(--light-border)', padding: '16px 18px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                              <strong style={{ color: 'var(--navy)', fontFamily: 'var(--font-display)' }}>{r.reference}</strong>
                              <span style={{ background: s.bg, color: s.color, padding: '4px 12px', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.5px', borderRadius: '20px' }}>
                                {s.text}
                              </span>
                            </div>
                            <div style={{ color: '#555', fontSize: '0.85rem', marginTop: '8px' }}>
                              {r.full_name}{r.type ? ` · ${r.type}` : ''} · {new Date(r.created_at).toLocaleDateString('uz-UZ')}
                            </div>
                            {r.queue_position != null && (
                              <div style={{ color: 'var(--gold-dark)', fontSize: '0.85rem', marginTop: '6px', fontWeight: 600 }}>
                                Navbat: {r.queue_position}
                              </div>
                            )}
                            {r.answered && (
                              <div style={{ color: '#0a7c46', fontSize: '0.82rem', marginTop: '6px' }}>
                                ✓ Javob elektron pochtangizga yuborilgan.
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
