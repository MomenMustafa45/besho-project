import React, { useEffect } from 'react';
import AppView from '../../components/UI/AppView/AppView';
import AppText from '../../components/UI/AppText/AppText';
import { styles } from './styles';
import chrisBg from '../../assets/images/chris-bg.jpeg';
import FastImage from '@d11/react-native-fast-image';
import { MainNavigationType } from '../../navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type SplashNavigationProp = NativeStackNavigationProp<MainNavigationType>;
const SplashScreen = () => {
  const navigation = useNavigation<SplashNavigationProp>();

  useEffect(() => {
    setTimeout(() => {
      navigation.popTo('BottomTabs');
    }, 3000);
  }, [navigation]);

  return (
    <AppView style={styles.screenParent}>
      <FastImage source={chrisBg} style={styles.bgImgContainer} />
      <AppView style={styles.contentContainer}>
        <AppText style={styles.appName}>Coptic Taraneem</AppText>
        <AppText style={styles.appDesc}>
          Introducing Coptic Taraneem Companion — your ultimate guide to the
          rich musical heritage of the Coptic Orthodox Church. Immerse yourself
          in centuries-old hymns, psalms, and melodies. Browse, follow along,
          and enhance your understanding of our Coptic hymns. Enjoy customized
          playlists, vocal and instrumental versions. Download now for spiritual
          reflection and musical inspiration with timeless hymns of the Coptic
          Orthodox Church
        </AppText>
        <AppText style={styles.appProvider}>
          This app is provided to you by
        </AppText>
        <AppText style={styles.appProviderName}>www.coptic.com</AppText>
      </AppView>
    </AppView>
  );
};

export default SplashScreen;
