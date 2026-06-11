import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Konservatoriya' },
  { label: 'Rahbariyat' },
];

const REKTOR = {
  title: 'Rektor',
  name: "Kamoliddin Urinbayev Turdimuratovich",
  role: "Oʻzbekiston davlat konservatoriyasi rektori",
  degree: "Oʻzbekiston xalq artisti, professor",
  phone: '+998 71 234-56-78',
  email: 'rektor@konservatoriya.uz',
  initials: 'KO',
  since: '',
  photo: '/images/rahbariyat/rektor.jpg',
};

const PROREKTORS = [
  {
    title: "Oʻzbekiston davlat konservatoriyasining Yoshlar masalalari va maʼnaviy-maʼrifiy ishlar boʻyicha birinchi prorektori",
    name: "Xusnitdinova Yulduz Madatovna",
    degree: "Professor",
    phone: '+998 71 234-56-88',
    email: 'birinchi-prorektor@konservatoriya.uz',

    initials: 'XY',
    photo: '/images/rahbariyat/Xusnitdinova.jpg',
    reception: "Dushanba – Juma, 14:00 – 17:00"
  },
  {
    title: "Oʻzbekiston davlat konservatoriyasining Oʻquv ishlari boʻyicha prorektori",
    name: "Abdullayev Farhod Rustambekovich",
    degree: "Professor",
    phone: '+998 71 234-56-80',
    email: 'prorektor-oquv@konservatoriya.uz',
    
    initials: 'FA',
    photo: '/images/rahbariyat/Farhod Abdullayev.JPG',
    reception: "Dushanba – Juma, 14:00 – 17:00"
  },
  {
    title: "Oʻzbekiston davlat konservatoriyasining Ilmiy ishlar va innovatsiyalar boʻyicha prorektori",
    name: "Gafurova Sayyora Akmalovna",
    degree: "Professor",
    phone: '+998 71 234-56-82',
    email: 'prorektor-ilm@konservatoriya.uz',
  
    initials: 'GS',
    photo: '/images/rahbariyat/Gafurova.jpg',
    reception: "Dushanba – Juma, 14:00 – 17:00"
  },
];


export default function Rahbariyat() {
  return (
    <main className="content-wrapper">
      <Seo title="Rahbariyat" description="Oʻzbekiston Davlat Konservatoriyasi rahbariyati — rektor va prorektorlar, ularning lavozimlari, qabul vaqtlari va bogʻlanish maʼlumotlari." />
      <PageHero
        tag="Konservatoriya"
        title="Muassasa"
        emphasis="Rahbariyati"
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
            <div className="rektor-cover-eyebrow">Rektor</div>
            <Link to="/rahbariyat/rektor" className="rektor-cover-name-link" style={{ textDecoration: 'none' }}>
              <h1 className="rektor-cover-name-title" style={{ transition: 'color 0.3s' }}>{REKTOR.name}</h1>
            </Link>
            <p className="rektor-cover-role-line">{REKTOR.role}</p>
          </div>
        </div>
      </section>



      {/* ── PROREKTORLAR ── */}
      <section className="main-content" style={{ paddingTop: '70px' }}>
        <div className="container">
          <div className="section-divider" style={{ marginTop: 0 }}>
            <h2>Prorektorlar</h2>
          </div>

          <div className="prorektor-grid">
            {PROREKTORS.map((p) => (
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
                  <div className="prorektor-badge">Prorektor</div>
                  <h3 className="prorektor-name">{p.name}</h3>
                  <p className="prorektor-title-text">
                    {p.title}
                    {p.degree && <span style={{ display: 'block', color: 'var(--gold-dark)', fontStyle: 'normal', fontWeight: 600, marginTop: '4px' }}>{p.degree}</span>}
                  </p>
                  <p className="prorektor-bio">{p.bio}</p>
                  <div className="prorektor-contacts">
                    <a href={`tel:${p.phone}`} className="prorektor-phone">{p.phone}</a>
                    <a href={`mailto:${p.email}`} className="prorektor-email">{p.email}</a>
                  </div>
                  <div className="prorektor-reception">
                    <strong>Qabul soati</strong>
                    {p.reception}
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
