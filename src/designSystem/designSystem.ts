import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scaleHeight = (size: number) => {
  const scaleFactor = (SCREEN_HEIGHT / guidelineBaseHeight) * size;
  return Math.round(PixelRatio.roundToNearestPixel(scaleFactor));
};

export const scaleSize = (size: number) => {
  const scaleFactor = (SCREEN_WIDTH / guidelineBaseWidth) * size;
  return Math.round(PixelRatio.roundToNearestPixel(scaleFactor));
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const ICON_SIZES = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 28,
  xxl: 32,
  xxxl: 40,
  xxxxl: 48,
};

export const COLORS = {
  primary: '#61F2F5',
  secondary: '#723881',
  third: '#E0E0E0',
  white: '#FFFFFF',
  text: '#15173D',
  black: '#000000',
  blue: '#007AFF',
  gray: '#888888',
};

export const fontSizes = {
  Larger: 22,
  large: 18,
  normal: 16,
  small: 13,
};

export const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.5,
    elevation: 2, // Android
  },

  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },

  large: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 8,
  },
};
