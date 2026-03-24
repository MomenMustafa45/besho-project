import React from 'react';
import AppView from '../../components/UI/AppView/AppView';
import AppText from '../../components/UI/AppText/AppText';
import { styles } from './styles';
import { Image } from 'react-native';
import chrisBg from '../../assets/images/chris-bg.jpeg';

const SplashScreen = () => {
  return (
    <AppView style={styles.screenParent}>
      <Image source={chrisBg} style={styles.bgImgContainer} />
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
