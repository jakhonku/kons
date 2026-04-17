import PageHero from '../components/PageHero';
import { Music, Calendar, MapPin, Users } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Xalqaro aloqalar', to: '/xalqaro' },
  { label: "Qo'shma konsertlar" },
];

const UPCOMING = [
  {
    title: "O'zbekiston–Avstriya Musiqa Festivali",
    date: '12–14 mart 2026',
    venue: 'Alisher Navoiy nomidagi GABT, Toshkent',
    partner: 'Vena Filarmoniya Orkestri',
    flag: '🇦🇹',
    type: 'Festival',
  },
  {
    title: "Ipak Yo'li Simfonik Konsert",
    date: '5 aprel 2026',
    venue: "O'zbekiston Davlat Konservatoriyasi Katta Zali",
    partner: 'Pekin Musiqa Konservatoriyasi Orkestri',
    flag: '🇨🇳',
    type: 'Konsert',
  },
  {
    title: "Markaziy Osiyo Yosh Solistlar Gala Konsert",
    date: '20 may 2026',
    venue: 'Toshkent Davlat Filarmoniyasi',
    partner: "Qozog'iston, Qirg'iziston, Tojikiston konservatoriyalari",
    flag: '🌏',
    type: 'Gala',
  },
];

const PAST = [
  { title: "O'zbekiston–Germaniya Kamera Musiqa Kechasi", year: 2024, partner: "Berliner Universität der Künste", flag: '🇩🇪', venue: 'Toshkent' },
  { title: "Musiqa Magistrlari: Sharq va G'arb",           year: 2024, partner: 'Parij Konservatoriyasi',          flag: '🇫🇷', venue: 'Toshkent / Parij' },
  { title: "Ipak Yo'li Badiiy Festivali",                  year: 2023, partner: 'Pekin va Seul konservatoriyalari', flag: '🇨🇳', venue: 'Toshkent' },
  { title: "Yosh Solistlar Xalqaro Konserti",             year: 2023, partner: 'Moskva Konservatoriyasi',          flag: '🇷🇺', venue: 'Moskva / Toshkent' },
  { title: "O'zbekiston–Turkiya Do'stlik Konserti",       year: 2022, partner: 'Istambul Davlat Konservatoriyasi', flag: '🇹🇷', venue: 'Istambul' },
  { title: "Avstriya–O'zbekiston Musiqa Almashinuvi",     year: 2022, partner: 'Vena Musiqa Universiteti',         flag: '🇦🇹', venue: 'Vena / Toshkent' },
];

const FORMATS = [
  { icon: Music,    title: 'Simfonik konsertlar',  desc: 'Ikki orkestр birgalikda yoki navbat bilan ijro etadi' },
  { icon: Users,    title: 'Kamera musiqa',        desc: 'Kichik ansambllar, duetlar va trio formatlar' },
  { icon: Calendar, title: 'Festivallar',          desc: "Ko'p kunlik xalqaro musiqa festivallari" },
  { icon: MapPin,   title: 'Gastrol turlar',       desc: "O'zbekiston va xorijda qo'shma gastrol kontsertlar" },
];

export default function QoshmaKonsertlar() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Xalqaro aloqalar"
        title="Qo'shma"
        emphasis="Konsertlar"
        breadcrumbs={BREADCRUMBS}
      />

      <div className="page-stats-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', background: 'var(--navy)', borderBottom: '2px solid var(--gold)' }}>
        {[
          { num: '50+', label: "Qo'shma konsert (2017-)" },
          { num: '20+', label: 'Hamkor orkestrlar' },
          { num: '15',  label: 'Mamlakat' },
          { num: '3',   label: "Rejalashtirilgan (2026)" },
        ].map((s, i) => (
          <div key={s.label} style={{ padding: '36px 20px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1, marginBottom: '8px' }}>{s.num}</div>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-sans)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      <section className="main-content">
        <div className="container">

          <div className="section-divider" style={{ marginTop: 0 }}>
            <h2>Konsert formatlari</h2>
          </div>

          <div className="g-4" style={{ marginBottom: '50px' }}>
            {FORMATS.map((f) => (
              <div key={f.title} style={{ background: 'var(--white)', border: '1px solid var(--light-border)', borderTop: '3px solid var(--gold)', padding: '28px 22px' }}>
                <div style={{ color: 'var(--gold)', marginBottom: '14px' }}><f.icon size={28} strokeWidth={1.5} /></div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--navy)', marginBottom: '8px', fontWeight: 400 }}>{f.title}</h3>
                <p style={{ fontSize: '0.82rem', color: '#888', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="section-divider">
            <h2>2026-yil rejalashtirilgan konsertlar</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '60px' }}>
            {UPCOMING.map((c) => (
              <div key={c.title} style={{ background: 'var(--white)', border: '1px solid var(--light-border)', borderLeft: '4px solid var(--gold)', padding: '24px 28px', display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '1.8rem', lineHeight: 1, flexShrink: 0, marginTop: 2 }}>{c.flag}</span>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: 'var(--navy)', fontWeight: 400 }}>{c.title}</h3>
                    <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '3px 10px', background: 'var(--navy)', color: 'var(--white)', fontFamily: 'var(--font-sans)', flexShrink: 0 }}>
                      {c.type}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#666', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Calendar size={12} strokeWidth={2} style={{ color: 'var(--gold)' }} />{c.date}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><MapPin size={12} strokeWidth={2} style={{ color: 'var(--gold)' }} />{c.venue}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Users size={12} strokeWidth={2} style={{ color: 'var(--gold)' }} />{c.partner}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-divider">
            <h2>O'tgan konsertlar arxivi</h2>
          </div>

          <div className="doc-list" style={{ marginBottom: '60px' }}>
            {PAST.map((c) => (
              <div key={c.title + c.year} className="doc-item">
                <div className="doc-info">
                  <div style={{ fontSize: '1.5rem', lineHeight: 1, flexShrink: 0, width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {c.flag}
                  </div>
                  <div>
                    <div className="doc-name">{c.title}</div>
                    <div className="doc-meta">{c.partner} · {c.venue} · {c.year}</div>
                  </div>
                </div>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '1px', color: '#888', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', flexShrink: 0 }}>{c.year}</span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
