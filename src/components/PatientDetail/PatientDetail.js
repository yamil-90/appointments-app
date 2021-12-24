import React from 'react'
import { StyleSheet, Text, View, Modal, SafeAreaView, Pressable } from 'react-native'

const PatientDetail = (props) => {
    const {patient, patientDetailVisible, setPatientDetailVisible}=props;
    console.log(patient);
    
    return (
        <Modal
        animationType='slide'
        visible={patientDetailVisible}
        >
            <SafeAreaView
            style={styles.container}
            >
            <Text style={styles.title}>Patient{''} <Text style={styles.boldTitle}>Details</Text></Text>
<Text >{patient.patient}</Text>
                <Pressable
                onPress={()=>setPatientDetailVisible(false)}
                style={styles.btnClose}
                >
                <Text style={styles.btnCloseText}>Close</Text>
                </Pressable>
            </SafeAreaView>
        </Modal>
    )
}

export default PatientDetail

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#00a680',
        flex:1
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
      btnClose: {
        backgroundColor: 'darkgreen',
        marginHorizontal: 40,
        marginTop: 20,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center'
      },
      btnCloseText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 15,
        textTransform: 'uppercase'
      },
})
