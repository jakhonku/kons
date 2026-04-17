import PageHero from '../components/PageHero';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Talabalar uchun', to: '/talabalar' },
  { label: "O'quv rejalar" },
];

const PLANS = [
  {
    level: 'Bakalavr',
    duration: '4 yil',
    programs: [
      { name: 'Fortepiano', code: '5111300', hours: 240, kafedra: "Fortepiano kafedrasi" },
      { name: 'Akademik xonandalik', code: '5111100', hours: 240, kafedra: "Xonandalik kafedrasi" },
      { name: "Cholg'u ijrochiligi (skripka)", code: '5111200', hours: 240, kafedra: "Torli-kamon kafedrasi" },
      { name: "Cholg'u ijrochiligi (viолончel)", code: '5111201', hours: 240, kafedra: "Torli-kamon kafedrasi" },
      { name: 'Kompozitsiya', code: '5111400', hours: 240, kafedra: "Kompozitsiya kafedrasi" },
      { name: "Xalq cholg'ulari (dutor)", code: '5111500', hours: 240, kafedra: "Xalq cholg'ulari kafedrasi" },
    ],
  },
  {
    level: 'Magistratura',
    duration: '2 yil',
    programs: [
      { name: 'Musiqa san\'ati (ijrochilik)', code: '5A111100', hours: 120, kafedra: 'Ilmiy-ijodiy kafedrasi' },
      { name: 'Musiqa nazariyasi va pedagogikasi', code: '5A111200', hours: 120, kafedra: 'Musiqa nazariyasi kafedrasi' },
      { name: 'Kompozitsiya', code: '5A111300', hours: 120, kafedra: 'Kompozitsiya kafedrasi' },
    ],
  },
];

export default function OquvRejalar() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Talabalar uchun"
        title="O'quv"
        emphasis="Rejalar"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">

          {PLANS.map((section) => (
            <div key={section.level}>
              <div className="section-divider" style={{ marginTop: section.level === 'Bakalavr' ? 0 : undefined }}>
                <h2>{section.level} — {section.duration}</h2>
              </div>

              <div style={{ overflowX: 'auto', marginBottom: '50px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--white)', border: '1px solid var(--light-border)', fontSize: '0.85rem' }}>
                  <thead>
                    <tr style={{ background: 'var(--navy)' }}>
                      {["Yo'nalish nomi", "Kod", "Jami soat", "Kafedra"].map((h) => (
                        <th key={h} style={{ padding: '14px 20px', color: 'var(--gold-light)', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.7rem', letterSpacing: '1.5px', textTransform: 'uppercase', textAlign: 'left', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
                          {h}
                        </th>
                      ))}
                      <th style={{ padding: '14px 20px', color: 'var(--gold-light)', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.7rem', letterSpacing: '1.5px', textTransform: 'uppercase', textAlign: 'center' }}>
                        Fayl
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.programs.map((p, i) => (
                      <tr key={p.code} style={{ borderBottom: '1px solid var(--light-border)', background: i % 2 === 0 ? 'var(--white)' : 'var(--light-50)' }}>
                        <td style={{ padding: '14px 20px', color: 'var(--navy)', fontWeight: 500, fontFamily: 'var(--font-sans)' }}>{p.name}</td>
                        <td style={{ padding: '14px 20px', color: 'var(--gold-dark)', fontFamily: 'var(--font-sans)', fontSize: '0.78rem' }}>{p.code}</td>
                        <td style={{ padding: '14px 20px', color: '#555', fontFamily: 'var(--font-sans)' }}>{p.hours} s.</td>
                        <td style={{ padding: '14px 20px', color: '#888', fontFamily: 'var(--font-sans)', fontSize: '0.8rem' }}>{p.kafedra}</td>
                        <td style={{ padding: '14px 20px', textAlign: 'center' }}>
                          <button style={{
                            padding: '5px 14px', background: 'transparent',
                            border: '1px solid var(--gold-dark)', color: 'var(--gold-dark)',
                            fontSize: '0.7rem', fontFamily: 'var(--font-sans)', cursor: 'pointer',
                            fontWeight: 600, letterSpacing: '0.5px',
                          }}>
                            PDF ↓
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {/* Note */}
          <div style={{
            background: 'var(--cream)', border: '1px solid var(--light-border)',
            borderLeft: '4px solid var(--gold)', padding: '20px 28px', marginBottom: '60px',
          }}>
            <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.7, fontFamily: 'var(--font-serif)', margin: 0 }}>
              O'quv rejalari har yili <strong style={{ color: 'var(--navy)' }}>O'zbekiston Respublikasi Oliy ta'lim vazirligi</strong> tomonidan
              tasdiqlangan standartlar asosida yangilanadi. Batafsil ma'lumot uchun Ta'lim ishlari bo'yicha prorektorat bilan bog'laning.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
