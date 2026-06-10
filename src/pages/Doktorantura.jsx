import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Ilm-fan' },
  { label: 'Doktorantura' },
];

export default function Doktorantura() {
  return (
    <InfoPage
      tag="Ilmiy daraja"
      title="Doktorantura va"
      emphasis="bazaviy doktorantura"
      breadcrumbs={BREADCRUMBS}
      lead="Konservatoriya doktoranturasi PhD (Doctor of Philosophy) va DSc (Doctor of Science) ilmiy darajalari boʻyicha ilmiy tadqiqotchilarni tayyorlaydi. Doktorantura boʻlimi 17.00.02 — Musiqa sanʼati ixtisosligi boʻyicha akkreditatsiyalangan."
      stats={[
        { value: '24', label: 'Faol doktorant' },
        { value: '8', label: 'PhD himoyasi (2025)' },
        { value: '3', label: 'Yil — PhD muddati' },
      ]}
      sections={[
        {
          heading: "Ilmiy darajalar",
          cards: [
            {
              tag: '01',
              title: 'PhD (Doctor of Philosophy)',
              desc: "Ilmiy tadqiqotchilar uchun birinchi bosqich. 3 yillik tayyorgarlik, dissertatsiya himoyasi.",
              meta: 'Ixtisoslik: 17.00.02',
            },
            {
              tag: '02',
              title: 'DSc (Doctor of Science)',
              desc: "Mustaqil ilmiy maktab yaratgan etakchi olimlar uchun ikkinchi bosqich. 2 yillik tadqiqot.",
              meta: 'Ixtisoslik: 17.00.02',
            },
            {
              tag: '03',
              title: 'Mustaqil tadqiqotchi',
              desc: "Ilmiy darajaga ariza beruvchi mustaqil tadqiqotchilar maktabi. Maslahat va ekspertiza.",
              meta: '2–3 yil davomida',
            },
          ],
        },
        {
          heading: "Doktoranturaga qabul talablari",
          items: [
            { title: 'Magistr darajasi', desc: "Konservatoriya yoki teng huquqli OTMda magistratura bitirgan." },
            { title: '3+ yil tajriba', desc: "Akademik yoki ijodiy faoliyatda kamida 3 yillik tajriba." },
            { title: "Ilmiy nashrlar", desc: "Kamida 3 ta ilmiy maqola yoki musiqa nashrlari." },
            { title: "Tadqiqot rejasi", desc: "Aniq mavzuli, ilmiy yangiligi boʻlgan tadqiqot rejasi." },
            { title: "Chet tili", desc: "Ingliz yoki nemis tilida ilmiy adabiyot oʻqish darajasi (B2+)." },
            { title: "Ilmiy rahbar", desc: "Konservatoriya professorlaridan ilmiy rahbar tayinlash." },
          ],
        },
        {
          heading: "Tadqiqot mavzulari (mavjud yoʻnalishlar)",
          items: [
            "Oʻzbek mumtoz musiqasi va maqom sanʼati",
            "Etnomusiqashunoslik va folklor",
            "Zamonaviy kompozitsiya texnikalari",
            "Ijro nazariyasi va metodikasi",
            "Musiqa pedagogikasi va psixologiyasi",
            "Musiqa tarixi va tahlil",
            "Cholgʻu sozshunoslik",
            "Ovoz texnologiyalari va musiqa produktsiyasi",
          ],
        },
        {
          heading: "Qabul jadvali (2026–2027)",
          table: {
            head: ['Bosqich', 'Sana', 'Tafsilotlar'],
            rows: [
              ["Hujjat qabuli boshlanishi", '01.06.2026', 'Online va yuzma-yuz qabul'],
              ["Ariza topshirish muddati", '15.07.2026', "Hujjatlar toʻplami"],
              ['Ijodiy va kasbiy imtihon', '20–25.08.2026', "Ixtisoslik va chet tili"],
              ['Suhbat va tadqiqot rejasi himoyasi', '01–05.09.2026', 'Ilmiy kengash huzurida'],
              ["Qabul natijalari eʼlon qilinishi", '10.09.2026', "Veb-sayt va elektron pochta"],
              ["Oʻqish boshlanishi", '01.10.2026', '3 yillik dastur'],
            ],
          },
        },
      ]}
      contact={{
        title: "Doktorantura boʻlimi",
        responsible: 'Akhmedov Davron Sherzodovich',
        phone: '+998 71 234-56-85',
        email: 'doktorantura@konservatoriya.uz',
        address: "1-bino, 312-xona",
        hours: 'Dushanba – Juma, 09:00 – 17:00',
      }}
    />
  );
}
