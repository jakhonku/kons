import { useState } from 'react';
import PageHero from '../components/PageHero';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Axborot xizmati' },
  { label: 'Fotogalereya' },
];

const CATEGORIES = ['Barchasi', 'Konsertlar', 'Tadbirlar', 'Kampus', 'Xalqaro'];

const PHOTOS = [
  { id: 1, cat: 'Konsertlar',  title: 'Simfonik Orkestr yozgi mavsumi', year: '2025', img: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=800&h=600&fit=crop' },
  { id: 2, cat: 'Tadbirlar',   title: 'Qabul marosimi 2025', year: '2025', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&h=600&fit=crop' },
  { id: 3, cat: 'Konsertlar',  title: 'Yoshlar filarmoniyasi', year: '2025', img: 'https://images.unsplash.com/photo-1514320298324-ee4490b1e3b0?q=80&w=800&h=600&fit=crop' },
  { id: 4, cat: 'Kampus',      title: "Asosiy bino va hovli", year: '2024', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&h=600&fit=crop' },
  { id: 5, cat: 'Xalqaro',     title: 'Vena hamkorlari bilan uchrashuv', year: '2025', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&h=600&fit=crop' },
  { id: 6, cat: 'Konsertlar',  title: 'Opera studiyasi premyerasi', year: '2025', img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&h=600&fit=crop' },
  { id: 7, cat: 'Tadbirlar',   title: "Magistratura topshirish marosimi", year: '2024', img: 'https://images.unsplash.com/photo-1523240715632-d984723145e1?q=80&w=800&h=600&fit=crop' },
  { id: 8, cat: 'Kampus',      title: "O'qitish mashg'ulotlari", year: '2024', img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&h=600&fit=crop' },
  { id: 9, cat: 'Xalqaro',     title: "Pekin musiqa festivalida", year: '2024', img: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=800&h=600&fit=crop' },
];

export default function Fotogalereya() {
  const [active, setActive] = useState('Barchasi');
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === 'Barchasi' ? PHOTOS : PHOTOS.filter(p => p.cat === active);

  return (
    <main className="content-wrapper">
      <PageHero
        tag="Axborot xizmati"
        title="Foto"
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

          {/* Galereya grid */}
          <div className="gallery-grid" style={{ paddingTop: '30px', gap: '8px' }}>
            {filtered.map((photo) => (
              <div
                key={photo.id}
                className="gallery-item"
                onClick={() => setLightbox(photo)}
                style={{ cursor: 'pointer' }}
              >
                <img src={photo.img} alt={photo.title} loading="lazy" />
                <div className="overlay" style={{ flexDirection: 'column', gap: '8px' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                  <div style={{ fontSize: '0.72rem', color: 'var(--white)', fontFamily: 'var(--font-sans)', letterSpacing: '1px', textAlign: 'center', padding: '0 12px' }}>
                    {photo.title}
                  </div>
                </div>
                <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(0,0,0,0.55)', color: 'var(--gold)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '1px', padding: '3px 8px', fontFamily: 'var(--font-sans)' }}>
                  {photo.cat}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}
          onClick={() => setLightbox(null)}
        >
          <div style={{ maxWidth: '900px', width: '100%' }} onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.img} alt={lightbox.title} style={{ width: '100%', display: 'block', maxHeight: '70vh', objectFit: 'contain' }} />
            <div style={{ background: 'var(--navy)', padding: '18px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--white)' }}>{lightbox.title}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--gold)', fontFamily: 'var(--font-sans)', marginTop: '4px', letterSpacing: '2px', textTransform: 'uppercase' }}>
                  {lightbox.cat} · {lightbox.year}
                </div>
              </div>
              <button
                onClick={() => setLightbox(null)}
                style={{ background: 'none', border: '1px solid rgba(255,255,255,0.2)', color: 'var(--white)', padding: '8px 18px', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase' }}
              >
                YOPISH ×
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
