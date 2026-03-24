import React from 'react';
import AppView from '../../../../components/UI/AppView/AppView';
import AppText from '../../../../components/UI/AppText/AppText';
import { styles } from './styles';
import AppPressable from '../../../../components/UI/AppPressable/AppPressable';
import { COLORS, ICON_SIZES } from '../../../../designSystem/designSystem';
import Slider from '@react-native-community/slider';
import { formatTime } from '../../../../utils/formatTime';
import AppIcon from '../../../../components/UI/AppIcon/AppIcon';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../hooks/useStoreHooks';
import { toggleFavorite } from '../../../../store/slices/favoritesSlice';
import useLangChecker from '../../../../hooks/useLangChecker';

type HymnControllersProps = {
  currentTime: number;
  duration: number;
  isLoading: boolean;
  playbackRate: number;
  paused: boolean;
  togglePlayPause: () => void;
  handlePlaybackRate: () => void;
  skipForward: () => void;
  skipBackward: () => void;
  handleSeek: (value: number) => void;
  songTitle: string;
  songId: string;
  listenerCount: number;
};

const HymnControllers = ({
  currentTime,
  duration,
  isLoading,
  playbackRate,
  paused,
  togglePlayPause,
  handlePlaybackRate,
  skipForward,
  skipBackward,
  handleSeek,
  songTitle,
  songId,
  listenerCount,
}: HymnControllersProps) => {
  const favorites = useAppSelector(state => state.favorites.favorites);
  const dispatch = useAppDispatch();
  const isFavorite = favorites.includes(songId);
  const { isRTL } = useLangChecker();
  const toggleFavoriteHandler = () => {
    dispatch(toggleFavorite(songId));
  };

  return (
    <>
      <AppView style={styles.trackInfo}>
        <AppText style={styles.trackTitle}>{songTitle}</AppText>
        <AppPressable onPress={toggleFavoriteHandler}>
          <AppIcon
            name={isFavorite ? 'heart' : 'heart-outlined'}
            type="Entypo"
            size={ICON_SIZES.lg}
            color="red"
          />
        </AppPressable>
      </AppView>

      {/* Progress Bar and Times */}
      <AppView style={styles.progressContainer}>
        <Slider
          style={styles.progressBar}
          minimumValue={0}
          maximumValue={duration}
          value={currentTime}
          onSlidingComplete={handleSeek}
          minimumTrackTintColor={COLORS.secondary}
          maximumTrackTintColor={COLORS.white}
          thumbTintColor={COLORS.secondary}
          disabled={isLoading}
        />
        <AppView style={styles.timeRow}>
          <AppText style={styles.timeText}>{formatTime(currentTime)}</AppText>
          <AppText style={styles.timeText}>{formatTime(duration)}</AppText>
        </AppView>
      </AppView>

      {/* Playback Controls */}
      <AppView
        style={[
          styles.controlsContainer,
          // eslint-disable-next-line react-native/no-inline-styles
          { flexDirection: isRTL ? 'row-reverse' : 'row' },
        ]}
      >
        <AppPressable onPress={handlePlaybackRate}>
          <AppView style={styles.speedButton}>
            <AppText style={styles.speedText}>{playbackRate}x</AppText>
          </AppView>
        </AppPressable>
        <AppPressable style={styles.controllBtn} onPress={skipBackward}>
          <AppIcon
            type="FontAwesome5"
            name="backward"
            size={ICON_SIZES.xl}
            iconStyle="solid"
          />
        </AppPressable>

        <AppPressable
          style={styles.controllBtn}
          onPress={togglePlayPause}
          disabled={isLoading}
        >
          <AppIcon
            name={paused ? 'play' : 'pause'}
            size={ICON_SIZES.xxl}
            type="FontAwesome5"
            iconStyle="solid"
            isLoading={isLoading}
          />
        </AppPressable>

        <AppPressable style={styles.controllBtn} onPress={skipForward}>
          <AppIcon
            name="forward"
            size={ICON_SIZES.xl}
            type="FontAwesome5"
            iconStyle="solid"
          />
        </AppPressable>

        <AppPressable>
          <AppIcon
            name="volume-mute"
            size={ICON_SIZES.xl}
            type="FontAwesome5"
            iconStyle="solid"
          />
        </AppPressable>
      </AppView>
      <AppView style={styles.listeningContainer}>
        <AppIcon
          name="headset"
          size={16}
          color="#888888"
          type="FontAwesome5"
          iconStyle="solid"
        />
        <AppText style={styles.listeningText}>
          Listening Count: {listenerCount}
        </AppText>
      </AppView>
    </>
  );
};

export default HymnControllers;
