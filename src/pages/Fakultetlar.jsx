import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Tuzilma', to: '/tuzilma' },
  { label: 'Fakultetlar' },
];

export default function Fakultetlar() {
  return (
    <InfoPage
      tag="Tuzilma"
      title="Konservatoriya"
      emphasis="fakultetlari"
      breadcrumbs={BREADCRUMBS}
      lead="Konservatoriyada 5 ta yetakchi fakultet faoliyat koʻrsatadi. Har bir fakultet oʻz yoʻnalishi boʻyicha bakalavr va magistratura darajasidagi mutaxassislarni tayyorlaydi va musiqa sanʼatining yetakchi sohalarini rivojlantiradi."
      stats={[
        { value: '5', label: 'Fakultet' },
        { value: '16', label: 'Kafedra' },
        { value: '1200+', label: 'Talaba' },
      ]}
      sections={[
        {
          heading: 'Akademik fakultetlar',
          cards: [
            {
              tag: 'Fakultet 01',
              title: 'Akademik xonandalik fakulteti',
              desc: "Solo, opera va xor xonandalik boʻyicha mutaxassislar tayyorlaydi. Fakultet bitiruvchilari xalqaro tanlovlarda muntazam yutuqlarga erishmoqda.",
            },
            {
              tag: 'Fakultet 02',
              title: "Cholgʻu ijrochiligi fakulteti",
              desc: "Fortepiano, torli va dam olish cholgʻulari, kamera ansambli va orkestr sinflarini birlashtiruvchi yetakchi fakultet.",
            },
            {
              tag: 'Fakultet 03',
              title: 'Kompozitsiya va musiqa nazariyasi',
              desc: 'Bastakorlar, musiqashunoslar va ilmiy-tadqiqotchilarni tayyorlovchi nazariy fakultet.',
            },
            {
              tag: 'Fakultet 04',
              title: "Xalq cholgʻulari fakulteti",
              desc: "Dutor, gʻijjak, doira, ud va boshqa milliy cholgʻular boʻyicha noyob taʼlim. Maqom sanʼatini rivojlantirish markazi.",
            },
            {
              tag: 'Fakultet 05',
              title: "Musiqa sanʼati va pedagogika",
              desc: "Musiqa oʻqituvchilari, maktabgacha taʼlim mutaxassislari va musiqa psixologiyasi boʻyicha kadrlarni tayyorlaydi.",
            },
          ],
        },
        {
          heading: 'Fakultetlar boʻyicha statistika',
          table: {
            head: ['Fakultet', 'Kafedralar', 'Talabalar', 'Oʻqituvchilar'],
            rows: [
              ['Akademik xonandalik', '4', '180', '32'],
              ["Cholgʻu ijrochiligi", '12', '420', '78'],
              ['Kompozitsiya va musiqa nazariyasi', '4', '95', '28'],
              ["Xalq cholgʻulari", '7', '230', '46'],
              ["Musiqa sanʼati va pedagogika", '5', '275', '38'],
            ],
          },
        },
      ]}
      contact={{
        responsible: "Oʻquv ishlari boʻlimi (Oʻquv ishlari prorektori)",
        phone: '+998 71 234-56-80',
        email: 'oquv@konservatoriya.uz',
        hours: 'Dushanba – Juma, 09:00 – 17:00',
      }}
    />
  );
}
