import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Loader2, Newspaper, Send } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useAdminNews, useAdminTelegram } from '../hooks/useAdminStorage';
import TelegramPostEmbed from '../components/TelegramPostEmbed';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Yangiliklar' },
];

const CATEGORIES = ["Barchasi", "Voqealar", "Mukofotlar", "Ta'lim", "Xalqaro"];

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

export default function Yangiliklar() {
  const [tab, setTab] = useState('news');
  const [active, setActive] = useState("Barchasi");
  const { items: adminNews, loading } = useAdminNews();
  const { items: telegramPosts, loading: tgLoading } = useAdminTelegram();

  const allNews = useMemo(() => {
    return adminNews.map((n) => {
      const imgs = Array.isArray(n.images) ? n.images.filter(Boolean) : [];
      const cover = imgs[0] || n.image || '';
      return {
        id: `admin-${n.id}`,
        cat: n.category || 'Voqealar',
        date: formatDateUz(n.date) || formatDateUz(n.created_at),
        title: n.title,
        excerpt: n.excerpt || '',
        image: cover,
        featured: !!n.featured,
      };
    });
  }, [adminNews]);

  const filtered = active === "Barchasi" ? allNews : allNews.filter(n => n.cat === active);
  const featured  = filtered.find(n => n.featured) ?? filtered[0];
  const rest      = filtered.filter(n => n !== featured);
  const isEmpty = !loading && allNews.length === 0;
  const tgEmpty = !tgLoading && telegramPosts.length === 0;

  return (
    <main className="content-wrapper">
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
              <div className="tag-filters" style={{ borderBottom: '1px solid var(--light-border)', paddingBottom: '20px', marginTop: '4px' }}>
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
                <Link to={`/yangiliklar/${featured.id}`} className="news-featured-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '0', marginTop: '40px', marginBottom: '40px', border: '1px solid var(--light-border)', overflow: 'hidden', textDecoration: 'none', color: 'inherit' }}>
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
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px', color: 'var(--gold-dark)', marginBottom: '14px', fontFamily: 'var(--font-sans)' }}>
                      {featured.date}
                    </div>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--navy)', lineHeight: 1.25, marginBottom: '20px' }}>
                      {featured.title}
                    </h2>
                    <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.7, fontFamily: 'var(--font-serif)', fontStyle: 'italic', marginBottom: '32px' }}>
                      {featured.excerpt}
                    </p>
                    <span className="btn-outline-dark" style={{ alignSelf: 'flex-start', padding: '12px 30px' }}>
                      TOʻLIQ OʻQISH
                    </span>
                  </div>
                </Link>
              )}

              {rest.length > 0 && (
                <div className="news-rest-grid" style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))', 
                  gap: '30px', 
                  marginBottom: '60px' 
                }}>
                  {rest.map((item) => (
                    <Link
                      key={item.id}
                      to={`/yangiliklar/${item.id}`}
                      style={{ background: 'var(--white)', border: '1px solid var(--light-border)', overflow: 'hidden', transition: 'box-shadow 0.3s, transform 0.3s', cursor: 'pointer', textDecoration: 'none', color: 'inherit', display: 'block' }}
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
                      <div style={{ padding: '26px' }}>
                        <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', color: 'var(--gold-dark)', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>
                          {item.date}
                        </div>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 400, color: 'var(--navy)', lineHeight: 1.3, marginBottom: '14px' }}>
                          {item.title}
                        </h3>
                        <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>
                          {item.excerpt}
                        </p>

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
