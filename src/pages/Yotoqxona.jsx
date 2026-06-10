import PageHero from '../components/PageHero';
import { UtensilsCrossed, Piano, Wifi, Shirt, Dumbbell, ShieldCheck } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Talabalar uchun', to: '/talabalar' },
  { label: 'Talabalar turar joyi' },
];

const ROOMS = [
  { type: '2 kishilik xona', price: "320 000 soʻm/oy", count: '48 xona', features: ['Umumiy hammom', 'Umumiy oshxona', "Oʻquv xonasi"] },
  { type: '3 kishilik xona', price: "220 000 soʻm/oy", count: '32 xona', features: ['Umumiy hammom', 'Umumiy oshxona', 'Wi-Fi'] },
  { type: 'Alohida (magistrlar)', price: "480 000 soʻm/oy", count: '16 xona', features: ['Shaxsiy hammom', 'Mini-oshxona', 'Konditsioner'] },
];

const AMENITIES = [
  { icon: UtensilsCrossed, title: 'Oshxona',         desc: "Nonushta, tushlik, kechki ovqat. Ish vaqti: 07:00–21:00" },
  { icon: Piano,           title: 'Mashq xonalari', desc: "24 soat ochiq 8 ta mashq xonasi (fortepiano bilan)" },
  { icon: Wifi,            title: 'Wi-Fi',           desc: "Barcha binolarda tezkor internet. Parol — talaba ID" },
  { icon: Shirt,           title: 'Kir yuvish',      desc: "Avtomatik kir yuvish mashinalari, 1-qavatda" },
  { icon: Dumbbell,        title: 'Sport',           desc: "Sport zali va futbol maydoni. Erkin foydalanish" },
  { icon: ShieldCheck,     title: 'Xavfsizlik',      desc: "24 soat qoʻriqchi, video kuzatuv, kirish kartasi" },
];

export default function Yotoqxona() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Talabalar uchun"
        title="Talabalar"
        emphasis="Turar joyi"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">

          {/* Stats */}
          <div className="page-stats-3" style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            background: 'var(--navy)', borderBottom: '2px solid var(--gold)', marginBottom: '60px',
          }}>
            {[
              { num: '96', label: 'Jami xona' },
              { num: '280', label: 'Talabaga moʻljallangan' },
              { num: '5 daqiqa', label: 'Konservatoriyaga yurish' },
            ].map((s) => (
              <div key={s.label} style={{ padding: '36px 24px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1, marginBottom: '8px' }}>{s.num}</div>
                <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Room types */}
          <div className="section-divider" style={{ marginTop: 0 }}>
            <h2>Xona turlari</h2>
          </div>

          <div className="g-3" style={{ marginBottom: '60px' }}>
            {ROOMS.map((room) => (
              <div key={room.type} style={{
                background: 'var(--white)', border: '1px solid var(--light-border)',
                borderTop: '3px solid var(--gold)', padding: '32px',
                transition: 'box-shadow 0.3s, transform 0.3s',
              }}
                onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 10px 36px rgba(26,26,56,0.1)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
              >
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--navy)', marginBottom: '8px', fontWeight: 400 }}>{room.type}</h3>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', fontWeight: 300, color: 'var(--gold-dark)', marginBottom: '6px', fontStyle: 'italic' }}>
                  {room.price}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#aaa', marginBottom: '20px' }}>{room.count} mavjud</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  {room.features.map((f) => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#555' }}>
                      <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', flexShrink: 0 }} />
                      {f}
                    </div>
                  ))}
                </div>
                <button style={{
                  marginTop: '24px', width: '100%', padding: '10px',
                  background: 'var(--navy)', border: 'none', color: 'var(--white)',
                  fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 700,
                  letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                  onMouseOver={(e) => { e.currentTarget.style.background = 'var(--navy-light)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.background = 'var(--navy)'; }}
                >
                  Joy band qilish →
                </button>
              </div>
            ))}
          </div>

          {/* Amenities */}
          <div className="section-divider">
            <h2>Qulayliklar</h2>
          </div>

          <div className="g-3" style={{ marginBottom: '60px' }}>
            {AMENITIES.map((a) => (
              <div key={a.title} style={{
                display: 'flex', gap: '18px', alignItems: 'flex-start',
                padding: '24px 26px', background: 'var(--white)', border: '1px solid var(--light-border)',
                borderLeft: '3px solid var(--gold)', transition: 'box-shadow 0.3s, transform 0.3s',
              }}
                onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(26,26,56,0.09)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{
                  width: 44, height: 44, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--light-50)', border: '1px solid var(--light-border)',
                  color: 'var(--gold-dark)',
                }}>
                  <a.icon size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.98rem', color: 'var(--navy)', marginBottom: '6px', fontWeight: 500 }}>{a.title}</h4>
                  <p style={{ fontSize: '0.8rem', color: '#777', lineHeight: 1.6, margin: 0 }}>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div style={{
            background: 'var(--cream)', border: '1px solid var(--light-border)',
            borderLeft: '4px solid var(--gold)', padding: '24px 32px', marginBottom: '60px',
          }}>
            <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '1.1rem', marginBottom: '8px' }}>
              Yotoqxona maʼmuriyati
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.75, fontFamily: 'var(--font-serif)', margin: 0 }}>
              Manzil: Konservatoriya yonidagi talabalar shaharchasi, 2-bino<br />
              Telefon: +998 71 234-56-88 · yotoqxona@konservatoriya.uz<br />
              Ish vaqti: Dushanba–Shanba, 08:00–20:00
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
