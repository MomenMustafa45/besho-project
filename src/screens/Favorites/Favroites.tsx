import React from 'react';
import AppView from '../../components/UI/AppView/AppView';
import HymnMiniItem from '../../components/HymnMiniItem/HymnMiniItem';
import useLangChecker from '../../hooks/useLangChecker';
import { useHymns } from '../../firebase/hooks/useHymns';
import AppLoading from '../../components/UI/AppLoading/AppLoading';
import { Hymn } from '../../firebase/models/hymnModel';
import { LegendList, LegendListRenderItemProps } from '@legendapp/list';
import { useAppSelector } from '../../hooks/useStoreHooks';
import { useNavigation } from '@react-navigation/native';
import { MainNavigationType } from '../../navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from './styles';
import { ScreenHeader } from '../../components/ScreenHeader/ScreenHeader';
import { LocalizationEnum } from '../../locales';
import AppEmptyList from '../../components/UI/AppEmptyList/AppEmptyList';

type HymnsPlayerScreenNavigationProp =
  NativeStackNavigationProp<MainNavigationType>;

const Favroites = () => {
  const { navigate } = useNavigation<HymnsPlayerScreenNavigationProp>();
  const favorites = useAppSelector(state => state.favorites.favorites);
  const { data: hymns, isLoading } = useHymns();
  const { isRTL, t } = useLangChecker();

  const hymnsWithFavs = hymns
    ?.map(hymn => ({
      ...hymn,
      isFavorite: favorites.includes(hymn.id),
    }))
    .filter(hymn => hymn.isFavorite);

  const onItemPressHandler = (item: Hymn) => {
    navigate('HymnPlayer', {
      screen: 'Player',
      params: { hymn: item },
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
    <AppView style={styles.favScreenParent}>
      <ScreenHeader>
        <ScreenHeader.Title>{t(LocalizationEnum.favorite)}</ScreenHeader.Title>
      </ScreenHeader>
      <LegendList
        keyExtractor={item => item.id}
        data={hymnsWithFavs || []}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContentContainer}
        ListEmptyComponent={AppEmptyList}
      />
    </AppView>
  );
};

export default Favroites;
