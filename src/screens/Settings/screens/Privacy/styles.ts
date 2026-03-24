import { StyleSheet } from 'react-native';
import {
  fontSizes,
  scaleHeight,
  scaleSize,
  SPACING,
} from '../../../../designSystem/designSystem';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scaleHeight(SPACING.xl),
  },
  contentContainer: {
    paddingTop: scaleHeight(SPACING.xl),
    paddingBottom: scaleHeight(150),
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: scaleHeight(SPACING.xl),
    textDecorationLine: 'underline',
  },
  heading: {
    fontSize: fontSizes.large,
    fontWeight: 'bold',
    marginTop: scaleHeight(SPACING.lg),
    marginBottom: scaleHeight(SPACING.md),
    textAlign: 'left',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
    marginBottom: 10,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: scaleSize(SPACING.md),
  },
});
