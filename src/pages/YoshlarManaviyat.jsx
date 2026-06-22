import OrgDetail from '../components/OrgDetail';
import { useTranslation } from '../contexts/LanguageContext';

const LEAD = `Yoshlar bilan ishlash, ma’naviyat-ma’rifat bo‘limi o‘z vazifalaridan kelib chiqib, talabalarni milliy istiqlol g‘oyalariga cheksiz sadoqat, ona Vatanga mehr-muhabbat, ozod va obod mamlakat barpo etishdek ulug‘ va olijanob maqsadga e’tiqod, jasurlik va fidoiylik ruhida tarbiyalashga doir universitetda o‘tkaziladigan ma’naviy va ma’rifiy tadbirlarni tashkil etadi. Shuningdek, iqtidorli talaba-yoshlarning bilim va salohiyatlarini yuzaga chiqarish maqsadida turli ilmiy, ijodiy va badiiy to‘garaklar, klub va yig‘inlarni tashkil etadi va muvofiqlashtiradi. Shu bilan birga talabalar turar joylarida ma’naviy-ma’rifiy ishlarni tashkil etib boradi.`;

const MAQSAD = `Talaba-yoshlarni milliy va umuminsoniy qadriyatlarga sodiqlik ruhida tarbiyalash, ularning ma’naviy, estetik, axloqiy dunyoqarashini kengaytirish, tafakkurini turli xil yot g‘oyalar ta’siridan himoya qilish hamda mustaqil O‘zbekistonning chinakam fidoiy, vatanparvar shaxsi sifatida tarbiyalashdan iborat.`;

const VAZIFALAR = [
  'talabalarni milliy va umuminsoniy qadriyatlar asosida, mustaqil O‘zbekiston Respublikasining haqiqiy fuqarolari etib shakllantirish;',
  'Vatan oldidagi fuqarolik va farzandlik vazifalarini sidqidildan bajarishga tayyorlash;',
  'talabalarda kasb-hunarni mukammal egallash mas’uliyatini oshirish;',
  'talabaning shaxs sifatidagi o‘ziga xos individual fazilatlarini shakllantirish va takomillashtirish;',
  'talabalarni ijtimoiy faollik, tashabbuskorlik, o‘qishga va kasbga bo‘lgan hurmat va ijtimoiy mas’ullik hissini keng targ‘ib qilish;',
  'talabalarning ijtimoiy-siyosiy va huquqiy ongini rivojlantirish, ularda tanqidiy va tahliliy fikrlash ko‘nikmalarini kengaytirish;',
  'talaba-yoshlarga salbiy illatlar — adolatsizlik, ta’magirlik, mahalliychilikning salbiy oqibatlarini anglatish;',
  'talaba-yoshlarning bo‘sh vaqtlarini mazmunli tashkil etish, ularning qiziqishlari asosida ilmiy-ijodiy faoliyatini tashkil etish;',
  'manzillashgan ma’naviy-axloqiy va tarbiyaviy ishlarni takomillashtirib borish;',
  'Yangi O‘zbekiston sharoitida mamlakatimizda amalga oshirilayotgan islohotlarni talaba-yoshlar orasida keng targ‘ib etish;',
  'talaba-yoshlar orasida axloqiy, estetik, siyosiy, huquqiy, badiiy tarbiyani shakllantirish ishlarini yo‘lga qo‘yish;',
  'milliy urf-odatlar va qadriyatlar targ‘ibotiga bag‘ishlangan anjumanlar, davra suhbatlari va uchrashuvlarni tashkil etish;',
  'talabalarning ma’naviy va jismoniy kamolotini yuksaltirish ishlarini takomillashtirishga ko‘maklashish;',
  'universitetda ma’naviy, ma’rifiy va tarbiyaviy ishlarning ustuvor yo‘nalishlarini belgilash, bu borada zarur me’yoriy hujjatlarni ishlab chiqish va amalga oshirilishini ta’minlash;',
  'diniy ekstremizm, terrorizm, giyohvandlik va uyushgan jinoyatchilikka qarshi kurash borasida talaba-yoshlar orasida mafkuraviy immunitetni qaror toptirish;',
  'yoshlarning musiqa, rassomlik, adabiyot, teatr va san’atning boshqa turlariga qiziqishlarini oshirish, iste’dodini yuzaga chiqarishga ko‘maklashish, ularni jismoniy chiniqtirish va sport sohasida qobiliyatini namoyon qilishlari uchun zarur sharoitlar yaratish;',
  'yoshlar ma’naviyatini oshirish, ular orasida kitobxonlik madaniyatini yuksaltirish;',
  'talaba qizlarni kasb-hunar egallashlariga ko‘maklashish ishlarini tizimli tashkil etish;',
  'Respublika Ma’naviyat va ma’rifat markazining shahar va tuman bo‘limlari hamda mamlakatimizda faoliyat olib borayotgan jamg‘armalar, jamoat tashkilotlari bilan hamkorlikda ma’naviy-ma’rifiy ishlarni takomillashtirishda faol ishtirok etish.',
];

const T = {
  uz: {
    crumbHome: 'Bosh sahifa', crumbTuzilma: 'Tuzilma', crumbBolimlar: 'Boʻlimlar', crumbThis: 'Yoshlar bilan ishlash, maʼnaviyat-maʼrifat boʻlimi',
    tag: 'Boʻlimlar', title: 'Yoshlar bilan ishlash,', emphasis: 'maʼnaviyat-maʼrifat boʻlimi',
    hMaqsad: 'Boʻlimning asosiy maqsadi', hVazifa: 'Boʻlimning asosiy vazifalari',
    role: 'Yoshlar bilan ishlash, maʼnaviyat-maʼrifat boʻlimi boshligʻi',
  },
  ru: {
    crumbHome: 'Главная', crumbTuzilma: 'Структура', crumbBolimlar: 'Отделы', crumbThis: 'Отдел по работе с молодёжью, духовности и просветительства',
    tag: 'Отделы', title: 'Отдел по работе с молодёжью,', emphasis: 'духовности и просветительства',
    hMaqsad: 'Основная цель отдела', hVazifa: 'Основные задачи отдела',
    role: 'Начальник отдела по работе с молодёжью, духовности и просветительства',
  },
  en: {
    crumbHome: 'Home', crumbTuzilma: 'Structure', crumbBolimlar: 'Departments', crumbThis: 'Department for Youth Affairs, Spirituality and Enlightenment',
    tag: 'Departments', title: 'Department for Youth Affairs,', emphasis: 'Spirituality and Enlightenment',
    hMaqsad: 'Main goal of the department', hVazifa: 'Main tasks of the department',
    role: 'Head of the Department for Youth Affairs, Spirituality and Enlightenment',
  },
};

export default function YoshlarManaviyat() {
  const { lang } = useTranslation();
  const tr = T[lang] || T.uz;

  return (
    <OrgDetail
      tag={tr.tag}
      title={tr.title}
      emphasis={tr.emphasis}
      breadcrumbs={[
        { label: tr.crumbHome, to: '/' },
        { label: tr.crumbTuzilma, to: '/tuzilma' },
        { label: tr.crumbBolimlar, to: '/bolimlar' },
        { label: tr.crumbThis },
      ]}
      leader={{
        name: 'Raxmanov Asatilla Izzatilla oʻgʻli',
        role: tr.role,
        photo: '/bolimlar/raxmanov-asatilla.png',
      }}
      intro={[LEAD]}
      sections={[
        { heading: tr.hMaqsad, text: MAQSAD },
        { heading: tr.hVazifa, items: VAZIFALAR },
      ]}
    />
  );
}
