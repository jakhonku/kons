import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Tuzilma', to: '/tuzilma' },
  { label: "Boʻlimlar" },
];

export default function Bolimlar() {
  return (
    <InfoPage
      tag="Tuzilma"
      title="Ma'muriy"
      emphasis="boʻlimlar"
      breadcrumbs={BREADCRUMBS}
      lead="Konservatoriyaning ma'muriy va xizmat koʻrsatish boʻlimlari oʻquv jarayoni, ilmiy faoliyat va talabalar hayotini muvofiqlashtiruvchi qoʻllab-quvvatlovchi tuzilmalar tizimini tashkil etadi."
      sections={[
        {
          heading: "Oʻquv-uslubiy boʻlimlar",
          cards: [
            { tag: "01", title: "Oʻquv-metodik boʻlim", desc: "Oʻquv rejalari, sillabuslar va metodik ta'minotni boshqaradi.", meta: "Boshliq: Karimov Bobur Sherzodovich" },
            { tag: "02", title: "Bakalavriat boʻlimi", desc: "Bakalavr ta'limining barcha jarayonlarini muvofiqlashtiradi.", meta: "Boshliq: Yusupova Madina Otabekovna" },
            { tag: "03", title: "Magistratura boʻlimi", desc: "Magistratura va doktoranturani boshqaradi.", meta: "Boshliq: Akhmedov Davron Sherzodovich" },
          ],
        },
        {
          heading: 'Ilmiy va xalqaro boʻlimlar',
          cards: [
            { tag: "04", title: "Ilmiy-tadqiqot markazi", desc: "Ilmiy loyihalar, grantlar va konferensiyalarni boshqaradi.", meta: "Boshliq: prof. Mirzayeva Gulnora Abdullayevna" },
            { tag: "05", title: "Xalqaro aloqalar boʻlimi", desc: "Xorijiy hamkorlar va talabalar mobilligini muvofiqlashtiradi.", meta: "Boshliq: Yusupova Madina Otabekovna" },
            { tag: "06", title: "Ilmiy nashrlar va kutubxona", desc: "Ilmiy jurnallar, nashrlar va elektron resurslar.", meta: "Boshliq: Tursunova Dilfuza Otabekovna" },
          ],
        },
        {
          heading: "Ma'muriy va xizmat boʻlimlari",
          cards: [
            { tag: "07", title: "Yuridik boʻlim", desc: "Huquqiy hujjatlar, shartnomalar va davlat hujjatlari.", meta: "Boshliq: Aliyev Bobur Sherzodovich" },
            { tag: "08", title: "Kadrlar boʻlimi", desc: "Xodimlar tanlovi, attestatsiya va malaka oshirish.", meta: "Boshliq: Karimova Nargiza Erkinovna" },
            { tag: "09", title: "Moliya-buxgalteriya boʻlimi", desc: "Byudjet, ish haqi va moliyaviy hisobot.", meta: "Bosh hisobchi: Sodiqova Madina Olimovna" },
            { tag: "10", title: "Axborot texnologiyalari boʻlimi", desc: "IT infratuzilma, HEMIS, veb-resurslar.", meta: "Boshliq: Olimov Sherzod Akbarovich" },
            { tag: "11", title: "Iqtisodiy-rejalashtirish boʻlimi", desc: "Davlat dasturlari va loyihalarni rejalashtirish.", meta: "Boshliq: Rashidov Davron Murodovich" },
            { tag: "12", title: "Talabalar bilan ishlash boʻlimi", desc: "Ma'naviyat, marifat va talabalar faoliyati.", meta: "Boshliq: Toshmatov Akbar Sherzodovich" },
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
