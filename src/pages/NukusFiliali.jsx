import PageHero from '../components/PageHero';
import { ExternalLink, Globe, MapPin, Phone, Mail, Music, Calendar, Languages, Clock } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Tuzilma', to: '/tuzilma' },
  { label: 'Nukus filiali' },
];

const OFFICIAL_SITE = 'https://uzdknf.uz/';

const STATS = [
  { value: '2021', label: 'Tashkil etilgan yil' },
  { value: '5', label: 'Taʼlim yoʻnalishi' },
  { value: '3', label: 'Oʻqitish tili' },
];

const YONALISHLAR = [
  { title: 'Musiqashunoslik', desc: 'Musiqa nazariyasi va tarixi boʻyicha mutaxassislar tayyorlash.' },
  { title: 'Dirijyorlik', desc: 'Akademik xor dirijyorligi yoʻnalishi.' },
  { title: 'Vokal sanʼati', desc: 'Akademik xonandalik (solo) yoʻnalishi.' },
  { title: 'Orkestr ijrochiligi — Gʻarb cholgʻulari', desc: 'Torli, puflama (yogʻoch va mis) hamda zarbli cholgʻular ijrochiligi.' },
  { title: 'Orkestr ijrochiligi — milliy cholgʻular', desc: 'Qoraqalpoq va oʻzbek xalq cholgʻulari ijrochiligi.' },
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

export default function NukusFiliali() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Tuzilma"
        title="Nukus"
        emphasis="filiali"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">

          {/* ── Kirish + rasmiy sayt ── */}
          <div
            className="reveal"
            style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.6fr) minmax(0, 1fr)', gap: '36px', alignItems: 'start', marginBottom: '64px' }}
          >
            <div>
              <p className="lead" style={{ marginBottom: '18px' }}>
                Oʻzbekiston Davlat Konservatoriyasining Nukus filiali — Qoraqalpogʻiston
                Respublikasida professional musiqa taʼlimi beruvchi oliy oʻquv yurti.
                Filial Oʻzbekiston Respublikasi Vazirlar Mahkamasining 2021-yil 5-apreldagi
                186-son qarori bilan tashkil etilgan va 2021-yil 6-sentyabrda birinchi
                oʻquv yilini boshlagan.
              </p>
              <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.8 }}>
                Filialning asosiy vazifasi — milliy musiqa sanʼati sohasida yuqori malakali
                bakalavr va magistrlarni, shuningdek ilmiy-pedagogik kadrlarni tayyorlash,
                qoraqalpoq milliy musiqa madaniyatini saqlash va rivojlantirishdir. Taʼlim
                oʻzbek, rus va qoraqalpoq tillarida olib boriladi.
              </p>
            </div>

            {/* Rasmiy sayt kartasi */}
            <aside
              style={{ background: 'var(--bg-deep, #0c0c1e)', color: '#fff', borderRadius: '14px', padding: '28px', boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(201,168,76,0.15)', color: 'var(--gold, #c9a84c)', marginBottom: '16px' }}>
                <Globe size={22} />
              </div>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '3px', color: 'var(--gold, #c9a84c)', textTransform: 'uppercase', marginBottom: '8px' }}>
                Rasmiy veb-sayt
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 500, marginBottom: '6px' }}>
                uzdknf.uz
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '20px' }}>
                Filialning toʻliq maʼlumotlari, qabul, yangiliklar va boʻlimlar bilan
                tanishish uchun rasmiy saytga tashrif buyuring.
              </p>
              <a
                href={OFFICIAL_SITE}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--gold, #c9a84c)', color: '#1a1a1a', padding: '13px 24px', borderRadius: '8px', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', textDecoration: 'none' }}
              >
                Saytga oʻtish <ExternalLink size={15} />
              </a>
            </aside>
          </div>

          {/* ── Statistika ── */}
          <div
            className="reveal"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '20px', marginBottom: '64px' }}
          >
            {STATS.map((s) => (
              <div key={s.label} style={{ background: 'var(--light-50, #f8f5ee)', border: '1px solid var(--light-border, #e6e1d6)', borderRadius: '12px', padding: '28px 24px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', color: 'var(--gold-dark, #a8891e)', lineHeight: 1 }}>{s.value}</div>
                <div style={{ color: '#777', fontSize: '0.82rem', marginTop: '10px', letterSpacing: '0.5px' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* ── Taʼlim yoʻnalishlari ── */}
          <div className="reveal" style={{ marginBottom: '64px' }}>
            <div style={eyebrow}>Musiqa sanʼati fakulteti</div>
            <h2 style={sectionTitle}>Taʼlim yoʻnalishlari</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
              {YONALISHLAR.map((y) => (
                <div key={y.title} style={{ background: 'var(--white, #fff)', border: '1px solid var(--light-border, #e6e1d6)', borderRadius: '12px', padding: '24px' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '10px', background: 'var(--light-50, #f8f5ee)', color: 'var(--gold-dark, #a8891e)', marginBottom: '14px' }}>
                    <Music size={18} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '1.05rem', fontWeight: 500, marginBottom: '8px', lineHeight: 1.35 }}>{y.title}</h3>
                  <p style={{ color: '#666', fontSize: '0.86rem', lineHeight: 1.65 }}>{y.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Rahbariyat ── */}
          <div className="reveal" style={{ marginBottom: '64px' }}>
            <div style={eyebrow}>Rahbariyat</div>
            <h2 style={sectionTitle}>Filial rahbari</h2>
            <div style={{ display: 'flex', gap: '22px', alignItems: 'flex-start', background: 'var(--light-50, #f8f5ee)', border: '1px solid var(--light-border, #e6e1d6)', borderLeft: '3px solid var(--gold, #c9a84c)', borderRadius: '12px', padding: '26px 28px', maxWidth: '720px' }}>
              <img
                src="/images/rahbariyat/nukus-direktor.jpg"
                alt="Allanbaev Rudakiy Orinbaevich — Nukus filiali direktori"
                style={{ width: '112px', height: '134px', objectFit: 'cover', objectPosition: 'top center', borderRadius: '12px', flexShrink: 0, border: '1px solid var(--light-border, #e6e1d6)' }}
              />
              <div>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '2px', color: 'var(--gold-dark, #a8891e)', textTransform: 'uppercase', marginBottom: '6px' }}>Filial direktori</div>
                <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '1.25rem', fontWeight: 500, marginBottom: '8px' }}>
                  Allanbaev Rudakiy Orinbaevich
                </h3>
                <p style={{ color: '#666', fontSize: '0.88rem', lineHeight: 1.7 }}>
                  Dotsent, Qoraqalpogʻiston Respublikasida xizmat koʻrsatgan sanʼat arbobi,
                  &laquo;Shuhrat&raquo; medali sohibi. 2021-yildan filialga rahbarlik qiladi.
                </p>
              </div>
            </div>
          </div>

          {/* ── Tarix / qaror ── */}
          <div className="reveal" style={{ marginBottom: '64px' }}>
            <div style={eyebrow}>Tashkil etilishi</div>
            <h2 style={sectionTitle}>Filial tarixi</h2>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', maxWidth: '820px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '10px', background: 'var(--light-50, #f8f5ee)', color: 'var(--gold-dark, #a8891e)', flexShrink: 0 }}>
                <Calendar size={18} />
              </div>
              <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.85 }}>
                Filial Oʻzbekiston Respublikasi Vazirlar Mahkamasining{' '}
                <a href="https://lex.uz/docs/-5355586" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold-dark, #a8891e)', fontWeight: 600 }}>
                  2021-yil 5-apreldagi 186-son qarori
                </a>{' '}
                bilan Nukus madaniyat ixtisoslashtirilgan maktabi negizida tashkil etilgan.
                Qarorga koʻra filial uchun zamonaviy oʻquv binosi, 200 va 100 oʻrinli ikkita
                konsert zali, yotoqxona hamda sport inshooti qurilishi rejalashtirilgan.
                Filial — konservatoriyaning yuridik shaxs maqomiga ega tarkibiy boʻlinmasi.
              </p>
            </div>
          </div>

          {/* ── Aloqa ── */}
          <div className="reveal" style={{ marginBottom: '40px' }}>
            <div style={eyebrow}>Bogʻlanish</div>
            <h2 style={sectionTitle}>Manzil va aloqa</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>

              <div style={{ background: 'var(--white, #fff)', border: '1px solid var(--light-border, #e6e1d6)', borderRadius: '12px', padding: '22px 24px' }}>
                <MapPin size={18} style={{ color: 'var(--gold-dark, #a8891e)', marginBottom: '12px' }} />
                <div style={{ ...eyebrow, marginBottom: '8px' }}>Manzil</div>
                <p style={{ color: '#555', fontSize: '0.88rem', lineHeight: 1.7 }}>
                  Qoraqalpogʻiston Respublikasi,<br />
                  Nukus shahar, Sharjaw Abdirov koʻchasi, 5-uy
                </p>
              </div>

              <div style={{ background: 'var(--white, #fff)', border: '1px solid var(--light-border, #e6e1d6)', borderRadius: '12px', padding: '22px 24px' }}>
                <Phone size={18} style={{ color: 'var(--gold-dark, #a8891e)', marginBottom: '12px' }} />
                <div style={{ ...eyebrow, marginBottom: '8px' }}>Telefon</div>
                <p style={{ color: '#555', fontSize: '0.88rem', lineHeight: 1.9 }}>
                  <a href="tel:+998551020540" style={{ color: 'var(--navy)', textDecoration: 'none' }}>+998 55 102 05 40</a>
                </p>
              </div>

              <div style={{ background: 'var(--white, #fff)', border: '1px solid var(--light-border, #e6e1d6)', borderRadius: '12px', padding: '22px 24px' }}>
                <Mail size={18} style={{ color: 'var(--gold-dark, #a8891e)', marginBottom: '12px' }} />
                <div style={{ ...eyebrow, marginBottom: '8px' }}>Email</div>
                <p style={{ color: '#555', fontSize: '0.88rem', lineHeight: 1.7 }}>
                  <a href="mailto:conservatorynukus@uzdknf.uz" style={{ color: 'var(--navy)', textDecoration: 'none', wordBreak: 'break-all' }}>conservatorynukus@uzdknf.uz</a>
                </p>
              </div>

              <div style={{ background: 'var(--white, #fff)', border: '1px solid var(--light-border, #e6e1d6)', borderRadius: '12px', padding: '22px 24px' }}>
                <Clock size={18} style={{ color: 'var(--gold-dark, #a8891e)', marginBottom: '12px' }} />
                <div style={{ ...eyebrow, marginBottom: '8px' }}>Ish vaqti</div>
                <p style={{ color: '#555', fontSize: '0.88rem', lineHeight: 1.7 }}>
                  Dushanba – Shanba<br />
                  9:00 – 18:00
                </p>
              </div>

              <div style={{ background: 'var(--white, #fff)', border: '1px solid var(--light-border, #e6e1d6)', borderRadius: '12px', padding: '22px 24px' }}>
                <Languages size={18} style={{ color: 'var(--gold-dark, #a8891e)', marginBottom: '12px' }} />
                <div style={{ ...eyebrow, marginBottom: '8px' }}>Oʻqitish tillari</div>
                <p style={{ color: '#555', fontSize: '0.88rem', lineHeight: 1.7 }}>
                  Oʻzbek, rus va qoraqalpoq tillari
                </p>
              </div>

            </div>

            {/* Rasmiy sayt — yana bir bor, aniq koʻrinadigan */}
            <a
              href={OFFICIAL_SITE}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginTop: '18px', background: 'var(--light-50, #f8f5ee)', border: '1px solid var(--light-border, #e6e1d6)', borderRadius: '12px', padding: '20px 26px', textDecoration: 'none', flexWrap: 'wrap' }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', color: 'var(--navy)' }}>
                <Globe size={20} style={{ color: 'var(--gold-dark, #a8891e)' }} />
                <span style={{ fontWeight: 600 }}>Rasmiy sayt: uzdknf.uz</span>
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--gold-dark, #a8891e)', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Tashrif buyurish <ExternalLink size={15} />
              </span>
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
