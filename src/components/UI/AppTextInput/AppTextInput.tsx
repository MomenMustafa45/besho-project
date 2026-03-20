import React, { useMemo } from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import AppText from '../AppText/AppText';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';

interface Props extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;

  showClear?: boolean;
  onClearPress?: () => void;
}

const AppTextInput: React.FC<Props> = ({
  label,
  error,
  containerStyle,
  style,
  showClear,
  onClearPress,
  ...props
}) => {
  const { i18n } = useTranslation();
  const isRTL = useMemo(() => i18n.language === 'ar', [i18n]);

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <AppText weight="semibold" style={styles.label}>
          {label}
        </AppText>
      )}

      <View style={[styles.inputWrapper]}>
        <TextInput
          {...props}
          style={[
            styles.input,
            { flex: 1, textAlign: isRTL ? 'right' : 'left' },
            style,
          ]}
          placeholderTextColor="#888"
        />

        {showClear && (
          <TouchableOpacity onPress={onClearPress} style={styles.clearButton}>
            <AppText style={styles.clearText}>✕</AppText>
          </TouchableOpacity>
        )}
      </View>

      {error && <AppText style={styles.error}>{error}</AppText>}
    </View>
  );
};

export default AppTextInput;
