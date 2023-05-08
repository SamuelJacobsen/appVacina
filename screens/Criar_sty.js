import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ADD4D0',
        paddingTop: 70,
    },
    formContainer: {
        flexDirection: 'row',
        marginBottom: 20,


    },
    input: {
        width: 250,
        height: 30,
        fontSize: 15,
        color: '#419ED7',
        borderColor: 'white',
        borderWidth: 1,
        marginTop: 3,
        fontFamily: 'AveriaLibre-Bold',
        backgroundColor: 'white',
        paddingBottom: 5,

    },
    textInput: {
        margin: 5,
        color: 'white',
        fontSize: 16,
        fontFamily: 'AveriaLibre-Bold',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
        marginLeft: 'auto',

    },
    labelAndInput: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        color: '#419ED7',
        marginRight: 8,
    },
    containerRadio: {
        width: 252,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: -20,

    },

    click: {
        flex: 4,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#37BD6D',
        marginVertical: 3,
        padding: 5,
        paddingHorizontal: 35,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'AveriaLibre-Bold',
    },
    error: {
        color: "red",
        fontSize: 14,
        marginTop: -25,
        alignSelf: 'flex-start',
    },
    errorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 14,
        marginTop: 10,

    },

});
    export { styles }