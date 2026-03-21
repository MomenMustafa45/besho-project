import { ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react';
import AppView from '../AppView/AppView';
import { COLORS } from '../../../designSystem/designSystem';

const AppLoading = () => {
  return (
    <AppView style={styles.container}>
      <ActivityIndicator color={COLORS.secondary} size={'small'} />
    </AppView>
  );
};

export default AppLoading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
