import { useState, useEffect } from 'react';
import InfoPage from '../components/InfoPage';
import Seo from '../components/Seo';
import { useLanguage } from '../contexts/LanguageContext';
import { FileText, Download, Eye, Search, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

const CONTENT = {
  uz: {
    tag: 'Qabul',
    title: 'Imtihon',
    emphasis: 'natijalari',
    breadcrumbs: [
      { label: 'Bosh sahifa', to: '/' },
      { label: 'Qabul' },
      { label: 'Imtihon natijalari' },
    ],
    lead: 'Oʻtkazilgan kasbiy (ijodiy) imtihonlar boʻyicha qaydnomalar va yakuniy natijalar.',
    searchPlaceholder: 'Cholgʻu yoki yoʻnalish boʻyicha qidirish...',
    download: 'Yuklab olish',
    preview: 'Koʻrish',
    docType: 'PDF hujjat',
    noResults: 'Hech qanday natija topilmadi',
    previewTitle: 'Hujjatni koʻrish',
    documentsTitle: 'Natijalar roʻyxati',
    infoHeading: 'Natijalarni tekshirish',
    infoText: 'Imtihon natijalari har bir bosqich yakunlangandan soʻng 24 soat ichida eʼlon qilinadi.',
    loading: 'Yuklanmoqda…',
  },
  ru: {
    tag: 'Приём',
    title: 'Результаты',
    emphasis: 'экзаменов',
    breadcrumbs: [
      { label: 'Главная', to: '/' },
      { label: 'Приём' },
      { label: 'Результаты экзаменов' },
    ],
    lead: 'Ведомости и итоговые результаты проведенных профессиональных (творческих) экзаменов.',
    searchPlaceholder: 'Поиск по инструменту или направлению...',
    download: 'Скачать',
    preview: 'Просмотр',
    docType: 'PDF документ',
    noResults: 'Результатов не найдено',
    previewTitle: 'Просмотр документа',
    documentsTitle: 'Список результатов',
    infoHeading: 'Проверка результатов',
    infoText: 'Результаты экзаменов публикуются в течение 24 часов после завершения каждого этапа.',
    loading: 'Загрузка…',
  },
  en: {
    tag: 'Admissions',
    title: 'Exam',
    emphasis: 'results',
    breadcrumbs: [
      { label: 'Home', to: '/' },
      { label: 'Admissions' },
      { label: 'Exam Results' },
    ],
    lead: 'Records and final results of the professional (creative) exams held.',
    searchPlaceholder: 'Search by instrument or direction...',
    download: 'Download',
    preview: 'View',
    docType: 'PDF document',
    noResults: 'No results found',
    previewTitle: 'Document Preview',
    documentsTitle: 'Results List',
    infoHeading: 'Checking Results',
    infoText: 'Exam results are published within 24 hours after the completion of each stage.',
    loading: 'Loading…',
  },
};

export default function ImtihonNatijalari() {
  const { lang } = useLanguage();
  const c = CONTENT[lang] || CONTENT.uz;
  const [searchQuery, setSearchQuery] = useState('');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      const { data } = await supabase
        .from('imtihon_natijalari')
        .select('*')
        .order('sana', { ascending: false })
        .order('sort_order', { ascending: true });
      if (!cancelled) {
        const mapped = (data || []).map(item => ({
          id: item.id.toString(),
          urls: {
            uz: item.file_url,
            ru: item.file_url,
            en: item.file_url
          },
          title: {
            uz: item.title,
            ru: item.title,
            en: item.title
          },
          meta: {
            uz: `PDF hujjat · Sana: ${item.sana}`,
            ru: `PDF документ · Дата: ${item.sana}`,
            en: `PDF document · Date: ${item.sana}`
          }
        }));
        setItems(mapped);
        if (mapped.length > 0) {
          setSelectedId(mapped[0].id);
        }
        setLoading(false);
      }
    }
    load();

    const channel = supabase
      .channel('public-imtihon-natijalari-live')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'imtihon_natijalari' }, () => {
        load();
      })
      .subscribe();

    return () => {
      cancelled = true;
      supabase.removeChannel(channel);
    };
  }, []);

  const filteredDocs = items.filter(doc => {
    const titleText = (doc.title[lang] || doc.title.uz).toLowerCase();
    const metaText = (doc.meta[lang] || doc.meta.uz).toLowerCase();
    const search = searchQuery.toLowerCase();
    return titleText.includes(search) || metaText.includes(search);
  });

  const activeDoc = filteredDocs.find(d => d.id === selectedId) || filteredDocs[0];

  const handleItemClick = (doc) => {
    if (window.innerWidth < 992) {
      window.open(doc.urls[lang] || doc.urls.uz, '_blank', 'noopener,noreferrer');
    } else {
      setSelectedId(doc.id);
    }
  };

  return (
    <>
      <Seo
        title={lang === 'ru' ? 'Результаты экзаменов — Консерватория' : lang === 'en' ? 'Exam Results — Conservatory' : 'Imtihon natijalari — Konservatoriya'}
        description={c.lead}
      />
      <style>{`
        .results-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          margin-bottom: 60px;
          align-items: start;
        }
        @media (min-width: 992px) {
          .results-layout {
            grid-template-columns: 5fr 7fr;
          }
        }
        .search-container {
          position: relative;
          margin-bottom: 24px;
        }
        .search-field {
          width: 100%;
          padding: 14px 18px 14px 46px;
          border: 1px solid var(--light-border);
          background: var(--white);
          font-family: var(--font-sans);
          font-size: 0.92rem;
          color: var(--navy);
          border-radius: 6px;
          transition: all 0.25s ease;
        }
        .search-field:focus {
          outline: none;
          border-color: var(--gold);
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.12);
        }
        .search-icon-wrapper {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #888;
          pointer-events: none;
          display: flex;
          align-items: center;
        }
        .results-sidebar {
          display: flex;
          flex-direction: column;
        }
        .results-list {
          display: flex;
          flex-direction: column;
          border: 1px solid var(--light-border);
          border-radius: 6px;
          overflow: hidden;
          background: var(--white);
        }
        .results-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid var(--light-border);
          transition: all 0.25s ease;
          gap: 16px;
          cursor: pointer;
          user-select: none;
        }
        .results-item:last-child {
          border-bottom: none;
        }
        .results-item:hover {
          background: var(--cream);
        }
        @media (min-width: 992px) {
          .results-item.active {
            background: var(--cream);
            box-shadow: inset 4px 0 0 var(--gold);
            padding-left: 28px;
          }
          .results-item.active .results-doc-icon {
            background: var(--gold) !important;
            border-color: var(--gold) !important;
            color: #08081a !important;
          }
          .results-item.active .results-doc-name {
            color: var(--gold-dark) !important;
          }
        }
        .results-doc-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--light-50);
          border: 1px solid var(--light-border);
          color: var(--gold-dark);
          transition: all 0.25s ease;
          flex-shrink: 0;
        }
        .results-item:hover .results-doc-icon {
          background: var(--gold);
          border-color: var(--gold);
          color: #08081a;
        }
        .results-doc-name {
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--navy);
          line-height: 1.35;
          margin-bottom: 4px;
          transition: color 0.25s ease;
        }
        .results-item:hover .results-doc-name {
          color: var(--gold-dark);
        }
        .results-doc-meta {
          font-size: 0.8rem;
          color: #888;
        }
        .results-preview-pane {
          border: 1px solid var(--light-border);
          border-radius: 6px;
          overflow: hidden;
          background: var(--light-50);
          position: sticky;
          top: 100px;
        }
        @media (max-width: 991px) {
          .results-preview-pane {
            display: none;
          }
          .results-item {
            padding: 16px 18px;
          }
          .results-doc-icon {
            width: 38px;
            height: 38px;
          }
          .results-doc-name {
            font-size: 0.9rem;
          }
        }
        .results-preview-header {
          background: var(--white);
          border-bottom: 1px solid var(--light-border);
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .results-preview-title {
          font-family: var(--font-display);
          font-size: 0.95rem;
          color: var(--navy);
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .no-results-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 24px;
          text-align: center;
          color: #888;
          font-family: var(--font-sans);
          font-size: 0.9rem;
          border: 1px dashed var(--light-border);
          border-radius: 6px;
          background: var(--light-50);
        }
      `}</style>

      <InfoPage
        tag={c.tag}
        title={c.title}
        emphasis={c.emphasis}
        breadcrumbs={c.breadcrumbs}
        lead={c.lead}
        sections={[
          {
            heading: c.infoHeading,
            text: c.infoText,
          }
        ]}
      >
        <div className="section-divider" style={{ marginTop: '20px' }}>
          <h2>{c.documentsTitle}</h2>
        </div>

        {loading ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#888', padding: '100px 0', fontFamily: 'var(--font-serif)', justifyContent: 'center' }}>
            <Loader2 size={24} style={{ animation: 'spin 1s linear infinite', color: 'var(--gold)' }} />
            <span>{c.loading}</span>
          </div>
        ) : (
          <div className="results-layout">
            {/* List / Sidebar Column */}
            <div className="results-sidebar">
              <div className="search-container">
                <div className="search-icon-wrapper">
                  <Search size={18} />
                </div>
                <input
                  type="text"
                  className="search-field"
                  placeholder={c.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {filteredDocs.length > 0 ? (
                <div className="results-list">
                  {filteredDocs.map((doc) => {
                    const docTitle = doc.title[lang] || doc.title.uz;
                    const docMeta = doc.meta[lang] || doc.meta.uz;
                    const docUrl = doc.urls[lang] || doc.urls.uz;

                    return (
                      <div
                        key={doc.id}
                        className={`results-item ${activeDoc?.id === doc.id ? 'active' : ''}`}
                        onClick={() => handleItemClick(doc)}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, minWidth: 0 }}>
                          <div className="results-doc-icon">
                            <FileText size={18} strokeWidth={1.8} />
                          </div>
                          <div style={{ minWidth: 0 }}>
                            <div className="results-doc-name" style={{ overflowWrap: 'anywhere' }}>
                              {docTitle}
                            </div>
                            <div className="results-doc-meta">{docMeta}</div>
                          </div>
                        </div>
                        <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }} onClick={(e) => e.stopPropagation()}>
                          <a
                            href={docUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="oquv-btn oquv-btn-view"
                            style={{ padding: '6px 12px' }}
                            title={c.preview}
                          >
                            <Eye size={13} strokeWidth={2} />
                          </a>
                          <a
                            href={docUrl}
                            download
                            className="oquv-btn oquv-btn-dl"
                            style={{ padding: '6px 12px' }}
                            title={c.download}
                          >
                            <Download size={13} strokeWidth={2} />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="no-results-box">
                  <AlertCircle size={24} style={{ marginBottom: '8px', color: 'var(--gold-dark)' }} />
                  <div>{c.noResults}</div>
                </div>
              )}
            </div>

            {/* Interactive PDF Preview Column */}
            {activeDoc ? (
              <div className="results-preview-pane">
                <div className="results-preview-header">
                  <span className="results-preview-title" title={activeDoc.title[lang] || activeDoc.title.uz}>
                    {activeDoc.title[lang] || activeDoc.title.uz}
                  </span>
                  <a
                    href={activeDoc.urls[lang] || activeDoc.urls.uz}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="oquv-btn oquv-btn-view"
                    style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', padding: '6px 12px' }}
                  >
                    <Eye size={13} strokeWidth={2} />
                    <span>{c.preview}</span>
                  </a>
                </div>
                <div style={{ position: 'relative', width: '100%', height: '70vh', minHeight: '480px' }}>
                  <iframe
                    src={activeDoc.urls[lang] || activeDoc.urls.uz}
                    title={activeDoc.title[lang] || activeDoc.title.uz}
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none',
                      display: 'block',
                    }}
                  />
                </div>
              </div>
            ) : (
              <div className="no-results-box" style={{ minHeight: '300px' }}>
                <AlertCircle size={28} style={{ marginBottom: '10px', color: 'var(--gold-dark)' }} />
                <div>{c.noResults}</div>
              </div>
            )}
          </div>
        )}
      </InfoPage>
    </>
  );
}
