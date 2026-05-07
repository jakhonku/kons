import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Lock, Mail, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import { useAdminAuth } from '../../contexts/AdminAuthContext';

export default function AdminLogin() {
  const { isAuthenticated, login, loading: authLoading } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (!authLoading && isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    const result = await login({ email, password });
    setSubmitting(false);
    if (result.ok) {
      const redirectTo = location.state?.from?.pathname || '/admin/dashboard';
      navigate(redirectTo, { replace: true });
    } else {
      setError(result.error || 'Kirish amalga oshmadi');
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-icon">
          <ShieldCheck size={28} strokeWidth={1.6} />
        </div>
        <h1 className="admin-login-title">Admin Panel</h1>
        <p className="admin-login-sub">Konservatoriya boshqaruv tizimi</p>

        <form onSubmit={onSubmit} className="admin-login-form">
          <label className="admin-field">
            <span className="admin-field-label">Email</span>
            <span className="admin-field-input">
              <Mail size={16} strokeWidth={1.7} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="username"
                required
                placeholder="Email manzilingiz"
              />
            </span>
          </label>

          <label className="admin-field">
            <span className="admin-field-label">Parol</span>
            <span className="admin-field-input">
              <Lock size={16} strokeWidth={1.7} />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                placeholder="••••••••"
              />
              <button
                type="button"
                className="admin-field-toggle"
                onClick={() => setShowPassword((s) => !s)}
                aria-label="Parolni koʻrsatish"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </span>
          </label>

          {error && <div className="admin-login-error">{error}</div>}

          <button type="submit" className="admin-btn admin-btn-primary admin-btn-block" disabled={submitting}>
            {submitting ? 'Tekshirilmoqda…' : 'Tizimga kirish'}
          </button>
        </form>

        <p className="admin-login-foot">
          Faqat ruxsat etilgan administrator uchun.
        </p>
      </div>
    </div>
  );
}
