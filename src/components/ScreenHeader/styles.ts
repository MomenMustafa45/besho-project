import { StyleSheet } from 'react-native';
import {
  fontSizes,
  scaleHeight,
  scaleSize,
  SPACING,
} from '../../designSystem/designSystem';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scaleSize(SPACING.lg),
    paddingVertical: scaleHeight(SPACING.sm),
  },
  title: {
    fontSize: fontSizes.large,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    padding: scaleSize(SPACING.xs),
  },
});
