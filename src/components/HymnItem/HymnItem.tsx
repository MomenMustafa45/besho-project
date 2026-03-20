import { Image } from 'react-native';
import AppView from '../UI/AppView/AppView';
import { Hymn } from '../../firebase/models/hymnModel';
import React from 'react';
import AppText from '../UI/AppText/AppText';
import { styles } from './styles';
import AppPressable from '../UI/AppPressable/AppPressable';
import { scaleHeight } from '../../designSystem/designSystem';

type HymnItemProps = {
  item: Hymn;
  isRTL: boolean;
  onPress?: () => void;
  isGrid: boolean;
  // add custom styles props when needed
};

const HymnItem = ({ item, isRTL, onPress, isGrid }: HymnItemProps) => {
  const itemName = isRTL ? item.nameAr : item.nameEn;
  const itemAuthor = isRTL ? item.createdByAr : item.createdByEn;
  const itemImageHeight = isGrid ? scaleHeight(200) : scaleHeight(300);
  const itemDescStyles = isGrid ? styles.itemDescGrid : styles.itemDesc;

  return (
    <AppPressable style={styles.itemParent} onPress={onPress}>
      <AppView style={styles.itemImgContainer}>
        <Image
          style={[styles.itemImg, { height: itemImageHeight }]}
          source={{ uri: item.image }}
        />
      </AppView>

      {/*  */}
      <AppView style={itemDescStyles}>
        <AppText numberOfLines={1} style={styles.itemName}>
          {itemName}
        </AppText>
        <AppText numberOfLines={1} style={styles.itemAuthor}>
          {itemAuthor}
        </AppText>
      </AppView>
    </AppPressable>
  );
};

export default HymnItem;
