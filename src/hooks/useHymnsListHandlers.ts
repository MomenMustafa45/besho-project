import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MainNavigationType } from '../navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Hymn } from '../firebase/models/hymnModel';

type HymnsListScreenNavigationProp =
  NativeStackNavigationProp<MainNavigationType>;

const useHymnsListHandlers = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { i18n } = useTranslation();
  const isRTL = useMemo(() => i18n.language === 'ar', [i18n]);
  const { navigate } = useNavigation<HymnsListScreenNavigationProp>();

  const onSearchPress = useCallback(() => {
    setShowSearch(true);
  }, []);

  const onClearPress = useCallback(() => {
    setShowSearch(false);
  }, []);

  const onItemPressHandler = (item: Hymn) => {
    navigate('HymnPlayer', {
      screen: 'Player',
      params: { hymn: item },
    });
  };

  return {
    showSearch,
    onSearchPress,
    onClearPress,
    isRTL,
    onItemPressHandler,
  };
};

export default useHymnsListHandlers;
