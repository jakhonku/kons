import InfoPage from '../components/InfoPage';
import { useTranslation } from '../contexts/LanguageContext';

const T = {
  uz: {
    crumbHome: 'Bosh sahifa', crumbTuzilma: 'Tuzilma', crumbThis: 'Boʻsh ish oʻrinlari',
    tag: 'Tuzilma', title: 'Boʻsh ish', emphasis: 'oʻrinlari',
    lead: 'Konservatoriyada hozirda mavjud boʻsh ish oʻrinlari va kasbiy oʻsish imkoniyatlari. Barcha vakansiyalar Oʻzbekiston Respublikasi qonunchiligiga muvofiq tanlov asosida toʻldiriladi.',
    stats: [{ value: '7', label: 'Faol vakansiya' }, { value: '4', label: 'Pedagogik' }, { value: '3', label: 'Maʼmuriy' }],
    h1: 'Pedagogik vakansiyalar',
    pedHead: ['Lavozim', 'Kafedra', 'Talab', 'Muddat'],
    pedRows: [
      ['Katta oʻqituvchi', 'Fortepiano kafedrasi', 'Magistr darajasi, 3+ yil tajriba', '30.06.2026 gacha'],
      ['Dotsent', 'Musiqa nazariyasi', 'Fan nomzodi, professor lavozimi tajribasi', '15.07.2026 gacha'],
      ['Assistent', 'Akademik xonandalik', 'Bakalavr darajasi, ijodiy tanlov', '20.06.2026 gacha'],
      ['Kontsertmeyster', 'Kamera ansambli', 'Magistr darajasi, ijrochilik tajribasi', '25.06.2026 gacha'],
    ],
    h2: 'Maʼmuriy vakansiyalar',
    admHead: ['Lavozim', 'Boʻlim', 'Talab', 'Muddat'],
    admRows: [
      ['Mutaxassis', 'Xalqaro aloqalar boʻlimi', 'Oliy maʼlumot, ingliz tili B2+', '10.07.2026 gacha'],
      ['Tahrirchi', 'Ilmiy nashrlar boʻlimi', 'Oliy filologik maʼlumot', '05.07.2026 gacha'],
      ['Tizim administratori', 'Axborot texnologiyalari', 'IT mutaxassisligi, 2+ yil tajriba', '18.06.2026 gacha'],
    ],
    h3: 'Tanlov tartibi',
    steps: [
      ['1-bosqich: Hujjatlarni topshirish', 'Ariza, CV, maʼlumot va tajriba haqidagi hujjatlar elektron pochtaga yuboriladi.'],
      ['2-bosqich: Hujjat ekspertizasi', 'Kadrlar boʻlimi nomzodlarning hujjatlarini 5 ish kuni ichida koʻrib chiqadi.'],
      ['3-bosqich: Suhbat va sinov darsi', 'Pedagogik vakansiyalar uchun ochiq dars / maʼmuriy uchun mutaxassisligi boʻyicha test.'],
      ['4-bosqich: Konkurs komissiyasi qarori', 'Ilmiy kengash yoki rektor qarori bilan natija eʼlon qilinadi.'],
    ],
    contactTitle: 'Hujjat topshirish',
    responsible: 'Kadrlar boʻlimi',
    address: 'Toshkent sh., Botir Zokirov koʻchasi 1, 2-qavat',
    hours: 'Dushanba – Juma, 09:00 – 17:00',
  },
  ru: {
    crumbHome: 'Главная', crumbTuzilma: 'Структура', crumbThis: 'Вакансии',
    tag: 'Структура', title: 'Вакантные', emphasis: 'должности',
    lead: 'Имеющиеся в настоящее время в консерватории вакансии и возможности профессионального роста. Все вакансии заполняются на конкурсной основе в соответствии с законодательством Республики Узбекистан.',
    stats: [{ value: '7', label: 'Активных вакансий' }, { value: '4', label: 'Педагогических' }, { value: '3', label: 'Административных' }],
    h1: 'Педагогические вакансии',
    pedHead: ['Должность', 'Кафедра', 'Требование', 'Срок'],
    pedRows: [
      ['Старший преподаватель', 'Кафедра фортепиано', 'Степень магистра, 3+ года опыта', 'до 30.06.2026'],
      ['Доцент', 'Теория музыки', 'Кандидат наук, опыт работы профессором', 'до 15.07.2026'],
      ['Ассистент', 'Академическое пение', 'Степень бакалавра, творческий конкурс', 'до 20.06.2026'],
      ['Концертмейстер', 'Камерный ансамбль', 'Степень магистра, исполнительский опыт', 'до 25.06.2026'],
    ],
    h2: 'Административные вакансии',
    admHead: ['Должность', 'Отдел', 'Требование', 'Срок'],
    admRows: [
      ['Специалист', 'Отдел международных связей', 'Высшее образование, английский B2+', 'до 10.07.2026'],
      ['Редактор', 'Отдел научных изданий', 'Высшее филологическое образование', 'до 05.07.2026'],
      ['Системный администратор', 'Информационные технологии', 'ИТ-специальность, 2+ года опыта', 'до 18.06.2026'],
    ],
    h3: 'Порядок конкурса',
    steps: [
      ['Этап 1: Подача документов', 'Заявление, CV, документы об образовании и опыте отправляются на электронную почту.'],
      ['Этап 2: Экспертиза документов', 'Отдел кадров рассматривает документы кандидатов в течение 5 рабочих дней.'],
      ['Этап 3: Собеседование и пробный урок', 'Открытый урок для педагогических вакансий / тест по специальности для административных.'],
      ['Этап 4: Решение конкурсной комиссии', 'Результат объявляется решением учёного совета или ректора.'],
    ],
    contactTitle: 'Подача документов',
    responsible: 'Отдел кадров',
    address: 'г. Ташкент, ул. Ботира Закирова 1, 2-й этаж',
    hours: 'Понедельник – Пятница, 09:00 – 17:00',
  },
  en: {
    crumbHome: 'Home', crumbTuzilma: 'Structure', crumbThis: 'Vacancies',
    tag: 'Structure', title: 'Job', emphasis: 'vacancies',
    lead: 'Currently available vacancies and career growth opportunities at the conservatory. All vacancies are filled on a competitive basis in accordance with the legislation of the Republic of Uzbekistan.',
    stats: [{ value: '7', label: 'Active vacancies' }, { value: '4', label: 'Teaching' }, { value: '3', label: 'Administrative' }],
    h1: 'Teaching vacancies',
    pedHead: ['Position', 'Department', 'Requirement', 'Deadline'],
    pedRows: [
      ['Senior Lecturer', 'Piano Department', 'Master’s degree, 3+ years of experience', 'until 30.06.2026'],
      ['Associate Professor', 'Music Theory', 'PhD, experience as professor', 'until 15.07.2026'],
      ['Assistant', 'Academic Singing', 'Bachelor’s degree, creative competition', 'until 20.06.2026'],
      ['Concertmaster', 'Chamber Ensemble', 'Master’s degree, performance experience', 'until 25.06.2026'],
    ],
    h2: 'Administrative vacancies',
    admHead: ['Position', 'Department', 'Requirement', 'Deadline'],
    admRows: [
      ['Specialist', 'International Relations Department', 'Higher education, English B2+', 'until 10.07.2026'],
      ['Editor', 'Scientific Publications Department', 'Higher philological education', 'until 05.07.2026'],
      ['System Administrator', 'Information Technology', 'IT specialty, 2+ years of experience', 'until 18.06.2026'],
    ],
    h3: 'Competition procedure',
    steps: [
      ['Step 1: Submission of documents', 'Application, CV, documents on education and experience are sent by email.'],
      ['Step 2: Document review', 'The HR department reviews candidates’ documents within 5 working days.'],
      ['Step 3: Interview and trial lesson', 'An open lesson for teaching vacancies / a specialty test for administrative ones.'],
      ['Step 4: Decision of the selection committee', 'The result is announced by the decision of the academic council or the rector.'],
    ],
    contactTitle: 'Document submission',
    responsible: 'HR Department',
    address: 'Tashkent, Botir Zokirov street 1, 2nd floor',
    hours: 'Monday – Friday, 09:00 – 17:00',
  },
};

export default function Vakansiyalar() {
  const { lang } = useTranslation();
  const tr = T[lang] || T.uz;

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
      stats={tr.stats}
      sections={[
        { heading: tr.h1, table: { head: tr.pedHead, rows: tr.pedRows } },
        { heading: tr.h2, table: { head: tr.admHead, rows: tr.admRows } },
        { heading: tr.h3, items: tr.steps.map(([title, desc]) => ({ title, desc })) },
      ]}
      contact={{
        title: tr.contactTitle,
        responsible: tr.responsible,
        phone: '+998 71 234-56-95',
        email: 'kadrlar@konservatoriya.uz',
        address: tr.address,
        hours: tr.hours,
      }}
    />
  );
}
