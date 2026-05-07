import { useState } from 'react';
import { X, Calendar, Tag, MapPin, Clock, Ticket, ChevronLeft, ChevronRight } from 'lucide-react';
import { isVideoUrl } from '../../lib/supabase';

function youTubeEmbed(url) {
  if (!url) return null;
  const m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/);
  return m ? `https://www.youtube.com/embed/${m[1]}` : null;
}

function formatDateUz(value) {
  if (!value) return '';
  try {
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return value;
    return d.toLocaleDateString('uz-UZ', { day: '2-digit', month: 'long', year: 'numeric' }).toUpperCase();
  } catch {
    return value;
  }
}

function Gallery({ images }) {
  const [active, setActive] = useState(0);
  if (!images || images.length === 0) return null;
  const cur = images[active];

  return (
    <div className="preview-gallery">
      <div className="preview-gallery-main">
        <img src={cur} alt={`${active + 1}`} />
        {images.length > 1 && (
          <>
            <button type="button" className="preview-gallery-nav left" onClick={() => setActive((active - 1 + images.length) % images.length)}>
              <ChevronLeft size={24} />
            </button>
            <button type="button" className="preview-gallery-nav right" onClick={() => setActive((active + 1) % images.length)}>
              <ChevronRight size={24} />
            </button>
            <span className="preview-gallery-counter">{active + 1} / {images.length}</span>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="preview-gallery-thumbs">
          {images.map((img, i) => (
            <button
              key={`${img}-${i}`}
              type="button"
              className={`preview-gallery-thumb${i === active ? ' is-active' : ''}`}
              onClick={() => setActive(i)}
            >
              <img src={img} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function PreviewModal({ kind, data, onClose }) {
  if (!data) return null;

  const images = (data.images || []).filter(Boolean);
  if (images.length === 0 && data.image) images.push(data.image);

  const ytEmbed = data.video ? youTubeEmbed(data.video) : null;
  const directVideo = data.video && isVideoUrl(data.video);

  return (
    <div className="admin-modal" role="dialog" aria-modal="true" style={{ zIndex: 1100 }}>
      <div className="admin-modal-backdrop" onClick={onClose} />
      <div className="preview-modal-card">
        <header className="preview-modal-head">
          <span className="preview-modal-tag">Oldindan koʻrish — saytga yuklashdan oldin</span>
          <button type="button" className="admin-icon-btn" onClick={onClose}><X size={18} /></button>
        </header>

        <div className="preview-modal-body">
          {kind === 'news' && <NewsPreview item={data} images={images} ytEmbed={ytEmbed} directVideo={directVideo} />}
          {kind === 'poster' && <PosterPreview item={data} images={images} ytEmbed={ytEmbed} directVideo={directVideo} />}
        </div>

        <footer className="preview-modal-foot">
          <button type="button" className="admin-btn admin-btn-ghost" onClick={onClose}>Yopish</button>
        </footer>
      </div>
    </div>
  );
}

function NewsPreview({ item, images, ytEmbed, directVideo }) {
  return (
    <article className="preview-article">
      <div className="preview-meta">
        <span className="preview-cat"><Tag size={12} /> {item.category || 'Voqealar'}</span>
        {item.date && <span className="preview-date"><Calendar size={12} /> {formatDateUz(item.date)}</span>}
      </div>

      <h1 className="preview-title">{item.title || '(sarlavhasiz)'}</h1>

      <Gallery images={images} />

      {item.excerpt && <p className="preview-excerpt">{item.excerpt}</p>}

      {item.body && (
        <div className="preview-body">
          {item.body.split(/\n+/).filter(Boolean).map((p, i) => <p key={i}>{p}</p>)}
        </div>
      )}

      {item.video && (
        <div className="preview-video">
          {ytEmbed ? (
            <iframe src={ytEmbed} title={item.title} frameBorder="0" allowFullScreen />
          ) : directVideo ? (
            <video src={item.video} controls />
          ) : (
            <a href={item.video} target="_blank" rel="noopener noreferrer">{item.video}</a>
          )}
        </div>
      )}
    </article>
  );
}

function PosterPreview({ item, images, ytEmbed, directVideo }) {
  const tags = (item.tags || '').split(',').map((t) => t.trim()).filter(Boolean);
  return (
    <article className="preview-article">
      <h1 className="preview-title">{item.title || '(sarlavhasiz)'}</h1>
      {item.artist && <p className="preview-artist">{item.artist}</p>}

      <Gallery images={images} />

      <div className="preview-poster-info">
        {item.date && (
          <div><Calendar size={16} /><span>{formatDateUz(item.date)}{item.time ? ` · ${item.time}` : ''}</span></div>
        )}
        <div><MapPin size={16} /><span>{item.venue || 'Katta Zal'}</span></div>
        <div>
          <Ticket size={16} />
          <span style={{ color: item.free ? '#2a8b3a' : 'var(--gold-dark)', fontWeight: 700 }}>
            {item.free ? 'BEPUL' : (item.price || '—')}
          </span>
        </div>
      </div>

      {tags.length > 0 && (
        <div className="preview-tags">
          {tags.map((t, i) => <span key={i} className="preview-tag">{t}</span>)}
        </div>
      )}

      {item.description && (
        <div className="preview-body">
          {item.description.split(/\n+/).filter(Boolean).map((p, i) => <p key={i}>{p}</p>)}
        </div>
      )}

      {item.video && (
        <div className="preview-video">
          {ytEmbed ? (
            <iframe src={ytEmbed} title={item.title} frameBorder="0" allowFullScreen />
          ) : directVideo ? (
            <video src={item.video} controls />
          ) : (
            <a href={item.video} target="_blank" rel="noopener noreferrer">{item.video}</a>
          )}
        </div>
      )}
    </article>
  );
}
