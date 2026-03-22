import React from 'react';
import AppView from '../UI/AppView/AppView';
import AppText from '../UI/AppText/AppText';
import { Hymn } from '../../firebase/models/hymnModel';
import AppPressable from '../UI/AppPressable/AppPressable';
import AppIcon from '../UI/AppIcon/AppIcon';
import { ICON_SIZES } from '../../designSystem/designSystem';
import { useAppDispatch } from '../../hooks/useStoreHooks';
import { toggleFavorite } from '../../store/slices/favoritesSlice';
import { styles } from './styles';

type HymnMiniItemProps = {
  hymn: Hymn;
  onPress: () => void;
  index: number;
  isRTL: boolean;
};

const HymnMiniItem = ({ hymn, index, onPress, isRTL }: HymnMiniItemProps) => {
  const dispatch = useAppDispatch();
  const hymnName = isRTL ? hymn.nameAr : hymn.nameEn;
  const isFavorite = hymn.isFavorite;

  const toggleFavoriteHandler = () => {
    dispatch(toggleFavorite(hymn.id));
  };

  return (
    <AppPressable onPress={onPress} style={styles.container}>
      <AppView style={styles.textContainer}>
        <AppText numberOfLines={1} style={styles.index}>
          {index}
        </AppText>
        <AppText numberOfLines={1} style={styles.hymnName}>
          {hymnName}
        </AppText>
      </AppView>
      <AppPressable style={styles.icon} onPress={toggleFavoriteHandler}>
        <AppIcon
          name={isFavorite ? 'heart' : 'heart-outlined'}
          type="Entypo"
          size={ICON_SIZES.lg}
          color="red"
        />
      </AppPressable>
    </AppPressable>
  );
};

export default HymnMiniItem;
