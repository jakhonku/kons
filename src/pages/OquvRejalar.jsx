import { useState } from 'react';
import { FileText, Eye, Download } from 'lucide-react';
import PageHero from '../components/PageHero';
import { OQUV_REJALAR } from '../data/oquvRejalar';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Talabalar uchun', to: '/talabalar' },
  { label: "Oʻquv rejalar" },
];

// "60210100 - Texnogen san'at (...)" → { code, title }
function splitName(name) {
  const m = name.match(/^([0-9]+)\s*-\s*(.+)$/);
  if (m) return { code: m[1], title: m[2] };
  return { code: '', title: name };
}

function LevelBlock({ level, duration, courses }) {
  const [active, setActive] = useState(courses[0]?.kurs);
  const current = courses.find((c) => c.kurs === active) || courses[0];

  return (
    <div style={{ marginBottom: '64px' }}>
      <div className="section-divider" style={{ marginTop: 0 }}>
        <h2>{level} — {duration}</h2>
      </div>

      {/* Kurs tablari */}
      <div className="oquv-tabs">
        {courses.map((c) => (
          <button
            key={c.kurs}
            type="button"
            className={`oquv-tab${c.kurs === active ? ' oquv-tab-active' : ''}`}
            onClick={() => setActive(c.kurs)}
          >
            {c.kurs}-kurs
            <span className="oquv-tab-count">{c.items.length}</span>
          </button>
        ))}
      </div>

      {/* Tanlangan kurs roʻyxati */}
      <div className="doc-list" style={{ paddingTop: '24px', marginBottom: 0 }}>
        {current.items.map((it, i) => {
          const { code, title } = splitName(it.name);
          return (
            <div key={i} className="doc-item">
              <div className="doc-info">
                <div className="doc-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, flexShrink: 0, color: 'var(--gold-dark)' }}>
                  <FileText size={20} strokeWidth={1.6} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div className="doc-name">{title}</div>
                  <div className="doc-meta">
                    {code ? `Yoʻnalish kodi: ${code} · ` : ''}{level} · {current.kurs}-kurs · 2025–2026
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                <a
                  href={it.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="oquv-btn oquv-btn-view"
                >
                  <Eye size={13} strokeWidth={2} /> Koʻrish
                </a>
                <a
                  href={it.pdf}
                  download
                  aria-label={`${title} — yuklab olish`}
                  className="oquv-btn oquv-btn-dl"
                >
                  <Download size={13} strokeWidth={2} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function OquvRejalar() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Talabalar uchun"
        title="Ishchi oʻquv"
        emphasis="rejalar"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">

          <article className="article-body" style={{ marginBottom: '30px' }}>
            <p className="lead">
              2025–2026 oʻquv yili uchun bakalavriat va magistratura taʼlim yoʻnalishlari boʻyicha
              ishchi oʻquv rejalari. Kurs va yoʻnalishni tanlab, rejani PDF formatida koʻrishingiz yoki
              yuklab olishingiz mumkin.
            </p>
          </article>

          {OQUV_REJALAR.map((lvl) => (
            <LevelBlock key={lvl.level} {...lvl} />
          ))}

          <div style={{
            background: 'var(--cream)', border: '1px solid var(--light-border)',
            borderLeft: '4px solid var(--gold)', padding: '20px 28px', marginBottom: '60px',
          }}>
            <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.7, fontFamily: 'var(--font-serif)', margin: 0 }}>
              Oʻquv rejalari har yili <strong style={{ color: 'var(--navy)' }}>Oʻzbekiston Respublikasi Oliy taʼlim, fan va innovatsiyalar vazirligi</strong> tomonidan
              tasdiqlangan davlat taʼlim standartlari asosida yangilanadi. Batafsil maʼlumot uchun Taʼlim ishlari boʻyicha prorektorat bilan bogʻlaning.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
