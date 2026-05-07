import PageHero from './PageHero';

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
  contact,
}) {
  return (
    <main className="content-wrapper">
      <PageHero tag={tag} title={title} emphasis={emphasis} breadcrumbs={breadcrumbs} />

      <section className="main-content">
        <div className="container">

          {lead && (
            <article className="article-body">
              <p className="lead">{lead}</p>
            </article>
          )}

          {stats && stats.length > 0 && (
            <div className="page-stats-3" style={{ display: 'grid', gridTemplateColumns: `repeat(${stats.length}, 1fr)`, gap: '16px', margin: '0 0 50px' }}>
              {stats.map((s) => (
                <div key={s.label} style={{ background: 'var(--white)', border: '1px solid var(--light-border)', borderTop: '3px solid var(--gold)', padding: '24px 22px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--navy)', lineHeight: 1, marginBottom: '6px' }}>{s.value}</div>
                  <div style={{ fontSize: '0.72rem', color: '#888', letterSpacing: '1.2px', textTransform: 'uppercase', fontFamily: 'var(--font-sans)' }}>{s.label}</div>
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
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 50px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                  {sec.items.map((it, i) => (
                    <li key={i} style={{ background: 'var(--white)', border: '1px solid var(--light-border)', borderLeft: '3px solid var(--gold)', padding: '14px 18px', fontSize: '0.9rem', color: '#444', fontFamily: 'var(--font-serif)' }}>
                      {typeof it === 'string' ? it : (
                        <>
                          <strong style={{ color: 'var(--navy)', display: 'block', fontSize: '0.95rem', marginBottom: '4px', fontFamily: 'var(--font-sans)' }}>{it.title}</strong>
                          <span style={{ fontSize: '0.85rem', color: '#666' }}>{it.desc}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              )}

              {sec.cards && (
                <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(sec.cards.length, 3)}, 1fr)`, gap: '16px', marginBottom: '50px' }}>
                  {sec.cards.map((c, i) => (
                    <div key={i} style={{ background: 'var(--white)', border: '1px solid var(--light-border)', borderTop: '3px solid var(--gold)', padding: '24px 22px' }}>
                      {c.tag && <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '2.5px', color: 'var(--gold-dark)', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-sans)' }}>{c.tag}</div>}
                      <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '1.05rem', fontWeight: 500, marginBottom: '8px', lineHeight: 1.3 }}>{c.title}</h3>
                      {c.desc && <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.65, fontFamily: 'var(--font-serif)' }}>{c.desc}</p>}
                      {c.meta && <div style={{ marginTop: '12px', fontSize: '0.75rem', color: 'var(--gold-dark)', fontFamily: 'var(--font-sans)' }}>{c.meta}</div>}
                    </div>
                  ))}
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
                {contact.title || "Bogʻlanish"}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', fontFamily: 'var(--font-sans)', fontSize: '0.88rem' }}>
                {contact.responsible && (
                  <div>
                    <div style={{ fontSize: '0.7rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Mas'ul</div>
                    <div style={{ color: 'var(--navy)' }}>{contact.responsible}</div>
                  </div>
                )}
                {contact.phone && (
                  <div>
                    <div style={{ fontSize: '0.7rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Telefon</div>
                    <a href={`tel:${contact.phone}`} style={{ color: 'var(--navy)', textDecoration: 'none', fontWeight: 600 }}>{contact.phone}</a>
                  </div>
                )}
                {contact.email && (
                  <div>
                    <div style={{ fontSize: '0.7rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Email</div>
                    <a href={`mailto:${contact.email}`} style={{ color: 'var(--navy)', textDecoration: 'none' }}>{contact.email}</a>
                  </div>
                )}
                {contact.address && (
                  <div>
                    <div style={{ fontSize: '0.7rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Manzil</div>
                    <div style={{ color: '#555' }}>{contact.address}</div>
                  </div>
                )}
                {contact.hours && (
                  <div>
                    <div style={{ fontSize: '0.7rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Qabul soatlari</div>
                    <div style={{ color: '#555' }}>{contact.hours}</div>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}
