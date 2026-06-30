import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Ilm-fan' },
  { label: '“Milliy cholgʻu” laboratoriyasi' },
];

export default function MusiqaCholgulariLaboratoriyasi() {
  return (
    <InfoPage
      tag="Ilm-fan"
      title="“Milliy cholgʻu” ilmiy-ishlab chiqarish eksperimental"
      emphasis="laboratoriyasi"
      breadcrumbs={BREADCRUMBS}
      lead="Oʻzbekiston davlat konservatoriyasi qoshida 1943-yilda tashkil etilgan sohaviy ilmiy-tadqiqot eksperimental laboratoriyasi Oʻzbekiston Respublikasi Madaniyat vazirligining 2000-yil 7-fevraldagi 25-sonli buyrugʻiga asosan “Milliy cholgʻu” ilmiy-ishlab chiqarish eksperimental laboratoriyasi nomi bilan faoliyat yuritib kelmoqda."
      stats={[
        { value: '1943', label: 'Tashkil etilgan' },
        { value: '8', label: 'Ixtiro patenti' },
        { value: '2000', label: '“Milliy cholgʻu” nomi berilgan' },
      ]}
      sections={[
        {
          heading: 'Laboratoriya haqida',
          text:
            'Laboratoriya faoliyati davomida milliy cholgʻularni yaratish, takomillashtirish, ularning akustik imkoniyatlarini kengaytirish hamda ilmiy-amaliy tajribalarni amalga oshirish borasida salmoqli ishlar olib borilgan.\n' +
            'Bugungi kunda laboratoriyada tajriba sifatida yaratilgan taniqli usta U. Zufarovning cholgʻu sozlari, A.I. Petrosyan gʻoyalari asosida hamda Oʻzbekistonda xizmat koʻrsatgan madaniyat xodimlari — ustalar X. Muxiddinov, A. Abdugʻafurov va boshqa mohir ustalar tomonidan yasalgan oʻzbek xalq cholgʻulari saqlanmoqda.\n' +
            'Shuningdek, laboratoriya fondidan turli xorijiy mamlakatlarning milliy cholgʻulari ham oʻrin olgan boʻlib, ular laboratoriyaga sovgʻa tariqasida topshirilgan. Mazkur kolleksiya milliy va jahon cholgʻu madaniyatini oʻrganishda muhim ilmiy-amaliy manba hisoblanadi.',
        },
        {
          heading: 'Ilmiy-amaliy faoliyat',
          items: [
            { title: 'Cholgʻularni yaratish va takomillashtirish', desc: 'Milliy cholgʻularni yangidan yaratish hamda akustik imkoniyatlarini kengaytirish.' },
            { title: 'Tarixiy cholgʻularni asrash', desc: 'Tarixiy cholgʻularni asrab-avaylash va restavratsiya qilish.' },
            { title: 'Ilmiy tajribalar', desc: 'Musiqiy cholgʻular bilan bogʻliq innovatsion ishlanmalar muntazam olib boriladi.' },
            { title: 'Patentlangan ixtirolar', desc: 'Intellektual mulk agentligi tomonidan 8 ta cholgʻu uchun Oʻzbekiston Respublikasining ixtiro patenti roʻyxatdan oʻtkazilgan.' },
          ],
        },
      ]}
      head={{
        photo: '/bolimlar/islamov-azamat.jpeg',
        label: 'Laboratoriya rahbari',
        name: 'Islamov Azamat Xaydarovich',
        position: 'Laboratoriya direktori',
      }}
    />
  );
}
