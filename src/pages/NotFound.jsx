import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="content-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
      <div style={{ textAlign: 'center', padding: '60px 20px', maxWidth: '520px' }}>
        <div style={{
          fontSize: '9rem',
          fontFamily: 'var(--font-serif)',
          color: 'var(--cream-bg)',
          lineHeight: 1,
          userSelect: 'none',
          marginBottom: '-20px',
        }}>
          404
        </div>
        <div style={{
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '4px',
          textTransform: 'uppercase',
          color: 'var(--accent-gold)',
          marginBottom: '20px',
        }}>
          Sahifa topilmadi
        </div>
        <h1 style={{ fontSize: '2rem', color: 'var(--primary-blue)', marginBottom: '20px' }}>
          Bunday sahifa <span>mavjud emas</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '40px' }}>
          Siz qidirayotgan sahifa o'chirilgan, ko'chirilgan yoki hech qachon mavjud bo'lmagan bo'lishi mumkin.
        </p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-block', padding: '14px 40px' }}>
            BOSH SAHIFAGA
          </Link>
          <Link to="/kontaktlar" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-block', padding: '14px 40px', borderColor: 'var(--accent-gold)', color: 'var(--accent-gold)' }}>
            BOG'LANISH
          </Link>
        </div>
      </div>
    </main>
  );
}
