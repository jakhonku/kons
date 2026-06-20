import PageHero from '../components/PageHero';
import { FileText, Download, Eye } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Qabul' },
  { label: 'Kasbiy va ijodiy imtihonlar' },
];

const PDF_BASE = '/qabul-dasturlari';

// Qabul dasturlari va baholash mezonlari (taʼlim yoʻnalishlari boʻyicha)
const PROGRAMS = [
  { code: '60210100', name: "Texnogen sanʼat — musiqiy ovoz rejissyorligi", file: 'ovoz-rejissyorligi' },
  { code: '60210900', name: "Bastakorlik sanʼati", file: 'bastakorlik' },
  { code: '60211000', name: "Sanʼatshunoslik — musiqashunoslik", file: 'musiqashunoslik' },
  { code: '60211300', name: "Dirijyorlik — akademik xor dirijyorligi", file: 'xor-dirijyorligi' },
  { code: '60211300', name: "Dirijyorlik — opera-simfoniya dirijyorligi", file: 'opera-simfoniya-dirijyorligi' },
  { code: '60211400', name: "Vokal sanʼati — akademik xonandalik", file: 'vokal-akademik-xonandalik' },
  { code: '60211500', name: "Cholgʻu ijrochiligi — fortepiano, organ", file: 'fortepiano-organ' },
  { code: '60211500', name: "Cholgʻu ijrochiligi — puflama va zarbli cholgʻular", file: 'puflama-zarbli' },
  { code: '60211500', name: "Cholgʻu ijrochiligi — torli cholgʻular", file: 'torli-cholgular' },
  { code: '60211500', name: "Cholgʻu ijrochiligi — xalq cholgʻulari (ud, qonun)", file: 'xalq-cholgulari' },
].map((p) => ({ ...p, pdf: `${PDF_BASE}/${p.code}-${p.file}.pdf` }));

export default function KasbiyImtihonlar() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Qabul"
        title="Kasbiy va Ijodiy"
        emphasis="Imtihonlar"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">

          <article className="article-body" style={{ marginBottom: '20px' }}>
            <p className="lead">
              Kasbiy (ijodiy) imtihonlar har bir taʼlim yoʻnalishi boʻyicha alohida dastur va
              baholash mezonlari asosida oʻtkaziladi. Quyidagi hujjatlardan oʻzingiz tanlagan
              yoʻnalish boʻyicha imtihon talablari, bosqichlari va baholash mezonlari bilan
              batafsil tanishishingiz mumkin.
            </p>
          </article>

          <div className="section-divider" style={{ marginTop: 0 }}>
            <h2>Imtihon bosqichlari</h2>
          </div>

          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 60px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {[
              'Ixtisoslik (ijro yoki ijod)',
              'Solfejio va musiqa nazariyasi',
              "Garmoniya (baʼzi yoʻnalishlar uchun)",
              'Suhbat',
            ].map((it, i) => (
              <li key={i} style={{ background: 'var(--white)', border: '1px solid var(--light-border)', borderLeft: '3px solid var(--gold)', padding: '18px 24px', fontSize: '1rem', color: '#444', fontFamily: 'var(--font-serif)' }}>
                {it}
              </li>
            ))}
          </ul>

          <div className="section-divider">
            <h2>Qabul dasturlari va baholash mezonlari</h2>
          </div>

          <div className="doc-list" style={{ marginBottom: '40px' }}>
            {PROGRAMS.map((p) => (
              <div key={`${p.code}-${p.file}`} className="doc-item">
                <div className="doc-info">
                  <div className="doc-icon" style={{ background: 'var(--light-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, flexShrink: 0, color: 'var(--gold-dark)' }}>
                    <FileText size={20} strokeWidth={1.6} />
                  </div>
                  <div>
                    <div className="doc-name">{p.name}</div>
                    <div className="doc-meta">Taʼlim yoʻnalishi kodi: {p.code} &nbsp;·&nbsp; PDF · Baholash mezonlari</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                  <a
                    href={p.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px', border: '1px solid var(--light-border)', background: 'none', cursor: 'pointer', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--navy)', fontFamily: 'var(--font-sans)', textDecoration: 'none', transition: '0.2s' }}
                    onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold-dark)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--light-border)'; e.currentTarget.style.color = 'var(--navy)'; }}
                  >
                    <Eye size={13} strokeWidth={2} /> Koʻrish
                  </a>
                  <a
                    href={p.pdf}
                    download
                    aria-label={`${p.name} — yuklab olish`}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 14px', border: '1px solid var(--gold)', background: 'none', cursor: 'pointer', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--gold-dark)', fontFamily: 'var(--font-sans)', textDecoration: 'none', transition: '0.2s' }}
                    onMouseOver={(e) => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = '#08081a'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--gold-dark)'; }}
                  >
                    <Download size={13} strokeWidth={2} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--cream)', border: '1px solid var(--light-border)', borderLeft: '4px solid var(--gold)', padding: '24px 32px', marginBottom: '60px' }}>
            <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '1rem', marginBottom: '8px' }}>
              Qoʻshimcha maʼlumot
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.7, fontFamily: 'var(--font-serif)', margin: 0 }}>
              Kasbiy va ijodiy imtihonlar boʻyicha savollar uchun Qabul komissiyasiga murojaat qiling:
              qabul@konservatoriya.uz · +998 71 234-56-90
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
