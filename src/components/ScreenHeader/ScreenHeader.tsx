import React from 'react';
import AppView from '../UI/AppView/AppView';
import { styles } from './styles';
import AppText from '../UI/AppText/AppText';
import AppPressable from '../UI/AppPressable/AppPressable';

type ScreenHeaderProps = {
  children: React.ReactNode;
};

export const ScreenHeader = ({ children }: ScreenHeaderProps) => {
  return <AppView style={styles.container}>{children}</AppView>;
};

type TitleProps = {
  children: React.ReactNode;
};

// Title
ScreenHeader.Title = ({ children }: TitleProps) => {
  return <AppText style={styles.title}>{children}</AppText>;
};

type ActionsProps = {
  children: React.ReactNode;
};

// Right side container
ScreenHeader.Actions = ({ children }: ActionsProps) => {
  return <AppView style={styles.actions}>{children}</AppView>;
};

type IconProps = {
  icon: React.ReactNode;
  onPress?: () => void;
};

// Icon (generic)
ScreenHeader.Icon = ({ icon, onPress }: IconProps) => {
  return (
    <AppPressable onPress={onPress} style={styles.icon}>
      {icon}
    </AppPressable>
  );
};
