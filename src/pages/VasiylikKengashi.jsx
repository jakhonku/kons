import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Tuzilma', to: '/tuzilma' },
  { label: 'Vasiylik kengashi' },
];

export default function VasiylikKengashi() {
  return (
    <InfoPage
      tag="Tuzilma"
      title="Vasiylik"
      emphasis="kengashi"
      breadcrumbs={BREADCRUMBS}
      lead="Oʻzbekiston Davlat Konservatoriyasi Vasiylik kengashi — muassasa faoliyati, strategik rivojlanish yoʻnalishlari va moliyaviy hisobotini nazorat qiluvchi maslahat-nazorat organi. Kengash aʼzolari madaniyat, fan, taʼlim va biznes sohalaridagi yetakchi mutaxassislardan iborat."
      stats={[
        { value: '11', label: 'Kengash aʼzosi' },
        { value: '4', label: 'Yiliga yigʻilish' },
        { value: '2024', label: 'Tashkil etilgan' },
      ]}
      sections={[
        {
          heading: 'Kengashning vazifalari',
          items: [
            { title: 'Strategik rivojlanish', desc: "Konservatoriyaning uzoq muddatli rivojlanish dasturlarini koʻrib chiqish va tasdiqlash." },
            { title: 'Moliyaviy nazorat', desc: "Yillik byudjet, grantlar va tashqi moliyalashtirish manbalarini auditdan oʻtkazish." },
            { title: 'Akademik sifat', desc: "Taʼlim sifati, ilmiy tadqiqotlar va xalqaro reyting koʻrsatkichlari boʻyicha tavsiyalar." },
            { title: 'Hamkorlik aloqalari', desc: "Davlat, biznes va xalqaro hamkorlar bilan strategik aloqalarni rivojlantirish." },
          ],
        },
        {
          heading: 'Kengash tarkibi',
          cards: [
            { tag: 'Rais', title: 'Karimov Otabek Sobirovich', desc: "Oʻzbekiston Madaniyat va turizm vazirligi maslahatchisi, sanʼat fanlari doktori." },
            { tag: 'Rais oʻrinbosari', title: 'Toshmatova Nargiza Erkinovna', desc: 'Nizomiy nomidagi TDPU kafedra mudiri, professor.' },
            { tag: 'Kotib', title: 'Aliyev Bobur Sherzodovich', desc: "Konservatoriya yuridik boʻlim boshligʻi." },
            { tag: 'Aʼzo', title: 'Yusupov Sherzod Akbarovich', desc: "Oʻzbekiston bastakorlar uyushmasi raisi." },
            { tag: 'Aʼzo', title: 'Akhmedova Madina Olimjonovna', desc: 'Xalqaro hamkorlik fondi direktori.' },
            { tag: 'Aʼzo', title: 'Rashidov Davron Murodovich', desc: 'Tadbirkorlik va hamkorlik boʻlimi vakili.' },
          ],
        },
      ]}
      contact={{
        responsible: 'Aliyev Bobur Sherzodovich (kotib)',
        phone: '+998 71 234-56-90',
        email: 'vasiylik@konservatoriya.uz',
        hours: 'Dushanba – Juma, 09:00 – 17:00',
      }}
    />
  );
}
