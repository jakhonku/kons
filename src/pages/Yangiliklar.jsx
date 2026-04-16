import { useState } from 'react';
import PageHero from '../components/PageHero';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Axborot xizmati' },
  { label: 'Yangiliklar' },
];

const CATEGORIES = ["Barchasi", "Voqealar", "Mukofotlar", "Ta'lim", "Xalqaro"];

const NEWS = [
  {
    id: 1,
    cat: 'Voqealar',
    date: '12 APREL, 2026',
    title: 'Xalqaro Teatr Kuni munosabati bilan tantanali kecha',
    excerpt: "Konservatoriya katta zalida o'tkazilgan tadbirda yetakchi ijrochilar ishtirok etdi.",
    image: 'https://images.unsplash.com/photo-1514320298324-ee4490b1e3b0?q=80&w=800',
    featured: true,
  },
  {
    id: 2,
    cat: "Ta'lim",
    date: '08 APREL, 2026',
    title: "Yangi o'quv dasturlari tasdiqlandi",
    excerpt: "2026-2027 o'quv yili uchun yangilangan sillabuslar Akademik Kengash tomonidan tasdiqlandi.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800',
    featured: false,
  },
  {
    id: 3,
    cat: 'Mukofotlar',
    date: '02 APREL, 2026',
    title: "Talabamiz xalqaro tanlovi g'olibi bo'ldi",
    excerpt: "Vena shahrida bo'lib o'tgan yosh ijrochilar tanlovida konservatoriya talabasi birinchi o'rinni egalladi.",
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=800',
    featured: false,
  },
  {
    id: 4,
    cat: 'Xalqaro',
    date: '28 MART, 2026',
    title: "Parij Musiqa Akademiyasi bilan memorandum imzolandi",
    excerpt: "Konservatoriya va Parij Musiqa Akademiyasi o'rtasida hamkorlik to'g'risida shartnoma imzolandi.",
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800',
    featured: false,
  },
  {
    id: 5,
    cat: 'Voqealar',
    date: '20 MART, 2026',
    title: "Bahor konsert mavsumi boshlanadi",
    excerpt: "Aprel-may oylarida konservatoriya zallarida 40 dan ortiq konsert va spektakllar namoyish etiladi.",
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800',
    featured: false,
  },
];

export default function Yangiliklar() {
  const [active, setActive] = useState("Barchasi");

  const filtered = active === "Barchasi" ? NEWS : NEWS.filter(n => n.cat === active);
  const featured  = filtered.find(n => n.featured) ?? filtered[0];
  const rest      = filtered.filter(n => n !== featured);

  return (
    <main className="content-wrapper">
      <PageHero
        tag="Axborot xizmati"
        title="So'nggi"
        emphasis="Yangiliklar"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">

          {/* Kategoriya filtrlari */}
          <div className="tag-filters" style={{ borderBottom: '1px solid var(--light-border)', paddingBottom: '20px' }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`tag-btn${active === cat ? ' active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Asosiy yangilik (featured) */}
          {featured && (
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '0', marginTop: '40px', marginBottom: '40px', border: '1px solid var(--light-border)', overflow: 'hidden' }}>
              <div style={{ position: 'relative', minHeight: '380px', overflow: 'hidden' }}>
                <img
                  src={featured.image}
                  alt={featured.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(26,26,56,0.6) 0%, rgba(26,26,56,0.2) 100%)' }} />
                <div style={{ position: 'absolute', bottom: '28px', left: '28px' }}>
                  <span style={{ background: 'var(--gold)', color: 'var(--white)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', padding: '4px 12px', fontFamily: 'var(--font-sans)' }}>
                    {featured.cat}
                  </span>
                </div>
              </div>
              <div style={{ background: 'var(--white)', padding: '44px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '2px', color: 'var(--gold-dark)', marginBottom: '14px', fontFamily: 'var(--font-sans)' }}>
                  {featured.date}
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', fontWeight: 300, color: 'var(--navy)', lineHeight: 1.25, marginBottom: '16px' }}>
                  {featured.title}
                </h2>
                <p style={{ fontSize: '0.92rem', color: '#666', lineHeight: 1.7, fontFamily: 'var(--font-serif)', fontStyle: 'italic', marginBottom: '28px' }}>
                  {featured.excerpt}
                </p>
                <a href="#" className="btn-outline-dark" style={{ alignSelf: 'flex-start' }}>
                  TO'LIQ O'QISH
                </a>
              </div>
            </div>
          )}

          {/* Qolgan yangiliklar */}
          {rest.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '40px' }}>
              {rest.map((item) => (
                <article
                  key={item.id}
                  style={{ background: 'var(--white)', border: '1px solid var(--light-border)', overflow: 'hidden', transition: 'box-shadow 0.3s, transform 0.3s', cursor: 'pointer' }}
                  onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 8px 30px rgba(26,26,56,0.1)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
                >
                  <div style={{ position: 'relative', overflow: 'hidden', height: '180px' }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                    />
                    <div style={{ position: 'absolute', top: '14px', left: '14px' }}>
                      <span style={{ background: 'var(--navy)', color: 'var(--white)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '3px 10px', fontFamily: 'var(--font-sans)' }}>
                        {item.cat}
                      </span>
                    </div>
                  </div>
                  <div style={{ padding: '22px' }}>
                    <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '2px', color: 'var(--gold-dark)', marginBottom: '10px', fontFamily: 'var(--font-sans)' }}>
                      {item.date}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--navy)', lineHeight: 1.3, marginBottom: '10px' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: '#777', lineHeight: 1.6 }}>
                      {item.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Ko'proq yuklash */}
          <div style={{ textAlign: 'center', padding: '20px 0 40px' }}>
            <button className="btn-outline-dark">BARCHASI</button>
          </div>

        </div>
      </section>
    </main>
  );
}
