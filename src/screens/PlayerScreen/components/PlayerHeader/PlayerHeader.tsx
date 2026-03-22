import React from 'react';
import { ScreenHeader } from '../../../../components/ScreenHeader/ScreenHeader';
import AppIcon from '../../../../components/UI/AppIcon/AppIcon';
import { ICON_SIZES } from '../../../../designSystem/designSystem';
import { MainNavigationType } from '../../../../navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { LocalizationEnum } from '../../../../locales';

type HymnsPlayerScreenNavigationProp =
  NativeStackNavigationProp<MainNavigationType>;

const PlayerHeader = () => {
  const { t } = useTranslation();
  const { pop } = useNavigation<HymnsPlayerScreenNavigationProp>();

  return (
    <ScreenHeader>
      <ScreenHeader.Title>{t(LocalizationEnum.back)}</ScreenHeader.Title>

      <ScreenHeader.Actions>
        <ScreenHeader.Icon
          icon={
            <AppIcon type="Fontiso" name="arrow-left" size={ICON_SIZES.lg} />
          }
          onPress={() => {
            pop();
          }}
        />
      </ScreenHeader.Actions>
    </ScreenHeader>
  );
};

export default PlayerHeader;
