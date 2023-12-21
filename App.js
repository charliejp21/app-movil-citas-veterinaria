import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  Pressable,
  FlatList, 
  Alert
} from 'react-native';

import Formulario from './src/components/Formulario/Formulario';

import { styles } from './AppStyles'; 
import { Paciente } from './src/components/Paciente/Paciente';

const App = () => {

  const [modalVisible, setModalVisible] = useState(false)
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

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

  return (

    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>Administrador de citas {''}
      
        <Text style={styles.tituloBold}>veterniaria</Text>
      
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
               pacienteDelete={pacienteDelete} />
            )
          
         }}/>
      }

      <Formulario 
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setPacientes={setPacientes}
        pacientes={pacientes}
        paciente={paciente}
        setPaciente={setPaciente}
      />

    </SafeAreaView>   
  )
}

export default App;
