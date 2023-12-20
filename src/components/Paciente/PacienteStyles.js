import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    contenedor:{
        backgroundColor: '#fff',
        padding:20,
        borderBottomColor: '#94a3B8',
        borderWidth: 1,
        marginHorizontal: 20, 
        marginTop:10
    },
    label: {
        fontWeight:'700',
        color: '#374151',
        textTransform:'uppercase',
        marginBottom: 10
    },
    texto:{
        color: '#6D28D9',
        fontSize:24,
        fontWeight:'700',
        marginBottom: 10

    },
    fecha:{
        color: '#374151',

    }, 
    contenedorBotones:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20

    }, 
    btn:{

        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5
    },
    btnEdit:{
        backgroundColor: '#F59E0B'
        
    },
    btnEliminar:{
        backgroundColor: '#EF4444'
    },
    btnTexto:{
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 12,
        color: '#fff'

    }

});
