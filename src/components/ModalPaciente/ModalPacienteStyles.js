import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    contenido:{

        backgroundColor: '#F59E0B',
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
    btnCerrar:{

        marginVertical:30,
        backgroundColor: '#E06900',
        marginHorizontal: 30,
        padding:15,
        borderRadius:10

    },
    btnCerrarTexto:{

        color: '#fff',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase'

    },
    infoPaciente:{

        backgroundColor: '#FFF',
        marginHorizontal: 30,
        borderRadius: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,

    }, 
    campo:{

        marginBottom: 10
    },
    label: {
        textTransform: 'uppercase',
        color: '#374151',
        fontWeight: '700',
        marginBottom: 3,
        fontSize: 12
        
    },
    valor: {
        fontWeight: '700',
        fontSize: 20,
        color: '#334155'
    }

});
