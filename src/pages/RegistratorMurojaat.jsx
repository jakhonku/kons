import PageHero from '../components/PageHero';
import { useTranslation } from '../contexts/LanguageContext';

const TELEGRAM_URL = 'https://t.me/Konservatoriya_Registrar_Bot';

const T = {
  uz: {
    crumbHome: 'Bosh sahifa',
    crumbInteraktiv: 'Interaktiv xizmatlar',
    crumbThis: 'Registrator ofisiga murojaat',
    heroTag: 'Interaktiv xizmatlar',
    heroTitle: 'Registrator ofisiga',
    heroEm: 'murojaat',
    lead: 'Registrator ofisiga hujjat buyurtma qilish va murojaat yuborish endi onlayn — Telegram bot orqali amalga oshiriladi. Quyidagi tugma orqali botga oʻtib, murojaatingizni qoldiring.',
    tgKicker: 'Telegram orqali murojaat',
    tgTitle: 'Registrator boti',
    tgDesc: 'Hujjat buyurtma qilish va Registrator ofisiga murojaat yuborish uchun Telegram botimizdan foydalaning. Tez va qulay!',
    tgBtn: 'Botga oʻtish',
    note: 'Arizalar HEMIS tizimi orqali ham topshirilishi mumkin. Shoshilinch hollarda bevosita Registrator ofisiga (227-xona, 2-qavat) murojaat qiling.',
  },
  ru: {
    crumbHome: 'Главная',
    crumbInteraktiv: 'Интерактивные услуги',
    crumbThis: 'Обращение в офис регистратора',
    heroTag: 'Интерактивные услуги',
    heroTitle: 'Обращение в офис',
    heroEm: 'регистратора',
    lead: 'Заказ документов и обращение в офис регистратора теперь осуществляется онлайн — через Telegram-бот. Нажмите кнопку ниже, чтобы перейти в бот и оставить своё обращение.',
    tgKicker: 'Обращение через Telegram',
    tgTitle: 'Бот регистратора',
    tgDesc: 'Используйте наш Telegram-бот для заказа документов и обращения в офис регистратора. Быстро и удобно!',
    tgBtn: 'Перейти в бот',
    note: 'Заявления также можно подать через систему HEMIS. В срочных случаях обращайтесь непосредственно в офис регистратора (кабинет 227, 2-й этаж).',
  },
  en: {
    crumbHome: 'Home',
    crumbInteraktiv: 'Interactive services',
    crumbThis: 'Registrar office enquiry',
    heroTag: 'Interactive services',
    heroTitle: 'Registrar office',
    heroEm: 'enquiry',
    lead: 'Ordering documents and contacting the Registrar Office is now done online — via the Telegram bot. Use the button below to open the bot and submit your enquiry.',
    tgKicker: 'Apply via Telegram',
    tgTitle: 'Registrar bot',
    tgDesc: 'Use our Telegram bot to order documents and contact the Registrar Office. Fast and convenient!',
    tgBtn: 'Open the bot',
    note: 'Applications can also be submitted through the HEMIS system. In urgent cases, contact the Registrar Office directly (Room 227, 2nd floor).',
  },
};

const TelegramIcon = ({ size = 28, fill = 'white' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}>
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

export default function RegistratorMurojaat() {
  const { lang } = useTranslation();
  const tr = T[lang] || T.uz;

  const BREADCRUMBS = [
    { label: tr.crumbHome, to: '/' },
    { label: tr.crumbInteraktiv },
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

          <article className="article-body" style={{ marginBottom: '32px' }}>
            <p className="lead">{tr.lead}</p>
          </article>

          {/* ── Telegram bot murojaat bloki ── */}
          <div style={{
            background: 'linear-gradient(135deg, #0f1a2e 0%, #162840 100%)',
            border: '1px solid rgba(34,158,217,0.3)',
            borderLeft: '4px solid #229ED9',
            padding: '28px 32px',
            marginBottom: '30px',
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
            flexWrap: 'wrap',
          }}>
            <div style={{
              width: '56px', height: '56px', borderRadius: '50%',
              background: '#229ED9', display: 'flex', alignItems: 'center',
              justifyContent: 'center', flexShrink: 0,
            }}>
              <TelegramIcon size={28} fill="white" />
            </div>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '3px', color: '#229ED9', marginBottom: '6px', textTransform: 'uppercase' }}>
                {tr.tgKicker}
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.2rem', fontWeight: 500, margin: '0 0 8px' }}>
                {tr.tgTitle}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, margin: 0 }}>
                {tr.tgDesc}
              </p>
            </div>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: '#229ED9', color: '#fff',
                padding: '13px 26px', flexShrink: 0,
                fontSize: '0.8rem', fontWeight: 700,
                letterSpacing: '1px', textTransform: 'uppercase',
                textDecoration: 'none', transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#1a85b8'}
              onMouseLeave={e => e.currentTarget.style.background = '#229ED9'}
            >
              <TelegramIcon size={18} fill="currentColor" />
              {tr.tgBtn}
            </a>
          </div>

          <div style={{
            background: 'var(--cream)', border: '1px solid var(--light-border)',
            borderLeft: '4px solid var(--gold)', padding: '20px 28px', marginBottom: '60px',
          }}>
            <p style={{ fontSize: '0.88rem', color: '#555', lineHeight: 1.75, fontFamily: 'var(--font-serif)', margin: 0 }}>
              {tr.note}
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
