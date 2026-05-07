import uz from './uz';
import ru from './ru';
import en from './en';

export const translations = { uz, ru, en };

export const SUPPORTED_LANGUAGES = [
  { code: 'uz', label: 'Oʻzbek', short: 'UZ' },
  { code: 'ru', label: 'Русский', short: 'RU' },
  { code: 'en', label: 'English', short: 'EN' },
];

export const DEFAULT_LANGUAGE = 'uz';
