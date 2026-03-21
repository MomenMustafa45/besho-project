import { View, Text } from 'react-native';
import React from 'react';
import AppView from '../../../../components/UI/AppView/AppView';
import AppText from '../../../../components/UI/AppText/AppText';
import { styles } from './styles';
import AppPressable from '../../../../components/UI/AppPressable/AppPressable';
import { COLORS, ICON_SIZES } from '../../../../designSystem/designSystem';
import Slider from '@react-native-community/slider';
import { formatTime } from '../../../../utils/formatTime';

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
  onEnd: () => void;
  onLoad: () => void;
  onLoadStart: () => void;
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
  onEnd,
  onLoad,
  onLoadStart,
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
          <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
          <Text style={styles.timeText}>{formatTime(duration)}</Text>
        </AppView>
      </AppView>

      {/* Playback Controls */}
      <AppView style={styles.controlsContainer}>
        <TouchableOpacity onPress={handlePlaybackRate}>
          <AppView style={styles.speedButton}>
            <Text style={styles.speedText}>{playbackRate}x</Text>
          </AppView>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controllBtn} onPress={skipBackward}>
          <Icon name="backward" size={ICON_SIZES.xl} iconStyle="solid" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.controllBtn}
          onPress={togglePlayPause}
          disabled={isLoading}
        >
          <Icon
            name={paused ? 'play' : 'pause'}
            size={ICON_SIZES.xxl}
            iconStyle="solid"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.controllBtn} onPress={skipForward}>
          <Icon name="forward" size={ICON_SIZES.xl} iconStyle="solid" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name="volume-mute" size={ICON_SIZES.xl} iconStyle="solid" />
        </TouchableOpacity>
      </AppView>
      <AppView style={styles.listeningContainer}>
        <Icon name="headset" size={16} color="#888888" iconStyle="solid" />
        <Text style={styles.listeningText}>Listening Count: 662</Text>
      </AppView>
    </>
  );
};

export default HymnControllers;
