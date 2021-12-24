import React from 'react'
import { StyleSheet, Text, View, Modal, SafeAreaView, Pressable } from 'react-native'
import {formatDate} from '../../helpers/index'

const PatientDetail = (props) => {
    const {setPatient, patient, patientDetailVisible, setPatientDetailVisible } = props;
    console.log(patient);

    return (
        <Modal
            animationType='slide'
            visible={patientDetailVisible}
        >
            <SafeAreaView
                style={styles.container}
            >
                <Text style={styles.title}>Patient{''}
                    <Text style={styles.boldTitle}>Details</Text>
                </Text>
                <View style={styles.content}>
                    <View style= {styles.field}>
                        <Text style={styles.label}>Patient</Text>
                        <Text style={styles.value}>{patient.patient}</Text>
                    </View>
                    <View style= {styles.field}>
                        <Text style={styles.label}>Owner</Text>
                        <Text style={styles.value}>{patient.owner}</Text>
                    </View>
                    <View style= {styles.field}>
                        <Text style={styles.label}>Phone</Text>
                        <Text style={styles.value}>{patient.phone? patient.phone:'not provided'}</Text>
                    </View>
                    <View style= {styles.field}>
                        <Text style={styles.label}>Email</Text>
                        <Text style={styles.value}>{patient.email}</Text>
                    </View>
                    <View style= {styles.field}>
                        <Text style={styles.label}>Symptoms</Text>
                        <Text style={styles.value}>{patient.symptoms}</Text>
                    </View>
                    <View style= {styles.field}>
                        <Text style={styles.label}>Appointment Date</Text>
                        <Text style={styles.value}>{formatDate(patient.date)}</Text>
                    </View>
                </View>
                <Pressable
                    onPress={() => {
                        setPatientDetailVisible(false)
                        setPatient({})
                    }}
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
    container: {
        backgroundColor: '#00a680',
        flex: 1
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
    content: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginHorizontal: 30,
        marginTop:30,
        padding:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    field:{
        marginTop:10
    },
    label:{
        textTransform:'uppercase',
        color :'#374151',
        fontWeight: '400',
        marginBottom:5,
        fontSize:14
    },
    value:{
fontSize:20,
fontWeight:'600',
color:'#334155'

    }
})
