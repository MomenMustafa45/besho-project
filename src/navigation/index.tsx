import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import BottomTabs from './BottomTabs';
import PlayerStack from './PlayerStack';
import { Hymn } from '../firebase/models/hymnModel';
import { useAppDispatch } from '../hooks/useStoreHooks';
import { initFavorites } from '../store/slices/favoritesSlice';
import SplashScreen from '../screens/SplashScreen/SplashScreen';

export type MainNavigationType = {
  BottomTabs: undefined;
  HymnPlayer: {
    params: {
      hymn: Hymn;
    };
    screen: string;
  };
};

const Stack = createNativeStackNavigator<MainNavigationType>();

const MainNavigation = () => {
  const dispatch = useAppDispatch();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    dispatch(initFavorites());
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, []);

  if (showSplash) return <SplashScreen />;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="HymnPlayer" component={PlayerStack} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
