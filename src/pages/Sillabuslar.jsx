import FanDasturlariView from '../components/FanDasturlariView';
import { useTranslation } from '../contexts/LanguageContext';

const T = {
  uz: {
    crumbHome: 'Bosh sahifa', crumbStudents: 'Talabalar uchun', crumbThis: 'Fanning oʻquv dasturlari',
    heroTag: 'Talabalar uchun', heroTitle: 'Fanning oʻquv', heroEm: 'dasturlari',
    lead: 'Bakalavriat va magistratura taʼlim bosqichlari boʻyicha kafedralarning fan (oʻquv) dasturlari. Kerakli fanni tanlab, dasturni PDF formatida koʻrishingiz yoki yuklab olishingiz mumkin.',
  },
  ru: {
    crumbHome: 'Главная', crumbStudents: 'Для студентов', crumbThis: 'Учебные программы дисциплин',
    heroTag: 'Для студентов', heroTitle: 'Учебные программы', heroEm: 'дисциплин',
    lead: 'Учебные программы дисциплин кафедр по ступеням бакалавриата и магистратуры. Выбрав нужную дисциплину, вы можете просмотреть программу в формате PDF или скачать её.',
  },
  en: {
    crumbHome: 'Home', crumbStudents: 'For students', crumbThis: 'Subject study programmes',
    heroTag: 'For students', heroTitle: 'Subject study', heroEm: 'programmes',
    lead: 'Subject (course) programmes of the departments for the bachelor’s and master’s levels. Select a subject to view its programme in PDF format or download it.',
  },
};

export default function Sillabuslar() {
  const { lang } = useTranslation();
  const tr = T[lang] || T.uz;

  return (
    <FanDasturlariView
      tag={tr.heroTag}
      title={tr.heroTitle}
      emphasis={tr.heroEm}
      breadcrumbs={[
        { label: tr.crumbHome, to: '/' },
        { label: tr.crumbStudents, to: '/talabalar' },
        { label: tr.crumbThis },
      ]}
      lead={tr.lead}
      showExtras={false}
    />
  );
}
