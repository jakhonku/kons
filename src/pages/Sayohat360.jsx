import { useState } from 'react';
import PageHero from '../components/PageHero';
import { Maximize2, MapPin, RotateCcw } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Axborot xizmati' },
  { label: '360° Virtual Sayohat' },
];

const LOCATIONS = [
  {
    id: 'main',
    label: 'Asosiy bino',
    desc: 'Konservatoriyaning bosh kirish va foye qismi',
    url: 'https://uzbekistan360.uz/ru/location/central-asian-universityx1X',
  },
  {
    id: 'hall',
    label: 'Katta konsert zali',
    desc: "600 o\u2018rinli asosiy konsert zali",
    url: 'https://uzbekistan360.uz/ru/location/central-asian-universityx1X',
  },
  {
    id: 'library',
    label: 'Kutubxona',
    desc: 'Nota bazasi va elektron resurslari',
    url: 'https://uzbekistan360.uz/ru/location/central-asian-universityx1X',
  },
  {
    id: 'yard',
    label: 'Kampus hovlisi',
    desc: "Yashil hovli va dam olish hududi",
    url: 'https://uzbekistan360.uz/ru/location/central-asian-universityx1X',
  },
];

export default function Sayohat360() {
  const [active, setActive] = useState(LOCATIONS[0]);
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <main className="content-wrapper">
      <PageHero
        tag="Axborot xizmati"
        title="360°"
        emphasis="Virtual Sayohat"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content" style={{ paddingBottom: 60 }}>
        <div className="container">

          {/* Intro */}
          <article className="article-body" style={{ marginBottom: '32px' }}>
            <p className="lead">
              Konservatoriyamizni virtual ravishda ko'rib chiqing — asosiy binomizdan tortib
              konsert zallarigacha 360° panoramik ko'rinishda sayohat qiling.
            </p>
          </article>

          {/* Location tabs */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
            {LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setActive(loc)}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '10px 18px', border: '1px solid',
                  borderColor: active.id === loc.id ? 'var(--gold)' : 'var(--light-border)',
                  background: active.id === loc.id ? 'var(--gold)' : 'var(--white)',
                  color: active.id === loc.id ? '#08081a' : 'var(--navy)',
                  fontFamily: 'var(--font-sans)', fontSize: '0.75rem',
                  fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase',
                  cursor: 'pointer', transition: '0.2s',
                }}
              >
                <MapPin size={13} strokeWidth={2} />
                {loc.label}
              </button>
            ))}
          </div>

          {/* Active location info */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', gap: '12px', flexWrap: 'wrap' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--navy)', fontWeight: 400, marginBottom: '4px' }}>
                {active.label}
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#888', margin: 0 }}>{active.desc}</p>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => setActive({ ...active })}
                title="Qayta yuklash"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 14px', border: '1px solid var(--light-border)', background: 'var(--white)', color: 'var(--navy)', fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer', transition: '0.2s' }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--light-border)'; }}
              >
                <RotateCcw size={13} strokeWidth={2} /> Qayta yuklash
              </button>
              <a
                href={active.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 14px', border: '1px solid var(--gold)', background: 'var(--gold)', color: '#08081a', fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', textDecoration: 'none', transition: '0.2s' }}
              >
                <Maximize2 size={13} strokeWidth={2} /> To'liq ekran
              </a>
            </div>
          </div>

          {/* 360 iframe */}
          <div style={{ width: '100%', position: 'relative', background: '#08081a', border: '1px solid var(--light-border)', overflow: 'hidden', marginBottom: '40px' }}>
            <div style={{ paddingBottom: '56.25%', position: 'relative' }}>
              <iframe
                key={active.id}
                src={active.url}
                title={`360° Virtual Sayohat — ${active.label}`}
                allow="fullscreen; gyroscope; accelerometer"
                allowFullScreen
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  border: 'none',
                }}
              />
            </div>
          </div>

          {/* Location cards */}
          <div className="section-divider" style={{ marginTop: 0 }}>
            <h2>Barcha manzillar</h2>
          </div>

          <div className="g-4" style={{ marginBottom: '20px' }}>
            {LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setActive(loc)}
                style={{
                  background: active.id === loc.id ? 'var(--navy)' : 'var(--white)',
                  border: `1px solid ${active.id === loc.id ? 'var(--navy)' : 'var(--light-border)'}`,
                  borderTop: `3px solid ${active.id === loc.id ? 'var(--gold)' : 'var(--light-border)'}`,
                  padding: '24px 20px', textAlign: 'left', cursor: 'pointer',
                  transition: '0.25s', width: '100%',
                }}
                onMouseOver={(e) => { if (active.id !== loc.id) { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.borderTopColor = 'var(--gold)'; } }}
                onMouseOut={(e) => { if (active.id !== loc.id) { e.currentTarget.style.borderColor = 'var(--light-border)'; e.currentTarget.style.borderTopColor = 'var(--light-border)'; } }}
              >
                <div style={{ color: active.id === loc.id ? 'var(--gold)' : 'var(--gold)', marginBottom: '10px' }}>
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: active.id === loc.id ? 'var(--white)' : 'var(--navy)', marginBottom: '6px', fontWeight: 400 }}>{loc.label}</div>
                <div style={{ fontSize: '0.75rem', color: active.id === loc.id ? 'rgba(240,237,232,0.6)' : '#888', lineHeight: 1.5 }}>{loc.desc}</div>
              </button>
            ))}
          </div>

          <p style={{ fontSize: '0.75rem', color: '#aaa', textAlign: 'center', fontFamily: 'var(--font-sans)', marginTop: '16px' }}>
            360° virtual sayohat texnologiyasi: <a href="https://uzbekistan360.uz" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold-dark)' }}>uzbekistan360.uz</a>
          </p>

        </div>
      </section>
    </main>
  );
}
