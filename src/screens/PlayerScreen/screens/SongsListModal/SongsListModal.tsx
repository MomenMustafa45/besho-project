import React from 'react';
import { useHymns } from '../../../../firebase/hooks/useHymns';
import { useAppSelector } from '../../../../hooks/useStoreHooks';
import AppLoading from '../../../../components/UI/AppLoading/AppLoading';
import AppView from '../../../../components/UI/AppView/AppView';
import { LegendList, LegendListRenderItemProps } from '@legendapp/list';
import { Hymn } from '../../../../firebase/models/hymnModel';
import { styles } from './styles';
import HymnMiniItem from '../../../../components/HymnMiniItem/HymnMiniItem';
import useLangChecker from '../../../../hooks/useLangChecker';
import { Pressable } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { PlayerStackNavigationType } from '../../../../navigation/PlayerStack';

type HymnsPlayerScreenNavigationProp =
  NativeStackNavigationProp<PlayerStackNavigationType>;
const SongsListModal = () => {
  const { pop, popTo } = useNavigation<HymnsPlayerScreenNavigationProp>();
  const favorites = useAppSelector(state => state.favorites.favorites);
  const { data: hymns, isLoading } = useHymns();
  const { isRTL } = useLangChecker();

  const hymnsWithFavs = hymns?.map(hymn => ({
    ...hymn,
    isFavorite: favorites.includes(hymn.id),
  }));

  const onItemPressHandler = (hymn: Hymn) => {
    popTo('Player', {
      hymn,
    });
  };

  const renderItem = ({ item, index }: LegendListRenderItemProps<Hymn>) => {
    return (
      <HymnMiniItem
        isRTL={isRTL}
        hymn={item}
        index={index + 1}
        onPress={() => onItemPressHandler(item)}
      />
    );
  };

  if (isLoading) {
    return <AppLoading />;
  }

  return (
    <Pressable
      onPress={() => {
        pop();
      }}
      style={styles.modalParent}
    >
      <AppView style={styles.listContainer}>
        <LegendList
          keyExtractor={item => item.id}
          data={hymnsWithFavs || []}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContentContainer}
        />
      </AppView>
    </Pressable>
  );
};

export default SongsListModal;
