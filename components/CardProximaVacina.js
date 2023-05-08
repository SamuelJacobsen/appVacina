import { Text, StyleSheet, TouchableOpacity } from 'react-native'

const CardProximaVacina = (props) => {

    function goToEditar() {
        props.navigation.navigate('Editar Vacina', { item: props.item })
    }

    return (
        (props.item.proxima != '') ?
            <TouchableOpacity style={styles.container} onPress={goToEditar}>
                <Text style={styles.nome}>{props.item.nome}</Text>
                <Text style={styles.proxDose}>{props.item.proxima}</Text>
            </TouchableOpacity>
            :
            null
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '90%',
        margin: 20,
        marginBottom: 0,
        borderRadius: 10,
        padding: 5,
    },
    nome: {
        paddingLeft: 20,
        fontFamily: 'AveriaLibre-Bold',
        color: '#3e92c6',
        fontSize: 20
    },
    proxDose: {
        paddingLeft: 20,
        fontSize: 15,
        color: 'grey'
    }
})

export default CardProximaVacina;