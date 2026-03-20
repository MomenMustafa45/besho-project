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

const Hymns = () => {
  const [isGrid, setIsGrid] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { i18n, t } = useTranslation();
  const isRTL = useMemo(() => i18n.language === 'ar', [i18n]);

  const renderItem = ({ item }: LegendListRenderItemProps<Hymn>) => {
    return <HymnItem item={item} isRTL={isRTL} isGrid={isGrid} />;
  };

  return (
    <AppView style={styles.screenParent}>
      {showSearch ? (
        <AppTextInput
          placeholder={t(LocalizationEnum.search)}
          showClear
          onClearPress={() => {
            setShowSearch(false);
          }}
          containerStyle={styles.searchInput}
        />
      ) : (
        <ScreenHeader>
          <ScreenHeader.Title>{t(LocalizationEnum.hymns)}</ScreenHeader.Title>

          <ScreenHeader.Actions>
            <ScreenHeader.Icon
              icon={
                <AppIcon type="Fontiso" name="search" size={ICON_SIZES.xl} />
              }
              onPress={() => setShowSearch(true)}
            />
            <ScreenHeader.Icon
              icon={<AppIcon type="Entypo" name="grid" size={ICON_SIZES.xl} />}
              onPress={() => {
                setIsGrid(!isGrid);
              }}
            />
          </ScreenHeader.Actions>
        </ScreenHeader>
      )}
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
