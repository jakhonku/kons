import PageHero from '../components/PageHero';
import { Leaf, Sun, Recycle, Droplets, Bike, TrendingDown } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Konservatoriya' },
  { label: 'Yashil Universitet' },
];

const GOALS = [
  { icon: Leaf,        title: 'Yashil muhit',            desc: "Kampusda 500 dan ortiq daraxt va o'simliklar, ekologik hududlar." },
  { icon: Sun,         title: 'Quyosh energiyasi',       desc: "Binolar energiyasining 30% quyosh panellaridan ta'minlanadi." },
  { icon: Recycle,     title: 'Chiqindilarni saralash',  desc: "Uch xil idish orqali chiqindilarni qayta ishlash tizimi." },
  { icon: Droplets,    title: "Suv tejamliligi",         desc: "Avtomatik sug'orish va suv sarfini nazorat qilish tizimi." },
  { icon: Bike,        title: 'Velosiped infratuzilmasi', desc: "Campus bo'ylab velosiped yo'llari va parkovkalar." },
  { icon: TrendingDown, title: 'Carbon izini kamaytirish', desc: "2030 yilgacha carbon-neutral maqomini olish maqsadi." },
];

const ACHIEVEMENTS = [
  { num: '500+', label: "Daraxt va o'simliklar" },
  { num: '30%',  label: 'Quyosh energiyasi ulushi' },
  { num: '70%',  label: "Chiqindilarni qayta ishlash" },
  { num: '2030', label: 'Carbon-neutral maqsadi' },
];

const INITIATIVES = [
  { year: '2022', title: "Quyosh panellari o'rnatildi",               desc: "150 kVt quvvatli quyosh panellari asosiy binoga o'rnatildi." },
  { year: '2023', title: "Yashil Kampus sertifikati olindi",           desc: "ISO 14001 Atrof-muhitni boshqarish sertifikati berildi." },
  { year: '2024', title: "Chiqindilarni saralash to'liq joriy etildi", desc: "Barcha auditoriya va ofislarda uch xil saralash idishi o'rnatildi." },
  { year: '2025', title: "Velosiped infratuzilmasi qurildi",            desc: "700 metrelik velosiped yo'li va 50 ta parkovka joyi yaratildi." },
];

export default function YashilUniversitet() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Konservatoriya"
        title="Yashil"
        emphasis="Universitet"
        breadcrumbs={BREADCRUMBS}
      />

      {/* Stats */}
      <div className="page-stats-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', background: '#1a3a2a', borderBottom: '2px solid #4ade80' }}>
        {ACHIEVEMENTS.map((a, i) => (
          <div key={a.label} style={{ padding: '32px 20px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.6rem', fontWeight: 300, color: '#4ade80', lineHeight: 1, marginBottom: '8px' }}>
              {a.num}
            </div>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-sans)' }}>
              {a.label}
            </div>
          </div>
        ))}
      </div>

      <section className="main-content">
        <div className="container">

          <article className="article-body" style={{ marginBottom: '20px' }}>
            <p className="lead">
              O'zbekiston Davlat Konservatoriyasi barqaror rivojlanish va ekologiya tamoyillarini
              ta'lim jarayoni va kampus hayotiga jadal joriy etmoqda.
            </p>
          </article>

          {/* Maqsadlar */}
          <div className="section-divider" style={{ marginTop: 0 }}>
            <h2>Yashil Maqsadlar</h2>
          </div>

          <div className="page-stats-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '50px' }}>
            {GOALS.map((g) => (
              <div key={g.title} style={{ background: 'var(--white)', border: '1px solid var(--light-border)', padding: '28px 24px', borderTop: '3px solid #4ade80', transition: '0.3s' }}
                onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 8px 30px rgba(26,56,26,0.1)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{ color: '#4ade80', marginBottom: '14px', lineHeight: 1 }}><g.icon size={32} strokeWidth={1.5} /></div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: '#1a3a2a', marginBottom: '8px', fontWeight: 400 }}>{g.title}</h3>
                <p style={{ fontSize: '0.83rem', color: '#555', lineHeight: 1.6 }}>{g.desc}</p>
              </div>
            ))}
          </div>

          {/* Bosqichlar */}
          <div className="section-divider">
            <h2>Amalga oshirilgan tadbirlar</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '60px', border: '1px solid var(--light-border)', overflow: 'hidden' }}>
            {INITIATIVES.map((init, i) => (
              <div key={init.year} style={{ display: 'flex', gap: '0', borderBottom: i < INITIATIVES.length - 1 ? '1px solid var(--light-border)' : 'none' }}>
                <div style={{ width: '100px', background: '#1a3a2a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 300, color: '#4ade80' }}>{init.year}</span>
                </div>
                <div style={{ padding: '22px 28px', background: 'var(--white)', flex: 1 }}>
                  <h4 style={{ color: 'var(--navy)', marginBottom: '6px', fontSize: '0.98rem', fontFamily: 'var(--font-display)', fontWeight: 400 }}>{init.title}</h4>
                  <p style={{ fontSize: '0.83rem', color: '#666', lineHeight: 1.6 }}>{init.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ background: '#1a3a2a', padding: '40px', textAlign: 'center', marginBottom: '40px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300, color: 'var(--white)', marginBottom: '12px' }}>
              Yashil <span style={{ color: '#4ade80', fontStyle: 'italic' }}>Kelajak</span>
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', marginBottom: '24px', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
              2030 yilgacha konservatoriyani to'liq ekologik maqomga ko'tarish maqsad qilingan.
            </p>
            <a href="/kontaktlar" style={{ display: 'inline-block', padding: '12px 36px', border: '1px solid #4ade80', color: '#4ade80', textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', transition: '0.3s' }}
              onMouseOver={(e) => { e.currentTarget.style.background = '#4ade80'; e.currentTarget.style.color = '#1a3a2a'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#4ade80'; }}
            >
              BOG'LANISH →
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
