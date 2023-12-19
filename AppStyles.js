import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{

        backgroundColor: '#F3F4F6',
        flex: 1
  
      },
      titulo: {
  
        textAlign : 'center', 
        fontSize: 30,
        color: '#374151',
        fontWeight: 'bold',
        marginTop:50
  
       }, 
       tituloBold: {
  
        fontWeight: '900',
        color:'#6D28D9'
  
       }, 
       btnNuevaCita: {
  
        backgroundColor: '#6D28D9',
        padding:15,
        marginTop:30,
        marginHorizontal: 20, 
        borderRadius:10
       },
       btnTextNuevaCita:{
        textAlign: 'center',
        color: 'white', 
        fontSize:18,
        fontWeight:'900',
        textTransform: 'uppercase'
       },
       noPacientes:{

        marginTop: 40,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '600'
        
       }
});
