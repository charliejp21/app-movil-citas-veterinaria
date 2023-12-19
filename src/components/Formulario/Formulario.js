import React, {useState} from 'react';
import {Text, Modal, SafeAreaView, TextInput, View, ScrollView, Pressable, Alert} from 'react-native'
import DatePicker from 'react-native-date-picker';
import { styles } from './FormularioStyles'; 

import validateForm from './validateFormulario'

const Formulario = (props) => {

    const [paciente, setPaciente] = useState('');

    const [propietario, setPropietario] = useState('')

    const [email, setEmail] = useState('')

    const [tel, setTel] = useState('')

    const [fecha, setFecha] = useState(new Date())

    const [sintomas, setSintomas] = useState('')
 
    const {modalVisible, setModalVisible, setPacientes, pacientes} = props;

    const handleCita = () => {

        try {

            validateForm(paciente, propietario, email, tel, fecha, sintomas)

            const nuevoPaciente = {
                                
                id: Date.now(),
                paciente, 
                propietario, 
                email, 
                tel, 
                fecha, 
                sintomas
            }

            setPacientes([...pacientes, nuevoPaciente])

            setPaciente('')
            setPropietario('')
            setEmail('')
            setTel('')
            setFecha(new Date())
            setSintomas('')

            Alert.alert(
                'Success',
                'Cita creada exitosamente', 
                [{text: 'Ok'}]
            )

            return setModalVisible(!modalVisible)
            
            
        } catch (error) {

            return Alert.alert(
                'Error',
                error.message, 
                [{text: 'Intentar de nuevo'}]
            )
            
        }


    }

  return (

    <Modal
    animationType='slide'
    visible={modalVisible}>

        <SafeAreaView style={styles.contenido}>

            <ScrollView>

            <Text style={styles.titulo}>Nueva {''} 
            <Text style={styles.tituloBold}>Cita</Text>
            </Text>

            <Pressable 
                style={styles.btnCerrarModal}
                onLongPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.btnCerrarTextoModal}>X Cerrar</Text>
            </Pressable>

            <View style={styles.campo}>
                <Text style={styles.label}>Nombre paciente</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Nombre paciente'
                    placeholderTextColor={'#666'}
                    value={paciente}
                    onChangeText={setPaciente}
                />
            </View>

            <View style={styles.campo}>
                <Text style={styles.label}>Nombre propietario</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Nombre propietario'
                    placeholderTextColor={'#666'}
                    value={propietario}
                    onChangeText={setPropietario}
                />
            </View>

            <View style={styles.campo}>
                <Text style={styles.label}>Email propietario</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Email propietario'
                    placeholderTextColor={'#666'}
                    keyboardType='email-address'
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.campo}>
                <Text style={styles.label}>Teléfono de propietario</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Teléfono de propietario'
                    placeholderTextColor={'#666'}
                    keyboardType='phone-pad'
                    value={tel}
                    onChangeText={setTel}
                    maxLength={10}
                />
            </View>

            <View style={styles.campo}>
                <Text style={styles.label}>Fecha de alta</Text>
                <View style={styles.fechaContenedor}>
                    <DatePicker 
                        date={fecha}
                        locale='es'
                        onDateChange={(date)=>setFecha(date)}
                    />
                </View>
            </View>

            <View style={styles.campo}>
                <Text style={styles.label}>Sintomas</Text>
                <TextInput 
                    style={[styles.input, styles.sintomasInput]}
                    placeholder='Sintomas del paciente'
                    placeholderTextColor={'#666'}
                    value={sintomas}
                    onChangeText={setSintomas}
                    multiline={true}
                    numberOfLines={4}
                    
                />
            </View>

            <Pressable 
            style={styles.btbNuevaCita}
            onPress={handleCita}>
                <Text style={styles.btbNuevaCitaTexto}>Agregar cita</Text>
            </Pressable>
            
            </ScrollView>

        </SafeAreaView>

    </Modal>
    
  )
}

export default Formulario;