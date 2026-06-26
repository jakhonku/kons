import PageHero from '../components/PageHero';
import { Target, Handshake, Clipboard, FileSignature, LineChart, Compass } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const SERVICE_ICONS = [Target, Handshake, Clipboard, FileSignature, LineChart, Compass];

/* Haqiqiy maʼlumot — “Kelajakka qadam” karyera markazi */
const LEAD = 'Oʻzbekiston davlat konservatoriyasida faoliyat yuritayotgan “Kelajakka qadam” karyera markazi bitiruvchilarning bandligini taʼminlash, ularni mehnat bozoriga tayyorlash hamda ish beruvchilar bilan hamkorlikni rivojlantirishga xizmat qilmoqda.';

const STATS = [
  ['93%', 'Ishga joylashish darajasi'],
  ['200+', 'Hamkor tashkilotlar'],
  ['925', 'Bandligi taʼminlangan bitiruvchi'],
];

const SERVICES = [
  ['Ishga joylashtirish maslahatlari', 'Bitiruvchilarni ishga joylashtirish boʻyicha individual maslahatlar berish.'],
  ['Boʻsh ish oʻrinlari yarmarkasi', 'Boʻsh ish oʻrinlari yarmarkalarini tashkil etish.'],
  ['Ish beruvchilar bilan uchrashuvlar', 'Ish beruvchilar bilan bevosita uchrashuvlar oʻtkazish.'],
  ['Shartnomalarni rasmiylashtirish', 'Mehnat shartnomalarini rasmiylashtirishda koʻmaklashish.'],
  ['Kasbiy monitoring', 'Bitiruvchilarning kasbiy faoliyatini monitoring qilish.'],
  ['Kasbiy yoʻnaltirish', 'Mehnat bozoridagi talab va ehtiyojlar boʻyicha maʼlumot va konsultatsiya.'],
];

const PARTNERS = [
  'Madaniyat va sanʼat muassasalari',
  'Ixtisoslashtirilgan musiqa maktablari',
  'Sanʼat maktablari',
  'Teatrlar',
  'Orkestr jamoalari',
  'Davlat va nodavlat madaniyat muassasalari',
];

const T = {
  uz: { crumbHome: 'Bosh sahifa', crumbStudents: 'Talabalar uchun', crumbThis: 'Kelajakka qadam', heroTag: 'Talabalar uchun', heroTitle: 'Kelajakka', heroEm: 'Qadam', servicesHeading: 'Xizmatlar', partnersHeading: 'Hamkor tashkilotlar', contactTitle: '“Kelajakka qadam” karyera markazi', contactLine1: 'Bitiruvchilar bandligi, kasbiy yoʻnaltirish va ish beruvchilar bilan hamkorlik boʻyicha Karyera markaziga murojaat qiling.', contactLine2: 'Soʻnggi uch yilda 992 nafar bitiruvchidan 925 nafari ish bilan taʼminlandi (93%).' },
  ru: { crumbHome: 'Главная', crumbStudents: 'Для студентов', crumbThis: 'Шаг в будущее', heroTag: 'Для студентов', heroTitle: 'Шаг в', heroEm: 'будущее', servicesHeading: 'Услуги', partnersHeading: 'Партнёрские организации', contactTitle: 'Карьерный центр «Kelajakka qadam»', contactLine1: 'Bitiruvchilar bandligi, kasbiy yoʻnaltirish va ish beruvchilar bilan hamkorlik boʻyicha Karyera markaziga murojaat qiling.', contactLine2: 'Soʻnggi uch yilda 992 nafar bitiruvchidan 925 nafari ish bilan taʼminlandi (93%).' },
  en: { crumbHome: 'Home', crumbStudents: 'For students', crumbThis: 'Step into the future', heroTag: 'For students', heroTitle: 'Step into the', heroEm: 'Future', servicesHeading: 'Services', partnersHeading: 'Partner organizations', contactTitle: '“Kelajakka qadam” career center', contactLine1: 'Bitiruvchilar bandligi, kasbiy yoʻnaltirish va ish beruvchilar bilan hamkorlik boʻyicha Karyera markaziga murojaat qiling.', contactLine2: 'Soʻnggi uch yilda 992 nafar bitiruvchidan 925 nafari ish bilan taʼminlandi (93%).' },
};

export default function KelajakkaQadam() {
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

          <article className="article-body" style={{ marginBottom: '40px' }}>
            <p className="lead">{LEAD}</p>
          </article>

          {/* Stats banner */}
          <div className="page-stats-3" style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            background: 'var(--navy)', borderBottom: '2px solid var(--gold)',
            marginBottom: '60px',
          }}>
            {STATS.map(([num, label]) => (
              <div key={label} style={{ padding: '36px 24px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1, marginBottom: '8px' }}>{num}</div>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Services */}
          <div className="section-divider" style={{ marginTop: 0 }}>
            <h2>{tr.servicesHeading}</h2>
          </div>

          <div className="g-3" style={{ marginBottom: '60px' }}>
            {SERVICES.map(([title, desc], i) => {
              const Icon = SERVICE_ICONS[i];
              return (
                <div key={title} style={{
                  background: 'var(--white)', border: '1px solid var(--light-border)',
                  padding: '32px 28px', transition: 'all 0.3s',
                }}
                  onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(26,26,56,0.09)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--light-border)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ color: 'var(--gold)', marginBottom: '14px' }}>{Icon ? <Icon size={32} strokeWidth={1.5} /> : null}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: 'var(--navy)', marginBottom: '8px', fontWeight: 400 }}>{title}</h3>
                  <p style={{ fontSize: '0.82rem', color: '#888', lineHeight: 1.65 }}>{desc}</p>
                </div>
              );
            })}
          </div>

          {/* Partners */}
          <div className="section-divider">
            <h2>{tr.partnersHeading}</h2>
          </div>

          <div className="g-3" style={{ marginBottom: '60px' }}>
            {PARTNERS.map((p) => (
              <div key={p} style={{
                padding: '18px 24px',
                background: 'var(--white)', border: '1px solid var(--light-border)',
                display: 'flex', alignItems: 'center', gap: '12px',
              }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--gold)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.85rem', color: 'var(--navy)', fontFamily: 'var(--font-sans)' }}>{p}</span>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div style={{
            background: 'var(--cream)', borderLeft: '4px solid var(--gold)',
            border: '1px solid var(--light-border)', padding: '24px 32px', marginBottom: '60px',
          }}>
            <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '1.1rem', marginBottom: '8px' }}>
              {tr.contactTitle}
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.7, fontFamily: 'var(--font-serif)', margin: 0 }}>
              {tr.contactLine1}<br />
              {tr.contactLine2}
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
