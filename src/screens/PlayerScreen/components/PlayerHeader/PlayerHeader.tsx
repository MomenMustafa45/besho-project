import React from 'react';
import { ScreenHeader } from '../../../../components/ScreenHeader/ScreenHeader';
import AppIcon from '../../../../components/UI/AppIcon/AppIcon';
import { ICON_SIZES } from '../../../../designSystem/designSystem';
import { MainNavigationType } from '../../../../navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { LocalizationEnum } from '../../../../locales';
import AppPressable from '../../../../components/UI/AppPressable/AppPressable';
import { styles } from './styles';
import useLangChecker from '../../../../hooks/useLangChecker';

type HymnsPlayerScreenNavigationProp =
  NativeStackNavigationProp<MainNavigationType>;

const PlayerHeader = () => {
  const { isRTL, t } = useLangChecker();
  const { pop } = useNavigation<HymnsPlayerScreenNavigationProp>();

  return (
    <ScreenHeader>
      <ScreenHeader.Title>{''}</ScreenHeader.Title>
      <ScreenHeader.Actions>
        <AppPressable
          onPress={() => {
            pop();
          }}
          style={styles.backButton}
        >
          <ScreenHeader.Title>{t(LocalizationEnum.back)}</ScreenHeader.Title>
          <AppIcon
            type="Fontiso"
            name={isRTL ? 'arrow-left' : 'arrow-right'}
            size={ICON_SIZES.lg}
          />
        </AppPressable>
      </ScreenHeader.Actions>
    </ScreenHeader>
  );
};

export default PlayerHeader;
