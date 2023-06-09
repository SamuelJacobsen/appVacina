import React, { useEffect, useState } from 'react'
import { RadioButton } from 'react-native-paper';
import { Modal, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import MaskInput, { Masks } from 'react-native-mask-input';
import { launchImageLibrary } from 'react-native-image-picker';
import { styles } from './Editar_sty';
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
                comprovante: comprovante,
            }
        })
    }

    
    function selecionarComprovante() {
        launchImageLibrary({ noData: true }, (response) => {
            if (response) {
                if (response.didCancel !== true) {
                    setComprovante(response.assets[0].uri);
                    console.log(response.assets[0].uri)
                }
            }
        });
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
                            (comprovante != '')
                            ?
                            <Image source={{ uri: comprovante }} style={{ marginTop: 20, width: 200, height: 100 }} />
                            :
                            setComprovante('file:///data/user/0/com.appvacina/cache/rn_image_picker_lib_temp_157f366d-74e2-445b-8b98-0c0332b54afa.jpg') &&
                            <Image source={{ uri: comprovante }} style={{ marginTop: 20, width: 200, height: 100 }} />
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
                        <Image style={styles.lixeira} source={require('../../assets/images/trash.png')}/>
                        <Text style={styles.button2.text}>Excluir</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
}

export default Editar