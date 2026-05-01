import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Tuzilma', to: '/tuzilma' },
  { label: 'Nukus filiali' },
];

export default function NukusFiliali() {
  return (
    <InfoPage
      tag="Tuzilma"
      title="Nukus"
      emphasis="filiali"
      breadcrumbs={BREADCRUMBS}
      lead="O'zbekiston Davlat Konservatoriyasining Nukus filiali Qoraqalpog'iston Respublikasidagi yetakchi musiqa ta'lim muassasasi sifatida 2018-yilda tashkil etilgan. Filial mintaqada professional musiqa kadrlarini tayyorlash va qoraqalpoq milliy musiqa madaniyatini rivojlantirish vazifalarini bajaradi."
      stats={[
        { value: '2018', label: "Tashkil etilgan" },
        { value: '320+', label: 'Talaba' },
        { value: '4', label: 'Yo\'nalish' },
      ]}
      sections={[
        {
          heading: "Filial yo'nalishlari",
          items: [
            { title: "Akademik xonandalik", desc: "Solo va xor xonandaligi yo'nalishi bo'yicha bakalavriat dasturi." },
            { title: "Cholg'u ijrochiligi", desc: "Fortepiano, torli va dam olish cholg'ulari yo'nalishi." },
            { title: "Xalq cholg'ulari", desc: "Qoraqalpoq milliy cholg'ulari — dombira, qobiz, sibizg'i ijrochiligi." },
            { title: "Musiqa pedagogikasi", desc: "Maktab va musiqa maktablari uchun pedagog kadrlar tayyorlash." },
          ],
        },
        {
          heading: "Filial rahbariyati va aloqa",
          cards: [
            { tag: 'Filial direktori', title: 'Aytmuratov Polat Bekmuratovich', desc: "Qoraqalpoq xalq artisti, professor. Qoraqalpoq milliy musiqasi sohasidagi yetakchi mutaxassis.", meta: 'phone: +998 61 222-15-30' },
            { tag: "O'quv ishlari", title: 'Niyazova Gulnora Sapayevna', desc: "Pedagogika fanlari nomzodi, dotsent. O'quv jarayonini muvofiqlashtiradi.", meta: 'phone: +998 61 222-15-32' },
            { tag: 'Ilmiy ishlar', title: 'Karimov Sardor Begimuratovich', desc: "San'atshunoslik fanlari nomzodi. Ilmiy va xalqaro hamkorlik.", meta: 'phone: +998 61 222-15-34' },
          ],
        },
      ]}
      contact={{
        title: 'Nukus filiali',
        responsible: "Aytmuratov Polat Bekmuratovich (direktor)",
        phone: '+998 61 222-15-30',
        email: 'nukus@konservatoriya.uz',
        address: "Nukus sh., Berdaq ko'chasi, 25-uy",
        hours: 'Dushanba – Juma, 08:30 – 17:30',
      }}
    />
  );
}
