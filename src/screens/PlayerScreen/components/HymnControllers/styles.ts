import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
});
