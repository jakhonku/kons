import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Tuzilma' },
  { label: 'Boʻlimlar', to: '/bolimlar' },
  { label: 'Iqtidorli talabalar sektori' },
];

export default function IqtidorliTalabalarSektori() {
  return (
    <InfoPage
      tag="Boʻlimlar"
      title="Iqtidorli talabalar ilmiy-tadqiqot"
      emphasis="sektori"
      breadcrumbs={BREADCRUMBS}
      lead="Iqtidorli talabalarning ilmiy-tadqiqot faoliyatini tashkil etish sektori talaba-yoshlarning ilmiy, ijodiy va intellektual salohiyatini rivojlantirish, ularni ilmiy-tadqiqot faoliyatiga keng jalb etish hamda iqtidorli yoshlarni har tomonlama qoʻllab-quvvatlash maqsadida faoliyat yuritadi."
      sections={[
        {
          heading: 'Sektor haqida',
          text:
            'Sektor oʻz faoliyatini Oʻzbekiston Respublikasi Qonunlari, Prezident farmonlari, qarorlari va topshiriqlari, Vazirlar Mahkamasi qarorlari, Oliy taʼlim, fan va innovatsiyalar vazirligi buyruqlari, shuningdek, Konservatoriya rektorining buyruqlari va Kengashi qarorlari asosida amalga oshiradi.\n' +
            'Bugungi kunda sektor konservatoriya talabalarining ilmiy va ijodiy tashabbuslarini qoʻllab-quvvatlash, ularning milliy va xalqaro miqyosdagi ilmiy loyihalar, konferensiyalar, tanlovlar va stipendiya dasturlarida faol ishtirok etishini taʼminlash boʻyicha tizimli ishlarni olib bormoqda.',
        },
        {
          heading: 'Asosiy vazifalari',
          items: [
            'Iqtidorli va tashabbuskor talabalarni aniqlash va ular bilan manzilli ishlash.',
            'Talabalarning ilmiy-tadqiqot faoliyatini tashkil etish va muvofiqlashtirish.',
            'Prezident va nomdor davlat stipendiyalariga nomzodlarni tayyorlash.',
            'Respublika va xalqaro konferensiya, olimpiada, grant va tanlovlarda talabalar ishtirokini taʼminlash.',
            'Talabalarning ilmiy maqolalar yozishi va nashr ettirishiga koʻmaklashish.',
            'Ilmiy seminarlar, davra suhbatlari, mahorat darslari va konferensiyalar tashkil etish.',
            'Akademik mobillik dasturlarida talabalar ishtirokini qoʻllab-quvvatlash.',
            'Yosh tadqiqotchilarning innovatsion gʻoyalari va tashabbuslarini ragʻbatlantirish.',
          ],
        },
        {
          heading: 'Faoliyat yoʻnalishlari',
          text:
            'Talabalarning ilmiy salohiyatini rivojlantirish maqsadida muntazam ravishda ilmiy-amaliy konferensiyalar, ochiq maʼruzalar, seminar-treninglar, ilmiy toʻgaraklar va mahorat darslari tashkil etiladi.\n' +
            'Shuningdek, talabalarga ilmiy maqola yozish metodikasi, tadqiqot olib borish asoslari hamda ilmiy manbalar bilan ishlash koʻnikmalarini shakllantirish boʻyicha amaliy yordam koʻrsatiladi.',
        },
      ]}
      head={{
        photo: '/bolimlar/bekmurodova-mohinur.jpeg',
        name: 'Bekmurodova Mohinur Safarali qizi',
        position: 'Sektor boshligʻi',
      }}
    />
  );
}

