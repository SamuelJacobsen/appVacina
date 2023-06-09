
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
    btnSalvar: {
        marginTop: 30,
        backgroundColor: '#37BD6D',
        fontFamily: 'AveriaLibre-Bold',
        textAlign: 'center',
        paddingVertical: 7,
        width: 150,
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        width: 120,
        padding: 10,
        elevation: 2,
        margin: 10
    },
    buttonAceitar: {
        backgroundColor: "#ff8383",
    },
    buttonCancelar: {
        backgroundColor: "#3f92c6",
    },
    textStyle: {
        color: "white",
        fontFamily: 'AveriaLibre-Bold',
        textAlign: "center"
    },
    modalText: {
        fontSize: 20,
        width: 250,
        marginBottom: 10,
        textAlign: "center",
        color: '#ff8383'
    },
    brnComprovante: {
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
    button2:{
        text:{
            color: 'white',
            fontSize: 16,
            marginRight: 5,
            fontFamily: 'AveriaLibre-Bold',
        },
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#FD7979',
        width: 100,
        height: 32,
        alignSelf: 'center',
        padding: 5,
        paddingHorizontal: 5,
        elevation: 5,
        marginTop: 150, 
        
    },
    lixeira:{
        width:15,
        height:17,
        marginRight:5,
    },
});
export { styles }