/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  Text,
  View,
  StyleSheet
} from 'react-native';


const App = () => {
  const nombre = "yamil"
  return (
    <SafeAreaView style={styles.view}>
      <Text style={styles.text}>hola mundo {''}
      <Text>{nombre}</Text>
      </Text>
    </SafeAreaView>
  );
};

export default App;
 
const styles = StyleSheet.create({
  view:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    
  },
  text:{
    fontSize:30,
    textTransform:'uppercase'
  }
})