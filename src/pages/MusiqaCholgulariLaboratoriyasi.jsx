import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Ilm-fan', to: '/ilm-fan' },
  { label: "Musiqa cholg'ulari laboratoriyasi" },
];

export default function MusiqaCholgulariLaboratoriyasi() {
  return (
    <InfoPage
      tag="Ilm-fan"
      title="Musiqa cholg'ulari"
      emphasis="laboratoriyasi"
      breadcrumbs={BREADCRUMBS}
      lead="Laboratoriya o'zbek milliy va akademik musiqa cholg'ularini o'rganish, ta'mirlash, restavratsiya va yangidan yaratish bilan shug'ullanadigan noyob ilmiy-amaliy markaz. Markazda 200+ tarixiy va zamonaviy cholg'u saqlanadi."
      stats={[
        { value: '200+', label: "Cholg'u kolleksiyasi" },
        { value: '8', label: "Mutaxassis sozshunos" },
        { value: '1972', label: "Tashkil etilgan" },
      ]}
      sections={[
        {
          heading: "Faoliyat yo'nalishlari",
          cards: [
            { tag: '01', title: 'Tarixiy cholg\'ular tadqiqi', desc: "Arxiv, muzey va xususiy kolleksiyalardagi tarixiy cholg'ularni o'rganish." },
            { tag: '02', title: "Restavratsiya va ta'mirlash", desc: "Buzilgan yoki eskirgan cholg'ularni asl holiga keltirish." },
            { tag: '03', title: 'Yangi cholg\'ular yaratish', desc: "An'anaviy texnologiyalarga asoslangan yangi cholg'ular ishlab chiqarish." },
            { tag: '04', title: 'Akustik tadqiqotlar', desc: "Cholg'ularning akustik xususiyatlarini ilmiy o'rganish va o'lchash." },
            { tag: '05', title: 'Kataloglash va arxivlash', desc: "Raqamli katalog yaratish, foto-video hujjatlash." },
            { tag: '06', title: "Talabalar amaliyoti", desc: "Magistr va doktorant talabalar uchun amaliy treninglar." },
          ],
        },
        {
          heading: "Asosiy kolleksiya bo'limlari",
          items: [
            { title: "Maqom cholg'ulari", desc: "Tor, tanbur, dutor (har xil turlari), nay, qonun, soz." },
            { title: "Xalq cholg'ulari", desc: "G'ijjak, qo'biz, sibizg'i, doira, nog'ora, surnay." },
            { title: "Akademik cholg'ular", desc: "Skripka, alt, violonchel, kontrabas, fortepiano." },
            { title: "Dam olish cholg'ulari", desc: "Karnay, surnay, fleyta, gobo, klarnet, fagot, truba." },
            { title: "Zarbli cholg'ular", desc: "Litavralar, bara'ban, ksilofon, vibrafon." },
            { title: "Etnografik kolleksiya", desc: "Markaziy Osiyo va dunyo xalqlari milliy cholg'ulari." },
          ],
        },
        {
          heading: "Xizmatlar (tashqi mijozlar uchun)",
          table: {
            head: ['Xizmat', 'Tarif', 'Muddat'],
            rows: [
              ['Cholg\'uni baholash va konsultatsiya', "Bepul (a'zolar uchun)", '1 ish kuni'],
              ['Akustik o\'lchov va tahlil', "Maxsus shartnoma asosida", '5–7 ish kuni'],
              ['Restavratsiya (kichik)', "Murakkablikdan keladi", '14–30 kun'],
              ['Restavratsiya (komplekt)', "Individual baholash", '45–90 kun'],
              ['Cholg\'uni saqlash xizmati', "Yiliga shartnomaviy", '12 oy'],
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
