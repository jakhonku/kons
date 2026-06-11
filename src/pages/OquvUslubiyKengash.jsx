import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Tuzilma', to: '/tuzilma' },
  { label: "Oʻquv uslubiy kengash" },
];

export default function OquvUslubiyKengash() {
  return (
    <InfoPage
      tag="Tuzilma"
      title="Oʻquv uslubiy"
      emphasis="kengash"
      breadcrumbs={BREADCRUMBS}
      lead="Oʻquv uslubiy kengash — konservatoriyaning taʼlim sifati, oʻquv rejalari va metodik taʼminoti boʻyicha asosiy maslahat organi. Kengash oʻquv jarayonini muvofiqlashtiradi va mutaxassislarning kasbiy kompetensiyalarini shakllantirishga koʻmaklashadi."
      stats={[
        { value: '14', label: 'Aʼzolar' },
        { value: '12', label: 'Yillik yigʻilish' },
        { value: '16', label: 'Kafedra qamrovi' },
      ]}
      sections={[
        {
          heading: 'Asosiy faoliyat yoʻnalishlari',
          items: [
            { title: "Oʻquv rejalarini tasdiqlash", desc: "Bakalavr va magistratura yoʻnalishlari boʻyicha oʻquv rejalarini tasdiqlash." },
            { title: 'Sillabuslarni ekspertizadan oʻtkazish', desc: "Yangi va yangilangan oʻquv dasturlarini metodik jihatdan baholash." },
            { title: 'Pedagogik tajriba almashinuvi', desc: "Eng yaxshi pedagogik tajribalar va innovatsion metodikalarni tarqatish." },
            { title: 'Sifat monitoringi', desc: "Imtihonlar, kurs ishlari va bitiruv ishlari natijalarining sifatiy tahlili." },
            { title: 'Xalqaro standartlarga moslashish', desc: "Bolonya jarayoni va ESG standartlariga muvofiq oʻquv jarayonini takomillashtirish." },
            { title: 'Ilmiy-metodik nashrlar', desc: "Darsliklar, oʻquv qoʻllanmalari va elektron resurslarni tasdiqlash." },
          ],
        },
        {
          heading: 'Yigʻilishlar grafigi',
          table: {
            head: ['Sana', 'Mavzu', 'Masʼul'],
            rows: [
              ['10.01.2026', "2025-2026 1-semestr yakunlari tahlili", "Oʻquv ishlari prorektori"],
              ['12.02.2026', 'Yangi oʻquv rejalari muhokamasi', 'Oʻquv boʻlimi'],
              ['18.03.2026', 'Sillabuslar ekspertizasi', 'Metodboʻlim'],
              ['15.04.2026', "Bitiruv ishlari himoyasi tartibi", "Davlat attestatsiya komissiyasi"],
              ['22.05.2026', "Yozgi sessiya tahlili", "Oʻquv ishlari prorektori"],
            ],
          },
        },
      ]}
      contact={{
        responsible: "Abdullayev Farhod Rustambekovich (Oʻquv ishlari prorektori)",
        phone: '+998 71 234-56-80',
        email: 'oqv-kengash@konservatoriya.uz',
        hours: 'Har oyning 2-juma kuni 14:00',
      }}
    />
  );
}
