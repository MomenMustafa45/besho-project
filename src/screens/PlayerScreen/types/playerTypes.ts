import { RefObject } from 'react';
import Video from 'react-native-video';

export interface VideoPlayerProps {
  videoRef: RefObject<typeof Video>;
  setCurrentTime: (time: number) => void;
  setDuration: (duration: number) => void;
  setIsLoading: (loading: boolean) => void;
  setPaused: (paused: boolean) => void;
  setPlaybackRate: (rate: number) => void;
  playbackRate: number;
  paused: boolean;
}

// Video event types from react-native-video
export interface OnProgressData {
  currentTime: number;
  playableDuration: number;
  seekableDuration: number;
}

export interface OnLoadData {
  duration: number;
  currentTime: number;
  naturalSize: {
    width: number;
    height: number;
    orientation: 'portrait' | 'landscape';
  };
  audioTracks?: any[];
  textTracks?: any[];
}
