import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Tuzilma', to: '/tuzilma' },
  { label: 'Jamoat tashkilotlari' },
];

const ORGS = [
  {
    to: '/jamoat-tashkilotlari/kasaba-uyushmasi',
    title: "Kasaba uyushma qoʻmitasi",
    leaderRole: 'Rais',
    leaderName: 'Mirpayazov Boxodir Alimovich',
    photo: '/jamoat/mirpayazov-boxodir.jpeg',
  },
  {
    to: '/jamoat-tashkilotlari/yoshlar-ittifoqi',
    title: "Yoshlar ittifoqi",
    leaderRole: 'Yoshlar yetakchisi',
    leaderName: 'Turajanova Nilufar Elmurod qizi',
    photo: '/jamoat/turajanova-nilufar.jpeg',
  },
  {
    to: '/jamoat-tashkilotlari/xotin-qizlar-qomitasi',
    title: "Xotin-qizlar qoʻmitasi",
    leaderRole: 'Rais',
    leaderName: 'Xamdamova Sayyora Xusanovna',
    photo: '/jamoat/xamdamova-sayyora.jpeg',
  },
];

export default function JamoatTashkilotlari() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Tuzilma"
        title="Jamoat"
        emphasis="tashkilotlari"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">

          <article className="article-body" style={{ marginBottom: '40px' }}>
            <p className="lead">
              Konservatoriyaning jamoat tashkilotlari professor-oʻqituvchilar, xodimlar va
              talabalarning mehnat, kasbiy hamda ijtimoiy huquqlarini himoya qiladi, maʼnaviy-maʼrifiy
              faollikni muvofiqlashtiradi. Tashkilotlar oʻz faoliyatini ixtiyoriylik, qonuniylik va
              oshkoralik tamoyillari asosida amalga oshiradi.
            </p>
          </article>

          <div className="org-cards">
            {ORGS.map((org) => (
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
                    Batafsil <ArrowRight size={14} strokeWidth={2} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="section-divider">
            <h2>Tashkilotlarning umumiy faoliyati</h2>
          </div>

          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 60px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {[
              "Xodimlarning ijtimoiy himoyasini taʼminlash",
              "Talabalar tashabbuslarini qoʻllab-quvvatlash",
              "Maʼnaviy-maʼrifiy tadbirlar tashkil etish",
              "Madaniy va sport tadbirlarini oʻtkazish",
              "Sogʻliqni saqlash va dam olish dasturlari",
              "Xayriya va koʻngillilik faoliyati",
            ].map((it, i) => (
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
