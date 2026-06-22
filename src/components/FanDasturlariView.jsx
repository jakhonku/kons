import { useState, useMemo } from 'react';
import { FileText, Eye, Download, Search, FileSpreadsheet } from 'lucide-react';
import PageHero from './PageHero';
import { TALIM_DASTURLARI } from '../data/talimDasturlari';
import { useTranslation } from '../contexts/LanguageContext';

/* Umumiy UI matnlari (sahifa nomidan mustaqil). */
const UI = {
  uz: {
    searchPlaceholder: 'Fan yoki kafedra nomi boʻyicha qidirish…',
    fanCount: (n) => `${n} ta fan`,
    view: 'Koʻrish', download: 'yuklab olish', open: 'Ochish',
    noResults: 'Qidiruv boʻyicha hech narsa topilmadi.',
    extrasHeading: 'Qoʻshimcha hujjatlar',
    notePre: 'Barcha fan dasturlari ',
    noteBold: 'Oʻzbekiston Davlat Konservatoriyasi',
    notePost: ' kafedralari tomonidan tayyorlangan. Qoʻshimcha maʼlumot uchun tegishli kafedra bilan bogʻlaning.',
    levels: { Bakalavriat: 'Bakalavriat', Magistratura: 'Magistratura' },
  },
  ru: {
    searchPlaceholder: 'Поиск по названию дисциплины или кафедры…',
    fanCount: (n) => `дисциплин: ${n}`,
    view: 'Просмотр', download: 'скачать', open: 'Открыть',
    noResults: 'По вашему запросу ничего не найдено.',
    extrasHeading: 'Дополнительные документы',
    notePre: 'Все учебные программы подготовлены кафедрами ',
    noteBold: 'Государственной консерватории Узбекистана',
    notePost: '. За дополнительной информацией обращайтесь на соответствующую кафедру.',
    levels: { Bakalavriat: 'Бакалавриат', Magistratura: 'Магистратура' },
  },
  en: {
    searchPlaceholder: 'Search by subject or department name…',
    fanCount: (n) => `${n} subjects`,
    view: 'View', download: 'download', open: 'Open',
    noResults: 'Nothing was found for your query.',
    extrasHeading: 'Additional documents',
    notePre: 'All subject programmes are prepared by the departments of the ',
    noteBold: 'State Conservatory of Uzbekistan',
    notePost: '. For more information, please contact the relevant department.',
    levels: { Bakalavriat: 'Bachelor’s', Magistratura: 'Master’s' },
  },
};

function KafedraBlock({ kafedra, ui }) {
  return (
    <div style={{ marginBottom: '36px' }}>
      <div style={{
        display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
        gap: '12px', flexWrap: 'wrap',
        borderBottom: '1px solid var(--light-border)', paddingBottom: '12px',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 300, color: 'var(--navy)',
          fontSize: 'clamp(1.05rem, 4.5vw, 1.4rem)', lineHeight: 1.3, margin: 0,
          letterSpacing: '-0.01em', overflowWrap: 'anywhere', minWidth: 0,
        }}>
          {kafedra.name}
        </h2>
        <span style={{
          flexShrink: 0, fontSize: '0.68rem', fontFamily: 'var(--font-sans)',
          color: 'var(--gold-dark)', fontWeight: 700, letterSpacing: '0.5px', whiteSpace: 'nowrap',
        }}>
          {ui.fanCount(kafedra.items.length)}
        </span>
      </div>

      <div className="doc-list" style={{ paddingTop: '20px', marginBottom: 0 }}>
        {kafedra.items.map((it, i) => (
          <div key={i} className="doc-item">
            <div className="doc-info">
              <div className="doc-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, flexShrink: 0, color: 'var(--gold-dark)' }}>
                <FileText size={20} strokeWidth={1.6} />
              </div>
              <div style={{ minWidth: 0 }}>
                <div className="doc-name" style={{ overflowWrap: 'anywhere' }}>{it.name}</div>
                <div className="doc-meta">PDF</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
              <a href={it.pdf} target="_blank" rel="noopener noreferrer" className="oquv-btn oquv-btn-view">
                <Eye size={13} strokeWidth={2} /> {ui.view}
              </a>
              <a href={it.pdf} download aria-label={`${it.name} — ${ui.download}`} className="oquv-btn oquv-btn-dl">
                <Download size={13} strokeWidth={2} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Fan (oʻquv) dasturlari roʻyxati — Taʼlim dasturlari va Fanning oʻquv
   dasturlari sahifalari uchun umumiy koʻrinish. */
export default function FanDasturlariView({ tag, title, emphasis, breadcrumbs, lead, showExtras = true }) {
  const { lang } = useTranslation();
  const ui = UI[lang] || UI.uz;

  const [activeLevel, setActiveLevel] = useState(TALIM_DASTURLARI[0]?.level);
  const [query, setQuery] = useState('');

  const current = TALIM_DASTURLARI.find((l) => l.level === activeLevel) || TALIM_DASTURLARI[0];

  const filteredKafedralar = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return current.kafedralar;
    return current.kafedralar
      .map((k) => {
        if (k.name.toLowerCase().includes(q)) return k;
        const items = k.items.filter((it) => it.name.toLowerCase().includes(q));
        return items.length ? { ...k, items } : null;
      })
      .filter(Boolean);
  }, [current, query]);

  return (
    <main className="content-wrapper">
      <PageHero tag={tag} title={title} emphasis={emphasis} breadcrumbs={breadcrumbs} />

      <section className="main-content">
        <div className="container">

          {lead && (
            <article className="article-body" style={{ marginBottom: '26px' }}>
              <p className="lead">{lead}</p>
            </article>
          )}

          {/* Level tabs */}
          <div className="oquv-tabs">
            {TALIM_DASTURLARI.map((lvl) => {
              const total = lvl.kafedralar.reduce((s, k) => s + k.items.length, 0);
              return (
                <button
                  key={lvl.level}
                  type="button"
                  className={`oquv-tab${lvl.level === activeLevel ? ' oquv-tab-active' : ''}`}
                  onClick={() => { setActiveLevel(lvl.level); setQuery(''); }}
                >
                  {ui.levels[lvl.level] || lvl.level}
                  <span className="oquv-tab-count">{total}</span>
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div style={{ position: 'relative', margin: '24px 0 36px' }}>
            <Search size={18} strokeWidth={2} style={{
              position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#999',
            }} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={ui.searchPlaceholder}
              style={{
                width: '100%', padding: '14px 16px 14px 46px',
                background: 'var(--white)', border: '1px solid var(--light-border)',
                fontSize: '0.9rem', fontFamily: 'var(--font-sans)', color: 'var(--navy)',
                outline: 'none',
              }}
            />
          </div>

          {/* Extras (e.g. ishchi oʻquv rejalar xlsx) */}
          {showExtras && !query && current.extras && current.extras.length > 0 && (
            <div style={{ marginBottom: '40px' }}>
              <div style={{
                borderBottom: '1px solid var(--light-border)', paddingBottom: '12px',
              }}>
                <h2 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 300, color: 'var(--navy)',
                  fontSize: 'clamp(1.05rem, 4.5vw, 1.4rem)', lineHeight: 1.3, margin: 0,
                  letterSpacing: '-0.01em', overflowWrap: 'anywhere',
                }}>{ui.extrasHeading}</h2>
              </div>
              <div className="doc-list" style={{ paddingTop: '20px', marginBottom: 0 }}>
                {current.extras.map((ex, i) => (
                  <div key={i} className="doc-item">
                    <div className="doc-info">
                      <div className="doc-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, flexShrink: 0, color: 'var(--gold-dark)' }}>
                        <FileSpreadsheet size={20} strokeWidth={1.6} />
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <div className="doc-name">{ex.name}</div>
                        <div className="doc-meta">{(ex.ext || '').toUpperCase()}</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                      <a href={ex.file} download className="oquv-btn oquv-btn-view">
                        <Download size={13} strokeWidth={2} /> {ui.open}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Kafedra blocks */}
          {filteredKafedralar.length === 0 ? (
            <p style={{ color: '#888', fontFamily: 'var(--font-serif)', padding: '20px 0', marginBottom: '40px' }}>
              {ui.noResults}
            </p>
          ) : (
            filteredKafedralar.map((k, i) => <KafedraBlock key={i} kafedra={k} ui={ui} />)
          )}

          <div style={{
            background: 'var(--cream)', border: '1px solid var(--light-border)',
            borderLeft: '4px solid var(--gold)', padding: '20px 28px', margin: '24px 0 60px',
          }}>
            <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.7, fontFamily: 'var(--font-serif)', margin: 0 }}>
              {ui.notePre}<strong style={{ color: 'var(--navy)' }}>{ui.noteBold}</strong>{ui.notePost}
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
