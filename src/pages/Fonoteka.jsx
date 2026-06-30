import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Tuzilma' },
  { label: 'Boʻlimlar', to: '/bolimlar' },
  { label: 'Fonoteka boʻlimi' },
];

export default function Fonoteka() {
  return (
    <InfoPage
      tag="Boʻlimlar"
      title="Fonoteka"
      emphasis="boʻlimi"
      breadcrumbs={BREADCRUMBS}
      lead="Oʻzbekiston davlat konservatoriyasi Fonoteka boʻlimi 1954-yilda tashkil topgan boʻlib, uning arxivida 200 dan ortiq jahon va oʻzbek kompozitorlarning, 300 dan ortiq bastakor va xonandalarning toʻplamlari mavjud. Bugungi kunda 1850 ta magnit lenta, 1931 ta plastinkadagi arxiv materiallari zamonaviy raqamli texnikalarga moslashtirilib, oʻquv jarayonida foydalanilmoqda."
      stats={[
        { value: '1954', label: 'Tashkil etilgan' },
        { value: '3000+', label: 'Ijro va kuy asarlari' },
        { value: '1931', label: 'Plastinka arxivi' },
      ]}
      sections={[
        {
          heading: 'Boʻlim haqida',
          text:
            'Hozirgi kunda 248 ta oʻzbek xofiz va xonandalari, jumladan, Yunus Rajabiy, Maʼmurjon Uzoqov, Fattoxxon Mamadaliyev, Joʻraxon Sultonov, Maxmudjon Tojiboyev, Olmaxon Hayitova, Tamarahonim, Munojat Yoʻlchiyeva kabi ijodkorlarning albomlaridagi qoʻshiq ijrolari 3000 tadan ziyod ijro va kuy asarlari bilan toʻldirildi.\n' +
            '2019-yildan boshlab hozirgi kunga qadar Oʻzbekiston hududida ijod qilib oʻtgan va hozirgi kunda ijod qilib kelayotgan kompozitorlarning asarlarini toʻplab, jamlab albom shakliga keltirish ishlari olib borilmoqda. Ayni kunda toʻliq boʻlmagan kompozitorlar albomi soni 105 tani tashkil qiladi.\n' +
            'Fonoteka boʻlimi Konservatoriyaning oʻquv jarayonida yordamchi tashkiliy boʻlim hisoblanib, dars jarayonlariga musiqiy asarlarni yetkazib berish ishlarini amalga oshiradi.',
        },
        {
          heading: 'Asosiy vazifalari',
          items: [
            'Barcha yoʻnalish va mutaxassisliklar boʻyicha fanlarni musiqiy maʼlumotlar bilan taʼminlash.',
            'Mavjud musiqiy asarlarni yigʻib, ularning (magnit tasma, plastinka, CD, DVD, MP3) arxivini toʻplab borish.',
            'Konservatoriyada oʻtkaziladigan tadbirlarni audio va video yozuvlarga yozib olish.',
            'Arxivdagi asarlarni jamlab tartiblash, kataloglashtirish va texnik vositalarni soz holatda tutish.',
            'Arxivdagi asarlarni (plastinka, magnit tasma) zamonaviy texnika vositalariga koʻchirib oʻtkazish.',
            'Oʻqituvchi va talabalarning mustaqil tayyorgarligi uchun kerakli asarlar bilan taʼminlash.',
          ],
        },
      ]}
      head={{
        photo: '/bolimlar/jamolidinov-javohir.jpeg',
        name: 'Jamolidinov Javohir Fayzullo ogʻli',
        position: 'Fonoteka boʻlimi mudiri',
      }}
    />
  );
}

