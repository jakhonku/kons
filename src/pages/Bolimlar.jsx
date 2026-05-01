import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Tuzilma', to: '/tuzilma' },
  { label: "Bo'limlar" },
];

export default function Bolimlar() {
  return (
    <InfoPage
      tag="Tuzilma"
      title="Ma'muriy"
      emphasis="bo'limlar"
      breadcrumbs={BREADCRUMBS}
      lead="Konservatoriyaning ma'muriy va xizmat ko'rsatish bo'limlari o'quv jarayoni, ilmiy faoliyat va talabalar hayotini muvofiqlashtiruvchi qo'llab-quvvatlovchi tuzilmalar tizimini tashkil etadi."
      sections={[
        {
          heading: "O'quv-uslubiy bo'limlar",
          cards: [
            { tag: "01", title: "O'quv-metodik bo'lim", desc: "O'quv rejalari, sillabuslar va metodik ta'minotni boshqaradi.", meta: "Boshliq: Karimov Bobur Sherzodovich" },
            { tag: "02", title: "Bakalavriat bo'limi", desc: "Bakalavr ta'limining barcha jarayonlarini muvofiqlashtiradi.", meta: "Boshliq: Yusupova Madina Otabekovna" },
            { tag: "03", title: "Magistratura bo'limi", desc: "Magistratura va doktoranturani boshqaradi.", meta: "Boshliq: Akhmedov Davron Sherzodovich" },
          ],
        },
        {
          heading: 'Ilmiy va xalqaro bo\'limlar',
          cards: [
            { tag: "04", title: "Ilmiy-tadqiqot markazi", desc: "Ilmiy loyihalar, grantlar va konferensiyalarni boshqaradi.", meta: "Boshliq: prof. Mirzayeva Gulnora Abdullayevna" },
            { tag: "05", title: "Xalqaro aloqalar bo'limi", desc: "Xorijiy hamkorlar va talabalar mobilligini muvofiqlashtiradi.", meta: "Boshliq: Yusupova Madina Otabekovna" },
            { tag: "06", title: "Ilmiy nashrlar va kutubxona", desc: "Ilmiy jurnallar, nashrlar va elektron resurslar.", meta: "Boshliq: Tursunova Dilfuza Otabekovna" },
          ],
        },
        {
          heading: "Ma'muriy va xizmat bo'limlari",
          cards: [
            { tag: "07", title: "Yuridik bo'lim", desc: "Huquqiy hujjatlar, shartnomalar va davlat hujjatlari.", meta: "Boshliq: Aliyev Bobur Sherzodovich" },
            { tag: "08", title: "Kadrlar bo'limi", desc: "Xodimlar tanlovi, attestatsiya va malaka oshirish.", meta: "Boshliq: Karimova Nargiza Erkinovna" },
            { tag: "09", title: "Moliya-buxgalteriya bo'limi", desc: "Byudjet, ish haqi va moliyaviy hisobot.", meta: "Bosh hisobchi: Sodiqova Madina Olimovna" },
            { tag: "10", title: "Axborot texnologiyalari bo'limi", desc: "IT infratuzilma, HEMIS, veb-resurslar.", meta: "Boshliq: Olimov Sherzod Akbarovich" },
            { tag: "11", title: "Iqtisodiy-rejalashtirish bo'limi", desc: "Davlat dasturlari va loyihalarni rejalashtirish.", meta: "Boshliq: Rashidov Davron Murodovich" },
            { tag: "12", title: "Talabalar bilan ishlash bo'limi", desc: "Ma'naviyat, marifat va talabalar faoliyati.", meta: "Boshliq: Toshmatov Akbar Sherzodovich" },
          ],
        },
      ]}
      contact={{
        title: "Ma'muriyat qabulxonasi",
        phone: '+998 71 234-56-78',
        email: 'info@konservatoriya.uz',
        hours: 'Dushanba – Juma, 09:00 – 18:00',
      }}
    />
  );
}
