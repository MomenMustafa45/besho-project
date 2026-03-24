import { StyleSheet } from 'react-native';
import {
  scaleHeight,
  scaleSize,
  SPACING,
} from '../../../../designSystem/designSystem';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  content: {
    flexGrow: 1,
    paddingTop: scaleHeight(SPACING['4xl']),
  },
  card: {
    backgroundColor: '#EDEDED',
    borderRadius: 4,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
    marginBottom: 20,
  },
  footerText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  link: {
    fontSize: 18,
    textAlign: 'center',
    color: '#6EC1E4',
    marginTop: 8,
    fontWeight: 'bold',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: scaleSize(SPACING.md),
  },
});
