import { StyleSheet } from 'react-native';
import { scaleHeight, scaleSize } from '../../designSystem/designSystem';

export const styles = StyleSheet.create({
  screenParent: {
    flex: 1,
    position: 'relative',
  },
  bgImgContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: scaleSize(20),
    margin: scaleSize(20),
    borderWidth: 1,
    borderRadius: scaleSize(20),
    padding: scaleSize(10),
    backgroundColor: 'rgba(255, 255, 255, 0.67)',
  },
  appName: {
    fontSize: scaleSize(30),
    fontWeight: 'bold',
  },
  appDesc: {
    lineHeight: scaleHeight(30),
    fontWeight: 'semibold',
    textAlign: 'center',
  },
  appProvider: {},
  appProviderName: {
    fontWeight: 'bold',
  },
});
