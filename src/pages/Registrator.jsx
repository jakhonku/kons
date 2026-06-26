import PageHero from '../components/PageHero';
import { MapPin, Clock, Phone } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const T = {
  uz: {
    crumbHome: 'Bosh sahifa',
    crumbStudents: 'Talabalar uchun',
    crumbThis: 'Registrator ofisi',
    heroTag: 'Talabalar uchun',
    heroTitle: 'Registrator',
    heroEm: 'Ofisi',
    addrTitle: 'Manzil',
    addrLines: ['227-xona', '(2-qavat)'],
    hoursTitle: 'Ish vaqti',
    hoursLines: ['Dushanba – Juma: 09:00 – 17:00', 'Tushlik: 13:00 – 14:00'],
    contactTitle: 'Bogʻlanish',
    contactLines: ['+998 71 234-56-90', 'registrator@konservatoriya.uz'],
    tgKicker: 'Telegram orqali murojaat',
    tgTitle: 'Registrator boti',
    tgDesc: 'Hujjat buyurtma qilish va Registrator ofisiga murojaat yuborish uchun Telegram botimizdan foydalaning. Tez va qulay!',
    tgBtn: 'Registrator Ofisi | Konservatoriya',
    note: 'Arizalar HEMIS tizimi orqali ham topshirilishi mumkin. Shoshilinch hollarda bevosita ofisga murojaat qiling.',
  },
  ru: {
    crumbHome: 'Главная',
    crumbStudents: 'Для студентов',
    crumbThis: 'Офис регистратора',
    heroTag: 'Для студентов',
    heroTitle: 'Офис',
    heroEm: 'регистратора',
    addrTitle: 'Адрес',
    addrLines: ['Кабинет 227', '(2-й этаж)'],
    hoursTitle: 'Время работы',
    hoursLines: ['Понедельник – Пятница: 09:00 – 17:00', 'Обед: 13:00 – 14:00'],
    contactTitle: 'Контакты',
    contactLines: ['+998 71 234-56-90', 'registrator@konservatoriya.uz'],
    tgKicker: 'Обращение через Telegram',
    tgTitle: 'Бот регистратора',
    tgDesc: 'Используйте наш Telegram-бот для заказа документов и обращения в офис регистратора. Быстро и удобно!',
    tgBtn: 'Офис регистратора | Консерватория',
    note: 'Заявления также можно подать через систему HEMIS. В срочных случаях обращайтесь непосредственно в офис.',
  },
  en: {
    crumbHome: 'Home',
    crumbStudents: 'For students',
    crumbThis: 'Registrar Office',
    heroTag: 'For students',
    heroTitle: 'Registrar',
    heroEm: 'Office',
    addrTitle: 'Address',
    addrLines: ['Room 227', '(2nd floor)'],
    hoursTitle: 'Working hours',
    hoursLines: ['Monday – Friday: 09:00 – 17:00', 'Lunch: 13:00 – 14:00'],
    contactTitle: 'Contact',
    contactLines: ['+998 71 234-56-90', 'registrator@konservatoriya.uz'],
    tgKicker: 'Apply via Telegram',
    tgTitle: 'Registrar bot',
    tgDesc: 'Use our Telegram bot to order documents and contact the Registrar Office. Fast and convenient!',
    tgBtn: 'Registrar Office | Conservatory',
    note: 'Applications can also be submitted through the HEMIS system. In urgent cases, contact the office directly.',
  },
};

export default function Registrator() {
  const { lang } = useTranslation();
  const tr = T[lang] || T.uz;

  const BREADCRUMBS = [
    { label: tr.crumbHome, to: '/' },
    { label: tr.crumbStudents, to: '/talabalar' },
    { label: tr.crumbThis },
  ];

  return (
    <main className="content-wrapper">
      <PageHero
        tag={tr.heroTag}
        title={tr.heroTitle}
        emphasis={tr.heroEm}
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">

          {/* Location & hours */}
          <div className="g-3" style={{ marginBottom: '50px' }}>
            {[
              { icon: MapPin, title: tr.addrTitle,    lines: tr.addrLines },
              { icon: Clock,  title: tr.hoursTitle,   lines: tr.hoursLines },
              { icon: Phone,  title: tr.contactTitle, lines: tr.contactLines },
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

          {/* ── MA'LUMOT — Ofis haqida ── */}
          <div className="section-divider" style={{ marginTop: 0 }}>
            <h2>Registrator ofisi haqida</h2>
          </div>

          <article className="article-body" style={{ marginBottom: '32px' }}>
            <p>
              Registrator ofisi talabalar faoliyatini tashkil etish va boshqarish, ularga oʻquv
              jarayoniga oid xizmatlarni sifatli va oʻz vaqtida koʻrsatish bilan shugʻullanadi.
              Ofis xizmat koʻrsatish (front office) va maʼlumotlar bazasi (back office)
              boʻlimlaridan iborat.
            </p>
          </article>

          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {[
              'Talabalarga oʻquv jarayoniga tegishli xizmatlarni tizim orqali koʻrsatish.',
              'Elektron taʼlim platformalaridan samarali foydalanishga koʻmaklashish.',
              'Oʻqishni koʻchirish, akademik taʼtilga chiqarish va qaytarish, tiklash jarayonlarini tashkil qilish.',
              'Yakuniy nazoratlar jadvali asosida oʻquv ishlarini tizim orqali nazorat qilish.',
              'Ilmiy, innovatsion faoliyat va akademik mobillik boʻyicha xizmat koʻrsatish.',
              'Oʻquv dasturlaridagi farqlarni bartaraf etish maqsadida qayta oʻqishni tashkil qilish.',
            ].map((task) => (
              <li key={task} style={{ background: 'var(--white)', border: '1px solid var(--light-border)', borderLeft: '3px solid var(--gold)', padding: '16px 22px', fontSize: '0.92rem', color: '#555', lineHeight: 1.6, fontFamily: 'var(--font-serif)' }}>
                {task}
              </li>
            ))}
          </ul>

          {/* Rahbariyat tarkibi */}
          <div className="section-divider">
            <h2>Rahbariyat tarkibi</h2>
          </div>

          <div className="g-3" style={{ marginBottom: '50px' }}>
            {[
              { name: 'Xabibullayev Qaxramon Rofiq oʻgʻli', role: 'Registrator ofisi boshligʻi', extra: 'dotsent' },
              { name: 'Tajitdinov Abdulla Aʼlamovich', role: 'Xizmat koʻrsatish (front office) boʻlimi boshligʻi', extra: 'oʻqituvchi' },
              { name: 'Toirov Akbar Zoir oʻgʻli', role: 'Maʼlumotlar bazasi (back office) boʻlimi boshligʻi', extra: 'katta oʻqituvchi' },
            ].map((p) => (
              <div key={p.name} style={{ background: 'var(--white)', border: '1px solid var(--light-border)', borderTop: '3px solid var(--gold)', padding: '24px 26px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: 'var(--navy)', marginBottom: '6px', lineHeight: 1.35 }}>{p.name}</div>
                <div style={{ fontSize: '0.82rem', color: '#555', fontFamily: 'var(--font-serif)', marginBottom: '8px' }}>{p.role}</div>
                <div style={{ fontSize: '0.66rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--gold-dark)', fontFamily: 'var(--font-sans)' }}>{p.extra}</div>
              </div>
            ))}
          </div>

          {/* ── Telegram bot murojaat bloki ── */}
          <div style={{
            background: 'linear-gradient(135deg, #0f1a2e 0%, #162840 100%)',
            border: '1px solid rgba(34,158,217,0.3)',
            borderLeft: '4px solid #229ED9',
            padding: '28px 32px',
            marginBottom: '30px',
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
            flexWrap: 'wrap',
          }}>
            <div style={{
              width: '56px', height: '56px', borderRadius: '50%',
              background: '#229ED9', display: 'flex', alignItems: 'center',
              justifyContent: 'center', flexShrink: 0,
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </div>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '3px', color: '#229ED9', marginBottom: '6px', textTransform: 'uppercase' }}>
                {tr.tgKicker}
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.2rem', fontWeight: 500, margin: '0 0 8px' }}>
                {tr.tgTitle}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, margin: 0 }}>
                {tr.tgDesc}
              </p>
            </div>
            <a
              href="https://t.me/Konservatoriya_Registrar_Bot"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: '#229ED9', color: '#fff',
                padding: '13px 26px', flexShrink: 0,
                fontSize: '0.8rem', fontWeight: 700,
                letterSpacing: '1px', textTransform: 'uppercase',
                textDecoration: 'none', transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#1a85b8'}
              onMouseLeave={e => e.currentTarget.style.background = '#229ED9'}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              {tr.tgBtn}
            </a>
          </div>

          <div style={{
            background: 'var(--cream)', border: '1px solid var(--light-border)',
            borderLeft: '4px solid var(--gold)', padding: '20px 28px', marginBottom: '60px',
          }}>
            <p style={{ fontSize: '0.88rem', color: '#555', lineHeight: 1.75, fontFamily: 'var(--font-serif)', margin: 0 }}>
              {tr.note}
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
