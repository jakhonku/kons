import InfoPage from '../components/InfoPage';
import { useTranslation } from '../contexts/LanguageContext';

/* Haqiqiy maʼlumot — Bitiruvchilar bandligi */
const LEAD = 'Soʻnggi uch yil davomida bitiruvchilarni ish bilan taʼminlash boʻyicha tizimli ishlar olib borildi. Natijada, 992 nafar bitiruvchidan 925 nafari bandligi taʼminlandi — bu 93 foizlik bandlik koʻrsatkichini tashkil etadi.';

const STATS = [
  { value: '93%', label: 'Bandlik koʻrsatkichi' },
  { value: '200+', label: 'Hamkor tashkilot' },
  { value: '925', label: 'Ish bilan taʼminlangan' },
];

const SERVICES = [
  'Boʻsh ish oʻrinlari bazasi bilan tanishtirish.',
  'Ish beruvchilar bilan bevosita muloqotlarni tashkil etish.',
  'Kasbiy yoʻnaltirish va konsultatsiyalar.',
  'Mehnat bozoridagi talab va ehtiyojlar boʻyicha maʼlumot berish.',
  'Ishga joylashish jarayonida amaliy yordam koʻrsatish.',
];

const TABLE_ROWS = [
  ['Madaniyat va sanʼat taʼlim muassasalari hamda tashkilotlari', '902 nafar', '97,5%'],
  ['Boshqa soha va tarmoqlar', '23 nafar', '2,5%'],
  ['Jami', '925 nafar', '100%'],
];

const T = {
  uz: { crumbHome: 'Bosh sahifa', crumbTalim: 'Taʼlim', crumbThis: 'Bitiruvchilar bandligi', tag: 'Career', title: 'Bitiruvchilar', emphasis: 'bandligi', h1: 'Bitiruvchilarga koʻrsatilgan xizmatlar', h2: 'Bitiruvchilarning faoliyat sohalari', tableHead: ['Faoliyat sohasi', 'Soni', 'Ulushi'], note: 'Ushbu koʻrsatkichlar bitiruvchilarning mehnat bozorida yuqori talabga ega ekanligini hamda taʼlim jarayonining amaliyot bilan uzviy bogʻliqligini tasdiqlaydi.', contactTitle: '“Kelajakka qadam” karyera markazi' },
  ru: { crumbHome: 'Главная', crumbTalim: 'Образование', crumbThis: 'Трудоустройство выпускников', tag: 'Career', title: 'Трудоустройство', emphasis: 'выпускников', h1: 'Bitiruvchilarga koʻrsatilgan xizmatlar', h2: 'Bitiruvchilarning faoliyat sohalari', tableHead: ['Faoliyat sohasi', 'Soni', 'Ulushi'], note: 'Ushbu koʻrsatkichlar bitiruvchilarning mehnat bozorida yuqori talabga ega ekanligini hamda taʼlim jarayonining amaliyot bilan uzviy bogʻliqligini tasdiqlaydi.', contactTitle: '“Kelajakka qadam” karyera markazi' },
  en: { crumbHome: 'Home', crumbTalim: 'Education', crumbThis: 'Graduate employment', tag: 'Career', title: 'Graduate', emphasis: 'employment', h1: 'Bitiruvchilarga koʻrsatilgan xizmatlar', h2: 'Bitiruvchilarning faoliyat sohalari', tableHead: ['Faoliyat sohasi', 'Soni', 'Ulushi'], note: 'Ushbu koʻrsatkichlar bitiruvchilarning mehnat bozorida yuqori talabga ega ekanligini hamda taʼlim jarayonining amaliyot bilan uzviy bogʻliqligini tasdiqlaydi.', contactTitle: '“Kelajakka qadam” karyera markazi' },
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
      lead={LEAD}
      stats={STATS}
      sections={[
        { heading: tr.h1, items: SERVICES },
        { heading: tr.h2, text: tr.note, table: { head: tr.tableHead, rows: TABLE_ROWS } },
      ]}
      contact={{ title: tr.contactTitle }}
    />
  );
}
