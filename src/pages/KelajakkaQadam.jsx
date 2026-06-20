import PageHero from '../components/PageHero';
import { Target, Handshake, Clipboard, Globe, Mic, TrendingUp } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const SERVICE_ICONS = [Target, Handshake, Clipboard, Globe, Mic, TrendingUp];

const T = {
  uz: {
    crumbHome: 'Bosh sahifa', crumbStudents: 'Talabalar uchun', crumbThis: 'Kelajakka qadam',
    heroTag: 'Talabalar uchun', heroTitle: 'Kelajakka', heroEm: 'Qadam',
    stats: [
      ['85%', 'Birinchi yilda ishga joylashgan'],
      ['120+', 'Hamkor tashkilotlar'],
      ['40+', 'Xorijiy imkoniyatlar'],
    ],
    servicesHeading: 'Xizmatlar',
    services: [
      ['Karyera maslahat', 'Individual karyera maslahati, portfoilo tuzish, auditsiya tayyorgarlik'],
      ['Hamkorlar bilan uchrashuvlar', 'Opera teatrlari, filarmoniya va musiqa maktablari vakillari bilan uchrashuv'],
      ['CV va motivatsion xat', 'Xalqaro standartlarga mos CV va motivatsion xat tayyorlash'],
      ['Xorijiy imkoniyatlar', 'Chet el teatrlari va orkestrlariga qabul haqida maʼlumot'],
      ['Mock audition', 'Auditsiyaga tayyorgarlik: professional hakamlar oldida mashq'],
      ['Bandlik statistikasi', 'Bitiruvchilarimizning 85% birinchi yilda ishga joylashadi'],
    ],
    partnersHeading: 'Asosiy hamkorlar',
    partners: [
      'Oʻzbek Milliy Simfonik Orkestri',
      'Alisher Navoiy nomidagi GABT',
      'Toshkent Davlat Filarmoniyasi',
      'Yoshlar simfonik orkestri',
      'Toshkent shahar musiqa maktablari',
      'Oʻzbekiston Bastakorlar Uyushmasi',
    ],
    contactTitle: 'Karyera markazi',
    contactLine1: '2-bino, 210-xona · Telefon: +998 71 234-56-95 · karyera@konservatoriya.uz',
    contactLine2: 'Ish vaqti: Dushanba–Juma, 09:00–17:00',
  },
  ru: {
    crumbHome: 'Главная', crumbStudents: 'Для студентов', crumbThis: 'Шаг в будущее',
    heroTag: 'Для студентов', heroTitle: 'Шаг в', heroEm: 'будущее',
    stats: [
      ['85%', 'Трудоустроены в первый год'],
      ['120+', 'Партнёрских организаций'],
      ['40+', 'Зарубежных возможностей'],
    ],
    servicesHeading: 'Услуги',
    services: [
      ['Карьерная консультация', 'Индивидуальная карьерная консультация, составление портфолио, подготовка к прослушиванию'],
      ['Встречи с партнёрами', 'Встречи с представителями оперных театров, филармонии и музыкальных школ'],
      ['CV и мотивационное письмо', 'Подготовка CV и мотивационного письма по международным стандартам'],
      ['Зарубежные возможности', 'Информация о приёме в зарубежные театры и оркестры'],
      ['Mock audition', 'Подготовка к прослушиванию: репетиция перед профессиональным жюри'],
      ['Статистика трудоустройства', '85% наших выпускников трудоустраиваются в первый год'],
    ],
    partnersHeading: 'Основные партнёры',
    partners: [
      'Узбекский национальный симфонический оркестр',
      'ГАБТ имени Алишера Навои',
      'Ташкентская государственная филармония',
      'Молодёжный симфонический оркестр',
      'Музыкальные школы города Ташкента',
      'Союз композиторов Узбекистана',
    ],
    contactTitle: 'Центр карьеры',
    contactLine1: 'Здание 2, кабинет 210 · Телефон: +998 71 234-56-95 · karyera@konservatoriya.uz',
    contactLine2: 'Время работы: Понедельник–Пятница, 09:00–17:00',
  },
  en: {
    crumbHome: 'Home', crumbStudents: 'For students', crumbThis: 'Step into the future',
    heroTag: 'For students', heroTitle: 'Step into the', heroEm: 'Future',
    stats: [
      ['85%', 'Employed in the first year'],
      ['120+', 'Partner organizations'],
      ['40+', 'International opportunities'],
    ],
    servicesHeading: 'Services',
    services: [
      ['Career counselling', 'Individual career counselling, portfolio building, audition preparation'],
      ['Meetings with partners', 'Meetings with representatives of opera theatres, the philharmonic and music schools'],
      ['CV and motivation letter', 'Preparation of a CV and motivation letter according to international standards'],
      ['International opportunities', 'Information about admission to foreign theatres and orchestras'],
      ['Mock audition', 'Audition preparation: rehearsal before a professional jury'],
      ['Employment statistics', '85% of our graduates find a job in the first year'],
    ],
    partnersHeading: 'Main partners',
    partners: [
      'Uzbek National Symphony Orchestra',
      'Alisher Navoi State Academic Bolshoi Theatre',
      'Tashkent State Philharmonic',
      'Youth Symphony Orchestra',
      'Music schools of Tashkent city',
      'Union of Composers of Uzbekistan',
    ],
    contactTitle: 'Career Center',
    contactLine1: 'Building 2, room 210 · Phone: +998 71 234-56-95 · karyera@konservatoriya.uz',
    contactLine2: 'Working hours: Monday–Friday, 09:00–17:00',
  },
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

          {/* Stats banner */}
          <div className="page-stats-3" style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            background: 'var(--navy)', borderBottom: '2px solid var(--gold)',
            marginBottom: '60px',
          }}>
            {tr.stats.map(([num, label]) => (
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
            {tr.services.map(([title, desc], i) => {
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
            {tr.partners.map((p) => (
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
