import OrgDetail from '../components/OrgDetail';
import { useTranslation } from '../contexts/LanguageContext';

const LEAD = `O‘zbekiston davlat konservatoriyasi Devonxona va arxiv bo‘limi – ish yuritish va ijro intizomini ta’minlashga hamda hujjatlarni tayyorlash jarayonlari, shuningdek, o‘z vaqtida mas’ullarga yetkazishni tashkil etishga qaratilgan.`;

const ASOS = `Devonxona o‘z faoliyatini O‘zbekiston Respublikasi Konstitutsiyasi, Qonunlari, O‘zbekiston Respublikasi Prezidentining farmonlari, qarorlari va farmoyishlari, O‘zbekiston Respublikasi Vazirlar Mahkamasining qarorlari va farmoyishlari, tegishli vazirlik va idoralarning me’yoriy hujjatlari, shuningdek Konservatoriya ustavi hamda nizomga muvofiq ish olib boradi.
Shuningdek, devonxona o‘z faoliyatini yil davomida O‘zbekiston Respublikasi Vazirlar Mahkamasining 1999-yil 29-martdagi 140-sonli qarori hamda Oliy va o‘rta maxsus ta’lim vazirligining 2021-yil 7-avgustdagi 374-sonli buyrug‘i hamda O‘zbekiston davlat konservatoriyasining ish yuritish va hujjatlar ijrosining nazoratini tashkil etish to‘g‘risidagi yo‘riqnomasi asosida olib boradi.
Devonxona xodimlar tarkibi mudir, ish yurituvchilar va arxivariusdan iborat. Devonxonaning har bir xodimi o‘ziga biriktirilgan vazifa uchun mas’ul va lavozim yo‘riqnomasi asosida faoliyat yuritadi.`;

const VAZIFALAR = [
  'Konservatoriyada ish yuritish va hujjatlar bilan ishlash tizimini takomillashtirish;',
  'Hujjatlar aylanishi tizimini optimallashtirish, ish yuritish va hujjatlar bilan ishlash, shuningdek arxiv ishi masalalari bo‘yicha Konservatoriyaning tarkibiy bo‘linmalari faoliyati yuzasidan tashkiliy-uslubiy, muvofiqlashtirish va nazorat qilish ishlarini amalga oshirish;',
  'Amaldagi standartlar va qoidalarga muvofiq hujjatlarni tayyorlash va rasmiylashtirish;',
  'Konservatoriyada hujjatlar bilan ishlashni hamda ularning bajarilishini nazorat qilish;',
  'Zamonaviy axborot kommunikatsion texnologiyalarni qo‘llagan holda hujjatlar bilan ishlash va ish yuritishni tashkil etishning yangi uslublarini joriy etish.',
];

const FUNKSIYALAR = [
  'Konservatoriyada hujjatlar bilan ishlash va ish yuritish jarayonini ta’minlash;',
  'Kirish va chiqish hujjatlarini o‘z vaqtida rasmiylashtirish, dastlabki ishlov berish hamda taalluqliligi bo‘yicha ijrochilarga yetkazish;',
  'Hujjatlarning ijro muddatlarini to‘g‘ri rasmiylashtirish va nazoratini olib borish;',
  'Joriy ish yuritish hujjatlari, shu jumladan Konservatoriya rektorining buyruqlari va boshqa yo‘riq hujjatlarini ro‘yxatga olish, saqlash va tegishli ijrochi bo‘linmalarga yetkazish, hujjatlar yig‘majildini shakllantirish hamda ularni saqlovga tayyorlash va topshirish;',
  'Xizmat hujjatlarini tayyorlash, chiqarish, ko‘paytirish va tarqatish;',
  'Konservatoriya rahbariyati tomonidan o‘tkaziladigan ishlab chiqarish, tezkor, apparat va boshqa yig‘ilishlarini tashkil etishda qatnashish, ushbu yig‘ilishlarni tashkil etishda texnik xizmat ko‘rsatish, xizmat safarlari hujjatlarini rasmiylashtirish;',
  'Konservatoriya faoliyatini hujjatlashtirishni rivojlantirish, shuningdek ijro intizomini takomillashtirish yuzasidan mavjud va istiqbol holat bo‘yicha axboriy-tahliliy ma’lumotlarni tayyorlash va kiritish;',
  'Jismoniy va yuridik shaxslardan kelib tushgan murojaatlarni (mas’ul bilan hamkorlikda) maxsus daftarga qayd etish, rektorning izosidan so‘ng mas’ullarga tarqatish hamda ijrosini nazorat qilish;',
  'Konservatoriya rahbariyatining boshqaruv va yo‘riq qarorlari, topshiriqlari va boshqalarni tayyorlash va bajarishda o‘z vakolati doirasida ishtirok etish;',
  'Devonxona o‘z vakolati doirasida Konservatoriyaning oldiga qo‘ygan maqsad va vazifalaridan kelib chiqib boshqa funksiyalarni ham bajarish.',
];

const T = {
  uz: {
    crumbHome: 'Bosh sahifa', crumbTuzilma: 'Tuzilma', crumbBolimlar: 'Boʻlimlar', crumbThis: 'Devonxona va arxiv boʻlimi',
    tag: 'Boʻlimlar', title: 'Devonxona va arxiv', emphasis: 'boʻlimi',
    hAsos: 'Faoliyat asoslari', hVazifa: 'Boʻlimning vazifalari', hFunksiya: 'Boʻlimning funksiyalari',
    role: 'Devonxona va arxiv boʻlimi boshligʻi',
  },
  ru: {
    crumbHome: 'Главная', crumbTuzilma: 'Структура', crumbBolimlar: 'Отделы', crumbThis: 'Канцелярия и архивный отдел',
    tag: 'Отделы', title: 'Канцелярия и', emphasis: 'архивный отдел',
    hAsos: 'Основы деятельности', hVazifa: 'Задачи отдела', hFunksiya: 'Функции отдела',
    role: 'Начальник канцелярии и архивного отдела',
  },
  en: {
    crumbHome: 'Home', crumbTuzilma: 'Structure', crumbBolimlar: 'Departments', crumbThis: 'Chancellery and Archive Department',
    tag: 'Departments', title: 'Chancellery and', emphasis: 'Archive Department',
    hAsos: 'Basis of activity', hVazifa: 'Tasks of the department', hFunksiya: 'Functions of the department',
    role: 'Head of the Chancellery and Archive Department',
  },
};

export default function DevonxonaBolim() {
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
        name: 'Axmedova Maʼsuma Faxruddinovna',
        role: tr.role,
        photo: '/bolimlar/axmedova-masuma.jpeg',
      }}
      intro={[LEAD]}
      sections={[
        { heading: tr.hAsos, text: ASOS },
        { heading: tr.hVazifa, items: VAZIFALAR },
        { heading: tr.hFunksiya, items: FUNKSIYALAR },
      ]}
    />
  );
}

