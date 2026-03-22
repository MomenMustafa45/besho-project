import { useTranslation } from 'react-i18next';

const useLangChecker = () => {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return {
    isRTL,
    t,
  };
};

export default useLangChecker;
