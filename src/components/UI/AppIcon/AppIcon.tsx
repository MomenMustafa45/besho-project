import React from 'react';
import { ViewStyle, TextStyle, ActivityIndicator } from 'react-native';
import FontAwesome5 from '@react-native-vector-icons/fontawesome5';
import Fontiso from '@react-native-vector-icons/fontisto';
import Entypo from '@react-native-vector-icons/entypo';
import { COLORS, ICON_SIZES } from '../../../designSystem/designSystem';

export const iconTypes = {
  Entypo,
  Fontiso,
  FontAwesome5,
};

type AppIconProps = {
  name: any;
  type: keyof typeof iconTypes;
  size?: number;
  color?: string;
  style?: ViewStyle | TextStyle;
  iconStyle?: 'solid' | 'regular' | 'brand' | undefined;
  isLoading?: boolean;
};

const AppIcon = ({
  name,
  type,
  size = ICON_SIZES.lg,
  color = 'black',
  style,
  iconStyle,
  isLoading,
}: AppIconProps) => {
  const IconComponent = iconTypes[type];

  if (!IconComponent) {
    console.warn(`Icon type "${type}" is not supported.`);
    return null;
  }

  if (isLoading)
    return <ActivityIndicator color={COLORS.secondary} size={'small'} />;

  return (
    <IconComponent
      name={name}
      size={size}
      color={color}
      style={style}
      iconStyle={iconStyle}
    />
  );
};

export default AppIcon;
