import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import './i18n';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import RNRestart from 'react-native-restart-newarch';
import { I18nManager } from 'react-native';
import MainNavigation from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

const queryClient = new QueryClient();

function App() {
  const { i18n } = useTranslation();
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    const isRTL = i18n.language.startsWith('ar');

    if (I18nManager.isRTL !== isRTL) {
      I18nManager.allowRTL(isRTL);
      I18nManager.forceRTL(isRTL);

      RNRestart.Restart();
      return;
    }

    BootSplash.hide({ fade: true });
  }, [i18n.language]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <NavigationContainer>
          <QueryClientProvider client={queryClient}>
            <Provider store={store}>
              <MainNavigation />
            </Provider>
          </QueryClientProvider>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
