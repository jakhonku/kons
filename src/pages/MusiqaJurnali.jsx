import PageHero from '../components/PageHero';
import { BookOpen, Download, Eye, Mail, Phone } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Konservatoriya', to: '/tarix' },
  { label: '"Musiqa" jurnali' },
];

const ISSUES = [
  {
    year: 2024,
    number: 4,
    title: 'Zamonaviy musiqa ta\'limi',
    desc: 'O\'zbek milliy musiqasi va xalqaro ta\'lim standartlari',
    pages: 96,
    pdf: '#',
  },
  {
    year: 2024,
    number: 3,
    title: 'Ijrochilik san\'ati',
    desc: 'Fortepiano maktabi: an\'analar va yangiliklar',
    pages: 88,
    pdf: '#',
  },
  {
    year: 2024,
    number: 2,
    title: 'Musiqa tarixi',
    desc: 'Markaziy Osiyo musiqiy merosi tadqiqotlari',
    pages: 104,
    pdf: '#',
  },
  {
    year: 2024,
    number: 1,
    title: 'Kompozitsiya va nazariya',
    desc: 'Zamonaviy kompozitsiya texnikalari va tahlil',
    pages: 92,
    pdf: '#',
  },
  {
    year: 2023,
    number: 4,
    title: 'Vokal san\'ati',
    desc: 'Opera va xor ijrochiligi — metodologiya masalalari',
    pages: 100,
    pdf: '#',
  },
  {
    year: 2023,
    number: 3,
    title: 'Musiqa psixologiyasi',
    desc: 'Iste\'dod rivojlantirish va ta\'lim psixologiyasi',
    pages: 84,
    pdf: '#',
  },
];

const EDITORIAL = [
  { name: 'Prof. Dilnoza Yusupova',  role: "Bosh muharrir" },
  { name: 'Prof. Alisher Nazarov',   role: "Muharrir o'rinbosari" },
  { name: 'Dots. Shahlo Razzaqova',  role: 'Mas\'ul kotib' },
  { name: 'Prof. Bahrom Toshmatov',  role: 'Tahririyat a\'zosi' },
  { name: 'Dots. Malika Ergasheva',  role: 'Tahririyat a\'zosi' },
  { name: 'Prof. Timur Xolmatov',    role: 'Tahririyat a\'zosi' },
];

export default function MusiqaJurnali() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Konservatoriya"
        title='"Musiqa"'
        emphasis="Jurnali"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">

          {/* Stats */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            background: 'var(--navy)', borderBottom: '2px solid var(--gold)', marginBottom: '60px',
          }}>
            {[
              { num: '1992',   label: 'Asos solingan' },
              { num: '4',      label: 'Yilik son' },
              { num: '100+',   label: "Jami sonlar" },
              { num: '500+',   label: "Maqolalar soni" },
            ].map((s) => (
              <div key={s.label} style={{ padding: '32px 20px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1, marginBottom: '8px' }}>{s.num}</div>
                <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Journal issues */}
          <div className="section-divider" style={{ marginTop: 0 }}>
            <h2>Jurnal sonlari</h2>
          </div>

          <div className="g-3" style={{ marginBottom: '60px' }}>
            {ISSUES.map((issue) => (
              <div key={`${issue.year}-${issue.number}`} style={{
                background: 'var(--white)', border: '1px solid var(--light-border)',
                borderTop: '3px solid var(--gold)', padding: '32px',
                transition: 'box-shadow 0.3s',
              }}
                onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(26,26,56,0.1)'; }}
                onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ color: 'var(--gold)', marginBottom: '12px' }}><BookOpen size={32} strokeWidth={1.5} /></div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 300, color: 'var(--gold-dark)', lineHeight: 1, marginBottom: '8px' }}>
                  {issue.year} — №{issue.number}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--navy)', marginBottom: '8px', fontWeight: 400 }}>{issue.title}</h3>
                <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '8px', lineHeight: 1.6 }}>{issue.desc}</p>
                <p style={{ fontSize: '0.75rem', color: '#aaa', marginBottom: '20px' }}>{issue.pages} sahifa</p>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <a href={issue.pdf} style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    padding: '10px 20px', background: 'var(--navy)',
                    color: 'var(--white)', textDecoration: 'none',
                    fontFamily: 'var(--font-sans)', fontWeight: 700,
                    fontSize: '0.72rem', letterSpacing: '1.5px', textTransform: 'uppercase',
                    transition: 'background 0.2s',
                  }}
                    onMouseOver={(e) => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = '#08081a'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'var(--navy)'; e.currentTarget.style.color = 'var(--white)'; }}
                  >
                    <Eye size={14} /> Online o'qish
                  </a>
                  <a href={issue.pdf} download style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    padding: '10px 20px', background: 'transparent',
                    border: '1px solid var(--gold)', color: 'var(--gold-dark)',
                    textDecoration: 'none', fontFamily: 'var(--font-sans)',
                    fontWeight: 700, fontSize: '0.72rem', letterSpacing: '1.5px', textTransform: 'uppercase',
                    transition: 'background 0.2s',
                  }}
                    onMouseOver={(e) => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = '#08081a'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold-dark)'; }}
                  >
                    <Download size={14} /> Yuklab olish
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Tahririyat jamoasi */}
          <div className="section-divider">
            <h2>Tahririyat jamoasi</h2>
          </div>

          <div className="g-3" style={{ marginBottom: '60px' }}>
            {EDITORIAL.map((member) => (
              <div key={member.name} style={{
                background: 'var(--white)', border: '1px solid var(--light-border)',
                padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: '6px',
                transition: 'box-shadow 0.3s',
              }}
                onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(26,26,56,0.08)'; }}
                onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ width: 4, height: 32, background: 'var(--gold)', marginBottom: '8px' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--navy)', fontWeight: 400, margin: 0 }}>{member.name}</h3>
                <p style={{ fontSize: '0.78rem', color: '#888', margin: 0, fontFamily: 'var(--font-sans)', letterSpacing: '0.5px' }}>{member.role}</p>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div style={{
            background: 'linear-gradient(110deg, var(--navy) 0%, #1e1e5a 100%)',
            borderTop: '3px solid var(--gold)', padding: '48px 56px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginBottom: '60px', flexWrap: 'wrap', gap: '24px',
          }}>
            <div>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>
                Tahririyat bilan bog'lanish
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--white)', fontWeight: 300, marginBottom: '8px' }}>
                Maqola <em>yuborish</em>
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'rgba(240,237,232,0.65)', fontFamily: 'var(--font-serif)', maxWidth: 400 }}>
                Ilmiy maqolalar va tadqiqotlarni jurnal tahririyatiga yuboring.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'rgba(240,237,232,0.7)' }}>
                  <Mail size={14} color="var(--gold)" /> journal@conservatory.uz
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'rgba(240,237,232,0.7)' }}>
                  <Phone size={14} color="var(--gold)" /> +998 71 236-89-00
                </div>
              </div>
            </div>
            <a href="mailto:journal@conservatory.uz" style={{
              padding: '14px 40px', background: 'var(--gold)',
              color: '#08081a', textDecoration: 'none', fontFamily: 'var(--font-sans)',
              fontWeight: 700, fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase',
            }}>
              Tahririyatga yozish →
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
