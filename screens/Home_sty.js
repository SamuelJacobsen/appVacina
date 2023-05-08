import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#add4d1',
        flex: 1
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        marginTop: 30,
        color: '#429ed7',
        fontFamily: 'AveriaLibre-Bold',
        textDecorationLine: 'underline'
    },
    btnNovaVacina: {
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
    srcBar: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 1,

    }
});

export { styles }