import { StyleSheet } from 'react-native';
import { scaleSize, SPACING } from '../../../../designSystem/designSystem';

export const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: scaleSize(SPACING.md),
  },
});
