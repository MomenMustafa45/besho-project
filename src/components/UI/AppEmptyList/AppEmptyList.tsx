import { StyleSheet } from 'react-native';
import React from 'react';
import AppView from '../AppView/AppView';
import AppText from '../AppText/AppText';
import { useTranslation } from 'react-i18next';
import { LocalizationEnum } from '../../../locales';

const AppEmptyList = () => {
  const { t } = useTranslation();
  return (
    <AppView style={styles.container}>
      <AppText>{t(LocalizationEnum.listEmpty)}</AppText>
    </AppView>
  );
};

export default AppEmptyList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
