import { StyleSheet } from 'react-native';
import { fontSizes } from '../../../designSystem/constants';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },

  label: {
    marginBottom: 6,
    fontSize: 14,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: fontSizes.Body,
    fontFamily: 'Cairo-Regular',
    backgroundColor: '#fff',
  },

  error: {
    marginTop: 4,
    fontSize: 12,
    color: 'red',
  },
});
