import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    main: {
        backgroundColor: '#add4d1',
        flex: 1,
        alignItems: "center",
        paddingTop: 30
    },
    container: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    containerRadio: {
        width: 252,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: "wrap"
    },
    containerRadios: {
        flexDirection: 'row',
        marginBottom: -10
    },
    label: {
        margin: 5,
        color: 'white',
        fontSize: 15,
        marginLeft: 'auto',
    },
    input: {
        backgroundColor: 'white',
        width: 250,
        height: 30,
        fontSize: 15,
        color: '#499dcd',
        paddingBottom: 5
    },
    btnCadastrar: {
        backgroundColor: '#37BD6D',
        textAlign: 'center',
        paddingVertical: 7,
        width: 140,
        color: 'white',
        marginTop: 150,
        
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 16,
        fontFamily: 'AveriaLibre-Bold',
    },
    btnComprovante: {
        backgroundColor: '#419ed7',
        textAlign: 'center',
        fontFamily: 'AveriaLibre-Bold',
        width: 130,
        padding: 3,
        color: 'white',
        fontSize: 12,
        marginTop: 10
    },
    containerImagem: {
        width: 249,
        textAlign: 'center',
        flexDirection: 'column',
        color: 'white',
        fontSize: 15,
    },
    sombra: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 7,
        elevation: 15,
    }
});
export { styles }