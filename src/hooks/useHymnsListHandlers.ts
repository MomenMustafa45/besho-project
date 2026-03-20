import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

const useHymnsListHandlers = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { i18n } = useTranslation();
  const isRTL = useMemo(() => i18n.language === 'ar', [i18n]);

  const onSearchPress = useCallback(() => {
    setShowSearch(true);
  }, []);

  const onClearPress = useCallback(() => {
    setShowSearch(false);
  }, []);

  return {
    showSearch,
    onSearchPress,
    onClearPress,
    isRTL,
  };
};

export default useHymnsListHandlers;
