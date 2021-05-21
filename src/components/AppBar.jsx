import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from "../theme";
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.appBar.backgroundColor,
  },
});

const AppBar = ({ title }) => {
  return (
    <View style={styles.container}>
      {
        <AppBarTab text={title} />
      }
    </View>
  );
};

export default AppBar;