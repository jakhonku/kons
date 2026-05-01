import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Tuzilma', to: '/tuzilma' },
  { label: 'Kafedralar' },
];

export default function Kafedralar() {
  return (
    <InfoPage
      tag="Tuzilma"
      title="Konservatoriya"
      emphasis="kafedralari"
      breadcrumbs={BREADCRUMBS}
      lead="Konservatoriyaning 38 kafedrasi 5 fakultet ostida tashkil etilgan. Har bir kafedra o'z sohasi bo'yicha o'quv-uslubiy ishlarni amalga oshiradi va ilmiy tadqiqotlarni olib boradi."
      stats={[
        { value: '38', label: 'Kafedra' },
        { value: '220+', label: 'Pedagog' },
        { value: '15', label: 'Fan doktori' },
      ]}
      sections={[
        {
          heading: 'Akademik xonandalik fakulteti',
          items: [
            { title: 'Akademik xonandalik kafedrasi', desc: "Mudir: prof. Yusupova Madina Otabekovna" },
            { title: 'Opera tayyorlash kafedrasi', desc: "Mudir: dots. Karimov Bobur Sherzodovich" },
            { title: 'Xor dirijyorligi kafedrasi', desc: "Mudir: prof. Tursunova Dilfuza Otabekovna" },
            { title: 'Sahna nutqi va aktyorlik mahorati', desc: 'Mudir: dots. Olimov Sherzod Akbarovich' },
          ],
        },
        {
          heading: "Cholg'u ijrochiligi fakulteti",
          items: [
            { title: 'Fortepiano kafedrasi', desc: 'Mudir: prof. Rashidova Nargiza Bekovna' },
            { title: "Torli cholg'ular kafedrasi", desc: "Mudir: prof. Akhmedov Davron Sherzodovich" },
            { title: "Dam olish cholg'ulari kafedrasi", desc: "Mudir: dots. Mirzayev Bobur Olimovich" },
            { title: 'Kamera ansambli', desc: 'Mudir: prof. Sodiqova Madina Erkinovna' },
            { title: 'Orkestr sinfi va dirijyorlik', desc: "Mudir: prof. Yusupov Akbar Murodovich" },
            { title: 'Konsertmeyster sinfi', desc: 'Mudir: dots. Toshmatova Sevara Otabekovna' },
            { title: 'Estrada-jaz cholg\'ulari', desc: 'Mudir: dots. Karimov Sardor Bobirovich' },
          ],
        },
        {
          heading: 'Kompozitsiya va musiqa nazariyasi',
          items: [
            { title: 'Kompozitsiya kafedrasi', desc: 'Mudir: prof. Aliyeva Nigora Sherzodovna' },
            { title: 'Musiqa nazariyasi', desc: 'Mudir: prof. Tursunov Otabek Murodovich' },
            { title: 'Musiqa tarixi', desc: 'Mudir: dots. Yusupova Sevara Akbarovna' },
            { title: 'Polifoniya va garmoniya', desc: 'Mudir: dots. Rashidov Bobur Sherzodovich' },
          ],
        },
        {
          heading: "Xalq cholg'ulari fakulteti",
          items: [
            { title: "Dutor va g'ijjak kafedrasi", desc: 'Mudir: prof. Qodirova Madina Olimovna' },
            { title: "Doira va zarbli cholg'ular", desc: "Mudir: dots. Akhmedov Sardor Bobirovich" },
            { title: 'Ud va tanbur kafedrasi', desc: 'Mudir: prof. Toshmatov Akbar Sherzodovich' },
            { title: 'Xalq ansambli', desc: 'Mudir: dots. Mirzayeva Gulnora Otabekovna' },
            { title: 'Maqom san\'ati', desc: 'Mudir: prof. Yusupov Davron Murodovich' },
          ],
        },
        {
          heading: "Musiqa san'ati va pedagogika",
          items: [
            { title: 'Musiqa pedagogikasi', desc: 'Mudir: prof. Karimova Sarvinoz Otabekovna' },
            { title: "Maktabgacha ta'lim musiqasi", desc: 'Mudir: dots. Sodiqov Sherzod Bobirovich' },
            { title: 'Musiqa psixologiyasi', desc: 'Mudir: dots. Aliyeva Nargiza Erkinovna' },
            { title: 'Amaliy musiqa va menejment', desc: "Mudir: dots. Rashidov Otabek Sherzodovich" },
          ],
        },
      ]}
      contact={{
        responsible: "O'quv-uslubiy bo'lim",
        phone: '+998 71 234-56-82',
        email: 'kafedralar@konservatoriya.uz',
        address: "Toshkent sh., Mirobod tumani, Konservatoriya ko'chasi 1-uy",
      }}
    />
  );
}
