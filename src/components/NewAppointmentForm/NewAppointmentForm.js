import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Modal, Pressable, SafeAreaView, TextInput, ScrollView } from 'react-native'

const NewAppointmentForm = (props) => {
  const { isVisible } = props;
  const [patient, setPatient] = useState('');
  const [Doctor, setDoctor] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [symptoms, setSymptoms] = useState('');

  useEffect(() => {
    console.log(patient)
  }, [patient])
  return (
    <Modal
      animationType='slide'
      visible={isVisible}
    >
      <SafeAreaView
        style={styles.content}
      >
        <ScrollView>
          <Text style={styles.title}>New {''}
            <Text style={styles.boldTitle}>Appointment</Text>
          </Text>
          <View style={styles.formField}>
            <Text style={styles.label}>Patient's name</Text>
            <TextInput
              style={styles.input}
              placeholder="Patient's name"
              placeholderTextColor={'#666'}
              value={patient}
              onChangeText={setPatient}

            />
            <Text style={styles.label}>Doctor's name</Text>
            <TextInput
              style={styles.input}
              placeholder="Doctor's name"
              placeholderTextColor={'#666'}
              value={Doctor}
              onChangeText={setDoctor}

            />
            <Text style={styles.label}>Doctor's Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={'#666'}
              keyboardType='email-address'
              value={email}
              onChangeText={setEmail}

            />
            <Text style={styles.label}>Doctor's Phone number</Text>
            <TextInput
              style={styles.input}
              placeholder="Phone number"
              placeholderTextColor={'#666'}
              keyboardType='number-pad'
              value={phone}
              onChangeText={setPhone}
            />
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
    marginTop: 40,
    marginHorizontal: 30,
    marginBottom: 10
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
    marginBottom: 15
  },
  textArea:{
    height:100,
    textAlignVertical:'top'
  }
})
