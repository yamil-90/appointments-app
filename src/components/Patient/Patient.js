import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import {formatDate} from '../../helpers/index'


const Patient = ({setPatient, setPatientDetailVisible, item, setIsVisible, editPatient, deletePatient}) => {
    const { patient, date, id,  } = item;
    
    return (
        <Pressable
        onPress={()=>{
            setPatientDetailVisible(true)
            setPatient(item)
              }      }
        >
            <View style={styles.container}>
            <Text style={styles.label}>Patient</Text>
            <Text style={styles.text}>{patient}</Text>
            <Text style={styles.date}>{formatDate(date)}</Text>
            <View style={styles.btnContainer}>
                <Pressable 
                style={[styles.btn, styles.btnEdit]}
                onPress={()=>{
                    setIsVisible(true)
                    editPatient(id)
                }}
                >
                    <Text style={styles.btnText}>Edit</Text>
                </Pressable>
                <Pressable 
                style={[styles.btn, styles.btnDelete]}
                onPress={()=>deletePatient(id)}
                >
                    <Text style={styles.btnText}>Delete</Text>
                </Pressable>
            </View>
        </View>
        </Pressable>
    )
}

export default Patient

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
        borderBottomColor: 'darkgrey',
        borderBottomWidth: 1
    },
    label: {
        color: '#374151',
        textTransform: 'uppercase',
        fontWeight: '700',

        marginBottom: 10
    },
    text: {
        color: '#00a680',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10
    },
    date: {
        color: '#374151',
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    },
    btn: {
        paddingHorizontal:20,
        paddingVertical:5,
        borderRadius:5
    },
    btnEdit: {
        backgroundColor: '#f59e0b'
    },
    btnDelete: {
        backgroundColor: '#ef4444'
    },
    btnText:{
        textTransform:'uppercase',
        fontWeight:'700',
        fontSize:12,
        color:'#fff'
    }
})
