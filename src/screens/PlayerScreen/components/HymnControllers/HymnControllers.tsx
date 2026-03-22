import React from 'react';
import AppView from '../../../../components/UI/AppView/AppView';
import AppText from '../../../../components/UI/AppText/AppText';
import { styles } from './styles';
import AppPressable from '../../../../components/UI/AppPressable/AppPressable';
import { COLORS, ICON_SIZES } from '../../../../designSystem/designSystem';
import Slider from '@react-native-community/slider';
import { formatTime } from '../../../../utils/formatTime';
import AppIcon from '../../../../components/UI/AppIcon/AppIcon';

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
}: HymnControllersProps) => {
  return (
    <>
      <AppView style={styles.trackInfo}>
        <AppText style={styles.trackTitle}>{songTitle}</AppText>
        <AppPressable>
          <AppIcon name={'heart-outlined'} type="Entypo" size={ICON_SIZES.lg} />
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
      <AppView style={styles.controlsContainer}>
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
        <AppText style={styles.listeningText}>Listening Count: 662</AppText>
      </AppView>
    </>
  );
};

export default HymnControllers;
