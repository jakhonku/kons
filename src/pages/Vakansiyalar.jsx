import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Tuzilma', to: '/tuzilma' },
  { label: "Boʻsh ish oʻrinlari" },
];

export default function Vakansiyalar() {
  return (
    <InfoPage
      tag="Tuzilma"
      title="Boʻsh ish"
      emphasis="oʻrinlari"
      breadcrumbs={BREADCRUMBS}
      lead="Konservatoriyada hozirda mavjud boʻsh ish oʻrinlari va kasbiy oʻsish imkoniyatlari. Barcha vakansiyalar Oʻzbekiston Respublikasi qonunchiligiga muvofiq tanlov asosida toʻldiriladi."
      stats={[
        { value: '7', label: 'Faol vakansiya' },
        { value: '4', label: 'Pedagogik' },
        { value: '3', label: "Ma'muriy" },
      ]}
      sections={[
        {
          heading: 'Pedagogik vakansiyalar',
          table: {
            head: ['Lavozim', 'Kafedra', 'Talab', 'Muddat'],
            rows: [
              ['Katta oʻqituvchi', "Fortepiano kafedrasi", "Magistr darajasi, 3+ yil tajriba", "30.06.2026 gacha"],
              ['Dotsent', "Musiqa nazariyasi", "Fan nomzodi, professor lavozimi tajribasi", "15.07.2026 gacha"],
              ['Assistent', "Akademik xonandalik", "Bakalavr darajasi, ijodiy tanlov", "20.06.2026 gacha"],
              ['Kontsertmeyster', "Kamera ansambli", "Magistr darajasi, ijrochilik tajribasi", "25.06.2026 gacha"],
            ],
          },
        },
        {
          heading: "Ma'muriy vakansiyalar",
          table: {
            head: ['Lavozim', "Boʻlim", 'Talab', 'Muddat'],
            rows: [
              ['Mutaxassis', "Xalqaro aloqalar boʻlimi", "Oliy ma'lumot, ingliz tili B2+", "10.07.2026 gacha"],
              ['Tahrirchi', "Ilmiy nashrlar boʻlimi", "Oliy filologik ma'lumot", "05.07.2026 gacha"],
              ['Tizim administratori', "Axborot texnologiyalari", "IT mutaxassisligi, 2+ yil tajriba", "18.06.2026 gacha"],
            ],
          },
        },
        {
          heading: 'Tanlov tartibi',
          items: [
            { title: '1-bosqich: Hujjatlarni topshirish', desc: "Ariza, CV, ma'lumot va tajriba haqidagi hujjatlar elektron pochtaga yuboriladi." },
            { title: '2-bosqich: Hujjat ekspertizasi', desc: "Kadrlar boʻlimi nomzodlarning hujjatlarini 5 ish kuni ichida koʻrib chiqadi." },
            { title: '3-bosqich: Suhbat va sinov darsi', desc: "Pedagogik vakansiyalar uchun ochiq dars / ma'muriy uchun mutaxassisligi boʻyicha test." },
            { title: "4-bosqich: Konkurs komissiyasi qarori", desc: "Ilmiy kengash yoki rektor qarori bilan natija e'lon qilinadi." },
          ],
        },
      ]}
      contact={{
        title: "Hujjat topshirish",
        responsible: "Kadrlar boʻlimi",
        phone: '+998 71 234-56-95',
        email: 'kadrlar@konservatoriya.uz',
        address: "Toshkent sh., Konservatoriya koʻchasi 1, 2-qavat",
        hours: 'Dushanba – Juma, 09:00 – 17:00',
      }}
    />
  );
}
