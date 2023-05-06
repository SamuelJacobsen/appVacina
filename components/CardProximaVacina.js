import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const CardProximaVacina = (props) => {

    function showEditarVacina() {
        props.navigation.navigate('Editar Vacina', { item: props.item })
    }

    return (
        (props.item.proxima != '') ?
            <TouchableOpacity style={styles.container} onPress={showEditarVacina}>
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
        fontWeight: 'bold',
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