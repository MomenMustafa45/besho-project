import { StyleSheet } from 'react-native';
import {
  COLORS,
  fontSizes,
  scaleSize,
  SHADOWS,
  SPACING,
} from '../../designSystem/designSystem';

export const styles = StyleSheet.create({
  screenParent: {
    flex: 1,
    backgroundColor: '#00000068',
  },
  playerContainer: {
    flex: 1,
    paddingHorizontal: scaleSize(SPACING.lg),
    marginTop: scaleSize(SPACING.lg),
  },
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: scaleSize(SPACING.md),
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: scaleSize(SPACING.sm),
  },
  backButtonText: {
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: fontSizes.normal,
    fontWeight: '600',
  },
  content: {
    rowGap: scaleSize(SPACING.lg),
    backgroundColor: COLORS.primary,
    ...SHADOWS.medium,
  },
  hiddenVideo: {
    position: 'absolute',
    width: 1,
    height: 1,
    opacity: 0,
  },
  albumArt: {
    width: '100%',
    height: 300,
    borderRadius: scaleSize(SPACING.sm),
  },
  songImg: {
    width: '100%',
    height: '100%',
  },
  trackInfoContainer: {
    padding: scaleSize(SPACING.lg),
  },
  spacer: {
    flex: 1,
  },
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  listBox: {
    backgroundColor: COLORS.white,
    padding: scaleSize(SPACING.lg),
    borderTopEndRadius: scaleSize(SPACING.lg),
    borderTopStartRadius: scaleSize(SPACING.lg),
    ...SHADOWS.small,
  },
});
