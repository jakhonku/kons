import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useTranslation } from '../contexts/LanguageContext';

const ORG_META = [
  { to: '/jamoat-tashkilotlari/kasaba-uyushmasi', leaderName: 'Mirpayazov Boxodir Alimovich', photo: '/jamoat/mirpayazov-boxodir.jpeg' },
  { to: '/jamoat-tashkilotlari/yoshlar-ittifoqi', leaderName: 'Turajanova Nilufar Elmurod qizi', photo: '/jamoat/turajanova-nilufar.jpeg' },
  { to: '/jamoat-tashkilotlari/xotin-qizlar-qomitasi', leaderName: 'Xamdamova Sayyora Xusanovna', photo: '/jamoat/xamdamova-sayyora.jpeg' },
];

const T = {
  uz: {
    crumbHome: 'Bosh sahifa', crumbTuzilma: 'Tuzilma', crumbThis: 'Jamoat tashkilotlari',
    tag: 'Tuzilma', title: 'Jamoat', emphasis: 'tashkilotlari',
    lead: 'Konservatoriyaning jamoat tashkilotlari professor-oʻqituvchilar, xodimlar va talabalarning mehnat, kasbiy hamda ijtimoiy huquqlarini himoya qiladi, maʼnaviy-maʼrifiy faollikni muvofiqlashtiradi. Tashkilotlar oʻz faoliyatini ixtiyoriylik, qonuniylik va oshkoralik tamoyillari asosida amalga oshiradi.',
    titles: ['Kasaba uyushma qoʻmitasi', 'Yoshlar ittifoqi', 'Xotin-qizlar qoʻmitasi'],
    roles: ['Rais', 'Yoshlar yetakchisi', 'Rais'],
    more: 'Batafsil',
    activityHeading: 'Tashkilotlarning umumiy faoliyati',
    activities: [
      'Xodimlarning ijtimoiy himoyasini taʼminlash',
      'Talabalar tashabbuslarini qoʻllab-quvvatlash',
      'Maʼnaviy-maʼrifiy tadbirlar tashkil etish',
      'Madaniy va sport tadbirlarini oʻtkazish',
      'Sogʻliqni saqlash va dam olish dasturlari',
      'Xayriya va koʻngillilik faoliyati',
    ],
  },
  ru: {
    crumbHome: 'Главная', crumbTuzilma: 'Структура', crumbThis: 'Общественные организации',
    tag: 'Структура', title: 'Общественные', emphasis: 'организации',
    lead: 'Общественные организации консерватории защищают трудовые, профессиональные и социальные права профессорско-преподавательского состава, сотрудников и студентов, координируют духовно-просветительскую активность. Организации осуществляют свою деятельность на основе принципов добровольности, законности и открытости.',
    titles: ['Профсоюзный комитет', 'Союз молодёжи', 'Комитет женщин'],
    roles: ['Председатель', 'Лидер молодёжи', 'Председатель'],
    more: 'Подробнее',
    activityHeading: 'Общая деятельность организаций',
    activities: [
      'Обеспечение социальной защиты сотрудников',
      'Поддержка студенческих инициатив',
      'Организация духовно-просветительских мероприятий',
      'Проведение культурных и спортивных мероприятий',
      'Программы здравоохранения и отдыха',
      'Благотворительная и волонтёрская деятельность',
    ],
  },
  en: {
    crumbHome: 'Home', crumbTuzilma: 'Structure', crumbThis: 'Public organizations',
    tag: 'Structure', title: 'Public', emphasis: 'organizations',
    lead: 'The public organizations of the conservatory protect the labour, professional and social rights of the teaching staff, employees and students, and coordinate spiritual and educational activity. The organizations carry out their activities on the basis of the principles of voluntariness, legality and openness.',
    titles: ['Trade Union Committee', 'Youth Union', 'Women’s Committee'],
    roles: ['Chairman', 'Youth Leader', 'Chairwoman'],
    more: 'Read more',
    activityHeading: 'General activities of the organizations',
    activities: [
      'Ensuring the social protection of employees',
      'Supporting student initiatives',
      'Organizing spiritual and educational events',
      'Holding cultural and sports events',
      'Health care and recreation programmes',
      'Charity and volunteer activities',
    ],
  },
};

export default function JamoatTashkilotlari() {
  const { lang } = useTranslation();
  const tr = T[lang] || T.uz;

  const BREADCRUMBS = [
    { label: tr.crumbHome, to: '/' },
    { label: tr.crumbTuzilma },
    { label: tr.crumbThis },
  ];

  const orgs = ORG_META.map((o, i) => ({ ...o, title: tr.titles[i], leaderRole: tr.roles[i] }));

  return (
    <main className="content-wrapper">
      <PageHero
        tag={tr.tag}
        title={tr.title}
        emphasis={tr.emphasis}
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">

          <article className="article-body" style={{ marginBottom: '40px' }}>
            <p className="lead">
              {tr.lead}
            </p>
          </article>

          <div className="org-cards">
            {orgs.map((org) => (
              <Link key={org.to} to={org.to} className="org-card">
                <div className="org-card-photo">
                  <img src={org.photo} alt={org.leaderName} loading="lazy" />
                </div>
                <div className="org-card-body">
                  <h3 className="org-card-title">{org.title}</h3>
                  <div className="org-card-leader">
                    <strong>{org.leaderRole}</strong>
                    {org.leaderName}
                  </div>
                  <span className="org-card-more">
                    {tr.more} <ArrowRight size={14} strokeWidth={2} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="section-divider">
            <h2>{tr.activityHeading}</h2>
          </div>

          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 60px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {tr.activities.map((it, i) => (
              <li key={i} style={{ background: 'var(--white)', border: '1px solid var(--light-border)', borderLeft: '3px solid var(--gold)', padding: '18px 24px', fontSize: '1rem', color: '#444', fontFamily: 'var(--font-serif)' }}>
                {it}
              </li>
            ))}
          </ul>

        </div>
      </section>
    </main>
  );
}

