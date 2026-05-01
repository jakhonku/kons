import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: "Ta'lim" },
];

export default function Talim() {
  return (
    <InfoPage
      tag="Akademik ta'lim"
      title="O'quv jarayoni va"
      emphasis="ta'lim dasturlari"
      breadcrumbs={BREADCRUMBS}
      lead="Konservatoriyada akademik ta'lim ikki bosqichli model — bakalavriat va magistratura asosida olib boriladi. Doktorantura ilmiy daraja oluvchilar uchun mo'ljallangan. Barcha o'quv jarayoni ESG xalqaro standartlariga muvofiq tashkil etilgan."
      stats={[
        { value: '17', label: 'Bakalavr yo\'nalishi' },
        { value: '12', label: 'Magistratura' },
        { value: '38', label: "Sillabus moduli" },
      ]}
      sections={[
        {
          heading: "Asosiy o'quv resurslari",
          cards: [
            { tag: '01', title: 'Dars jadvallari', desc: "Joriy semestr dars jadvallari, kafedra va auditoriya bo'yicha ko'rinishlar.", meta: '/dars-jadvali' },
            { tag: '02', title: "O'quv rejalar", desc: "Bakalavr va magistratura yo'nalishlari bo'yicha tasdiqlangan o'quv rejalari.", meta: '/oquv-rejalar' },
            { tag: '03', title: "Sillabuslar", desc: "Har bir fan uchun batafsil dasturlar — maqsadlar, mavzular va baholash mezonlari.", meta: '/sillabuslar' },
            { tag: '04', title: "Kelajakka qadam", desc: "Talabalar uchun karyera maslahatchisi va kasb tanlovi platformasi.", meta: '/kelajakka-qadam' },
            { tag: '05', title: "To'garaklar", desc: "Akademik dasturdan tashqari ijodiy va ilmiy to'garaklarning to'liq ro'yxati.", meta: '/togaraklar' },
            { tag: '06', title: "Bitiruvchilar bandligi", desc: "Career markazi: bitiruvchilarni mehnat bozoriga muvaffaqiyatli kiritish.", meta: '/bitiruvchilar-bandligi' },
          ],
        },
        {
          heading: "O'quv jarayonining muhim sanalari",
          table: {
            head: ['Davr', 'Tadbir', 'Sana'],
            rows: [
              ['Kuzgi semestr', '1-semestr boshlanishi', '02.09.2026'],
              ['Kuzgi semestr', 'Yarim sessiya', '03–10.11.2026'],
              ['Qish sessiya', 'Imtihonlar davri', '12.01.2027 – 02.02.2027'],
              ['Bahorgi semestr', '2-semestr boshlanishi', '09.02.2027'],
              ['Yozgi sessiya', 'Imtihonlar davri', '01.06.2027 – 25.06.2027'],
              ['Bitiruv', 'Davlat attestatsiyasi', '15.06.2027 – 10.07.2027'],
            ],
          },
        },
      ]}
      contact={{
        title: "O'quv ishlari prorektorligi",
        responsible: "Farhod Abdullayev",
        phone: '+998 71 234-56-80',
        email: 'oquv@konservatoriya.uz',
        hours: 'Dushanba – Juma, 09:00 – 17:00',
      }}
    />
  );
}
