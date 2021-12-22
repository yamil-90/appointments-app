/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  Pressable,
  Modal
} from 'react-native';
import NewAppointmentForm from './src/components/NewAppointmentForm';



const App = () => {
  const [isVisible, setIsVisible] = useState(false)
  const nameOfBusiness = "yamil";
  const newAppointmentHandler=()=>{
    setIsVisible(true);
  }



  return (
    <SafeAreaView style={styles.view}>
      <Text style={styles.title}>Appointment Manager {'\n'}
      <Text style={styles.titleBold}>{nameOfBusiness}</Text>
      </Text>

      <Pressable 
      onLongPress={()=>console.log('long press')} 
      onPress={newAppointmentHandler}
      style={styles.btnNewAppointment}
      >
        <Text style={styles.newAppointmentText}>New Appointment</Text>
      </Pressable>
      <NewAppointmentForm
      isVisible={isVisible}
      setIsVisible={setIsVisible} 
      />
    </SafeAreaView>
  );
};

export default App;
 
const styles = StyleSheet.create({
  view:{
    flex:1,
  backgroundColor:'#f3f4f6',
  
    
  },
  text:{

    textAlign:'center',
    fontSize:30,
    textTransform:'uppercase'
  },
  title:{
marginTop:5,
    textAlign:'center',
    fontSize:30,
    fontWeight:'600'

  },
  titleBold:{
    textTransform:'uppercase',
    fontSize:30,
    fontWeight:'900',
    color: '#00a680'
  },
  btnNewAppointment:{
    backgroundColor:'#00a680',
    padding:15,
    marginTop:20, 
    borderRadius:10,
    margin:10
  },
  newAppointmentText:{
    textAlign:'center',
    color:'#fff',
    fontSize:20,
    fontWeight:'900',
    textTransform:'uppercase'
  }
})