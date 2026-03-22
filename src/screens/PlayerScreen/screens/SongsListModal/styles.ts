import { StyleSheet } from 'react-native';
import {
  COLORS,
  scaleSize,
  SPACING,
} from '../../../../designSystem/designSystem';

export const styles = StyleSheet.create({
  modalParent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000068',
    padding: scaleSize(SPACING.xxl),
  },
  listContainer: {
    height: '70%',
    width: '100%',
    backgroundColor: COLORS.white,
    paddingHorizontal: scaleSize(SPACING.lg),
    paddingVertical: scaleSize(SPACING.md),
    borderRadius: scaleSize(SPACING.xl),
  },
  listContentContainer: {
    paddingVertical: scaleSize(SPACING.md),
  },
});
