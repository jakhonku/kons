import { useState } from 'react';
import PageHero from '../components/PageHero';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Axborot xizmati' },
  { label: 'Kontaktlar' },
];

const CONTACT_ITEMS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Manzil',
    value: "Toshkent sh., Olmazor tumani,\nMustaqillik ko'chasi, 31-uy",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.76a16 16 0 0 0 6 6l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: 'Telefon',
    value: '+998 71 234-56-78\n+998 71 234-56-79',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Elektron pochta',
    value: 'info@konservatoriya.uz\nrektor@konservatoriya.uz',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: 'Ish vaqti',
    value: "Dushanba–Juma: 9:00–18:00\nShanba: 9:00–14:00",
  },
];

export default function Kontaktlar() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="content-wrapper">
      <PageHero
        tag="Axborot xizmati"
        title="Bog'lanish"
        emphasis="Ma'lumotlari"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="contact-grid">

            {/* Chap: aloqa ma'lumotlari */}
            <div>
              <p className="article-body lead" style={{ marginBottom: '40px' }}>
                Bizga murojaat qiling — har qanday savol bo'yicha yordam berishga tayyormiz.
              </p>

              {CONTACT_ITEMS.map((item) => (
                <div key={item.label} className="contact-info-item">
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-text">
                    <h4>{item.label}</h4>
                    {item.value.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Ijtimoiy tarmoqlar */}
              <div style={{ marginTop: '40px' }}>
                <h4 style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--gold-dark)', marginBottom: '15px' }}>
                  Ijtimoiy tarmoqlar
                </h4>
                <div style={{ display: 'flex', gap: '12px' }}>
                  {['Telegram', 'Instagram', 'Facebook', 'YouTube'].map((name) => (
                    <a key={name} href="#" style={{
                      padding: '8px 16px',
                      border: '1px solid var(--navy)',
                      color: 'var(--navy)',
                      textDecoration: 'none',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      transition: '0.3s',
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.background = 'var(--navy)'; e.currentTarget.style.color = 'white'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--navy)'; }}
                    >
                      {name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* O'ng: forma */}
            <div>
              {sent ? (
                <div className="info-box" style={{ borderColor: '#228B22' }}>
                  <h4 style={{ color: '#228B22' }}>Xabar yuborildi!</h4>
                  <p>Tez orada siz bilan bog'lanamiz. Rahmat!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ color: 'var(--navy)', marginBottom: '30px', fontSize: '1.5rem' }}>
                    Murojaat <span>Yuborish</span>
                  </h3>
                  <div className="form-grid" style={{ marginBottom: '20px' }}>
                    <div className="form-group">
                      <label>Ism Familiya *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="F.I.O" />
                    </div>
                    <div className="form-group">
                      <label>Telefon raqami</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="+998 XX XXX-XX-XX" />
                    </div>
                    <div className="form-group">
                      <label>Elektron pochta *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="email@example.com" />
                    </div>
                    <div className="form-group">
                      <label>Mavzu</label>
                      <input name="subject" value={form.subject} onChange={handleChange} placeholder="Murojaat mavzusi" />
                    </div>
                  </div>
                  <div className="form-group form-grid full" style={{ marginBottom: '25px' }}>
                    <label>Xabar *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Xabaringizni yozing..." style={{ minHeight: '140px' }} />
                  </div>
                  <button type="submit" className="btn-submit">YUBORISH</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Xarita */}
      <div style={{ width: '100%', height: '420px', background: '#e8e4dc', position: 'relative' }}>
        <iframe
          title="Konservatoriya xaritasi"
          src="https://www.openstreetmap.org/export/embed.html?bbox=69.2200%2C41.2950%2C69.2450%2C41.3100&layer=mapnik&marker=41.3029%2C69.2331"
          style={{ width: '100%', height: '100%', border: 'none' }}
          loading="lazy"
        />
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          background: 'var(--navy)',
          color: 'white',
          padding: '12px 20px',
          fontSize: '0.8rem',
          fontWeight: 700,
          letterSpacing: '1px',
        }}>
          O'ZBEKISTON DAVLAT KONSERVATORIYASI
        </div>
      </div>
    </main>
  );
}
