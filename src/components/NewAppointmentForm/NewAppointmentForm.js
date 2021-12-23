import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Modal, Pressable, SafeAreaView, TextInput, ScrollView, Alert } from 'react-native'
import DatePicker from 'react-native-date-picker';

const NewAppointmentForm = (props) => {
  const { isVisible, setIsVisible, patients, setPatients } = props;
  const [patient, setPatient] = useState('');
  const [doctor, setDoctor] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [date, setDate] = useState(new Date())


  const handleSubmit = () => {
    console.log('agregar paciente');
    if ([patient, doctor, email, symptoms, date].includes('')) {
      Alert.alert(
        'Error',
        'Todos los campos son obligatorios',

      )
      return
    }
    const newPatient = {
      id: Date.now(),
      patient,
      doctor,
      email,
      phone,
      symptoms,
      date
    }
    setPatients([...patients, newPatient])
    setPatient('');
    setPhone('');
    setSymptoms('');
    setDate(new Date());
    setDoctor('');
    setEmail('')
    setIsVisible(!isVisible)
  }


  return (
    <Modal
      animationType='slide'
      visible={isVisible}
    >
      <SafeAreaView
        style={styles.content}
      >
        <ScrollView
          keyboardShouldPersistTaps='always'>
          <Text style={styles.title}>New {''}
            <Text style={styles.boldTitle}>Appointment</Text>
          </Text>
          <Pressable
            style={styles.btnCancel}
            onPress={() => setIsVisible(false)}
          >
            <Text style={styles.btnCancelText}>X Cancel</Text>
          </Pressable>
          <View style={styles.formField}>
            <Text style={styles.label}>Patient's name</Text>
            <TextInput
              style={styles.input}
              placeholder="Patient's name"
              placeholderTextColor={'#666'}
              value={patient}
              onChangeText={setPatient}

            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.label}>Doctor's name</Text>
            <TextInput
              style={styles.input}
              placeholder="Doctor's name"
              placeholderTextColor={'#666'}
              value={doctor}
              onChangeText={setDoctor}

            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.label}>Doctor's Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={'#666'}
              keyboardType='email-address'
              value={email}
              onChangeText={setEmail}

            /></View>
          <View style={styles.formField}>
            <Text style={styles.label}>Doctor's Phone number</Text>
            <TextInput
              style={styles.input}
              placeholder="Phone number"
              placeholderTextColor={'#666'}
              keyboardType='number-pad'
              value={phone}
              onChangeText={setPhone}
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.label}>Symptoms</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Symptoms"
              placeholderTextColor={'#666'}
              value={symptoms}
              onChangeText={setSymptoms}
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.label}>Date</Text>

            <View style={styles.dateContainer}>
              <DatePicker
                style={date}
                mode='date'
                date={date}
                onDateChenge={setDate}
              />
            </View>
          </View>
          <Pressable
            style={styles.btnAdd}
            onPress={() => handleSubmit()}
          >
            <Text style={styles.btnAddText}>Add Patient</Text>
          </Pressable>

        </ScrollView>
      </SafeAreaView>

    </Modal>
  )
}

export default NewAppointmentForm;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#00a680'
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: '#fff'
  },
  boldTitle: {
    fontWeight: '900'
  },
  formField: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  label: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 15
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,

  },
  textArea: {
    height: 100,
    textAlignVertical: 'top'
  },
  dateContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10

  },
  btnCancel: {
    backgroundColor: 'darkgreen',
    marginHorizontal: 40,
    marginTop: 20,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center'
  },
  btnCancelText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
    textTransform: 'uppercase'
  },
  btnAdd: {
    backgroundColor: '#6a0dad',
    marginHorizontal: 40,
    marginVertical: 25,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center'
  },
  btnAddText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
    textTransform: 'uppercase'
  }
})
