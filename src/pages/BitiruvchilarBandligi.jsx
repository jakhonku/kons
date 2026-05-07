import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: "Ta'lim", to: '/talim' },
  { label: 'Bitiruvchilar bandligi' },
];

export default function BitiruvchilarBandligi() {
  return (
    <InfoPage
      tag="Career"
      title="Bitiruvchilar"
      emphasis="bandligi"
      breadcrumbs={BREADCRUMBS}
      lead="Career markazi bitiruvchilarni mehnat bozoriga tayyorlash, ish oʻrinlari bilan ta'minlash va kasbiy oʻsishini qoʻllab-quvvatlash bilan shugʻullanadi. Markazning xizmatlari konservatoriya talabalari va bitiruvchilari uchun bepul."
      stats={[
        { value: '92%', label: '6 oy ichida bandlik' },
        { value: '180+', label: 'Hamkor tashkilot' },
        { value: '350+', label: 'Yillik bitiruvchi' },
      ]}
      sections={[
        {
          heading: "Career markazining xizmatlari",
          items: [
            { title: 'Vakansiyalar bazasi', desc: "Oʻzbekiston va xorijiy musiqa muassasalari, teatrlar, ta'lim markazlari vakansiyalari." },
            { title: "CV va portfolio tayyorlash", desc: "Kasbiy CV, motivatsion xat va ijodiy portfoliolar yaratishda yordam." },
            { title: "Suhbatga tayyorgarlik", desc: "Mehnat suhbatlari simulyatsiyalari va kasbiy intervyu mahoratini oshirish." },
            { title: "Mentorlik dasturi", desc: "Tajribali bitiruvchilar va xalqaro mutaxassislar bilan jonli aloqalar." },
            { title: 'Stajirovkalar', desc: "Yetakchi musiqa muassasalarida amaliyot oʻtash dasturlari." },
            { title: "Tadbirkorlik akademiyasi", desc: "Mustaqil ijodiy biznes ochish boʻyicha treninglar va grantlar." },
          ],
        },
        {
          heading: "Bitiruvchilar ish oʻrinlari (asosiy yoʻnalishlar)",
          table: {
            head: ['Sektor', 'Asosiy ish beruvchilar', 'Bitiruvchi ulushi'],
            rows: [
              ['Davlat teatrlari va kontsert tashkilotlari', 'Davlat akademik teatri, Filarmoniya, Milliy orkestr', '32%'],
              ['Ta\'lim muassasalari', 'OTM, kollej, musiqa maktabi', '28%'],
              ['Xususiy ijodiy faoliyat', 'Solo karyera, mustaqil loyihalar', '18%'],
              ['Xalqaro tashkilotlar', 'Xorijiy orkestr va teatrlar', '12%'],
              ['Studio va prodyuserlik', 'Yozish studiyasi, audio prodyuser', '10%'],
            ],
          },
        },
        {
          heading: "Faol vakansiyalar",
          cards: [
            { tag: 'Toshkent', title: "Birinchi violinist", desc: "Oʻzbekiston Davlat akademik orkestri uchun.", meta: 'Muddat: 30.06.2026' },
            { tag: 'Buxoro', title: "Solist xonanda", desc: "Buxoro davlat opera teatri.", meta: 'Muddat: 15.07.2026' },
            { tag: 'Samarqand', title: "Musiqa pedagogi", desc: "Samarqand viloyati musiqa maktablari uchun.", meta: 'Muddat: 25.07.2026' },
          ],
        },
      ]}
      contact={{
        title: "Career markaziga murojaat",
        responsible: "Yusupova Madina Otabekovna",
        phone: '+998 71 234-56-99',
        email: 'career@konservatoriya.uz',
        address: "1-bino, 215-xona",
        hours: 'Dushanba – Juma, 10:00 – 17:00',
      }}
    />
  );
}
