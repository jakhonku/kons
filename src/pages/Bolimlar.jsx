import InfoPage from '../components/InfoPage';
import { useTranslation } from '../contexts/LanguageContext';

const T = {
  uz: {
    crumbHome: 'Bosh sahifa', crumbTuzilma: 'Tuzilma', crumbThis: 'Boʻlimlar',
    tag: 'Tuzilma', title: 'Maʼmuriy', emphasis: 'boʻlimlar',
    lead: 'Konservatoriyaning maʼmuriy va xizmat koʻrsatish boʻlimlari oʻquv jarayoni, ilmiy faoliyat va talabalar hayotini muvofiqlashtiruvchi qoʻllab-quvvatlovchi tuzilmalar tizimini tashkil etadi.',
    h1: 'Oʻquv-uslubiy boʻlimlar',
    h2: 'Ilmiy va xalqaro boʻlimlar',
    h3: 'Maʼmuriy va xizmat boʻlimlari',
    boss: 'Boshliq', chiefAcc: 'Bosh hisobchi',
    c: [
      'Oʻquv-metodik boʻlim', 'Oʻquv rejalari, sillabuslar va metodik taʼminotni boshqaradi.',
      'Bakalavriat boʻlimi', 'Bakalavr taʼlimining barcha jarayonlarini muvofiqlashtiradi.',
      'Magistratura boʻlimi', 'Magistratura va doktoranturani boshqaradi.',
      'Ilmiy-tadqiqot markazi', 'Ilmiy loyihalar, grantlar va konferensiyalarni boshqaradi.',
      'Xalqaro aloqalar boʻlimi', 'Xorijiy hamkorlar va talabalar mobilligini muvofiqlashtiradi.',
      'Ilmiy nashrlar va kutubxona', 'Ilmiy jurnallar, nashrlar va elektron resurslar.',
      'Yuridik boʻlim', 'Huquqiy hujjatlar, shartnomalar va davlat hujjatlari.',
      'Kadrlar boʻlimi', 'Xodimlar tanlovi, attestatsiya va malaka oshirish.',
      'Moliya-buxgalteriya boʻlimi', 'Byudjet, ish haqi va moliyaviy hisobot.',
      'Axborot texnologiyalari boʻlimi', 'IT infratuzilma, HEMIS, veb-resurslar.',
      'Iqtisodiy-rejalashtirish boʻlimi', 'Davlat dasturlari va loyihalarni rejalashtirish.',
      'Talabalar bilan ishlash boʻlimi', 'Maʼnaviyat, marifat va talabalar faoliyati.',
    ],
    contactTitle: 'Maʼmuriyat qabulxonasi',
    hours: 'Dushanba – Juma, 09:00 – 18:00',
  },
  ru: {
    crumbHome: 'Главная', crumbTuzilma: 'Структура', crumbThis: 'Отделы',
    tag: 'Структура', title: 'Административные', emphasis: 'отделы',
    lead: 'Административные и обслуживающие отделы консерватории образуют систему вспомогательных структур, координирующих учебный процесс, научную деятельность и студенческую жизнь.',
    h1: 'Учебно-методические отделы',
    h2: 'Научные и международные отделы',
    h3: 'Административные и обслуживающие отделы',
    boss: 'Руководитель', chiefAcc: 'Главный бухгалтер',
    c: [
      'Учебно-методический отдел', 'Управляет учебными планами, силлабусами и методическим обеспечением.',
      'Отдел бакалавриата', 'Координирует все процессы бакалаврского образования.',
      'Отдел магистратуры', 'Управляет магистратурой и докторантурой.',
      'Научно-исследовательский центр', 'Управляет научными проектами, грантами и конференциями.',
      'Отдел международных связей', 'Координирует зарубежных партнёров и мобильность студентов.',
      'Научные издания и библиотека', 'Научные журналы, публикации и электронные ресурсы.',
      'Юридический отдел', 'Правовые документы, договоры и государственные документы.',
      'Отдел кадров', 'Подбор персонала, аттестация и повышение квалификации.',
      'Финансово-бухгалтерский отдел', 'Бюджет, заработная плата и финансовая отчётность.',
      'Отдел информационных технологий', 'ИТ-инфраструктура, HEMIS, веб-ресурсы.',
      'Отдел экономического планирования', 'Планирование государственных программ и проектов.',
      'Отдел по работе со студентами', 'Духовность, просвещение и студенческая деятельность.',
    ],
    contactTitle: 'Приёмная администрации',
    hours: 'Понедельник – Пятница, 09:00 – 18:00',
  },
  en: {
    crumbHome: 'Home', crumbTuzilma: 'Structure', crumbThis: 'Departments',
    tag: 'Structure', title: 'Administrative', emphasis: 'departments',
    lead: 'The administrative and support departments of the conservatory form a system of supporting structures that coordinate the educational process, research activities and student life.',
    h1: 'Educational and methodological departments',
    h2: 'Research and international departments',
    h3: 'Administrative and support departments',
    boss: 'Head', chiefAcc: 'Chief accountant',
    c: [
      'Educational and Methodological Department', 'Manages curricula, syllabi and methodological support.',
      'Bachelor’s Department', 'Coordinates all processes of bachelor’s education.',
      'Master’s Department', 'Manages master’s and doctoral programmes.',
      'Research Center', 'Manages research projects, grants and conferences.',
      'International Relations Department', 'Coordinates foreign partners and student mobility.',
      'Scientific Publications and Library', 'Scientific journals, publications and electronic resources.',
      'Legal Department', 'Legal documents, contracts and state documents.',
      'Human Resources Department', 'Staff selection, attestation and professional development.',
      'Finance and Accounting Department', 'Budget, salaries and financial reporting.',
      'Information Technology Department', 'IT infrastructure, HEMIS, web resources.',
      'Economic Planning Department', 'Planning of state programmes and projects.',
      'Student Affairs Department', 'Spirituality, enlightenment and student activities.',
    ],
    contactTitle: 'Administration reception',
    hours: 'Monday – Friday, 09:00 – 18:00',
  },
};

const NAMES = [
  'Karimov Bobur Sherzodovich',
  'Yusupova Madina Otabekovna',
  'Akhmedov Davron Sherzodovich',
  'prof. Mirzayeva Gulnora Abdullayevna',
  'Yusupova Madina Otabekovna',
  'Tursunova Dilfuza Otabekovna',
  'Aliyev Bobur Sherzodovich',
  'Karimova Nargiza Erkinovna',
  'Sodiqova Madina Olimovna',
  'Olimov Sherzod Akbarovich',
  'Rashidov Davron Murodovich',
  'Toshmatov Akbar Sherzodovich',
];

export default function Bolimlar() {
  const { lang } = useTranslation();
  const tr = T[lang] || T.uz;
  const c = tr.c;
  const card = (idx, role = tr.boss) => ({
    tag: String(idx + 1).padStart(2, '0'),
    title: c[idx * 2],
    desc: c[idx * 2 + 1],
    meta: `${role}: ${NAMES[idx]}`,
  });

  const BREADCRUMBS = [
    { label: tr.crumbHome, to: '/' },
    { label: tr.crumbTuzilma, to: '/tuzilma' },
    { label: tr.crumbThis },
  ];

  return (
    <InfoPage
      tag={tr.tag}
      title={tr.title}
      emphasis={tr.emphasis}
      breadcrumbs={BREADCRUMBS}
      lead={tr.lead}
      sections={[
        { heading: tr.h1, cards: [card(0), card(1), card(2)] },
        { heading: tr.h2, cards: [card(3), card(4), card(5)] },
        { heading: tr.h3, cards: [card(6), card(7), card(8, tr.chiefAcc), card(9), card(10), card(11)] },
      ]}
      contact={{
        title: tr.contactTitle,
        phone: '+998 71 234-56-78',
        email: 'info@konservatoriya.uz',
        hours: tr.hours,
      }}
    />
  );
}
