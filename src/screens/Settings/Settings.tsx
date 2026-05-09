import React from 'react';
import AppView from '../../components/UI/AppView/AppView';
import MenuItem from './components/MenuItem/MenuItem';
import { useTranslation } from 'react-i18next';
import { LocalizationEnum } from '../../locales';
import englandFlag from '../../assets/images/united-kingdom.png';
import arabicFlag from '../../assets/images/egypt.png';
import { changeLanguage } from '../../utils/changeLanguage';
import { Share } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SettingsStackNavigationType } from '../../navigation/SettingsStack';
import { styles } from './styles';
import logo from '../../../logo.png';
import RNRestart from 'react-native-restart-newarch';
import FastImage from '@d11/react-native-fast-image';
type SettingsNavigationType =
  NativeStackNavigationProp<SettingsStackNavigationType>;

const Settings = () => {
  const { navigate } = useNavigation<SettingsNavigationType>();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const changeLanguageHandler = () => {
    changeLanguage(isRTL ? 'en' : 'ar');
    RNRestart.Restart();
  };

  const onShareApp = async () => {
    try {
      await Share.share({
        message: `Check out this app:
iOS (App Store):
https://apps.apple.com/us/app/coptic-taranem/id6762490867

Android (Google Play):
https://play.google.com/store/apps/details?id=com.smartlytechs.coptic_taraneem_new`,
        title: 'Share App',
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  return (
    <AppView style={styles.settingsParent}>
      <AppView style={styles.headerContainer}>
        <FastImage source={logo} style={styles.logo} />
      </AppView>

      <AppView style={styles.menuContainer}>
        <MenuItem
          title={t(LocalizationEnum.privacyPolicy)}
          iconName="text-document"
          iconType="Entypo"
          onPress={() => {
            navigate('Privacy');
          }}
        />
        <MenuItem
          title={t(LocalizationEnum.aboutApplication)}
          iconName={'bell'}
          iconType="FontAwesome5"
          onPress={() => {
            navigate('About');
          }}
        />
        <MenuItem
          title={t(LocalizationEnum.shareApplication)}
          iconName={'info-with-circle'}
          iconType="Entypo"
          onPress={onShareApp}
        />
        <MenuItem
          title={t(LocalizationEnum.changeLanguageToArabic)}
          imageSource={isRTL ? arabicFlag : englandFlag}
          onPress={changeLanguageHandler}
        />
      </AppView>
    </AppView>
  );
};

export default Settings;
