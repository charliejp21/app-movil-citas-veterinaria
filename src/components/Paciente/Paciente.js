import React from 'react'
import { Text, View, Pressable } from 'react-native'
import { styles } from './PacienteStyles'; 
export const Paciente = ({item, setModalVisible, pacienteEdit}) => {

  const {paciente, fecha, id} = item

  const newFormateDate = (fecha) => {

    const nuevaFecha = new Date(fecha)

    const opciones = {

      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }

    return nuevaFecha.toLocaleDateString('es-ES', opciones);

  }

  return (

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

        <Pressable style={[styles.btn, styles.btnEliminar]}>
          <Text style={styles.btnTexto}>Eliminar</Text>
        </Pressable>
      </View>

    </View>
  )

}
