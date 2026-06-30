import PageHero from '../components/PageHero';
import { Mail, Phone, Award, GraduationCap } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const T = {
  uz: {
    crumbHome: 'Bosh sahifa', crumbKons: 'Konservatoriya', crumbRahbariyat: 'Rahbariyat', crumbThis: 'Rektor',
    heroTag: 'Konservatoriya Rahbariyati', heroTitle: 'Rektor', heroEm: 'Biografiyasi',
    photoRole: 'Rektor',
    contactHeading: 'Aloqa maʼlumotlari',
    bioTag: 'Biografiya',
    degree: 'Oʻzbekiston xalq artisti, professor',
    p1: 'Urinbayev Kamoliddin Turdimuratovich 1985-yilda Toshkent shahrida tugʻilgan. Oʻzbekiston davlat konservatoriyasini hamda P.I.Chaykovskiy nomidagi Moskva davlat konservatoriyasini tamomlagan.',
    p2: 'U taniqli dirijyor, Oʻzbekiston davlat simfonik orkestri asoschisi va badiiy rahbari hisoblanadi. Uning rahbarligida orkestr dunyoning nufuzli sahnalarida, jumladan Berlin filarmoniyasi, "Konzerthaus" va boshqa joylarda muvaffaqiyatli konsertlar bergan.',
    p3: '2020-yildan buyon Oʻzbekiston davlat konservatoriyasi rektori lavozimida faoliyat yuritib kelmoqda. Uning rahbarligi davrida konservatoriyada oʻquv jarayoni raqamlashtirildi, xalqaro hamkorlik aloqalari kengaytirildi va talabalar uchun yangi ijodiy imkoniyatlar yaratildi.',
    eduLabel: 'Taʼlim',
    eduText: 'Oʻzbekiston davlat konservatoriyasi, Moskva davlat konservatoriyasi.',
    awardLabel: 'Mukofotlar',
    awardText: 'Oʻzbekiston xalq artisti, "Doʻstlik" ordeni sohibi.',
  },
  ru: {
    crumbHome: 'Главная', crumbKons: 'Консерватория', crumbRahbariyat: 'Руководство', crumbThis: 'Ректор',
    heroTag: 'Руководство консерватории', heroTitle: 'Биография', heroEm: 'ректора',
    photoRole: 'Ректор',
    contactHeading: 'Контактная информация',
    bioTag: 'Биография',
    degree: 'Народный артист Узбекистана, профессор',
    p1: 'Уринбаев Камолиддин Турдимуратович родился в 1985 году в городе Ташкенте. Окончил Государственную консерваторию Узбекистана и Московскую государственную консерваторию имени П.И. Чайковского.',
    p2: 'Он является известным дирижёром, основателем и художественным руководителем Государственного симфонического оркестра Узбекистана. Под его руководством оркестр успешно выступал на престижных сценах мира, в том числе в Берлинской филармонии, «Konzerthaus» и других местах.',
    p3: 'С 2020 года занимает должность ректора Государственной консерватории Узбекистана. За время его руководства в консерватории был оцифрован учебный процесс, расширены международные партнёрские связи и созданы новые творческие возможности для студентов.',
    eduLabel: 'Образование',
    eduText: 'Государственная консерватория Узбекистана, Московская государственная консерватория.',
    awardLabel: 'Награды',
    awardText: 'Народный артист Узбекистана, кавалер ордена «Дустлик».',
  },
  en: {
    crumbHome: 'Home', crumbKons: 'Conservatory', crumbRahbariyat: 'Administration', crumbThis: 'Rector',
    heroTag: 'Conservatory Administration', heroTitle: 'Rector’s', heroEm: 'Biography',
    photoRole: 'Rector',
    contactHeading: 'Contact information',
    bioTag: 'Biography',
    degree: 'People’s Artist of Uzbekistan, Professor',
    p1: 'Urinbayev Kamoliddin Turdimuratovich was born in 1985 in the city of Tashkent. He graduated from the State Conservatory of Uzbekistan and the P.I. Tchaikovsky Moscow State Conservatory.',
    p2: 'He is a renowned conductor, the founder and artistic director of the State Symphony Orchestra of Uzbekistan. Under his leadership, the orchestra has successfully performed on prestigious stages around the world, including the Berlin Philharmonic, the “Konzerthaus” and other venues.',
    p3: 'Since 2020 he has held the position of Rector of the State Conservatory of Uzbekistan. During his leadership, the educational process at the conservatory was digitalized, international partnerships were expanded, and new creative opportunities were created for students.',
    eduLabel: 'Education',
    eduText: 'State Conservatory of Uzbekistan, Moscow State Conservatory.',
    awardLabel: 'Awards',
    awardText: 'People’s Artist of Uzbekistan, holder of the “Do‘stlik” (Friendship) Order.',
  },
};

export default function RektorBio() {
  const { lang } = useTranslation();
  const tr = T[lang] || T.uz;

  const BREADCRUMBS = [
    { label: tr.crumbHome, to: '/' },
    { label: tr.crumbKons },
    { label: tr.crumbRahbariyat, to: '/rahbariyat' },
    { label: tr.crumbThis },
  ];

  return (
    <main className="content-wrapper">
      <PageHero
        tag={tr.heroTag}
        title={tr.heroTitle}
        emphasis={tr.heroEm}
        breadcrumbs={BREADCRUMBS}
      />

      <section className="main-content">
        <div className="container">
          <div className="bio-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '60px', alignItems: 'start' }}>

            {/* Chap tomon: Rasm va kontaktlar */}
            <div className="bio-sidebar reveal">
              <div style={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                marginBottom: '30px'
              }}>
                <img
                  src="/images/rahbariyat/rektor.jpg"
                  alt="Urinbayev Kamoliddin Turdimuratovich"
                  style={{ width: '100%', display: 'block' }}
                />
                <div className="bio-photo-overlay">
                  <h3 className="bio-photo-name">Urinbayev Kamoliddin</h3>
                  <p className="bio-photo-role">{tr.photoRole}</p>
                </div>
              </div>

              <div className="bio-contact-card" style={{ background: 'var(--bg-surface)', padding: '25px', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                <h4 style={{ color: 'var(--gold)', marginBottom: '20px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{tr.contactHeading}</h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(201,168,76,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)' }}>
                      <Phone size={14} />
                    </div>
                    <a href="tel:+998712345678" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.9rem' }}>+998 71 234-56-78</a>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(201,168,76,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)' }}>
                      <Mail size={14} />
                    </div>
                    <a href="mailto:rektor@konservatoriya.uz" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.9rem' }}>rektor@konservatoriya.uz</a>
                  </div>



                </div>
              </div>
            </div>

            {/* Oʻng tomon: Matnli maʼlumotlar */}
            <div className="bio-content reveal reveal-delay-1">
              <div style={{ marginBottom: '40px' }}>
                <span className="section-tag" style={{ color: 'var(--gold-dark)' }}>{tr.bioTag}</span>
                <h2 style={{ fontSize: '2.5rem', marginTop: '10px', marginBottom: '20px', color: 'var(--navy)' }}>
                  Urinbayev Kamoliddin Turdimuratovich
                </h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--gold-dark)', fontWeight: 600, marginBottom: '30px' }}>
                  {tr.degree}
                </p>
                <div className="ornament">
                  <div className="ornament-diamond" style={{ background: 'var(--gold-dark)' }} />
                </div>
              </div>

              <div className="bio-text" style={{ color: '#444', lineHeight: 1.8, fontSize: '1rem' }}>
                <p style={{ marginBottom: '20px' }}>
                  {tr.p1}
                </p>
                <p style={{ marginBottom: '20px' }}>
                  {tr.p2}
                </p>
                <p style={{ marginBottom: '20px' }}>
                  {tr.p3}
                </p>

                <div className="bio-stats-grid" style={{ marginTop: '50px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
                  <div style={{ padding: '20px', borderLeft: '3px solid var(--gold)', background: 'rgba(26,26,56,0.03)' }}>
                    <h5 style={{ color: 'var(--navy)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <GraduationCap size={16} /> {tr.eduLabel}
                    </h5>
                    <p style={{ fontSize: '0.9rem', color: '#666' }}>{tr.eduText}</p>
                  </div>
                  <div style={{ padding: '20px', borderLeft: '3px solid var(--gold)', background: 'rgba(26,26,56,0.03)' }}>
                    <h5 style={{ color: 'var(--navy)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Award size={16} /> {tr.awardLabel}
                    </h5>
                    <p style={{ fontSize: '0.9rem', color: '#666' }}>{tr.awardText}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

