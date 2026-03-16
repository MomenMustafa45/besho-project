import React from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';

interface Props extends ViewProps {
  padding?: number;
  margin?: number;
  backgroundColor?: string;
  borderRadius?: number;
  style?: ViewStyle | ViewStyle[];
}

const AppView: React.FC<Props> = ({
  children,
  padding = 0,
  margin = 0,
  backgroundColor = 'transparent',
  borderRadius = 0,
  style,
  ...rest
}) => {
  return (
    <View
      style={[
        {
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
