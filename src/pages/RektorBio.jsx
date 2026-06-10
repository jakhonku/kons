import PageHero from '../components/PageHero';
import { Mail, Phone, Award, Calendar, GraduationCap, MapPin } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Konservatoriya', to: '/tuzilma' },
  { label: 'Rahbariyat', to: '/rahbariyat' },
  { label: 'Rektor' },
];

export default function RektorBio() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Konservatoriya Rahbariyati"
        title="Rektor"
        emphasis="Biografiyasi"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">
          <div className="bio-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '60px', alignItems: 'start' }}>
            
            {/* Chap tomon: Rasm va kontaktlar */}
            <div className="bio-sidebar reveal">
              <div style={{ 
                position: 'relative', 
                borderRadius: '8px', 
                overflow: 'hidden', 
                boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                marginBottom: '30px'
              }}>
                <img 
                  src="/images/rahbariyat/rektor.jpg" 
                  alt="Kamoliddin Urinbayev" 
                  style={{ width: '100%', display: 'block' }} 
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(8,8,21,0.9), transparent)',
                  padding: '20px',
                  color: '#fff'
                }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>Kamoliddin Urinbayev</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--gold-light)', textTransform: 'uppercase', letterSpacing: '1px' }}>Rektor</p>
                </div>
              </div>

              <div className="bio-contact-card" style={{ background: 'var(--bg-surface)', padding: '25px', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                <h4 style={{ color: 'var(--gold)', marginBottom: '20px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Aloqa maʼlumotlari</h4>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(201,168,76,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)' }}>
                      <Phone size={14} />
                    </div>
                    <a href="tel:+998712345678" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.9rem' }}>+998 71 234-56-78</a>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(201,168,76,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)' }}>
                      <Mail size={14} />
                    </div>
                    <a href="mailto:rektor@konservatoriya.uz" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.9rem' }}>rektor@konservatoriya.uz</a>
                  </div>



                </div>
              </div>
            </div>

            {/* Oʻng tomon: Matnli maʼlumotlar */}
            <div className="bio-content reveal reveal-delay-1">
              <div style={{ marginBottom: '40px' }}>
                <span className="section-tag" style={{ color: 'var(--gold-dark)' }}>Biografiya</span>
                <h2 style={{ fontSize: '2.5rem', marginTop: '10px', marginBottom: '20px', color: 'var(--navy)' }}>
                  Urinbayev <span style={{ color: 'var(--gold-dark)' }}>Kamoliddin Turdimuratovich</span>
                </h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--gold-dark)', fontWeight: 600, marginBottom: '30px' }}>
                  Oʻzbekiston xalq artisti, professor
                </p>
                <div className="ornament">
                  <div className="ornament-diamond" style={{ background: 'var(--gold-dark)' }} />
                </div>
              </div>

              <div className="bio-text" style={{ color: '#444', lineHeight: 1.8, fontSize: '1rem' }}>
                <p style={{ marginBottom: '20px' }}>
                  Kamoliddin Urinbayev 1985-yilda Toshkent shahrida tugʻilgan. Oʻzbekiston davlat konservatoriyasini hamda P.I.Chaykovskiy nomidagi Moskva davlat konservatoriyasini tamomlagan. 
                </p>
                <p style={{ marginBottom: '20px' }}>
                  U taniqli dirijyor, Oʻzbekiston davlat simfonik orkestri asoschisi va badiiy rahbari hisoblanadi. Uning rahbarligida orkestr dunyoning nufuzli sahnalarida, jumladan Berlin filarmoniyasi, "Konzerthaus" va boshqa joylarda muvaffaqiyatli konsertlar bergan.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  2020-yildan buyon Oʻzbekiston davlat konservatoriyasi rektori lavozimida faoliyat yuritib kelmoqda. Uning rahbarligi davrida konservatoriyada oʻquv jarayoni raqamlashtirildi, xalqaro hamkorlik aloqalari kengaytirildi va talabalar uchun yangi ijodiy imkoniyatlar yaratildi.
                </p>

                <div style={{ marginTop: '50px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
                  <div style={{ padding: '20px', borderLeft: '3px solid var(--gold)', background: 'rgba(26,26,56,0.03)' }}>
                    <h5 style={{ color: 'var(--navy)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <GraduationCap size={16} /> Taʼlim
                    </h5>
                    <p style={{ fontSize: '0.9rem', color: '#666' }}>Oʻzbekiston davlat konservatoriyasi, Moskva davlat konservatoriyasi.</p>
                  </div>
                  <div style={{ padding: '20px', borderLeft: '3px solid var(--gold)', background: 'rgba(26,26,56,0.03)' }}>
                    <h5 style={{ color: 'var(--navy)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Award size={16} /> Unvonlar
                    </h5>
                    <p style={{ fontSize: '0.9rem', color: '#666' }}>Oʻzbekiston xalq artisti, "Doʻstlik" ordeni sohibi.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
