import PageHero from '../components/PageHero';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Ijodiy faoliyat', to: '/ijodiy-faoliyat' },
  { label: 'Jonli efir' },
];

const UPCOMING = [
  { date: '12.05.2026', time: '19:00', title: 'La Traviata premyerasi', desc: "Musiqali teatr studiyasi tomonidan G. Verdi operasi.", status: 'live' },
  { date: '15.05.2026', time: '19:00', title: 'Beethoven 9-simfoniyasi', desc: "Konservatoriya simfonik orkestri konserti.", status: 'scheduled' },
  { date: '18.05.2026', time: '17:00', title: 'Maqom kechalari', desc: "An'anaviy maqom san'ati.", status: 'scheduled' },
  { date: '22.05.2026', time: '19:00', title: 'Kamera kechasi: Mozart va Brahms', desc: "Fortepiano kafedrasi.", status: 'scheduled' },
];

export default function JonliEfir() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Ijodiy faoliyat"
        title="Jonli"
        emphasis="efir"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">
          <article className="article-body">
            <p className="lead">
              Konservatoriya tadbirlarining real-time onlayn translatsiyasi. Bosh zal va Opera
              zalidagi konsertlar, opera spektakllari va mahorat darslari toʻgʻridan-toʻgʻri
              uy sharoitida tomosha qilish imkoniyati.
            </p>
          </article>

          {/* Live player placeholder */}
          <div style={{ background: '#0d0d28', border: '1px solid var(--gold)', aspectRatio: '16/9', position: 'relative', overflow: 'hidden', marginBottom: '40px' }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '20px' }}>
              <div style={{ width: '80px', height: '80px', border: '2px solid var(--gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="6,4 6,20 20,12" />
                </svg>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '4px', color: '#dc2626', textTransform: 'uppercase', marginBottom: '8px', fontFamily: 'var(--font-sans)' }}>● JONLI EFIR</div>
                <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--white)', fontSize: '1.4rem', fontWeight: 300, fontStyle: 'italic' }}>La Traviata premyerasi</h3>
                <p style={{ color: 'rgba(240,237,232,0.6)', fontSize: '0.85rem', marginTop: '6px' }}>Bugun 19:00 da boshlanadi · Opera zali</p>
              </div>
            </div>
          </div>

          <div className="section-divider"><h2>Kelgusi efirlar</h2></div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '60px' }}>
            {UPCOMING.map((ev, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '160px 1fr 140px', background: 'var(--white)', border: '1px solid var(--light-border)', borderLeft: '3px solid var(--gold)' }}>
                <div style={{ padding: '18px 24px', borderRight: '1px solid var(--light-border)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--navy)', fontWeight: 500 }}>{ev.date}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--gold-dark)', marginTop: '4px', fontFamily: 'var(--font-sans)' }}>{ev.time}</div>
                </div>
                <div style={{ padding: '18px 24px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '1rem', fontWeight: 500, marginBottom: '4px' }}>{ev.title}</h3>
                  <p style={{ color: '#666', fontSize: '0.84rem', fontFamily: 'var(--font-serif)' }}>{ev.desc}</p>
                </div>
                <div style={{ padding: '18px', borderLeft: '1px solid var(--light-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {ev.status === 'live' ? (
                    <span style={{ padding: '8px 18px', background: '#dc2626', color: 'white', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>● JONLI</span>
                  ) : (
                    <button style={{ padding: '10px 18px', background: 'transparent', color: 'var(--navy)', border: '1px solid var(--navy)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>Eslatma →</button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="section-divider"><h2>Qanday tomosha qilish</h2></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '60px' }}>
            <div style={{ background: 'var(--white)', border: '1px solid var(--light-border)', borderTop: '3px solid var(--gold)', padding: '24px' }}>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '2.5px', color: 'var(--gold-dark)', textTransform: 'uppercase', marginBottom: '10px' }}>YouTube</div>
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '1rem', fontWeight: 500, marginBottom: '8px' }}>youtube.com/@konservatoriya</h3>
              <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.6 }}>HD sifat, chat va eslatma xabarlari.</p>
            </div>
            <div style={{ background: 'var(--white)', border: '1px solid var(--light-border)', borderTop: '3px solid var(--gold)', padding: '24px' }}>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '2.5px', color: 'var(--gold-dark)', textTransform: 'uppercase', marginBottom: '10px' }}>Telegram</div>
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '1rem', fontWeight: 500, marginBottom: '8px' }}>@konservatoriya_live</h3>
              <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.6 }}>Telegram videostream va arxiv.</p>
            </div>
            <div style={{ background: 'var(--white)', border: '1px solid var(--light-border)', borderTop: '3px solid var(--gold)', padding: '24px' }}>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '2.5px', color: 'var(--gold-dark)', textTransform: 'uppercase', marginBottom: '10px' }}>Web embed</div>
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '1rem', fontWeight: 500, marginBottom: '8px' }}>Toʻgʻridan-toʻgʻri saytda</h3>
              <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.6 }}>Saytning shu sahifasida oʻrnatilgan player.</p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
