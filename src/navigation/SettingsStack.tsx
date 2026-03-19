import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from '../screens/Settings/Settings';
import Privacy from '../screens/Settings/screens/Privacy/Privacy';
import About from '../screens/Settings/screens/About/About';

export type SettingsStackNavigationType = {
  Settings: undefined;
  Privacy: undefined;
  About: undefined;
};

const Stack = createNativeStackNavigator<SettingsStackNavigationType>();

const SettingsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Privacy" component={Privacy} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export default SettingsStack;
