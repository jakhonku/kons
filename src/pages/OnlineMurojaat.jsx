import { useState } from 'react';
import PageHero from '../components/PageHero';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Interaktiv xizmatlar', to: '/interaktiv-xizmatlar' },
  { label: 'Online murojaat' },
];

const MUROJAAT_TURLARI = [
  'Taklif',
  'Shikoyat',
  "Ma'lumot so'rash",
  "Hamkorlik takliflari",
  'Boshqa',
];

export default function OnlineMurojaat() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
              O'zbekiston Respublikasi Konstitutsiyasining 35-moddasi va "Jismoniy va yuridik
              shaxslarning murojaatlari to'g'risida"gi qonun asosida har bir fuqaroning konservatoriyaga
              murojaat qilish huquqi mavjud. Murojaatlar 14 ish kuni ichida ko'rib chiqiladi va
              rasmiy javob yuboriladi.
            </p>
          </article>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '40px', marginBottom: '60px' }} className="murojaat-layout">

            <div style={{ background: 'var(--white)', border: '1px solid var(--light-border)', padding: '32px 36px' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '1.4rem', fontWeight: 500, marginBottom: '8px' }}>
                Murojaat shakli
              </h2>
              <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '28px' }}>
                Barcha maydonlar majburiy. Maxfiy ma'lumotlar O'zbekiston Respublikasi qonunchiligi asosida himoya qilinadi.
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
                    Murojaat raqami: <strong style={{ color: 'var(--navy)' }}>OK-{Math.floor(Math.random() * 90000) + 10000}</strong><br />
                    14 ish kuni ichida ko'rsatgan elektron pochtangizga javob yuboriladi.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline">
                    Yangi murojaat
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="form-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                  <div className="form-group">
                    <label>Familiya, Ism *</label>
                    <input type="text" required placeholder="Aliyev Bobur" />
                  </div>
                  <div className="form-group">
                    <label>Telefon *</label>
                    <input type="tel" required placeholder="+998 90 123-45-67" />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" required placeholder="example@gmail.com" />
                  </div>
                  <div className="form-group">
                    <label>Murojaat turi *</label>
                    <select required defaultValue="">
                      <option value="" disabled>Tanlang</option>
                      {MUROJAAT_TURLARI.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div className="form-group span-2" style={{ gridColumn: 'span 2' }}>
                    <label>Mavzu *</label>
                    <input type="text" required placeholder="Murojaat mavzusi" />
                  </div>
                  <div className="form-group span-2" style={{ gridColumn: 'span 2' }}>
                    <label>Murojaat matni *</label>
                    <textarea rows="6" required placeholder="Murojaat batafsil tavsifi..." />
                  </div>
                  <div style={{ gridColumn: 'span 2' }}>
                    <button type="submit" className="btn-submit" style={{ padding: '14px 36px', background: 'var(--navy)', color: 'var(--white)', border: 'none', fontFamily: 'var(--font-sans)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', cursor: 'pointer' }}>
                      Yuborish →
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
                  Toshkent sh., Mirobod tumani,<br />
                  Konservatoriya ko'chasi 1-uy<br />
                  Bosh bino, 1-qavat
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
