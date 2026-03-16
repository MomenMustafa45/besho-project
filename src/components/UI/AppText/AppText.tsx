import React from 'react';
import { Text, TextProps } from 'react-native';
import { styles } from './styles';

interface Props extends TextProps {
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
}

const AppText: React.FC<Props> = ({
  children,
  weight = 'regular',
  style,
  ...props
}) => {
  const fontFamily = {
    regular: 'Cairo-Regular',
    medium: 'Cairo-Medium',
    semibold: 'Cairo-SemiBold',
    bold: 'Cairo-Bold',
  }[weight];

  return (
    <Text {...props} style={[styles.text, { fontFamily }, style]}>
      {children}
    </Text>
  );
};

export default AppText;
