import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

// Import translation files
import en from './src/locales/en.json';
import ar from './src/locales/ar.json';

const resources = {
  en: { translation: en },
  ar: { translation: ar },
};

const locales = RNLocalize.getLocales();
const detectedLanguage = Array.isArray(locales) ? locales[0].languageTag : 'en';

i18n
  .use(initReactI18next) // passes i18n instance to react-i18next
  .init({
    compatibilityJSON: 'v3', // To make it work for Android devices
    resources,
    lng: detectedLanguage, // default language to use
    fallbackLng: 'en', // fallback language if the detected language is not available
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
