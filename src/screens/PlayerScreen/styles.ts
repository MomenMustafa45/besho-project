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
    backgroundColor: COLORS.white,
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
  trackInfo: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  trackTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  trackArtist: {
    color: '#B3B3B3',
    fontSize: 16,
  },
  progressContainer: {
    width: '100%',
    marginBottom: 30,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeText: {
    fontSize: 12,
  },
  progressBar: {
    width: '100%',
    height: 40,
  },
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  speedButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#282828',
    borderRadius: 20,
  },
  speedText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },

  controllBtn: {},
  listeningContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  listeningText: {
    color: '#888888',
    fontSize: 14,
    marginLeft: 6,
  },
  spacer: {
    flex: 1,
  },
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  listBox: {
    backgroundColor: COLORS.black,
    padding: scaleSize(SPACING.lg),
    borderTopEndRadius: scaleSize(SPACING.lg),
    borderTopStartRadius: scaleSize(SPACING.lg),
    ...SHADOWS.small,
  },
});
