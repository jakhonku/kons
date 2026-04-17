import PageHero from '../components/PageHero';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Talabalar uchun', to: '/talabalar' },
  { label: "O'quv dasturlari (Sillabuslar)" },
];

const SUBJECTS = [
  { kafedra: "Musiqa nazariyasi", fanlar: ["Solfejio", "Garmoniya", "Polifoniya", "Musiqa shakllari tahlili", "Musiqa tarixi"] },
  { kafedra: "Fortepiano", fanlar: ["Maxsus fortepiano", "Kamera ansambli", "Fortepiano pedagogikasi", "Konsertmeystirlik sinfi"] },
  { kafedra: "Xonandalik", fanlar: ["Vokal", "Opera tayyorgarligi", "Sahna mahorati", "Xor dirijyorligi"] },
  { kafedra: "Kompozitsiya", fanlar: ["Kompozitsiya", "Orkestr partiturasini o'qish", "Aranjirovka", "Elektron musiqa"] },
  { kafedra: "Xalq cholg'ulari", fanlar: ["Dutor", "G'ijjak", "Doira", "Xalq musiqasi tarixi"] },
];

export default function Sillabuslar() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Talabalar uchun"
        title="O'quv dasturlari"
        emphasis="Sillabuslar"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">

          <div className="section-divider" style={{ marginTop: 0 }}>
            <h2>Kafedra bo'yicha sillabuslar</h2>
          </div>

          <div className="g-2" style={{ marginBottom: '60px' }}>
            {SUBJECTS.map((block) => (
              <div key={block.kafedra} style={{
                background: 'var(--white)', border: '1px solid var(--light-border)',
                borderTop: '3px solid var(--gold)', padding: '28px',
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: '1.2rem',
                  color: 'var(--navy)', marginBottom: '20px', fontWeight: 400,
                }}>
                  {block.kafedra} kafedrasi
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {block.fanlar.map((fan) => (
                    <div key={fan} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '10px 14px', background: 'var(--light-50)',
                      border: '1px solid var(--light-border)',
                      transition: 'background 0.2s',
                    }}
                      onMouseOver={(e) => { e.currentTarget.style.background = 'var(--cream)'; }}
                      onMouseOut={(e) => { e.currentTarget.style.background = 'var(--light-50)'; }}
                    >
                      <span style={{ fontSize: '0.85rem', color: 'var(--navy)', fontFamily: 'var(--font-sans)' }}>
                        {fan}
                      </span>
                      <button style={{
                        padding: '4px 12px', background: 'transparent',
                        border: '1px solid var(--gold-dark)', color: 'var(--gold-dark)',
                        fontSize: '0.65rem', fontFamily: 'var(--font-sans)',
                        cursor: 'pointer', fontWeight: 700, letterSpacing: '0.5px',
                      }}>
                        PDF ↓
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: 'var(--navy)', padding: '32px 40px',
            borderTop: '3px solid var(--gold)', marginBottom: '60px',
          }}>
            <p style={{ fontSize: '0.9rem', color: 'rgba(240,237,232,0.75)', fontFamily: 'var(--font-serif)', lineHeight: 1.8, margin: 0 }}>
              Barcha sillabuslar <strong style={{ color: 'var(--gold-light)' }}>2025–2026 o'quv yili</strong> uchun mo'ljallangan.
              Qo'shimcha fanlar va yangilangan sillabuslar uchun tegishli kafedra o'qituvchilari bilan bog'laning.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
