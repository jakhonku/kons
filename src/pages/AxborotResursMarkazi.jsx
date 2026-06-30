import OrgDetail from '../components/OrgDetail';
import { useTranslation } from '../contexts/LanguageContext';

const LEAD = `O‘zbekiston davlat konservatoriyasi Axborot resurs markazi fondida asosan musiqiy yo‘nalishga oid adabiyotlar saqlanadi. Axborot resurs markazida musiqiy yo‘nalishga oid o‘quv adabiyotlar bo‘limi, Badiiy adabiyotlar bo‘limi, Bibliografiya bo‘limi, Orkestr bo‘limi, Ko‘zi ojiz va zaif ko‘ruvchi talabalar uchun maxsus xona va 2 ta o‘quv zali mavjud.`;

const TARQATISH = `Musiqiy yo‘nalish bo‘yicha kitob tarqatish xonasida O‘zbekiston davlat konservatoriyasi professor-o‘qituvchilari nashrdan chiqargan musiqiy yo‘nalishga oid darslik, o‘quv qo‘llanma va ilmiy adabiyotlar saqlanadi. Bundan tashqari xorijiy adabiyotlar hamda musiqaga oid noyob kitoblar ham saqlanadi.
Ushbu o‘quv adabiyotlardan O‘zbekiston davlat konservatoriyasi professor-o‘qituvchilari, talabalari, Konservatoriya qoshida tashkil etilgan malaka oshirish kursi tinglovchilari, musiqiy maktablar, kollej tinglovchilari hamda Konservatoriya atrofida joylashgan aholi qatlami foydalanib keladi.
Milliy cholg‘ular, maqomga oid adabiyotlar, opera san’ati, Brayl usulida yozilgan adabiyotlardan xorijdan kelgan mehmonlar ham foydalanadilar. Qo‘shni davlatlardan Qozog‘iston, Qirg‘iziston, Turkmaniston Respublikalaridan kelgan doktorant va magistrlar ham fondimizdagi noyob adabiyotlardan foydalanib, ilmiy ishlarida foydalanadilar.`;

const ELEKTRON = `Elektron o‘quv zali zamonaviy kompyuterlar bilan jihozlangan bo‘lib, maxsus ajratilgan kompyuterlarda elektron ko‘rinishdagi o‘quv adabiyotlar joylashtirilgan. Bundan tashqari www.library.konservatoriya.uz sayti orqali Axborot resurs markazi fondidagi elektron ko‘rinishdagi o‘quv adabiyotlardan foydalanish mumkin. O‘zbekiston davlat konservatoriyasi professor-o‘qituvchilari nashrdan chiqargan o‘quv adabiyotlari mana shu saytga qo‘yiladi.
Elektron o‘quv zali bilan qo‘shimcha o‘quv zali tashkil qilingan. Bu zalda talabalar kam nusxadagi adabiyotlarni shu zalda foydalanadilar.`;

const BADIIY = `Badiiy adabiyotlar bo‘limida O‘zbekiston Respublikasi Prezidenti Sh.M.Mirziyoyev asarlari, O‘zbekiston Yozuvchilar uyushmasi tomonidan nashrdan chiqarilgan badiiy adabiyotlar, rus yozuvchilarining tanlangan asarlari, chet el yozuvchilarining tanlangan asarlari, ensiklopediyalar, lug‘atlar — 3000 nusxadan ziyod badiiy adabiyotlar saqlanadi. Rossiya estrada yulduzi O.Gazmanov tomonidan beg‘araz berilgan 103 ta nomdagi 210 ta sonda tasviriy va amaliy san’atga oid adabiyotlar ham saqlanadi.`;

const BIBLIOGRAFIYA = `Bibliografiya bo‘limida vaqtli matbuot asarlari — gazeta va jurnallar, dissertatsiya va avtoreferatlar, ma’ruza va matnlar saqlanadi.`;

const TUZILMA = [
  'Musiqiy yo‘nalishga oid o‘quv adabiyotlar bo‘limi',
  'Badiiy adabiyotlar bo‘limi',
  'Bibliografiya bo‘limi',
  'Orkestr bo‘limi',
  'Ko‘zi ojiz va zaif ko‘ruvchi talabalar uchun maxsus xona',
  '2 ta o‘quv zali (elektron va qo‘shimcha)',
];

const T = {
  uz: {
    crumbHome: 'Bosh sahifa', crumbTuzilma: 'Tuzilma', crumbBolimlar: 'Boʻlimlar', crumbThis: 'Axborot resurs markazi',
    tag: 'Boʻlimlar', title: 'Axborot resurs', emphasis: 'markazi',
    s1: 'Markaz tarkibi', s2: 'Kitob tarqatish boʻlimi', s3: 'Elektron va oʻquv zallari', s4: 'Badiiy adabiyotlar boʻlimi', s5: 'Bibliografiya boʻlimi',
    role: 'Axborot resurs markazi direktori',
  },
  ru: {
    crumbHome: 'Главная', crumbTuzilma: 'Структура', crumbBolimlar: 'Отделы', crumbThis: 'Информационно-ресурсный центр',
    tag: 'Отделы', title: 'Информационно-ресурсный', emphasis: 'центр',
    s1: 'Структура центра', s2: 'Отдел книговыдачи', s3: 'Электронный и учебные залы', s4: 'Отдел художественной литературы', s5: 'Отдел библиографии',
    role: 'Директор информационно-ресурсного центра',
  },
  en: {
    crumbHome: 'Home', crumbTuzilma: 'Structure', crumbBolimlar: 'Departments', crumbThis: 'Information Resource Center',
    tag: 'Departments', title: 'Information Resource', emphasis: 'Center',
    s1: 'Structure of the center', s2: 'Book lending department', s3: 'Electronic and reading halls', s4: 'Department of fiction', s5: 'Bibliography department',
    role: 'Director of the Information Resource Center',
  },
};

const AWARDS = [
  '«Axborot va kutubxona aʼlochisi» koʻkrak nishoni',
  '«Madaniyat va sanʼat fidokori» koʻkrak nishoni',
];

export default function AxborotResursMarkazi() {
  const { lang } = useTranslation();
  const tr = T[lang] || T.uz;

  return (
    <OrgDetail
      tag={tr.tag}
      title={tr.title}
      emphasis={tr.emphasis}
      breadcrumbs={[
        { label: tr.crumbHome, to: '/' },
        { label: tr.crumbTuzilma },
        { label: tr.crumbBolimlar, to: '/bolimlar' },
        { label: tr.crumbThis },
      ]}
      leader={{
        name: 'Xodjaeva Shohida Bahramovna',
        role: tr.role,
        photo: '/bolimlar/xodjaeva-shohida.jpeg',
        awards: AWARDS,
      }}
      intro={[LEAD]}
      sections={[
        { heading: tr.s1, items: TUZILMA },
        { heading: tr.s2, text: TARQATISH },
        { heading: tr.s3, text: ELEKTRON },
        { heading: tr.s4, text: BADIIY },
        { heading: tr.s5, text: BIBLIOGRAFIYA },
      ]}
    />
  );
}

