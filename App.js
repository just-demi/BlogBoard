import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, View } from 'react-native';

import { render } from 'react-dom';
import react from 'react';
import Constants from 'expo-constants';

import AuthorRow from './src/components/AuthorRow';
import Blogs from './src/components/Blogs';
import BlogList from './src/components/BlogList';

const items = [
  {id: 600, author: 'Bob Ross'},
  {id:650, author: 'Chuck Norris'},
  {id:700, author: 'Demi Osikoya'},
  {id:800, author: 'Green Peace'}
];

/*const items = [
  {id: 1, author: 'Bob Ross'},
  {id:2, author: 'Chuck Norris'},
];*/


/*export default class App extends react.Component{
  render(){
  return (
    <View style={styles.container}>
    <Blogs 
      fullname={'Demi Osikoya'}
      linkText={'Comments'}
      onPressLinkText={()=>{
        console.log('Pressed link!');
      }}
      image={{uri: 'https://unsplash.it/300/700'}}
    />
    </View>
  );
  }*/
  export default class App extends react.Component{
    render(){
    return (
      <View style={styles.container}>
      <BlogList items={items} />
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
