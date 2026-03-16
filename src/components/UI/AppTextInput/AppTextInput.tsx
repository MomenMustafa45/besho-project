import React from 'react';
import { View, TextInput, TextInputProps, ViewStyle } from 'react-native';
import AppText from '../AppText/AppText';
import { styles } from './styles';

interface Props extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
}

const AppTextInput: React.FC<Props> = ({
  label,
  error,
  containerStyle,
  style,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <AppText weight="semibold" style={styles.label}>
          {label}
        </AppText>
      )}

      <TextInput
        {...props}
        style={[styles.input, style]}
        placeholderTextColor="#888"
      />

      {error && <AppText style={styles.error}>{error}</AppText>}
    </View>
  );
};

export default AppTextInput;
