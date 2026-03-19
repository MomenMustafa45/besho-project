import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable';
import React from 'react';
import Hymns from '../screens/Hymns/Hymns';
import CurrentHymns from '../screens/CurrentHymns/CurrentHymns';
import Favroites from '../screens/Favorites/Favroites';
import { COLORS } from '../designSystem/designSystem';

type BottomTabsNavigationType = {
  Hymns: undefined;
  CurrentHymns: undefined;
  Favorites: undefined;
  Settings: undefined;
};

const Tab = createNativeBottomTabNavigator<BottomTabsNavigationType>();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.blue,
        tabBarInactiveTintColor: COLORS.gray,
      }}
    >
      <Tab.Screen
        name="Hymns"
        component={Hymns}
        options={{
          tabBarIcon: ({ focused }) => ({
            name: focused ? 'list.triangle' : 'list.bullet',
            type: 'sfSymbol',
          }),
        }}
      />
      <Tab.Screen
        name="CurrentHymns"
        component={CurrentHymns}
        options={{
          tabBarIcon: ({ focused }) => ({
            name: focused
              ? 'play.rectangle.on.rectangle.circle.fill'
              : 'play.rectangle.on.rectangle.circle',
            type: 'sfSymbol',
          }),
          tabBarLabel: 'Current Hymns',
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favroites}
        options={{
          tabBarIcon: ({ focused }) => ({
            name: focused ? 'heart.fill' : 'heart',
            type: 'sfSymbol',
          }),
          tabBarLabel: 'Current Hymns',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={CurrentHymns}
        options={{
          tabBarIcon: ({ focused }) => ({
            name: focused ? 'ellipsis.circle' : 'ellipsis',
            type: 'sfSymbol',
          }),
          tabBarLabel: 'Current Hymns',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
