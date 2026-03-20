import React, { useMemo, useState } from 'react';
import AppView from '../../components/UI/AppView/AppView';
import { styles } from './styles';
import { LegendList, LegendListRenderItemProps } from '@legendapp/list';
import { dummyHymns } from '../../utils/dummyData';
import { useTranslation } from 'react-i18next';
import { Hymn } from '../../firebase/models/hymnModel';
import HymnItem from '../../components/HymnItem/HymnItem';
import { ScreenHeader } from '../../components/ScreenHeader/ScreenHeader';
import AppIcon from '../../components/UI/AppIcon/AppIcon';
import { ICON_SIZES } from '../../designSystem/designSystem';
import { LocalizationEnum } from '../../locales';
import AppTextInput from '../../components/UI/AppTextInput/AppTextInput';
import useHymnsListHandlers from '../../hooks/useHymnsListHandlers';
import HymnsHeader from './components/HymnsHeader/HymnsHeader';

const Hymns = () => {
  const [isGrid, setIsGrid] = useState(false);
  const { t } = useTranslation();

  const { isRTL, onClearPress, onSearchPress, showSearch } =
    useHymnsListHandlers();

  const onGridPress = () => {
    setIsGrid(!isGrid);
  };

  const renderItem = ({ item }: LegendListRenderItemProps<Hymn>) => {
    return <HymnItem item={item} isRTL={isRTL} isGrid={isGrid} />;
  };

  return (
    <AppView style={styles.screenParent}>
      <HymnsHeader
        onClearPress={onClearPress}
        onSearchPress={onSearchPress}
        showSearch={showSearch}
        onGridPress={onGridPress}
      />

      <LegendList
        contentContainerStyle={styles.listContentContainer}
        data={dummyHymns}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        numColumns={isGrid ? 2 : 1}
        columnWrapperStyle={styles.row}
        key={`${isGrid}`}
      />
    </AppView>
  );
};

export default Hymns;
