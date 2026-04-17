import PageHero from '../components/PageHero';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Talabalar uchun', to: '/talabalar' },
  { label: 'Dars jadvali' },
];

const DAYS = ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma'];
const TIMES = ['08:30 – 10:00', '10:15 – 11:45', '12:30 – 14:00', '14:15 – 15:45', '16:00 – 17:30'];

const SCHEDULE = {
  'Dushanba':   ['Solfejio (203-xona)', 'Fortepiano (101-xona)', '—', 'Musiqa nazariyasi (205-xona)', '—'],
  'Seshanba':   ['—', 'Cholg\'u ansambli (Zal)', 'Garmoniya (204-xona)', '—', 'Vokal (102-xona)'],
  'Chorshanba': ['Fortepiano (101-xona)', '—', 'Solfejio (203-xona)', 'Kompozitsiya (206-xona)', '—'],
  'Payshanba':  ['Musiqa tarixi (207-xona)', 'Vokal (102-xona)', '—', 'Fortepiano (101-xona)', 'Garmoniya (204-xona)'],
  'Juma':       ['—', 'Musiqa nazariyasi (205-xona)', 'Cholg\'u ansambli (Zal)', '—', '—'],
};

const FACULTIES = [
  "Akademik xonandalik fakulteti",
  "Cholg'u ijrochiligi fakulteti",
  "Kompozitsiya va musiqa nazariyasi",
  "Xalq cholg'ulari fakulteti",
  "Musiqa san'ati va pedagogika fakulteti",
];

export default function DarsJadvali() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Talabalar uchun"
        title="Dars"
        emphasis="Jadvali"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">

          {/* Info banner */}
          <div style={{
            background: 'var(--navy)',
            borderLeft: '4px solid var(--gold)',
            padding: '20px 28px',
            marginBottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
            <p style={{ fontSize: '0.88rem', color: 'rgba(240,237,232,0.8)', fontFamily: 'var(--font-serif)', lineHeight: 1.6, margin: 0 }}>
              To'liq va individual dars jadvalingiz <strong style={{ color: 'var(--gold-light)' }}>HEMIS</strong> tizimida mavjud.
              Quyidagi jadval 2025–2026 o'quv yili, 2-semestr uchun namunaviy jadval hisoblanadi.
            </p>
          </div>

          {/* Filter row */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '32px' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--gold-dark)', alignSelf: 'center', fontFamily: 'var(--font-sans)' }}>
              Fakultet:
            </div>
            {FACULTIES.map((f, i) => (
              <button key={f} style={{
                padding: '7px 16px',
                background: i === 0 ? 'var(--navy)' : 'var(--white)',
                border: `1px solid ${i === 0 ? 'var(--navy)' : 'var(--light-border)'}`,
                color: i === 0 ? 'var(--white)' : '#555',
                fontSize: '0.75rem',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                transition: 'all 0.2s',
              }}>
                {f.split(' ')[0]}...
              </button>
            ))}
          </div>

          {/* Schedule table */}
          <div className="section-divider" style={{ marginTop: 0 }}>
            <h2>Haftalik jadval — Bakalavr, 2-kurs</h2>
          </div>

          <div style={{ overflowX: 'auto', marginBottom: '50px' }}>
            <table style={{
              width: '100%', borderCollapse: 'collapse',
              background: 'var(--white)', border: '1px solid var(--light-border)',
              fontSize: '0.85rem',
            }}>
              <thead>
                <tr style={{ background: 'var(--navy)' }}>
                  <th style={{ padding: '14px 18px', color: 'var(--gold-light)', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '1.5px', textTransform: 'uppercase', textAlign: 'left', whiteSpace: 'nowrap', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
                    Vaqt
                  </th>
                  {DAYS.map((d) => (
                    <th key={d} style={{ padding: '14px 18px', color: 'var(--gold-light)', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '1.5px', textTransform: 'uppercase', textAlign: 'left', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
                      {d}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TIMES.map((time, ti) => (
                  <tr key={time} style={{ borderBottom: '1px solid var(--light-border)', background: ti % 2 === 0 ? 'var(--white)' : 'var(--light-50)' }}>
                    <td style={{ padding: '14px 18px', color: 'var(--navy)', fontWeight: 700, fontFamily: 'var(--font-sans)', fontSize: '0.78rem', whiteSpace: 'nowrap', borderRight: '1px solid var(--light-border)' }}>
                      {time}
                    </td>
                    {DAYS.map((d) => {
                      const cell = SCHEDULE[d][ti];
                      const isEmpty = cell === '—';
                      return (
                        <td key={d} style={{ padding: '14px 18px', color: isEmpty ? '#ccc' : 'var(--navy)', fontFamily: 'var(--font-sans)', borderRight: '1px solid var(--light-border)', fontSize: '0.82rem' }}>
                          {isEmpty ? '—' : (
                            <div>
                              <div style={{ fontWeight: 500, marginBottom: '2px' }}>{cell.split('(')[0].trim()}</div>
                              <div style={{ fontSize: '0.7rem', color: 'var(--gold-dark)', fontStyle: 'italic' }}>
                                {cell.match(/\(([^)]+)\)/)?.[1]}
                              </div>
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="g-3" style={{ marginBottom: '60px' }}>
            {[
              { label: 'Nazariy darslar', color: 'var(--navy)', desc: '203, 204, 205, 206, 207-xonalar' },
              { label: 'Amaliy mashg\'ulotlar', color: 'var(--gold-dark)', desc: '101, 102-xonalar (individual)' },
              { label: 'Ansambl / Konsert', color: '#555', desc: 'Katta kontsert zali' },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '16px 20px', background: 'var(--white)', border: '1px solid var(--light-border)' }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: item.color, flexShrink: 0, marginTop: 3 }} />
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '3px', fontFamily: 'var(--font-sans)' }}>{item.label}</div>
                  <div style={{ fontSize: '0.72rem', color: '#888' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* HEMIS CTA */}
          <div style={{
            background: 'linear-gradient(110deg, var(--navy) 0%, var(--navy-light) 100%)',
            padding: '40px 48px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            borderTop: '3px solid var(--gold)',
            marginBottom: '60px',
            flexWrap: 'wrap', gap: '20px',
          }}>
            <div>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px', fontFamily: 'var(--font-sans)' }}>Shaxsiy jadval</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--white)', fontWeight: 300, marginBottom: '6px' }}>
                HEMIS tizimiga kiring
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'rgba(240,237,232,0.6)', fontFamily: 'var(--font-serif)' }}>
                O'zingizning individual dars jadvalingizni ko'ring
              </p>
            </div>
            <a href="https://student.hemis.uz" target="_blank" rel="noopener noreferrer" style={{
              padding: '14px 36px',
              background: 'var(--gold)',
              color: '#08081a',
              textDecoration: 'none',
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              flexShrink: 0,
            }}>
              HEMIS ga o'tish →
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
