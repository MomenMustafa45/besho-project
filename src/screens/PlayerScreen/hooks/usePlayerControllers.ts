import { useCallback, useRef, useState } from 'react';
import { OnLoadData, OnProgressData, VideoRef } from 'react-native-video';

const usePlayerControllers = () => {
  const videoRef = useRef<VideoRef>(null);
  const [paused, setPaused] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [isMuted, setIsMuted] = useState(false);

  const onProgress = useCallback((data: OnProgressData) => {
    setCurrentTime(data.currentTime);
  }, []);

  const onLoad = useCallback((data: OnLoadData) => {
    setDuration(data.duration);
    setIsLoading(false);
  }, []);

  const onLoadStart = useCallback(() => {
    setIsLoading(true);
  }, []);

  const onEnd = useCallback(() => {
    setPaused(true);
    setCurrentTime(0);
    if (videoRef.current) {
      videoRef.current.seek(0);
    }
  }, []);

  const toggleMute = useCallback(() => {
    setIsMuted(!isMuted);
  }, [isMuted]);

  const togglePlayPause = useCallback(() => {
    setPaused(!paused);
  }, [paused]);

  const handleSeek = useCallback((value: number) => {
    setCurrentTime(value);
    if (videoRef.current) {
      videoRef.current.seek(value);
    }
  }, []);

  const handlePlaybackRate = useCallback(() => {
    const rates = [0.5, 1.0, 1.5, 2.0];
    const currentIndex = rates.indexOf(playbackRate);
    const nextIndex = (currentIndex + 1) % rates.length;
    setPlaybackRate(rates[nextIndex]);
  }, [playbackRate]);

  const skipForward = () => {
    const newTime = Math.min(currentTime + 10, duration);
    handleSeek(newTime);
  };

  const skipBackward = () => {
    const newTime = Math.max(currentTime - 10, 0);
    handleSeek(newTime);
  };

  return {
    videoRef,
    paused,
    currentTime,
    duration,
    isLoading,
    playbackRate,
    onProgress,
    onLoad,
    onLoadStart,
    onEnd,
    togglePlayPause,
    handleSeek,
    handlePlaybackRate,
    skipForward,
    skipBackward,
    toggleMute,
    isMuted,
  };
};

export default usePlayerControllers;
