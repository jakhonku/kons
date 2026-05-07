import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations, DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '../i18n';

const STORAGE_KEY = 'kons.lang';
const VALID_CODES = SUPPORTED_LANGUAGES.map((l) => l.code);

const LanguageContext = createContext(null);

function getInitialLang() {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && VALID_CODES.includes(stored)) return stored;
  return DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((code) => {
    if (VALID_CODES.includes(code)) setLangState(code);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}

export function useTranslation() {
  const { lang, setLang } = useLanguage();
  const dict = translations[lang] || translations[DEFAULT_LANGUAGE];

  const t = useCallback(
    (key) => {
      if (!key) return '';
      const parts = key.split('.');
      let value = dict;
      for (const p of parts) {
        if (value == null) return key;
        value = value[p];
      }
      if (value == null) {
        // Fallback to default language
        let fallback = translations[DEFAULT_LANGUAGE];
        for (const p of parts) {
          if (fallback == null) return key;
          fallback = fallback[p];
        }
        return fallback ?? key;
      }
      return value;
    },
    [dict]
  );

  return { t, lang, setLang };
}
