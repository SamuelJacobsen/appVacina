import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import Navigation from './Navigation';

const Editar = () => {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [sexo, setDose] = useState('');
    const navigation = useNavigation();

    const cadastrar = () => {
        navigation.pop();
    };


    return (
        <View style={styles.main}>

 
                <View style={styles.eContainer}>

                    <View style={styles.formContainer}>

                        <View style={styles.aContainer}>

                            <Text style={styles.textInput}>Data de vacinação</Text>

                            <View style={styles.pContainer}>
                                <TextInput
                                    style={styles.searchInput}
                                    value={data}
                                    onChangeText={setData}
                                    placeholder="DD/MM/AA"
                                    placeholderTextColor="#419ED7"
                                />
                                <View >
                                    <Image source={require('../assets/images/calv.png')} style={styles.calvIcon} />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.formContainer}>
                        <Text style={styles.textInput}>Vacina </Text>
                        <TextInput
                            style={styles.input}
                            value={nome}
                            onChangeText={setNome}
                            placeholderTextColor="#419ED7"

                        />
                    </View>

                    <View style={styles.formContainer}>
                        <Text style={styles.textDose}>Dose</Text>
                        <View style={styles.containerRadio}>
                            <View style={styles.formContainer}>
                                <RadioButton
                                    value="1a.dose"
                                    color="#419ed7"
                                    uncheckedColor="#fff"
                                    style={styles.Radio}
                                    status={sexo === '1a.dose' ? 'checked' : 'unchecked'}
                                    onPress={() => setDose('1a.dose')}

                                />
                                <Text style={styles.textInput}>1a. dose</Text>
                            </View>
                            <View style={styles.formContainer}>
                                <RadioButton
                                    value="2a.dose"
                                    color="#419ed7"
                                    uncheckedColor="#fff"
                                    status={sexo === '2a.dose' ? 'checked' : 'unchecked'}
                                    onPress={() => setDose('2a.dose')}
                                />
                                <Text style={styles.textInput}>2a. dose</Text>
                            </View>
                            <View style={styles.formContainer}>
                                <RadioButton
                                    value="3a.dose"
                                    color="#419ed7"
                                    uncheckedColor="#fff"
                                    status={sexo === '3a.dose' ? 'checked' : 'unchecked'}
                                    onPress={() => setDose('3a.dose')}
                                />
                                <Text style={styles.textInput}>3a. dose</Text>
                            </View>
                            <View style={styles.formContainer}>
                                <RadioButton

                                    value="DoseUnica"
                                    color="#419ed7"
                                    uncheckedColor="#fff"
                                    status={sexo === 'DoseUnica' ? 'checked' : 'unchecked'}
                                    onPress={() => setDose('DoseUnica')}
                                />
                                <Text style={styles.textInput}>Dose única</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.formContainer}>
                        <Text style={styles.textInput}>Próxima vacinação</Text>
                        <TextInput
                            style={styles.input}
                            value={data}
                            onChangeText={setData}
                            placeholderTextColor="#419ED7"
                        />
                    </View>
                </View>
    
            <View style={styles.click}>
                <TouchableOpacity style={styles.button} onPress={cadastrar}>
                    <Text style={styles.buttonText}>Salvar alterações</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonE} onPress={cadastrar}>
                        <Image source={require('../assets/images/trash.png')} style={styles.buttonIcon} />
                        <Text style={styles.buttonText}>Excluir</Text>
                        
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
        paddingTop: 40,
    },
    calvIcon: {
        width: 18,
        height: 18,
        tintColor: 'grey',
    },
    aContainer: {
        paddingBottom: 20,
        paddingTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    pContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        height: 25,
        width: '90%',
        paddingHorizontal: 10,

    },

    searchInput: {
        padding: 3,
        marginLeft: 5,
        fontSize: 14,
        fontFamily: 'AveriaLibre-Bold',
        paddingLeft: 1,
    },

    eContainer: {
        flex: 6,
        padding: 10,
        margin: 10,

    },
    formContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        marginRight: 30,

    },
    input: {
        width: 220,
        height: 30,
        fontSize: 15,
        color: '#419ED7',
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
    textDose: {
        margin: 5,
        color: 'white',
        fontSize: 16,
        fontFamily: 'AveriaLibre-Bold',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
        marginLeft: 30,

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
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',

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
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    buttonE: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#FD7979',
        marginVertical: 3,
        padding: 5,
        paddingHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    buttonIcon: {
        marginRight: 5,
        width: 18,
        height: 18,
        resizeMode: 'contain',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 14,
        fontFamily: 'AveriaLibre-Bold',
    },
    inputIcon: {
        resizeMode: 'cover',
        width: 30,
        height: 30,
    },

});
export default Editar;










