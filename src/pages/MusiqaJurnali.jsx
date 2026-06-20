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
          <div className="jurnal-stats">
            {[
              { num: String(ISSUES.length), label: 'Mavjud sonlar' },
              { num: `${YEARS[YEARS.length - 1]}–${YEARS[0]}`, label: 'Yillar' },
              { num: '4', label: 'Yiliga son' },
            ].map((s) => (
              <div key={s.label} className="jurnal-stat">
                <div className="jurnal-stat-num">{s.num}</div>
                <div className="jurnal-stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Jurnal sonlari — yil boʻyicha guruhlangan */}
          {YEARS.map((year) => (
            <div key={year}>
              <div className="section-divider" style={year === YEARS[0] ? { marginTop: 0 } : undefined}>
                <h2>{year}-yil sonlari</h2>
              </div>

              <div className="jurnal-grid">
                {ISSUES.filter((i) => i.year === year).map((issue) => (
                  <div key={`${issue.year}-${issue.number}`} className="jurnal-card">
                    <a
                      href={issue.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="jurnal-cover"
                      aria-label={`"Musiqa" jurnali ${issue.year}-yil №${issue.number}-son — ochish`}
                    >
                      <img
                        src={`${PDF_BASE}/covers/musiqa-${issue.year}-${issue.number}.jpg`}
                        alt={`"Musiqa" jurnali ${issue.year}-yil №${issue.number}-son muqovasi`}
                        loading="lazy"
                        onError={(e) => {
                          if (e.currentTarget.dataset.fallback) return;
                          e.currentTarget.dataset.fallback = '1';
                          e.currentTarget.src = '/jurnallar/musiqa-cover.png';
                          e.currentTarget.style.objectFit = 'contain';
                          e.currentTarget.style.padding = '24px';
                        }}
                      />
                      <span className="jurnal-cover-overlay">
                        <Eye size={16} /> Ochish
                      </span>
                    </a>
                    <div className="jurnal-card-body">
                      <div className="jurnal-card-year">{issue.year}-yil</div>
                      <h3 className="jurnal-card-son">№{issue.number}-son</h3>
                      <div className="jurnal-card-actions">
                        <a
                          href={issue.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="jurnal-btn jurnal-btn-read"
                        >
                          <Eye size={13} /> Oʻqish
                        </a>
                        <a
                          href={issue.pdf}
                          download
                          className="jurnal-btn jurnal-btn-download"
                          aria-label={`${issue.year}-yil №${issue.number}-son — yuklab olish`}
                        >
                          <Download size={13} />
                        </a>
                      </div>
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
