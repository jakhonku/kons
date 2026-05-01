import { useState } from 'react';
import PageHero from '../components/PageHero';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Ijodiy faoliyat', to: '/ijodiy-faoliyat' },
  { label: 'Afisha' },
];

const EVENTS = [
  { id: 1, date: '08', month: 'MAY', year: '2026', time: '19:00', genre: 'Konsert', title: "Bahor melodiyalari", subtitle: "Bakalavr 4-kurs solo konserti", venue: "Bosh zal", price: "Bepul", status: 'open' },
  { id: 2, date: '12', month: 'MAY', year: '2026', time: '18:30', genre: 'Opera', title: "La Traviata (G. Verdi)", subtitle: "Musiqali teatr studiyasi premyerasi", venue: "Opera zali", price: "150 000 so'm", status: 'open' },
  { id: 3, date: '15', month: 'MAY', year: '2026', time: '19:00', genre: 'Simfoniya', title: "Beethoven: 9-simfoniya", subtitle: "Konservatoriya simfonik orkestri", venue: "Bosh zal", price: "200 000 so'm", status: 'open' },
  { id: 4, date: '18', month: 'MAY', year: '2026', time: '17:00', genre: 'Maqom', title: "Maqom kechalari", subtitle: "Xalq cholg'ulari fakulteti", venue: "Kamera zal", price: "Bepul", status: 'open' },
  { id: 5, date: '22', month: 'MAY', year: '2026', time: '19:00', genre: 'Kamera', title: "Kamera kechasi: Mozart va Brahms", subtitle: "Fortepiano kafedrasi", venue: "Kamera zal", price: "100 000 so'm", status: 'limited' },
  { id: 6, date: '26', month: 'MAY', year: '2026', time: '18:00', genre: 'Xor', title: "Akademik xor jamoasi konserti", subtitle: "Yillik bahor konserti", venue: "Bosh zal", price: "Bepul", status: 'open' },
  { id: 7, date: '30', month: 'MAY', year: '2026', time: '19:30', genre: 'Jaz', title: "Konservatoriya jaz orkestri", subtitle: "Bitiruvchilar konserti", venue: "Konsert zali", price: "120 000 so'm", status: 'open' },
  { id: 8, date: '02', month: 'IYN', year: '2026', time: '19:00', genre: 'Ballet', title: "Sharqning gultoji", subtitle: "Milliy raqs va musiqa kompozitsiyasi", venue: "Opera zali", price: "180 000 so'm", status: 'sold' },
];

const GENRES = ['Barchasi', 'Konsert', 'Opera', 'Simfoniya', 'Kamera', 'Maqom', 'Xor', 'Jaz', 'Ballet'];

export default function Afisha() {
  const [filter, setFilter] = useState('Barchasi');
  const filtered = filter === 'Barchasi' ? EVENTS : EVENTS.filter(e => e.genre === filter);

  return (
    <main className="content-wrapper">
      <PageHero
        tag="Ijodiy faoliyat"
        title="Konservatoriya"
        emphasis="afishasi"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">
          <article className="article-body">
            <p className="lead">
              Joriy oyning konsertlari, opera spektakllari va ijodiy tadbirlari. Barcha tadbirlar
              uchun chiptalar konservatoriya kassasida yoki online tarzda ticket.uz orqali sotib
              olinishi mumkin.
            </p>
          </article>

          {/* Filter chips */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
            {GENRES.map((g) => (
              <button
                key={g}
                onClick={() => setFilter(g)}
                style={{
                  padding: '10px 22px',
                  background: filter === g ? 'var(--navy)' : 'transparent',
                  color: filter === g ? 'var(--white)' : '#555',
                  border: `1px solid ${filter === g ? 'var(--navy)' : 'var(--light-border)'}`,
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {g}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '60px' }}>
            {filtered.map((ev) => (
              <div key={ev.id} style={{ display: 'grid', gridTemplateColumns: '120px 1fr 200px', background: 'var(--white)', border: '1px solid var(--light-border)', borderLeft: '4px solid var(--gold)', overflow: 'hidden' }}>
                <div style={{ background: 'var(--navy)', color: 'var(--white)', padding: '24px 16px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ fontSize: '2.4rem', fontFamily: 'var(--font-display)', fontWeight: 300, lineHeight: 1, color: 'var(--gold)' }}>{ev.date}</div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '2.5px', textTransform: 'uppercase', color: 'rgba(240,237,232,0.7)', marginTop: '6px', fontFamily: 'var(--font-sans)' }}>{ev.month} {ev.year}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--gold-light)', marginTop: '8px', fontFamily: 'var(--font-sans)' }}>{ev.time}</div>
                </div>
                <div style={{ padding: '22px 28px' }}>
                  <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '2.5px', color: 'var(--gold-dark)', textTransform: 'uppercase', marginBottom: '8px', fontFamily: 'var(--font-sans)' }}>{ev.genre}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '1.15rem', fontWeight: 500, marginBottom: '6px' }}>{ev.title}</h3>
                  <p style={{ color: '#666', fontSize: '0.88rem', fontFamily: 'var(--font-serif)' }}>{ev.subtitle}</p>
                  <div style={{ marginTop: '12px', fontSize: '0.78rem', color: '#888', fontFamily: 'var(--font-sans)' }}>
                    <span style={{ color: 'var(--navy)', fontWeight: 600 }}>{ev.venue}</span> · {ev.price}
                  </div>
                </div>
                <div style={{ padding: '20px', borderLeft: '1px solid var(--light-border)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', background: 'var(--light-50)' }}>
                  {ev.status === 'open' && (
                    <>
                      <div style={{ fontSize: '0.6rem', color: '#16a34a', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>Ochiq</div>
                      <button style={{ padding: '10px 24px', background: 'var(--gold)', color: '#08081a', border: 'none', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>Chiptalar →</button>
                    </>
                  )}
                  {ev.status === 'limited' && (
                    <>
                      <div style={{ fontSize: '0.6rem', color: '#d97706', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>Ozgina qoldi</div>
                      <button style={{ padding: '10px 24px', background: 'var(--gold)', color: '#08081a', border: 'none', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>Tezroq →</button>
                    </>
                  )}
                  {ev.status === 'sold' && (
                    <div style={{ fontSize: '0.7rem', color: '#dc2626', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Sotilgan</div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
