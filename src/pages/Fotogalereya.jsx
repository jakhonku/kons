import { useMemo, useState } from 'react';
import { Loader2, ArrowLeft, Images } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useAdminGallery } from '../hooks/useAdminStorage';
import { useTranslation } from '../contexts/LanguageContext';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Yangiliklar' },
  { label: 'Fotogalereya' },
];

const UI = {
  uz: {
    loading: 'Albomlar yuklanmoqda…',
    emptyTitle: 'Hozircha albom yoʻq',
    emptyText: 'Admin panel orqali galereyaga yangi albomlar qoʻshiladi.',
    back: 'Albomlar',
    photos: (n) => `${n} ta rasm`,
    close: 'YOPISH',
  },
  ru: {
    loading: 'Загрузка альбомов…',
    emptyTitle: 'Пока нет альбомов',
    emptyText: 'Новые альбомы добавляются в галерею через админ-панель.',
    back: 'Альбомы',
    photos: (n) => `${n} фото`,
    close: 'ЗАКРЫТЬ',
  },
  en: {
    loading: 'Loading albums…',
    emptyTitle: 'No albums yet',
    emptyText: 'New albums are added to the gallery via the admin panel.',
    back: 'Albums',
    photos: (n) => `${n} photos`,
    close: 'CLOSE',
  },
};

export default function Fotogalereya() {
  const { lang } = useTranslation();
  const ui = UI[lang] || UI.uz;
  const { items: dbAlbums, loading } = useAdminGallery();

  const [openId, setOpenId] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  const albums = useMemo(() => {
    const pick = (a) => (lang === 'ru' && a.title_ru) ? a.title_ru : (lang === 'en' && a.title_en) ? a.title_en : a.title;
    return (dbAlbums || []).map((a) => ({
      id: String(a.id),
      title: pick(a),
      category: a.category || 'Umumiy',
      date: (a.album_date || a.created_at || '').toString().slice(0, 10),
      images: (Array.isArray(a.images) ? a.images.filter(Boolean) : []),
      cover: a.cover || (Array.isArray(a.images) ? a.images[0] : ''),
    })).filter((a) => a.images.length > 0);
  }, [dbAlbums, lang]);

  const openAlbum = albums.find((a) => a.id === openId) || null;

  return (
    <main className="content-wrapper">
      <PageHero tag="Yangiliklar" title="Foto" emphasis="Galereya" breadcrumbs={BREADCRUMBS} />

      <section className="main-content">
        <div className="container">

          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', padding: '80px 0', color: '#888' }}>
              <Loader2 size={20} className="admin-spin" />
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem' }}>{ui.loading}</span>
            </div>
          ) : openAlbum ? (
            /* ---------- Tanlangan albom rasmlari ---------- */
            <>
              <button
                type="button"
                onClick={() => setOpenId(null)}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: 'none', border: '1px solid var(--light-border)',
                  padding: '8px 16px', cursor: 'pointer', color: 'var(--navy)',
                  fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 700,
                  letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '24px',
                }}
              >
                <ArrowLeft size={14} strokeWidth={2} /> {ui.back}
              </button>

              <div className="section-divider" style={{ marginTop: 0 }}>
                <h2>{openAlbum.title}</h2>
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--gold-dark)', fontFamily: 'var(--font-sans)', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', margin: '-14px 0 24px' }}>
                {openAlbum.category}{openAlbum.date ? ` · ${openAlbum.date}` : ''} · {ui.photos(openAlbum.images.length)}
              </div>

              <div className="gallery-grid" style={{ gap: '8px' }}>
                {openAlbum.images.map((img, i) => (
                  <div key={i} className="gallery-item" onClick={() => setLightbox({ img, title: openAlbum.title })} style={{ cursor: 'pointer' }}>
                    <img src={img} alt={`${openAlbum.title} #${i + 1}`} loading="lazy" />
                    <div className="overlay">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            /* ---------- Albomlar roʻyxati ---------- */
            <>
              {albums.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '80px 20px', color: '#888' }}>
                  <Images size={36} strokeWidth={1.3} style={{ color: 'var(--gold-dark)', marginBottom: '12px' }} />
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--navy)', marginBottom: '10px' }}>
                    {ui.emptyTitle}
                  </div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem' }}>{ui.emptyText}</p>
                </div>
              ) : (
                <div className="gallery-grid" style={{ gap: '14px' }}>
                  {albums.map((a) => (
                    <div
                      key={a.id}
                      className="gallery-item"
                      onClick={() => setOpenId(a.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      <img src={a.cover} alt={a.title} loading="lazy" />
                      <div className="overlay" style={{ flexDirection: 'column', gap: '8px' }}>
                        <Images size={26} strokeWidth={1.6} />
                        <div style={{ fontSize: '0.78rem', color: 'var(--white)', fontFamily: 'var(--font-sans)', letterSpacing: '0.5px', textAlign: 'center', padding: '0 14px', fontWeight: 600 }}>
                          {a.title}
                        </div>
                        <div style={{ fontSize: '0.65rem', color: 'var(--gold)', fontFamily: 'var(--font-sans)', letterSpacing: '1px' }}>
                          {ui.photos(a.images.length)}
                        </div>
                      </div>
                      <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(0,0,0,0.55)', color: 'var(--gold)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '1px', padding: '3px 8px', fontFamily: 'var(--font-sans)' }}>
                        {a.category}
                      </div>
                    </div>
                  ))}
                </div>
              )}
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
            <img src={lightbox.img} alt={lightbox.title} style={{ width: '100%', display: 'block', maxHeight: '76vh', objectFit: 'contain' }} />
            <div style={{ background: 'var(--navy)', padding: '18px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--white)' }}>{lightbox.title}</div>
              <button
                onClick={() => setLightbox(null)}
                style={{ background: 'none', border: '1px solid rgba(255,255,255,0.2)', color: 'var(--white)', padding: '8px 18px', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase' }}
              >
                {ui.close} ×
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
