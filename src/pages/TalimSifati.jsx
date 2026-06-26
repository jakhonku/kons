import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Tuzilma', to: '/tuzilma' },
  { label: 'Boʻlimlar', to: '/bolimlar' },
  { label: 'Taʼlim sifatini taʼminlash boʻlimi' },
];

export default function TalimSifati() {
  return (
    <InfoPage
      tag="Boʻlimlar"
      title="Taʼlim sifatini taʼminlash"
      emphasis="boʻlimi"
      breadcrumbs={BREADCRUMBS}
      lead="Taʼlim sifatini taʼminlash boʻlimi boshqaruv tizimining ajralmas tarkibiy qismi boʻlib, taʼlim sifatining davlat taʼlim standartlari, malaka talablari va xalqaro mezonlarga muvofiqligini taʼminlash, oʻquv jarayonlari samaradorligini oshirish hamda taʼlim sifatini boshqarishning zamonaviy mexanizmlarini joriy etishni asosiy maqsad qilib qoʻygan."
      sections={[
        {
          heading: 'Boʻlim haqida',
          text:
            'Boʻlim oʻz faoliyatini Oʻzbekiston Respublikasi Qonunlari, Prezident farmonlari va qarorlari, Vazirlar Mahkamasi qarorlari hamda Oliy taʼlim, fan va innovatsiyalar vazirligi buyruqlari asosida amalga oshiradi. Jumladan, Prezidentning 2025-yil 5-maydagi PF-76-son Farmoni va Vazirlar Mahkamasining 2025-yil 6-avgustdagi 498-son qarori talablari asosida ish olib boradi.\n' +
            'Boʻlimga kadrlar tayyorlash sifati boʻyicha ichki baholashni tashkil etish, davlat akkreditatsiyasiga tayyorgarlik koʻrish, taʼlim sifatini muntazam monitoring qilib borish hamda tahliliy maʼlumotlarni rahbariyat va Taʼlim sifatini taʼminlash milliy agentligiga taqdim etib borish vazifalari yuklatilgan.',
        },
        {
          heading: 'Asosiy vazifalari',
          items: [
            'Kadrlar tayyorlash sifati ustidan muntazam monitoring va nazoratni amalga oshirish.',
            'Talabalar bilim, koʻnikma va kompetensiyalarining davlat taʼlim standartlariga muvofiqligini oʻrganish va tahlil qilish.',
            'Professor-oʻqituvchilar tarkibining sifat koʻrsatkichlarini tahlil qilish va kasbiy rivojlanishi uchun mexanizmlarni takomillashtirish.',
            'Dars oʻtish sifati, pedagogik mahorat va zamonaviy taʼlim texnologiyalaridan foydalanish darajasini oʻrganish.',
            'Ichki baholash jarayonlarini tashkil etish va aniqlangan kamchiliklarni bartaraf etish.',
            'Kredit-modul tizimi va HEMIS axborot tizimidan foydalanish samaradorligini tahlil qilish.',
            'Bitiruvchilarning bandligi va mehnat bozoridagi raqobatbardoshligi boʻyicha tahliliy xulosalar tayyorlash.',
            'Akademik halollik tamoyillarini joriy etish va plagiatga qarshi tizimli ishlarni tashkil etish.',
          ],
        },
      ]}
      contact={{
        title: 'Boʻlim rahbariyati',
        responsible: 'Abdugapparov Abdufattox Abdurazzakovich — boʻlim boshligʻi, professor, “Shuhrat” medali sohibi',
      }}
    />
  );
}
