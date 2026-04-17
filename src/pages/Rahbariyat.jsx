import PageHero from '../components/PageHero';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Konservatoriya' },
  { label: 'Rahbariyat' },
];

const REKTOR = {
  title: 'Rektor',
  name: "Kamoliddin Turdimurodovich O'rinboyev",
  degree: "O'zbekiston Respublikasi xalq artisti, professor",
  phone: '+998 71 234-56-78',
  email: 'rektor@konservatoriya.uz',
  bio: "O'zbekiston Davlat Konservatoriyasini 2018-yildan boshqarib kelmoqda. Xalqaro musiqa tanlovlari g'olibi, Osiyo va Yevropa sahnalarida faol ijro etgan. 80 dan ortiq ilmiy va metodik ishlar muallifi, bir qancha xalqaro musiqa festivallarining bosh hakam a'zosi.",
  initials: 'KO',
  since: '2018',
  photo: '/images/rahbariyat/rektor.jpg',
};

const PROREKTORS = [
  {
    title: "O'quv ishlari bo'yicha prorektor",
    name: "Farhod Abdullayev",
    degree: "O'quv ishlari bo'yicha prorektor",
    phone: '+998 71 234-56-80',
    email: 'prorektor-oquv@konservatoriya.uz',
    bio: "O'zbekiston davlat konservatoriyasida o'quv-metodik ishlarni tashkil etish, ta'lim sifatini nazorat qilish va o'quv jarayonini takomillashtirish sohasida faoliyat yuritadi.",
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

      {/* ── REKTOR PANORAMA ── */}
      <section className="rektor-section">
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'repeating-linear-gradient(135deg, var(--gold) 0, var(--gold) 1px, transparent 0, transparent 60px)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, transparent 0%, var(--gold) 20%, var(--gold-shimmer) 50%, var(--gold) 80%, transparent 100%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }} />

        <div className="container">
          <div className="rektor-layout">

            {/* LEFT — portrait */}
            <div className="rektor-photo-col">
              <div className="rektor-portrait">
                {REKTOR.photo ? (
                  <img src={REKTOR.photo} alt={REKTOR.name} />
                ) : (
                  <span style={{ fontSize: '5rem', fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'rgba(201,168,76,0.35)', letterSpacing: '4px', userSelect: 'none' }}>
                    {REKTOR.initials}
                  </span>
                )}
                {/* corner accents */}
                {[
                  { top: -6, left: -6, borderTop: '2px solid var(--gold)', borderLeft: '2px solid var(--gold)' },
                  { top: -6, right: -6, borderTop: '2px solid var(--gold)', borderRight: '2px solid var(--gold)' },
                  { bottom: -6, left: -6, borderBottom: '2px solid var(--gold)', borderLeft: '2px solid var(--gold)' },
                  { bottom: -6, right: -6, borderBottom: '2px solid var(--gold)', borderRight: '2px solid var(--gold)' },
                ].map((s, i) => (
                  <div key={i} style={{ position: 'absolute', width: 20, height: 20, ...s }} />
                ))}
              </div>

              <div style={{ marginTop: '24px', padding: '7px 32px', background: 'var(--gold)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: '#08081a', fontFamily: 'var(--font-sans)', zIndex: 1 }}>
                Rektor
              </div>
              <div style={{ marginTop: '10px', fontSize: '0.65rem', color: 'rgba(201,168,76,0.5)', letterSpacing: '2px', fontFamily: 'var(--font-sans)' }}>
                {REKTOR.since} yildan buyon
              </div>
            </div>

            {/* RIGHT — info */}
            <div className="rektor-info-col">
              <div style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--gold)', opacity: 0.7, marginBottom: '20px', fontFamily: 'var(--font-sans)' }}>
                O'zbekiston Davlat Konservatoriyasi — Rahbar
              </div>

              <h1 className="rektor-name">
                {REKTOR.name.split(' ').slice(0, 2).join(' ')}<br />
                <span style={{ fontStyle: 'normal', fontWeight: 500, color: 'var(--gold-shimmer)' }}>
                  {REKTOR.name.split(' ').slice(2).join(' ')}
                </span>
              </h1>

              <p style={{ fontSize: '0.85rem', color: 'rgba(201,168,76,0.65)', marginBottom: '24px', fontStyle: 'italic', fontFamily: 'var(--font-serif)', letterSpacing: '0.3px' }}>
                {REKTOR.degree}
              </p>

              <div style={{ width: 60, height: 1, background: 'var(--gold)', opacity: 0.4, marginBottom: '24px' }} />

              <p style={{ fontSize: '0.95rem', color: 'rgba(240,237,232,0.72)', lineHeight: 1.85, fontFamily: 'var(--font-serif)', marginBottom: '36px', maxWidth: 560 }}>
                {REKTOR.bio}
              </p>

              <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
                <a href={`tel:${REKTOR.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--gold-light)', textDecoration: 'none', fontSize: '0.85rem', fontFamily: 'var(--font-sans)', fontWeight: 500 }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.08-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  {REKTOR.phone}
                </a>
                <a href={`mailto:${REKTOR.email}`} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(240,237,232,0.5)', textDecoration: 'none', fontSize: '0.85rem', fontFamily: 'var(--font-sans)' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  {REKTOR.email}
                </a>
              </div>
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
