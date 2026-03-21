import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import Icon from '@react-native-vector-icons/fontawesome5';
import Slider from '@react-native-community/slider';
import { styles } from './styles';
import AppView from '../../components/UI/AppView/AppView';
import { formatTime } from '../../utils/formatTime';
import AppText from '../../components/UI/AppText/AppText';
import { COLORS, ICON_SIZES } from '../../designSystem/designSystem';
import usePlayerControllers from './hooks/usePlayerControllers';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Hymn } from '../../firebase/models/hymnModel';
import AppIcon from '../../components/UI/AppIcon/AppIcon';
import { useTranslation } from 'react-i18next';
import { MainNavigationType } from '../../navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AppPressable from '../../components/UI/AppPressable/AppPressable';
import PlayerHeader from './components/PlayerHeader/PlayerHeader';
import { PlayerStackNavigationType } from '../../navigation/PlayerStack';

type HymnsPlayerScreenNavigationProp =
  NativeStackNavigationProp<PlayerStackNavigationType>;

const Mp3PlayerScreen = () => {
  const { params } = useRoute() as { params: { hymn: Hymn } };
  const hymn = params.hymn;
  const { pop } = useNavigation<HymnsPlayerScreenNavigationProp>();
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const songTitle = isRTL ? hymn.nameAr : hymn.nameEn;
  const songAuthor = isRTL ? hymn.createdByAr : hymn.createdByEn;

  const {
    videoRef,
    paused,
    currentTime,
    duration,
    isLoading,
    playbackRate,
    togglePlayPause,
    onProgress,
    handlePlaybackRate,
    skipForward,
    skipBackward,
    handleSeek,
    onEnd,
    onLoad,
    onLoadStart,
  } = usePlayerControllers();

  return (
    <AppView style={styles.screenParent}>
      {/* Header with Back Button */}
      <PlayerHeader songTitle={songTitle} />

      {/* Main Content */}
      <AppView style={styles.content}>
        {/* Album Art Placeholder */}
        <AppView style={styles.albumArt}>
          <Image style={styles.songImg} source={{ uri: hymn.image }} />
        </AppView>

        <AppView style={styles.trackInfoContainer}>
          {/* Track Info */}
          <AppView style={styles.trackInfo}>
            <AppText style={styles.trackTitle}>{songTitle}</AppText>
            <AppPressable>
              <AppIcon
                name={'heart-outlined'}
                type="Entypo"
                size={ICON_SIZES.lg}
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

          <Video
            ref={videoRef}
            source={{
              uri: params.hymn.link,
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
