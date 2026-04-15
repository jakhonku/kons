import { Link, useNavigate } from 'react-router-dom';

export default function PageHero({ tag, title, emphasis, breadcrumbs }) {
  const navigate = useNavigate();

  return (
    <section className="page-hero">
      <div className="container">
        <nav className="page-top-nav">
          <ul className="breadcrumbs">
            {breadcrumbs.map((crumb, i) => (
              <li key={i}>
                {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : crumb.label}
              </li>
            ))}
          </ul>
          <button className="back-btn" onClick={() => navigate(-1)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            ORQAGA QAYTISH
          </button>
        </nav>
        <div className="hero-text-wrap" style={{ paddingBottom: '40px' }}>
          <span className="section-tag">{tag}</span>
          <h1>
            {title} <span>{emphasis}</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
