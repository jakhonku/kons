import PageHero from '../components/PageHero';
import { Clock, MapPin } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const COLORS = ['var(--gold-dark)', 'var(--navy)', '#555'];

const T = {
  uz: {
    crumbHome: 'Bosh sahifa', crumbStudents: 'Talabalar uchun', crumbThis: 'Toʻgaraklar',
    heroTag: 'Talabalar uchun', heroTitle: 'Toʻgaraklar va', heroEm: 'Faoliyatlar',
    leaderLabel: 'Rahbar',
    sections: [
      ['Ijodiy toʻgaraklar', [
        ['Kamera musiqa ansambli', 'Seshanba, Payshanba 16:00', 'Katta zal', 'Prof. Karimov Sh.'],
        ['Tarix musiqa klubi', 'Chorshanba 15:00', '207-xona', 'Dots. Mirzayeva G.'],
        ['Elektron musiqa studiyasi', 'Juma 14:00', 'Studiya (yertoʻla)', 'Oʻqit. Nazarov A.'],
        ['Kompozitsiya workshopi', 'Shanba 10:00', '206-xona', 'Prof. Toshmatov B.'],
      ]],
      ['Madaniy va ijtimoiy toʻgaraklar', [
        ['KVN jamoasi', 'Dushanba 17:30', 'Aktyorlik sinfxonasi', 'Talabalar kengashi'],
        ['Xalqaro talabalar klubi', 'Payshanba 16:30', '202-xona', 'Xalqaro boʻlim'],
        ['Ekologiya va yashil hayot', 'Seshanba 17:00', 'Botanika bogʻi', 'Tashabbuskor guruh'],
      ]],
      ['Sport toʻgaraklar', [
        ['Shaxmat toʻgaragi', 'Har kuni 12:30', 'Talabalar klubi', 'Ust. Xoliqov J.'],
        ['Ping-pong', 'Seshanba, Juma 17:00', 'Sport zali', 'Jismoniy tarbiya kafedrasi'],
        ['Yoga va meditatsiya', 'Dushanba, Chorshanba 07:30', 'Sport zali', 'Inst. Qodirov M.'],
      ]],
    ],
    notePre: 'Yangi toʻgarak ochish yoki mavjudiga qoʻshilish uchun ',
    noteBold: 'Talabalar kengashi',
    notePost: 'ga murojaat qiling — 1-bino, 112-xona. Barcha toʻgaraklar ',
    noteFree: 'bepul',
    noteEnd: '.',
  },
  ru: {
    crumbHome: 'Главная', crumbStudents: 'Для студентов', crumbThis: 'Кружки',
    heroTag: 'Для студентов', heroTitle: 'Кружки и', heroEm: 'занятия',
    leaderLabel: 'Руководитель',
    sections: [
      ['Творческие кружки', [
        ['Камерный музыкальный ансамбль', 'Вторник, Четверг 16:00', 'Большой зал', 'Проф. Каримов Ш.'],
        ['Клуб истории музыки', 'Среда 15:00', 'Кабинет 207', 'Доц. Мирзаева Г.'],
        ['Студия электронной музыки', 'Пятница 14:00', 'Студия (подвал)', 'Преп. Назаров А.'],
        ['Мастерская композиции', 'Суббота 10:00', 'Кабинет 206', 'Проф. Тошматов Б.'],
      ]],
      ['Культурные и социальные кружки', [
        ['Команда КВН', 'Понедельник 17:30', 'Класс актёрского мастерства', 'Студенческий совет'],
        ['Клуб иностранных студентов', 'Четверг 16:30', 'Кабинет 202', 'Международный отдел'],
        ['Экология и зелёная жизнь', 'Вторник 17:00', 'Ботанический сад', 'Инициативная группа'],
      ]],
      ['Спортивные кружки', [
        ['Шахматный кружок', 'Ежедневно 12:30', 'Студенческий клуб', 'Маст. Холиков Ж.'],
        ['Пинг-понг', 'Вторник, Пятница 17:00', 'Спортзал', 'Кафедра физвоспитания'],
        ['Йога и медитация', 'Понедельник, Среда 07:30', 'Спортзал', 'Инстр. Кодиров М.'],
      ]],
    ],
    notePre: 'Чтобы открыть новый кружок или присоединиться к существующему, обращайтесь в ',
    noteBold: 'Студенческий совет',
    notePost: ' — здание 1, кабинет 112. Все кружки ',
    noteFree: 'бесплатны',
    noteEnd: '.',
  },
  en: {
    crumbHome: 'Home', crumbStudents: 'For students', crumbThis: 'Clubs',
    heroTag: 'For students', heroTitle: 'Clubs and', heroEm: 'activities',
    leaderLabel: 'Leader',
    sections: [
      ['Creative clubs', [
        ['Chamber music ensemble', 'Tuesday, Thursday 16:00', 'Grand hall', 'Prof. Karimov Sh.'],
        ['Music history club', 'Wednesday 15:00', 'Room 207', 'Assoc. Prof. Mirzayeva G.'],
        ['Electronic music studio', 'Friday 14:00', 'Studio (basement)', 'Lect. Nazarov A.'],
        ['Composition workshop', 'Saturday 10:00', 'Room 206', 'Prof. Toshmatov B.'],
      ]],
      ['Cultural and social clubs', [
        ['KVN team', 'Monday 17:30', 'Acting classroom', 'Student council'],
        ['International students club', 'Thursday 16:30', 'Room 202', 'International department'],
        ['Ecology and green life', 'Tuesday 17:00', 'Botanical garden', 'Initiative group'],
      ]],
      ['Sports clubs', [
        ['Chess club', 'Daily 12:30', 'Student club', 'Master Xoliqov J.'],
        ['Ping-pong', 'Tuesday, Friday 17:00', 'Gym', 'Physical Education Department'],
        ['Yoga and meditation', 'Monday, Wednesday 07:30', 'Gym', 'Instr. Qodirov M.'],
      ]],
    ],
    notePre: 'To open a new club or join an existing one, contact the ',
    noteBold: 'Student council',
    notePost: ' — building 1, room 112. All clubs are ',
    noteFree: 'free',
    noteEnd: '.',
  },
};

export default function Togaraklar() {
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

          {tr.sections.map(([heading, items], si) => (
            <div key={heading}>
              <div className="section-divider" style={{ marginTop: si === 0 ? 0 : undefined }}>
                <h2>{heading}</h2>
              </div>

              <div className="g-2" style={{ marginBottom: '50px' }}>
                {items.map(([name, schedule, room, leader]) => (
                  <div key={name} style={{
                    background: 'var(--white)', border: '1px solid var(--light-border)',
                    borderLeft: `4px solid ${COLORS[si]}`, padding: '24px 28px',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    transition: 'box-shadow 0.3s',
                    flexWrap: 'wrap', gap: '16px',
                  }}
                    onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 6px 24px rgba(26,26,56,0.09)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    <div style={{ flex: 1, minWidth: 200 }}>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: 'var(--navy)', marginBottom: '6px', fontWeight: 400 }}>
                        {name}
                      </h3>
                      <div style={{ fontSize: '0.75rem', color: '#888', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><Clock size={12} strokeWidth={2} />{schedule}</span>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><MapPin size={12} strokeWidth={2} />{room}</span>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: '#bbb', marginBottom: '2px' }}>{tr.leaderLabel}</div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--navy)', fontWeight: 500 }}>{leader}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={{
            background: 'var(--cream)', border: '1px solid var(--light-border)',
            borderLeft: '4px solid var(--gold)', padding: '22px 30px', marginBottom: '60px',
          }}>
            <p style={{ fontSize: '0.88rem', color: '#555', lineHeight: 1.75, fontFamily: 'var(--font-serif)', margin: 0 }}>
              {tr.notePre}<strong style={{ color: 'var(--navy)' }}>{tr.noteBold}</strong>{tr.notePost}<strong style={{ color: 'var(--navy)' }}>{tr.noteFree}</strong>{tr.noteEnd}
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
