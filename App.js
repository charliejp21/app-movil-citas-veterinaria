import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  Pressable,
  FlatList, 
  Alert,
  Modal
} from 'react-native';

import Formulario from './src/components/Formulario/Formulario';

import { styles } from './AppStyles'; 
import { Paciente } from './src/components/Paciente/Paciente';
import { ModalPaciente } from './src/components/ModalPaciente/ModalPaciente';

const App = () => {

  const [modalVisible, setModalVisible] = useState(false)
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})
  const [modalPaciente, setModalPaciente] = useState(false)

  const pacienteEdit = (id) =>{

    const pacienteEdit = pacientes.filter(paciente => paciente.id === id)

    setPaciente(pacienteEdit[0])

  }

  const pacienteDelete = (id) => {

    Alert.alert(
      '¿Estas seguro de eliminar esta cita?', 
      'Una vez eliminada no será posible recuperar',
      [
        {text: 'Cancelar'}, 
        {text: 'Sí, eliminar', onPress: () => {

          const updatePacientes = pacientes.filter(paciente => paciente.id !== id)

          setPacientes(updatePacientes)

        }}
      ]
    )
  }

  const cerrarModal = () => {

    setModalVisible(false)

  }

  return (

    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>Administrador de citas {''}
      
        <Text style={styles.tituloBold}>veterinaria</Text>
      
      </Text>

      <Pressable style={styles.btnNuevaCita} onPress={ () => setModalVisible(!modalVisible)}>

        <Text style={styles.btnTextNuevaCita}>Nueva cita</Text>
      
      </Pressable>

      {pacientes.length === 0 ? 
        <Text style={styles.noPacientes}>No hay pacientes para mostrar</Text> :
        <FlatList 
         data={pacientes}
         keyExtractor={(item) => item.id}
         renderItem={({item})=>{

          return(
              <Paciente 
               item={item}
               setModalVisible={setModalVisible}
               pacienteEdit={pacienteEdit}
               pacienteDelete={pacienteDelete}
               setModalPaciente={setModalPaciente} 
               setPaciente={setPaciente}/>
            )
          
         }}/>
      }

      {modalVisible && (

        <Formulario 
        cerrarModal={cerrarModal}
        setPacientes={setPacientes}
        pacientes={pacientes}
        paciente={paciente}
        setPaciente={setPaciente}
        />

      )}
      
      <Modal 
       visible={modalPaciente}
       animationType='fade'>

        <ModalPaciente 
         paciente={paciente}
         setModalPaciente={setModalPaciente}
         setPaciente={setPaciente} />
      </Modal>

    </SafeAreaView>   
  )
}

export default App;
