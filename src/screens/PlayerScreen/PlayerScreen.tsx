import React from 'react';
import { Image } from 'react-native';
import Video from 'react-native-video';
import { styles } from './styles';
import AppView from '../../components/UI/AppView/AppView';
import { COLORS, ICON_SIZES } from '../../designSystem/designSystem';
import usePlayerControllers from './hooks/usePlayerControllers';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Hymn } from '../../firebase/models/hymnModel';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AppPressable from '../../components/UI/AppPressable/AppPressable';
import PlayerHeader from './components/PlayerHeader/PlayerHeader';
import { PlayerStackNavigationType } from '../../navigation/PlayerStack';
import HymnControllers from './components/HymnControllers/HymnControllers';
import AppIcon from '../../components/UI/AppIcon/AppIcon';
import useLangChecker from '../../hooks/useLangChecker';

type HymnsPlayerScreenNavigationProp =
  NativeStackNavigationProp<PlayerStackNavigationType>;

const Mp3PlayerScreen = () => {
  const { params } = useRoute() as { params: { hymn: Hymn } };
  const hymn = params.hymn;
  const { pop } = useNavigation<HymnsPlayerScreenNavigationProp>();
  const { isRTL } = useLangChecker();
  const songTitle = isRTL ? hymn.nameAr : hymn.nameEn;

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
      <PlayerHeader />
      <AppView style={styles.playerContainer}>
        {/* Header with Back Button */}

        {/* Main Content */}
        <AppView style={styles.content}>
          {/* Album Art Placeholder */}
          <AppView style={styles.albumArt}>
            <Image style={styles.songImg} source={{ uri: hymn.image }} />
          </AppView>

          <AppView style={styles.trackInfoContainer}>
            {/* Track Info */}
            <HymnControllers
              songId={hymn.id}
              songTitle={songTitle}
              currentTime={currentTime}
              duration={duration}
              paused={paused}
              playbackRate={playbackRate}
              togglePlayPause={togglePlayPause}
              handlePlaybackRate={handlePlaybackRate}
              skipForward={skipForward}
              skipBackward={skipBackward}
              handleSeek={handleSeek}
              isLoading={isLoading}
            />

            <Video
              ref={videoRef}
              source={{
                uri: hymn.link,
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
        <AppPressable style={styles.listContainer}>
          <AppView style={styles.listBox}>
            <AppIcon
              name="play-list"
              size={ICON_SIZES.xxl}
              color={COLORS.secondary}
              type="Fontiso"
            />
          </AppView>
        </AppPressable>
      </AppView>
    </AppView>
  );
};

export default Mp3PlayerScreen;
