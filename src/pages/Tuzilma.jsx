import PageHero from '../components/PageHero';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Konservatoriya' },
  { label: 'Tuzilma' },
];

const FACULTIES = [
  {
    id: 1,
    name: 'Akademik xonandalik fakulteti',
    icon: '♪',
    head: "Rahimova Sarvinoz Bekovna",
    kafedralar: [
      "Akademik xonandalik",
      "Opera tayyorlash",
      "Xor dirijyorligi",
      "Sahna nutqi va aktyorlik mahorati",
    ],
  },
  {
    id: 2,
    name: "Cholg'u ijrochiligi fakulteti",
    icon: '♫',
    head: "Karimov Sherzod Rustamovich",
    kafedralar: [
      "Fortepiano",
      "Torli cholg'ular",
      "Dam olish cholg'ulari",
      "Kamera ansambli",
      "Orkestr sinfi",
    ],
  },
  {
    id: 3,
    name: 'Kompozitsiya va musiqa nazariyasi fakulteti',
    icon: '𝄞',
    head: "Mirzayeva Gulnora Abdullayevna",
    kafedralar: [
      "Kompozitsiya",
      "Musiqa nazariyasi",
      "Musiqa tarixi",
      "Polifoniya va garmoniya",
    ],
  },
  {
    id: 4,
    name: "Xalq cholg'ulari fakulteti",
    icon: '♬',
    head: "Qodirov Murod Davlatovich",
    kafedralar: [
      "Dutor va g'ijjak",
      "Doira va zarbli cholg'ular",
      "Ud va tanbur",
      "Xalq ansambli",
    ],
  },
  {
    id: 5,
    name: "Musiqa san'ati va pedagogika fakulteti",
    icon: '𝄢',
    head: "Hasanova Dilnoza Ibrohimovna",
    kafedralar: [
      "Musiqa pedagogikasi",
      "Maktabgacha ta'lim musiqasi",
      "Musiqa psixologiyasi",
      "Amaliy musiqa",
    ],
  },
];

const DEPARTMENTS = [
  { name: "Akademik masalalar bo'limi", head: "Mas'ul: O'quv bo'limi" },
  { name: "Ilmiy-tadqiqot markazi",     head: "Mas'ul: Ilmiy bo'lim" },
  { name: "Xalqaro aloqalar bo'limi",  head: "Mas'ul: Xalqaro bo'lim" },
  { name: "Moliya-xo'jalik bo'limi",   head: "Mas'ul: Ma'muriy bo'lim" },
  { name: "Axborot texnologiyalari",    head: "Mas'ul: IT bo'limi" },
  { name: "Kutubxona va arxiv",         head: "Mas'ul: Kutubxona bo'limi" },
];

export default function Tuzilma() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Konservatoriya"
        title="Muassasa"
        emphasis="Tuzilmasi"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">

          <article className="article-body">
            <p className="lead">
              Konservatoriya tuzilmasi 5 ta fakultet, 38 kafedra va ko'plab
              ma'muriy bo'limlardan iborat bo'lib, barcha jarayonlar zamonaviy
              boshqaruv tizimi asosida olib boriladi.
            </p>
          </article>

          {/* Rektorat */}
          <div className="section-divider" style={{ marginTop: 0 }}>
            <h2>Boshqaruv tuzilmasi</h2>
          </div>

          <div style={{ background: 'var(--white)', border: '1px solid var(--light-border)', padding: '32px', marginBottom: '40px', textAlign: 'center' }}>
            <div style={{ display: 'inline-block', padding: '16px 48px', border: '2px solid var(--gold)', marginBottom: '24px' }}>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '3px', color: 'var(--gold-dark)', marginBottom: '4px', fontFamily: 'var(--font-sans)', textTransform: 'uppercase' }}>
                Rahbar
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--navy)' }}>Rektor</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
              {["Ta'lim ishlari prorektori", "Ilmiy-ijodiy ishlar prorektori", "Xalqaro aloqalar prorektori", "Ma'muriy-xo'jalik prorektori"].map((p) => (
                <div key={p} style={{ padding: '14px', border: '1px solid var(--light-border)', background: 'var(--light-50)', fontSize: '0.78rem', color: 'var(--navy)', textAlign: 'center', lineHeight: 1.4, fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
                  {p}
                </div>
              ))}
            </div>
          </div>

          {/* Fakultetlar */}
          <div className="section-divider">
            <h2>Fakultetlar</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '60px' }}>
            {FACULTIES.map((fac) => (
              <div key={fac.id} style={{ background: 'var(--white)', border: '1px solid var(--light-border)', overflow: 'hidden' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '22px 28px', borderBottom: '1px solid var(--light-border)', background: 'var(--light-50)' }}>
                  <div style={{ fontSize: '1.8rem', color: 'var(--gold)', lineHeight: 1, width: '40px', textAlign: 'center' }}>{fac.icon}</div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--navy)', fontWeight: 400 }}>{fac.name}</h3>
                    <div style={{ fontSize: '0.75rem', color: 'var(--gold-dark)', marginTop: '3px', fontFamily: 'var(--font-sans)' }}>
                      Dekan: {fac.head}
                    </div>
                  </div>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '2px', color: '#888', fontFamily: 'var(--font-sans)', textTransform: 'uppercase' }}>
                    {fac.kafedralar.length} kafedra
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--light-border)' }}>
                  {fac.kafedralar.map((k) => (
                    <div key={k} style={{ background: 'var(--white)', padding: '14px 18px', fontSize: '0.82rem', color: '#555', fontFamily: 'var(--font-serif)' }}>
                      {k}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bo'limlar */}
          <div className="section-divider">
            <h2>Ma'muriy bo'limlar</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '60px' }}>
            {DEPARTMENTS.map((d) => (
              <div key={d.name} style={{ background: 'var(--white)', border: '1px solid var(--light-border)', padding: '22px 24px', borderLeft: '3px solid var(--gold)' }}>
                <h4 style={{ color: 'var(--navy)', marginBottom: '6px', fontSize: '0.95rem', fontFamily: 'var(--font-display)' }}>{d.name}</h4>
                <div style={{ fontSize: '0.75rem', color: '#888', fontFamily: 'var(--font-sans)' }}>{d.head}</div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
