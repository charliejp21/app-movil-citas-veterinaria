import React from 'react'
import { Text, View, Pressable } from 'react-native'
import { styles } from './PacienteStyles'; 
import { newFormateDate } from '../../helpers/formatDate';
export const Paciente = ({item, setModalVisible, pacienteEdit, pacienteDelete, setModalPaciente, setPaciente}) => {

  const {paciente, fecha, id} = item

  return (

    <Pressable
     onLongPress={() => {
      setModalPaciente(true)
      setPaciente(item)}}>
      <View style={styles.contenedor}>
      <Text style={styles.label}>Paciente:</Text>
      <Text style={styles.texto}>{paciente}</Text>
      <Text style={styles.fecha}>{newFormateDate(fecha)}</Text>

      <View style={styles.contenedorBotones}>
        <Pressable 
         style={[styles.btn, styles.btnEdit]}
         onLongPress={()=> {
            setModalVisible(true)
            pacienteEdit(id)
          }
         }>
          <Text style={styles.btnTexto}>Editar</Text>
        </Pressable>

        <Pressable 
          style={[styles.btn, styles.btnEliminar]}
          onLongPress={() => pacienteDelete(id)}>
          <Text style={styles.btnTexto}>Eliminar</Text>
        </Pressable>
      </View>

    </View>
    </Pressable>

    
  )

}
