import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Tuzilma', to: '/tuzilma' },
  { label: 'Jamoat tashkilotlari' },
];

export default function JamoatTashkilotlari() {
  return (
    <InfoPage
      tag="Tuzilma"
      title="Jamoat"
      emphasis="tashkilotlari"
      breadcrumbs={BREADCRUMBS}
      lead="Konservatoriyaning jamoat tashkilotlari xodimlar va talabalarning kasbiy, ijodiy va ijtimoiy faolligini muvofiqlashtiradi. Tashkilotlar aʼzolari koʻngillilik asosida ishlaydi va jamoatchilik nazoratini taʼminlaydi."
      sections={[
        {
          heading: "Faoliyat koʻrsatuvchi tashkilotlar",
          cards: [
            {
              tag: '01',
              title: "Kasaba uyushmasi qoʻmitasi",
              desc: "Xodimlar va talabalarning mehnat huquqlarini himoya qiluvchi, sogʻlom yashash sharoitlarini taʼminlovchi asosiy tashkilot.",
              meta: 'Rais: Karimov Bobur Sherzodovich',
            },
            {
              tag: '02',
              title: "Yoshlar ittifoqi tashkiloti",
              desc: "Talabalar tashabbuslari, koʻngillilik harakatlari va maʼnaviy-marifiy tadbirlarni tashkil etadi.",
              meta: 'Rais: Yusupov Sardor Bobirovich',
            },
            {
              tag: '03',
              title: "Talabalar uyushmasi",
              desc: "Talabalar manfaatlarini himoya qiluvchi, ijodiy va ilmiy faollikni ragʻbatlantiruvchi oʻzini-oʻzi boshqaruv organi.",
              meta: "Rais: Mirzayeva Nargiza Otabekovna",
            },
            {
              tag: '04',
              title: "Xotin-qizlar qoʻmitasi",
              desc: "Ayol xodimlar va talabalarning kasbiy oʻsishi, oilaviy muammolari boʻyicha qoʻllab-quvvatlash dasturlari.",
              meta: "Rais: Tursunova Dilfuza Otabekovna",
            },
            {
              tag: '05',
              title: "Ijodiy uyushmalar kengashi",
              desc: "Bastakorlar, ijrochilar va musiqashunoslar uyushmalari bilan hamkorlikni muvofiqlashtiradi.",
              meta: "Rais: prof. Aliyeva Nigora Sherzodovna",
            },
            {
              tag: '06',
              title: "Veteranlar kengashi",
              desc: "Konservatoriya faxriylari va sobiq xodimlari bilan ijtimoiy aloqalarni mustahkamlaydi.",
              meta: 'Rais: prof. Toshmatov Akbar Sherzodovich',
            },
          ],
        },
        {
          heading: "Tashkilotlarning umumiy faoliyati",
          items: [
            "Xodimlarning ijtimoiy himoyasini taʼminlash",
            "Talabalar boshlangʻich tashabbuslarini qoʻllab-quvvatlash",
            "Maʼnaviy-maʼrifiy tadbirlar tashkil etish",
            "Madaniy va sport tadbirlarini oʻtkazish",
            "Sogʻliqni saqlash va dam olish dasturlari",
            "Xayriya va koʻngillilik faoliyati",
          ],
        },
      ]}
      contact={{
        title: 'Jamoat tashkilotlari kengashi',
        phone: '+998 71 234-56-92',
        email: 'jamoat@konservatoriya.uz',
        hours: 'Dushanba – Juma, 14:00 – 17:00',
      }}
    />
  );
}
