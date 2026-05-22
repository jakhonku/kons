import { useMemo, useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Tag, ArrowLeft, ArrowRight, Loader2, ChevronLeft, ChevronRight, X, Eye } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useAdminNews } from '../hooks/useAdminStorage';
import { isVideoUrl, supabase } from '../lib/supabase';
import PublicGallery from '../components/PublicGallery';
import { useTranslation } from '../contexts/LanguageContext';

function formatDateUz(value) {
  if (!value) return '';
  try {
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return value;
    return d.toLocaleDateString('uz-UZ', { day: '2-digit', month: '2-digit', year: 'numeric' });
  } catch {
    return value;
  }
}

function youTubeEmbed(url) {
  if (!url) return null;
  const m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/);
  return m ? `https://www.youtube.com/embed/${m[1]}` : null;
}

function instagramEmbed(url) {
  if (!url) return null;
  // Har qanday instagram.com/.../id/ ko'rinishidagi havolani ushlash
  const m = url.match(/instagram\.com\/(?:p|reels|tv)\/([\w-]+)/i);
  if (m && m[1]) {
    return `https://www.instagram.com/reels/${m[1]}/embed`;
  }
  return null;
}

export default function YangilikBatafsil() {
  const { lang } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const { items: adminNews, loading } = useAdminNews();

  const allNews = useMemo(() => {
    return adminNews.map((n) => {
      const isRu = lang === 'ru';
      const isEn = lang === 'en';
      
      const title = (isRu && n.title_ru) ? n.title_ru : (isEn && n.title_en) ? n.title_en : n.title;
      const excerpt = (isRu && n.excerpt_ru) ? n.excerpt_ru : (isEn && n.excerpt_en) ? n.excerpt_en : n.excerpt;
      const body = (isRu && n.body_ru) ? n.body_ru : (isEn && n.body_en) ? n.body_en : n.body;
      
      let imgs = Array.isArray(n.images) ? n.images.filter(Boolean) : [];
      if (isRu && Array.isArray(n.images_ru) && n.images_ru.length > 0) imgs = n.images_ru;
      else if (isEn && Array.isArray(n.images_en) && n.images_en.length > 0) imgs = n.images_en;

      if (imgs.length === 0 && n.image) imgs.push(n.image);
      const mainImg = imgs[0] || null;

      return {
        id: String(n.id),
        cat: n.category || 'Voqealar',
        date: formatDateUz(n.date) || formatDateUz(n.created_at),
        title: title,
        excerpt: excerpt || '',
        body: body || '',
        image: mainImg,
        images: imgs,
        video: n.video || '',
        zoom_link: n.zoom_link || '',
        featured: !!n.featured,
        views: n.views || 0,
      };
    });
  }, [adminNews, lang]);

  const idx = allNews.findIndex((n) => String(n.id) === String(id));
  const item = idx >= 0 ? allNews[idx] : null;
  const prev = idx > 0 ? allNews[idx - 1] : null;
  const next = idx >= 0 && idx < allNews.length - 1 ? allNews[idx + 1] : null;

  useEffect(() => {
    if (item && item.id) {
      const numericId = item.id;
      const incremented = sessionStorage.getItem(`viewed-${numericId}`);
      
      if (!incremented) {
        supabase
          .from('news')
          .update({ views: (item.views || 0) + 1 })
          .eq('id', numericId)
          .then(() => {
            sessionStorage.setItem(`viewed-${numericId}`, 'true');
          });
      }
    }
  }, [item?.id]);

  if (loading && !item) {
    return (
      <main className="content-wrapper">
        <div className="container" style={{ padding: '120px 0', textAlign: 'center' }}>
          <Loader2 size={32} className="admin-spin" />
          <p style={{ marginTop: 16, color: '#777' }}>Yuklanmoqda…</p>
        </div>
      </main>
    );
  }

  if (!item) {
    return (
      <main className="content-wrapper">
        <div className="container" style={{ padding: '120px 0', textAlign: 'center' }}>
          <h2 style={{ color: 'var(--navy)', fontSize: '2rem', marginBottom: '16px' }}>Yangilik topilmadi</h2>
          <Link to="/yangiliklar" className="btn-outline-dark">← Yangiliklarga qaytish</Link>
        </div>
      </main>
    );
  }

  const ytEmbed = item.video ? youTubeEmbed(item.video) : null;
  const igEmbed = item.video ? instagramEmbed(item.video) : null;
  const isDirectVideo = item.video && isVideoUrl(item.video);

  const BREADCRUMBS = [
    { label: 'Bosh sahifa', to: '/' },
    { label: 'Yangiliklar', to: '/yangiliklar' },
    { label: item.title },
  ];

  return (
    <main className="content-wrapper">
      <PageHero
        tag="Yangilik"
        title={item.title}
        emphasis=""
        breadcrumbs={BREADCRUMBS}
      />

      <section className="news-detail">
        <div className="container">
          <div className="news-detail-grid">

            <article className="news-detail-main">
              {/* Meta */}
              <div className="news-detail-meta">
                <span className="news-detail-cat">
                  <Tag size={12} strokeWidth={2} /> {item.cat}
                </span>
                {item.date && (
                  <span className="news-detail-date">
                    <Calendar size={12} strokeWidth={2} /> {item.date}
                  </span>
                )}
                <span className="news-detail-views" style={{ display: 'flex', alignItems: 'center', gap: '5px', marginLeft: '10px', opacity: 0.7 }}>
                  <Eye size={12} strokeWidth={2} /> {item.views}
                </span>
              </div>

              {/* Gallery */}
              {item.images && item.images.length > 0 && (
                <PublicGallery images={item.images} alt={item.title} />
              )}

              {/* Excerpt */}
              {item.excerpt && (
                <p className="news-detail-excerpt">{item.excerpt}</p>
              )}

              {/* Body */}
              {item.body ? (
                <div className="news-detail-body">
                  {item.body.split(/\n+/).filter(Boolean).map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              ) : !item.excerpt && (
                <div className="news-detail-body">
                  <p style={{ color: '#999', fontStyle: 'italic' }}>
                    Yangilik matni qoʻshilmagan.
                  </p>
                </div>
              )}

              {/* Video */}
              {item.video && (
                <div className="news-detail-video">
                  {ytEmbed ? (
                    <iframe
                      src={ytEmbed}
                      title={item.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : igEmbed ? (
                    <iframe
                      src={igEmbed}
                      title="Instagram video"
                      frameBorder="0"
                      allowTransparency="true"
                      allow="encrypted-media"
                      style={{ 
                        width: '100%', 
                        maxWidth: '400px', 
                        height: '600px', 
                        margin: '0 auto', 
                        display: 'block',
                        borderRadius: '12px'
                      }}
                    />
                  ) : isDirectVideo ? (
                    <video src={item.video} controls />
                  ) : (
                    <a href={item.video} target="_blank" rel="noopener noreferrer" className="btn-outline-dark">
                      Videoni koʻrish →
                    </a>
                  )}
                </div>
              )}

              {/* Zoom Link */}
              {item.zoom_link && (
                <div style={{ margin: '30px 0', textAlign: 'center' }}>
                  <a href={item.zoom_link} target="_blank" rel="noopener noreferrer" className="btn-outline-dark" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#2D8CFF', color: 'white', border: 'none', padding: '14px 28px', borderRadius: '8px', fontWeight: '600', fontSize: '1.1rem', boxShadow: '0 4px 12px rgba(45,140,255,0.3)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14v-4z"/><rect x="3" y="6" width="12" height="12" rx="2" ry="2"/></svg>
                    Zoom orqali ulanish
                  </a>
                </div>
              )}

              {/* Prev/Next */}
              <nav className="news-detail-nav">
                {prev ? (
                  <button type="button" className="news-detail-nav-btn" onClick={() => navigate(`/yangiliklar/${prev.id}`)}>
                    <ArrowLeft size={16} strokeWidth={1.8} />
                    <span>
                      <span className="news-detail-nav-label">Oldingi</span>
                      <span className="news-detail-nav-title">{prev.title}</span>
                    </span>
                  </button>
                ) : <span />}

                <Link to="/yangiliklar" className="news-detail-nav-back">
                  BARCHA YANGILIKLAR
                </Link>

                {next ? (
                  <button type="button" className="news-detail-nav-btn news-detail-nav-btn-r" onClick={() => navigate(`/yangiliklar/${next.id}`)}>
                    <span>
                      <span className="news-detail-nav-label">Keyingi</span>
                      <span className="news-detail-nav-title">{next.title}</span>
                    </span>
                    <ArrowRight size={16} strokeWidth={1.8} />
                  </button>
                ) : <span />}
              </nav>
            </article>

            {/* Sidebar — boshqa yangiliklar */}
            <aside className="news-detail-sidebar">
              <h3 className="news-detail-sidebar-title">Boshqa yangiliklar</h3>
              <ul className="news-detail-sidebar-list">
                {allNews.filter((n) => String(n.id) !== String(id)).slice(0, 5).map((n) => (
                  <li key={n.id}>
                    <Link to={`/yangiliklar/${n.id}`}>
                      <div className="news-detail-sidebar-thumb">
                        {n.image && <img src={n.image} alt="" />}
                      </div>
                      <div>
                        <div className="news-detail-sidebar-cat">{n.cat}</div>
                        <div className="news-detail-sidebar-title-link">{n.title}</div>
                        {n.date && <div className="news-detail-sidebar-date">{n.date}</div>}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
