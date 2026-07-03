import { Link } from 'react-router-dom';
import PageHero from './PageHero';
import { useTranslation } from '../contexts/LanguageContext';

const LABELS = {
  uz: { contact: 'Bogʻlanish', responsible: 'Masʼul', phone: 'Telefon', email: 'Email', address: 'Manzil', hours: 'Qabul soatlari', website: 'Rasmiy sayt', head: 'Boʻlim rahbari' },
  ru: { contact: 'Контакты', responsible: 'Ответственный', phone: 'Телефон', email: 'Email', address: 'Адрес', hours: 'Часы приёма', website: 'Официальный сайт', head: 'Руководитель отдела' },
  en: { contact: 'Contact', responsible: 'Responsible', phone: 'Phone', email: 'Email', address: 'Address', hours: 'Office hours', website: 'Official website', head: 'Head of department' },
};

/* Common skeleton for inner-pages that just need:
   – hero
   – lead paragraph
   – optional stat row
   – optional content sections (plain paragraphs / bullet list / cards)
   – optional contact block
*/
export default function InfoPage({
  tag,
  title,
  emphasis,
  breadcrumbs,
  lead,
  stats,
  sections = [],
  head,
  contact,
  children,
}) {
  const { lang } = useTranslation();
  const L = LABELS[lang] || LABELS.uz;

  return (
    <main className="content-wrapper">
      <PageHero tag={tag} title={title} emphasis={emphasis} breadcrumbs={breadcrumbs} />

      <section className="main-content">
        <div className="container">

          {head && (
            <div style={{
              display: 'flex', gap: '28px', alignItems: 'center', flexWrap: 'wrap',
              background: 'var(--light-50)', border: '1px solid var(--light-border)',
              borderLeft: '3px solid var(--gold)', padding: '24px 28px', marginBottom: '40px',
            }}>
              {head.photo && (
                <img
                  src={head.photo}
                  alt={head.name || ''}
                  loading="eager"
                  decoding="async"
                  style={{ width: 130, aspectRatio: '3 / 4', objectFit: 'cover', objectPosition: 'top', borderRadius: '6px', border: '1px solid var(--light-border)', background: 'var(--cream)', flexShrink: 0 }}
                />
              )}
              <div style={{ minWidth: 200, flex: 1 }}>
                <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--gold-dark)', fontFamily: 'var(--font-sans)', marginBottom: '10px' }}>
                  {head.label || L.head}
                </div>
                {head.name && (
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', color: 'var(--navy)', lineHeight: 1.3, marginBottom: '6px' }}>
                    {head.name}
                  </div>
                )}
                {head.position && (
                  <div style={{ fontSize: '0.92rem', color: '#666', fontFamily: 'var(--font-serif)', lineHeight: 1.55 }}>
                    {head.position}
                  </div>
                )}
              </div>
            </div>
          )}

          {lead && (
            <article className="article-body">
              <p className="lead">{lead}</p>
            </article>
          )}

          {stats && stats.length > 0 && (
            <div className="page-stats-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '24px', margin: '0 0 60px' }}>
              {stats.map((s) => (
                <div key={s.label} style={{ background: 'var(--white)', border: '1px solid var(--light-border)', borderTop: '3px solid var(--gold)', padding: '30px 28px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', color: 'var(--navy)', lineHeight: 1, marginBottom: '8px' }}>{s.value}</div>
                  <div style={{ fontSize: '0.78rem', color: '#888', letterSpacing: '1.5px', textTransform: 'uppercase', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>{s.label}</div>
                </div>
              ))}
            </div>
          )}

          {sections.map((sec, idx) => (
            <div key={idx}>
              <div className="section-divider" style={idx === 0 && !lead && !stats ? { marginTop: 0 } : undefined}>
                <h2>{sec.heading}</h2>
              </div>

              {sec.text && (
                <article className="article-body" style={{ marginBottom: sec.items || sec.cards ? '24px' : '50px' }}>
                  {sec.text.split('\n').filter(Boolean).map((p, i) => <p key={i}>{p}</p>)}
                </article>
              )}

              {sec.items && (
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 60px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                  {sec.items.map((it, i) => (
                    <li key={i} style={{ background: 'var(--white)', border: '1px solid var(--light-border)', borderLeft: '3px solid var(--gold)', padding: '18px 24px', fontSize: '1rem', color: '#444', fontFamily: 'var(--font-serif)' }}>
                      {typeof it === 'string' ? it : (
                        <>
                          <strong style={{ color: 'var(--navy)', display: 'block', fontSize: '1.05rem', marginBottom: '6px', fontFamily: 'var(--font-sans)' }}>{it.title}</strong>
                          <span style={{ fontSize: '0.92rem', color: '#666' }}>{it.desc}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              )}

              {sec.flags && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '12px', marginBottom: '60px' }}>
                  {sec.flags.map((f, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'center', gap: '12px',
                      background: 'var(--white)', border: '1px solid var(--light-border)',
                      borderRadius: '4px', padding: '12px 14px',
                    }}>
                      <img
                        src={`https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.3.2/flags/4x3/${f.code}.svg`}
                        width="28"
                        height="21"
                        alt={f.name}
                        loading="lazy"
                        decoding="async"
                        style={{ flexShrink: 0, width: '28px', height: 'auto', borderRadius: '2px', border: '1px solid var(--light-border)', display: 'block' }}
                      />
                      <span style={{ fontSize: '0.9rem', color: 'var(--navy)', fontFamily: 'var(--font-sans)', lineHeight: 1.25 }}>{f.name}</span>
                    </div>
                  ))}
                </div>
              )}

              {sec.cards && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '60px' }}>
                  {sec.cards.map((c, i) => {
                    const inner = (
                      <>
                        {c.tag && <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '3px', color: 'var(--gold-dark)', textTransform: 'uppercase', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>{c.tag}</div>}
                        <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '1.25rem', fontWeight: 500, marginBottom: '12px', lineHeight: 1.3 }}>{c.title}</h3>
                        {c.desc && <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, fontFamily: 'var(--font-serif)' }}>{c.desc}</p>}
                        {c.to && (
                          <div style={{ marginTop: '16px', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--navy)', fontFamily: 'var(--font-sans)' }}>
                            {lang === 'ru' ? 'Подробнее →' : lang === 'en' ? 'Learn more →' : 'Batafsil →'}
                          </div>
                        )}
                        {c.meta && (
                          <div style={{ marginTop: '16px', fontSize: '0.8rem', color: 'var(--gold-dark)', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                            {c.meta.startsWith('http') || c.meta.startsWith('/') ? (
                              <a
                                href={c.meta}
                                target={c.meta.startsWith('http') ? '_blank' : undefined}
                                rel={c.meta.startsWith('http') ? 'noopener noreferrer' : undefined}
                                style={{ color: 'inherit', textDecoration: 'none' }}
                              >
                                {c.meta}
                              </a>
                            ) : c.meta}
                          </div>
                        )}
                      </>
                    );
                    const cardStyle = {
                      background: 'var(--white)', border: '1px solid var(--light-border)',
                      borderTop: '4px solid var(--gold)', padding: '32px 28px',
                      display: 'block', textDecoration: 'none',
                      transition: c.to ? 'box-shadow 0.25s, transform 0.25s' : undefined,
                    };
                    return c.to ? (
                      <Link
                        key={i}
                        to={c.to}
                        style={cardStyle}
                        onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(26,26,56,0.12)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                        onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
                      >
                        {inner}
                      </Link>
                    ) : (
                      <div key={i} style={cardStyle}>{inner}</div>
                    );
                  })}
                </div>
              )}

              {sec.table && (
                <div style={{ overflowX: 'auto', marginBottom: '50px', border: '1px solid var(--light-border)' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-serif)', fontSize: '0.9rem' }}>
                    <thead>
                      <tr style={{ background: 'var(--light-50)', borderBottom: '2px solid var(--gold)' }}>
                        {sec.table.head.map((h) => (
                          <th key={h} style={{ padding: '14px 18px', textAlign: 'left', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--navy)', fontWeight: 700, fontFamily: 'var(--font-sans)' }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {sec.table.rows.map((row, i) => (
                        <tr key={i} style={{ borderBottom: '1px solid var(--light-border)' }}>
                          {row.map((cell, j) => (
                            <td key={j} style={{ padding: '14px 18px', color: j === 0 ? 'var(--navy)' : '#555' }}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}

          {contact && (
            <div style={{ background: 'var(--light-50)', border: '1px solid var(--light-border)', borderLeft: '3px solid var(--gold)', padding: '28px 32px', marginTop: '20px' }}>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '3px', color: 'var(--gold-dark)', textTransform: 'uppercase', marginBottom: '14px', fontFamily: 'var(--font-sans)' }}>
                {contact.title || L.contact}
              </div>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              {contact.photo && (
                <img
                  src={contact.photo}
                  alt={contact.responsible || ''}
                  loading="lazy"
                  decoding="async"
                  style={{ width: 110, aspectRatio: '3 / 4', objectFit: 'cover', objectPosition: 'top', borderRadius: '4px', border: '1px solid var(--light-border)', background: 'var(--cream)', flexShrink: 0 }}
                />
              )}
              <div style={{ flex: 1, minWidth: 220, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', fontFamily: 'var(--font-sans)', fontSize: '0.88rem' }}>
                {contact.responsible && (
                  <div>
                    <div style={{ fontSize: '0.7rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{L.responsible}</div>
                    <div style={{ color: 'var(--navy)' }}>{contact.responsible}</div>
                  </div>
                )}
                {contact.phone && (
                  <div>
                    <div style={{ fontSize: '0.7rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{L.phone}</div>
                    <a href={`tel:${contact.phone}`} style={{ color: 'var(--navy)', textDecoration: 'none', fontWeight: 600 }}>{contact.phone}</a>
                  </div>
                )}
                {contact.email && (
                  <div>
                    <div style={{ fontSize: '0.7rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{L.email}</div>
                    <a href={`mailto:${contact.email}`} style={{ color: 'var(--navy)', textDecoration: 'none' }}>{contact.email}</a>
                  </div>
                )}
                {contact.address && (
                  <div>
                    <div style={{ fontSize: '0.7rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{L.address}</div>
                    <div style={{ color: '#555' }}>{contact.address}</div>
                  </div>
                )}
                {contact.hours && (
                  <div>
                    <div style={{ fontSize: '0.7rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{L.hours}</div>
                    <div style={{ color: '#555' }}>{contact.hours}</div>
                  </div>
                )}
                {contact.website && (
                  <div>
                    <div style={{ fontSize: '0.7rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{L.website}</div>
                    <a href={contact.website} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold-dark)', textDecoration: 'none', fontWeight: 600 }}>
                      {contact.website.replace('https://', '').replace('http://', '')}
                    </a>
                  </div>
                )}
              </div>
              </div>
            </div>
          )}

          {children}

        </div>
      </section>
    </main>
  );
}
