import { StyleSheet } from 'react-native';
import {
  COLORS,
  scaleHeight,
  scaleSize,
  SPACING,
} from '../../designSystem/designSystem';

export const styles = StyleSheet.create({
  screenParent: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  listContentContainer: {
    paddingTop: scaleSize(SPACING.xl),
    paddingBottom: scaleHeight(150),
    paddingHorizontal: scaleSize(SPACING.xxl),
    flex: 1,
  },
  row: {
    gap: scaleSize(SPACING.lg),
  },
  searchInput: {
    paddingHorizontal: scaleSize(SPACING.lg),
    paddingBottom: scaleHeight(SPACING.sm),
  },
});
