import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import './i18n';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import RNRestart from 'react-native-restart-newarch';
import { I18nManager } from 'react-native';
import MainNavigation from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  const { i18n } = useTranslation();
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    const isRTL = i18n.language === 'ar';

    if (I18nManager.isRTL !== isRTL) {
      I18nManager.forceRTL(isRTL);
      I18nManager.allowRTL(isRTL);

      RNRestart.Restart();
    }
  }, [i18n.language]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
