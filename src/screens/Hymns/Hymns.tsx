import React, { useState } from 'react';
import AppView from '../../components/UI/AppView/AppView';
import { styles } from './styles';
import { LegendList, LegendListRenderItemProps } from '@legendapp/list';
import { Hymn } from '../../firebase/models/hymnModel';
import HymnItem from '../../components/HymnItem/HymnItem';
import useHymnsListHandlers from '../../hooks/useHymnsListHandlers';
import HymnsHeader from './components/HymnsHeader/HymnsHeader';
import { useHymns } from '../../firebase/hooks/useHymns';
import AppLoading from '../../components/UI/AppLoading/AppLoading';

const Hymns = () => {
  const [isGrid, setIsGrid] = useState(false);
  const { hymns, loading } = useHymns();

  const { isRTL, onClearPress, onSearchPress, showSearch, onItemPressHandler } =
    useHymnsListHandlers();

  const onGridPress = () => {
    setIsGrid(!isGrid);
  };

  const renderItem = ({ item }: LegendListRenderItemProps<Hymn>) => {
    return (
      <HymnItem
        item={item}
        isRTL={isRTL}
        isGrid={isGrid}
        onPress={() => onItemPressHandler(item)}
      />
    );
  };

  return (
    <AppView style={styles.screenParent}>
      <HymnsHeader
        onClearPress={onClearPress}
        onSearchPress={onSearchPress}
        showSearch={showSearch}
        onGridPress={onGridPress}
      />
      {loading ? (
        <AppLoading />
      ) : (
        <LegendList
          contentContainerStyle={styles.listContentContainer}
          data={hymns}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          numColumns={isGrid ? 2 : 1}
          columnWrapperStyle={styles.row}
          key={`${isGrid}`}
        />
      )}
    </AppView>
  );
};

export default Hymns;
