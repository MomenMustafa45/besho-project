import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mp3PlayerScreen from '../screens/PlayerScreen/PlayerScreen';
import SongsListModal from '../screens/PlayerScreen/screens/SongsListModal';

export type PlayerStackNavigationType = {
  Player: undefined;
  SongsList: undefined;
};

const Stack = createNativeStackNavigator<PlayerStackNavigationType>();

const PlayerStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Player" component={Mp3PlayerScreen} />

      <Stack.Screen
        name="SongsList"
        component={SongsListModal}
        options={{
          presentation: 'modal',
          animation: 'slide_from_bottom',
        }}
      />
    </Stack.Navigator>
  );
};

export default PlayerStack;
