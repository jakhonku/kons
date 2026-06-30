import OrgDetail from '../components/OrgDetail';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Tuzilma' },
  { label: 'Jamoat tashkilotlari', to: '/jamoat-tashkilotlari' },
  { label: 'Yoshlar ittifoqi' },
];

export default function YoshlarIttifoqi() {
  return (
    <OrgDetail
      tag="Jamoat tashkilotlari"
      title="Yoshlar"
      emphasis="ittifoqi"
      breadcrumbs={BREADCRUMBS}
      leader={{
        name: 'Turajanova Nilufar Elmurod qizi',
        role: "Yoshlar ittifoqi boshlangʻich tashkiloti yoshlar yetakchisi",
        photo: '/jamoat/turajanova-nilufar.jpeg',
      }}
      intro={[
        "Oʻzbekiston yoshlar ittifoqi (keyingi oʻrinlarda — Ittifoq) jismonan sogʻlom, maʼnan yetuk va intellektual rivojlangan, mustaqil fikrlaydigan yosh avlodni shakllantirish, yoshlarni tashqi tahdidlar va “ommaviy madaniyat”ning zararli taʼsiridan muhofaza qilish, ularning huquq va qonuniy manfaatlarini himoya qilishga har tomonlama koʻmaklashish maqsadida tuzilgan, Oʻzbekiston yoshlarini birlashtiruvchi nodavlat notijorat tashkilotidir.",
        "Ittifoq oʻz faoliyatini Oʻzbekiston Respublikasi Konstitutsiyasi, “Nodavlat notijorat tashkilotlari toʻgʻrisida”gi, “Nodavlat notijorat tashkilotlari faoliyatining kafolatlari toʻgʻrisida”gi, “Yoshlarga oid davlat siyosati toʻgʻrisida”gi qonunlar va Ustavga muvofiq, ixtiyoriylik, qonuniylik, oshkoralik hamda aʼzolarning teng huquqliligi tamoyillari asosida amalga oshiradi.",
      ]}
      sections={[
        {
          heading: "Ittifoqqa aʼzolik",
          text: "Ittifoqqa yuridik va jismoniy shaxslar Ustavda belgilangan tartibda aʼzo boʻlishi mumkin. Ittifoq maqsadini qoʻllab-quvvatlash istagini bildirgan, 14 yoshga toʻlgan va 30 yoshdan oshmagan Oʻzbekiston Respublikasi fuqarolari hamda Oʻzbekistonda muntazam yashab kelayotgan fuqaroligi boʻlmagan shaxslar Ittifoqning aʼzosi boʻlishi mumkin. Aʼzolikka qabul qilish va chiqish boshlangʻich tashkilotning Umumiy yigʻilishi yoki Kengashi yigʻilishi tomonidan amalga oshiriladi.",
        },
        {
          heading: "Ittifoqning tuzilmasi",
          items: [
            "Ittifoqning Markaziy apparati",
            "Ittifoqning hududiy tuzilmalari",
            "Ittifoqning mahalliy tuzilmalari",
            "Ittifoqning boshlangʻich tashkilotlari",
            "Ittifoqning toʻliq muassisligidagi yoki qoshidagi korxona, tashkilot va muassasalar, shu jumladan ommaviy axborot vositalari",
          ],
        },
        {
          heading: "Asosiy maqsad va vazifalar",
          text: "Ittifoqning asosiy maqsadi yoshlarni mamlakatda amalga oshirilayotgan demokratik, siyosiy va iqtisodiy islohotlarni chuqurlashtirishga jalb qilish, jamiyatda tinchlik va hamjihatlikni mustahkamlash hamda yosh avlodning huquq va erkinliklarini samarali himoya qilishni taʼminlashdan iborat.",
          items: [
            "Barkamol, mustaqil fikrlaydigan, qatʼiy eʼtiqodga ega yoshlarni shakllantirish, ularning siyosiy madaniyati, huquqiy savodxonligi va huquqiy ongini yuksaltirish.",
            "Yoshlarni maʼnaviy-axloqiy jihatdan va harbiy vatanparvarlik ruhida tarbiyalash, ularda tarixiy xotira, milliy gʻurur va oʻzlikni anglash tuygʻularini shakllantirish.",
            "Yoshlarning huquq va qonuniy manfaatlarini himoya qilish, zamonaviy kasblarni egallashga intilishini qoʻllab-quvvatlash, tadbirkorlik faoliyatiga jalb qilish.",
            "Isteʼdodli yoshlarni qoʻllab-quvvatlash, ularning ijodiy va intellektual salohiyatini roʻyobga chiqarish hamda ilmiy faoliyatga jalb qilish.",
            "Yoshlar oʻrtasida sogʻlom turmush tarzi va ekologik madaniyatni shakllantirish, jismoniy tarbiya va sportga jalb qilish.",
            "Yoshlarni diniy-ekstremistik va buzgʻunchi tashkilotlar taʼsiridan asrash, huquqbuzarlik va jinoyatchilik profilaktikasiga koʻmaklashish.",
          ],
        },
      ]}
    />
  );
}

