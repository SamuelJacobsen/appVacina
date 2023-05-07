import React, { useState } from 'react'
import { RadioButton } from 'react-native-paper';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import MaskInput, { Masks } from 'react-native-mask-input';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { launchImageLibrary } from 'react-native-image-picker'

const Nova = (props) => {

    function novaVacina() {
        props.navigation.navigate('Minhas Vacinas', {
            itemAdicionar: {
                id: uuidv4(),
                nome: nome,
                data: dataVacina,
                dose: checked,
                proxima: proxVacina,
                comprovante: comprovante
            }
        })
        setDataVacina('')
        setProxVacina('')
        setNome('')
        setChecked('')
    }

    const [checked, setChecked] = useState('');
    const [nome, setNome] = useState('');
    const [dataVacina, setDataVacina] = useState('');
    const [proxVacina, setProxVacina] = useState('');
    const [comprovante, setComprovante] = useState('');

    function selecionarComprovante() {
        launchImageLibrary({ noData: true }, (response) => {
            if (response) {
                setComprovante(response.assets[0].uri);
                console.log(response.assets[0].uri)
            }
        });
    }




    return (
        <View style={styles.background}>

            <View>

                <View style={styles.container}>
                    <Text style={styles.label}>Próxima Vacinação</Text>
                    <MaskInput
                        style={styles.input}
                        value={dataVacina}
                        onChangeText={setDataVacina}
                        mask={Masks.DATE_DDMMYYYY}
                    />
                </View>


                <View style={styles.container}>
                    <Text style={styles.label}>Vacina</Text>
                    <TextInput style={styles.input} value={nome}
                        onChangeText={setNome} />
                </View>

                <View style={styles.container}>
                    <Text style={styles.label}>Dose</Text>
                    <View style={styles.containerRadio}>
                        <View style={styles.containerRadios}>
                            <RadioButton
                                value="1a. dose"
                                color="#419ed7"
                                uncheckedColor="#fff"
                                status={checked === '1a. dose' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('1a. dose')}
                            />
                            <Text style={styles.label}>1a. dose</Text>
                        </View>
                        <View style={styles.containerRadios}>
                            <RadioButton
                                value="2a. dose"
                                color="#419ed7"
                                uncheckedColor="#fff"
                                status={checked === '2a. dose' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('2a. dose')}
                            />
                            <Text style={{ width: 75, margin: 5, color: 'white', fontSize: 15, marginLeft: 'auto', }}>2a. dose</Text>
                        </View>
                        <View style={styles.containerRadios}>
                            <RadioButton
                                value="3a. dose"
                                color="#419ed7"
                                uncheckedColor="#fff"
                                status={checked === '3a. dose' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('3a. dose')}
                            />
                            <Text style={styles.label}>3a. dose</Text>
                        </View>
                        <View style={styles.containerRadios}>
                            <RadioButton
                                value="Dose única"
                                color="#419ed7"
                                uncheckedColor="#fff"
                                status={checked === 'Dose única' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('Dose única')}
                            />
                            <Text style={styles.label}>Dose única</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.container}>
                    <Text style={styles.label}>Comprovante</Text>

                    <View style={styles.containerImagem}>
                        <TouchableOpacity onPress={() => selecionarComprovante()}>
                            <Text style={[styles.btnComprovante, styles.sombra]}>
                                Selecionar Imagem
                            </Text>
                        </TouchableOpacity>
                        {
                                 <Image source={require('../assets/images/vac.jpg')} style={{width: 170, height: 80, marginLeft: 'auto', marginRight: 105, margin: 5}}/>
                                }

                    </View>

                </View>

                <View style={styles.container}>
                    <Text style={styles.label}>Próxima Vacinação</Text>
                    <MaskInput
                        style={styles.input}
                        value={proxVacina}
                        onChangeText={setProxVacina}
                        mask={Masks.DATE_DDMMYYYY}
                    />
                </View>

            </View>

            <TouchableOpacity onPress={novaVacina}>
                <Text style={[styles.btnCadastrar, styles.sombra]}>
                    Cadastrar
                </Text>
            </TouchableOpacity>

        </View>
    );
}
const styles = StyleSheet.create({
    background: {
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
export default Nova