import { View, Text } from 'react-native';
import React from 'react';
import { useHymns } from '../../../../firebase/hooks/useHymns';

const SongsListModal = () => {
  const { data: hymns, isLoading } = useHymns();

  return (
    <View>
      <Text>SongsListModal</Text>
    </View>
  );
};

export default SongsListModal;
