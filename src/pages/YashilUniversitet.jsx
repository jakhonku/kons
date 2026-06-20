import PageHero from '../components/PageHero';
import { Leaf, Sun, Recycle, Droplets, Bike } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const GOAL_ICONS = [Leaf, Sun, Recycle, Droplets, Bike];

const T = {
  uz: {
    crumbHome: 'Bosh sahifa', crumbKons: 'Konservatoriya', crumbThis: 'Yashil Universitet',
    heroTag: 'Konservatoriya', heroTitle: 'Yashil', heroEm: 'Universitet',
    lead: 'Oʻzbekiston Davlat Konservatoriyasi barqaror rivojlanish va ekologiya tamoyillarini taʼlim jarayoni va kampus hayotiga jadal joriy etmoqda.',
    goalsHeading: 'Yashil Maqsadlar',
    goals: [
      { title: 'Yashil muhit', desc: '«Yashil makon» dasturi doirasida kampusda 625 ta koʻchat ekilgan.' },
      { title: 'Quyosh energiyasi', desc: '600 kVt quvvatli quyosh panellari orqali toza energiya ishlab chiqariladi.' },
      { title: 'Chiqindilarni saralash', desc: 'Uch xil idish orqali chiqindilarni qayta ishlash tizimi.' },
      { title: 'Suv tejamliligi', desc: '195 ta avtomat sugʻorish tizimi orqali suv sarfini nazorat qilish.' },
      { title: 'Velosiped infratuzilmasi', desc: 'Campus boʻylab velosiped yoʻllari va parkovkalar.' },
    ],
    achievements: [
      { num: '625 ta', label: 'Yashil makon dasturida ekilgan koʻchatlar' },
      { num: '195 ta', label: 'Avtomat sugʻorish tizimi' },
      { num: '600 kVt', label: 'Quyosh panellari' },
    ],
    initHeading: 'Amalga oshirilgan tadbirlar',
    initiatives: [
      { year: '2022', title: 'Quyosh panellari oʻrnatildi', desc: '600 kVt quvvatli quyosh panellari asosiy binoga oʻrnatildi.' },
      { year: '2023', title: 'Yashil Kampus sertifikati olindi', desc: 'ISO 14001 Atrof-muhitni boshqarish sertifikati berildi.' },
      { year: '2024', title: 'Chiqindilarni saralash toʻliq joriy etildi', desc: 'Barcha auditoriya va ofislarda uch xil saralash idishi oʻrnatildi.' },
      { year: '2025', title: 'Velosiped infratuzilmasi qurildi', desc: '700 metrelik velosiped yoʻli va 50 ta parkovka joyi yaratildi.' },
    ],
    ctaTitle1: 'Yashil', ctaTitle2: 'Kelajak',
    ctaText: '2030 yilgacha konservatoriyani toʻliq ekologik maqomga koʻtarish maqsad qilingan.',
    ctaBtn: 'BOGʻLANISH →',
  },
  ru: {
    crumbHome: 'Главная', crumbKons: 'Консерватория', crumbThis: 'Зелёный университет',
    heroTag: 'Консерватория', heroTitle: 'Зелёный', heroEm: 'университет',
    lead: 'Государственная консерватория Узбекистана активно внедряет принципы устойчивого развития и экологии в учебный процесс и жизнь кампуса.',
    goalsHeading: 'Зелёные цели',
    goals: [
      { title: 'Зелёная среда', desc: 'В рамках программы «Яшил макон» на территории кампуса высажено 625 саженцев.' },
      { title: 'Солнечная энергия', desc: 'Солнечные панели мощностью 600 кВт вырабатывают чистую энергию.' },
      { title: 'Сортировка отходов', desc: 'Система переработки отходов с раздельным сбором в три контейнера.' },
      { title: 'Экономия воды', desc: 'Контроль расхода воды через 195 систем автоматического полива.' },
      { title: 'Велоинфраструктура', desc: 'Велодорожки и парковки по всему кампусу.' },
    ],
    achievements: [
      { num: '625', label: 'Саженцев по программе «Яшил макон»' },
      { num: '195', label: 'Систем автоматического полива' },
      { num: '600 кВт', label: 'Солнечные панели' },
    ],
    initHeading: 'Реализованные мероприятия',
    initiatives: [
      { year: '2022', title: 'Установлены солнечные панели', desc: 'На главном здании установлены солнечные панели мощностью 600 кВт.' },
      { year: '2023', title: 'Получен сертификат «Зелёный кампус»', desc: 'Выдан сертификат экологического менеджмента ISO 14001.' },
      { year: '2024', title: 'Полностью внедрена сортировка отходов', desc: 'Во всех аудиториях и офисах установлены контейнеры для раздельного сбора.' },
      { year: '2025', title: 'Построена велоинфраструктура', desc: 'Создана велодорожка длиной 700 метров и 50 парковочных мест.' },
    ],
    ctaTitle1: 'Зелёное', ctaTitle2: 'будущее',
    ctaText: 'К 2030 году поставлена цель полностью перевести консерваторию на экологический статус.',
    ctaBtn: 'СВЯЗАТЬСЯ →',
  },
  en: {
    crumbHome: 'Home', crumbKons: 'Conservatory', crumbThis: 'Green University',
    heroTag: 'Conservatory', heroTitle: 'Green', heroEm: 'University',
    lead: 'The State Conservatory of Uzbekistan is actively introducing the principles of sustainable development and ecology into the educational process and campus life.',
    goalsHeading: 'Green Goals',
    goals: [
      { title: 'Green environment', desc: '625 saplings have been planted on campus under the “Yashil Makon” programme.' },
      { title: 'Solar energy', desc: 'Solar panels with a capacity of 600 kW generate clean energy.' },
      { title: 'Waste sorting', desc: 'A waste recycling system with separate collection in three bins.' },
      { title: 'Water saving', desc: 'Water consumption is controlled through 195 automatic irrigation systems.' },
      { title: 'Cycling infrastructure', desc: 'Bicycle lanes and parking throughout the campus.' },
    ],
    achievements: [
      { num: '625', label: 'Saplings under the Yashil Makon programme' },
      { num: '195', label: 'Automatic irrigation systems' },
      { num: '600 kW', label: 'Solar panels' },
    ],
    initHeading: 'Completed initiatives',
    initiatives: [
      { year: '2022', title: 'Solar panels installed', desc: 'Solar panels with a capacity of 600 kW were installed on the main building.' },
      { year: '2023', title: 'Green Campus certificate obtained', desc: 'The ISO 14001 Environmental Management certificate was issued.' },
      { year: '2024', title: 'Waste sorting fully implemented', desc: 'Three-way sorting bins were installed in all classrooms and offices.' },
      { year: '2025', title: 'Cycling infrastructure built', desc: 'A 700-metre bicycle lane and 50 parking spaces were created.' },
    ],
    ctaTitle1: 'Green', ctaTitle2: 'Future',
    ctaText: 'The goal is to fully transition the conservatory to an ecological status by 2030.',
    ctaBtn: 'CONTACT US →',
  },
};

export default function YashilUniversitet() {
  const { lang } = useTranslation();
  const tr = T[lang] || T.uz;

  const BREADCRUMBS = [
    { label: tr.crumbHome, to: '/' },
    { label: tr.crumbKons },
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

      {/* Stats */}
      <div className="page-stats-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', background: '#1a3a2a', borderBottom: '2px solid #4ade80' }}>
        {tr.achievements.map((a, i) => (
          <div key={a.label} style={{ padding: '32px 20px', textAlign: 'center', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.6rem', fontWeight: 300, color: '#4ade80', lineHeight: 1, marginBottom: '8px' }}>
              {a.num}
            </div>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-sans)' }}>
              {a.label}
            </div>
          </div>
        ))}
      </div>

      <section className="main-content">
        <div className="container">

          <article className="article-body" style={{ marginBottom: '20px' }}>
            <p className="lead">
              {tr.lead}
            </p>
          </article>

          {/* Maqsadlar */}
          <div className="section-divider" style={{ marginTop: 0 }}>
            <h2>{tr.goalsHeading}</h2>
          </div>

          <div className="page-stats-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '50px' }}>
            {tr.goals.map((g, i) => {
              const Icon = GOAL_ICONS[i];
              return (
                <div key={g.title} style={{ background: 'var(--white)', border: '1px solid var(--light-border)', padding: '28px 24px', borderTop: '3px solid #4ade80', transition: '0.3s' }}
                  onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 8px 30px rgba(26,56,26,0.1)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
                >
                  <div style={{ color: '#4ade80', marginBottom: '14px', lineHeight: 1 }}>{Icon ? <Icon size={32} strokeWidth={1.5} /> : null}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: '#1a3a2a', marginBottom: '8px', fontWeight: 400 }}>{g.title}</h3>
                  <p style={{ fontSize: '0.83rem', color: '#555', lineHeight: 1.6 }}>{g.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Bosqichlar */}
          <div className="section-divider">
            <h2>{tr.initHeading}</h2>
          </div>

          <div className="yashil-timeline" style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '60px', border: '1px solid var(--light-border)', overflow: 'hidden' }}>
            {tr.initiatives.map((init, i) => (
              <div key={init.year} className="yashil-timeline-row" style={{ display: 'flex', gap: '0', borderBottom: i < tr.initiatives.length - 1 ? '1px solid var(--light-border)' : 'none' }}>
                <div className="yashil-timeline-year" style={{ width: '100px', background: '#1a3a2a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 300, color: '#4ade80' }}>{init.year}</span>
                </div>
                <div style={{ padding: '22px 28px', background: 'var(--white)', flex: 1 }}>
                  <h4 style={{ color: 'var(--navy)', marginBottom: '6px', fontSize: '0.98rem', fontFamily: 'var(--font-display)', fontWeight: 400 }}>{init.title}</h4>
                  <p style={{ fontSize: '0.83rem', color: '#666', lineHeight: 1.6 }}>{init.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ background: '#1a3a2a', padding: '40px', textAlign: 'center', marginBottom: '40px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300, color: 'var(--white)', marginBottom: '12px' }}>
              {tr.ctaTitle1} <span style={{ color: '#4ade80', fontStyle: 'italic' }}>{tr.ctaTitle2}</span>
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', marginBottom: '24px', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
              {tr.ctaText}
            </p>
            <a href="/kontaktlar" style={{ display: 'inline-block', padding: '12px 36px', border: '1px solid #4ade80', color: '#4ade80', textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', transition: '0.3s' }}
              onMouseOver={(e) => { e.currentTarget.style.background = '#4ade80'; e.currentTarget.style.color = '#1a3a2a'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#4ade80'; }}
            >
              {tr.ctaBtn}
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
