/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';

import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  Pressable,
  Modal,
  ScrollView,
  TextInput,
  FlatList
} from 'react-native';

import NewAppointmentForm from './src/components/NewAppointmentForm';
import Patient from './src/components/Patient';


const App = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})

  const nameOfBusiness = "yamil";
  const newAppointmentHandler = () => {
    console.log('new Appointment')
    setIsVisible(true);
  }

  const editPatient = (id) =>{
    const patientEdit =patients.filter(patient=> patient.id===id)
  setPatient(patientEdit[0])
  }

  return (
    <SafeAreaView style={styles.view}>
      <Text style={styles.title}>Appointment Manager {'\n'}
        <Text style={styles.titleBold}>{nameOfBusiness}</Text>
      </Text>

      <Pressable
        onPressIn={newAppointmentHandler}
        style={styles.btnNewAppointment}
      >
        <Text style={styles.newAppointmentText}>New Appointment</Text>
      </Pressable>
      <NewAppointmentForm
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        setPatients={setPatients}
        patients={patients}
      />
      {patients.length === 0 ?
        <Text style={styles.noPatients}>no patients</Text> :
        <View>
          <FlatList
          style={styles.list}
            data={patients}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              return (
              <Patient 
              item={item} 
              setIsVisible={setIsVisible} 
              editPatient={editPatient}
              />
              )
            }}
          />
        </View>
      }
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#f3f4f6',


  },
  text: {

    textAlign: 'center',
    fontSize: 30,
    textTransform: 'uppercase'
  },
  title: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600'

  },
  titleBold: {
    textTransform: 'uppercase',
    fontSize: 30,
    fontWeight: '900',
    color: '#00a680'
  },
  btnNewAppointment: {
    backgroundColor: '#00a680',
    padding: 15,
    marginTop: 20,
    borderRadius: 10,
    margin: 10
  },
  newAppointmentText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  noPatients: {
    fontWeight: '900',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20
  },
  list:{
    marginTop:40,
    marginHorizontal:30
  }
})