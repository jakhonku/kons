import PageHero from '../components/PageHero';
import { MapPin, Clock, Phone } from 'lucide-react';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Talabalar uchun', to: '/talabalar' },
  { label: 'Registrator ofisi' },
];

const DOCUMENTS = [
  { name: "O'qish to'g'risida ma'lumotnoma", days: '1 ish kuni', fee: 'Bepul' },
  { name: "Talaba guvohnomasi (dublikat)", days: '3 ish kuni', fee: '25 000 so\'m' },
  { name: "Akademik ko'chirma (Transcript)", days: '5 ish kuni', fee: 'Bepul' },
  { name: "Xalqaro transcript (ingliz tilida)", days: '7 ish kuni', fee: '50 000 so\'m' },
  { name: "Akademik ta'til uchun ariza", days: '10 ish kuni', fee: 'Bepul' },
  { name: "Boshqa universitetga ko'chirish", days: '15 ish kuni', fee: 'Bepul' },
  { name: "Diplom (bitiruvchilar)", days: 'Bitiruvdan keyin 30 kun', fee: 'Bepul' },
  { name: "Diplom qo'shimchasi (Diploma Supplement)", days: '30 kun', fee: 'Bepul' },
];

export default function Registrator() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Talabalar uchun"
        title="Registrator"
        emphasis="Ofisi"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">

          {/* Location & hours */}
          <div className="g-3" style={{ marginBottom: '50px' }}>
            {[
              { icon: MapPin, title: 'Manzil',       lines: ['1-bino, 105-xona', '(Asosiy binoning 1-qavati)'] },
              { icon: Clock,  title: 'Ish vaqti',    lines: ['Dushanba – Juma: 09:00 – 17:00', 'Tushlik: 13:00 – 14:00'] },
              { icon: Phone,  title: "Bog'lanish",   lines: ['+998 71 234-56-90', 'registrator@konservatoriya.uz'] },
            ].map((item) => (
              <div key={item.title} style={{
                background: 'var(--white)', border: '1px solid var(--light-border)',
                borderTop: '3px solid var(--gold)', padding: '28px 24px',
              }}>
                <div style={{ color: 'var(--gold)', marginBottom: '12px' }}><item.icon size={28} strokeWidth={1.5} /></div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--navy)', marginBottom: '10px', fontWeight: 400 }}>{item.title}</h3>
                {item.lines.map((line) => (
                  <p key={line} style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.7, margin: 0 }}>{line}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Documents table */}
          <div className="section-divider" style={{ marginTop: 0 }}>
            <h2>Hujjatlar va muddatlar</h2>
          </div>

          <div style={{ overflowX: 'auto', marginBottom: '50px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--white)', border: '1px solid var(--light-border)', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ background: 'var(--navy)' }}>
                  {["Hujjat turi", "Tayyorlanish muddati", "To'lov"].map((h) => (
                    <th key={h} style={{ padding: '14px 20px', color: 'var(--gold-light)', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.7rem', letterSpacing: '1.5px', textTransform: 'uppercase', textAlign: 'left', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
                      {h}
                    </th>
                  ))}
                  <th style={{ padding: '14px 20px', color: 'var(--gold-light)', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.7rem', letterSpacing: '1.5px', textTransform: 'uppercase', textAlign: 'center' }}>
                    Ariza
                  </th>
                </tr>
              </thead>
              <tbody>
                {DOCUMENTS.map((doc, i) => (
                  <tr key={doc.name} style={{ borderBottom: '1px solid var(--light-border)', background: i % 2 === 0 ? 'var(--white)' : 'var(--light-50)' }}>
                    <td style={{ padding: '14px 20px', color: 'var(--navy)', fontWeight: 500, fontFamily: 'var(--font-sans)' }}>{doc.name}</td>
                    <td style={{ padding: '14px 20px', color: '#555', fontFamily: 'var(--font-sans)' }}>{doc.days}</td>
                    <td style={{ padding: '14px 20px', fontFamily: 'var(--font-sans)' }}>
                      <span style={{
                        padding: '3px 10px',
                        background: doc.fee === 'Bepul' ? 'rgba(26,26,56,0.06)' : 'rgba(168,137,30,0.1)',
                        color: doc.fee === 'Bepul' ? '#888' : 'var(--gold-dark)',
                        fontSize: '0.75rem', fontWeight: 600, borderRadius: '2px',
                      }}>
                        {doc.fee}
                      </span>
                    </td>
                    <td style={{ padding: '14px 20px', textAlign: 'center' }}>
                      <button style={{
                        padding: '5px 14px', background: 'transparent',
                        border: '1px solid var(--navy)', color: 'var(--navy)',
                        fontSize: '0.7rem', fontFamily: 'var(--font-sans)',
                        cursor: 'pointer', fontWeight: 600,
                      }}>
                        Ariza →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{
            background: 'var(--cream)', border: '1px solid var(--light-border)',
            borderLeft: '4px solid var(--gold)', padding: '20px 28px', marginBottom: '60px',
          }}>
            <p style={{ fontSize: '0.88rem', color: '#555', lineHeight: 1.75, fontFamily: 'var(--font-serif)', margin: 0 }}>
              Arizalar HEMIS tizimi orqali ham topshirilishi mumkin.
              Shoshilinch hollarda bevosita ofisga murojaat qiling.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
