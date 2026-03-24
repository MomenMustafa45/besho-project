import React from 'react';
import { ScrollView } from 'react-native';
import AppView from '../../../../components/UI/AppView/AppView';
import AppText from '../../../../components/UI/AppText/AppText';
import { ScreenHeader } from '../../../../components/ScreenHeader/ScreenHeader';
import AppPressable from '../../../../components/UI/AppPressable/AppPressable';
import { ICON_SIZES } from '../../../../designSystem/designSystem';
import AppIcon from '../../../../components/UI/AppIcon/AppIcon';
import { LocalizationEnum } from '../../../../locales';
import useLangChecker from '../../../../hooks/useLangChecker';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SettingsStackNavigationType } from '../../../../navigation/SettingsStack';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

type PrivacyScreenNavigationProp =
  NativeStackNavigationProp<SettingsStackNavigationType>;
const Privacy = () => {
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

      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Title */}
        <AppText style={styles.title}>Privacy Policy</AppText>

        {/* Intro */}
        <AppText style={styles.paragraph}>
          شكراً لك على استخدام تطبيق ترانيم قبطية. يُعد ترانيم قبطية تطبيقاً
          محمولاً مخصصاً لتقديم مجموعة من الترانيم والأناشيد الروحية المسيحية
          القبطية. تهدف سياسة الخصوصية هذه إلى مساعدتك في فهم كيفية جمعنا
          واستخدامنا وحماية معلوماتك الشخصية عند استخدامك لتطبيقنا المحمول
          والخدمات ذات الصلة ("الخدمات"). باستخدامك لتطبيق ترانيم قبطية، فإنك
          توافق على الممارسات الموضحة في هذه سياسة الخصوصية.
        </AppText>

        {/* Section */}
        <AppText style={styles.heading}>المعلومات التي نجمعها</AppText>
        <AppText style={styles.paragraph}>
          نحن لا نجمع أي معلومات شخصية تستطيع تحديد هويتك مباشرة، مثل اسمك، أو
          عنوانك، أو تفاصيل الاتصال.
        </AppText>

        <AppText style={styles.heading}>كيفية استخدام معلوماتك</AppText>
        <AppText style={styles.paragraph}>
          نحن لا نجمع أو نستخدم أي معلومات شخصية أو معلومات استخدام لأي غرض.
        </AppText>

        <AppText style={styles.heading}>مشاركة المعلومات</AppText>
        <AppText style={styles.paragraph}>
          نحن لا نشارك ولا نبيع ولا نؤجر أي معلومات شخصية أو معلومات استخدام
          لأطراف ثالثة. تكون خصوصيتك مهمة بالنسبة لنا، ونسعى لضمان بقاء معلوماتك
          آمنة.
        </AppText>

        <AppText style={styles.heading}>أمان البيانات</AppText>
        <AppText style={styles.paragraph}>
          نحن نتخذ احتياطات معقولة لحماية معلوماتك من الوصول غير المصرح به، أو
          الفقدان، أو الاستغلال، أو التغيير. ومع ذلك، لا يمكن ضمان أمان نقل
          البيانات عبر الإنترنت أو الشبكات المحمولة بشكل كامل. نحن غير قادرين
          على ضمان أمان معلوماتك التي تُرسل عبر تطبيقنا أو من خلاله.
        </AppText>

        <AppText style={styles.heading}>تغييرات على سياسة الخصوصية</AppText>
        <AppText style={styles.paragraph}>
          قد نقوم بتحديث سياسة الخصوصية من وقت لآخر لتعكس التغييرات في ممارساتنا
          وخدماتنا. سيتم نشر أي تغييرات داخل التطبيق، ومتابعتك لاستخدام تطبيق
          ترانيم قبطية بعد أي تغيير يعد قبولاً منك لتلك التغييرات.
        </AppText>

        <AppText style={styles.heading}>تواصل معنا</AppText>
        <AppText style={styles.paragraph}>
          إذا كانت لديك أي استفسارات حول سياسة الخصوصية لدينا، يرجى التواصل معنا
          على البريد الإلكتروني:
          {'\n'}Copticmusica@gmail.com
        </AppText>

        <AppText style={styles.paragraph}>
          من خلال استخدامك لتطبيق ترانيم قبطية، فإنك تعترف بأنك قد قرأت وفهمت
          هذه السياسة وتوافق على الممارسات الموضحة فيها.
        </AppText>
      </ScrollView>
    </AppView>
  );
};

export default Privacy;
