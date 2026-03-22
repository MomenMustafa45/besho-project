import { StyleSheet } from 'react-native';
import { COLORS, scaleSize, SPACING } from '../../designSystem/designSystem';

export const styles = StyleSheet.create({
  favScreenParent: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  listContentContainer: {
    padding: scaleSize(SPACING.lg),
  },
});
