import { Platform } from 'react-native';

const isIos = Platform.OS === 'ios';

/**
 * Returns a tabBarIcon object for iOS (SF Symbol) and Android (image)
 * @param iosFocusedName SF Symbol name when focused
 * @param iosUnfocusedName SF Symbol name when not focused
 * @param androidSource Path to Android image
 */
export const getTabBarIcon = (
  iosFocusedName: string,
  iosUnfocusedName: string,
  androidSource: any,
) => {
  return ({ focused }: { focused: boolean }) => {
    const iosObj = {
      name: focused ? iosFocusedName : iosUnfocusedName,
      type: 'sfSymbol' as const,
    };

    const androidObj = {
      type: 'image' as const,
      source: androidSource,
    };

    return isIos ? iosObj : androidObj;
  };
};
