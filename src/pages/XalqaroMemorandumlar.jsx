import PageHero from '../components/PageHero';
import { FileText, Download } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Xalqaro aloqalar', to: '/xalqaro' },
  { label: 'Xalqaro memorandumlar' },
];

const MEMORANDUMS = [
  { org: 'Moskva Davlat Konservatoriyasi',           country: 'Rossiya',      flag: '🇷🇺', year: 2017, type: "Qo'shma dasturlar",    status: 'Faol' },
  { org: 'Sankt-Peterburg Davlat Konservatoriyasi',  country: 'Rossiya',      flag: '🇷🇺', year: 2018, type: 'Ilmiy hamkorlik',       status: 'Faol' },
  { org: 'Vena Musiqa va Sanoat Badiiy Universiteti', country: 'Avstriya',    flag: '🇦🇹', year: 2019, type: 'Talabalar almashinuvi', status: 'Faol' },
  { org: "Qozog'iston Milliy Konservatoriyasi",       country: "Qozog'iston", flag: '🇰🇿', year: 2016, type: 'Talabalar almashinuvi', status: 'Faol' },
  { org: "Seul Milliy Universiteti San'at Kolleji",   country: 'Janubiy Koreya', flag: '🇰🇷', year: 2019, type: 'Talabalar almashinuvi', status: 'Faol' },
  { org: "Istambul Davlat Konservatoriyasi",          country: 'Turkiya',     flag: '🇹🇷', year: 2020, type: "Qo'shma konsertlar",   status: 'Faol' },
  { org: 'Pekin Musiqa Konservatoriyasi',             country: 'Xitoy',       flag: '🇨🇳', year: 2020, type: 'Madaniy almashinuv',   status: 'Faol' },
  { org: 'Varshava Frederic Chopin Musiqa Universiteti', country: 'Polsha',   flag: '🇵🇱', year: 2020, type: 'Erasmus+ almashinuvi', status: 'Faol' },
  { org: 'Parij Milliy Oliy Musiqa Konservatoriyasi', country: 'Fransiya',   flag: '🇫🇷', year: 2021, type: 'Ilmiy hamkorlik',       status: 'Faol' },
  { org: 'Xyuston Universiteti Moores Musiqa Maktabi', country: 'AQSh',      flag: '🇺🇸', year: 2022, type: 'Tadqiqot almashinuvi', status: 'Faol' },
  { org: "Tokio Musiqa va Badiiy San'at Universiteti", country: 'Yaponiya',  flag: '🇯🇵', year: 2022, type: 'Talabalar almashinuvi', status: 'Yangi' },
  { org: "Berliner Universität der Künste",           country: 'Germaniya',  flag: '🇩🇪', year: 2023, type: 'Talabalar almashinuvi', status: 'Yangi' },
  { org: 'Juilliard Maktabi',                         country: 'AQSh',       flag: '🇺🇸', year: 2023, type: 'Master-klass',          status: 'Yangi' },
  { org: "Barselona Oliy Musiqa Maktabi (ESMUC)",     country: 'Ispaniya',   flag: '🇪🇸', year: 2022, type: "Qo'shma dasturlar",    status: 'Yangi' },
  { org: "Ozarbayjon Davlat Konservatoriyasi",         country: 'Ozarbayjon', flag: '🇦🇿', year: 2019, type: 'Madaniy almashinuv',   status: 'Faol' },
];

export default function XalqaroMemorandumlar() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Xalqaro aloqalar"
        title="Xalqaro"
        emphasis="Memorandumlar"
        breadcrumbs={BREADCRUMBS}
      />

      <div className="page-stats-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', background: 'var(--navy)', borderBottom: '2px solid var(--gold)' }}>
        {[
          { num: '15', label: 'Faol memorandum' },
          { num: '40+', label: 'Davlat' },
          { num: '2016', label: 'Birinchi memorandum' },
          { num: '2023', label: "So'nggi imzo" },
        ].map((s, i) => (
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
              Xalqaro hamkorlik memorandumlari (MOU) konservatoriyaning dunyodagi yetakchi musiqa
              institutlari bilan rasmiy hamkorligining huquqiy asosini tashkil etadi.
            </p>
          </article>

          <div className="section-divider" style={{ marginTop: 0 }}>
            <h2>Memorandumlar ro'yxati</h2>
          </div>

          <div className="doc-list" style={{ marginBottom: '60px' }}>
            {MEMORANDUMS.map((m) => (
              <div key={m.org + m.year} className="doc-item">
                <div className="doc-info">
                  <div className="doc-icon" style={{ background: 'var(--light-50)', fontSize: '1.3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, flexShrink: 0 }}>
                    {m.flag}
                  </div>
                  <div>
                    <div className="doc-name">{m.org}</div>
                    <div className="doc-meta">
                      {m.country} &nbsp;·&nbsp; {m.type} &nbsp;·&nbsp; {m.year}-yil
                      <span style={{
                        marginLeft: 10, fontSize: '0.6rem', fontWeight: 700,
                        letterSpacing: '1.5px', textTransform: 'uppercase',
                        padding: '2px 8px', fontFamily: 'var(--font-sans)',
                        background: m.status === 'Faol' ? '#dcfce7' : '#fef9c3',
                        color: m.status === 'Faol' ? '#15803d' : '#854d0e',
                      }}>{m.status}</span>
                    </div>
                  </div>
                </div>
                <button
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px', border: '1px solid var(--light-border)', background: 'none', cursor: 'pointer', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--navy)', fontFamily: 'var(--font-sans)', transition: '0.2s' }}
                  onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold-dark)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--light-border)'; e.currentTarget.style.color = 'var(--navy)'; }}
                >
                  <FileText size={13} strokeWidth={2} /> BATAFSIL
                </button>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--cream)', border: '1px solid var(--light-border)', borderLeft: '4px solid var(--gold)', padding: '24px 32px', marginBottom: '60px' }}>
            <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '1rem', marginBottom: '8px' }}>
              Yangi hamkorlik takliflari
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.7, fontFamily: 'var(--font-serif)', margin: 0 }}>
              Xalqaro hamkorlik memorandumi tuzish bo'yicha murojaat uchun: Xalqaro aloqalar bo'limi,
              2-bino 201-xona · international@konservatoriya.uz · +998 71 234-56-91
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
