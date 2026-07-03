import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import { FileText, Download, Eye, Calendar, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PDF_URL = '/qabul-jadvali-2026-2027.pdf';

const CONTENT = {
  uz: {
    tag: 'Qabul',
    title: 'Imtihon',
    emphasis: 'jadvali',
    breadcrumbs: [
      { label: 'Bosh sahifa', to: '/' },
      { label: 'Qabul' },
      { label: 'Imtihon jadvali' },
    ],
    lead: '2026–2027 oʻquv yili uchun kasbiy (ijodiy) imtihonlar jadvali. Quyida imtihonlar oʻtkaziladigan sanalar, vaqtlar va tartib bilan batafsil tanishishingiz mumkin.',
    docTitle: 'Qabul jadvali 2026–2027',
    docMeta: 'PDF hujjat · 2026–2027 oʻquv yili',
    view: 'Koʻrish',
    download: 'Yuklab olish',
    infoHeading: 'Muhim maʼlumot',
    infoItems: [
      'Imtihonlar belgilangan sanalarda soat 8:00 dan 18:00 gacha oʻtkaziladi.',
      'Abituriyentlar imtihon boshlanishidan kamida 30 daqiqa oldin kelishlari lozim.',
      'Oʻzingiz bilan shaxsni tasdiqlovchi hujjat (pasport yoki ID karta) olib kelishni unutmang.',
      'Imtihon natijalari har bir bosqich yakunlangandan soʻng 24 soat ichida eʼlon qilinadi.',
    ],
    noteHeading: 'Qoʻshimcha maʼlumot',
    noteText: 'Imtihon jadvali bilan bogʻliq savollar uchun Qabul komissiyasiga murojaat qiling: qabul@konservatoriya.uz · +998 71 234-56-90',
  },
  ru: {
    tag: 'Приём',
    title: 'Расписание',
    emphasis: 'экзаменов',
    breadcrumbs: [
      { label: 'Главная', to: '/' },
      { label: 'Приём' },
      { label: 'Расписание экзаменов' },
    ],
    lead: 'Расписание профессиональных (творческих) экзаменов на 2026–2027 учебный год. Ниже вы можете ознакомиться с датами, временем проведения и порядком экзаменов.',
    docTitle: 'Расписание приёма 2026–2027',
    docMeta: 'PDF документ · 2026–2027 учебный год',
    view: 'Просмотр',
    download: 'Скачать',
    infoHeading: 'Важная информация',
    infoItems: [
      'Экзамены проводятся с 8:00 до 18:00 в указанные даты.',
      'Абитуриенты должны прибыть не менее чем за 30 минут до начала экзамена.',
      'Не забудьте взять с собой документ, удостоверяющий личность (паспорт или ID-карта).',
      'Результаты экзаменов объявляются в течение 24 часов после завершения каждого этапа.',
    ],
    noteHeading: 'Дополнительная информация',
    noteText: 'По вопросам расписания экзаменов обращайтесь в Приёмную комиссию: qabul@konservatoriya.uz · +998 71 234-56-90',
  },
  en: {
    tag: 'Admissions',
    title: 'Exam',
    emphasis: 'schedule',
    breadcrumbs: [
      { label: 'Home', to: '/' },
      { label: 'Admissions' },
      { label: 'Exam schedule' },
    ],
    lead: 'The schedule of professional (creative) exams for the 2026–2027 academic year. Below you can find the dates, times and procedures for the exams.',
    docTitle: 'Admission schedule 2026–2027',
    docMeta: 'PDF document · 2026–2027 academic year',
    view: 'View',
    download: 'Download',
    infoHeading: 'Important information',
    infoItems: [
      'Exams are held from 8:00 AM to 6:00 PM on the specified dates.',
      'Applicants must arrive at least 30 minutes before the exam starts.',
      'Do not forget to bring a valid identity document (passport or ID card).',
      'Exam results are announced within 24 hours after each stage is completed.',
    ],
    noteHeading: 'Additional information',
    noteText: 'For questions about the exam schedule, contact the Admissions Committee: qabul@konservatoriya.uz · +998 71 234-56-90',
  },
};

const INFO_ICONS = [Calendar, Clock, MapPin, FileText];

export default function ImtihonJadvali() {
  const { lang } = useLanguage();
  const c = CONTENT[lang] || CONTENT.uz;

  return (
    <>
      <Seo
        title="Imtihon jadvali — Qabul 2026–2027"
        description="Oʻzbekiston Davlat Konservatoriyasi 2026–2027 oʻquv yili uchun kasbiy va ijodiy imtihonlar jadvali (PDF)."
      />
      <main className="content-wrapper">
        <PageHero tag={c.tag} title={c.title} emphasis={c.emphasis} breadcrumbs={c.breadcrumbs} />

        <section className="main-content">
          <div className="container">

            <article className="article-body" style={{ marginBottom: '20px' }}>
              <p className="lead">{c.lead}</p>
            </article>

            {/* PDF hujjat kartasi */}
            <div className="section-divider" style={{ marginTop: 0 }}>
              <h2>{c.docTitle}</h2>
            </div>
            <div className="doc-list" style={{ marginBottom: '40px' }}>
              <div className="doc-item">
                <div className="doc-info">
                  <div
                    className="doc-icon"
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      width: 44, height: 44, flexShrink: 0, color: 'var(--gold-dark)',
                    }}
                  >
                    <FileText size={20} strokeWidth={1.6} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div className="doc-name" style={{ overflowWrap: 'anywhere' }}>
                      {c.docTitle}
                    </div>
                    <div className="doc-meta">{c.docMeta}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                  <a
                    href={PDF_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="oquv-btn oquv-btn-view"
                  >
                    <Eye size={13} strokeWidth={2} /> {c.view}
                  </a>
                  <a
                    href={PDF_URL}
                    download
                    aria-label={`${c.docTitle} — ${c.download}`}
                    className="oquv-btn oquv-btn-dl"
                  >
                    <Download size={13} strokeWidth={2} />
                  </a>
                </div>
              </div>
            </div>

            {/* PDF embed (inline koʻrinish) */}
            <div style={{
              border: '1px solid var(--light-border)',
              borderRadius: '6px',
              overflow: 'hidden',
              marginBottom: '50px',
              background: 'var(--light-50)',
            }}>
              <iframe
                src={PDF_URL}
                title={c.docTitle}
                style={{
                  width: '100%',
                  height: '80vh',
                  minHeight: '500px',
                  border: 'none',
                  display: 'block',
                }}
              />
            </div>

            {/* Muhim maʼlumot */}
            <div className="section-divider">
              <h2>{c.infoHeading}</h2>
            </div>
            <ul style={{
              listStyle: 'none', padding: 0, margin: '0 0 60px',
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px',
            }}>
              {c.infoItems.map((item, i) => {
                const Icon = INFO_ICONS[i % INFO_ICONS.length];
                return (
                  <li
                    key={i}
                    style={{
                      background: 'var(--white)',
                      border: '1px solid var(--light-border)',
                      borderLeft: '3px solid var(--gold)',
                      padding: '18px 24px',
                      fontSize: '1rem',
                      color: '#444',
                      fontFamily: 'var(--font-serif)',
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'flex-start',
                    }}
                  >
                    <Icon size={18} strokeWidth={1.6} style={{ color: 'var(--gold-dark)', flexShrink: 0, marginTop: '3px' }} />
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>

            {/* Qoʻshimcha maʼlumot */}
            <div style={{
              background: 'var(--cream)',
              border: '1px solid var(--light-border)',
              borderLeft: '4px solid var(--gold)',
              padding: '24px 32px',
              marginBottom: '60px',
            }}>
              <h4 style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--navy)',
                fontSize: '1rem',
                marginBottom: '8px',
              }}>
                {c.noteHeading}
              </h4>
              <p style={{
                fontSize: '0.85rem',
                color: '#555',
                lineHeight: 1.7,
                fontFamily: 'var(--font-serif)',
                margin: 0,
              }}>
                {c.noteText}
              </p>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
