import React from 'react';
import { styles } from './styles';
import AppView from '../../components/UI/AppView/AppView';
import HymnItem from '../../components/HymnItem/HymnItem';
import { Hymn } from '../../firebase/models/hymnModel';
import CurrentHymnsHeader from './components/CurrentHymnsHeader/CurrentHymnsHeader';
import useHymnsListHandlers from '../../hooks/useHymnsListHandlers';
import { useCurrentHymns } from '../../firebase/hooks/useHymns';
import AppLoading from '../../components/UI/AppLoading/AppLoading';
import AppEmptyList from '../../components/UI/AppEmptyList/AppEmptyList';
import { FlatList } from 'react-native';

const CurrentHymns = () => {
  const {
    showSearch,
    onSearchPress,
    onClearPress,
    isRTL,
    onItemPressHandler,
    debouncedQuery,
    onChangeSearchText,
  } = useHymnsListHandlers();

  const { data: currentHymns, isLoading } = useCurrentHymns();

  const query = debouncedQuery.toLowerCase();

  const filteredHymns = !debouncedQuery
    ? currentHymns || []
    : (currentHymns || []).filter(
        hymn =>
          hymn.nameAr?.toLowerCase().includes(query) ||
          hymn.nameEn?.toLowerCase().includes(query),
      );

  const renderItem = ({ item }: { item: Hymn }) => {
    return (
      <HymnItem
        item={item}
        isRTL={isRTL}
        isGrid={true}
        onPress={() => onItemPressHandler(item)}
      />
    );
  };

  return (
    <AppView style={styles.screenParent}>
      <CurrentHymnsHeader
        showSearch={showSearch}
        onSearchPress={onSearchPress}
        onClearPress={onClearPress}
        onChangeText={onChangeSearchText}
      />

      {isLoading ? (
        <AppLoading />
      ) : (
        <FlatList
          contentContainerStyle={styles.listContentContainer}
          data={filteredHymns}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={styles.row}
          ListEmptyComponent={<AppEmptyList />}
        />
      )}
    </AppView>
  );
};

export default CurrentHymns;
