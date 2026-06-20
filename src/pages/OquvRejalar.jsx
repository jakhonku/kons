import { useState } from 'react';
import { FileText, Eye, Download } from 'lucide-react';
import PageHero from '../components/PageHero';
import { OQUV_REJALAR } from '../data/oquvRejalar';
import { useTranslation } from '../contexts/LanguageContext';

const T = {
  uz: {
    crumbHome: 'Bosh sahifa', crumbStudents: 'Talabalar uchun', crumbThis: 'Oʻquv rejalar',
    heroTag: 'Talabalar uchun', heroTitle: 'Ishchi oʻquv', heroEm: 'rejalar',
    lead: '2025–2026 oʻquv yili uchun bakalavriat va magistratura taʼlim yoʻnalishlari boʻyicha ishchi oʻquv rejalari. Kurs va yoʻnalishni tanlab, rejani PDF formatida koʻrishingiz yoki yuklab olishingiz mumkin.',
    kurs: 'kurs', codeLabel: 'Yoʻnalish kodi', view: 'Koʻrish', download: 'yuklab olish',
    notePre: 'Oʻquv rejalari har yili ',
    noteBold: 'Oʻzbekiston Respublikasi Oliy taʼlim, fan va innovatsiyalar vazirligi',
    notePost: ' tomonidan tasdiqlangan davlat taʼlim standartlari asosida yangilanadi. Batafsil maʼlumot uchun Taʼlim ishlari boʻyicha prorektorat bilan bogʻlaning.',
    levels: { 'Bakalavriat': 'Bakalavriat', 'Magistratura': 'Magistratura' },
    durations: { '4 yil': '4 yil', '2 yil': '2 yil' },
  },
  ru: {
    crumbHome: 'Главная', crumbStudents: 'Для студентов', crumbThis: 'Учебные планы',
    heroTag: 'Для студентов', heroTitle: 'Рабочие учебные', heroEm: 'планы',
    lead: 'Рабочие учебные планы по направлениям бакалавриата и магистратуры на 2025–2026 учебный год. Выбрав курс и направление, вы можете просмотреть план в формате PDF или скачать его.',
    kurs: 'курс', codeLabel: 'Код направления', view: 'Просмотр', download: 'скачать',
    notePre: 'Учебные планы ежегодно обновляются на основе государственных образовательных стандартов, утверждённых ',
    noteBold: 'Министерством высшего образования, науки и инноваций Республики Узбекистан',
    notePost: '. За подробной информацией обращайтесь в проректорат по учебной работе.',
    levels: { 'Bakalavriat': 'Бакалавриат', 'Magistratura': 'Магистратура' },
    durations: { '4 yil': '4 года', '2 yil': '2 года' },
  },
  en: {
    crumbHome: 'Home', crumbStudents: 'For students', crumbThis: 'Curricula',
    heroTag: 'For students', heroTitle: 'Working', heroEm: 'curricula',
    lead: 'Working curricula for bachelor’s and master’s programmes for the 2025–2026 academic year. By selecting a course and a programme, you can view the curriculum in PDF format or download it.',
    kurs: 'year', codeLabel: 'Programme code', view: 'View', download: 'download',
    notePre: 'Curricula are updated annually on the basis of state educational standards approved by the ',
    noteBold: 'Ministry of Higher Education, Science and Innovation of the Republic of Uzbekistan',
    notePost: '. For detailed information, contact the Vice-Rectorate for Academic Affairs.',
    levels: { 'Bakalavriat': 'Bachelor’s', 'Magistratura': 'Master’s' },
    durations: { '4 yil': '4 years', '2 yil': '2 years' },
  },
};

// "60210100 - Texnogen san'at (...)" → { code, title }
function splitName(name) {
  const m = name.match(/^([0-9]+)\s*-\s*(.+)$/);
  if (m) return { code: m[1], title: m[2] };
  return { code: '', title: name };
}

function LevelBlock({ level, duration, courses, tr }) {
  const [active, setActive] = useState(courses[0]?.kurs);
  const current = courses.find((c) => c.kurs === active) || courses[0];
  const levelLabel = tr.levels[level] || level;
  const durationLabel = tr.durations[duration] || duration;

  return (
    <div style={{ marginBottom: '64px' }}>
      <div className="section-divider" style={{ marginTop: 0 }}>
        <h2>{levelLabel} — {durationLabel}</h2>
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
            {c.kurs}-{tr.kurs}
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
                    {code ? `${tr.codeLabel}: ${code} · ` : ''}{levelLabel} · {current.kurs}-{tr.kurs} · 2025–2026
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
                  <Eye size={13} strokeWidth={2} /> {tr.view}
                </a>
                <a
                  href={it.pdf}
                  download
                  aria-label={`${title} — ${tr.download}`}
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
  const { lang } = useTranslation();
  const tr = T[lang] || T.uz;

  const BREADCRUMBS = [
    { label: tr.crumbHome, to: '/' },
    { label: tr.crumbStudents, to: '/talabalar' },
    { label: tr.crumbThis },
  ];

  return (
    <main className="content-wrapper">
      <PageHero
        tag={tr.heroTag}
        title={tr.heroTitle}
        emphasis={tr.heroEm}
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">

          <article className="article-body" style={{ marginBottom: '30px' }}>
            <p className="lead">
              {tr.lead}
            </p>
          </article>

          {OQUV_REJALAR.map((lvl) => (
            <LevelBlock key={lvl.level} {...lvl} tr={tr} />
          ))}

          <div style={{
            background: 'var(--cream)', border: '1px solid var(--light-border)',
            borderLeft: '4px solid var(--gold)', padding: '20px 28px', marginBottom: '60px',
          }}>
            <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.7, fontFamily: 'var(--font-serif)', margin: 0 }}>
              {tr.notePre}<strong style={{ color: 'var(--navy)' }}>{tr.noteBold}</strong>{tr.notePost}
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
