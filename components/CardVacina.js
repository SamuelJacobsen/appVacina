import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useDispatch } from 'react-redux';
import { reducerSetVacina } from '../src/redux/vacinaSlice';

const CardVacina = (props) => {
    const dispatch = useDispatch();

    function goToEditar() {
        dispatch(reducerSetVacina({ id: props.item.id }))
        props.navigation.navigate('Editar Vacina')    }
    return (
        <TouchableOpacity style={styles.container} onPress={goToEditar}>
            <Text style={styles.nome}>{props.item.nome}</Text>
            <Text style={styles.dose}>{props.item.dose}</Text>
            <Text style={styles.dataDose}>{props.item.dataVacina}</Text>
            <Image source={{ uri: props.item.comprovante }} style={{ width: 165, height: 60, marginLeft: 'auto', marginRight: 'auto'  }}  />
            {(props.item.proxVacina) ?
                <Text style={styles.proxDose}>Próxima dose em: {props.item.proxVacina}</Text>
                :
                <Text style={styles.proxDose}>Não há próxima dose</Text>
            }
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '45%',
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
        padding: 5,
    },
    nome: {
        
        fontFamily: 'AveriaLibre-Bold',
        textAlign: 'center',
        color: '#3e92c6',
        fontSize: 20
    },
    dose: {
        fontFamily: 'AveriaLibre-Bold',
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#3e92c6',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '60%',
    },
    dataDose: {
        fontFamily: 'AveriaLibre-Bold',
        textAlign: 'center',
        color: 'grey'
    },
    proxDose: {
        fontFamily: 'AveriaLibre-Bold',
        textAlign: 'right',
        fontSize: 10,
        color: 'red'
    }
})
export default CardVacina;