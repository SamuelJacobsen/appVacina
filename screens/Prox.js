import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Prox = () => {



    const navigation = useNavigation();

    const Nova = () => {
        navigation.navigate('Nova')
    };

    return (
        <View style={styles.main}>
           <View style={styles.container}>
            <View style={styles.containerInput}>
                <Text style={styles.title}>BCG</Text>
                <Text style={styles.data}>20/09/2022</Text>
            </View>
            <View style={styles.containerInput}>
                <Text style={styles.title}>DTpa</Text>
                <Text style={styles.data}>20/09/2024</Text>
            </View>
            <View style={styles.containerInput}>
                <Text style={styles.title}>Sarampo</Text>
                <Text style={styles.data}>03/04/2026</Text>
            </View>
            </View>

            <View style={styles.click}>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#37BD6D' }]} onPress={Nova}>
                    <Text style={styles.buttonText}>Nova vacina</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ADD4D0',
        
    },
    container: {
        flex: 7,
        paddingTop: 15,
        width: '100%',
        alignItems: 'center',
        
    },
    containerInput: {
        
        backgroundColor: 'white',
        padding: 5,
        margin: 5,
        paddingLeft: 16,
        borderRadius: 5,
        width: '90%'
    },
    title: {
        fontSize: 25,
        color: '#3F92C5',
        fontFamily: 'AveriaLibre-Bold',
    },
    data: {
        fontFamily: 'AveriaLibre-Bold',
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
        marginLeft: 'auto',
    },

    click: {
        flex: 2,
        justifyContent: 'space-around',
        alignItems: 'center',
        
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 3,
        padding: 7,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'AveriaLibre-Bold',
    }
});

export default Prox;
