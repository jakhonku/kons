import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { Drama, Music, GraduationCap, FileText, Mic, Calendar, ArrowRight } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Ijodiy faoliyat' },
  { label: 'Musiqali teatr studiyasi' },
];

const VAZIFALAR = [
  { icon: Drama, title: 'Sahna amaliyoti', desc: 'Opera va musiqali teatr yoʻnalishidagi talabalar uchun professional sahna maydoni.' },
  { icon: Music, title: 'Opera va spektakllar', desc: 'Opera hamda musiqali teatr asarlarini tayyorlash va sahnalashtirish.' },
  { icon: GraduationCap, title: 'Bitiruv ishlari', desc: 'Talaba va bitiruvchilarning malakaviy (diplom) ishlari aynan shu sahnada namoyish etiladi.' },
  { icon: Mic, title: 'Opera sanʼatini rivojlantirish', desc: 'Milliy opera va balet sanʼatini yuksaltirish hamda yosh ijodkorlarni voyaga yetkazish.' },
];

const sectionTitle = {
  fontFamily: 'var(--font-display)',
  color: 'var(--navy)',
  fontSize: '1.6rem',
  fontWeight: 500,
  marginBottom: '24px',
};

const eyebrow = {
  fontSize: '0.6rem',
  fontWeight: 700,
  letterSpacing: '3px',
  color: 'var(--gold-dark)',
  textTransform: 'uppercase',
  marginBottom: '10px',
};

export default function MusiqaliTeatrStudiyasi() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Ijodiy faoliyat"
        title="Musiqali teatr"
        emphasis="studiyasi"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">

          {/* ── Kirish ── */}
          <div className="reveal" style={{ maxWidth: '820px', marginBottom: '60px' }}>
            <p className="lead" style={{ marginBottom: '18px' }}>
              Musiqali teatr-studiyasi — Oʻzbekiston Davlat Konservatoriyasi huzuridagi
              ijodiy-amaliy boʻlinma. U opera va musiqali teatr yoʻnalishidagi talabalar uchun
              professional sahna maydoni boʻlib xizmat qiladi.
            </p>
            <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.8 }}>
              Studiyada talabalar nazariy bilimlarini amaliyot bilan boyitadi: opera va musiqali
              spektakllar tayyorlanadi, sahna mahorati, vokal va aktyorlik koʻnikmalari
              shakllantiriladi. Studiya konservatoriyaning ijodiy hayotida muhim oʻrin tutadi.
            </p>
          </div>

          {/* ── Maqsad va vazifalar ── */}
          <div className="reveal" style={{ marginBottom: '60px' }}>
            <div style={eyebrow}>Faoliyat yoʻnalishi</div>
            <h2 style={sectionTitle}>Maqsad va vazifalar</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '18px' }}>
              {VAZIFALAR.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} style={{ background: 'var(--white, #fff)', border: '1px solid var(--light-border, #e6e1d6)', borderRadius: '12px', padding: '24px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '11px', background: 'var(--light-50, #f8f5ee)', color: 'var(--gold-dark, #a8891e)', marginBottom: '14px' }}>
                      <Icon size={20} />
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '1.05rem', fontWeight: 500, marginBottom: '8px' }}>{v.title}</h3>
                    <p style={{ color: '#666', fontSize: '0.86rem', lineHeight: 1.65 }}>{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Rasmiy asos ── */}
          <div className="reveal" style={{ marginBottom: '60px' }}>
            <div style={eyebrow}>Rasmiy asos</div>
            <h2 style={sectionTitle}>Huquqiy maqom</h2>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: 'var(--light-50, #f8f5ee)', border: '1px solid var(--light-border, #e6e1d6)', borderLeft: '3px solid var(--gold, #c9a84c)', borderRadius: '12px', padding: '24px 26px', maxWidth: '860px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '42px', height: '42px', borderRadius: '10px', background: 'var(--navy)', color: 'var(--gold, #c9a84c)', flexShrink: 0 }}>
                <FileText size={19} />
              </div>
              <p style={{ color: '#555', fontSize: '0.92rem', lineHeight: 1.8 }}>
                Studiya faoliyati Oʻzbekiston Respublikasi Prezidentining{' '}
                <a href="https://lex.uz/uz/docs/-5799769" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold-dark, #a8891e)', fontWeight: 600 }}>
                  2021-yil 27-dekabrdagi PQ-64-son
                </a>{' '}
                &laquo;Opera va balet sanʼatini yanada rivojlantirish chora-tadbirlari
                toʻgʻrisida&raquo;gi qarori bilan belgilangan. Qarorga muvofiq konservatoriya
                huzuridagi Musiqali teatr-studiyasi faoliyati takomillashtirilib, opera va
                balet sanʼati boʻyicha malakali kadrlar tayyorlashga xizmat qiladi.
              </p>
            </div>
          </div>

          {/* ── Bogʻliq kafedra ── */}
          <div className="reveal" style={{ marginBottom: '60px' }}>
            <div style={eyebrow}>Taʼlim bilan bogʻliqlik</div>
            <h2 style={sectionTitle}>Akademik xonandalik va opera kafedrasi</h2>
            <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '860px' }}>
              Musiqali teatr-studiyasi konservatoriyaning{' '}
              <a href="https://konservatoriya.uz/akademik-xonandalik-va-opera-tayyorlov-kafedrasi/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold-dark, #a8891e)', fontWeight: 600 }}>
                Akademik xonandalik va opera tayyorlov kafedrasi
              </a>{' '}
              (1936-yildan faoliyat yuritadi) bilan chambarchas bogʻliq. Vokalchi va opera
              ijrochilari aynan shu kafedrada taʼlim oladi va studiya sahnasida amaliyot oʻtaydi.
            </p>
          </div>

          {/* ── Afisha CTA ── */}
          <div
            className="reveal"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', background: 'var(--bg-deep, #0c0c1e)', color: '#fff', borderRadius: '14px', padding: '32px 34px', flexWrap: 'wrap', marginBottom: '40px' }}
          >
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: 'var(--gold, #c9a84c)', marginBottom: '10px' }}>
                <Calendar size={18} />
                <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>Tadbirlar</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 500, marginBottom: '6px' }}>
                Spektakl va konsertlar afishasi
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '520px' }}>
                Studiya spektakllari va konsertlari taqvimi konservatoriyaning afisha sahifasi
                hamda rasmiy ijtimoiy kanallarida eʼlon qilinadi.
              </p>
            </div>
            <Link
              to="/taqvim"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--gold, #c9a84c)', color: '#1a1a1a', padding: '14px 26px', borderRadius: '8px', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap' }}
            >
              Afishani koʻrish <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
