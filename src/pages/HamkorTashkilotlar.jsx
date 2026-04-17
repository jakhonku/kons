import PageHero from '../components/PageHero';
import { Globe, ExternalLink } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Xalqaro aloqalar', to: '/xalqaro' },
  { label: 'Hamkor tashkilotlar' },
];

const STATS = [
  { num: '120+', label: 'Hamkor tashkilot' },
  { num: '40+',  label: 'Davlat' },
  { num: '15',   label: 'Faol memorandum' },
  { num: '200+', label: "Chet ellik o'qituvchi" },
];

const REGIONS = [
  {
    region: 'Yevropa',
    partners: [
      { name: 'Vena Musiqa va Sanoat Badiiy Universiteti', country: 'Avstriya',   flag: '🇦🇹', type: 'Talabalar almashinuvi', since: 2019, status: 'Faol' },
      { name: 'Parij Milliy Oliy Musiqa Konservatoriyasi', country: 'Fransiya',   flag: '🇫🇷', type: 'Ilmiy hamkorlik',       since: 2021, status: 'Faol' },
      { name: "Berliner Universität der Künste",           country: 'Germaniya',  flag: '🇩🇪', type: 'Talabalar almashinuvi', since: 2023, status: 'Faol' },
      { name: 'Varshava Frederic Chopin Musiqa Universiteti', country: 'Polsha', flag: '🇵🇱', type: 'Erasmus+ almashinuvi',  since: 2020, status: 'Faol' },
      { name: 'Rim Santa Cecilia Milliy Akademiyasi',      country: 'Italiya',    flag: '🇮🇹', type: 'Madaniy almashinuv',   since: 2018, status: 'Faol' },
      { name: 'Barselona Oliy Musiqa Maktabi (ESMUC)',     country: 'Ispaniya',   flag: '🇪🇸', type: "Qo'shma dasturlar",    since: 2022, status: 'Yangi' },
    ],
  },
  {
    region: 'Amerika',
    partners: [
      { name: 'Xyuston Universitet Moores Musiqa Maktabi', country: 'AQSh',      flag: '🇺🇸', type: 'Tadqiqot almashinuvi', since: 2022, status: 'Faol' },
      { name: 'Juilliard Maktabi',                         country: 'AQSh',      flag: '🇺🇸', type: 'Master-klass',         since: 2023, status: 'Faol' },
      { name: 'Berklee Musiqa Kolleji',                    country: 'AQSh',      flag: '🇺🇸', type: 'Onlayn ta\'lim',       since: 2021, status: 'Faol' },
    ],
  },
  {
    region: 'Osiyo',
    partners: [
      { name: 'Pekin Musiqa Konservatoriyasi',              country: 'Xitoy',     flag: '🇨🇳', type: 'Madaniy almashinuv',   since: 2020, status: 'Faol' },
      { name: "Seul Milliy Universiteti San'at Kolleji",    country: 'Janubiy Koreya', flag: '🇰🇷', type: 'Talabalar almashinuvi', since: 2019, status: 'Faol' },
      { name: "Istambul Davlat Konservatoriyasi",           country: 'Turkiya',   flag: '🇹🇷', type: "Qo'shma konsertlar",   since: 2020, status: 'Faol' },
      { name: 'Tokio Musiqa va Badiiy San\'at Universiteti', country: 'Yaponiya', flag: '🇯🇵', type: 'Talabalar almashinuvi', since: 2022, status: 'Yangi' },
    ],
  },
  {
    region: "MDH va Markaziy Osiyo",
    partners: [
      { name: 'Moskva Davlat Konservatoriyasi',             country: 'Rossiya',   flag: '🇷🇺', type: "Qo'shma dasturlar",    since: 2017, status: 'Faol' },
      { name: 'Sankt-Peterburg Davlat Konservatoriyasi',   country: 'Rossiya',   flag: '🇷🇺', type: 'Ilmiy hamkorlik',       since: 2018, status: 'Faol' },
      { name: "Qozog'iston Milliy Konservatoriyasi",        country: "Qozog'iston", flag: '🇰🇿', type: 'Talabalar almashinuvi', since: 2016, status: 'Faol' },
      { name: "Ozarbayjon Davlat Konservatoriyasi",         country: 'Ozarbayjon', flag: '🇦🇿', type: 'Madaniy almashinuv',  since: 2019, status: 'Faol' },
    ],
  },
];

export default function HamkorTashkilotlar() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Xalqaro aloqalar"
        title="Hamkor"
        emphasis="Tashkilotlar"
        breadcrumbs={BREADCRUMBS}
      />

      <div className="page-stats-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', background: 'var(--navy)', borderBottom: '2px solid var(--gold)' }}>
        {STATS.map((s, i) => (
          <div key={s.label} style={{ padding: '36px 20px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1, marginBottom: '8px' }}>{s.num}</div>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-sans)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      <section className="main-content">
        <div className="container">

          <article className="article-body" style={{ marginBottom: '20px' }}>
            <p className="lead">
              O'zbekiston Davlat Konservatoriyasi dunyo bo'ylab 120 dan ortiq yetakchi musiqa
              institutlari va universitetlari bilan faol hamkorlik olib boradi.
            </p>
          </article>

          {REGIONS.map((r) => (
            <div key={r.region}>
              <div className="section-divider" style={{ marginTop: 0 }}>
                <h2>{r.region}</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--light-border)', border: '1px solid var(--light-border)', marginBottom: '40px' }} className="page-stats-3">
                {r.partners.map((p) => (
                  <div key={p.name} style={{ background: 'var(--white)', padding: '24px 20px', transition: '0.3s', display: 'flex', flexDirection: 'column', gap: '10px' }}
                    onMouseOver={(e) => { e.currentTarget.style.background = 'var(--light-50)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'var(--white)'; }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                      <span style={{ fontSize: '1.8rem', lineHeight: 1, flexShrink: 0 }}>{p.flag}</span>
                      <span style={{
                        fontSize: '0.6rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase',
                        padding: '3px 8px', fontFamily: 'var(--font-sans)', flexShrink: 0,
                        background: p.status === 'Faol' ? '#dcfce7' : '#fef9c3',
                        color: p.status === 'Faol' ? '#15803d' : '#854d0e',
                      }}>{p.status}</span>
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.92rem', color: 'var(--navy)', lineHeight: 1.35 }}>{p.name}</div>
                    <div style={{ fontSize: '0.72rem', color: '#888', fontFamily: 'var(--font-sans)' }}>
                      <span>{p.country}</span>
                      <span style={{ margin: '0 8px', opacity: 0.4 }}>·</span>
                      <span>{p.type}</span>
                      <span style={{ margin: '0 8px', opacity: 0.4 }}>·</span>
                      <span>{p.since}-yildan</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={{ background: 'var(--navy)', padding: '40px', textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ color: 'var(--gold)', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
              <Globe size={36} strokeWidth={1.2} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 300, color: 'var(--white)', marginBottom: '12px' }}>
              Yangi <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Hamkorlik</span>
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem', marginBottom: '24px', fontFamily: 'var(--font-serif)', fontStyle: 'italic', maxWidth: 500, margin: '0 auto 24px' }}>
              Xalqaro hamkorlik bo'yicha takliflaringiz yoki savolaringiz bo'lsa, Xalqaro aloqalar bo'limi bilan bog'laning.
            </p>
            <a href="/kontaktlar" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '12px 36px', border: '1px solid var(--gold)', color: 'var(--gold)',
              textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: '0.72rem',
              fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', transition: '0.3s',
            }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = '#08081a'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)'; }}
            >
              <ExternalLink size={14} strokeWidth={2} /> BOG'LANISH
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
