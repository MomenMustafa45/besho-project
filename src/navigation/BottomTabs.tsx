import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable';
import React from 'react';
import Hymns from '../screens/Hymns/Hymns';
import CurrentHymns from '../screens/CurrentHymns/CurrentHymns';
import Favroites from '../screens/Favorites/Favroites';
import { COLORS } from '../designSystem/designSystem';
import { getTabBarIcon } from '../utils/getTabBarIcon';

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
        tabBarActiveTintColor: COLORS.blue,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarLabelVisibilityMode: 'selected',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Hymns"
        component={Hymns}
        options={{
          // @ts-ignore
          tabBarIcon: getTabBarIcon(
            'list.triangle',
            'list.bullet',
            require('../assets/bottomTabIcons/list.png'),
          ),
          tabBarLabel: 'Hymns',
        }}
      />
      <Tab.Screen
        name="CurrentHymns"
        component={CurrentHymns}
        options={{
          // @ts-ignore
          tabBarIcon: getTabBarIcon(
            'play.rectangle.on.rectangle.circle.fill',
            'play.rectangle.on.rectangle.circle',
            require('../assets/bottomTabIcons/current.png'),
          ),
          tabBarLabel: 'Current Hymns',
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favroites}
        options={{
          // @ts-ignore
          tabBarIcon: getTabBarIcon(
            'heart.fill',
            'heart',
            require('../assets/bottomTabIcons/heart.png'),
          ),
          tabBarLabel: 'Favorites',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={CurrentHymns}
        options={{
          // @ts-ignore
          tabBarIcon: getTabBarIcon(
            'ellipsis.circle',
            'ellipsis',
            require('../assets/bottomTabIcons/settings.png'),
          ),
          tabBarLabel: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
