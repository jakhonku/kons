import PageHero from '../components/PageHero';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Konservatoriya' },
  { label: 'Rahbariyat' },
];

const LEADERS = [
  {
    title: 'Rektor',
    name: "Madaminov Kamoliddin O'tkurovich",
    degree: "San'atshunoslik fanlari doktori, professor",
    phone: '+998 71 234-56-78',
    email: 'rektor@konservatoriya.uz',
    bio: "O'zbekiston Davlat Konservatoriyasini 2018-yildan boshqarib kelmoqda. Xalqaro musiqa tanlovlari g'olibi, 80 dan ortiq ilmiy ishlar muallifi.",
    initials: 'MK',
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
  {
    faculty: 'Akademik xonandalik fakulteti',
    name: "Rahimova Sarvinoz Bekovna",
    degree: "San'atshunoslik fanlari nomzodi, dotsent",
    phone: '+998 71 234-57-01',
    email: 'xonandalik@konservatoriya.uz',
    initials: 'RS',
  },
  {
    faculty: "Cholg'u ijrochiligi fakulteti",
    name: "Karimov Sherzod Rustamovich",
    degree: "Professor",
    phone: '+998 71 234-57-03',
    email: 'cholgu@konservatoriya.uz',
    initials: 'KS',
  },
  {
    faculty: 'Kompozitsiya va musiqa nazariyasi fakulteti',
    name: "Mirzayeva Gulnora Abdullayevna",
    degree: "San'atshunoslik fanlari doktori, professor",
    phone: '+998 71 234-57-05',
    email: 'kompozitsiya@konservatoriya.uz',
    initials: 'MG',
  },
  {
    faculty: "Xalq cholg'ulari fakulteti",
    name: "Qodirov Murod Davlatovich",
    degree: "Dotsent",
    phone: '+998 71 234-57-07',
    email: 'xalqcholgu@konservatoriya.uz',
    initials: 'QM',
  },
  {
    faculty: "Musiqa san'ati va pedagogika fakulteti",
    name: "Hasanova Dilnoza Ibrohimovna",
    degree: "San'atshunoslik fanlari nomzodi, dotsent",
    phone: '+998 71 234-57-09',
    email: 'pedagogika@konservatoriya.uz',
    initials: 'HD',
  },
];

function Avatar({ initials }) {
  return (
    <div style={{
      width: '90px',
      height: '90px',
      borderRadius: '50%',
      background: 'var(--primary-blue)',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.6rem',
      fontFamily: 'var(--font-serif)',
      flexShrink: 0,
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

          {/* Rahbariyat */}
          <div className="section-divider" style={{ marginTop: 0 }}>
            <h2>Rahbariyat</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px', marginBottom: '60px' }}>
            {LEADERS.map((leader) => (
              <div key={leader.name} className="rahbar-card" style={{
                border: '1px solid #e8e4dc',
                padding: '35px',
                display: 'flex',
                gap: '25px',
                alignItems: 'flex-start',
                transition: 'box-shadow 0.3s',
              }}>
                <Avatar initials={leader.initials} />
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: 'var(--accent-gold)',
                    marginBottom: '8px',
                  }}>
                    {leader.title}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-blue)', marginBottom: '6px' }}>
                    {leader.name}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '12px', fontStyle: 'italic' }}>
                    {leader.degree}
                  </p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.6, marginBottom: '15px' }}>
                    {leader.bio}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <a href={`tel:${leader.phone}`} style={{ fontSize: '0.85rem', color: 'var(--primary-blue)', textDecoration: 'none', fontWeight: 600 }}>
                      📞 {leader.phone}
                    </a>
                    <a href={`mailto:${leader.email}`} style={{ fontSize: '0.85rem', color: 'var(--primary-blue)', textDecoration: 'none' }}>
                      ✉ {leader.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dekanlar */}
          <div className="section-divider">
            <h2>Fakultet dekanlari</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '60px' }}>
            {DEANS.map((dean) => (
              <div key={dean.name} style={{
                border: '1px solid #e8e4dc',
                padding: '28px',
                borderTop: '4px solid var(--accent-gold)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                  <div style={{
                    width: '55px',
                    height: '55px',
                    borderRadius: '50%',
                    background: 'var(--cream-bg)',
                    border: '2px solid var(--accent-gold)',
                    color: 'var(--primary-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 700,
                    flexShrink: 0,
                  }}>
                    {dean.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '4px' }}>Dekan</div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--primary-blue)', lineHeight: 1.3 }}>{dean.name}</h4>
                  </div>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontStyle: 'italic', marginBottom: '10px' }}>
                  {dean.faculty}
                </p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '12px' }}>{dean.degree}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <a href={`tel:${dean.phone}`} style={{ fontSize: '0.8rem', color: 'var(--primary-blue)', textDecoration: 'none' }}>
                    {dean.phone}
                  </a>
                  <a href={`mailto:${dean.email}`} style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textDecoration: 'none' }}>
                    {dean.email}
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
