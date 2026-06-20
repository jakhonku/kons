import OrgDetail from '../components/OrgDetail';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Tuzilma', to: '/tuzilma' },
  { label: 'Jamoat tashkilotlari', to: '/jamoat-tashkilotlari' },
  { label: 'Kasaba uyushma qoʻmitasi' },
];

export default function KasabaUyushmasi() {
  return (
    <OrgDetail
      tag="Jamoat tashkilotlari"
      title="Kasaba uyushma"
      emphasis="qoʻmitasi"
      breadcrumbs={BREADCRUMBS}
      leader={{
        name: 'Mirpayazov Boxodir Alimovich',
        role: "Kasaba uyushma qoʻmitasi raisi",
        photo: '/jamoat/mirpayazov-boxodir.jpeg',
      }}
      intro={[
        "Kasaba uyushmasi oʻz faoliyatini Oʻzbekiston Respublikasi Konstitutsiyasi, Oʻzbekiston Respublikasining “Kasaba uyushmalari, ularning huquqlari va faoliyatining kafolatlari toʻgʻrisida”gi qonuni, “Jamoat birlashmalari toʻgʻrisida”, “Nodavlat notijorat tashkilotlar toʻgʻrisida”gi qonunlari, Taʼlim, fan va madaniyat xodimlari kasaba uyushmasi Respublika kengashining Ustavi va boshqa huquqiy hujjatlar asosida yuritadi.",
        "Hozirgi kunda professor-oʻqituvchi va xodimlar Kasaba uyushma qoʻmitasi mustaqil tashkilot sifatida faoliyat koʻrsatib, oʻz safiga 731 nafar kasaba uyushma aʼzolarini birlashtirgan.",
      ]}
      sections={[
        {
          heading: "Qoʻmitaning umumiy faoliyati",
          items: [
            "Konservatoriya xodimlarining millati, jinsi, yoshi va diniy eʼtiqodidan qatʼiy nazar mehnat qilishi, ishni va kasbni erkin tanlashi, adolatli mehnat sharoitida ishlashi hamda ishsizlikdan himoya qilinishiga doir konstitutsiyaviy huquqlarini himoya qiladi.",
            "Oʻqituvchi-xodimlar mehnatiga haq toʻlash va mehnat tartibining ijtimoiy adolatli tizimini joriy etilishi hamda unga rioya qilinishiga koʻmaklashadi.",
            "Professor-oʻqituvchi va xodimlarning maʼnaviy-maʼrifiy saviyasini oshirishda, ularning boʻsh vaqtlari hamda dam olishini mazmunli tashkil qilishda faol ishtirok etadi.",
            "Oʻqituvchi va xodimlarga nisbatan mehnat qonunchiligi, mehnatni muhofaza qilish va atrof-muhitni muhofaza qilish qonunlari talablariga rioya qilinishini nazorat qiladi hamda ularning huquqiy himoyasini amalga oshiradi.",
            "Oʻqituvchi-xodimlar va ularning oila aʼzolarini sogʻlomlashtirish hamda sport bilan muntazam shugʻullanishlariga koʻmaklashadi.",
            "Jamoada vujudga kelayotgan mehnat nizolarini bartaraf etishda tashabbuskorlik qiladi.",
          ],
        },
      ]}
    />
  );
}
