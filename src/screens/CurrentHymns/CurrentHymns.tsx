import React from 'react';
import { styles } from './styles';
import AppView from '../../components/UI/AppView/AppView';
import { LegendList, LegendListRenderItemProps } from '@legendapp/list';
import { dummyHymns } from '../../utils/dummyData';
import HymnItem from '../../components/HymnItem/HymnItem';
import { Hymn } from '../../firebase/models/hymnModel';
import CurrentHymnsHeader from './components/CurrentHymnsHeader/CurrentHymnsHeader';
import useHymnsListHandlers from '../../hooks/useHymnsListHandlers';

const CurrentHymns = () => {
  const { showSearch, onSearchPress, onClearPress, isRTL } =
    useHymnsListHandlers();
  const renderItem = ({ item }: LegendListRenderItemProps<Hymn>) => {
    return <HymnItem item={item} isRTL={isRTL} isGrid={true} />;
  };

  return (
    <AppView style={styles.screenParent}>
      <CurrentHymnsHeader
        showSearch={showSearch}
        onSearchPress={onSearchPress}
        onClearPress={onClearPress}
      />

      <LegendList
        contentContainerStyle={styles.listContentContainer}
        data={dummyHymns}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </AppView>
  );
};

export default CurrentHymns;
