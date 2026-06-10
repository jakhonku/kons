import { useMemo, useState } from 'react';
import { Loader2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useAdminNews } from '../hooks/useAdminStorage';
import { useTranslation } from '../contexts/LanguageContext';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Yangiliklar' },
  { label: 'Fotogalereya' },
];

export default function Fotogalereya() {
  const { lang } = useTranslation();
  const { items: adminNews, loading } = useAdminNews();
  const [active, setActive] = useState('Barchasi');
  const [lightbox, setLightbox] = useState(null);

  // Barcha yangiliklardagi rasmlardan galereya yigʻiladi (real, admin yuklagan)
  const photos = useMemo(() => {
    const isRu = lang === 'ru';
    const isEn = lang === 'en';
    const out = [];
    adminNews.forEach((n) => {
      const title = (isRu && n.title_ru) ? n.title_ru : (isEn && n.title_en) ? n.title_en : n.title;

      let imgs = Array.isArray(n.images) ? n.images.filter(Boolean) : [];
      if (isRu && Array.isArray(n.images_ru) && n.images_ru.length > 0) imgs = n.images_ru.filter(Boolean);
      else if (isEn && Array.isArray(n.images_en) && n.images_en.length > 0) imgs = n.images_en.filter(Boolean);
      if (imgs.length === 0 && n.image) imgs = [n.image];

      const year = (n.date || n.created_at || '').toString().slice(0, 4);
      imgs.forEach((img, idx) => {
        out.push({
          id: `${n.id}-${idx}`,
          img,
          title,
          cat: n.category || 'Yangiliklar',
          year,
        });
      });
    });
    return out;
  }, [adminNews, lang]);

  const categories = useMemo(
    () => ['Barchasi', ...Array.from(new Set(photos.map((p) => p.cat))).filter(Boolean)],
    [photos]
  );

  const filtered = active === 'Barchasi' ? photos : photos.filter((p) => p.cat === active);

  return (
    <main className="content-wrapper">
      <PageHero
        tag="Yangiliklar"
        title="Foto"
        emphasis="Galereya"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">

          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', padding: '80px 0', color: '#888' }}>
              <Loader2 size={20} className="admin-spin" />
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem' }}>Rasmlar yuklanmoqda…</span>
            </div>
          ) : photos.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 20px', color: '#888' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--navy)', marginBottom: '10px' }}>
                Hozircha rasmlar yoʻq
              </div>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem' }}>
                Yangiliklar qoʻshilgan sari galereya avtomatik toʻldiriladi.
              </p>
            </div>
          ) : (
            <>
              {/* Kategoriya */}
              {categories.length > 1 && (
                <div className="tag-filters" style={{ borderBottom: '1px solid var(--light-border)', paddingBottom: '20px' }}>
                  {categories.map((cat) => (
                    <button key={cat} className={`tag-btn${active === cat ? ' active' : ''}`} onClick={() => setActive(cat)}>
                      {cat}
                    </button>
                  ))}
                </div>
              )}

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
            </>
          )}

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
                  {lightbox.cat}{lightbox.year ? ` · ${lightbox.year}` : ''}
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
