import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Konservatoriya' },
  { label: 'Rahbariyat' },
];

const REKTOR = {
  title: 'Rektor',
  name: "Kamoliddin Urinbayev Turdimuratovich",
  role: "O‘zbekiston davlat konservatoriyasi rektori",
  degree: "O‘zbekiston xalq artisti, professor",
  phone: '+998 71 234-56-78',
  email: 'rektor@konservatoriya.uz',
  initials: 'KO',
  since: '',
  photo: '/images/rahbariyat/rektor.jpg',
};

const PROREKTORS = [
  {
    title: "O'quv ishlari bo'yicha prorektor",
    name: "Farhod Abdullayev",
    degree: "Pedagogika fanlari nomzodi, dotsent",
    phone: '+998 71 234-56-80',
    email: 'prorektor-oquv@konservatoriya.uz',
    bio: "O'quv-metodik ishlarni tashkil etish, ta'lim sifatini nazorat qilish va o'quv jarayonini takomillashtirish sohasida faoliyat yuritadi.",
    initials: 'FA',
    photo: '/images/rahbariyat/Farhod Abdullayev.JPG',
    reception: "Dushanba – Juma, 14:00 – 17:00"
  },
  {
    title: "Ilmiy-ijodiy ishlari bo'yicha prorektor",
    name: "Toshmatov Behruz Aliyevich",
    degree: "San'atshunoslik fanlari doktori, professor",
    phone: '+998 71 234-56-82',
    email: 'prorektor-ilm@konservatoriya.uz',
    bio: "Ilmiy tadqiqotlar, xalqaro hamkorlik va ijodiy loyihalarni boshqaradi. Bir nechta xalqaro ilmiy jurnallarda maqolalari chop etilgan.",
    initials: 'TB',
    photo: null,
    reception: "Dushanba – Juma, 14:00 – 17:00"
  },
  {
    title: "Ma'muriy-xo'jalik ishlari bo'yicha prorektor",
    name: "Xoliqov Jamshid Normatovich",
    degree: "Iqtisod fanlari nomzodi",
    phone: '+998 71 234-56-84',
    email: 'prorektor-mxis@konservatoriya.uz',
    bio: "Moddiy-texnik ta'minot, infratuzilma rivojlantirish va moliyaviy faoliyatni boshqaradi. 15 yillik davlat boshqaruvi tajribasiga ega.",
    initials: 'XJ',
    photo: null,
    reception: "Dushanba – Juma, 14:00 – 17:00"
  },
  {
    title: "Xalqaro hamkorlik bo'yicha prorektor",
    name: "Yusupova Madina Otabekovna",
    degree: "Filologiya fanlari nomzodi, dotsent",
    phone: '+998 71 234-56-86',
    email: 'prorektor-xalqaro@konservatoriya.uz',
    bio: "Xalqaro hamkorlik dasturlari, xorijiy hamkor universitetlar bilan aloqalar va talabalar mobilligini muvofiqlashtiradi.",
    initials: 'YM',
    photo: null,
    reception: "Dushanba – Juma, 14:00 – 17:00"
  },
];


export default function Rahbariyat() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Konservatoriya"
        title="Muassasa"
        emphasis="Rahbariyati"
        breadcrumbs={BREADCRUMBS}
      />

      {/* ── REKTOR — kinematik hero (centralasian.uz uslubida) ── */}
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
            {/* Degree va kontaktlar olib tashlandi, ular endi biografiya sahifasida */}
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
                  <p className="prorektor-title-text">{p.title}</p>
                  <p className="prorektor-bio">{p.bio}</p>
                  <div className="prorektor-contacts">
                    <a href={`tel:${p.phone}`} className="prorektor-phone">{p.phone}</a>
                    <a href={`mailto:${p.email}`} className="prorektor-email">{p.email}</a>
                  </div>
                  <div className="prorektor-reception" style={{ 
                    marginTop: '20px', 
                    paddingTop: '15px', 
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    fontSize: '0.75rem',
                    color: 'var(--gold)'
                  }}>
                    <strong>Qabul soati:</strong> {p.reception}
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
