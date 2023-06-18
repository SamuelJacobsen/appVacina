import { StyleSheet, Text, View } from "react-native"
import { useSelector } from "react-redux"

export const UserHeader = () => {
    const nome = useSelector((state) => state.usuario.nome)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Olá, {nome}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#429ed7',
        borderBottomWidth: 1,
        width: '80%',
        marginBottom: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
    }, 
    text: {
        color: '#429ed7',
        fontSize: 20,
        fontFamily: 'AveriaLibre-Bold',
    }
})
