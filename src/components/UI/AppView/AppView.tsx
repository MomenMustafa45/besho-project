import React from 'react';
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native';
import useLangChecker from '../../../hooks/useLangChecker';

interface Props extends ViewProps {
  padding?: number;
  margin?: number;
  backgroundColor?: string;
  borderRadius?: number;
  style?: StyleProp<ViewStyle>;
}

const AppView = ({
  children,
  padding = 0,
  margin = 0,
  backgroundColor = 'transparent',
  borderRadius = 0,
  style,
  ...rest
}: Props) => {
  const { isRTL } = useLangChecker();
  return (
    <View
      style={[
        // eslint-disable-next-line react-native/no-inline-styles
        {
          direction: isRTL ? 'rtl' : 'ltr',
          padding,
          margin,
          backgroundColor,
          borderRadius,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
};

export default AppView;
