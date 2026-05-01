import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Tuzilma', to: '/tuzilma' },
  { label: "O'quv uslubiy kengash" },
];

export default function OquvUslubiyKengash() {
  return (
    <InfoPage
      tag="Tuzilma"
      title="O'quv uslubiy"
      emphasis="kengash"
      breadcrumbs={BREADCRUMBS}
      lead="O'quv uslubiy kengash — konservatoriyaning ta'lim sifati, o'quv rejalari va metodik ta'minoti bo'yicha asosiy maslahat organi. Kengash o'quv jarayonini muvofiqlashtiradi va mutaxassislarning kasbiy kompetensiyalarini shakllantirishga ko'maklashadi."
      stats={[
        { value: '14', label: 'A\'zolar' },
        { value: '12', label: 'Yillik yig\'ilish' },
        { value: '38', label: 'Kafedra qamrovi' },
      ]}
      sections={[
        {
          heading: 'Asosiy faoliyat yo\'nalishlari',
          items: [
            { title: "O'quv rejalarini tasdiqlash", desc: "Bakalavr va magistratura yo'nalishlari bo'yicha o'quv rejalarini tasdiqlash." },
            { title: 'Sillabuslarni ekspertizadan o\'tkazish', desc: "Yangi va yangilangan o'quv dasturlarini metodik jihatdan baholash." },
            { title: 'Pedagogik tajriba almashinuvi', desc: "Eng yaxshi pedagogik tajribalar va innovatsion metodikalarni tarqatish." },
            { title: 'Sifat monitoringi', desc: "Imtihonlar, kurs ishlari va bitiruv ishlari natijalarining sifatiy tahlili." },
            { title: 'Xalqaro standartlarga moslashish', desc: "Bolonya jarayoni va ESG standartlariga muvofiq o'quv jarayonini takomillashtirish." },
            { title: 'Ilmiy-metodik nashrlar', desc: "Darsliklar, o'quv qo'llanmalari va elektron resurslarni tasdiqlash." },
          ],
        },
        {
          heading: 'Yig\'ilishlar grafigi',
          table: {
            head: ['Sana', 'Mavzu', 'Mas\'ul'],
            rows: [
              ['10.01.2026', "2025-2026 1-semestr yakunlari tahlili", "O'quv ishlari prorektori"],
              ['12.02.2026', 'Yangi o\'quv rejalari muhokamasi', 'O\'quv bo\'limi'],
              ['18.03.2026', 'Sillabuslar ekspertizasi', 'Metodbo\'lim'],
              ['15.04.2026', "Bitiruv ishlari himoyasi tartibi", "Davlat attestatsiya komissiyasi"],
              ['22.05.2026', "Yozgi sessiya tahlili", "O'quv ishlari prorektori"],
            ],
          },
        },
      ]}
      contact={{
        responsible: "Farhod Abdullayev (O'quv ishlari prorektori)",
        phone: '+998 71 234-56-80',
        email: 'oqv-kengash@konservatoriya.uz',
        hours: 'Har oyning 2-juma kuni 14:00',
      }}
    />
  );
}
