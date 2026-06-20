import PageHero from '../components/PageHero';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Xalqaro aloqalar' },
  { label: 'Xalqaro memorandumlar' },
];

const FLAGS = {
  Estoniya: '🇪🇪', Latviya: '🇱🇻', Xitoy: '🇨🇳', Italiya: '🇮🇹', "Qozogʻiston": '🇰🇿',
  "Janubiy Koreya": '🇰🇷', Koreya: '🇰🇷', Germaniya: '🇩🇪', Ozarbayjon: '🇦🇿', Rossiya: '🇷🇺',
  Turkiya: '🇹🇷', Ukraina: '🇺🇦', Tojikiston: '🇹🇯', Qirgʻiziston: '🇰🇬', Chexiya: '🇨🇿',
  Belarus: '🇧🇾', Belgiya: '🇧🇪', BAA: '🇦🇪', "Buyuk Britaniya": '🇬🇧', Slovakiya: '🇸🇰',
};

// Konservatoriya imzolagan xalqaro hamkorlik memorandumlari
const MEMORANDUMS = [
  { org: "Estoniya musiqa va teatr akademiyasi", country: 'Estoniya', city: 'Tallinn' },
  { org: "Ya. Vitols nomidagi Latviya musiqa akademiyasi", country: 'Latviya', city: 'Riga' },
  { org: "Shimoliy-Gʻarbiy Millatlar universiteti", country: 'Xitoy', city: '' },
  { org: "Santa Cecilia konservatoriyasi", country: 'Italiya', city: 'Rim' },
  { org: "Qozogʻiston milliy sanʼat universiteti", country: "Qozogʻiston", city: 'Astana' },
  { org: "Koreya musiqiy taʼlim jamoasi", country: 'Janubiy Koreya', city: 'Seul' },
  { org: "Hannover fortepiano akademiyasi", country: 'Germaniya', city: 'Gannover' },
  { org: "Daulin sanʼat kolleji", country: 'Xitoy', city: 'Daulin' },
  { org: "Kashgar universiteti", country: 'Xitoy', city: 'Kashgar' },
  { org: "Ozarbayjon davlat madaniyat va sanʼat universiteti", country: 'Ozarbayjon', city: 'Baku' },
  { org: "P. I. Chaykovskiy nomidagi Moskva davlat konservatoriyasi", country: 'Rossiya', city: 'Moskva' },
  { org: "Shanxay musiqa konservatoriyasi", country: 'Xitoy', city: 'Shanxay' },
  { org: "Uzeyir Hojibekov nomidagi Baku musiqa akademiyasi", country: 'Ozarbayjon', city: 'Baku' },
  { org: "Ozarbayjon milliy konservatoriyasi", country: 'Ozarbayjon', city: 'Baku' },
  { org: "San Pietro a Majella konservatoriyasi", country: 'Italiya', city: 'Neapol' },
  { org: "Ardaxan universiteti", country: 'Turkiya', city: 'Ardaxan' },
  { org: "N. A. Rimskiy-Korsakov nomidagi Sankt-Peterburg davlat konservatoriyasi", country: 'Rossiya', city: 'Sankt-Peterburg' },
  { org: "P. Chaykovskiy nomidagi Ukraina milliy musiqa akademiyasi", country: 'Ukraina', city: 'Kiyev' },
  { org: "Gnesinlar nomidagi Rossiya musiqa akademiyasi", country: 'Rossiya', city: 'Moskva' },
  { org: "T. Sattorov nomidagi Tojikiston milliy konservatoriyasi", country: 'Tojikiston', city: 'Dushanbe' },
  { org: "Chung-Ang universiteti", country: 'Janubiy Koreya', city: 'Seul' },
  { org: "Verdi nomidagi Milan konservatoriyasi", country: 'Italiya', city: 'Milan' },
  { org: "Osh davlat pedagogika universiteti", country: "Qirgʻiziston", city: 'Osh' },
  { org: "Pavlo Chubinskiy nomidagi Kiyev sanʼat akademiyasi", country: 'Ukraina', city: 'Kiyev' },
  { org: "Chexiya musiqa akademiyasi", country: 'Chexiya', city: 'Praga' },
  { org: "Qoʻrmangʻazi nomidagi Qozogʻiston milliy konservatoriyasi", country: "Qozogʻiston", city: 'Almati' },
  { org: "Belorussiya davlat musiqa akademiyasi", country: 'Belarus', city: 'Minsk' },
  { org: "M. Glinka nomidagi Nijniy Novgorod davlat konservatoriyasi", country: 'Rossiya', city: 'Nijniy Novgorod' },
  { org: "N. Jiganov nomidagi Qozon davlat konservatoriyasi", country: 'Rossiya', city: 'Qozon' },
  { org: "Uxan musiqa konservatoriyasi", country: 'Xitoy', city: 'Uxan' },
  { org: "S. Ayniy nomidagi Tojik davlat akademik opera va balet teatri", country: 'Tojikiston', city: 'Dushanbe' },
  { org: "Casella musiqa konservatoriyasi", country: 'Italiya', city: '' },
  { org: "Rossiya sanʼat tarixi instituti", country: 'Rossiya', city: 'Sankt-Peterburg' },
  { org: "PETROF kompaniyasi", country: 'Chexiya', city: 'Praga' },
  { org: "M. I. Glinka nomidagi Novosibirsk davlat konservatoriyasi", country: 'Rossiya', city: 'Novosibirsk' },
  { org: "Atatürk universiteti", country: 'Turkiya', city: 'Erzurum' },
  { org: "Daegu katolik universiteti", country: 'Janubiy Koreya', city: 'Gyongson' },
  { org: "Bryussel qirolicha konservatoriyasi", country: 'Belgiya', city: 'Bryussel' },
  { org: "Kommunikatsiyalar rivojlanish ilmiy-tadqiqot instituti", country: 'Rossiya', city: 'Moskva' },
  { org: "Rossiya sanʼatshunoslik instituti", country: 'Rossiya', city: 'Moskva' },
  { org: "Ajou universitetining Toshkentdagi filiali", country: 'Janubiy Koreya', city: '' },
  { org: "Fujayra tasviriy sanʼatlar akademiyasi", country: 'BAA', city: 'Fujayra' },
  { org: "Three Gorges universiteti", country: 'Xitoy', city: 'Yichan' },
  { org: "International School of Musicians", country: 'Buyuk Britaniya', city: 'London' },
  { org: "A. Glazunov nomidagi Petrozavodsk davlat konservatoriyasi", country: 'Rossiya', city: 'Petrozavodsk' },
  { org: "M. Ippolitov-Ivanov nomidagi musiqa-pedagogika instituti", country: 'Rossiya', city: 'Moskva' },
  { org: "T. Jurgenov nomidagi Qozoq milliy sanʼat akademiyasi", country: "Qozogʻiston", city: 'Astana' },
  { org: "Kunmin kasbiy sanʼat kolleji", country: 'Xitoy', city: 'Kunmin' },
  { org: "Bratislava ijrochilik sanʼati akademiyasi", country: 'Slovakiya', city: 'Bratislava' },
  { org: "Oqsaroy universiteti", country: 'Turkiya', city: 'Oqsaroy' },
].map((m) => ({ ...m, flag: FLAGS[m.country] || '🌐' }));

const COUNTRY_COUNT = new Set(MEMORANDUMS.map((m) => m.country)).size;

export default function XalqaroMemorandumlar() {
  return (
    <main className="content-wrapper">
      <PageHero
        tag="Xalqaro aloqalar"
        title="Xalqaro"
        emphasis="Memorandumlar"
        breadcrumbs={BREADCRUMBS}
      />

      <div className="page-stats-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', background: 'var(--navy)', borderBottom: '2px solid var(--gold)' }}>
        {[
          { num: String(MEMORANDUMS.length), label: 'Memorandum' },
          { num: String(COUNTRY_COUNT), label: 'Davlat' },
          { num: '5', label: 'Qitʼa' },
          { num: 'MOU', label: 'Hamkorlik shakli' },
        ].map((s, i) => (
          <div key={s.label} style={{ padding: '36px 20px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1, marginBottom: '8px' }}>{s.num}</div>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-sans)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      <section className="main-content">
        <div className="container">

          <article className="article-body" style={{ marginBottom: '20px' }}>
            <p className="lead">
              Xalqaro hamkorlik memorandumlari (MOU) konservatoriyaning dunyodagi yetakchi musiqa
              institutlari bilan rasmiy hamkorligining huquqiy asosini tashkil etadi.
            </p>
          </article>

          <div className="section-divider" style={{ marginTop: 0 }}>
            <h2>Memorandumlar roʻyxati</h2>
          </div>

          <div className="doc-list" style={{ marginBottom: '60px' }}>
            {MEMORANDUMS.map((m, idx) => (
              <div key={m.org} className="doc-item">
                <div className="doc-info">
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: 'var(--gold-dark)', fontWeight: 400, flexShrink: 0, width: 24, textAlign: 'center' }}>
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className="doc-icon" style={{ background: 'var(--light-50)', fontSize: '1.3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, flexShrink: 0 }}>
                    {m.flag}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div className="doc-name">{m.org}</div>
                    <div className="doc-meta">
                      {m.country}{m.city ? `, ${m.city}` : ''}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--cream)', border: '1px solid var(--light-border)', borderLeft: '4px solid var(--gold)', padding: '24px 32px', marginBottom: '60px' }}>
            <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '1rem', marginBottom: '8px' }}>
              Yangi hamkorlik takliflari
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.7, fontFamily: 'var(--font-serif)', margin: 0 }}>
              Xalqaro hamkorlik memorandumi tuzish boʻyicha murojaat uchun: Xalqaro aloqalar boʻlimi,
              2-bino 201-xona · international@konservatoriya.uz · +998 71 234-56-91
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
