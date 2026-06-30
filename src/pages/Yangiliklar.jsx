import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, Loader2, Newspaper, Send, Search } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useAdminNews, useAdminTelegram } from '../hooks/useAdminStorage';
import TelegramPostEmbed from '../components/TelegramPostEmbed';
import { useTranslation } from '../contexts/LanguageContext';
import Seo from '../components/Seo';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Yangiliklar' },
];

const CATEGORIES = ["Barchasi", "Voqealar", "Mukofotlar", "Taʼlim", "Xalqaro"];

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

export default function Yangiliklar() {
  const { lang } = useTranslation();
  const [tab, setTab] = useState('news');
  const [active, setActive] = useState("Barchasi");
  const { items: adminNews, loading } = useAdminNews();
  const { items: telegramPosts, loading: tgLoading } = useAdminTelegram();
  const [searchQuery, setSearchQuery] = useState('');

  const allNews = useMemo(() => {
    return adminNews.map((n) => {
      const isRu = lang === 'ru';
      const isEn = lang === 'en';
      
      const title = (isRu && n.title_ru) ? n.title_ru : (isEn && n.title_en) ? n.title_en : n.title;
      const excerpt = (isRu && n.excerpt_ru) ? n.excerpt_ru : (isEn && n.excerpt_en) ? n.excerpt_en : n.excerpt;
      
      let imgs = Array.isArray(n.images) ? n.images.filter(Boolean) : [];
      if (isRu && Array.isArray(n.images_ru) && n.images_ru.length > 0) imgs = n.images_ru;
      else if (isEn && Array.isArray(n.images_en) && n.images_en.length > 0) imgs = n.images_en;
      
      const mainImg = imgs[0] || n.image || null;

      return {
        id: String(n.id),
        cat: n.category || 'Yangiliklar',
        date: formatDateUz(n.date) || formatDateUz(n.created_at),
        title: title,
        excerpt: excerpt || '',
        image: mainImg,
        featured: !!n.featured,
        views: n.views || 0,
      };
    });
  }, [adminNews, lang]);

  const filtered = useMemo(() => {
    let result = active === "Barchasi" ? allNews : allNews.filter(n => n.cat === active);
    
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(n => 
        n.title.toLowerCase().includes(q) || 
        n.excerpt.toLowerCase().includes(q)
      );
    }
    
    return result;
  }, [allNews, active, searchQuery]);
  const featured  = filtered.find(n => n.featured) ?? filtered[0];
  const rest      = filtered.filter(n => n !== featured);
  const isEmpty = !loading && allNews.length === 0;
  const tgEmpty = !tgLoading && telegramPosts.length === 0;

  return (
    <main className="content-wrapper">
      <Seo title="Yangiliklar" description="Oʻzbekiston Davlat Konservatoriyasi soʻnggi yangiliklari, voqealari, mukofotlari va eʼlonlari." />
      <PageHero
        tag="Yangiliklar"
        title="Soʻnggi"
        emphasis="Yangiliklar"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">

          {/* Tablar */}
          <div className="news-tabs">
            <button
              type="button"
              className={`news-tab${tab === 'news' ? ' is-active' : ''}`}
              onClick={() => setTab('news')}
            >
              <Newspaper size={16} strokeWidth={1.8} />
              Yangiliklar
            </button>
            <button
              type="button"
              className={`news-tab${tab === 'telegram' ? ' is-active' : ''}`}
              onClick={() => setTab('telegram')}
            >
              <Send size={16} strokeWidth={1.8} />
              Telegram
              {telegramPosts.length > 0 && <span className="news-tab-badge">{telegramPosts.length}</span>}
            </button>
          </div>

          {/* Tab 1: Yangiliklar */}
          {tab === 'news' && (
            <>
              <div className="news-filters-row" style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                gap: '20px',
                borderBottom: '1px solid var(--light-border)', 
                paddingBottom: '20px', 
                marginTop: '4px' 
              }}>
                <div className="tag-filters" style={{ border: 'none', padding: 0, marginTop: 0 }}>
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

                <div className="news-search-bar" style={{ 
                  position: 'relative',
                  width: '100%',
                  maxWidth: '300px'
                }}>
                  <Search 
                    size={18} 
                    style={{ 
                      position: 'absolute', 
                      left: '15px', 
                      top: '50%', 
                      transform: 'translateY(-50%)', 
                      color: '#999' 
                    }} 
                  />
                  <input
                    type="text"
                    placeholder="Yangiliklarni qidirish..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 15px 12px 45px',
                      borderRadius: '30px',
                      border: '1px solid var(--light-border)',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-sans)',
                      background: '#f9f9f9',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      outline: 'none'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--gold)';
                      e.target.style.background = '#fff';
                      e.target.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--light-border)';
                      e.target.style.background = '#f9f9f9';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              {loading && (
                <div style={{ textAlign: 'center', padding: '80px 0' }}>
                  <Loader2 size={32} className="admin-spin" />
                  <p style={{ marginTop: 14, color: '#777', fontSize: '0.9rem' }}>Yuklanmoqda…</p>
                </div>
              )}

              {isEmpty && (
                <div style={{ textAlign: 'center', padding: '80px 20px', color: '#777' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--navy)', marginBottom: 10, fontWeight: 400 }}>
                    Hozircha yangilik yoʻq
                  </h3>
                  <p style={{ fontSize: '0.9rem' }}>Tez orada yangiliklar bilan tanishishingiz mumkin.</p>
                </div>
              )}

              {!loading && !isEmpty && filtered.length === 0 && (
                <div style={{ textAlign: 'center', padding: '60px 20px', color: '#777' }}>
                  <p>Bu kategoriyada yangilik topilmadi.</p>
                </div>
              )}

              {!loading && featured && (
                <Link to={`/yangiliklar/${featured.id}`} className="news-featured-grid">
                  {featured.image && (
                    <div className="news-featured-grid-img-wrap">
                      <img
                        src={featured.image}
                        alt={featured.title}
                        loading="eager"
                        fetchpriority="high"
                        decoding="async"
                        className="news-featured-grid-main-img"
                      />
                      <span className="news-card-badge">{featured.cat}</span>
                    </div>
                  )}
                  <div className="news-featured-grid-text">
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px', color: 'var(--gold-dark)', marginBottom: '14px', fontFamily: 'var(--font-sans)', display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <span>{featured.date}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px', opacity: 0.8 }}>
                        <Eye size={14} /> {featured.views}
                      </span>
                    </div>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 300, color: 'var(--navy)', lineHeight: 1.25, marginBottom: '15px' }}>
                      {featured.title}
                    </h2>
                    <p style={{ 
                      fontSize: '0.95rem', 
                      color: '#555', 
                      lineHeight: 1.6, 
                      fontFamily: 'var(--font-serif)', 
                      fontStyle: 'italic', 
                      marginBottom: '24px',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {featured.excerpt}
                    </p>
                    <span className="btn-outline-dark" style={{ alignSelf: 'flex-start', padding: '12px 30px' }}>
                      TOʻLIQ OʻQISH
                    </span>
                  </div>
                </Link>
              )}

              {rest.length > 0 && (
                <div className="news-rest-grid">
                  {rest.map((item) => (
                    <Link
                      key={item.id}
                      to={`/yangiliklar/${item.id}`}
                      className="news-card"
                    >
                      <div className="news-card-img-wrap">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.title}
                            loading="lazy"
                            decoding="async"
                            className="news-card-img"
                          />
                        ) : (
                          <div className="news-card-img-fallback">
                            <Newspaper size={40} strokeWidth={1.2} />
                          </div>
                        )}
                        <span className="news-card-badge">{item.cat}</span>
                      </div>
                      <div className="news-card-body">
                        <div className="news-card-meta">
                          <span>{item.date}</span>
                          <span className="news-card-views">
                            <Eye size={12} /> {item.views}
                          </span>
                        </div>
                        <h3 className="news-card-title">{item.title}</h3>
                        {item.excerpt && <p className="news-card-excerpt">{item.excerpt}</p>}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Tab 2: Telegram */}
          {tab === 'telegram' && (
            <div className="telegram-tab">
              {tgLoading && (
                <div style={{ textAlign: 'center', padding: '80px 0' }}>
                  <Loader2 size={32} className="admin-spin" />
                  <p style={{ marginTop: 14, color: '#777', fontSize: '0.9rem' }}>Yuklanmoqda…</p>
                </div>
              )}

              {tgEmpty && (
                <div style={{ textAlign: 'center', padding: '80px 20px', color: '#777' }}>
                  <Send size={36} strokeWidth={1.4} style={{ color: '#bbb', marginBottom: 16 }} />
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--navy)', marginBottom: 10, fontWeight: 400 }}>
                    Hozircha Telegram post yoʻq
                  </h3>
                  <p style={{ fontSize: '0.9rem' }}>Tez orada Telegram kanaldagi postlar shu yerda paydo boʻladi.</p>
                </div>
              )}

              {!tgLoading && !tgEmpty && (
                <div className="telegram-grid">
                  {telegramPosts.map((p) => (
                    <TelegramPostEmbed key={p.id} url={p.post_url} caption={p.caption} />
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </section>
    </main>
  );
}
