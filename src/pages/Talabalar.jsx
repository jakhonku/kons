import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Talabalar uchun' },
];

const STATS = [
  { num: '1 200+', label: 'Talabalar' },
  { num: '38',     label: 'Kafedra' },
  { num: '5',      label: 'Fakultet' },
  { num: '85%',    label: 'Bandlik darajasi' },
];

const OQUV = [
  { icon: '📅', title: 'Dars jadvallari',              desc: 'Joriy semestr uchun barcha guruhlar jadvali', href: '#' },
  { icon: '📋', title: "O'quv rejalar",                 desc: "Bakalavr va magistratura o'quv rejalari",    href: '#' },
  { icon: '📖', title: "O'quv dasturlari (Sillabuslar)", desc: "Barcha fanlar bo'yicha sillabuslar",          href: '#' },
  { icon: '💻', title: 'HEMIS-talaba',                  desc: 'Shaxsiy kabinet va elektron reyting',        href: '#' },
];

const SUPPORT = [
  { icon: '🎓', title: 'Grantlar',                     desc: "Davlat va xorijiy grantlar, stipendiyalar",  href: '#' },
  { icon: '🚀', title: 'Kelajakka qadam',               desc: "Karyera markazi va ish bilan ta'minlash",   href: '#' },
  { icon: '📚', title: 'Online kutubxona',              desc: 'Elektron kitoblar va nota bazasi',           href: '#' },
  { icon: '🏛️', title: 'Registrator ofisi',             desc: "Hujjatlar, guvohnomalar, murojaat",          href: '#' },
];

const LIFE = [
  { icon: '🎭', title: "To'garaklar",        desc: "Ijodiy, sport va madaniy to'garaklar",     href: '#' },
  { icon: '🏠', title: 'Talabalar shaharchasi', desc: "Yotoqxona, ovqatlanish, dam olish joylari", href: '#' },
];

const SCHEDULE_DAYS = ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma'];

export default function Talabalar() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Talabalar uchun"
        title="Talabalar"
        emphasis="Portali"
        breadcrumbs={BREADCRUMBS}
      />

      {/* Statistika */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', background: 'var(--navy)', borderBottom: '2px solid var(--gold)' }}>
        {STATS.map((s) => (
          <div key={s.label} style={{ padding: '36px 20px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1, marginBottom: '8px' }}>
              {s.num}
            </div>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-sans)' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <section className="main-content">
        <div className="container">

          {/* O'quv jarayoni */}
          <div className="section-divider" style={{ marginTop: 0 }}>
            <h2>O'quv jarayoni</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '50px' }}>
            {OQUV.map((item) => (
              <a key={item.title} href={item.href} style={{ background: 'var(--white)', border: '1px solid var(--light-border)', padding: '28px 22px', textDecoration: 'none', display: 'block', transition: 'all 0.3s', position: 'relative', overflow: 'hidden' }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(26,26,56,0.1)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--light-border)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'var(--gold)', transform: 'scaleX(0)', transition: '0.3s', transformOrigin: 'left' }}
                  onMouseOver={(e) => { e.currentTarget.style.transform = 'scaleX(1)'; }} />
                <div style={{ fontSize: '1.8rem', marginBottom: '14px', lineHeight: 1 }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--navy)', marginBottom: '8px', fontWeight: 400, lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.78rem', color: '#888', lineHeight: 1.5 }}>{item.desc}</p>
                <div style={{ marginTop: '16px', fontSize: '0.7rem', color: 'var(--gold-dark)', fontWeight: 700, letterSpacing: '1px', fontFamily: 'var(--font-sans)' }}>
                  O'tish →
                </div>
              </a>
            ))}
          </div>

          {/* Qo'llab-quvvatlash */}
          <div className="section-divider">
            <h2>Qo'llab-quvvatlash</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '50px' }}>
            {SUPPORT.map((item) => (
              <a key={item.title} href={item.href} style={{ background: 'var(--light-50)', border: '1px solid var(--light-border)', padding: '28px 22px', textDecoration: 'none', display: 'block', transition: 'all 0.3s' }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'var(--white)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(26,26,56,0.1)'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'var(--light-50)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ fontSize: '1.8rem', marginBottom: '14px', lineHeight: 1 }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--navy)', marginBottom: '8px', fontWeight: 400, lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.78rem', color: '#888', lineHeight: 1.5 }}>{item.desc}</p>
              </a>
            ))}
          </div>

          {/* Talabalar hayoti */}
          <div className="section-divider">
            <h2>Talabalar hayoti</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '50px' }}>
            {LIFE.map((item) => (
              <a key={item.title} href={item.href} style={{ background: 'var(--navy)', border: '1px solid var(--navy)', padding: '36px', textDecoration: 'none', display: 'flex', gap: '20px', alignItems: 'flex-start', transition: 'opacity 0.3s' }}
                onMouseOver={(e) => { e.currentTarget.style.opacity = '0.85'; }}
                onMouseOut={(e) => { e.currentTarget.style.opacity = '1'; }}
              >
                <div style={{ fontSize: '2rem', lineHeight: 1, flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--white)', marginBottom: '8px', fontWeight: 300 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(208,208,224,0.7)', lineHeight: 1.6, fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
                    {item.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Dars jadvali jadval ko'rinishi */}
          <div className="section-divider">
            <h2>Joriy hafta jadvali</h2>
          </div>

          <div style={{ overflowX: 'auto', marginBottom: '60px' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Vaqt</th>
                  {SCHEDULE_DAYS.map(d => <th key={d}>{d}</th>)}
                </tr>
              </thead>
              <tbody>
                {['08:30–10:00', '10:15–11:45', '12:30–14:00', '14:15–15:45', '16:00–17:30'].map((time) => (
                  <tr key={time}>
                    <td style={{ color: 'var(--navy)', fontWeight: 600 }}>{time}</td>
                    {SCHEDULE_DAYS.map(d => (
                      <td key={d} style={{ color: '#aaa', fontStyle: 'italic', fontSize: '0.8rem' }}>—</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: '0.78rem', color: '#999', marginTop: '12px', fontStyle: 'italic' }}>
              * To'liq jadval HEMIS tizimida mavjud
            </p>
          </div>

          {/* Tezkor havolalar */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--gold)', marginBottom: '40px' }}>
            {[
              { label: 'HEMIS Tizimi', href: '#', desc: 'Shaxsiy kabinet' },
              { label: 'Online Kutubxona', href: '#', desc: 'Elektron resurslar' },
              { label: "Registrator Ofisi", href: '#', desc: 'Murojaat va hujjatlar' },
            ].map((l) => (
              <a key={l.label} href={l.href} style={{ background: 'var(--navy)', padding: '28px', textDecoration: 'none', display: 'block', textAlign: 'center', transition: '0.3s' }}
                onMouseOver={(e) => { e.currentTarget.style.background = '#252550'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'var(--navy)'; }}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--white)', marginBottom: '4px' }}>{l.label}</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(228,213,163,0.7)', fontFamily: 'var(--font-sans)', letterSpacing: '1px' }}>{l.desc}</div>
              </a>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
