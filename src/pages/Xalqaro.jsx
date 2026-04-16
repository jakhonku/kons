import PageHero from '../components/PageHero';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Xalqaro aloqalar' },
];

const STATS = [
  { num: '120+', label: 'Hamkor tashkilot' },
  { num: '40+',  label: "Davlat" },
  { num: '15',   label: 'Faol memorandum' },
  { num: '200+', label: "Chet ellik o'qituvchi" },
];

const PARTNERS = [
  { name: 'Vena Musiqa va Sanoat Badiiy Universiteti', country: 'Avstriya',    flag: '🇦🇹' },
  { name: 'Parij Milliy Oliy Musiqa Konservatoriyasi', country: 'Fransiya',    flag: '🇫🇷' },
  { name: 'Moskva Davlat Konservatoriyasi',            country: 'Rossiya',     flag: '🇷🇺' },
  { name: 'Xyuston Universitet Moores Musiqa Maktabi', country: 'AQSh',        flag: '🇺🇸' },
  { name: 'Pekin Musiqa Konservatoriyasi',             country: 'Xitoy',       flag: '🇨🇳' },
  { name: 'Seul Milliy Universiteti San\'at Kolleji',  country: 'Janubiy Koreya', flag: '🇰🇷' },
  { name: "Istambul Davlat Konservatoriyasi",           country: 'Turkiya',     flag: '🇹🇷' },
  { name: "Berliner Universität der Künste",           country: 'Germaniya',   flag: '🇩🇪' },
];

const PROGRAMS = [
  { title: "Erasmus+ ta'lim dasturi", desc: "Yevropa Ittifoqi universitetlarida talabalar va o'qituvchilar almashinuvi", badge: 'Faol', color: '#22c55e' },
  { title: "Xalqaro stipendiyalar",   desc: "Xorijda ta'lim olish uchun davlat va xorijiy grantlar", badge: "Ariza qabul", color: 'var(--gold-dark)' },
  { title: "Qo'shma dasturlar",       desc: "Xorijiy universitetlar bilan qo'shma magistratura va doktorantura", badge: 'Yangi', color: 'var(--navy)' },
  { title: "Master-klass dasturlari", desc: "Xorijiy ustoz-musiqachilar bilan intensiv treninglar", badge: "Doimiy", color: '#6366f1' },
];

const MEMORANDUMS = [
  { org: 'Vena Musiqa Universiteti',          year: 2019, type: "Talabalar almashinuvi" },
  { org: 'Parij Konservatoriyasi',            year: 2021, type: "Ilmiy hamkorlik" },
  { org: 'Moskva Konservatoriyasi',           year: 2017, type: "Qo'shma dasturlar" },
  { org: 'Xyuston Universiteti',              year: 2022, type: "Tadqiqot almashinuvi" },
  { org: 'Pekin Konservatoriyasi',            year: 2020, type: "Madaniy almashinuv" },
  { org: "Berliner Universität der Künste",   year: 2023, type: "Talabalar almashinuvi" },
];

export default function Xalqaro() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Xalqaro aloqalar"
        title="Global"
        emphasis="Hamkorlik"
        breadcrumbs={BREADCRUMBS}
      />

      {/* Statistika */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', background: 'var(--navy)', borderBottom: '2px solid var(--gold)' }}>
        {STATS.map((s, i) => (
          <div key={s.label} style={{ padding: '36px 20px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
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

          {/* Hamkor tashkilotlar */}
          <div className="section-divider" style={{ marginTop: 0 }}>
            <h2>Hamkor tashkilotlar</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--light-border)', border: '1px solid var(--light-border)', marginBottom: '50px' }}>
            {PARTNERS.map((p) => (
              <div key={p.name} style={{ background: 'var(--white)', padding: '28px 20px', textAlign: 'center', transition: '0.3s', cursor: 'pointer' }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'var(--light-50)'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'var(--white)'; }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{p.flag}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', color: 'var(--navy)', lineHeight: 1.3, marginBottom: '6px' }}>{p.name}</div>
                <div style={{ fontSize: '0.7rem', color: '#888', fontFamily: 'var(--font-sans)', letterSpacing: '1px', textTransform: 'uppercase' }}>{p.country}</div>
              </div>
            ))}
          </div>

          {/* Xalqaro dasturlar */}
          <div className="section-divider">
            <h2>Xalqaro dasturlar</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '50px' }}>
            {PROGRAMS.map((prog) => (
              <div key={prog.title} style={{ background: 'var(--white)', border: '1px solid var(--light-border)', padding: '28px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--navy)', fontWeight: 400 }}>{prog.title}</h3>
                    <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '3px 10px', background: prog.color, color: 'var(--white)', fontFamily: 'var(--font-sans)', flexShrink: 0 }}>
                      {prog.badge}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.6, fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>{prog.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Memorandumlar */}
          <div className="section-divider">
            <h2>Xalqaro memorandumlar</h2>
          </div>

          <div className="doc-list" style={{ marginBottom: '60px' }}>
            {MEMORANDUMS.map((m) => (
              <div key={m.org} className="doc-item">
                <div className="doc-info">
                  <div className="doc-icon" style={{ background: 'var(--light-50)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <div className="doc-name">{m.org}</div>
                    <div className="doc-meta">{m.type} · {m.year}-yil</div>
                  </div>
                </div>
                <a href="#" className="doc-download">BATAFSIL</a>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
