import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import Navigation from './Navigation';

const Criar = () => {
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [sexo, setSexo] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [showIncorrectPassword, setShowIncorrectPassword] = useState(false);
    const navigation = useNavigation();

    const cadastrar = () => {
        if (senha !== confirmarSenha) {
            setShowIncorrectPassword(true);
            return;
        }

        navigation.navigate('Inicial')
    };

    return (
        <View style={styles.main}>


            <View>

                <View style={styles.formContainer}>
                    <Text style={styles.textInput}>Nome Completo </Text>
                    <TextInput
                        style={styles.input}
                        value={nomeCompleto}
                        onChangeText={setNomeCompleto}
                        placeholder={'Nome completo'}
                        placeholderTextColor="#419ED7"
                    />
                </View>

                <View style={styles.formContainer}>
                    <Text style={styles.textInput}>Sexo</Text>
                    <View style={styles.containerRadio}>
                        <View style={styles.formContainer}>
                            <RadioButton
                                value="masculino"
                                color="#419ed7"
                                uncheckedColor="#fff"
                                style={styles.Radio}
                                status={sexo === 'masculino' ? 'checked' : 'unchecked'}
                                onPress={() => setSexo('masculino')}
                                
                            />
                            <Text style={styles.textInput}>Masculino</Text>
                        </View>
                        <View style={styles.formContainer}>
                            <RadioButton
                                value="feminino"
                                color="#419ed7"
                                uncheckedColor="#fff"
                                status={sexo === 'feminino' ? 'checked' : 'unchecked'}
                                onPress={() => setSexo('feminino')}
                            />
                            <Text style={styles.textInput}>Feminino</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.formContainer}>
                    <Text style={styles.textInput}>Data nascimento </Text>
                    <TextInput
                        style={styles.input}
                        value={dataNascimento}
                        onChangeText={setDataNascimento}
                        placeholder={'Data de nascimento'}
                        placeholderTextColor="#419ED7"
                    />
                </View>

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

                <View style={styles.formContainer}>
                    <Text style={styles.textInput}>Senha </Text>
                    <TextInput
                        style={styles.input}
                        value={senha}
                        secureTextEntry={true}
                        onChangeText={setSenha}
                        placeholder={'Senha'}
                        placeholderTextColor="#419ED7"
                    />
                </View>

                <View style={styles.formContainer}>
                    <Text style={styles.textInput}>Repetir Senha </Text>
                    <TextInput
                        style={styles.input}
                        value={confirmarSenha}
                        secureTextEntry={true}
                        onChangeText={setConfirmarSenha}
                        placeholder={'Confirmar senha'}
                        placeholderTextColor="#419ED7"
                    />
                </View>
                <View style={styles.errorContainer}>
                {showIncorrectPassword && <Text style={styles.error}>Senha não confere!</Text>}

                </View>
               

            </View>

            <View style={styles.click}>
                <TouchableOpacity style={styles.button} onPress={cadastrar}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
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
export default Criar;










