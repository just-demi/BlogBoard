import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, View } from 'react-native';


import Homepage from './src/Homepage';
import Avatar from './src/components/Avatar';
import { render } from 'react-dom';
import react from 'react';
import Constants from 'expo-constants';

import AuthorRow from './src/components/AuthorRow';
import Blogs from './src/components/Blogs'

export default class App extends react.Component{
  render(){
  return (
    <View style={styles.container}>
    <Blogs 
      fullname={'First Last'}
      linkText={'Comments'}
      onPressLinkText={()=>{
        console.log('Pressed link!');
      }}
      image={{uri: 'https://unsplash.it/700/700'}}
    />
    </View>
  );
  }

}

/*export default function App(){
  //return <Homepage />;
}*/

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.StatusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
});
