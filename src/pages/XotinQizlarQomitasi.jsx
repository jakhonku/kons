import OrgDetail from '../components/OrgDetail';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Tuzilma' },
  { label: 'Jamoat tashkilotlari', to: '/jamoat-tashkilotlari' },
  { label: 'Xotin-qizlar maslahat kengashi' },
];

export default function XotinQizlarQomitasi() {
  return (
    <OrgDetail
      tag="Jamoat tashkilotlari"
      title="Xotin-qizlar"
      emphasis="maslahat kengashi"
      breadcrumbs={BREADCRUMBS}
      leader={{
        name: 'Xamdamova Sayyora Xusanovna',
        role: "Xotin-qizlar maslahat kengashi raisi",
        photo: '/jamoat/xamdamova-sayyora.jpeg',
        awards: [
          "“Moʻtabar ayol” koʻkrak nishoni — 2020-yil",
          "“Madaniyat va sanʼat fidokori” koʻkrak nishoni — 2022-yil",
        ],
      }}
      intro={[
        "Oʻzbekiston davlat konservatoriyasining 2 ta fakultetida xotin-qizlar kengashlari raislari faoliyat koʻrsatmoqda. Konservatoriya ilmiy kengashining qaroriga muvofiq xotin-qizlar maslahat kengashi raisiga hamda barcha fakultetlar xotin-qizlar kengashi raislariga ichki imkoniyatdan kelib chiqib, qoʻshimcha haq toʻlanadi.",
        "Konservatoriya xotin-qizlar kengashi raisiga Oʻzbekiston Respublikasi Oliy taʼlim, fan va innovatsiyalar vazirining 2020-yil 17-iyundagi 326-son buyrugʻiga asosan xotin-qizlar masalalari boʻyicha rektor maslahatchisi, fakultetlar xotin-qizlar kengashi raislariga esa 2021-yil 13-dekabrdagi 518-son buyrugʻiga asosan dekan maslahatchisi maqomi berilgan.",
      ]}
      sections={[
        {
          heading: "Kengashning maqsad va vazifalari",
          text: "Xotin-qizlar kengashi jamoat tashkiloti sifatida oʻz faoliyatini Oʻzbekiston Respublikasi Konstitutsiyasi, “Nodavlat notijorat tashkilotlari toʻgʻrisida”gi hamda “Oʻzbekiston Respublikasida jamoat birlashmalari toʻgʻrisida”gi qonunlar va nodavlat notijorat tashkilotlarini tartibga soluvchi boshqa qonunlarga muvofiq olib boradi.\n" +
            "Kengash professor-oʻqituvchi, xodimlar hamda talaba qizlarning jamiyatdagi siyosiy, ijtimoiy va iqtisodiy vazifalarni hal qilishdagi faolligini kuchaytirish, xotin-qizlarni har tomonlama qoʻllab-quvvatlash, ularning huquq va manfaatlarini himoya qilish, kasbiy mahoratini oshirish, oila munosabatlarini mustahkamlash hamda sogʻlom turmush tarzini shakllantirish maqsadida ish olib boradi. Faoliyat “Sogʻlom avlod” va “Ibn Sino” markazlari bilan hamkorlikda amalga oshiriladi.",
        },
        {
          heading: "Faoliyatning asosiy yoʻnalishlari",
          items: [
            "Xotin-qizlarni qoʻllab-quvvatlashga doir davlat siyosatining samarali amalga oshirilishini taʼminlash, ularning huquqlari va qonuniy manfaatlarini himoya qilish hamda Konservatoriyadagi ijtimoiy-siyosiy hayotdagi roli va faolligini oshirish.",
            "Konservatoriyadagi xotin-qizlarning muammolarini oʻz vaqtida aniqlash, yordamga muhtoj va ogʻir ijtimoiy ahvolga tushib qolgan xotin-qizlarning, shu jumladan nogironligi boʻlgan ayollarning manzilli roʻyxatini tuzish, ularga ijtimoiy-huquqiy, psixologik va moddiy yordam koʻrsatish.",
            "Xotin-qizlarning mehnat sharoitlarini yaxshilash, talabalar turar joyida va xususiy xonadonlarda yashayotgan qizlarning boʻsh vaqtini mazmunli oʻtkazish maqsadida turli toʻgaraklar va kasb-hunar oʻrganish ishlariga keng jalb etish.",
            "Xotin-qizlar oʻrtasida huquqbuzarliklarning oldini olish, huquqbuzarlikka moyilligi boʻlganlar bilan yakka tartibda ish olib borish.",
          ],
        },
      ]}
    />
  );
}

