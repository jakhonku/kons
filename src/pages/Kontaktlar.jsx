import { useState } from 'react';
import PageHero from '../components/PageHero';
import { supabase } from '../lib/supabase';
import { Loader2 } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const ICON_PIN = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const ICON_PHONE = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.76a16 16 0 0 0 6 6l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const ICON_MAIL = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const ICON_CLOCK = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const T = {
  uz: {
    crumbHome: 'Bosh sahifa', crumbNews: 'Yangiliklar', crumbThis: 'Kontaktlar',
    heroTag: 'Yangiliklar', heroTitle: 'Bogʻlanish', heroEm: 'Maʼlumotlari',
    lead: 'Bizga murojaat qiling — har qanday savol boʻyicha yordam berishga tayyormiz.',
    addrLabel: 'Manzil', addrValue: "Toshkent sh., Shayxontohur tumani,\nBotir Zokirov koʻchasi, 1-uy",
    phoneLabel: 'Telefon', phoneValue: '+998 71 234-56-78\n+998 71 234-56-79',
    mailLabel: 'Elektron pochta', mailValue: 'info@konservatoriya.uz\nrektor@konservatoriya.uz',
    hoursLabel: 'Ish vaqti', hoursValue: "Dushanba–Juma: 9:00–18:00\nShanba: 9:00–14:00",
    social: 'Ijtimoiy tarmoqlar',
    sentTitle: 'Xabar yuborildi!', sentText: 'Tez orada siz bilan bogʻlanamiz. Rahmat!',
    formTitle1: 'Murojaat', formTitle2: 'Yuborish',
    fName: 'Ism Familiya *', fNamePh: 'F.I.O',
    fPhone: 'Telefon raqami', fPhonePh: '+998 XX XXX-XX-XX',
    fEmail: 'Elektron pochta *', fEmailPh: 'email@example.com',
    fSubject: 'Mavzu', fSubjectPh: 'Murojaat mavzusi',
    fMessage: 'Xabar *', fMessagePh: 'Xabaringizni yozing...',
    sending: 'YUBORILMOQDA...', send: 'YUBORISH',
    err: 'Xabar yuborishda xatolik yuz berdi: ',
    rpcSubject: 'Bogʻlanish sahifasidan murojaat',
  },
  ru: {
    crumbHome: 'Главная', crumbNews: 'Новости', crumbThis: 'Контакты',
    heroTag: 'Новости', heroTitle: 'Контактная', heroEm: 'информация',
    lead: 'Свяжитесь с нами — мы готовы помочь по любому вопросу.',
    addrLabel: 'Адрес', addrValue: "г. Ташкент, Шайхантахурский район,\nул. Ботира Закирова, дом 1",
    phoneLabel: 'Телефон', phoneValue: '+998 71 234-56-78\n+998 71 234-56-79',
    mailLabel: 'Электронная почта', mailValue: 'info@konservatoriya.uz\nrektor@konservatoriya.uz',
    hoursLabel: 'Время работы', hoursValue: "Понедельник–Пятница: 9:00–18:00\nСуббота: 9:00–14:00",
    social: 'Социальные сети',
    sentTitle: 'Сообщение отправлено!', sentText: 'Мы свяжемся с вами в ближайшее время. Спасибо!',
    formTitle1: 'Отправить', formTitle2: 'обращение',
    fName: 'Имя Фамилия *', fNamePh: 'Ф.И.О',
    fPhone: 'Номер телефона', fPhonePh: '+998 XX XXX-XX-XX',
    fEmail: 'Электронная почта *', fEmailPh: 'email@example.com',
    fSubject: 'Тема', fSubjectPh: 'Тема обращения',
    fMessage: 'Сообщение *', fMessagePh: 'Напишите ваше сообщение...',
    sending: 'ОТПРАВКА...', send: 'ОТПРАВИТЬ',
    err: 'Произошла ошибка при отправке сообщения: ',
    rpcSubject: 'Обращение со страницы контактов',
  },
  en: {
    crumbHome: 'Home', crumbNews: 'News', crumbThis: 'Contacts',
    heroTag: 'News', heroTitle: 'Contact', heroEm: 'Information',
    lead: 'Get in touch with us — we are ready to help with any question.',
    addrLabel: 'Address', addrValue: "Tashkent, Shaykhantakhur district,\nBotir Zokirov street, 1",
    phoneLabel: 'Phone', phoneValue: '+998 71 234-56-78\n+998 71 234-56-79',
    mailLabel: 'Email', mailValue: 'info@konservatoriya.uz\nrektor@konservatoriya.uz',
    hoursLabel: 'Working hours', hoursValue: "Monday–Friday: 9:00–18:00\nSaturday: 9:00–14:00",
    social: 'Social networks',
    sentTitle: 'Message sent!', sentText: 'We will contact you soon. Thank you!',
    formTitle1: 'Send', formTitle2: 'a message',
    fName: 'Full name *', fNamePh: 'Full name',
    fPhone: 'Phone number', fPhonePh: '+998 XX XXX-XX-XX',
    fEmail: 'Email *', fEmailPh: 'email@example.com',
    fSubject: 'Subject', fSubjectPh: 'Message subject',
    fMessage: 'Message *', fMessagePh: 'Write your message...',
    sending: 'SENDING...', send: 'SEND',
    err: 'An error occurred while sending the message: ',
    rpcSubject: 'Inquiry from the contacts page',
  },
};

export default function Kontaktlar() {
  const { lang } = useTranslation();
  const tr = T[lang] || T.uz;

  const CONTACT_ITEMS = [
    { icon: ICON_PIN, label: tr.addrLabel, value: tr.addrValue },
    { icon: ICON_PHONE, label: tr.phoneLabel, value: tr.phoneValue },
    { icon: ICON_MAIL, label: tr.mailLabel, value: tr.mailValue },
    { icon: ICON_CLOCK, label: tr.hoursLabel, value: tr.hoursValue },
  ];

  const BREADCRUMBS = [
    { label: tr.crumbHome, to: '/' },
    { label: tr.crumbNews },
    { label: tr.crumbThis },
  ];

  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    // SECURITY DEFINER RPC orqali yoziladi (RLS'ni xavfsiz aylanib o'tadi).
    const { error: err } = await supabase.rpc('submit_murojaat', {
      p_full_name: form.name,
      p_phone: form.phone,
      p_email: form.email,
      p_type: 'Bogʻlanish',
      p_subject: form.subject || tr.rpcSubject,
      p_message: form.message,
    });

    setLoading(false);
    if (!err) {
      setSent(true);
    } else {
      alert(tr.err + err.message);
    }
  }

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
          <div className="contact-grid">

            {/* Chap: aloqa maʼlumotlari */}
            <div>
              <p className="article-body lead" style={{ marginBottom: '40px' }}>
                {tr.lead}
              </p>

              {CONTACT_ITEMS.map((item) => (
                <div key={item.label} className="contact-info-item">
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-text">
                    <h4>{item.label}</h4>
                    {item.value.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Ijtimoiy tarmoqlar */}
              <div style={{ marginTop: '40px' }}>
                <h4 style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--gold-dark)', marginBottom: '15px' }}>
                  {tr.social}
                </h4>
                <div style={{ display: 'flex', gap: '12px' }}>
                  {['Telegram', 'Instagram', 'Facebook', 'YouTube'].map((name) => (
                    <a key={name} href="#" style={{
                      padding: '8px 16px',
                      border: '1px solid var(--navy)',
                      color: 'var(--navy)',
                      textDecoration: 'none',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      transition: '0.3s',
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.background = 'var(--navy)'; e.currentTarget.style.color = 'white'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--navy)'; }}
                    >
                      {name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Oʻng: forma */}
            <div>
              {sent ? (
                <div className="info-box" style={{ borderColor: '#228B22' }}>
                  <h4 style={{ color: '#228B22' }}>{tr.sentTitle}</h4>
                  <p>{tr.sentText}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ color: 'var(--navy)', marginBottom: '30px', fontSize: '1.5rem' }}>
                    {tr.formTitle1} <span>{tr.formTitle2}</span>
                  </h3>
                  <div className="form-grid" style={{ marginBottom: '20px' }}>
                    <div className="form-group">
                      <label>{tr.fName}</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder={tr.fNamePh} />
                    </div>
                    <div className="form-group">
                      <label>{tr.fPhone}</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder={tr.fPhonePh} />
                    </div>
                    <div className="form-group">
                      <label>{tr.fEmail}</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder={tr.fEmailPh} />
                    </div>
                    <div className="form-group">
                      <label>{tr.fSubject}</label>
                      <input name="subject" value={form.subject} onChange={handleChange} placeholder={tr.fSubjectPh} />
                    </div>
                  </div>
                  <div className="form-group form-grid full" style={{ marginBottom: '25px' }}>
                    <label>{tr.fMessage}</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required placeholder={tr.fMessagePh} style={{ minHeight: '140px' }} />
                  </div>
                  <button
                    type="submit"
                    className="btn-submit"
                    disabled={loading}
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}
                  >
                    {loading ? <Loader2 size={16} className="admin-spin" /> : null}
                    {loading ? tr.sending : tr.send}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
