import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Ilm-fan' },
  { label: "Musiqa cholgʻulari laboratoriyasi" },
];

export default function MusiqaCholgulariLaboratoriyasi() {
  return (
    <InfoPage
      tag="Ilm-fan"
      title="Musiqa cholgʻulari"
      emphasis="laboratoriyasi"
      breadcrumbs={BREADCRUMBS}
      lead="Laboratoriya oʻzbek milliy va akademik musiqa cholgʻularini oʻrganish, ta'mirlash, restavratsiya va yangidan yaratish bilan shugʻullanadigan noyob ilmiy-amaliy markaz. Markazda 200+ tarixiy va zamonaviy cholgʻu saqlanadi."
      stats={[
        { value: '200+', label: "Cholgʻu kolleksiyasi" },
        { value: '8', label: "Mutaxassis sozshunos" },
        { value: '1972', label: "Tashkil etilgan" },
      ]}
      sections={[
        {
          heading: "Faoliyat yoʻnalishlari",
          cards: [
            { tag: '01', title: 'Tarixiy cholgʻular tadqiqi', desc: "Arxiv, muzey va xususiy kolleksiyalardagi tarixiy cholgʻularni oʻrganish." },
            { tag: '02', title: "Restavratsiya va ta'mirlash", desc: "Buzilgan yoki eskirgan cholgʻularni asl holiga keltirish." },
            { tag: '03', title: 'Yangi cholgʻular yaratish', desc: "An'anaviy texnologiyalarga asoslangan yangi cholgʻular ishlab chiqarish." },
            { tag: '04', title: 'Akustik tadqiqotlar', desc: "Cholgʻularning akustik xususiyatlarini ilmiy oʻrganish va oʻlchash." },
            { tag: '05', title: 'Kataloglash va arxivlash', desc: "Raqamli katalog yaratish, foto-video hujjatlash." },
            { tag: '06', title: "Talabalar amaliyoti", desc: "Magistr va doktorant talabalar uchun amaliy treninglar." },
          ],
        },
        {
          heading: "Asosiy kolleksiya boʻlimlari",
          items: [
            { title: "Maqom cholgʻulari", desc: "Tor, tanbur, dutor (har xil turlari), nay, qonun, soz." },
            { title: "Xalq cholgʻulari", desc: "Gʻijjak, qoʻbiz, sibizgʻi, doira, nogʻora, surnay." },
            { title: "Akademik cholgʻular", desc: "Skripka, alt, violonchel, kontrabas, fortepiano." },
            { title: "Dam olish cholgʻulari", desc: "Karnay, surnay, fleyta, gobo, klarnet, fagot, truba." },
            { title: "Zarbli cholgʻular", desc: "Litavralar, bara'ban, ksilofon, vibrafon." },
            { title: "Etnografik kolleksiya", desc: "Markaziy Osiyo va dunyo xalqlari milliy cholgʻulari." },
          ],
        },
        {
          heading: "Xizmatlar (tashqi mijozlar uchun)",
          table: {
            head: ['Xizmat', 'Tarif', 'Muddat'],
            rows: [
              ['Cholgʻuni baholash va konsultatsiya', "Bepul (a'zolar uchun)", '1 ish kuni'],
              ['Akustik oʻlchov va tahlil', "Maxsus shartnoma asosida", '5–7 ish kuni'],
              ['Restavratsiya (kichik)', "Murakkablikdan keladi", '14–30 kun'],
              ['Restavratsiya (komplekt)', "Individual baholash", '45–90 kun'],
              ['Cholgʻuni saqlash xizmati', "Yiliga shartnomaviy", '12 oy'],
            ],
          },
        },
      ]}
      contact={{
        title: "Laboratoriya rahbariyati",
        responsible: "doc. Karimov Sardor Bobirovich",
        phone: '+998 71 234-56-93',
        email: 'lab@konservatoriya.uz',
        address: "2-bino, podval qavat, 02-xona",
        hours: 'Dushanba – Juma, 10:00 – 17:00',
      }}
    />
  );
}
