import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';
import AppView from '../AppView/AppView';
import { COLORS } from '../../../designSystem/designSystem';

type AppPressableProps = PressableProps & {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
};

const AppPressable: React.FC<AppPressableProps> = ({
  children,
  style,
  containerStyle,
  disabled = false,
  loading = false,
  onPress,
  ...rest
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.7 : 1,
        },
        containerStyle,
      ]}
      {...rest}
    >
      <AppView style={style}>
        {loading ? <ActivityIndicator color={COLORS.white} /> : children}
      </AppView>
    </Pressable>
  );
};

export default AppPressable;
