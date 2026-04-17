import PageHero from '../components/PageHero';
import { Award, Calendar, CheckCircle, Globe, GraduationCap, ChevronRight } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Xalqaro aloqalar', to: '/xalqaro' },
  { label: 'Xalqaro stipendiyalar' },
];

const SCHOLARSHIPS = [
  {
    title: "O'zbekiston Davlat Stipendiyasi",
    provider: "O'zbekiston Respublikasi",
    flag: '🇺🇿',
    amount: "To'liq moliyalash",
    deadline: 'Mart 2026',
    level: 'Magistratura, Doktorantura',
    status: 'Ariza qabul',
    desc: "Chet elda magistratura yoki doktorantura o'qish uchun to'liq davlat stipendiyasi. O'quv to'lovi, turar joy va kunlik xarajatlar qoplanadi.",
  },
  {
    title: "Erasmus+ Stipendiyasi",
    provider: 'Yevropa Ittifoqi',
    flag: '🇪🇺',
    amount: '800–1 200 € / oy',
    deadline: 'Dekabr 2025',
    level: 'Bakalavr, Magistratura',
    status: 'Faol',
    desc: "Yevropa Ittifoqining rasmiy ta'lim almashinuvi granti. Yevropa yetakchi musiqa universitetlarida 1 semestr yoki 1 yil o'qish.",
  },
  {
    title: "Rossiya Davlat Stipendiyasi",
    provider: "Rossiya Federatsiyasi",
    flag: '🇷🇺',
    amount: "To'liq moliyalash",
    deadline: 'Yanvar 2026',
    level: 'Bakalavr, Magistratura',
    status: 'Ariza qabul',
    desc: "Moskva va Sankt-Peterburg konservatoriyalarida o'qish uchun Rossiya hukumati stipendiyasi.",
  },
  {
    title: "Xitoy Hukumati Stipendiyasi (CSC)",
    provider: "Xitoy Xalq Respublikasi",
    flag: '🇨🇳',
    amount: "To'liq moliyalash",
    deadline: 'Fevral 2026',
    level: 'Magistratura, Doktorantura',
    status: 'Ariza qabul',
    desc: "Pekin Musiqa Konservatoriyasida magistratura va doktorantura uchun. Xitoy tili kurslari ham qoplanadi.",
  },
  {
    title: "Koreya Hukumati Stipendiyasi (GKS)",
    provider: 'Janubiy Koreya',
    flag: '🇰🇷',
    amount: "To'liq moliyalash",
    deadline: 'Mart 2026',
    level: 'Magistratura',
    status: 'Ariza qabul',
    desc: "Seul Milliy Universiteti yoki Koreya Badiiy Universitetida o'qish imkoniyati.",
  },
  {
    title: "Turk Hukumati Stipendiyasi (Türkiye Bursları)",
    provider: 'Turkiya Respublikasi',
    flag: '🇹🇷',
    amount: "To'liq moliyalash",
    deadline: 'Fevral 2026',
    level: 'Bakalavr, Magistratura',
    status: 'Faol',
    desc: "Istambul Davlat Konservatoriyasi va boshqa Turk musiqa institutlarida o'qish.",
  },
];

const APPLY_STEPS = [
  { num: '01', title: "Stipendiyani tanlash",    desc: "Siz uchun mos stipendiyani toping va talablarni diqqat bilan o'qing." },
  { num: '02', title: "Hujjatlarni tayyorlash",  desc: "Diplom, transkript, motivatsion xat, til sertifikati." },
  { num: '03', title: "Konservatoriya tasdiqi",   desc: "Xalqaro aloqalar bo'limidan rasmiy tavsiya xati oling." },
  { num: '04', title: "Ariza topshirish",         desc: "Belgilangan platforma yoki Xalqaro aloqalar bo'limi orqali topshiring." },
];

export default function XalqaroStipendiyalar() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Xalqaro aloqalar"
        title="Xalqaro"
        emphasis="Stipendiyalar"
        breadcrumbs={BREADCRUMBS}
      />

      <div className="page-stats-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', background: 'var(--navy)', borderBottom: '2px solid var(--gold)' }}>
        {[
          { num: '6+',   label: 'Stipendiya dasturi' },
          { num: '25+',  label: "Yillik o'rin" },
          { num: '12',   label: 'Mamlakat' },
          { num: '100%', label: "Ko'pchiligi to'liq moliyalash" },
        ].map((s, i) => (
          <div key={s.label} style={{ padding: '36px 20px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1, marginBottom: '8px' }}>{s.num}</div>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-sans)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      <section className="main-content">
        <div className="container">

          <article className="article-body" style={{ marginBottom: '20px' }}>
            <p className="lead">
              Konservatoriya talabalari uchun xorijda o'qish imkonini beradigan davlat va
              xalqaro stipendiyalar. Ko'pchiligi to'liq moliyalanadigan grantlar.
            </p>
          </article>

          <div className="section-divider" style={{ marginTop: 0 }}>
            <h2>Mavjud stipendiyalar</h2>
          </div>

          <div className="g-2" style={{ marginBottom: '60px' }}>
            {SCHOLARSHIPS.map((s) => (
              <div key={s.title} style={{ background: 'var(--white)', border: '1px solid var(--light-border)', padding: '28px', transition: '0.3s' }}
                onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 6px 28px rgba(26,26,56,0.09)'; }}
                onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px', gap: '8px', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>{s.flag}</span>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--navy)', fontWeight: 400, lineHeight: 1.2 }}>{s.title}</h3>
                      <div style={{ fontSize: '0.7rem', color: '#888', fontFamily: 'var(--font-sans)' }}>{s.provider}</div>
                    </div>
                  </div>
                  <span style={{
                    fontSize: '0.6rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase',
                    padding: '3px 10px', fontFamily: 'var(--font-sans)', flexShrink: 0,
                    background: s.status === 'Faol' ? '#22c55e' : 'var(--gold-dark)', color: 'var(--white)',
                  }}>{s.status}</span>
                </div>
                <p style={{ fontSize: '0.83rem', color: '#666', lineHeight: 1.65, fontFamily: 'var(--font-serif)', fontStyle: 'italic', marginBottom: '16px' }}>{s.desc}</p>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '0.75rem', color: '#555', fontFamily: 'var(--font-sans)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Award size={12} strokeWidth={2} style={{ color: 'var(--gold)' }} /> {s.amount}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <GraduationCap size={12} strokeWidth={2} style={{ color: 'var(--gold)' }} /> {s.level}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Calendar size={12} strokeWidth={2} style={{ color: 'var(--gold)' }} /> Muddat: {s.deadline}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="section-divider">
            <h2>Ariza tartibi</h2>
          </div>

          <div className="g-4" style={{ marginBottom: '60px' }}>
            {APPLY_STEPS.map((step) => (
              <div key={step.num} style={{ background: 'var(--white)', border: '1px solid var(--light-border)', borderTop: '3px solid var(--gold)', padding: '28px 22px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1, marginBottom: '12px' }}>{step.num}</div>
                <h4 style={{ color: 'var(--navy)', fontSize: '0.95rem', marginBottom: '8px', fontFamily: 'var(--font-display)' }}>{step.title}</h4>
                <p style={{ fontSize: '0.78rem', color: '#666', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--cream)', border: '1px solid var(--light-border)', borderLeft: '4px solid var(--gold)', padding: '24px 32px', marginBottom: '60px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div style={{ color: 'var(--gold-dark)', flexShrink: 0, marginTop: 2 }}><ChevronRight size={20} strokeWidth={2} /></div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '1rem', marginBottom: '6px' }}>Xalqaro aloqalar bo'limi</h4>
              <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.7, fontFamily: 'var(--font-serif)', margin: 0 }}>
                Stipendiyalar bo'yicha konsultatsiya olish va hujjatlarni topshirish uchun:<br />
                2-bino, 201-xona &nbsp;·&nbsp; international@konservatoriya.uz &nbsp;·&nbsp; +998 71 234-56-91
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
