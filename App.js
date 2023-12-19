import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  Pressable,
  FlatList
} from 'react-native';

import Formulario from './src/components/Formulario/Formulario';

import { styles } from './AppStyles'; 
import { Paciente } from './src/components/Paciente/Paciente';

const App = () => {

  const [modalVisible, setModalVisible] = useState(false)
  const [pacientes, setPacientes] = useState([])

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
         renderItem={()=>{

          return(<Paciente />)
          
         }}/>
      }

      <Formulario 
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setPacientes={setPacientes}
        pacientes={pacientes}
      />

    </SafeAreaView>   
  )
}

export default App;
