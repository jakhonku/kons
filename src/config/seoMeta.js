/* ============================================================
   MARKAZLASHTIRILGAN SEO META
   ------------------------------------------------------------
   Har bir ochiq sahifa uchun unikal <title> va meta description.
   Layout shu xaritadan foydalanib, route oʻzgarganda meta
   teglarini yangilaydi (src/components/Seo.jsx orqali).

   Eslatma: oʻz ichida <Seo /> chaqiradigan sahifalar (Home,
   Rahbariyat, Yangiliklar, Taqvim, QabulTalablari, QabulKvotasi,
   CallCenter) bu xaritaga kiritilmagan — ular oʻz meta'sini
   oʻzi belgilaydi va Layout ularga tegmaydi.
   ============================================================ */

export const SEO_MAP = {

  '/rahbariyat/rektor': {
    title: 'Rektor',
    description: 'Oʻzbekiston Davlat Konservatoriyasi rektori — biografiyasi, ilmiy va ijodiy faoliyati hamda qabul kunlari.',
  },
  '/vasiylik-kengashi': {
    title: 'Vasiylik kengashi',
    description: 'Oʻzbekiston Davlat Konservatoriyasi qoshidagi Vasiylik kengashi tarkibi va faoliyati haqida maʼlumot.',
  },
  '/fakultetlar': {
    title: 'Fakultetlar',
    description: 'Oʻzbekiston Davlat Konservatoriyasi fakultetlari — taʼlim yoʻnalishlari, dekanlar va kafedralar tarkibi.',
  },
  '/kafedralar': {
    title: 'Kafedralar',
    description: 'Oʻzbekiston Davlat Konservatoriyasi kafedralari — mutaxassisliklar, kafedra mudirlari va professor-oʻqituvchilar.',
  },
  '/bolimlar': {
    title: 'Maʼmuriy boʻlimlar',
    description: 'Oʻzbekiston Davlat Konservatoriyasining maʼmuriy va xizmat koʻrsatish boʻlimlari hamda ularning rahbarlari.',
  },
  '/bolimlar/devonxona-arxiv': {
    title: 'Devonxona va arxiv boʻlimi',
    description: 'Devonxona va arxiv boʻlimi — ish yuritish, ijro intizomi va hujjatlar aylanishini taʼminlovchi boʻlim.',
  },
  '/bolimlar/axborot-resurs-markazi': {
    title: 'Axborot resurs markazi',
    description: 'Axborot resurs markazi — 150 000 dan ortiq musiqiy va badiiy adabiyot fondi hamda oʻquv zallari.',
  },
  '/bolimlar/yoshlar-manaviyat-marifat': {
    title: 'Yoshlar bilan ishlash, maʼnaviyat-maʼrifat boʻlimi',
    description: 'Talabalar maʼnaviyati, tarbiyasi va ijodiy faoliyatini tashkil etuvchi yoshlar bilan ishlash boʻlimi.',
  },
  '/bolimlar/fonoteka': {
    title: 'Fonoteka boʻlimi',
    description: '1954-yilda tashkil etilgan Fonoteka boʻlimi — 3000 dan ortiq ijro va kuy asarlari saqlanadigan musiqiy arxiv.',
  },
  '/bolimlar/iqtidorli-talabalar-sektori': {
    title: 'Iqtidorli talabalar ilmiy-tadqiqot sektori',
    description: 'Talabalarni ilmiy-tadqiqot faoliyatiga jalb etish va iqtidorli yoshlarni qoʻllab-quvvatlovchi sektor.',
  },
  '/bolimlar/murojaatlar-nazorat': {
    title: 'Murojaatlar, nazorat va monitoring boʻlimi',
    description: 'Jismoniy va yuridik shaxslar murojaatlari bilan ishlash hamda ijro intizomi nazorati boʻlimi.',
  },
  '/bolimlar/talim-sifati': {
    title: 'Taʼlim sifatini taʼminlash boʻlimi',
    description: 'Taʼlim sifati monitoringi, ichki baholash va davlat akkreditatsiyasiga tayyorgarlik boʻlimi.',
  },
  '/bolimlar/xalqaro-aloqalar': {
    title: 'Xalqaro aloqalar boʻlimi',
    description: 'Konservatoriya Xalqaro aloqalar boʻlimi — 100 ga yaqin xorijiy oliy taʼlim muassasasi bilan hamkorlik va akademik mobillik.',
  },
  '/nukus-filiali': {
    title: 'Nukus filiali',
    description: 'Oʻzbekiston Davlat Konservatoriyasi Nukus filiali — taʼlim yoʻnalishlari va faoliyati haqida maʼlumot.',
  },
  '/jamoat-tashkilotlari': {
    title: 'Jamoat tashkilotlari',
    description: 'Konservatoriyadagi jamoat tashkilotlari — kasaba uyushmasi, Yoshlar ittifoqi va Xotin-qizlar maslahat kengashi.',
  },
  '/jamoat-tashkilotlari/kasaba-uyushmasi': {
    title: 'Kasaba uyushmasi',
    description: 'Oʻzbekiston Davlat Konservatoriyasi kasaba uyushmasi — xodimlar manfaatlarini himoya qiluvchi tashkilot.',
  },
  '/jamoat-tashkilotlari/yoshlar-ittifoqi': {
    title: 'Yoshlar ittifoqi',
    description: 'Konservatoriya Yoshlar ittifoqi boshlangʻich tashkiloti — talabalar tashabbuslari va tadbirlari.',
  },
  '/jamoat-tashkilotlari/xotin-qizlar-maslahat-kengashi': {
    title: 'Xotin-qizlar maslahat kengashi',
    description: 'Konservatoriya Xotin-qizlar maslahat kengashi — qizlar va ayollarni qoʻllab-quvvatlash boʻyicha faoliyat.',
  },
  '/vakansiyalar': {
    title: 'Boʻsh ish oʻrinlari',
    description: 'Oʻzbekiston Davlat Konservatoriyasidagi boʻsh ish oʻrinlari va vakansiyalar — tanlov asosida toʻldiriladi.',
  },
  '/kontaktlar': {
    title: 'Kontaktlar',
    description: 'Oʻzbekiston Davlat Konservatoriyasi manzili, telefon raqamlari, elektron pochta va ish vaqti.',
  },
  '/oquv-rejalar': {
    title: 'Ishchi oʻquv rejalar',
    description: 'Oʻzbekiston Davlat Konservatoriyasi 2025–2026 oʻquv yili ishchi oʻquv rejalari (PDF).',
  },
  '/sillabuslar': {
    title: 'Fanlarning oʻquv dasturlari',
    description: 'Oʻzbekiston Davlat Konservatoriyasi fan dasturlari va sillabuslari — taʼlim yoʻnalishlari boʻyicha (PDF).',
  },
  '/togaraklar': {
    title: 'Toʻgaraklar',
    description: 'Konservatoriyada faoliyat olib borayotgan sport, maʼnaviy-maʼrifiy va til toʻgaraklari — jadval va masʼullar.',
  },
  '/kelajakka-qadam': {
    title: '«Kelajakka qadam» karyera markazi',
    description: 'Bitiruvchilar bandligini taʼminlash markazi — ishga joylashtirish darajasi 93%, 200 dan ortiq hamkor tashkilot.',
  },
  '/bitiruvchilar-bandligi': {
    title: 'Bitiruvchilar bandligi',
    description: 'Oʻzbekiston Davlat Konservatoriyasi bitiruvchilarining bandligi va kasbiy faoliyati boʻyicha tahliliy maʼlumot.',
  },
  '/registrator': {
    title: 'Registrator ofisi',
    description: 'Registrator ofisi — talabalarga oʻquv jarayoniga oid xizmatlar, hujjat buyurtmasi va Telegram bot.',
  },
  '/online-murojaat': {
    title: 'Onlayn murojaat',
    description: 'Oʻzbekiston Davlat Konservatoriyasiga onlayn murojaat yuborish — taklif, ariza va shikoyatlar uchun forma.',
  },
  '/hemis-talaba': {
    title: 'HEMIS — talaba',
    description: 'Talabalar uchun HEMIS axborot tizimi — student.konservatoriya.uz orqali oʻquv jarayoniga kirish.',
  },
  '/hemis-oquvchi': {
    title: 'HEMIS — oʻqituvchi',
    description: 'Professor-oʻqituvchilar uchun HEMIS tizimi — hemis.konservatoriya.uz orqali oʻquv jarayonini boshqarish.',
  },
  '/musiqa-jurnali': {
    title: '«Musiqa» jurnali',
    description: 'Oʻzbekiston Davlat Konservatoriyasi «Musiqa» ilmiy-uslubiy jurnali — sonlar va maqolalar (PDF).',
  },
  '/musiqa-cholgulari-laboratoriyasi': {
    title: '«Milliy cholgʻu» laboratoriyasi',
    description: '1943-yilda tashkil etilgan «Milliy cholgʻu» ilmiy-ishlab chiqarish eksperimental laboratoriyasi — 8 ta ixtiro patenti.',
  },
  '/musiqali-teatr-studiyasi': {
    title: 'Musiqali teatr studiyasi',
    description: 'Oʻzbekiston Davlat Konservatoriyasi musiqali teatr studiyasi — sahna asarlari va talabalar ijodi.',
  },
  '/jonli-efir': {
    title: 'Jonli efir',
    description: 'Oʻzbekiston Davlat Konservatoriyasi konsert va tadbirlarining jonli efir translyatsiyalari.',
  },
  '/hamkor-tashkilotlar': {
    title: 'Hamkor tashkilotlar',
    description: 'Konservatoriyaning xalqaro hamkorlari — 100 ga yaqin xorijiy oliy taʼlim muassasalari bilan aloqalar.',
  },
  '/xalqaro-memorandumlar': {
    title: 'Xalqaro memorandumlar',
    description: 'Oʻzbekiston Davlat Konservatoriyasining xorijiy muassasalar bilan imzolangan xalqaro memorandumlari.',
  },
  '/yashil-universitet': {
    title: 'Yashil Universitet',
    description: 'Oʻzbekiston Davlat Konservatoriyasining ekologik tashabbuslari va «Yashil Universitet» dasturi.',
  },
  '/fotogalereya': {
    title: 'Fotogalereya',
    description: 'Oʻzbekiston Davlat Konservatoriyasi tadbirlari, binosi va konsert zallarining fotogalereyasi.',
  },
  '/videogalereya': {
    title: 'Videogalereya',
    description: 'Oʻzbekiston Davlat Konservatoriyasi konsertlari va tadbirlarining videogalereyasi.',
  },
};

export function getSeoForPath(pathname) {
  if (!pathname) return null;
  const p =
    pathname.length > 1 && pathname.endsWith('/')
      ? pathname.slice(0, -1)
      : pathname;
  return SEO_MAP[p] || null;
}
