import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import { FileText, Download, Eye } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PDF_BASE = '/qabul-dasturlari';

// Qabul dasturlari va baholash mezonlari (taʼlim yoʻnalishlari boʻyicha)
const PROGRAMS = [
  { code: '60210100', name: 'Texnogen sanʼat — musiqiy ovoz rejissyorligi', file: 'ovoz-rejissyorligi' },
  { code: '60210900', name: 'Bastakorlik sanʼati', file: 'bastakorlik' },
  { code: '60211000', name: 'Sanʼatshunoslik — musiqashunoslik', file: 'musiqashunoslik' },
  { code: '60211300', name: 'Dirijyorlik — akademik xor dirijyorligi', file: 'xor-dirijyorligi' },
  { code: '60211300', name: 'Dirijyorlik — opera-simfoniya dirijyorligi', file: 'opera-simfoniya-dirijyorligi' },
  { code: '60211400', name: 'Vokal sanʼati — akademik xonandalik', file: 'vokal-akademik-xonandalik' },
  { code: '60211500', name: 'Cholgʻu ijrochiligi — fortepiano, organ', file: 'fortepiano-organ' },
  { code: '60211500', name: 'Cholgʻu ijrochiligi — puflama va zarbli cholgʻular', file: 'puflama-zarbli' },
  { code: '60211500', name: 'Cholgʻu ijrochiligi — torli cholgʻular', file: 'torli-cholgular' },
  { code: '60211500', name: 'Cholgʻu ijrochiligi — xalq cholgʻulari (ud, qonun)', file: 'xalq-cholgulari' },
].map((p) => ({ ...p, pdf: `${PDF_BASE}/${p.code}-${p.file}.pdf` }));

const CONTENT = {
  uz: {
    tag: 'Qabul', title: 'Qabul dasturlari', emphasis: 'va baholash mezonlari',
    breadcrumbs: [{ label: 'Bosh sahifa', to: '/' }, { label: 'Qabul' }, { label: 'Qabul dasturlari va baholash mezonlari' }],
    lead: 'Kasbiy (ijodiy) imtihonlar har bir taʼlim yoʻnalishi boʻyicha alohida dastur va baholash mezonlari asosida oʻtkaziladi. Quyidagi hujjatlardan oʻzingiz tanlagan yoʻnalish boʻyicha imtihon talablari, bosqichlari va baholash mezonlari bilan batafsil tanishishingiz mumkin.',
    examHeading: 'Imtihon bosqichlari',
    stages: ['Ixtisoslik (ijro yoki ijod)', 'Solfejio va musiqa nazariyasi', 'Garmoniya (baʼzi yoʻnalishlar uchun)', 'Suhbat'],
    progHeading: 'Qabul dasturlari va baholash mezonlari',
    codeLabel: 'Taʼlim yoʻnalishi kodi', metaTail: 'Baholash mezonlari',
    view: 'Koʻrish', download: 'yuklab olish',
    noteHeading: 'Qoʻshimcha maʼlumot',
    noteText: 'Kasbiy va ijodiy imtihonlar boʻyicha savollar uchun Qabul komissiyasiga murojaat qiling: qabul@konservatoriya.uz · +998 71 234-56-90',
  },
  ru: {
    tag: 'Приём', title: 'Программы приёма', emphasis: 'и критерии оценки',
    breadcrumbs: [{ label: 'Главная', to: '/' }, { label: 'Приём' }, { label: 'Программы приёма и критерии оценки' }],
    lead: 'Профессиональные (творческие) экзамены проводятся по каждому направлению образования на основе отдельной программы и критериев оценки. В приведённых документах вы можете подробно ознакомиться с требованиями, этапами и критериями оценки по выбранному направлению.',
    examHeading: 'Этапы экзамена',
    stages: ['Специальность (исполнение или творчество)', 'Сольфеджио и теория музыки', 'Гармония (для некоторых направлений)', 'Собеседование'],
    progHeading: 'Программы приёма и критерии оценки',
    codeLabel: 'Код направления', metaTail: 'Критерии оценки',
    view: 'Просмотр', download: 'скачать',
    noteHeading: 'Дополнительная информация',
    noteText: 'По вопросам профессиональных и творческих экзаменов обращайтесь в Приёмную комиссию: qabul@konservatoriya.uz · +998 71 234-56-90',
  },
  en: {
    tag: 'Admissions', title: 'Admission programmes', emphasis: 'and assessment criteria',
    breadcrumbs: [{ label: 'Home', to: '/' }, { label: 'Admissions' }, { label: 'Admission programmes and assessment criteria' }],
    lead: 'Professional (creative) exams are held for each programme of study on the basis of a separate programme and assessment criteria. In the documents below you can review in detail the requirements, stages and assessment criteria for your chosen programme.',
    examHeading: 'Exam stages',
    stages: ['Specialty (performance or composition)', 'Solfeggio and music theory', 'Harmony (for some programmes)', 'Interview'],
    progHeading: 'Admission programmes and assessment criteria',
    codeLabel: 'Programme code', metaTail: 'Assessment criteria',
    view: 'View', download: 'download',
    noteHeading: 'Additional information',
    noteText: 'For questions about professional and creative exams, contact the Admissions Committee: qabul@konservatoriya.uz · +998 71 234-56-90',
  },
};

export default function QabulTalablari() {
  const { lang } = useLanguage();
  const c = CONTENT[lang] || CONTENT.uz;

  return (
    <>
      <Seo title="Qabul dasturlari va baholash mezonlari" description="Oʻzbekiston Davlat Konservatoriyasi kasbiy va ijodiy imtihonlari: taʼlim yoʻnalishlari boʻyicha qabul dasturlari va baholash mezonlari (PDF)." />
      <main className="content-wrapper">
        <PageHero tag={c.tag} title={c.title} emphasis={c.emphasis} breadcrumbs={c.breadcrumbs} />

        <section className="main-content">
          <div className="container">

            <article className="article-body" style={{ marginBottom: '20px' }}>
              <p className="lead">{c.lead}</p>
            </article>

            <div className="section-divider" style={{ marginTop: 0 }}>
              <h2>{c.examHeading}</h2>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 60px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              {c.stages.map((it, i) => (
                <li key={i} style={{ background: 'var(--white)', border: '1px solid var(--light-border)', borderLeft: '3px solid var(--gold)', padding: '18px 24px', fontSize: '1rem', color: '#444', fontFamily: 'var(--font-serif)' }}>
                  {it}
                </li>
              ))}
            </ul>

            <div className="section-divider">
              <h2>{c.progHeading}</h2>
            </div>
            <div className="doc-list" style={{ marginBottom: '40px' }}>
              {PROGRAMS.map((p) => (
                <div key={`${p.code}-${p.file}`} className="doc-item">
                  <div className="doc-info">
                    <div className="doc-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, flexShrink: 0, color: 'var(--gold-dark)' }}>
                      <FileText size={20} strokeWidth={1.6} />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div className="doc-name" style={{ overflowWrap: 'anywhere' }}>{p.name}</div>
                      <div className="doc-meta">{c.codeLabel}: {p.code} &nbsp;·&nbsp; PDF · {c.metaTail}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                    <a href={p.pdf} target="_blank" rel="noopener noreferrer" className="oquv-btn oquv-btn-view">
                      <Eye size={13} strokeWidth={2} /> {c.view}
                    </a>
                    <a href={p.pdf} download aria-label={`${p.name} — ${c.download}`} className="oquv-btn oquv-btn-dl">
                      <Download size={13} strokeWidth={2} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--cream)', border: '1px solid var(--light-border)', borderLeft: '4px solid var(--gold)', padding: '24px 32px', marginBottom: '60px' }}>
              <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '1rem', marginBottom: '8px' }}>{c.noteHeading}</h4>
              <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.7, fontFamily: 'var(--font-serif)', margin: 0 }}>{c.noteText}</p>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
