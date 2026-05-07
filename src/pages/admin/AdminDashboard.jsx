import { Link } from 'react-router-dom';
import { Newspaper, Image as ImageIcon, Plus, ArrowRight, Calendar, Radio } from 'lucide-react';
import { useAdminNews, useAdminPosters, useAdminTicker } from '../../hooks/useAdminStorage';

function formatDate(value) {
  if (!value) return '—';
  try {
    return new Date(value).toLocaleString('uz-UZ', {
      year: 'numeric', month: 'short', day: '2-digit',
      hour: '2-digit', minute: '2-digit',
    });
  } catch {
    return value;
  }
}

export default function AdminDashboard() {
  const { items: news } = useAdminNews();
  const { items: posters } = useAdminPosters();
  const { items: ticker } = useAdminTicker();

  const featuredCount = news.filter((n) => n.featured).length;
  const upcoming = posters
    .filter((p) => p.date && new Date(p.date) >= new Date(new Date().toDateString()))
    .length;

  const recentNews = news.slice(0, 4);
  const recentPosters = posters.slice(0, 4);

  return (
    <div className="admin-page">
      <div className="admin-page-head">
        <div>
          <h1 className="admin-page-title">Boshqaruv paneli</h1>
          <p className="admin-page-sub">Sayt kontentini shu yerdan boshqaring</p>
        </div>
      </div>

      <div className="admin-stats">
        <div className="admin-stat">
          <div className="admin-stat-icon"><Newspaper size={20} strokeWidth={1.6} /></div>
          <div className="admin-stat-num">{news.length}</div>
          <div className="admin-stat-label">Yangiliklar</div>
        </div>
        <div className="admin-stat">
          <div className="admin-stat-icon"><ImageIcon size={20} strokeWidth={1.6} /></div>
          <div className="admin-stat-num">{posters.length}</div>
          <div className="admin-stat-label">Afishalar</div>
        </div>
        <div className="admin-stat">
          <div className="admin-stat-icon"><Calendar size={20} strokeWidth={1.6} /></div>
          <div className="admin-stat-num">{upcoming}</div>
          <div className="admin-stat-label">Kutilayotgan tadbirlar</div>
        </div>
        <div className="admin-stat">
          <div className="admin-stat-icon"><Radio size={20} strokeWidth={1.6} /></div>
          <div className="admin-stat-num">{ticker.length}</div>
          <div className="admin-stat-label">Lenta yangiliklari</div>
        </div>
        <div className="admin-stat">
          <div className="admin-stat-icon">★</div>
          <div className="admin-stat-num">{featuredCount}</div>
          <div className="admin-stat-label">Asosiy yangiliklar</div>
        </div>
      </div>

      <div className="admin-quick-grid">
        <Link to="/admin/news" className="admin-quick-card">
          <div className="admin-quick-card-icon"><Newspaper size={20} strokeWidth={1.7} /></div>
          <h3>Yangiliklar boshqaruvi</h3>
          <p>Yangi maqolalar qoʻshish, tahrirlash va oʻchirish</p>
          <span className="admin-quick-card-cta">Ochish <ArrowRight size={14} /></span>
        </Link>

        <Link to="/admin/posters" className="admin-quick-card">
          <div className="admin-quick-card-icon"><ImageIcon size={20} strokeWidth={1.7} /></div>
          <h3>Afishalar boshqaruvi</h3>
          <p>Konsert va tadbir afishalarini joylash</p>
          <span className="admin-quick-card-cta">Ochish <ArrowRight size={14} /></span>
        </Link>

        <Link to="/admin/news?new=1" className="admin-quick-card admin-quick-card-accent">
          <div className="admin-quick-card-icon"><Plus size={20} strokeWidth={1.7} /></div>
          <h3>Tezkor yangilik</h3>
          <p>Tezkor yangilik joylash</p>
          <span className="admin-quick-card-cta">Yangi qoʻshish <ArrowRight size={14} /></span>
        </Link>
      </div>

      <div className="admin-recent-grid">
        <section className="admin-card">
          <div className="admin-card-head">
            <h3>Soʻnggi yangiliklar</h3>
            <Link to="/admin/news" className="admin-card-link">Hammasi <ArrowRight size={12} /></Link>
          </div>
          {recentNews.length === 0 ? (
            <div className="admin-empty">Hozircha yangilik yoʻq</div>
          ) : (
            <ul className="admin-list">
              {recentNews.map((n) => (
                <li key={n.id} className="admin-list-item">
                  <div className="admin-list-thumb">
                    {n.image ? <img src={n.image} alt="" /> : <Newspaper size={18} />}
                  </div>
                  <div className="admin-list-body">
                    <div className="admin-list-title">{n.title}</div>
                    <div className="admin-list-meta">
                      <span>{n.category || 'Yangilik'}</span>
                      <span>·</span>
                      <span>{formatDate(n.created_at)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="admin-card">
          <div className="admin-card-head">
            <h3>Soʻnggi afishalar</h3>
            <Link to="/admin/posters" className="admin-card-link">Hammasi <ArrowRight size={12} /></Link>
          </div>
          {recentPosters.length === 0 ? (
            <div className="admin-empty">Hozircha afisha yoʻq</div>
          ) : (
            <ul className="admin-list">
              {recentPosters.map((p) => (
                <li key={p.id} className="admin-list-item">
                  <div className="admin-list-thumb">
                    {p.image ? <img src={p.image} alt="" /> : <ImageIcon size={18} />}
                  </div>
                  <div className="admin-list-body">
                    <div className="admin-list-title">{p.title}</div>
                    <div className="admin-list-meta">
                      <span>{p.venue || 'Zal'}</span>
                      <span>·</span>
                      <span>{p.date || '—'}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
