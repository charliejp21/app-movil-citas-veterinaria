import React from 'react'
import { Pressable, SafeAreaView, Text, View } from 'react-native'
import { styles } from './ModalPacienteStyles'; 
import { newFormateDate } from '../helpers/formatDate';
export const ModalPaciente = ({paciente, setModalPaciente, setPaciente}) => {
  return (
    <SafeAreaView style={styles.contenido}>
      <View>
        <Text style={styles.titulo}>Información {''}
        <Text style={styles.tituloBold}>Paciente</Text>
        </Text>
          <Pressable 
          style={styles.btnCerrar}
          onLongPress={() =>{
              setModalPaciente(false)
              setPaciente({})
          }}>
            <Text style={styles.btnCerrarTexto}>X Cerrar</Text>
          </Pressable>
      </View>

    <View style={styles.infoPaciente}>

      <View style={styles.campo}>
        <Text style={styles.label}>Paciente:</Text>
        <Text style={styles.valor}>{paciente.paciente}</Text>
      </View>

      <View style={styles.campo}>
        <Text style={styles.label}>Propietario:</Text>
        <Text style={styles.valor}>{paciente.propietario}</Text>
      </View>

      <View style={styles.campo}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.valor}>{paciente.email}</Text>
      </View>

      <View style={styles.campo}>
        <Text style={styles.label}>Teléfono:</Text>
        <Text style={styles.valor}>{paciente.tel}</Text>
      </View>

      <View style={styles.campo}>
        <Text style={styles.label}>Fecha de alta:</Text>
        <Text style={styles.valor}>{newFormateDate(paciente.fecha)}</Text>
      </View>

      <View style={styles.campo}>
        <Text style={styles.label}>Sintomas:</Text>
        <Text style={styles.valor}>{paciente.sintomas}</Text>
      </View>

     </View>

    </SafeAreaView>
  )
}
