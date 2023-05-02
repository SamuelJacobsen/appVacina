import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';

const Esqueci = (props) => {

    const [email, setEmail] = useState('');

    const navigation = useNavigation();

    const Recuperar = () => {
      navigation.navigate('Login')
    };

    return (
        <View style={styles.main}>

            <View>
                <View style={styles.formContainer}>
                    <Text style={styles.textInput}>E-mail </Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder={'E-mail'}
                        placeholderTextColor="#419ED7"
                    />
                </View>
            </View>

            <View style={styles.click}>
                <TouchableOpacity style={[styles.button, {backgroundColor: '#37BD6D'}]} onPress={Recuperar}>
                    <Text style={styles.buttonText}>Recuperar senha</Text>
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
        paddingTop: 300,
    },
    formContainer: {
        flexDirection: 'row',
        marginBottom: 100,
    },
    input: {
        width: 250,
        height: 30,
        fontSize: 15,
        color: '#419ED7',
        borderColor: 'white',
        borderWidth: 1,
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
   
    click: {
        flex: 4,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 3,
        padding: 5,
        paddingHorizontal: 20,
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
    }
});

export default Esqueci;
