import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, Info } from 'lucide-react';
import { useTranslation } from '../../contexts/LanguageContext';

export default function QabulModal() {
  const { lang } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the modal was already shown in this local storage window
    const shown = localStorage.getItem('qabul_modal_2026_shown');
    if (!shown) {
      // Show modal after a short delay for smooth page entrance
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('qabul_modal_2026_shown', 'true');
  };

  // Translations
  const content = {
    uz: {
      badge: "QABUL 2026/2027",
      title: "O‘zbekiston davlat konservatoriyasi 2026/2027-o‘quv yili uchun ro'yxatdan o'ting!",
      date: "🗓 Hujjatlarni qabul qilish 5-iyundan 25-iyunga qadar davom etadi.",
      info: "🟢 Abituriyentlar my.uzbmb.uz sayti orqali onlayn ro'yxatdan o'tishlari mumkin.",
      btn: "ONLAYN RO'YXATDAN O'TISH",
      close: "Yopish"
    },
    ru: {
      badge: "ПРИЕМ 2026/2027",
      title: "Зарегистрируйтесь на 2026/2027 учебный год в Государственную консерваторию Узбекистана!",
      date: "🗓 Прием документов продлится с 5 по 25 июня.",
      info: "🟢 Абитуриенты могут зарегистрироваться онлайн через сайт my.uzbmb.uz.",
      btn: "ОНЛАЙН РЕГИСТРАЦИЯ",
      close: "Закрыть"
    },
    en: {
      badge: "ADMISSION 2026/2027",
      title: "Register for the 2026/2027 academic year at the State Conservatory of Uzbekistan!",
      date: "🗓 Admission of documents continues from June 5 to June 25.",
      info: "🟢 Applicants can register online through the my.uzbmb.uz portal.",
      btn: "REGISTER ONLINE",
      close: "Close"
    }
  };

  const t = content[lang] || content.uz;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="qabul-modal-overlay">
          {/* Backdrop Blur overlay */}
          <motion.div 
            className="qabul-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal Container */}
          <motion.div 
            className="qabul-modal-card"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          >
            {/* Close Icon */}
            <button 
              type="button" 
              className="qabul-modal-close-btn" 
              onClick={handleClose}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="qabul-modal-grid">
              {/* Left Column: Image Banner */}
              <div className="qabul-modal-image-panel">
                <img src="/qabul_banner.jpg" alt="Admission Banner" />
                <div className="qabul-modal-image-overlay" />
              </div>

              {/* Right Column: Information Panel */}
              <div className="qabul-modal-info-panel">
                <div>
                  <span className="qabul-modal-badge">{t.badge}</span>
                  <h2 className="qabul-modal-title">{t.title}</h2>
                  
                  <div className="qabul-modal-details">
                    <div className="qabul-modal-detail-item">
                      <div className="qabul-modal-icon-wrap">
                        <Calendar size={18} />
                      </div>
                      <p className="qabul-modal-detail-text">{t.date}</p>
                    </div>

                    <div className="qabul-modal-detail-item">
                      <div className="qabul-modal-icon-wrap info-icon">
                        <Info size={18} />
                      </div>
                      <p className="qabul-modal-detail-text">{t.info}</p>
                    </div>
                  </div>
                </div>

                <div className="qabul-modal-actions">
                  <a 
                    href="https://my.uzbmb.uz" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="qabul-modal-action-btn"
                  >
                    {t.btn} <ExternalLink size={16} />
                  </a>
                  
                  <button 
                    type="button" 
                    onClick={handleClose} 
                    className="qabul-modal-dismiss-btn"
                  >
                    {t.close}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
