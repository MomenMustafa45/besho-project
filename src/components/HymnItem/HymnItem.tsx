import AppView from '../UI/AppView/AppView';
import { Hymn } from '../../firebase/models/hymnModel';
import React from 'react';
import AppText from '../UI/AppText/AppText';
import { styles } from './styles';
import AppPressable from '../UI/AppPressable/AppPressable';
import { scaleHeight } from '../../designSystem/designSystem';
import FastImage from '@d11/react-native-fast-image';

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
  const itemContainerShadow = isGrid
    ? styles.itemParentGrid
    : styles.itemParent;

  return (
    <AppPressable style={itemContainerShadow} onPress={onPress}>
      <AppView style={styles.itemImgContainer}>
        <FastImage
          style={[styles.itemImg, { height: itemImageHeight }]}
          source={{ uri: item.image, priority: FastImage.priority.normal }}
          resizeMode={FastImage.resizeMode.cover}
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
