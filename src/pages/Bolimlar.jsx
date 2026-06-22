import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useTranslation } from '../contexts/LanguageContext';

const PHOTOS = {
  devonxona: '/bolimlar/axmedova-masuma.jpeg',
  arm: '/bolimlar/xodjaeva-shohida.jpeg',
  yoshlar: '/bolimlar/raxmanov-asatilla.png',
};

const T = {
  uz: {
    crumbHome: 'Bosh sahifa', crumbTuzilma: 'Tuzilma', crumbThis: 'Boʻlimlar',
    tag: 'Tuzilma', title: 'Maʼmuriy', emphasis: 'boʻlimlar',
    lead: 'Konservatoriyaning maʼmuriy va xizmat koʻrsatish boʻlimlari oʻquv jarayoni, ilmiy faoliyat va talabalar hayotini muvofiqlashtiruvchi qoʻllab-quvvatlovchi tuzilmalar tizimini tashkil etadi.',
    boss: 'Boshligʻi', more: 'Batafsil',
    items: [
      { to: '/bolimlar/devonxona-arxiv', img: PHOTOS.devonxona, name: 'Devonxona va arxiv boʻlimi', desc: 'Ish yuritish, ijro intizomi va hujjatlar aylanishini taʼminlaydi.', boss: 'Axmedova Maʼsuma Faxruddinovna' },
      { to: '/bolimlar/axborot-resurs-markazi', img: PHOTOS.arm, name: 'Axborot resurs markazi', desc: '150 000 dan ortiq musiqiy va badiiy adabiyot fondi, oʻquv zallari.', boss: 'Xodjaeva Shohida Bahramovna' },
      { to: '/bolimlar/yoshlar-manaviyat-marifat', img: PHOTOS.yoshlar, name: 'Yoshlar bilan ishlash, maʼnaviyat-maʼrifat boʻlimi', desc: 'Talabalar maʼnaviyati, tarbiyasi va ijodiy faoliyatini tashkil etadi.', boss: 'Raxmanov Asatilla Izzatilla oʻgʻli' },
    ],
  },
  ru: {
    crumbHome: 'Главная', crumbTuzilma: 'Структура', crumbThis: 'Отделы',
    tag: 'Структура', title: 'Административные', emphasis: 'отделы',
    lead: 'Административные и обслуживающие отделы консерватории образуют систему вспомогательных структур, координирующих учебный процесс, научную деятельность и студенческую жизнь.',
    boss: 'Руководитель', more: 'Подробнее',
    items: [
      { to: '/bolimlar/devonxona-arxiv', img: PHOTOS.devonxona, name: 'Канцелярия и архивный отдел', desc: 'Обеспечивает делопроизводство, исполнительскую дисциплину и документооборот.', boss: 'Ахмедова Маъсума Фахруддиновна' },
      { to: '/bolimlar/axborot-resurs-markazi', img: PHOTOS.arm, name: 'Информационно-ресурсный центр', desc: 'Фонд более 150 000 музыкальных и художественных изданий, учебные залы.', boss: 'Ходжаева Шохида Бахрамовна' },
      { to: '/bolimlar/yoshlar-manaviyat-marifat', img: PHOTOS.yoshlar, name: 'Отдел по работе с молодёжью, духовности и просветительства', desc: 'Организует духовное воспитание, просвещение и творческую деятельность студентов.', boss: 'Рахманов Асатилла Иззатилла угли' },
    ],
  },
  en: {
    crumbHome: 'Home', crumbTuzilma: 'Structure', crumbThis: 'Departments',
    tag: 'Structure', title: 'Administrative', emphasis: 'departments',
    lead: 'The administrative and support departments of the conservatory form a system of supporting structures that coordinate the educational process, research activities and student life.',
    boss: 'Head', more: 'Read more',
    items: [
      { to: '/bolimlar/devonxona-arxiv', img: PHOTOS.devonxona, name: 'Chancellery and Archive Department', desc: 'Ensures records management, executive discipline and document circulation.', boss: 'Akhmedova Maʼsuma Fakhruddinovna' },
      { to: '/bolimlar/axborot-resurs-markazi', img: PHOTOS.arm, name: 'Information Resource Center', desc: 'A fund of over 150,000 music and fiction publications, reading halls.', boss: 'Khodjaeva Shohida Bahramovna' },
      { to: '/bolimlar/yoshlar-manaviyat-marifat', img: PHOTOS.yoshlar, name: 'Department for Youth Affairs, Spirituality and Enlightenment', desc: 'Organizes the spiritual education, enlightenment and creative activities of students.', boss: 'Rakhmanov Asatilla Izzatilla oʻgʻli' },
    ],
  },
};

export default function Bolimlar() {
  const { lang } = useTranslation();
  const tr = T[lang] || T.uz;

  return (
    <main className="content-wrapper">
      <PageHero
        tag={tr.tag}
        title={tr.title}
        emphasis={tr.emphasis}
        breadcrumbs={[
          { label: tr.crumbHome, to: '/' },
          { label: tr.crumbTuzilma, to: '/tuzilma' },
          { label: tr.crumbThis },
        ]}
      />

      <section className="main-content">
        <div className="container">

          <article className="article-body" style={{ marginBottom: '40px' }}>
            <p className="lead">{tr.lead}</p>
          </article>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px', marginBottom: '60px',
          }}>
            {tr.items.map((it) => (
              <Link
                key={it.to}
                to={it.to}
                className="bolim-card"
                style={{
                  display: 'flex', flexDirection: 'column',
                  background: 'var(--white)', border: '1px solid var(--light-border)',
                  borderTop: '4px solid var(--gold)', padding: '32px 28px',
                  textDecoration: 'none', transition: 'box-shadow 0.3s, transform 0.3s',
                }}
                onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(26,26,56,0.12)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
                  <div style={{
                    width: 96, aspectRatio: '3 / 4', flexShrink: 0, borderRadius: '4px',
                    overflow: 'hidden', background: 'var(--cream)',
                    border: '1px solid var(--light-border)',
                  }}>
                    <img
                      src={it.img}
                      alt={it.boss}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                    />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{
                      fontSize: '0.62rem', fontWeight: 700, letterSpacing: '2px',
                      textTransform: 'uppercase', color: 'var(--gold-dark)',
                      fontFamily: 'var(--font-sans)', marginBottom: '6px',
                    }}>
                      {tr.boss}
                    </div>
                    <div style={{
                      fontSize: '0.86rem', color: 'var(--navy)', fontWeight: 600,
                      fontFamily: 'var(--font-sans)', lineHeight: 1.35,
                    }}>
                      {it.boss}
                    </div>
                  </div>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)', color: 'var(--navy)',
                  fontSize: '1.2rem', fontWeight: 500, marginBottom: '12px', lineHeight: 1.35,
                }}>
                  {it.name}
                </h3>
                <p style={{
                  fontSize: '0.92rem', color: '#555', lineHeight: 1.7,
                  fontFamily: 'var(--font-serif)', marginBottom: '20px', flex: 1,
                }}>
                  {it.desc}
                </p>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  fontSize: '0.7rem', fontWeight: 700, letterSpacing: '1.5px',
                  textTransform: 'uppercase', color: 'var(--navy)', fontFamily: 'var(--font-sans)',
                }}>
                  {tr.more} <ArrowRight size={14} strokeWidth={2} />
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
