import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function PublicGallery({ images = [], alt = '' }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const list = (images || []).filter(Boolean);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(false);
      if (e.key === 'ArrowLeft') setActive((a) => (a - 1 + list.length) % list.length);
      if (e.key === 'ArrowRight') setActive((a) => (a + 1) % list.length);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightbox, list.length]);

  if (list.length === 0) return null;
  const cur = list[active];
  const isFallback = cur === '/Konservatoriya_logo_white-05.png';

  return (
    <>
      <div className="public-gallery">
        <div className="public-gallery-main" onClick={() => setLightbox(true)} style={{ background: isFallback ? 'var(--navy)' : 'transparent' }}>
          <img 
            src={cur} 
            alt={alt} 
            style={{ 
              objectFit: isFallback ? 'contain' : 'cover',
              padding: isFallback ? '120px' : '0'
            }} 
          />
          {list.length > 1 && (
            <>
              <button
                type="button"
                className="public-gallery-nav left"
                onClick={(e) => { e.stopPropagation(); setActive((active - 1 + list.length) % list.length); }}
                aria-label="Oldingi rasm"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                type="button"
                className="public-gallery-nav right"
                onClick={(e) => { e.stopPropagation(); setActive((active + 1) % list.length); }}
                aria-label="Keyingi rasm"
              >
                <ChevronRight size={28} />
              </button>
              <span className="public-gallery-counter">{active + 1} / {list.length}</span>
            </>
          )}
        </div>
        {list.length > 1 && (
          <div className="public-gallery-thumbs">
            {list.map((img, i) => (
              <button
                key={`${img}-${i}`}
                type="button"
                className={`public-gallery-thumb${i === active ? ' is-active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Rasm ${i + 1}`}
                style={{ background: img === '/Konservatoriya_logo_white-05.png' ? 'var(--navy)' : 'transparent' }}
              >
                <img 
                  src={img} 
                  alt="" 
                  style={{ 
                    objectFit: img === '/Konservatoriya_logo_white-05.png' ? 'contain' : 'cover',
                    padding: img === '/Konservatoriya_logo_white-05.png' ? '8px' : '0'
                  }} 
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(false)}>
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setLightbox(false)}
            aria-label="Yopish"
          >
            <X size={28} />
          </button>
          <img
            src={cur}
            alt={alt}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
            style={{ 
              objectFit: isFallback ? 'contain' : 'initial',
              padding: isFallback ? '60px' : '0'
            }}
          />
          {list.length > 1 && (
            <>
              <button
                type="button"
                className="lightbox-nav left"
                onClick={(e) => { e.stopPropagation(); setActive((active - 1 + list.length) % list.length); }}
              >
                <ChevronLeft size={36} />
              </button>
              <button
                type="button"
                className="lightbox-nav right"
                onClick={(e) => { e.stopPropagation(); setActive((active + 1) % list.length); }}
              >
                <ChevronRight size={36} />
              </button>
              <span className="lightbox-counter">{active + 1} / {list.length}</span>
            </>
          )}
        </div>
      )}
    </>
  );
}
