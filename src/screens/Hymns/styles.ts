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
    paddingBottom: scaleHeight(300),
    paddingHorizontal: scaleSize(SPACING.xl),
  },
  row: {
    justifyContent: 'space-between',
  },
  searchInput: {
    paddingHorizontal: scaleSize(SPACING.lg),
    paddingBottom: scaleHeight(SPACING.sm),
  },
});
