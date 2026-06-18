import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function PublicGallery({ images = [], alt = '' }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const list = (images || []).filter(Boolean);

  // Swipe/Drag holatlari
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);

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

  // Drag/Swipe boshlanishi
  const handleStart = (clientX, target) => {
    // Agar foydalanuvchi navigatsiya tugmalarini bossa, drag boshlamaymiz
    if (target.closest('.public-gallery-nav')) return;
    
    setStartX(clientX);
    setIsDragging(true);
    setHasMoved(false);
    setDragOffset(0);
  };

  // Drag/Swipe jarayoni
  const handleMove = (clientX) => {
    if (!isDragging) return;
    const diff = clientX - startX;
    setDragOffset(diff);
    if (Math.abs(diff) > 8) {
      setHasMoved(true);
    }
  };

  // Drag/Swipe tugashi
  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (!hasMoved) {
      // Agar qimirlamagan bo'lsa, bu shunchaki click (Lightbox ochiladi)
      setLightbox(true);
    } else {
      const swipeThreshold = 60; // surish sezgirligi (px)
      if (dragOffset < -swipeThreshold) {
        // Chapga surildi -> Keyingi rasm
        setActive((a) => (a + 1) % list.length);
      } else if (dragOffset > swipeThreshold) {
        // O'ngga surildi -> Oldingi rasm
        setActive((a) => (a - 1 + list.length) % list.length);
      }
    }
    setDragOffset(0);
  };

  const onTouchStart = (e) => handleStart(e.touches[0].clientX, e.target);
  const onTouchMove = (e) => handleMove(e.touches[0].clientX);
  const onTouchEnd = () => handleEnd();

  const onMouseDown = (e) => {
    if (e.button !== 0) return; // Faqat chap click
    handleStart(e.clientX, e.target);
    if (!e.target.closest('.public-gallery-nav')) {
      e.preventDefault(); // Brauzerda rasmni drag qilishini to'xtatadi
    }
  };
  const onMouseMove = (e) => handleMove(e.clientX);
  const onMouseUp = () => handleEnd();
  const onMouseLeave = () => {
    if (isDragging) handleEnd();
  };

  return (
    <>
      <div className="public-gallery">
        <div 
          className="public-gallery-main" 
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          style={{ 
            background: isFallback ? 'var(--navy)' : 'transparent',
            position: 'relative',
            overflow: 'hidden',
            cursor: isDragging ? 'grabbing' : 'grab'
          }}
        >
          {/* Slaydlar treki */}
          <div 
            className="public-gallery-track"
            style={{
              display: 'flex',
              width: '100%',
              height: '100%',
              transition: isDragging ? 'none' : 'transform 0.35s cubic-bezier(0.25, 1, 0.5, 1)',
              transform: `translateX(calc(-${active * 100}% + ${dragOffset}px))`
            }}
          >
            {list.map((img, i) => {
              const imgFallback = img === '/Konservatoriya_logo_white-05.png';
              // Faqat faol va unga qo'shni rasmlarni yuklaymiz (tejamkor va tezkor yuklanish uchun)
              const shouldLoad = Math.abs(i - active) <= 1;

              return (
                <div
                  key={`${img}-${i}`}
                  className="public-gallery-slide"
                  style={{
                    flex: '0 0 100%',
                    width: '100%',
                    height: '100%',
                    outline: 'none',
                    userSelect: 'none',
                    WebkitUserSelect: 'none',
                    pointerEvents: 'none',
                    background: imgFallback ? 'var(--navy)' : '#0a0a18',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                  }}
                >
                  {shouldLoad ? (
                    imgFallback ? (
                      <img
                        src={img}
                        alt={alt}
                        decoding="async"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          padding: '120px',
                          display: 'block',
                          pointerEvents: 'none'
                        }}
                      />
                    ) : (
                      <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                        {/* Blurred background image */}
                        <img
                          src={img}
                          alt=""
                          style={{
                            position: 'absolute',
                            inset: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'blur(20px)',
                            opacity: 0.8,
                            transform: 'scale(1.15)',
                            pointerEvents: 'none'
                          }}
                        />
                        {/* Crisp foreground image */}
                        <img
                          src={img}
                          alt={alt}
                          decoding="async"
                          style={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            display: 'block',
                            pointerEvents: 'none',
                            zIndex: 1,
                            background: 'transparent'
                          }}
                        />
                      </div>
                    )
                  ) : (
                    <div style={{ width: '100%', height: '100%', background: '#0a0a18' }} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Navigatsiya tugmalari */}
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

        {/* Thumbs (Kichik rasmlar) */}
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
                  loading="lazy"
                  decoding="async"
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

      {/* Lightbox */}
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
