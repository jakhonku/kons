import PageHero from '../components/PageHero';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Talabalar uchun', to: '/talabalar' },
  { label: 'Grantlar va stipendiyalar' },
];

const GRANTS = [
  {
    type: 'Davlat',
    color: 'var(--navy)',
    items: [
      { name: "Prezident stipendiyasi", amount: "2 500 000 so'm/oy", deadline: 'Har yil 1-sentabr', desc: "A'lo baholar va ilmiy faollik uchun" },
      { name: "Davlat stipendiyasi (1-toifa)", amount: "850 000 so'm/oy", deadline: 'Avtomatik', desc: "GPA 3.5 va undan yuqori talabalar" },
      { name: "Davlat stipendiyasi (2-toifa)", amount: "620 000 so'm/oy", deadline: 'Avtomatik', desc: "GPA 3.0–3.49 talabalar" },
    ],
  },
  {
    type: "Xalqaro",
    color: 'var(--gold-dark)',
    items: [
      { name: "Erasmus+ Stipendiyasi", amount: "800–1 200 EUR/oy", deadline: '1-fevral', desc: "Yevropa universitetlarida o'qish uchun" },
      { name: "DAAD (Germaniya)", amount: "750 EUR/oy", deadline: '15-oktabr', desc: "Germaniyada magistratura yoki PhD" },
      { name: "Fulbright (AQSh)", amount: "To'liq qoplash", deadline: '1-oktabr', desc: "AQSh universitetlarida o'qish" },
    ],
  },
  {
    type: "Konservatoriya ichki",
    color: '#555',
    items: [
      { name: "Ijodiy yutuqlar granti", amount: "1 200 000 so'm", deadline: 'Har semestr', desc: "Tanlov va festivallar g'oliblari uchun" },
      { name: "Ijtimoiy yordam", amount: "400 000 so'm/oy", deadline: 'Ariza asosida', desc: "Ehtiyojmand talabalar uchun" },
    ],
  },
];

export default function Grantlar() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Talabalar uchun"
        title="Grantlar va"
        emphasis="Stipendiyalar"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">

          {GRANTS.map((section, si) => (
            <div key={section.type}>
              <div className="section-divider" style={{ marginTop: si === 0 ? 0 : undefined }}>
                <h2>{section.type} grantlar</h2>
              </div>
              <div className="g-3" style={{ marginBottom: '50px' }}>
                {section.items.map((item) => (
                  <div key={item.name} style={{
                    background: 'var(--white)', border: '1px solid var(--light-border)',
                    borderTop: `3px solid ${section.color}`, padding: '28px',
                    transition: 'box-shadow 0.3s, transform 0.3s',
                  }}
                    onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 8px 30px rgba(26,26,56,0.1)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
                  >
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '10px', fontWeight: 400, lineHeight: 1.3 }}>
                      {item.name}
                    </h3>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: section.color, marginBottom: '10px', fontStyle: 'italic' }}>
                      {item.amount}
                    </div>
                    <p style={{ fontSize: '0.8rem', color: '#888', lineHeight: 1.6, marginBottom: '16px' }}>{item.desc}</p>
                    <div style={{ paddingTop: '12px', borderTop: '1px solid var(--light-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#bbb', marginBottom: '2px' }}>Muddati</div>
                        <div style={{ fontSize: '0.82rem', color: 'var(--navy)', fontWeight: 600 }}>{item.deadline}</div>
                      </div>
                      <button style={{
                        padding: '6px 16px', background: 'transparent',
                        border: `1px solid ${section.color}`, color: section.color,
                        fontSize: '0.7rem', fontFamily: 'var(--font-sans)',
                        cursor: 'pointer', fontWeight: 700,
                      }}>
                        Ariza →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={{
            background: 'var(--cream)', border: '1px solid var(--light-border)',
            borderLeft: '4px solid var(--gold)', padding: '24px 32px', marginBottom: '60px',
          }}>
            <p style={{ fontSize: '0.88rem', color: '#555', lineHeight: 1.8, fontFamily: 'var(--font-serif)', margin: 0 }}>
              Grant va stipendiya arizalari uchun <strong style={{ color: 'var(--navy)' }}>Talabalar ishlari bo'limi</strong>ga murojaat qiling
              (1-bino, 108-xona) yoki <strong style={{ color: 'var(--navy)' }}>talabalar@konservatoriya.uz</strong> manziliga yozing.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
