import { useState } from 'react';
import PageHero from '../components/PageHero';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Axborot xizmati' },
  { label: 'Videogalereya' },
];

const CATEGORIES = ['Barchasi', 'Konsertlar', 'Master-klass', 'Hujjatli', 'Intervyu'];

const VIDEOS = [
  { id: 1, cat: 'Konsertlar',  title: 'Simfonik Orkestr — Bahor Ohanglari 2025',              duration: '1:24:10', thumb: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=800&h=450&fit=crop', featured: true },
  { id: 2, cat: 'Master-klass', title: "Fortepiano mahorat darsi — professor Karimov",         duration: '47:33', thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&h=450&fit=crop', featured: false },
  { id: 3, cat: 'Konsertlar',  title: 'Opera studiyasi — La Traviata parchalari',               duration: '58:40', thumb: 'https://images.unsplash.com/photo-1514320298324-ee4490b1e3b0?q=80&w=800&h=450&fit=crop', featured: false },
  { id: 4, cat: 'Hujjatli',    title: "Konservatoriya tarixi — 85 yillik yo'l",                 duration: '24:15', thumb: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&h=450&fit=crop', featured: false },
  { id: 5, cat: 'Intervyu',    title: "Rektor bilan suhbat: Ta'limning istiqboli",              duration: '18:55', thumb: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&h=450&fit=crop', featured: false },
  { id: 6, cat: 'Master-klass', title: "Vena mehmon-professori: Kamera musiqa icrochiligi",    duration: '1:02:18', thumb: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&h=450&fit=crop', featured: false },
];

function PlayIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <circle cx="26" cy="26" r="25" fill="rgba(201,168,76,0.9)" stroke="rgba(201,168,76,0.3)" strokeWidth="2"/>
      <path d="M21 17l18 9-18 9V17z" fill="white"/>
    </svg>
  );
}

export default function Videogalereya() {
  const [active, setActive] = useState('Barchasi');

  const filtered = active === 'Barchasi' ? VIDEOS : VIDEOS.filter(v => v.cat === active);
  const featured  = filtered.find(v => v.featured) ?? filtered[0];
  const rest      = filtered.filter(v => v !== featured);

  return (
    <main className="content-wrapper">
      <PageHero
        tag="Axborot xizmati"
        title="Video"
        emphasis="Galereya"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">

          {/* Kategoriya */}
          <div className="tag-filters" style={{ borderBottom: '1px solid var(--light-border)', paddingBottom: '20px' }}>
            {CATEGORIES.map((cat) => (
              <button key={cat} className={`tag-btn${active === cat ? ' active' : ''}`} onClick={() => setActive(cat)}>
                {cat}
              </button>
            ))}
          </div>

          {/* Featured video */}
          {featured && (
            <div style={{ marginTop: '36px', marginBottom: '36px', background: 'var(--navy)', overflow: 'hidden', cursor: 'pointer' }}
              onMouseOver={(e) => { e.currentTarget.style.opacity = '0.92'; }}
              onMouseOut={(e) => { e.currentTarget.style.opacity = '1'; }}
            >
              <div style={{ position: 'relative', aspectRatio: '16/7', overflow: 'hidden' }}>
                <img src={featured.thumb} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6)' }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <PlayIcon />
                </div>
                <div style={{ position: 'absolute', top: '18px', left: '18px', background: 'var(--gold)', color: 'var(--navy)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '2px', padding: '4px 12px', fontFamily: 'var(--font-sans)', textTransform: 'uppercase' }}>
                  {featured.cat}
                </div>
                <div style={{ position: 'absolute', bottom: '18px', right: '18px', background: 'rgba(0,0,0,0.7)', color: 'var(--white)', fontSize: '0.75rem', padding: '4px 10px', fontFamily: 'var(--font-sans)' }}>
                  {featured.duration}
                </div>
              </div>
              <div style={{ padding: '24px 28px' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 300, color: 'var(--white)' }}>{featured.title}</h2>
              </div>
            </div>
          )}

          {/* Qolgan videolar */}
          <div className="video-grid">
            {rest.map((v) => (
              <div key={v.id} className="video-card" style={{ cursor: 'pointer' }}>
                <div className="video-thumb">
                  <img src={v.thumb} alt={v.title} loading="lazy" />
                  <div className="play-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"/>
                    </svg>
                  </div>
                  <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'var(--navy)', color: 'var(--white)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '1px', padding: '3px 8px', fontFamily: 'var(--font-sans)', textTransform: 'uppercase' }}>
                    {v.cat}
                  </div>
                  <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(0,0,0,0.65)', color: 'var(--white)', fontSize: '0.72rem', padding: '2px 8px', fontFamily: 'var(--font-sans)' }}>
                    {v.duration}
                  </div>
                </div>
                <div className="video-info">
                  <h3>{v.title}</h3>
                  <p style={{ color: 'var(--gold)', fontSize: '0.72rem', fontFamily: 'var(--font-sans)', letterSpacing: '1px', textTransform: 'uppercase' }}>{v.cat}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
