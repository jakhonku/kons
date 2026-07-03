import PageHero from './PageHero';
import { Award } from 'lucide-react';

/* Roʻyxat elementlarining birinchi harfini katta qiladi
   (hujjatdan koʻchirilgan gaplar kichik harf bilan boshlangan boʻlsa). */
const capFirst = (s) =>
  typeof s === 'string' && s.length ? s.charAt(0).toLocaleUpperCase('uz') + s.slice(1) : s;

/* Jamoat tashkiloti — batafsil sahifa skeleti.
   Rahbar rasmi + lavozim + mukofotlar, soʻng toʻliq matn va boʻlimlar. */
export default function OrgDetail({
  tag,
  title,
  emphasis,
  breadcrumbs,
  leader,
  intro = [],
  sections = [],
  children,
}) {
  return (
    <main className="content-wrapper">
      <PageHero tag={tag} title={title} emphasis={emphasis} breadcrumbs={breadcrumbs} />

      <section className="main-content">
        <div className="container">

          {/* Rahbar kartochkasi */}
          {leader && (
            <div className="org-leader" style={{ maxWidth: '680px', margin: '0 auto 40px' }}>
              <div className="org-leader-photo">
                <img src={leader.photo} alt={leader.name} loading="lazy" />
              </div>
              <div className="org-leader-info">
                {leader.role && <div className="org-leader-role">{leader.role}</div>}
                <h2 className="org-leader-name">{leader.name}</h2>
                {leader.awards && leader.awards.length > 0 && (
                  <ul className="org-leader-awards">
                    {leader.awards.map((a, i) => (
                      <li key={i}><Award size={15} strokeWidth={1.8} /> {a}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}

          {/* Kirish matni */}
          {intro.length > 0 && (
            <article className="article-body" style={{ marginBottom: '20px' }}>
              {intro.map((p, i) => (
                <p key={i} className={i === 0 ? 'lead' : undefined}>{p}</p>
              ))}
            </article>
          )}

          {/* Boʻlimlar */}
          {sections.map((sec, idx) => (
            <div key={idx}>
              {sec.heading && (
                <div className="section-divider">
                  <h2>{sec.heading}</h2>
                </div>
              )}

              {sec.text && (
                <article className="article-body" style={{ marginBottom: sec.items ? '24px' : '40px' }}>
                  {sec.text.split('\n').filter(Boolean).map((p, i) => <p key={i}>{p}</p>)}
                </article>
              )}

              {sec.items && (
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 50px', display: 'grid', gap: '14px' }}>
                  {sec.items.map((it, i) => (
                    <li key={i} style={{ background: 'var(--white)', border: '1px solid var(--light-border)', borderLeft: '3px solid var(--gold)', padding: '16px 22px', fontSize: '0.98rem', color: '#444', fontFamily: 'var(--font-serif)', lineHeight: 1.6 }}>
                      {capFirst(it)}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {children}

        </div>
      </section>
    </main>
  );
}
