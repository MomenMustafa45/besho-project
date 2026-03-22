import { StyleSheet } from 'react-native';
import {
  COLORS,
  fontSizes,
  scaleSize,
  SPACING,
} from '../../designSystem/designSystem';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: scaleSize(SPACING.lg),
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: COLORS.secondary,
    borderStyle: 'dashed',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: scaleSize(SPACING.md),
    flex: 1,
  },
  icon: {},
  hymnName: {
    fontWeight: 'bold',
    color: COLORS.text,
    flex: 1,
    textAlign: 'left',
  },
  index: {
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: fontSizes.Larger,
  },
});
