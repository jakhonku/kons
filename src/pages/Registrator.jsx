import PageHero from '../components/PageHero';
import { MapPin, Clock, Phone } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const T = {
  uz: {
    crumbHome: 'Bosh sahifa',
    crumbTuzilma: 'Tuzilma',
    crumbBolimlar: 'Boʻlimlar',
    crumbThis: 'Registrator ofisi',
    heroTag: 'Tuzilma',
    heroTitle: 'Registrator',
    heroEm: 'Ofisi',
    addrTitle: 'Manzil',
    addrLines: ['227-xona', '(2-qavat)'],
    hoursTitle: 'Ish vaqti',
    hoursLines: ['Dushanba – Juma: 09:00 – 17:00', 'Tushlik: 13:00 – 14:00'],
    contactTitle: 'Bogʻlanish',
    contactLines: ['+998 71 234-56-90', 'registrator@konservatoriya.uz'],
    aboutHeading: 'Registrator ofisi haqida',
    aboutText: 'Registrator ofisi talabalar faoliyatini tashkil etish va boshqarish, ularga oʻquv jarayoniga oid xizmatlarni sifatli va oʻz vaqtida koʻrsatish bilan shugʻullanadi. Ofis xizmat koʻrsatish (front office) va maʼlumotlar bazasi (back office) boʻlimlaridan iborat.',
    tasks: [
      'Talabalarga oʻquv jarayoniga tegishli xizmatlarni tizim orqali koʻrsatish.',
      'Elektron taʼlim platformalaridan samarali foydalanishga koʻmaklashish.',
      'Oʻqishni koʻchirish, akademik taʼtilga chiqarish va qaytarish, tiklash jarayonlarini tashkil qilish.',
      'Yakuniy nazoratlar jadvali asosida oʻquv ishlarini tizim orqali nazorat qilish.',
      'Ilmiy, innovatsion faoliyat va akademik mobillik boʻyicha xizmat koʻrsatish.',
      'Oʻquv dasturlaridagi farqlarni bartaraf etish maqsadida qayta oʻqishni tashkil qilish.',
    ],
    staffHeading: 'Rahbariyat tarkibi',
    staff: [
      { name: 'Xabibullayev Qaxramon Rofiq oʻgʻli', role: 'Registrator ofisi boshligʻi', extra: 'dotsent', img: '/bolimlar/xabibullayev-qaxramon.jpeg' },
      { name: 'Tajitdinov Abdulla Aʼlamovich', role: 'Xizmat koʻrsatish (front office) boʻlimi boshligʻi', extra: 'oʻqituvchi', img: '/bolimlar/tajitdinov-abdulla.png' },
      { name: 'Toirov Akbar Zoir oʻgʻli', role: 'Maʼlumotlar bazasi (back office) boʻlimi boshligʻi', extra: 'katta oʻqituvchi', img: '/bolimlar/toirov-akbar.png' },
    ],
    note: 'Arizalar HEMIS tizimi orqali ham topshirilishi mumkin. Shoshilinch hollarda bevosita ofisga murojaat qiling.',
  },
  ru: {
    crumbHome: 'Главная',
    crumbTuzilma: 'Структура',
    crumbBolimlar: 'Отделы',
    crumbThis: 'Офис регистратора',
    heroTag: 'Структура',
    heroTitle: 'Офис',
    heroEm: 'регистратора',
    addrTitle: 'Адрес',
    addrLines: ['Кабинет 227', '(2-й этаж)'],
    hoursTitle: 'Время работы',
    hoursLines: ['Понедельник – Пятница: 09:00 – 17:00', 'Обед: 13:00 – 14:00'],
    contactTitle: 'Контакты',
    contactLines: ['+998 71 234-56-90', 'registrator@konservatoriya.uz'],
    aboutHeading: 'Об офисе регистратора',
    aboutText: 'Офис регистратора занимается организацией и управлением деятельностью студентов, качественным и своевременным оказанием им услуг, связанных с учебным процессом. Офис состоит из подразделений обслуживания (front office) и базы данных (back office).',
    tasks: [
      'Оказание студентам услуг, связанных с учебным процессом, через систему.',
      'Содействие эффективному использованию платформ электронного обучения.',
      'Организация перевода, оформления и возврата из академического отпуска, восстановления.',
      'Контроль учебной работы через систему на основе графика итогового контроля.',
      'Оказание услуг по научной, инновационной деятельности и академической мобильности.',
      'Организация повторного обучения для устранения разницы в учебных программах.',
    ],
    staffHeading: 'Состав руководства',
    staff: [
      { name: 'Хабибуллаев Кахрамон Рофик угли', role: 'Начальник офиса регистратора', extra: 'доцент', img: '/bolimlar/xabibullayev-qaxramon.jpeg' },
      { name: 'Таджитдинов Абдулла Аъламович', role: 'Начальник отдела обслуживания (front office)', extra: 'преподаватель', img: '/bolimlar/tajitdinov-abdulla.png' },
      { name: 'Тоиров Акбар Зоир угли', role: 'Начальник отдела базы данных (back office)', extra: 'старший преподаватель', img: '/bolimlar/toirov-akbar.png' },
    ],
    note: 'Заявления также можно подать через систему HEMIS. В срочных случаях обращайтесь непосредственно в офис.',
  },
  en: {
    crumbHome: 'Home',
    crumbTuzilma: 'Structure',
    crumbBolimlar: 'Departments',
    crumbThis: 'Registrar Office',
    heroTag: 'Structure',
    heroTitle: 'Registrar',
    heroEm: 'Office',
    addrTitle: 'Address',
    addrLines: ['Room 227', '(2nd floor)'],
    hoursTitle: 'Working hours',
    hoursLines: ['Monday – Friday: 09:00 – 17:00', 'Lunch: 13:00 – 14:00'],
    contactTitle: 'Contact',
    contactLines: ['+998 71 234-56-90', 'registrator@konservatoriya.uz'],
    aboutHeading: 'About the Registrar Office',
    aboutText: 'The Registrar Office organizes and manages student activities, providing them with high-quality and timely services related to the educational process. The office consists of front office (service) and back office (database) units.',
    tasks: [
      'Providing students with educational-process services through the system.',
      'Assisting in the effective use of e-learning platforms.',
      'Organizing transfers, academic leave and return, and reinstatement processes.',
      'Monitoring academic work through the system based on the final assessment schedule.',
      'Providing services for research, innovation activities and academic mobility.',
      'Organizing re-study to eliminate differences in curricula.',
    ],
    staffHeading: 'Management team',
    staff: [
      { name: 'Khabibullaev Qakhramon Rofiq oʻgʻli', role: 'Head of the Registrar Office', extra: 'associate professor', img: '/bolimlar/xabibullayev-qaxramon.jpeg' },
      { name: 'Tajitdinov Abdulla Aʼlamovich', role: 'Head of the front office unit', extra: 'lecturer', img: '/bolimlar/tajitdinov-abdulla.png' },
      { name: 'Toirov Akbar Zoir oʻgʻli', role: 'Head of the back office (database) unit', extra: 'senior lecturer', img: '/bolimlar/toirov-akbar.png' },
    ],
    note: 'Applications can also be submitted through the HEMIS system. In urgent cases, contact the office directly.',
  },
};

export default function Registrator() {
  const { lang } = useTranslation();
  const tr = T[lang] || T.uz;

  const BREADCRUMBS = [
    { label: tr.crumbHome, to: '/' },
    { label: tr.crumbTuzilma },
    { label: tr.crumbBolimlar, to: '/bolimlar' },
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

          {/* ── Ofis haqida ── */}
          <div className="section-divider" style={{ marginTop: 0 }}>
            <h2>{tr.aboutHeading}</h2>
          </div>

          <article className="article-body" style={{ marginBottom: '32px' }}>
            <p>{tr.aboutText}</p>
          </article>

          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {tr.tasks.map((task) => (
              <li key={task} style={{ background: 'var(--white)', border: '1px solid var(--light-border)', borderLeft: '3px solid var(--gold)', padding: '16px 22px', fontSize: '0.92rem', color: '#555', lineHeight: 1.6, fontFamily: 'var(--font-serif)' }}>
                {task}
              </li>
            ))}
          </ul>

          {/* Rahbariyat tarkibi */}
          <div className="section-divider">
            <h2>{tr.staffHeading}</h2>
          </div>

          <div className="g-3" style={{ marginBottom: '50px' }}>
            {tr.staff.map((p) => (
              <div key={p.name} style={{ background: 'var(--white)', border: '1px solid var(--light-border)', borderTop: '3px solid var(--gold)', padding: '24px 26px', textAlign: 'center' }}>
                <div style={{
                  width: 120, aspectRatio: '3 / 4', margin: '0 auto 16px', borderRadius: '6px',
                  overflow: 'hidden', background: 'var(--cream)', border: '1px solid var(--light-border)',
                }}>
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                  />
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: 'var(--navy)', marginBottom: '6px', lineHeight: 1.35 }}>{p.name}</div>
                <div style={{ fontSize: '0.82rem', color: '#555', fontFamily: 'var(--font-serif)', marginBottom: '8px' }}>{p.role}</div>
                <div style={{ fontSize: '0.66rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--gold-dark)', fontFamily: 'var(--font-sans)' }}>{p.extra}</div>
              </div>
            ))}
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
