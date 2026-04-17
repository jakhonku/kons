import PageHero from '../components/PageHero';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Talabalar uchun', to: '/talabalar' },
  { label: "To'garaklar" },
];

const CIRCLES = [
  {
    category: 'Ijodiy',
    color: 'var(--gold-dark)',
    items: [
      { name: "Kamera musiqa ansambli", schedule: "Seshanba, Payshanba 16:00", room: "Katta zal", leader: "Prof. Karimov Sh." },
      { name: "Tarix musiqa klubi", schedule: "Chorshanba 15:00", room: "207-xona", leader: "Dots. Mirzayeva G." },
      { name: "Elektron musiqa studiyasi", schedule: "Juma 14:00", room: "Studiya (yerto'la)", leader: "O'qit. Nazarov A." },
      { name: "Kompozitsiya workshopi", schedule: "Shanba 10:00", room: "206-xona", leader: "Prof. Toshmatov B." },
    ],
  },
  {
    category: 'Madaniy va ijtimoiy',
    color: 'var(--navy)',
    items: [
      { name: "KVN jamoasi", schedule: "Dushanba 17:30", room: "Aktyorlik sinfxonasi", leader: "Talabalar kengashi" },
      { name: "Xalqaro talabalar klubi", schedule: "Payshanba 16:30", room: "202-xona", leader: "Xalqaro bo'lim" },
      { name: "Ekologiya va yashil hayot", schedule: "Seshanba 17:00", room: "Botanika bog'i", leader: "Tashabbuskor guruh" },
    ],
  },
  {
    category: 'Sport',
    color: '#555',
    items: [
      { name: "Shaxmat to'garagi", schedule: "Har kuni 12:30", room: "Talabalar klubi", leader: "Ust. Xoliqov J." },
      { name: "Ping-pong", schedule: "Seshanba, Juma 17:00", room: "Sport zali", leader: "Jismoniy tarbiya kafedrasi" },
      { name: "Yoga va meditatsiya", schedule: "Dushanba, Chorshanba 07:30", room: "Sport zali", leader: "Inst. Qodirov M." },
    ],
  },
];

export default function Togaraklar() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Talabalar uchun"
        title="To'garaklar va"
        emphasis="Faoliyatlar"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">

          {CIRCLES.map((section, si) => (
            <div key={section.category}>
              <div className="section-divider" style={{ marginTop: si === 0 ? 0 : undefined }}>
                <h2>{section.category} to'garaklar</h2>
              </div>

              <div className="g-2" style={{ marginBottom: '50px' }}>
                {section.items.map((item) => (
                  <div key={item.name} style={{
                    background: 'var(--white)', border: '1px solid var(--light-border)',
                    borderLeft: `4px solid ${section.color}`, padding: '24px 28px',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    transition: 'box-shadow 0.3s',
                    flexWrap: 'wrap', gap: '16px',
                  }}
                    onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 6px 24px rgba(26,26,56,0.09)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    <div style={{ flex: 1, minWidth: 200 }}>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: 'var(--navy)', marginBottom: '6px', fontWeight: 400 }}>
                        {item.name}
                      </h3>
                      <div style={{ fontSize: '0.75rem', color: '#888', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                        <span>🕐 {item.schedule}</span>
                        <span>📍 {item.room}</span>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: '#bbb', marginBottom: '2px' }}>Rahbar</div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--navy)', fontWeight: 500 }}>{item.leader}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={{
            background: 'var(--cream)', border: '1px solid var(--light-border)',
            borderLeft: '4px solid var(--gold)', padding: '22px 30px', marginBottom: '60px',
          }}>
            <p style={{ fontSize: '0.88rem', color: '#555', lineHeight: 1.75, fontFamily: 'var(--font-serif)', margin: 0 }}>
              Yangi to'garak ochish yoki mavjudiga qo'shilish uchun{' '}
              <strong style={{ color: 'var(--navy)' }}>Talabalar kengashi</strong>ga murojaat qiling —
              1-bino, 112-xona. Barcha to'garaklar <strong style={{ color: 'var(--navy)' }}>bepul</strong>.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
