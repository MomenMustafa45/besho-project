import React from 'react';
import AppTextInput from '../../../../components/UI/AppTextInput/AppTextInput';
import { LocalizationEnum } from '../../../../locales';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';
import { ScreenHeader } from '../../../../components/ScreenHeader/ScreenHeader';
import AppIcon from '../../../../components/UI/AppIcon/AppIcon';
import { ICON_SIZES } from '../../../../designSystem/designSystem';

type HymnsHeaderProps = {
  showSearch: boolean;
  onClearPress: () => void;
  onSearchPress: () => void;
  onGridPress: () => void;
  onChangeText?: ((text: string) => void) | undefined;
};

const HymnsHeader = ({
  onClearPress,
  onSearchPress,
  showSearch,
  onGridPress,
  onChangeText,
}: HymnsHeaderProps) => {
  const { t } = useTranslation();

  return (
    <>
      {showSearch ? (
        <AppTextInput
          placeholder={t(LocalizationEnum.search)}
          showClear
          onClearPress={onClearPress}
          containerStyle={styles.searchInput}
          onChangeText={onChangeText}
        />
      ) : (
        <ScreenHeader>
          <ScreenHeader.Title>{t(LocalizationEnum.hymns)}</ScreenHeader.Title>

          <ScreenHeader.Actions>
            <ScreenHeader.Icon
              icon={
                <AppIcon type="Fontiso" name="search" size={ICON_SIZES.xl} />
              }
              onPress={onSearchPress}
            />
            <ScreenHeader.Icon
              icon={<AppIcon type="Entypo" name="grid" size={ICON_SIZES.xl} />}
              onPress={onGridPress}
            />
          </ScreenHeader.Actions>
        </ScreenHeader>
      )}
    </>
  );
};

export default HymnsHeader;
