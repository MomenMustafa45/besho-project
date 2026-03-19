import { StyleSheet } from 'react-native';
import { scaleSize } from '../../designSystem/designSystem';

export const styles = StyleSheet.create({
  settingsParent: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scaleSize(20),
  },
  logo: {
    width: scaleSize(150),
    height: scaleSize(150),
  },
  menuContainer: {
    flex: 1,
  },
});
