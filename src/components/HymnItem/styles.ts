import { Dimensions, StyleSheet } from 'react-native';
import {
  COLORS,
  fontSizes,
  scaleHeight,
  scaleSize,
  SHADOWS,
  SPACING,
} from '../../designSystem/designSystem';

const { width } = Dimensions.get('window');

const horizontalPadding = scaleSize(SPACING.xl);
const gap = scaleSize(SPACING.xxxl);
const itemWidth = (width - horizontalPadding - gap) / 2;

export const styles = StyleSheet.create({
  itemParent: {
    position: 'relative',
    width: '100%',
    marginBottom: scaleHeight(SPACING.xxl),
    ...SHADOWS.large,
  },
  itemParentGrid: {
    marginBottom: scaleHeight(SPACING.xxl),
    width: itemWidth,
  },
  itemImgContainer: {
    width: '100%',
    borderRadius: scaleSize(SPACING.xl),
    overflow: 'hidden',
  },
  itemImg: {
    width: '100%',
  },
  itemDesc: {
    position: 'absolute',
    zIndex: 5,
    left: 0,
    bottom: 0,
    backgroundColor: '#ffffffa5',
    width: '100%',
    padding: scaleSize(SPACING.md),
    alignItems: 'flex-start',
    rowGap: scaleSize(SPACING.sm),
    borderBottomEndRadius: scaleSize(SPACING.xl),
    borderBottomStartRadius: scaleSize(SPACING.xl),
    overflow: 'hidden',
  },
  itemDescGrid: {
    padding: scaleSize(SPACING.md),
    alignItems: 'flex-start',
    rowGap: scaleSize(SPACING.sm),
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: fontSizes.large,
    color: COLORS.secondary,
  },
  itemAuthor: {
    fontSize: fontSizes.small,
    color: COLORS.black,
  },
});
