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
    tag: 'Qabul', title: 'Qabul', emphasis: 'talablari',
    breadcrumbs: [{ label: 'Bosh sahifa', to: '/' }, { label: 'Qabul' }, { label: 'Qabul talablari' }],
    lead: 'Abituriyentlar uchun qabul jarayoni, Qabul komissiyasi huzuridagi «Call-center», hamda kasbiy (ijodiy) imtihonlar dasturlari va baholash mezonlari.',
    callHeading: 'Qabul komissiyasi huzurida «Call-center»',
    callText:
      'Davlat oliy taʼlim muassasalariga 2026/2027-oʻquv yili uchun oʻqishga qabul qilish jarayonlarida abituriyentlar va ularning ota-onalari murojaatlariga tez hamda aniq javob, huquqiy tushuncha, shuningdek, maslahatlar berish maqsadida Oʻzbekiston davlat konservatoriyasi Qabul komissiyasi huzurida «Call-center» ishga tushirilgan.\n«Call-center» operatorlari 09:00 dan 18:00 ga qadar qabulga oid barcha savollarga javob beradi.',
    contactHeading: 'Murojaat uchun',
    cards: [
      { tag: 'Telefon', title: '+998 71 244-85-85', desc: '«Call-center» operatorlari qabulga oid barcha savollaringizga javob beradi.' },
      { tag: 'Ish vaqti', title: '09:00 — 18:00', desc: 'Operatorlar har kuni belgilangan vaqtda xizmat koʻrsatadi.' },
      { tag: 'Roʻyxatga olish', title: '5 — 25 iyun', desc: '2026/2027-oʻquv yili uchun abituriyentlarni roʻyxatga olish 5-iyundan 25-iyunga qadar (shu kuni ham) amalga oshiriladi.' },
    ],
    examLead: 'Kasbiy (ijodiy) imtihonlar har bir taʼlim yoʻnalishi boʻyicha alohida dastur va baholash mezonlari asosida oʻtkaziladi. Quyidagi hujjatlardan oʻzingiz tanlagan yoʻnalish boʻyicha imtihon talablari, bosqichlari va baholash mezonlari bilan batafsil tanishishingiz mumkin.',
    examHeading: 'Imtihon bosqichlari',
    stages: ['Ixtisoslik (ijro yoki ijod)', 'Solfejio va musiqa nazariyasi', 'Garmoniya (baʼzi yoʻnalishlar uchun)', 'Suhbat'],
    progHeading: 'Qabul dasturlari va baholash mezonlari',
    codeLabel: 'Taʼlim yoʻnalishi kodi', metaTail: 'Baholash mezonlari',
    view: 'Koʻrish', download: 'yuklab olish',
    noteHeading: 'Qoʻshimcha maʼlumot',
    noteText: 'Kasbiy va ijodiy imtihonlar boʻyicha savollar uchun Qabul komissiyasiga murojaat qiling: qabul@konservatoriya.uz · +998 71 234-56-90',
  },
  ru: {
    tag: 'Приём', title: 'Требования', emphasis: 'к приёму',
    breadcrumbs: [{ label: 'Главная', to: '/' }, { label: 'Приём' }, { label: 'Требования к приёму' }],
    lead: 'Процесс приёма для абитуриентов, «Call-центр» при Приёмной комиссии, а также программы профессиональных (творческих) экзаменов и критерии оценки.',
    callHeading: '«Call-центр» при Приёмной комиссии',
    callText:
      'В целях оперативного и точного ответа на обращения абитуриентов и их родителей, разъяснения правовых вопросов, а также предоставления консультаций в процессе приёма в государственные высшие учебные заведения на 2026/2027 учебный год, при Приёмной комиссии Государственной консерватории Узбекистана запущен «Call-центр».\nОператоры «Call-центра» отвечают на все вопросы, связанные с приёмом, с 09:00 до 18:00.',
    contactHeading: 'Для обращений',
    cards: [
      { tag: 'Телефон', title: '+998 71 244-85-85', desc: 'Операторы «Call-центра» ответят на все ваши вопросы по приёму.' },
      { tag: 'Время работы', title: '09:00 — 18:00', desc: 'Операторы обслуживают ежедневно в установленное время.' },
      { tag: 'Регистрация', title: '5 — 25 июня', desc: 'Регистрация абитуриентов на 2026/2027 учебный год проводится с 5 по 25 июня (включительно).' },
    ],
    examLead: 'Профессиональные (творческие) экзамены проводятся по каждому направлению образования на основе отдельной программы и критериев оценки. В приведённых документах вы можете подробно ознакомиться с требованиями, этапами и критериями оценки по выбранному направлению.',
    examHeading: 'Этапы экзамена',
    stages: ['Специальность (исполнение или творчество)', 'Сольфеджио и теория музыки', 'Гармония (для некоторых направлений)', 'Собеседование'],
    progHeading: 'Программы приёма и критерии оценки',
    codeLabel: 'Код направления', metaTail: 'Критерии оценки',
    view: 'Просмотр', download: 'скачать',
    noteHeading: 'Дополнительная информация',
    noteText: 'По вопросам профессиональных и творческих экзаменов обращайтесь в Приёмную комиссию: qabul@konservatoriya.uz · +998 71 234-56-90',
  },
  en: {
    tag: 'Admissions', title: 'Admission', emphasis: 'requirements',
    breadcrumbs: [{ label: 'Home', to: '/' }, { label: 'Admissions' }, { label: 'Admission requirements' }],
    lead: 'The admission process for applicants, the «Call Center» at the Admissions Committee, as well as professional (creative) exam programmes and assessment criteria.',
    callHeading: '«Call Center» at the Admissions Committee',
    callText:
      'To provide quick and accurate responses to inquiries from applicants and their parents, legal clarifications and consultations during the admission process to state higher education institutions for the 2026/2027 academic year, a «Call Center» has been launched at the Admissions Committee of the State Conservatory of Uzbekistan.\nThe «Call Center» operators answer all admission-related questions from 09:00 to 18:00.',
    contactHeading: 'Contact us',
    cards: [
      { tag: 'Phone', title: '+998 71 244-85-85', desc: 'The «Call Center» operators will answer all your admission questions.' },
      { tag: 'Working hours', title: '09:00 — 18:00', desc: 'Operators provide service every day during the set hours.' },
      { tag: 'Registration', title: 'June 5 — 25', desc: 'Registration of applicants for the 2026/2027 academic year takes place from June 5 to June 25 (inclusive).' },
    ],
    examLead: 'Professional (creative) exams are held for each programme of study on the basis of a separate programme and assessment criteria. In the documents below you can review in detail the requirements, stages and assessment criteria for your chosen programme.',
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
      <Seo title={c.title + ' — Call-center'} description="Oʻzbekiston Davlat Konservatoriyasi Qabul komissiyasi «Call-center»: +998 71 244-85-85, 09:00–18:00. Kasbiy va ijodiy imtihonlar dasturlari va baholash mezonlari." />
      <main className="content-wrapper">
        <PageHero tag={c.tag} title={c.title} emphasis={c.emphasis} breadcrumbs={c.breadcrumbs} />

        <section className="main-content">
          <div className="container">

            <article className="article-body" style={{ marginBottom: '26px' }}>
              <p className="lead">{c.lead}</p>
            </article>

            {/* Call-center */}
            <div className="section-divider" style={{ marginTop: 0 }}>
              <h2>{c.callHeading}</h2>
            </div>
            <article className="article-body" style={{ marginBottom: '40px' }}>
              {c.callText.split('\n').filter(Boolean).map((p, i) => <p key={i}>{p}</p>)}
            </article>

            {/* Contact cards */}
            <div className="section-divider">
              <h2>{c.contactHeading}</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '60px' }}>
              {c.cards.map((card, i) => (
                <div key={i} style={{ background: 'var(--white)', border: '1px solid var(--light-border)', borderTop: '4px solid var(--gold)', padding: '32px 28px' }}>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '3px', color: 'var(--gold-dark)', textTransform: 'uppercase', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>{card.tag}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '1.25rem', fontWeight: 500, marginBottom: '12px', lineHeight: 1.3 }}>{card.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, fontFamily: 'var(--font-serif)' }}>{card.desc}</p>
                </div>
              ))}
            </div>

            {/* Kasbiy / ijodiy imtihonlar */}
            <article className="article-body" style={{ marginBottom: '20px' }}>
              <p className="lead">{c.examLead}</p>
            </article>

            <div className="section-divider">
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
