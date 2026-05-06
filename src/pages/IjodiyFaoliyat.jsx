import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Ijodiy faoliyat' },
];

export default function IjodiyFaoliyat() {
  return (
    <InfoPage
      tag="Sahna hayoti"
      title="Konservatoriyaning"
      emphasis="ijodiy faoliyati"
      breadcrumbs={BREADCRUMBS}
      lead="Konservatoriya ijodiy faoliyati — yiliga 200+ konsert, 25+ premyera, 100+ master-klass va 8 ta yirik festival. O'qituvchilar va talabalar O'zbekiston va dunyo bo'ylab faol gastrol va loyihalarda ishtirok etadi."
      stats={[
        { value: '200+', label: "Yillik konsert" },
        { value: '25+', label: "Premyera" },
        { value: '8', label: "Yillik festival" },
      ]}
      sections={[
        {
          heading: 'Asosiy yo\'nalishlar',
          cards: [

            { tag: '02', title: 'Jonli efir', desc: "Tadbirlarning real-time onlayn translatsiyasi.", meta: '/jonli-efir' },
          ],
        },
        {
          heading: 'Yillik festivallar',
          cards: [
            { tag: 'Sentabr', title: 'Toshkent Music Festival', desc: "Xalqaro klassik musiqa festivali. 12 davlat ishtiroki.", meta: '15–25 sentabr' },
            { tag: 'Oktabr', title: 'Maqom Days', desc: "An'anaviy maqom san'atiga bag'ishlangan haftalik festival.", meta: '10–17 oktabr' },
            { tag: 'Noyabr', title: 'Young Artists Forum', desc: "Iste'dodli yosh ijrochilar uchun xalqaro tanlov-festival.", meta: '5–12 noyabr' },
            { tag: 'Mart', title: 'Spring Compositions', desc: "Bastakorlar haftaligi. Yangi asarlar premyerasi.", meta: '15–22 mart' },
            { tag: 'Aprel', title: 'Folk Music Festival', desc: "Markaziy Osiyo xalq musiqasi va etnografiya festivali.", meta: '10–15 aprel' },
            { tag: 'May', title: 'Graduation Concerts', desc: "Bitiruvchilar konsertlari va ijodiy himoyalar.", meta: '20–30 may' },
          ],
        },
        {
          heading: "Ijodiy yutuqlar (2024–2025)",
          items: [
            "Marselle (Italiya) opera teatrida 2 ta xalqaro premyera",
            "Berlin Konzerthaus va Vena Musikverein da konsertlar",
            "12 nafar talabaning xalqaro tanlovlarda yutuqi",
            "Karnegi Hall (NY) sahnasida solo konsert",
            "Salzburg Festspiele festivalida ishtirok",
            "Janubiy Koreya, Yaponiya bilan birga sahna loyihalari",
            "5 ta yangi audio-CD nashri",
            "Toshkent Opera teatri bilan 4 ta birgalikdagi premyera",
          ],
        },
      ]}
      contact={{
        title: "Ijodiy ishlar bo'limi",
        responsible: "Toshmatov Behruz Aliyevich (prorektor)",
        phone: '+998 71 234-56-82',
        email: 'ijod@konservatoriya.uz',
      }}
    />
  );
}
