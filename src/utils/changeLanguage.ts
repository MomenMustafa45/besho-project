import i18n from '../../i18n';
import { setItem } from './localStorage';

export const changeLanguage = (lng: 'ar' | 'en') => {
  setItem('language', lng);
  i18n.changeLanguage(lng);
};
