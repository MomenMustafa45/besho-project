import { StyleSheet } from 'react-native';
import {
  COLORS,
  fontSizes,
  ICON_SIZES,
  scaleSize,
  SPACING,
} from '../../../../designSystem/designSystem';

export const styles = StyleSheet.create({
  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: scaleSize(SPACING.md),
    padding: scaleSize(SPACING.md),
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: COLORS.secondary,
    borderStyle: 'dashed',
  },

  menuItemTitle: {
    fontSize: fontSizes.large,
    fontWeight: 'bold',
  },
  itemImg: {
    width: scaleSize(ICON_SIZES.xxl),
    height: scaleSize(ICON_SIZES.xxl),
  },
});
