import React from 'react';
import { Linking, ScrollView } from 'react-native';
import AppView from '../../../../components/UI/AppView/AppView';
import AppText from '../../../../components/UI/AppText/AppText';
import { SettingsStackNavigationType } from '../../../../navigation/SettingsStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import useLangChecker from '../../../../hooks/useLangChecker';
import { useNavigation } from '@react-navigation/native';
import { ScreenHeader } from '../../../../components/ScreenHeader/ScreenHeader';
import AppPressable from '../../../../components/UI/AppPressable/AppPressable';
import { LocalizationEnum } from '../../../../locales';
import AppIcon from '../../../../components/UI/AppIcon/AppIcon';
import { ICON_SIZES } from '../../../../designSystem/designSystem';
import { styles } from './styles';
type PrivacyScreenNavigationProp =
  NativeStackNavigationProp<SettingsStackNavigationType>;
const About = () => {
  const { pop } = useNavigation<PrivacyScreenNavigationProp>();
  const { t, isRTL } = useLangChecker();

  return (
    <AppView style={styles.container}>
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

      <ScrollView contentContainerStyle={styles.content}>
        {/* Card */}
        <AppView style={styles.card}>
          {/* Title */}
          <AppText style={styles.title}>Coptic Taraneem</AppText>

          {/* Main Text */}
          <AppText style={styles.paragraph}>
            نقدم لك ترانيم قبطية - دليلك النهائي للتراث الموسيقي الغني للكنيسة
            القبطية الأرثوذكسية. انغمس في تراتيل ومزامير وألحان عمرها قرون.
            تصفح، وتابع، وزين فهمك لترانيمنا القبطية. استمتع بقوائم تشغيل مخصصة،
            إصدارات صوتية وآلية. حمل الآن للتأمل الروحي والإلهام الموسيقي مع
            تراتيل خالدة من الكنيسة القبطية الأرثوذكسية.
          </AppText>

          {/* Footer */}
          <AppText style={styles.footerText}>
            تم توفير هذا التطبيق من قبل:
          </AppText>

          <AppPressable
            onPress={() => {
              Linking.openURL('https://www.coptic.com');
            }}
          >
            <AppText style={styles.link}>www.coptic.com</AppText>
          </AppPressable>
        </AppView>
      </ScrollView>
    </AppView>
  );
};

export default About;
