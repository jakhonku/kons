import InfoPage from '../components/InfoPage';
import { useLanguage } from '../contexts/LanguageContext';
import Seo from '../components/Seo';

const CONTENT = {
  uz: {
    tag: 'Qabul',
    title: 'Qabul',
    emphasis: 'Komissiyasi',
    breadcrumbs: [
      { label: 'Bosh sahifa', to: '/' },
      { label: 'Qabul' },
      { label: 'Qabul komissiyasi' },
    ],
    lead: 'Abituriyentlar uchun qabul jarayoni, talablar va Qabul komissiyasi huzuridagi «Call-center» bilan bogʻlanish maʼlumotlari.',
    callHeading: 'Qabul komissiyasi huzurida «Call-center»',
    callText:
      'Davlat oliy taʼlim muassasalariga 2026/2027-oʻquv yili uchun oʻqishga qabul qilish jarayonlarida abituriyentlar va ularning ota-onalari murojaatlariga tez hamda aniq javob, huquqiy tushuncha, shuningdek, maslahatlar berish maqsadida Oʻzbekiston davlat konservatoriyasi Qabul komissiyasi huzurida «Call-center» ishga tushirilgan.\n«Call-center» operatorlari 09:00 dan 18:00 ga qadar qabulga oid barcha savollarga javob beradi.',
    contactHeading: 'Murojaat uchun',
    cardPhoneTag: 'Telefon',
    cardPhoneDesc: '«Call-center» operatorlari qabulga oid barcha savollaringizga javob beradi.',
    cardHoursTag: 'Ish vaqti',
    cardHoursDesc: 'Operatorlar har kuni belgilangan vaqtda xizmat koʻrsatadi.',
    cardRegTag: 'Roʻyxatga olish',
    cardRegTitle: '5 — 25 iyun',
    cardRegDesc: '2026/2027-oʻquv yili uchun abituriyentlarni roʻyxatga olish 5-iyundan 25-iyunga qadar (shu kuni ham) amalga oshiriladi.',
  },
  ru: {
    tag: 'Приём',
    title: 'Приёмная',
    emphasis: 'комиссия',
    breadcrumbs: [
      { label: 'Главная', to: '/' },
      { label: 'Приём' },
      { label: 'Приёмная комиссия' },
    ],
    lead: 'Информация о процессе приёма, требованиях и связи с «Call-центром» при Приёмной комиссии для абитуриентов.',
    callHeading: '«Call-центр» при Приёмной комиссии',
    callText:
      'В целях оперативного и точного ответа на обращения абитуриентов и их родителей, разъяснения правовых вопросов, а также предоставления консультаций в процессе приёма в государственные высшие учебные заведения на 2026/2027 учебный год, при Приёмной комиссии Государственной консерватории Узбекистана запущен «Call-центр».\nОператоры «Call-центра» отвечают на все вопросы, связанные с приёмом, с 09:00 до 18:00.',
    contactHeading: 'Для обращений',
    cardPhoneTag: 'Телефон',
    cardPhoneDesc: 'Операторы «Call-центра» ответят на все ваши вопросы по приёму.',
    cardHoursTag: 'Время работы',
    cardHoursDesc: 'Операторы обслуживают ежедневно в установленное время.',
    cardRegTag: 'Регистрация',
    cardRegTitle: '5 — 25 июня',
    cardRegDesc: 'Регистрация абитуриентов на 2026/2027 учебный год проводится с 5 по 25 июня (включительно).',
  },
  en: {
    tag: 'Admissions',
    title: 'Admissions',
    emphasis: 'Committee',
    breadcrumbs: [
      { label: 'Home', to: '/' },
      { label: 'Admissions' },
      { label: 'Admissions Committee' },
    ],
    lead: 'Information about the admission process, requirements and contacting the «Call Center» at the Admissions Committee for applicants.',
    callHeading: '«Call Center» at the Admissions Committee',
    callText:
      'To provide quick and accurate responses to inquiries from applicants and their parents, legal clarifications and consultations during the admission process to state higher education institutions for the 2026/2027 academic year, a «Call Center» has been launched at the Admissions Committee of the State Conservatory of Uzbekistan.\nThe «Call Center» operators answer all admission-related questions from 09:00 to 18:00.',
    contactHeading: 'Contact us',
    cardPhoneTag: 'Phone',
    cardPhoneDesc: 'The «Call Center» operators will answer all your admission questions.',
    cardHoursTag: 'Working hours',
    cardHoursDesc: 'Operators provide service every day during the set hours.',
    cardRegTag: 'Registration',
    cardRegTitle: 'June 5 — 25',
    cardRegDesc: 'Registration of applicants for the 2026/2027 academic year takes place from June 5 to June 25 (inclusive).',
  },
};

export default function QabulTalablari() {
  const { lang } = useLanguage();
  const c = CONTENT[lang] || CONTENT.uz;

  return (
    <>
    <Seo title={c.title + ' — Call-center'} description="Oʻzbekiston Davlat Konservatoriyasi Qabul komissiyasi «Call-center»: +998 71 244-85-85, 09:00–18:00. 2026/2027-oʻquv yili abituriyentlari uchun maslahat va maʼlumot." />
    <InfoPage
      tag={c.tag}
      title={c.title}
      emphasis={c.emphasis}
      breadcrumbs={c.breadcrumbs}
      lead={c.lead}
      sections={[
        {
          heading: c.callHeading,
          text: c.callText,
        },
        {
          heading: c.contactHeading,
          cards: [
            { tag: c.cardPhoneTag, title: '+998 71 244-85-85', desc: c.cardPhoneDesc },
            { tag: c.cardHoursTag, title: '09:00 — 18:00', desc: c.cardHoursDesc },
            { tag: c.cardRegTag, title: c.cardRegTitle, desc: c.cardRegDesc },
          ],
        },
      ]}
    />
    </>
  );
}
