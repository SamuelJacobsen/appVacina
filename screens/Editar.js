import React, { useEffect, useState } from 'react'
import { RadioButton } from 'react-native-paper';
import { StyleSheet, Modal, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import MaskInput, { Masks } from 'react-native-mask-input';

const Editar = (props) => {

    function excluirVacina() {
        setModalVisible(!modalVisible)
        props.navigation.navigate('Minhas Vacinas', { idApagar: id })
    }

    function editarVacina() {
        props.navigation.navigate('Minhas Vacinas', {
            itemEditar: {
                id: id,
                nome: nome,
                data: dataVacina,
                dose: checked,
                proxima: proxVacina,
                comprovante: null,
            }
        })
    }

    const [modalVisible, setModalVisible] = useState(false);
    const [checked, setChecked] = useState('');
    const [dataVacina, setDataVacina] = useState('');
    const [id, setId] = useState('');
    const [proxVacina, setProxVacina] = useState('');
    const [nome, setNome] = useState('');
    const [comprovante, setComprovante] = useState('');

    useEffect(() => {
        setDataVacina(props.route.params.item.data)
        setProxVacina((props.route.params.item.proxima) ? (props.route.params.item.proxima) : '')
        setNome(props.route.params.item.nome)
        setChecked(props.route.params.item.dose)
        setId(props.route.params.item.id)
        setComprovante(props.route.params.item.comprovante)
    }, [props.route.params])


    return (

        <View style={styles.main}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Tem certeza que deseja remover essa vacina?</Text>
                        <View style={styles.modalButtons}>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonAceitar]}
                                onPress={() => excluirVacina(id)}>
                                <Text style={styles.textStyle}>SIM</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonCancelar]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>CANCELAR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <View>

                <View style={styles.container}>
                    <Text style={styles.label}>Data da Vacinação</Text>
                    <MaskInput
                        style={styles.input}
                        value={dataVacina}
                        onChangeText={setDataVacina}
                        mask={Masks.DATE_DDMMYYYY}
                    />
                </View>


                <View style={styles.container}>
                    <Text style={styles.label}>Vacina</Text>
                    <TextInput style={styles.input} value={nome} onChangeText={setNome} />
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
                            <Text style={[styles.brnComprovante, styles.sombra]}>
                                Selecionar Imagem...
                            </Text>
                        </TouchableOpacity>
                        {


                            <Image source={require('../assets/images/vac.jpg')} style={{ width: 170, height: 80, marginLeft: 'auto', marginRight: 105, margin: 5 }} />


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

            <TouchableOpacity onPress={() => editarVacina()}>
                <Text style={[styles.btnSalvar, styles.sombra]}>
                    Salvar Alterações
                </Text>
            </TouchableOpacity>

            <View >
                    <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.button2}>
                        <Image style={styles.lixeira} source={require('../assets/images/trash.png')}/>
                        <Text style={styles.button2.text}>Excluir</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
}

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
export default Editar