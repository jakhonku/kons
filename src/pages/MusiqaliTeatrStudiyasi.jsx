import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Ijodiy faoliyat' },
  { label: 'Musiqali teatr studiyasi' },
];

export default function MusiqaliTeatrStudiyasi() {
  return (
    <InfoPage
      tag="Ijodiy faoliyat"
      title="Musiqali teatr"
      emphasis="studiyasi"
      breadcrumbs={BREADCRUMBS}
      lead="Konservatoriya qoshidagi Musiqali teatr studiyasi 1986-yilda tashkil etilgan. Studio talabalar uchun professional sahna tajribasini taqdim etadi va yiliga 4 ta opera, 2 ta musiqali spektakl va 30+ kontsert tayyorlaydi."
      stats={[
        { value: '1986', label: 'Tashkil etilgan' },
        { value: '4', label: 'Yillik opera' },
        { value: '450', label: 'Joy soni' },
      ]}
      sections={[
        {
          heading: "Joriy va kelgusi spektakllar",
          cards: [
            { tag: 'Opera · Premyera', title: 'La Traviata (G. Verdi)', desc: "Bahor mavsumining asosiy premyerasi. Toʻrtta sahna chiqishi.", meta: '12, 14, 18, 22 may 2026' },
            { tag: 'Opera', title: 'Ayjamol (M. Bafoyev)', desc: "Zamonaviy oʻzbek operasi. Mahalliy sahna mahorati.", meta: '5, 12 iyun 2026' },
            { tag: 'Musiqali spektakl', title: 'Sharqning gultoji', desc: "Milliy raqs va musiqa kompozitsiyasi.", meta: '2, 8 iyun 2026' },
            { tag: 'Bolalar', title: "Maqom ertaklari", desc: "Bolalar uchun musiqali sahna asari.", meta: 'Har shanba, 11:00' },
          ],
        },
        {
          heading: "Studio jamoasi",
          items: [
            { title: "Badiiy rahbar — prof. Aliyev Otabek Sherzodovich", desc: "Oʻzbekiston xalq artisti. 15+ yil tajriba." },
            { title: "Bosh dirijyor — prof. Yusupov Akbar Murodovich", desc: "Orkestr sinfi kafedrasi mudiri." },
            { title: "Bosh rejissyor — Karimov Sardor Bobirovich", desc: "Toshkent davlat teatr san'ati instituti professori." },
            { title: "Xormeyster — prof. Tursunova Dilfuza Otabekovna", desc: "Xor dirijyorligi kafedrasi mudiri." },
            { title: "Bosh xoreograf — Mirzayeva Gulnora Olimovna", desc: "Milliy va klassik raqs ustasi." },
            { title: "Studio direktori — Akhmedov Davron Sherzodovich", desc: "Loyiha boshqaruvi va sahna ishlab chiqarish." },
          ],
        },
        {
          heading: "Talabalar uchun",
          items: [
            "Vokal va sahna mahorati intensiv treninglari",
            "Klassik repertuarni oʻrganish",
            "Kostyum dizayni va sahna jihozlanishi",
            "Aktyorlik mahorati va sahna nutqi",
            "Operatorlik va sahna texnikasi",
            "Xalqaro festivallarda ishtirok etish imkoniyati",
          ],
        },
        {
          heading: "Chipta va aboniment",
          table: {
            head: ['Spektakl turi', 'Standart chipta', 'Talaba chiptasi', 'Sezonda 4 ta'],
            rows: [
              ['Premyera (asosiy sahna)', "150 000 soʻm", "75 000 soʻm", "480 000 soʻm"],
              ['Opera (asosiy sahna)', "120 000 soʻm", "60 000 soʻm", "400 000 soʻm"],
              ['Musiqali spektakl', "100 000 soʻm", "50 000 soʻm", "320 000 soʻm"],
              ['Bolalar spektakli', "60 000 soʻm", "30 000 soʻm", "192 000 soʻm"],
            ],
          },
        },
      ]}
      contact={{
        title: "Studio kassasi va aloqa",
        responsible: "Akhmedov Davron Sherzodovich (direktor)",
        phone: '+998 71 234-56-87',
        email: 'teatr@konservatoriya.uz',
        address: "2-bino, Opera zali, kassa har kuni 10:00–19:00",
        hours: 'Spektakllar — har juma, shanba va yakshanba',
      }}
    />
  );
}
