import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

function onPress(){
  console.log("pressed again");
}

export default class Homepage extends React.Component{
  state={
    email:"",
    password:""
  }
  render(){
  return (
    <View style={styles.container} >
    <Text style={styles.logo}>BlogBoard</Text>
    <View style={styles.inputview} >
    <TextInput
      style={styles.inputText}
      placeholder="Email"
      placeholderTextColor="#003f5c"
      onChangeText={text => this.setState({email:text})}/>
    </View>
    <View style={styles.inputview}>
    <TextInput
      secureTextEntry
      style={styles.inputText}
      placeholder="Password"
      placeholderTextColor="#003f5c"
      onChangeText={text => this.setState({password:text})}/>
    </View>
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.loginText}>Login</Text>
    </TouchableOpacity>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    color:"#fb5b5a",
    marginBottom:40
  },
  inputview:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  loginText:{
    color:"white"
  },
  appButtonContainer:{
    elevation:8,
    backgroundColor:"#009688",
    borderRadius:10,
    paddingVertical:10,
    paddingHorizontal: 35
  }
});
