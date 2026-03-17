import React, { useRef, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Video, {
  OnLoadData,
  OnProgressData,
  VideoRef,
} from 'react-native-video';
import Icon from '@react-native-vector-icons/fontawesome5';
import Slider from '@react-native-community/slider';
import { styles } from './styles';
import AppView from '../../components/UI/AppView/AppView';
import { formatTime } from '../../utils/formatTime';
import AppText from '../../components/UI/AppText/AppText';
import { COLORS, ICON_SIZES } from '../../designSystem/designSystem';

const Mp3PlayerScreen = () => {
  const videoRef = useRef<VideoRef>(null);
  const [paused, setPaused] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [playbackRate, setPlaybackRate] = useState(1.0);

  const onProgress = (data: OnProgressData) => {
    setCurrentTime(data.currentTime);
  };

  const onLoad = (data: OnLoadData) => {
    setDuration(data.duration);
    setIsLoading(false);
  };

  const onLoadStart = () => {
    setIsLoading(true);
  };

  const onEnd = () => {
    setPaused(true);
    setCurrentTime(0);
    if (videoRef.current) {
      videoRef.current.seek(0);
    }
  };

  const togglePlayPause = () => {
    setPaused(!paused);
  };

  const handleSeek = (value: number) => {
    setCurrentTime(value);
    if (videoRef.current) {
      videoRef.current.seek(value);
    }
  };

  const handlePlaybackRate = () => {
    const rates = [0.5, 1.0, 1.5, 2.0];
    const currentIndex = rates.indexOf(playbackRate);
    const nextIndex = (currentIndex + 1) % rates.length;
    setPlaybackRate(rates[nextIndex]);
  };

  const skipForward = () => {
    const newTime = Math.min(currentTime + 10, duration);
    handleSeek(newTime);
  };

  const skipBackward = () => {
    const newTime = Math.max(currentTime - 10, 0);
    handleSeek(newTime);
  };

  return (
    <AppView style={styles.screenParent}>
      {/* Header with Back Button */}
      <AppView style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-left" size={ICON_SIZES.md} iconStyle={'solid'} />
          <AppText style={styles.backButtonText}>Back</AppText>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Now Playing</Text>
      </AppView>

      {/* Main Content */}
      <AppView style={styles.content}>
        {/* Album Art Placeholder */}
        <AppView style={styles.albumArt}>
          <Icon name="file-audio" size={ICON_SIZES.xxxxl} color="#666666" />
        </AppView>

        <AppView style={styles.trackInfoContainer}>
          {/* Track Info */}
          <AppView style={styles.trackInfo}>
            <Text style={styles.trackTitle}>Song Title</Text>
            <Icon name="heart" size={ICON_SIZES.lg} iconStyle="solid" />
          </AppView>

          <Video
            ref={videoRef}
            source={{
              uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
            }}
            style={styles.hiddenVideo}
            paused={paused}
            onProgress={onProgress}
            onLoad={onLoad}
            onLoadStart={onLoadStart}
            onEnd={onEnd}
            rate={playbackRate}
            playInBackground={true}
            playWhenInactive={true}
            onError={e => console.log('Audio Error:', e)}
            ignoreSilentSwitch="ignore"
            progressUpdateInterval={1500.5}
          />

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
        </AppView>
      </AppView>
      {/* Spacer */}
      <AppView style={styles.spacer} />
      <TouchableOpacity style={styles.listContainer}>
        <AppView style={styles.listBox}>
          <Icon
            name="list"
            size={ICON_SIZES.xxxxl}
            color={COLORS.secondary}
            iconStyle="solid"
          />
        </AppView>
      </TouchableOpacity>
    </AppView>
  );
};

export default Mp3PlayerScreen;
