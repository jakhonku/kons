import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import { useTranslation } from '../contexts/LanguageContext';

const REKTOR = {
  name: 'Urinbayev Kamoliddin Turdimuratovich',
  phone: '+998 71 234-56-78',
  email: 'rektor@konservatoriya.uz',
  photo: '/images/rahbariyat/rektor.jpg',
};

const PROREKTOR_META = [
  { name: 'Xusnitdinova Yulduz Madatovna', phone: '+998 71 234-56-88', email: 'birinchi-prorektor@konservatoriya.uz', initials: 'XY', photo: '/images/rahbariyat/Xusnitdinova.jpg' },
  { name: 'Abdullayev Farhod Rustambekovich', phone: '+998 71 234-56-80', email: 'prorektor-oquv@konservatoriya.uz', initials: 'FA', photo: '/images/rahbariyat/Farhod Abdullayev.JPG' },
  { name: 'Gafurova Sayyora Akmalovna', phone: '+998 71 234-56-82', email: 'prorektor-ilm@konservatoriya.uz', initials: 'GS', photo: '/images/rahbariyat/Gafurova.jpg' },
];

const T = {
  uz: {
    crumbHome: 'Bosh sahifa', crumbKons: 'Konservatoriya', crumbThis: 'Rahbariyat',
    seoTitle: 'Rahbariyat',
    seoDesc: 'Oʻzbekiston Davlat Konservatoriyasi rahbariyati — rektor va prorektorlar, ularning lavozimlari, qabul vaqtlari va bogʻlanish maʼlumotlari.',
    heroTag: 'Konservatoriya', heroTitle: 'Muassasa', heroEm: 'Rahbariyati',
    rektorEyebrow: 'Rektor',
    rektorRole: 'Oʻzbekiston davlat konservatoriyasi rektori',
    prorektorsHeading: 'Prorektorlar',
    prorektorBadge: 'Prorektor',
    receptionLabel: 'Qabul soati',
    reception: 'Dushanba – Juma, 14:00 – 17:00',
    degree: 'Professor',
    titles: [
      'Oʻzbekiston davlat konservatoriyasining Yoshlar masalalari va maʼnaviy-maʼrifiy ishlar boʻyicha birinchi prorektori',
      'Oʻzbekiston davlat konservatoriyasining Oʻquv ishlari boʻyicha prorektori',
      'Oʻzbekiston davlat konservatoriyasining Ilmiy ishlar va innovatsiyalar boʻyicha prorektori',
    ],
  },
  ru: {
    crumbHome: 'Главная', crumbKons: 'Консерватория', crumbThis: 'Руководство',
    seoTitle: 'Руководство',
    seoDesc: 'Руководство Государственной консерватории Узбекистана — ректор и проректоры, их должности, часы приёма и контактная информация.',
    heroTag: 'Консерватория', heroTitle: 'Руководство', heroEm: 'учреждения',
    rektorEyebrow: 'Ректор',
    rektorRole: 'Ректор Государственной консерватории Узбекистана',
    prorektorsHeading: 'Проректоры',
    prorektorBadge: 'Проректор',
    receptionLabel: 'Часы приёма',
    reception: 'Понедельник – Пятница, 14:00 – 17:00',
    degree: 'Профессор',
    titles: [
      'Первый проректор Государственной консерватории Узбекистана по делам молодёжи и духовно-просветительской работе',
      'Проректор Государственной консерватории Узбекистана по учебной работе',
      'Проректор Государственной консерватории Узбекистана по научной работе и инновациям',
    ],
  },
  en: {
    crumbHome: 'Home', crumbKons: 'Conservatory', crumbThis: 'Administration',
    seoTitle: 'Administration',
    seoDesc: 'Administration of the State Conservatory of Uzbekistan — the rector and vice-rectors, their positions, reception hours and contact information.',
    heroTag: 'Conservatory', heroTitle: 'Institutional', heroEm: 'Administration',
    rektorEyebrow: 'Rector',
    rektorRole: 'Rector of the State Conservatory of Uzbekistan',
    prorektorsHeading: 'Vice-Rectors',
    prorektorBadge: 'Vice-Rector',
    receptionLabel: 'Reception hours',
    reception: 'Monday – Friday, 14:00 – 17:00',
    degree: 'Professor',
    titles: [
      'First Vice-Rector of the State Conservatory of Uzbekistan for Youth Affairs and Spiritual and Educational Work',
      'Vice-Rector of the State Conservatory of Uzbekistan for Academic Affairs',
      'Vice-Rector of the State Conservatory of Uzbekistan for Research and Innovation',
    ],
  },
};

export default function Rahbariyat() {
  const { lang } = useTranslation();
  const tr = T[lang] || T.uz;

  const BREADCRUMBS = [
    { label: tr.crumbHome, to: '/' },
    { label: tr.crumbKons },
    { label: tr.crumbThis },
  ];

  const prorektors = PROREKTOR_META.map((p, i) => ({ ...p, title: tr.titles[i] }));

  return (
    <main className="content-wrapper">
      <Seo title={tr.seoTitle} description={tr.seoDesc} />
      <PageHero
        tag={tr.heroTag}
        title={tr.heroTitle}
        emphasis={tr.heroEm}
        breadcrumbs={BREADCRUMBS}
      />

      {/* ── REKTOR — kinematik hero ── */}
      <section
        className="rektor-cover"
        style={REKTOR.photo ? { backgroundImage: `url(${REKTOR.photo})` } : undefined}
      >
        <div className="rektor-cover-overlay" aria-hidden="true" />
        <div className="container rektor-cover-inner">
          <div className="rektor-cover-text">
            <div className="rektor-cover-eyebrow">{tr.rektorEyebrow}</div>
            <Link to="/rahbariyat/rektor" className="rektor-cover-name-link" style={{ textDecoration: 'none' }}>
              <h1 className="rektor-cover-name-title" style={{ transition: 'color 0.3s' }}>{REKTOR.name}</h1>
            </Link>
            <p className="rektor-cover-role-line">{tr.rektorRole}</p>
          </div>
        </div>
      </section>



      {/* ── PROREKTORLAR ── */}
      <section className="main-content" style={{ paddingTop: '70px' }}>
        <div className="container">
          <div className="section-divider" style={{ marginTop: 0 }}>
            <h2>{tr.prorektorsHeading}</h2>
          </div>

          <div className="prorektor-grid">
            {prorektors.map((p) => (
              <div key={p.name} className="prorektor-card">
                {/* Rectangular photo */}
                <div className="prorektor-photo">
                  {p.photo ? (
                    <img src={p.photo} alt={p.name} />
                  ) : (
                    <span className="prorektor-initials">{p.initials}</span>
                  )}
                </div>
                <div className="prorektor-body">
                  <div className="prorektor-badge">{tr.prorektorBadge}</div>
                  <h3 className="prorektor-name">{p.name}</h3>
                  <p className="prorektor-title-text">
                    {p.title}
                    {tr.degree && <span style={{ display: 'block', color: 'var(--gold-dark)', fontStyle: 'normal', fontWeight: 600, marginTop: '4px' }}>{tr.degree}</span>}
                  </p>
                  <div className="prorektor-contacts">
                    <a href={`tel:${p.phone}`} className="prorektor-phone">{p.phone}</a>
                    <a href={`mailto:${p.email}`} className="prorektor-email">{p.email}</a>
                  </div>
                  <div className="prorektor-reception">
                    <strong>{tr.receptionLabel}</strong>
                    {tr.reception}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
