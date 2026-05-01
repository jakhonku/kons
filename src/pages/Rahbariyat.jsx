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
  },
];

const DEANS = [
  { faculty: 'Akademik xonandalik fakulteti',         name: "Rahimova Sarvinoz Bekovna",     degree: "San'atshunoslik fanlari nomzodi, dotsent",         phone: '+998 71 234-57-01', email: 'xonandalik@konservatoriya.uz',  initials: 'RS', photo: null },
  { faculty: "Cholg'u ijrochiligi fakulteti",          name: "Karimov Sherzod Rustamovich",   degree: "Professor",                                        phone: '+998 71 234-57-03', email: 'cholgu@konservatoriya.uz',      initials: 'KS', photo: null },
  { faculty: 'Kompozitsiya va musiqa nazariyasi',      name: "Mirzayeva Gulnora Abdullayevna",degree: "San'atshunoslik fanlari doktori, professor",        phone: '+998 71 234-57-05', email: 'kompozitsiya@konservatoriya.uz',initials: 'MG', photo: null },
  { faculty: "Xalq cholg'ulari fakulteti",             name: "Qodirov Murod Davlatovich",     degree: "Dotsent",                                          phone: '+998 71 234-57-07', email: 'xalqcholgu@konservatoriya.uz',  initials: 'QM', photo: null },
  { faculty: "Musiqa san'ati va pedagogika fakulteti", name: "Hasanova Dilnoza Ibrohimovna",  degree: "San'atshunoslik fanlari nomzodi, dotsent",         phone: '+998 71 234-57-09', email: 'pedagogika@konservatoriya.uz',  initials: 'HD', photo: null },
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
            <h1 className="rektor-cover-name-title">{REKTOR.name}</h1>
            <p className="rektor-cover-role-line">{REKTOR.role},</p>
            <p className="rektor-cover-degree-line">{REKTOR.degree}</p>
            <div className="rektor-cover-contacts">
              <a href={`tel:${REKTOR.phone}`} className="rektor-cover-contact">{REKTOR.phone}</a>
              <span className="rektor-cover-dot" aria-hidden="true">•</span>
              <a href={`mailto:${REKTOR.email}`} className="rektor-cover-contact">{REKTOR.email}</a>
            </div>
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
                </div>
              </div>
            ))}
          </div>

          {/* ── DEKANLAR ── */}
          <div className="section-divider">
            <h2>Fakultet dekanlari</h2>
          </div>

          <div className="dekan-grid">
            {DEANS.map((dean) => (
              <div key={dean.name} className="dekan-card">
                <div className="dekan-photo">
                  {dean.photo ? (
                    <img src={dean.photo} alt={dean.name} />
                  ) : (
                    <span className="dekan-initials">{dean.initials}</span>
                  )}
                </div>
                <div className="dekan-body">
                  <div className="dekan-badge">Dekan</div>
                  <h4 className="dekan-name">{dean.name}</h4>
                  <p className="dekan-faculty">{dean.faculty}</p>
                  <p className="dekan-degree">{dean.degree}</p>
                  <div className="dekan-contacts">
                    <a href={`tel:${dean.phone}`} className="dekan-phone">{dean.phone}</a>
                    <a href={`mailto:${dean.email}`} className="dekan-email">{dean.email}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── QABUL SOATLARI ── */}
          <div className="section-divider">
            <h2>Qabul soatlari</h2>
          </div>

          <div className="qabul-grid">
            {[
              { day: 'Dushanba – Juma', time: '09:00 – 13:00', label: 'Rektor qabulxonasi' },
              { day: 'Dushanba – Juma', time: '14:00 – 17:00', label: 'Prorektorlar' },
              { day: 'Seshanba, Payshanba', time: '10:00 – 12:00', label: 'Fakultet dekanlari' },
              { day: 'Shanba', time: '10:00 – 13:00', label: 'Navbatchi prorektor' },
            ].map((item) => (
              <div key={item.label} className="qabul-item">
                <div className="qabul-day">{item.day}</div>
                <div className="qabul-time">{item.time}</div>
                <div className="qabul-label">{item.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
