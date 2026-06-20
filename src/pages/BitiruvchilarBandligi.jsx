import InfoPage from '../components/InfoPage';
import { useTranslation } from '../contexts/LanguageContext';

const T = {
  uz: {
    crumbHome: 'Bosh sahifa', crumbTalim: 'Taʼlim', crumbThis: 'Bitiruvchilar bandligi',
    tag: 'Career', title: 'Bitiruvchilar', emphasis: 'bandligi',
    lead: 'Career markazi bitiruvchilarni mehnat bozoriga tayyorlash, ish oʻrinlari bilan taʼminlash va kasbiy oʻsishini qoʻllab-quvvatlash bilan shugʻullanadi. Markazning xizmatlari konservatoriya talabalari va bitiruvchilari uchun bepul.',
    stats: [{ value: '92%', label: '6 oy ichida bandlik' }, { value: '180+', label: 'Hamkor tashkilot' }, { value: '350+', label: 'Yillik bitiruvchi' }],
    h1: 'Career markazining xizmatlari',
    items: [
      ['Vakansiyalar bazasi', 'Oʻzbekiston va xorijiy musiqa muassasalari, teatrlar, taʼlim markazlari vakansiyalari.'],
      ['CV va portfolio tayyorlash', 'Kasbiy CV, motivatsion xat va ijodiy portfoliolar yaratishda yordam.'],
      ['Suhbatga tayyorgarlik', 'Mehnat suhbatlari simulyatsiyalari va kasbiy intervyu mahoratini oshirish.'],
      ['Mentorlik dasturi', 'Tajribali bitiruvchilar va xalqaro mutaxassislar bilan jonli aloqalar.'],
      ['Stajirovkalar', 'Yetakchi musiqa muassasalarida amaliyot oʻtash dasturlari.'],
      ['Tadbirkorlik akademiyasi', 'Mustaqil ijodiy biznes ochish boʻyicha treninglar va grantlar.'],
    ],
    h2: 'Bitiruvchilar ish oʻrinlari (asosiy yoʻnalishlar)',
    tableHead: ['Sektor', 'Asosiy ish beruvchilar', 'Bitiruvchi ulushi'],
    rows: [
      ['Davlat teatrlari va kontsert tashkilotlari', 'Davlat akademik teatri, Filarmoniya, Milliy orkestr', '32%'],
      ['Taʼlim muassasalari', 'OTM, kollej, musiqa maktabi', '28%'],
      ['Xususiy ijodiy faoliyat', 'Solo karyera, mustaqil loyihalar', '18%'],
      ['Xalqaro tashkilotlar', 'Xorijiy orkestr va teatrlar', '12%'],
      ['Studio va prodyuserlik', 'Yozish studiyasi, audio prodyuser', '10%'],
    ],
    h3: 'Faol vakansiyalar',
    cards: [
      ['Toshkent', 'Birinchi violinist', 'Oʻzbekiston Davlat akademik orkestri uchun.', 'Muddat: 30.06.2026'],
      ['Buxoro', 'Solist xonanda', 'Buxoro davlat opera teatri.', 'Muddat: 15.07.2026'],
      ['Samarqand', 'Musiqa pedagogi', 'Samarqand viloyati musiqa maktablari uchun.', 'Muddat: 25.07.2026'],
    ],
    contactTitle: 'Career markaziga murojaat',
    responsible: 'Yusupova Madina Otabekovna',
    address: '1-bino, 215-xona',
    hours: 'Dushanba – Juma, 10:00 – 17:00',
  },
  ru: {
    crumbHome: 'Главная', crumbTalim: 'Образование', crumbThis: 'Трудоустройство выпускников',
    tag: 'Career', title: 'Трудоустройство', emphasis: 'выпускников',
    lead: 'Центр карьеры занимается подготовкой выпускников к рынку труда, обеспечением рабочими местами и поддержкой их профессионального роста. Услуги центра бесплатны для студентов и выпускников консерватории.',
    stats: [{ value: '92%', label: 'Трудоустройство за 6 месяцев' }, { value: '180+', label: 'Партнёрских организаций' }, { value: '350+', label: 'Выпускников в год' }],
    h1: 'Услуги центра карьеры',
    items: [
      ['База вакансий', 'Вакансии музыкальных учреждений, театров и образовательных центров Узбекистана и зарубежья.'],
      ['Подготовка CV и портфолио', 'Помощь в создании профессионального CV, мотивационного письма и творческого портфолио.'],
      ['Подготовка к собеседованию', 'Симуляции собеседований и повышение навыков профессионального интервью.'],
      ['Программа менторства', 'Живое общение с опытными выпускниками и международными специалистами.'],
      ['Стажировки', 'Программы прохождения практики в ведущих музыкальных учреждениях.'],
      ['Академия предпринимательства', 'Тренинги и гранты по открытию самостоятельного творческого бизнеса.'],
    ],
    h2: 'Места работы выпускников (основные направления)',
    tableHead: ['Сектор', 'Основные работодатели', 'Доля выпускников'],
    rows: [
      ['Государственные театры и концертные организации', 'Государственный академический театр, Филармония, Национальный оркестр', '32%'],
      ['Образовательные учреждения', 'Вузы, колледжи, музыкальные школы', '28%'],
      ['Частная творческая деятельность', 'Сольная карьера, самостоятельные проекты', '18%'],
      ['Международные организации', 'Зарубежные оркестры и театры', '12%'],
      ['Студии и продюсирование', 'Студия звукозаписи, аудиопродюсер', '10%'],
    ],
    h3: 'Активные вакансии',
    cards: [
      ['Ташкент', 'Первый скрипач', 'Для Государственного академического оркестра Узбекистана.', 'Срок: 30.06.2026'],
      ['Бухара', 'Солист-вокалист', 'Бухарский государственный оперный театр.', 'Срок: 15.07.2026'],
      ['Самарканд', 'Педагог по музыке', 'Для музыкальных школ Самаркандской области.', 'Срок: 25.07.2026'],
    ],
    contactTitle: 'Обращение в центр карьеры',
    responsible: 'Юсупова Мадина Отабековна',
    address: 'Здание 1, кабинет 215',
    hours: 'Понедельник – Пятница, 10:00 – 17:00',
  },
  en: {
    crumbHome: 'Home', crumbTalim: 'Education', crumbThis: 'Graduate employment',
    tag: 'Career', title: 'Graduate', emphasis: 'employment',
    lead: 'The Career Center prepares graduates for the labour market, provides employment and supports their professional growth. The center’s services are free for students and graduates of the conservatory.',
    stats: [{ value: '92%', label: 'Employment within 6 months' }, { value: '180+', label: 'Partner organizations' }, { value: '350+', label: 'Graduates per year' }],
    h1: 'Career Center services',
    items: [
      ['Vacancy database', 'Vacancies of music institutions, theatres and educational centres in Uzbekistan and abroad.'],
      ['CV and portfolio preparation', 'Help in creating a professional CV, motivation letter and creative portfolio.'],
      ['Interview preparation', 'Job interview simulations and improvement of professional interview skills.'],
      ['Mentorship programme', 'Live communication with experienced graduates and international specialists.'],
      ['Internships', 'Internship programmes at leading music institutions.'],
      ['Entrepreneurship academy', 'Trainings and grants for starting an independent creative business.'],
    ],
    h2: 'Graduate workplaces (main areas)',
    tableHead: ['Sector', 'Main employers', 'Share of graduates'],
    rows: [
      ['State theatres and concert organizations', 'State Academic Theatre, Philharmonic, National Orchestra', '32%'],
      ['Educational institutions', 'Universities, colleges, music schools', '28%'],
      ['Private creative activity', 'Solo career, independent projects', '18%'],
      ['International organizations', 'Foreign orchestras and theatres', '12%'],
      ['Studios and producing', 'Recording studio, audio producer', '10%'],
    ],
    h3: 'Active vacancies',
    cards: [
      ['Tashkent', 'First violinist', 'For the State Academic Orchestra of Uzbekistan.', 'Deadline: 30.06.2026'],
      ['Bukhara', 'Solo singer', 'Bukhara State Opera Theatre.', 'Deadline: 15.07.2026'],
      ['Samarkand', 'Music teacher', 'For the music schools of the Samarkand region.', 'Deadline: 25.07.2026'],
    ],
    contactTitle: 'Contact the Career Center',
    responsible: 'Yusupova Madina Otabekovna',
    address: 'Building 1, room 215',
    hours: 'Monday – Friday, 10:00 – 17:00',
  },
};

export default function BitiruvchilarBandligi() {
  const { lang } = useTranslation();
  const tr = T[lang] || T.uz;

  const BREADCRUMBS = [
    { label: tr.crumbHome, to: '/' },
    { label: tr.crumbTalim },
    { label: tr.crumbThis },
  ];

  return (
    <InfoPage
      tag={tr.tag}
      title={tr.title}
      emphasis={tr.emphasis}
      breadcrumbs={BREADCRUMBS}
      lead={tr.lead}
      stats={tr.stats}
      sections={[
        { heading: tr.h1, items: tr.items.map(([title, desc]) => ({ title, desc })) },
        { heading: tr.h2, table: { head: tr.tableHead, rows: tr.rows } },
        { heading: tr.h3, cards: tr.cards.map(([tag, title, desc, meta]) => ({ tag, title, desc, meta })) },
      ]}
      contact={{
        title: tr.contactTitle,
        responsible: tr.responsible,
        phone: '+998 71 234-56-99',
        email: 'career@konservatoriya.uz',
        address: tr.address,
        hours: tr.hours,
      }}
    />
  );
}
