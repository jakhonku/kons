import InfoPage from '../components/InfoPage';
import Seo from '../components/Seo';
import { useLanguage } from '../contexts/LanguageContext';

const CONTENT = {
  uz: {
    tag: 'Qabul', title: 'Qabul komissiyasi', emphasis: '«Call-center»',
    breadcrumbs: [{ label: 'Bosh sahifa', to: '/' }, { label: 'Qabul' }, { label: '«Call-center»' }],
    lead: 'Abituriyentlar va ularning ota-onalari uchun Qabul komissiyasi huzuridagi «Call-center» bilan bogʻlanish maʼlumotlari.',
    callHeading: 'Qabul komissiyasi huzurida «Call-center»',
    callText:
      'Davlat oliy taʼlim muassasalariga 2026/2027-oʻquv yili uchun oʻqishga qabul qilish jarayonlarida abituriyentlar va ularning ota-onalari murojaatlariga tez hamda aniq javob, huquqiy tushuncha, shuningdek, maslahatlar berish maqsadida Oʻzbekiston davlat konservatoriyasi Qabul komissiyasi huzurida «Call-center» ishga tushirilgan.\n«Call-center» operatorlari 09:00 dan 18:00 ga qadar qabulga oid barcha savollarga javob beradi.',
    contactHeading: 'Murojaat uchun',
    cards: [
      { tag: 'Telefon', title: '+998 71 244-85-85', desc: '«Call-center» operatorlari qabulga oid barcha savollaringizga javob beradi.' },
      { tag: 'Ish vaqti', title: '09:00 — 18:00', desc: 'Operatorlar har kuni belgilangan vaqtda xizmat koʻrsatadi.' },
      { tag: 'Roʻyxatga olish', title: '5 — 25 iyun', desc: '2026/2027-oʻquv yili uchun abituriyentlarni roʻyxatga olish 5-iyundan 25-iyunga qadar (shu kuni ham) amalga oshiriladi.' },
    ],
  },
  ru: {
    tag: 'Приём', title: 'Приёмная комиссия', emphasis: '«Call-центр»',
    breadcrumbs: [{ label: 'Главная', to: '/' }, { label: 'Приём' }, { label: '«Call-центр»' }],
    lead: 'Контактная информация «Call-центра» при Приёмной комиссии для абитуриентов и их родителей.',
    callHeading: '«Call-центр» при Приёмной комиссии',
    callText:
      'В целях оперативного и точного ответа на обращения абитуриентов и их родителей, разъяснения правовых вопросов, а также предоставления консультаций в процессе приёма в государственные высшие учебные заведения на 2026/2027 учебный год, при Приёмной комиссии Государственной консерватории Узбекистана запущен «Call-центр».\nОператоры «Call-центра» отвечают на все вопросы, связанные с приёмом, с 09:00 до 18:00.',
    contactHeading: 'Для обращений',
    cards: [
      { tag: 'Телефон', title: '+998 71 244-85-85', desc: 'Операторы «Call-центра» ответят на все ваши вопросы по приёму.' },
      { tag: 'Время работы', title: '09:00 — 18:00', desc: 'Операторы обслуживают ежедневно в установленное время.' },
      { tag: 'Регистрация', title: '5 — 25 июня', desc: 'Регистрация абитуриентов на 2026/2027 учебный год проводится с 5 по 25 июня (включительно).' },
    ],
  },
  en: {
    tag: 'Admissions', title: 'Admissions Committee', emphasis: '«Call Center»',
    breadcrumbs: [{ label: 'Home', to: '/' }, { label: 'Admissions' }, { label: '«Call Center»' }],
    lead: 'Contact information for the «Call Center» at the Admissions Committee for applicants and their parents.',
    callHeading: '«Call Center» at the Admissions Committee',
    callText:
      'To provide quick and accurate responses to inquiries from applicants and their parents, legal clarifications and consultations during the admission process to state higher education institutions for the 2026/2027 academic year, a «Call Center» has been launched at the Admissions Committee of the State Conservatory of Uzbekistan.\nThe «Call Center» operators answer all admission-related questions from 09:00 to 18:00.',
    contactHeading: 'Contact us',
    cards: [
      { tag: 'Phone', title: '+998 71 244-85-85', desc: 'The «Call Center» operators will answer all your admission questions.' },
      { tag: 'Working hours', title: '09:00 — 18:00', desc: 'Operators provide service every day during the set hours.' },
      { tag: 'Registration', title: 'June 5 — 25', desc: 'Registration of applicants for the 2026/2027 academic year takes place from June 5 to June 25 (inclusive).' },
    ],
  },
};

export default function CallCenter() {
  const { lang } = useLanguage();
  const c = CONTENT[lang] || CONTENT.uz;

  return (
    <>
      <Seo title="Qabul komissiyasi «Call-center»" description="Oʻzbekiston Davlat Konservatoriyasi Qabul komissiyasi «Call-center»: +998 71 244-85-85, 09:00–18:00. 2026/2027-oʻquv yili abituriyentlari uchun maslahat va maʼlumot." />
      <InfoPage
        tag={c.tag}
        title={c.title}
        emphasis={c.emphasis}
        breadcrumbs={c.breadcrumbs}
        lead={c.lead}
        sections={[
          { heading: c.callHeading, text: c.callText },
          { heading: c.contactHeading, cards: c.cards },
        ]}
      />
    </>
  );
}
