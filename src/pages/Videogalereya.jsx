import { useMemo, useState } from 'react';
import { Loader2, Video as VideoIcon, X } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useAdminVideos } from '../hooks/useAdminStorage';
import { useTranslation } from '../contexts/LanguageContext';
import { youtubeEmbed, resolveThumb, isVideoUrl } from '../lib/video';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Yangiliklar' },
  { label: 'Videogalereya' },
];

const UI = {
  uz: { loading: 'Videolar yuklanmoqda…', emptyTitle: 'Hozircha video yoʻq', emptyText: 'Admin panel orqali videolar joylanadi.', all: 'Barchasi' },
  ru: { loading: 'Загрузка видео…', emptyTitle: 'Пока нет видео', emptyText: 'Видео добавляются через админ-панель.', all: 'Все' },
  en: { loading: 'Loading videos…', emptyTitle: 'No videos yet', emptyText: 'Videos are added via the admin panel.', all: 'All' },
};

function PlayIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <circle cx="26" cy="26" r="25" fill="rgba(201,168,76,0.9)" stroke="rgba(201,168,76,0.3)" strokeWidth="2" />
      <path d="M21 17l18 9-18 9V17z" fill="white" />
    </svg>
  );
}

export default function Videogalereya() {
  const { lang } = useTranslation();
  const ui = UI[lang] || UI.uz;
  const { items, loading } = useAdminVideos();

  const [active, setActive] = useState(ui.all);
  const [player, setPlayer] = useState(null);

  const videos = useMemo(() => {
    const pick = (v) => (lang === 'ru' && v.title_ru) ? v.title_ru : (lang === 'en' && v.title_en) ? v.title_en : v.title;
    return (items || []).map((v) => ({
      id: String(v.id),
      title: pick(v),
      cat: v.category || 'Umumiy',
      url: v.video_url,
      thumb: resolveThumb(v),
      featured: !!v.featured,
    }));
  }, [items, lang]);

  const categories = useMemo(
    () => [ui.all, ...Array.from(new Set(videos.map((v) => v.cat))).filter(Boolean)],
    [videos, ui.all]
  );

  const filtered = active === ui.all ? videos : videos.filter((v) => v.cat === active);
  const featured = filtered.find((v) => v.featured) ?? filtered[0] ?? null;
  const rest = filtered.filter((v) => v !== featured);

  const embed = player ? youtubeEmbed(player.url) : null;

  return (
    <main className="content-wrapper">
      <PageHero tag="Yangiliklar" title="Video" emphasis="Galereya" breadcrumbs={BREADCRUMBS} />

      <section className="main-content">
        <div className="container">

          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', padding: '80px 0', color: '#888' }}>
              <Loader2 size={20} className="admin-spin" />
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem' }}>{ui.loading}</span>
            </div>
          ) : videos.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 20px', color: '#888' }}>
              <VideoIcon size={36} strokeWidth={1.3} style={{ color: 'var(--gold-dark)', marginBottom: '12px' }} />
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--navy)', marginBottom: '10px' }}>{ui.emptyTitle}</div>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem' }}>{ui.emptyText}</p>
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

              {/* Featured video */}
              {featured && (
                <div
                  style={{ marginTop: '36px', marginBottom: '36px', background: 'var(--navy)', overflow: 'hidden', cursor: 'pointer' }}
                  onClick={() => setPlayer(featured)}
                  onMouseOver={(e) => { e.currentTarget.style.opacity = '0.92'; }}
                  onMouseOut={(e) => { e.currentTarget.style.opacity = '1'; }}
                >
                  <div style={{ position: 'relative', aspectRatio: '16/7', overflow: 'hidden', background: '#000' }}>
                    {featured.thumb && <img src={featured.thumb} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6)' }} />}
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <PlayIcon />
                    </div>
                    <div style={{ position: 'absolute', top: '18px', left: '18px', background: 'var(--gold)', color: 'var(--navy)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '2px', padding: '4px 12px', fontFamily: 'var(--font-sans)', textTransform: 'uppercase' }}>
                      {featured.cat}
                    </div>
                  </div>
                  <div style={{ padding: '24px 28px' }}>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 300, color: 'var(--white)' }}>{featured.title}</h2>
                  </div>
                </div>
              )}

              {/* Qolgan videolar */}
              {rest.length > 0 && (
                <div className="video-grid">
                  {rest.map((v) => (
                    <div key={v.id} className="video-card" style={{ cursor: 'pointer' }} onClick={() => setPlayer(v)}>
                      <div className="video-thumb" style={{ background: '#000' }}>
                        {v.thumb && <img src={v.thumb} alt={v.title} loading="lazy" />}
                        <div className="play-btn">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                          </svg>
                        </div>
                        <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'var(--navy)', color: 'var(--white)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '1px', padding: '3px 8px', fontFamily: 'var(--font-sans)', textTransform: 'uppercase' }}>
                          {v.cat}
                        </div>
                      </div>
                      <div className="video-info">
                        <h3>{v.title}</h3>
                        <p style={{ color: 'var(--gold)', fontSize: '0.72rem', fontFamily: 'var(--font-sans)', letterSpacing: '1px', textTransform: 'uppercase' }}>{v.cat}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

        </div>
      </section>

      {/* Player modal */}
      {player && (
        <div
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}
          onClick={() => setPlayer(null)}
        >
          <div style={{ maxWidth: '960px', width: '100%' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ position: 'relative', aspectRatio: '16/9', background: '#000' }}>
              {embed ? (
                <iframe
                  src={embed}
                  title={player.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                />
              ) : isVideoUrl(player.url) ? (
                <video src={player.url} controls autoPlay style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', background: '#000' }} />
              ) : (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: 'var(--font-sans)', textAlign: 'center', padding: '20px' }}>
                  <a href={player.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>{player.url}</a>
                </div>
              )}
            </div>
            <div style={{ background: 'var(--navy)', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--white)' }}>{player.title}</div>
              <button
                onClick={() => setPlayer(null)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'none', border: '1px solid rgba(255,255,255,0.2)', color: 'var(--white)', padding: '8px 18px', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase' }}
              >
                <X size={14} /> Yopish
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
