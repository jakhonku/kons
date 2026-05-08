import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Ilm-fan' },
  { label: 'Ilmiy kengash' },
];

export default function IlmiyKengash() {
  return (
    <InfoPage
      tag="Ilm-fan"
      title="Konservatoriya"
      emphasis="ilmiy kengashi"
      breadcrumbs={BREADCRUMBS}
      lead="Ilmiy kengash — konservatoriyaning oliy ilmiy organi. Kengash ilmiy daraja va unvonlar himoyasini, ilmiy ishlarning ekspertizasini, doktorantura va magistratura ilmiy yoʻnalishlarini boshqaradi."
      stats={[
        { value: '21', label: "A'zo (oliy fan doktori)" },
        { value: '6', label: 'Yillik majlis' },
        { value: 'DSc.05', label: 'Ixtisoslashgan kengash' },
      ]}
      sections={[
        {
          heading: 'Kengashning vazifalari',
          items: [
            'Ilmiy daraja va unvonlar himoyasini boshqarish',
            "Magistratura va doktoranturaga qabul mavzularini tasdiqlash",
            "Ilmiy loyihalar va grantlar muhokamasi",
            "Yillik ilmiy hisobotlar va monografiyalarni ekspertizadan oʻtkazish",
            "Ilmiy konferensiyalar va seminarlar dasturini tasdiqlash",
            "Xalqaro hamkorlik tashabbuslarini koʻrib chiqish",
          ],
        },
        {
          heading: "Kengash a'zolari (asosiy tarkib)",
          cards: [
            { tag: 'Rais', title: 'Toshmatov Behruz Aliyevich', desc: "San'atshunoslik fanlari doktori, professor. Ilmiy-ijodiy ishlar prorektori." },
            { tag: 'Rais oʻrinbosari', title: 'Mirzayeva Gulnora Abdullayevna', desc: "San'atshunoslik fanlari doktori, professor." },
            { tag: 'Ilmiy kotib', title: 'Aliyeva Nigora Sherzodovna', desc: "Filologiya fanlari doktori, dotsent. Musiqa nazariyasi kafedrasi mudiri." },
            { tag: 'A\'zo', title: 'Karimov Sherzod Rustamovich', desc: 'Professor.' },
            { tag: 'A\'zo', title: 'Yusupov Akbar Murodovich', desc: 'Professor, Orkestr sinfi kafedrasi mudiri.' },
            { tag: 'A\'zo', title: 'Tursunov Otabek Murodovich', desc: 'Professor, Musiqa nazariyasi kafedrasi.' },
          ],
        },
        {
          heading: "Yaqinda himoya qilingan dissertatsiyalar",
          table: {
            head: ['Sana', 'Mualif', 'Mavzu', 'Daraja'],
            rows: [
              ['12.03.2026', 'Tursunova Sevara', "Maqom san'atining zamonaviy ijro tendensiyalari", 'PhD'],
              ['28.02.2026', 'Akhmedov Davron', "20-asr oʻzbek bastakorlari kompozitsiya texnikalari", 'DSc'],
              ['15.01.2026', 'Olimov Sherzod', "Folklor va akademik musiqa sintezi", 'PhD'],
              ['22.12.2025', 'Mirzayeva Nargiza', "Musiqa pedagogikasida raqamli vositalar", 'PhD'],
            ],
          },
        },
      ]}
      contact={{
        responsible: 'Aliyeva Nigora Sherzodovna (ilmiy kotib)',
        phone: '+998 71 234-56-83',
        email: 'kengash@konservatoriya.uz',
        hours: 'Har oyning 1-payshanbasi 14:00',
      }}
    />
  );
}
