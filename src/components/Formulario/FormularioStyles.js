import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    contenido:{

        backgroundColor: '#6D28D9',
        flex: 1
    },
    titulo: {
        fontSize: 30,
        fontWeight:'600',
        textAlign: 'center',
        marginTop: 30,
        color: '#fff'
    },
    tituloBold:{

        fontWeight: '900',

    }, 
    btnCerrarModal:{

        marginVertical:30,
        backgroundColor: '#5827A4',
        marginHorizontal: 30,
        padding:15,
        borderRadius:10

    },
    btnCerrarTextoModal:{

        color: '#fff',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase'

    },
    campo: {
        marginTop: 40,
        marginHorizontal: 30
    },
    label: { 
        color: '#fff',
        marginBottom: 10,
        marginTop:15,
        fontSize:20,
        fontWeight: '600'

    },
    input: {

        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10
    },
    sintomasInput: {

        height:100

    },
    fechaContenedor:{

        backgroundColor: '#fff',
        borderRadius: 10
    },
    btbNuevaCita:{
        marginVertical: 50,
        backgroundColor: '#F59E0B',
        paddingVertical: 15,
        marginHorizontal: 30,
        borderRadius:10
    },
    btbNuevaCitaTexto:{

        textAlign: 'center',
        color: '#5827A4',
        textTransform: 'uppercase',
        fontWeight: '900',
        fontSize: 16



    }
});
