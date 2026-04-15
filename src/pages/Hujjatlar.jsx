import PageHero from '../components/PageHero';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Konservatoriya' },
  { label: "Me'yoriy hujjatlar" },
];

const DOCUMENTS = [
  { title: 'Konservatoriya Ustavi', date: "O'zgartirilgan sana: 2023-yil 12-may" },
];

export default function Hujjatlar() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Konservatoriya"
        title="Me'yoriy"
        emphasis="Hujjatlar"
        breadcrumbs={BREADCRUMBS}
      />
      <section className="main-content">
        <div className="container">
          <article className="article-body">
            <p className="lead">
              O'zbekiston davlat konservatoriyasi faoliyatini tartibga soluvchi asosiy
              normativ-huquqiy hujjatlar.
            </p>
            <div className="doc-list">
              {DOCUMENTS.map((doc) => (
                <div key={doc.title} className="doc-item">
                  <div className="doc-info">
                    <div className="doc-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                    </div>
                    <div>
                      <div className="doc-name">{doc.title}</div>
                      <div className="doc-meta">{doc.date}</div>
                    </div>
                  </div>
                  <a href="#" className="doc-download">YUKLAB OLISH (PDF)</a>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
