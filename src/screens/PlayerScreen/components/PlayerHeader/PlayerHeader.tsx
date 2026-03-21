import React from 'react';
import { ScreenHeader } from '../../../../components/ScreenHeader/ScreenHeader';
import AppIcon from '../../../../components/UI/AppIcon/AppIcon';
import { ICON_SIZES } from '../../../../designSystem/designSystem';
import { MainNavigationType } from '../../../../navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type PlayerHeaderProps = {
  songTitle: string;
};

type HymnsPlayerScreenNavigationProp =
  NativeStackNavigationProp<MainNavigationType>;

const PlayerHeader = ({ songTitle }: PlayerHeaderProps) => {
  const { pop } = useNavigation<HymnsPlayerScreenNavigationProp>();

  return (
    <ScreenHeader>
      <ScreenHeader.Title>{songTitle}</ScreenHeader.Title>

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
