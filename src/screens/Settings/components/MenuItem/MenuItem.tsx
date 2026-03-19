import React from 'react';
import AppText from '../../../../components/UI/AppText/AppText';
import { styles } from './styles';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { COLORS, ICON_SIZES } from '../../../../designSystem/designSystem';
import AppPressable from '../../../../components/UI/AppPressable/AppPressable';
import AppIcon from '../../../../components/UI/AppIcon/AppIcon';

type MenuItemProps = {
  title: string;
  onPress: () => void;
  containerStyles?: StyleProp<ViewStyle>;
  titleStyles?: StyleProp<TextStyle>;
  imageSource?: ImageSourcePropType | undefined;
  iconType?: 'Entypo' | 'Fontiso' | 'FontAwesome5';
  iconName?: any;
  iconSize?: number;
  iconColor?: string;
};

const MenuItem = ({
  title,
  iconName,
  onPress,
  iconSize = ICON_SIZES.xxl,
  containerStyles,
  titleStyles,
  imageSource,
  iconType = 'Entypo',
  iconColor = COLORS.gray,
}: MenuItemProps) => {
  return (
    <AppPressable
      onPress={onPress}
      style={[styles.menuItemContainer, containerStyles]}
    >
      {iconName && (
        <AppIcon
          name={iconName}
          type={iconType}
          size={iconSize}
          color={iconColor}
        />
      )}
      {imageSource && <Image source={imageSource} style={styles.itemImg} />}
      <AppText style={[styles.menuItemTitle, titleStyles]}>{title}</AppText>
    </AppPressable>
  );
};

export default MenuItem;
