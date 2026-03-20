import React from 'react';
import { LocalizationEnum } from '../../../../locales';
import AppTextInput from '../../../../components/UI/AppTextInput/AppTextInput';
import { styles } from './styles';
import { ScreenHeader } from '../../../../components/ScreenHeader/ScreenHeader';
import AppIcon from '../../../../components/UI/AppIcon/AppIcon';
import { ICON_SIZES } from '../../../../designSystem/designSystem';
import { useTranslation } from 'react-i18next';

type CurrentHymnsHeaderProps = {
  showSearch: boolean;
  onClearPress: () => void;
  onSearchPress: () => void;
};

const CurrentHymnsHeader = ({
  onClearPress,
  onSearchPress,
  showSearch,
}: CurrentHymnsHeaderProps) => {
  const { t } = useTranslation();

  return (
    <>
      {showSearch ? (
        <AppTextInput
          placeholder={t(LocalizationEnum.search)}
          showClear
          onClearPress={onClearPress}
          containerStyle={styles.searchInput}
        />
      ) : (
        <ScreenHeader>
          <ScreenHeader.Title>{t(LocalizationEnum.current)}</ScreenHeader.Title>

          <ScreenHeader.Actions>
            <ScreenHeader.Icon
              icon={
                <AppIcon type="Fontiso" name="search" size={ICON_SIZES.xl} />
              }
              onPress={onSearchPress}
            />
          </ScreenHeader.Actions>
        </ScreenHeader>
      )}
    </>
  );
};

export default CurrentHymnsHeader;
