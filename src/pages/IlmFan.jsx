import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Ilm-fan' },
];

export default function IlmFan() {
  return (
    <InfoPage
      tag="Ilmiy salohiyat"
      title="Ilmiy va"
      emphasis="ijodiy faoliyat"
      breadcrumbs={BREADCRUMBS}
      lead="Konservatoriyaning ilmiy faoliyati musiqashunoslik, etnomusiqashunoslik, ijrochilik nazariyasi, kompozitsiya texnikalari va musiqa pedagogikasi yo'nalishlarini qamrab oladi. Yiliga 50+ ilmiy maqola, 8+ konferensiya va 3+ monografiya nashr qilinadi."
      stats={[
        { value: '15', label: "Fan doktori" },
        { value: '42', label: "Fan nomzodi" },
        { value: '4', label: "Ilmiy jurnal" },
      ]}
      sections={[
        {
          heading: 'Ilmiy faoliyat yo\'nalishlari',
          cards: [
            { tag: '01', title: 'Ilmiy kengash', desc: "Konservatoriyaning oliy ilmiy organi — ilmiy darajalar va unvonlar himoyasini boshqaradi.", meta: '/ilmiy-kengash' },
            { tag: '02', title: 'Ilmiy loyihalar', desc: "Davlat va xalqaro grantlar asosida amalga oshirilayotgan tadqiqotlar.", meta: '/ilmiy-loyihalar' },
            { tag: '03', title: 'Doktorantura', desc: "PhD va DSc darajalari bo'yicha tayyorgarlik dasturlari.", meta: '/doktorantura' },
            { tag: '04', title: 'Ilmiy konferensiyalar', desc: "Yiliga o'tkaziladigan xalqaro va respublika miqyosidagi konferensiyalar.", meta: '/ilmiy-konferensiyalar' },
            { tag: '05', title: 'Nashriyot', desc: "Konservatoriya nashriyoti — darsliklar, monografiyalar va o'quv qo'llanmalari.", meta: '/nashriyot' },
            { tag: '06', title: "Musiqa cholg'ulari laboratoriyasi", desc: "An'anaviy va zamonaviy cholg'ularni o'rganish va ta'mirlash markazi.", meta: '/musiqa-cholgulari-laboratoriyasi' },
          ],
        },
        {
          heading: 'Ilmiy nashrlar',
          cards: [
            { tag: 'Ilmiy jurnal', title: '"Musiqa" jurnali', desc: "1956-yildan nashr qilinadigan musiqashunoslik jurnali.", meta: '/musiqa-jurnali' },
            { tag: 'Xalqaro', title: 'Eurasian Music Journal', desc: "Markaziy Osiyo va Yevroosiyo musiqa madaniyatiga bag'ishlangan ingliz tilidagi jurnal.", meta: '/eurasian-music-journal' },
            { tag: 'Tahririyat', title: 'Musiqa jurnali tahririyati', desc: "Maqolalarni qabul qilish, ekspertiza va nashriyot jarayoni.", meta: '/musiqa-jurnali-tahririyati' },
          ],
        },
        {
          heading: "Ilmiy faoliyatning yutuqlari (2024–2025)",
          items: [
            "MDH miqyosida 8 nafar PhD himoyasi",
            "Xalqaro nashrlarda 24 ta maqola (Scopus/WoS)",
            "Toshkent Music Forum xalqaro konferensiyasi",
            "Italiya, Germaniya, Janubiy Koreya bilan qo'shma loyihalar",
            "5 ta darslik va 2 ta monografiya nashri",
            "DAAD, Erasmus+ va UNESCO grantlari",
          ],
        },
      ]}
      contact={{
        title: "Ilmiy-ijodiy ishlar prorektorligi",
        responsible: "Toshmatov Behruz Aliyevich",
        phone: '+998 71 234-56-82',
        email: 'ilm@konservatoriya.uz',
        hours: 'Dushanba – Juma, 09:00 – 17:00',
      }}
    />
  );
}
