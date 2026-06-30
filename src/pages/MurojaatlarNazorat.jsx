import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Tuzilma' },
  { label: 'Boʻlimlar', to: '/bolimlar' },
  { label: 'Murojaatlar, nazorat va monitoring boʻlimi' },
];

export default function MurojaatlarNazorat() {
  return (
    <InfoPage
      tag="Boʻlimlar"
      title="Murojaatlar, nazorat va monitoring"
      emphasis="boʻlimi"
      breadcrumbs={BREADCRUMBS}
      lead="Jismoniy va yuridik shaxslarning murojaatlari bilan ishlash, nazorat va monitoring boʻlimi Konservatoriyaga kelib tushgan murojaatlarni amaldagi qonun hujjatlarida belgilangan muddatlardan kechiktirmagan holda oʻrganib chiqishni hamda hujjatlar ijro intizomini taʼminlaydi."
      sections={[
        {
          heading: 'Asosiy vazifalari',
          items: [
            'Oliy taʼlimga oid qonun hujjatlari, Prezident farmonlari va qarorlari, vazirlik buyruqlari hamda rektor buyruqlarining oʻz vaqtida va sifatli bajarilishini nazorat etish.',
            'Murojaatlarni koʻrib chiqishda masʼuliyatsizlik va sansalorlikka yoʻl qoʻymaslik, takroriy murojaatlarning oldini olish choralarini koʻrish.',
            'Elektron ish yuritish va hujjatlar aylanishi tizimi asosida hujjatlarning oʻz vaqtida ijro etilishini nazorat qilish va metodik yordam koʻrsatish.',
            'Nazorat ishlarini muvofiqlashtirish, barcha tarkibiy boʻlinmalarda ijro intizomi ahvolini oʻrganish va kamchiliklarni bartaraf etishga koʻmaklashish.',
            'Boʻlim faoliyati boʻyicha Ilmiy kengash majlisida axborot berish.',
          ],
        },
        {
          heading: 'Huquq va majburiyatlari',
          items: [
            'Qonun hujjatlari va rahbariyat buyruqlarining bajarilishini fakultet, kafedra va boʻlimlarda tahlil qilish hamda nazorat etish.',
            'Ijro intizomi ahvoli boʻyicha rektorga axborot berish va aniqlangan kamchiliklarni bartaraf etish boʻyicha qabul qilingan buyruqlar ijrosini nazorat qilish.',
            'Oʻrganish natijalari tahlili asosida taklif va xulosalar ishlab chiqish.',
            'Ijro intizomiga rioya qilmagan masʼul xodimlarga nisbatan intizomiy jazo choralari boʻyicha rektorga takliflar kiritish.',
            'Xizmat vazifalarini bajarish uchun zarur hujjatlarni talab qilish va malakali professor-oʻqituvchilarni jalb qilgan holda ishchi guruhlar tuzish.',
          ],
        },
      ]}
      head={{
        photo: '/bolimlar/saidakbarxodjayeva-nigora.jpeg',
        name: 'Saidakbarxodjayeva Nigora Raxmatillayevna',
        position: 'Boʻlim boshligʻi',
      }}
    />
  );
}

