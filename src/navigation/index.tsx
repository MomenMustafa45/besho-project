import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BottomTabs from './BottomTabs';
import PlayerStack from './PlayerStack';
import { Hymn } from '../firebase/models/hymnModel';

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
