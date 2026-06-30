import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Tuzilma' },
  { label: 'Boʻlimlar', to: '/bolimlar' },
  { label: 'Xalqaro aloqalar boʻlimi' },
];

export default function XalqaroAloqalarBolim() {
  return (
    <InfoPage
      tag="Boʻlimlar"
      title="Xalqaro aloqalar"
      emphasis="boʻlimi"
      breadcrumbs={BREADCRUMBS}
      lead="Oʻzbekiston davlat konservatoriyasining Xalqaro aloqalar boʻlimi Konservatoriyaning xalqaro faoliyatini rivojlantirish, xorijiy taʼlim va ilmiy muassasalar bilan hamkorlik aloqalarini oʻrnatish hamda mustahkamlash, professor-oʻqituvchilar, talabalar va tadqiqotchilarning xalqaro akademik mobilligini qoʻllab-quvvatlash bilan shugʻullanuvchi tarkibiy boʻlinma hisoblanadi."
      stats={[
        { value: '100+', label: 'Hamkor muassasa' },
        { value: '19+', label: 'Davlat' },
      ]}
      sections={[
        {
          heading: 'Boʻlimning asosiy maqsadlari',
          items: [
            'Oʻzbekiston davlat konservatoriyasining xalqaro nufuzini oshirish.',
            'Xorijiy oliy taʼlim va ilmiy muassasalar bilan samarali hamkorlikni rivojlantirish.',
            'Professor-oʻqituvchilar, talabalar va tadqiqotchilarning xalqaro akademik almashinuv dasturlaridagi ishtirokini kengaytirish.',
            'Taʼlim, ilm-fan va ijodiy faoliyatda ilgʻor xalqaro tajribalarni joriy etishga koʻmaklashish.',
            'Xalqaro grantlar, loyihalar va taʼlim dasturlarida ishtirok etishni ragʻbatlantirish.',
          ],
        },
        {
          heading: 'Asosiy vazifalari',
          items: [
            'Xorijiy oliy taʼlim muassasalari, ilmiy markazlar va xalqaro tashkilotlar bilan hamkorlik aloqalarini oʻrnatish va rivojlantirish.',
            'Xalqaro shartnomalar, memorandumlar va hamkorlik bitimlarini tayyorlash hamda ularning ijrosini monitoring qilish.',
            'Xalqaro grantlar, stajirovkalar, malaka oshirish kurslari va akademik almashinuv dasturlarida ishtirok etishga koʻmaklashish.',
            'Xorijiy mutaxassislar ishtirokida mahorat darslari, seminarlar, konferensiyalar va davra suhbatlarini tashkil etish.',
            'Xorijiy delegatsiyalar tashriflarini tashkil etish va akademik mobillik jarayonlarini muvofiqlashtirish.',
            'Xalqaro hamkorlik boʻyicha maʼlumotlar bazasini shakllantirish, hisobot va tahliliy maʼlumotlarni tayyorlash.',
          ],
        },
        {
          heading: 'Xalqaro hamkorlik geografiyasi',
          text:
            'Oʻzbekiston davlat konservatoriyasi xorijiy mamlakatlardagi 100 ga yaqin oliy taʼlim tashkilotlari bilan hamkorlik aloqalarini yoʻlga qoʻygan. Jumladan, quyidagi davlatlar bilan:',
          flags: [
            { name: 'Estoniya', code: 'ee' },
            { name: 'Latviya', code: 'lv' },
            { name: 'Chexiya', code: 'cz' },
            { name: 'Belgiya', code: 'be' },
            { name: 'Slovakiya', code: 'sk' },
            { name: 'Rossiya', code: 'ru' },
            { name: 'Belarus', code: 'by' },
            { name: 'Ukraina', code: 'ua' },
            { name: 'Xitoy', code: 'cn' },
            { name: 'Janubiy Koreya', code: 'kr' },
            { name: 'Italiya', code: 'it' },
            { name: 'Germaniya', code: 'de' },
            { name: 'Buyuk Britaniya', code: 'gb' },
            { name: 'Turkiya', code: 'tr' },
            { name: 'Ozarbayjon', code: 'az' },
            { name: 'Qozogʻiston', code: 'kz' },
            { name: 'Qirgʻiziston', code: 'kg' },
            { name: 'Tojikiston', code: 'tj' },
            { name: 'BAA', code: 'ae' },
          ],
        },
      ]}
      head={{
        photo: '/bolimlar/gaibova-habiba.jpeg',
        name: 'Gaibova Habiba Sodiqjon qizi',
        position: 'Xalqaro aloqalar boʻlimi boshligʻi',
      }}
    />
  );
}

