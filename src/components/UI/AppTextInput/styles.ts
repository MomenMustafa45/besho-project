import { StyleSheet } from 'react-native';
import {
  fontSizes,
  scaleHeight,
  scaleSize,
  SPACING,
} from '../../../designSystem/designSystem';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },

  label: {
    marginBottom: 6,
    fontSize: 14,
  },

  input: {
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: scaleSize(SPACING.md),
    paddingVertical: scaleHeight(SPACING.sm),
    fontSize: fontSizes.normal,
    fontFamily: 'Cairo-Regular',
    backgroundColor: '#fff',
  },

  error: {
    marginTop: 4,
    fontSize: 12,
    color: 'red',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: scaleSize(SPACING.md),
  },

  clearButton: {
    paddingHorizontal: 6,
    paddingVertical: 4,
  },

  clearText: {
    fontSize: fontSizes.normal,
    color: '#888',
  },
});
