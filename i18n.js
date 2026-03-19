import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import { getItem } from './src/utils/localStorage';

import en from './src/locales/en.json';
import ar from './src/locales/ar.json';

const resources = {
  en: { translation: en },
  ar: { translation: ar },
};

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    const savedLang = getItem('language');

    if (savedLang) {
      callback(savedLang);
      return;
    }

    const locales = RNLocalize.getLocales();
    callback(locales[0]?.languageCode || 'en');
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    compatibilityJSON: 'v3',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
