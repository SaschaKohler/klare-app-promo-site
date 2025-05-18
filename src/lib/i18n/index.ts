import { de } from './de';
import { en } from './en';

export const translations = {
  de,
  en
};

export type Language = 'de' | 'en';

export function getTranslation(lang: Language = 'de') {
  return translations[lang];
}
