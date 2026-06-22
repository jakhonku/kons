import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Newspaper, Image as ImageIcon, Images, Video as VideoIcon, LogOut, ExternalLink, Radio, Send, MessageSquare } from 'lucide-react';
import { useAdminAuth } from '../../contexts/AdminAuthContext';

const NAV = [
  { to: '/admin/dashboard', label: 'Boshqaruv paneli', icon: LayoutDashboard },
  { to: '/admin/news', label: 'Yangiliklar', icon: Newspaper },
  { to: '/admin/posters', label: 'Afishalar', icon: ImageIcon },
  { to: '/admin/gallery', label: 'Foto galereya', icon: Images },
  { to: '/admin/videos', label: 'Video galereya', icon: VideoIcon },
  { to: '/admin/ticker', label: 'Lenta yangiliklari', icon: Radio },
  { to: '/admin/telegram', label: 'Telegram postlar', icon: Send },
  { to: '/admin/messages', label: 'Murojaatlar', icon: MessageSquare },
];

export default function AdminLayout() {
  const { email, logout } = useAdminAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login', { replace: true });
  };

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <img src="/Konservatoriya_logo_white-05.png" alt="Konservatoriya" />
          <div>
            <div className="admin-brand-title">Admin Panel</div>
            <div className="admin-brand-sub">Konservatoriya CMS</div>
          </div>
        </div>

        <nav className="admin-nav">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `admin-nav-link${isActive ? ' is-active' : ''}`}
            >
              <item.icon size={18} strokeWidth={1.8} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          <a href="/" target="_blank" rel="noreferrer" className="admin-nav-link is-muted">
            <ExternalLink size={16} strokeWidth={1.8} />
            <span>Saytni ochish</span>
          </a>
          <button type="button" className="admin-nav-link is-danger" onClick={handleLogout}>
            <LogOut size={16} strokeWidth={1.8} />
            <span>Chiqish</span>
          </button>
        </div>
      </aside>

      <div className="admin-main">
        <header className="admin-topbar">
          <div className="admin-topbar-greeting">
            Salom, <strong>{email ?? 'admin'}</strong>
          </div>
        </header>

        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
