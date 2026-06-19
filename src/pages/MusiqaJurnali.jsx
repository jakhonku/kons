import PageHero from '../components/PageHero';
import { Download, Eye } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Konservatoriya', to: '/tuzilma' },
  { label: '"Musiqa" jurnali' },
];

const PDF_BASE = '/jurnallar/musiqa';

// Jurnalning mavjud sonlari (PDF fayllar bilan). Yangi son qoʻshilsa —
// shu roʻyxatga { year, number } qoʻshiladi va PDF public/jurnallar/musiqa ga joylanadi.
const ISSUES = [
  { year: 2025, number: 4 },
  { year: 2025, number: 3 },
  { year: 2025, number: 2 },
  { year: 2025, number: 1 },
  { year: 2024, number: 4 },
  { year: 2024, number: 3 },
  { year: 2024, number: 2 },
  { year: 2024, number: 1 },
  { year: 2023, number: 4 },
  { year: 2023, number: 3 },
  { year: 2023, number: 2 },
  { year: 2023, number: 1 },
  { year: 2022, number: 4 },
  { year: 2022, number: 3 },
  { year: 2022, number: 2 },
  { year: 2021, number: 4 },
  { year: 2021, number: 3 },
  { year: 2021, number: 1 },
  { year: 2020, number: 4 },
  { year: 2020, number: 2 },
  { year: 2020, number: 1 },
  { year: 2019, number: 4 },
  { year: 2019, number: 3 },
  { year: 2019, number: 2 },
  { year: 2019, number: 1 },
  { year: 2018, number: 4 },
  { year: 2018, number: 3 },
  { year: 2018, number: 2 },
  { year: 2018, number: 1 },
].map((it) => ({ ...it, pdf: `${PDF_BASE}/musiqa-${it.year}-${it.number}.pdf` }));

const YEARS = [...new Set(ISSUES.map((i) => i.year))];

export default function MusiqaJurnali() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Konservatoriya"
        title='"Musiqa"'
        emphasis="Jurnali"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">

          {/* Stats — faqat aniq maʼlumotlar */}
          <div className="jurnal-stats" style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            background: 'var(--navy)', borderBottom: '2px solid var(--gold)', marginBottom: '60px',
          }}>
            {[
              { num: String(ISSUES.length), label: 'Mavjud sonlar' },
              { num: `${YEARS[YEARS.length - 1]}–${YEARS[0]}`, label: 'Yillar' },
              { num: '4', label: 'Yiliga son' },
            ].map((s) => (
              <div key={s.label} style={{ padding: '32px 20px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1, marginBottom: '8px' }}>{s.num}</div>
                <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Jurnal sonlari — yil boʻyicha guruhlangan */}
          {YEARS.map((year) => (
            <div key={year}>
              <div className="section-divider" style={year === YEARS[0] ? { marginTop: 0 } : undefined}>
                <h2>{year}-yil sonlari</h2>
              </div>

              <div className="g-3" style={{ marginBottom: '50px' }}>
                {ISSUES.filter((i) => i.year === year).map((issue) => (
                  <div key={`${issue.year}-${issue.number}`} style={{
                    background: 'var(--white)', border: '1px solid var(--light-border)',
                    borderTop: '3px solid var(--gold)', padding: '32px',
                    transition: 'box-shadow 0.3s',
                  }}
                    onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(26,26,56,0.1)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    <div style={{
                      marginBottom: '18px', borderRadius: '4px', overflow: 'hidden',
                      border: '1px solid var(--light-border)', boxShadow: '0 6px 20px rgba(26,26,56,0.08)',
                      background: 'var(--cream)',
                    }}>
                      <img
                        src={`${PDF_BASE}/covers/musiqa-${issue.year}-${issue.number}.jpg`}
                        alt={`"Musiqa" jurnali ${issue.year}-yil №${issue.number}-son muqovasi`}
                        loading="lazy"
                        onError={(e) => {
                          if (e.currentTarget.dataset.fallback) return;
                          e.currentTarget.dataset.fallback = '1';
                          e.currentTarget.src = '/jurnallar/musiqa-cover.png';
                          e.currentTarget.style.padding = '48px 24px';
                        }}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                      />
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 300, color: 'var(--gold-dark)', lineHeight: 1, marginBottom: '6px' }}>
                      {issue.year}-yil
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--navy)', marginBottom: '20px', fontWeight: 400 }}>
                      №{issue.number}-son
                    </h3>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      <a href={issue.pdf} target="_blank" rel="noopener noreferrer" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                        padding: '10px 20px', background: 'var(--navy)',
                        color: 'var(--white)', textDecoration: 'none',
                        fontFamily: 'var(--font-sans)', fontWeight: 700,
                        fontSize: '0.72rem', letterSpacing: '1.5px', textTransform: 'uppercase',
                        transition: 'background 0.2s',
                      }}
                        onMouseOver={(e) => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = '#08081a'; }}
                        onMouseOut={(e) => { e.currentTarget.style.background = 'var(--navy)'; e.currentTarget.style.color = 'var(--white)'; }}
                      >
                        <Eye size={14} /> Online oʻqish
                      </a>
                      <a href={issue.pdf} download style={{
                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                        padding: '10px 20px', background: 'transparent',
                        border: '1px solid var(--gold)', color: 'var(--gold-dark)',
                        textDecoration: 'none', fontFamily: 'var(--font-sans)',
                        fontWeight: 700, fontSize: '0.72rem', letterSpacing: '1.5px', textTransform: 'uppercase',
                        transition: 'background 0.2s',
                      }}
                        onMouseOver={(e) => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = '#08081a'; }}
                        onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold-dark)'; }}
                      >
                        <Download size={14} /> Yuklab olish
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>
    </main>
  );
}
