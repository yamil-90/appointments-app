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
  FlatList,
  Alert
} from 'react-native';

import NewAppointmentForm from './src/components/NewAppointmentForm';
import Patient from './src/components/Patient';
import PatientDetail from './src/components/PatientDetail/PatientDetail';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [patientDetailVisible, setPatientDetailVisible] = useState(false)
  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})
  // console.log('los pacientes son', patients)
  const nameOfBusiness = "Veterinary";
  const newAppointmentHandler = () => {
    console.log('new Appointment')
    setIsVisible(true);
  }

  const editPatient = (id) => {
    const patientEdit = patients.filter(patient => patient.id === id)
    setPatient(patientEdit[0])
  }
  const deletePatient = (id) => {
    Alert.alert(
      'Are you sure?',
      'deletion is permanent',

      [
        { text: 'cancel' },
        {
          text: 'Delete', onPress: () => {

            const deletedArray = patients.filter(patientState => {
              return patientState.id !== id
            })
            setPatients(deletedArray)
          }
        }
      ]
    )

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
      {isVisible&&(
        <NewAppointmentForm
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        setPatients={setPatients}
        patients={patients}
        patient={patient}
        setPatient={setPatient}
      />
      )}
      {patientDetailVisible && 
      <PatientDetail
        patientDetailVisible={patientDetailVisible}
        setPatientDetailVisible={setPatientDetailVisible}
        patient={patient}
        setPatient={setPatient}
      />}
      {patients.length === 0 ?
        <Text style={styles.noPatients}>no patients</Text> :
        <View>
          <FlatList
            style={styles.list}
            data={patients}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <Patient
                  item={item}
                  setIsVisible={setIsVisible}
                  editPatient={editPatient}
                  deletePatient={deletePatient}
                  setPatientDetailVisible={setPatientDetailVisible}
                  setPatient={setPatient}
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
    fontWeight: '700',
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
  list: {
    marginTop: 40,
    marginHorizontal: 30
  }
})