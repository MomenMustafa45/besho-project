import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable';
import React from 'react';
import Hymns from '../screens/Hymns/Hymns';
import CurrentHymns from '../screens/CurrentHymns/CurrentHymns';
import Favroites from '../screens/Favorites/Favroites';
import { COLORS } from '../designSystem/designSystem';
import { getTabBarIcon } from '../utils/getTabBarIcon';
import SettingsStack from './SettingsStack';
import { useTranslation } from 'react-i18next';
import { LocalizationEnum } from '../locales';

type BottomTabsNavigationType = {
  Hymns: undefined;
  CurrentHymns: undefined;
  Favorites: undefined;
  Settings: undefined;
};

const Tab = createNativeBottomTabNavigator<BottomTabsNavigationType>();

const BottomTabs = () => {
  const { t } = useTranslation();

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
          tabBarLabel: t(LocalizationEnum.hymns),
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
          tabBarLabel: t(LocalizationEnum.current),
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
          tabBarLabel: t(LocalizationEnum.favorite),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          // @ts-ignore
          tabBarIcon: getTabBarIcon(
            'ellipsis.circle',
            'ellipsis',
            require('../assets/bottomTabIcons/settings.png'),
          ),
          tabBarLabel: t(LocalizationEnum.more),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
