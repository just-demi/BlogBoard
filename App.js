import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Homepage from './src/Homepage';
import Avatar from './src/components/Avatar';
import { render } from 'react-dom';
import react from 'react';
import Constants from 'expo-constants';

export default class App extends react.Component{
  render(){
  return (
    <View style={styles.container}>
    <Avatar initials={'FL'} size={35} backgroundColor={'teal'} />
    </View>
  );
  }
  //return <Homepage />;
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.StatusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
});
