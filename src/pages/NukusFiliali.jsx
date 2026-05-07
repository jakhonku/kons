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
      lead="Oʻzbekiston Davlat Konservatoriyasining Nukus filiali Qoraqalpogʻiston Respublikasidagi yetakchi musiqa ta'lim muassasasi sifatida 2018-yilda tashkil etilgan. Filial mintaqada professional musiqa kadrlarini tayyorlash va qoraqalpoq milliy musiqa madaniyatini rivojlantirish vazifalarini bajaradi."
      stats={[
        { value: '2018', label: "Tashkil etilgan" },
        { value: '320+', label: 'Talaba' },
        { value: '4', label: 'Yoʻnalish' },
      ]}
      sections={[
        {
          heading: "Filial yoʻnalishlari",
          items: [
            { title: "Akademik xonandalik", desc: "Solo va xor xonandaligi yoʻnalishi boʻyicha bakalavriat dasturi." },
            { title: "Cholgʻu ijrochiligi", desc: "Fortepiano, torli va dam olish cholgʻulari yoʻnalishi." },
            { title: "Xalq cholgʻulari", desc: "Qoraqalpoq milliy cholgʻulari — dombira, qobiz, sibizgʻi ijrochiligi." },
            { title: "Musiqa pedagogikasi", desc: "Maktab va musiqa maktablari uchun pedagog kadrlar tayyorlash." },
          ],
        },
        {
          heading: "Filial rahbariyati va aloqa",
          cards: [
            { tag: 'Filial direktori', title: 'Aytmuratov Polat Bekmuratovich', desc: "Qoraqalpoq xalq artisti, professor. Qoraqalpoq milliy musiqasi sohasidagi yetakchi mutaxassis.", meta: 'phone: +998 61 222-15-30' },
            { tag: "Oʻquv ishlari", title: 'Niyazova Gulnora Sapayevna', desc: "Pedagogika fanlari nomzodi, dotsent. Oʻquv jarayonini muvofiqlashtiradi.", meta: 'phone: +998 61 222-15-32' },
            { tag: 'Ilmiy ishlar', title: 'Karimov Sardor Begimuratovich', desc: "San'atshunoslik fanlari nomzodi. Ilmiy va xalqaro hamkorlik.", meta: 'phone: +998 61 222-15-34' },
          ],
        },
      ]}
      contact={{
        title: 'Nukus filiali',
        responsible: "Aytmuratov Polat Bekmuratovich (direktor)",
        phone: '+998 61 222-15-30',
        email: 'nukus@konservatoriya.uz',
        address: "Nukus sh., Berdaq koʻchasi, 25-uy",
        hours: 'Dushanba – Juma, 08:30 – 17:30',
        website: 'https://uzdknf.uz',
      }}
    />
  );
}
