import PageHero from '../components/PageHero';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Konservatoriya' },
  { label: 'Rahbariyat' },
];

const LEADERS = [
  {
    title: 'Rektor',
    name: "Kamoliddin Turdimurodovich Oʻrinboyev ",
    degree: "Oʻzbekiston Respublikasi xalq artisti, professor",
    phone: '+998 71 234-56-78',
    email: 'rektor@konservatoriya.uz',
    bio: "O'zbekiston Davlat Konservatoriyasini 2018-yildan boshqarib kelmoqda. Xalqaro musiqa tanlovlari g'olibi, 80 dan ortiq ilmiy ishlar muallifi.",
    initials: 'KO',
  },
  {
    title: "Ta'lim ishlari bo'yicha prorektor",
    name: "Yusupova Nilufar Hamidovna",
    degree: "San'atshunoslik fanlari nomzodi, dotsent",
    phone: '+998 71 234-56-80',
    email: 'prorektortalim@konservatoriya.uz',
    bio: "O'quv-metodik ishlar, ta'lim sifatini nazorat qilish va yangi dasturlarni ishlab chiqish sohasida 20 yillik tajribaga ega mutaxassis.",
    initials: 'YN',
  },
  {
    title: "Ilmiy-ijodiy ishlari bo'yicha prorektor",
    name: "Toshmatov Behruz Aliyevich",
    degree: "San'atshunoslik fanlari doktori, professor",
    phone: '+998 71 234-56-82',
    email: 'prorektor-ilm@konservatoriya.uz',
    bio: "Ilmiy tadqiqotlar, xalqaro hamkorlik va ijodiy loyihalarni boshqaradi. Bir nechta xalqaro ilmiy jurnallarda maqolalari chop etilgan.",
    initials: 'TB',
  },
  {
    title: "Ma'muriy-xo'jalik ishlari bo'yicha prorektor",
    name: "Xoliqov Jamshid Normatovich",
    degree: "Iqtisod fanlari nomzodi",
    phone: '+998 71 234-56-84',
    email: 'prorektor-mxis@konservatoriya.uz',
    bio: "Moddiy-texnik ta'minot, infratuzilma rivojlantirish va moliyaviy faoliyatni boshqaradi. 15 yillik davlat boshqaruvi tajribasiga ega.",
    initials: 'XJ',
  },
];

const DEANS = [
  { faculty: 'Akademik xonandalik fakulteti', name: "Rahimova Sarvinoz Bekovna", degree: "San'atshunoslik fanlari nomzodi, dotsent", phone: '+998 71 234-57-01', email: 'xonandalik@konservatoriya.uz', initials: 'RS' },
  { faculty: "Cholg'u ijrochiligi fakulteti", name: "Karimov Sherzod Rustamovich", degree: "Professor", phone: '+998 71 234-57-03', email: 'cholgu@konservatoriya.uz', initials: 'KS' },
  { faculty: 'Kompozitsiya va musiqa nazariyasi', name: "Mirzayeva Gulnora Abdullayevna", degree: "San'atshunoslik fanlari doktori, professor", phone: '+998 71 234-57-05', email: 'kompozitsiya@konservatoriya.uz', initials: 'MG' },
  { faculty: "Xalq cholg'ulari fakulteti", name: "Qodirov Murod Davlatovich", degree: "Dotsent", phone: '+998 71 234-57-07', email: 'xalqcholgu@konservatoriya.uz', initials: 'QM' },
  { faculty: "Musiqa san'ati va pedagogika fakulteti", name: "Hasanova Dilnoza Ibrohimovna", degree: "San'atshunoslik fanlari nomzodi, dotsent", phone: '+998 71 234-57-09', email: 'pedagogika@konservatoriya.uz', initials: 'HD' },
];

function Avatar({ initials, size = 88 }) {
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'linear-gradient(135deg, var(--navy), var(--navy-light))',
      border: '3px solid var(--gold)',
      color: 'var(--white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: size > 70 ? '1.5rem' : '1rem',
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      flexShrink: 0,
      letterSpacing: '1px',
    }}>
      {initials}
    </div>
  );
}

export default function Rahbariyat() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Konservatoriya"
        title="Muassasa"
        emphasis="Rahbariyati"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">

          {/* ── REKTORAT ── */}
          <div className="section-divider" style={{ marginTop: 0 }}>
            <h2>Rektorat</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '60px' }}>
            {LEADERS.map((leader) => (
              <div key={leader.name} style={{
                background: 'var(--white)',
                border: '1px solid var(--light-border)',
                padding: '32px',
                display: 'flex',
                gap: '22px',
                alignItems: 'flex-start',
                transition: 'box-shadow 0.3s, transform 0.3s',
                position: 'relative',
                overflow: 'hidden',
              }}
                onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(26,26,56,0.12)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
              >
                {/* Yuqori gold chiziq */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--gold)' }} />

                <Avatar initials={leader.initials} />

                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--gold-dark)', marginBottom: '8px' }}>
                    {leader.title}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--navy)', marginBottom: '5px', fontWeight: 500, fontFamily: 'var(--font-display)' }}>
                    {leader.name}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: '#888', marginBottom: '12px', fontStyle: 'italic' }}>
                    {leader.degree}
                  </p>
                  <p style={{ fontSize: '0.88rem', color: '#555', lineHeight: 1.65, marginBottom: '16px', fontFamily: 'var(--font-serif)' }}>
                    {leader.bio}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingTop: '12px', borderTop: '1px solid var(--light-border)' }}>
                    <a href={`tel:${leader.phone}`} style={{ fontSize: '0.82rem', color: 'var(--navy)', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ color: 'var(--gold-dark)' }}>📞</span> {leader.phone}
                    </a>
                    <a href={`mailto:${leader.email}`} style={{ fontSize: '0.82rem', color: '#777', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ color: 'var(--gold-dark)' }}>✉</span> {leader.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── DEKANLAR ── */}
          <div className="section-divider">
            <h2>Fakultet dekanlari</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px', marginBottom: '60px' }}>
            {DEANS.map((dean) => (
              <div key={dean.name} style={{
                background: 'var(--white)',
                border: '1px solid var(--light-border)',
                borderTop: '3px solid var(--gold)',
                padding: '28px',
                transition: 'box-shadow 0.3s',
              }}
                onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 8px 30px rgba(26,26,56,0.1)'; }}
                onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                  <Avatar initials={dean.initials} size={52} />
                  <div>
                    <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--gold-dark)', marginBottom: '4px' }}>Dekan</div>
                    <h4 style={{ fontSize: '0.95rem', color: 'var(--navy)', lineHeight: 1.3, fontFamily: 'var(--font-display)' }}>{dean.name}</h4>
                  </div>
                </div>
                <p style={{ fontSize: '0.78rem', color: 'var(--gold-dark)', fontStyle: 'italic', marginBottom: '8px', fontFamily: 'var(--font-serif)' }}>
                  {dean.faculty}
                </p>
                <p style={{ fontSize: '0.78rem', color: '#888', marginBottom: '14px' }}>{dean.degree}</p>
                <div style={{ paddingTop: '12px', borderTop: '1px solid var(--light-border)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <a href={`tel:${dean.phone}`} style={{ fontSize: '0.78rem', color: 'var(--navy)', textDecoration: 'none', fontWeight: 600 }}>{dean.phone}</a>
                  <a href={`mailto:${dean.email}`} style={{ fontSize: '0.78rem', color: '#888', textDecoration: 'none' }}>{dean.email}</a>
                </div>
              </div>
            ))}
          </div>

          {/* ── QABUL SOATLARI ── */}
          <div className="section-divider">
            <h2>Qabul soatlari</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--light-border)', marginBottom: '60px', border: '1px solid var(--light-border)' }}>
            {[
              { day: 'Dushanba – Juma', time: '09:00 – 13:00', label: 'Rektor qabulxonasi' },
              { day: 'Dushanba – Juma', time: '14:00 – 17:00', label: 'Prorektorlar' },
              { day: 'Seshanba, Payshanba', time: '10:00 – 12:00', label: 'Fakultet dekanlari' },
              { day: 'Shanba', time: '10:00 – 13:00', label: 'Navbatchi prorektor' },
            ].map((item) => (
              <div key={item.label} style={{ background: 'var(--white)', padding: '28px 24px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--gold-dark)', marginBottom: '10px' }}>
                  {item.day}
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 300, color: 'var(--navy)', marginBottom: '8px' }}>
                  {item.time}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#888', fontFamily: 'var(--font-sans)' }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
