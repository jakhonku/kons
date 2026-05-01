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
      lead="Konservatoriyada 5 ta yetakchi fakultet faoliyat ko'rsatadi. Har bir fakultet o'z yo'nalishi bo'yicha bakalavr va magistratura darajasidagi mutaxassislarni tayyorlaydi va musiqa san'atining yetakchi sohalarini rivojlantiradi."
      stats={[
        { value: '5', label: 'Fakultet' },
        { value: '38', label: 'Kafedra' },
        { value: '1200+', label: 'Talaba' },
      ]}
      sections={[
        {
          heading: 'Akademik fakultetlar',
          cards: [
            {
              tag: 'Fakultet 01',
              title: 'Akademik xonandalik fakulteti',
              desc: "Solo, opera va xor xonandalik bo'yicha mutaxassislar tayyorlaydi. Fakultet bitiruvchilari xalqaro tanlovlarda muntazam yutuqlarga erishmoqda.",
            },
            {
              tag: 'Fakultet 02',
              title: "Cholg'u ijrochiligi fakulteti",
              desc: "Fortepiano, torli va dam olish cholg'ulari, kamera ansambli va orkestr sinflarini birlashtiruvchi yetakchi fakultet.",
            },
            {
              tag: 'Fakultet 03',
              title: 'Kompozitsiya va musiqa nazariyasi',
              desc: 'Bastakorlar, musiqashunoslar va ilmiy-tadqiqotchilarni tayyorlovchi nazariy fakultet.',
            },
            {
              tag: 'Fakultet 04',
              title: "Xalq cholg'ulari fakulteti",
              desc: "Dutor, g'ijjak, doira, ud va boshqa milliy cholg'ular bo'yicha noyob ta'lim. Maqom san'atini rivojlantirish markazi.",
            },
            {
              tag: 'Fakultet 05',
              title: "Musiqa san'ati va pedagogika",
              desc: "Musiqa o'qituvchilari, maktabgacha ta'lim mutaxassislari va musiqa psixologiyasi bo'yicha kadrlarni tayyorlaydi.",
            },
          ],
        },
        {
          heading: 'Fakultetlar bo\'yicha statistika',
          table: {
            head: ['Fakultet', 'Kafedralar', 'Talabalar', 'O\'qituvchilar'],
            rows: [
              ['Akademik xonandalik', '4', '180', '32'],
              ["Cholg'u ijrochiligi", '12', '420', '78'],
              ['Kompozitsiya va musiqa nazariyasi', '4', '95', '28'],
              ["Xalq cholg'ulari", '7', '230', '46'],
              ["Musiqa san'ati va pedagogika", '5', '275', '38'],
            ],
          },
        },
      ]}
      contact={{
        responsible: "O'quv ishlari bo'limi (O'quv ishlari prorektori)",
        phone: '+998 71 234-56-80',
        email: 'oquv@konservatoriya.uz',
        hours: 'Dushanba – Juma, 09:00 – 17:00',
      }}
    />
  );
}
