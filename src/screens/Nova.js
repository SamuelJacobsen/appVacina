import React, { useState, useEffect } from 'react'
import { RadioButton } from 'react-native-paper';
import { Image, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native'
import MaskInput, { Masks } from 'react-native-mask-input';
import { styles } from './Nova_sty';
import { db, storage } from '../config/firebase'
import { addDoc, collection, doc, setDoc } from "firebase/firestore"
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { uploadBytes, ref, getDownloadURL } from "firebase/storage"
import { useSelector } from 'react-redux';
import PlaceHolder from '../../assets/images/placeholder.jpg'

const Nova = (props) => {

    const idUsuario = useSelector((state) => state.usuario.id)

    const salvarVacina = async () => {

        if (comprovante) {
            const file = await fetch(comprovante)
            const blob = await file.blob()

            const filename = "images/" + comprovante.split("-")[comprovante.split("-").length - 1]

            if (nome && dataVacina && dose) {

                uploadBytes(ref(storage, filename), blob)
                    .then((resposta) => {
                        getDownloadURL(ref(storage, resposta.ref.fullPath))
                            .then((urlDownload) => {
                                addDoc(collection(db, "MyHealth"), {
                                    nome: nome,
                                    dataVacina: dataVacina,
                                    dose: dose,
                                    proxVacina: proxVacina,
                                    comprovante: urlDownload,
                                    pathFoto: filename,
                                    idUsuario: idUsuario
                                })
                                props.navigation.navigate('Minhas Vacinas')
                            })
                            .catch((error) => {
                                console.log("Erro ao fazer upload do arquivo: " + error)
                            })
                    })
            } else {
                setModalVisible(true);
            }

        } else {
            setModalVisible(true);
        }

    }

    const showImagePicker = () => {
        launchImageLibrary()
            .then((result) => {
                setComprovante(result.assets[0].uri)
            })
            .catch((error) => {
                console.log("Erro ao capturar imagem: " + error)
            })
    }

    const showCamera = () => {
        launchCamera()
            .then((result) => {
                setComprovante(result.assets[0].uri)
            })
            .catch((error) => {
                console.log("Erro ao capturar imagem: " + error)
            })
    }

    const [modalVisible, setModalVisible] = useState(false);
    const [dose, setDose] = useState('');
    const [nome, setNome] = useState('');
    const [dataVacina, setDataVacina] = useState('');
    const [proxVacina, setProxVacina] = useState('');
    const [comprovante, setComprovante] = useState('');

    useEffect(() => {

        props.navigation.addListener('focus', () => {
            setDose('')
            setNome('')
            setDataVacina('')
            setProxVacina('')
            setComprovante('')
        });

    }, []);


    return (
        <View style={styles.main}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Preencha os campos corretamente</Text>
                        <View style={styles.modalButtons}>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonAceitar]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <View>

                <View style={styles.container}>
                    <Text style={styles.label}>Data de Vacinação</Text>
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
                                status={dose === '1a. dose' ? 'checked' : 'unchecked'}
                                onPress={() => setDose('1a. dose')}
                            />
                            <Text style={styles.label}>1a. dose</Text>
                        </View>
                        <View style={styles.containerRadios}>
                            <RadioButton
                                value="2a. dose"
                                color="#419ed7"
                                uncheckedColor="#fff"
                                status={dose === '2a. dose' ? 'checked' : 'unchecked'}
                                onPress={() => setDose('2a. dose')}
                            />
                            <Text style={{ width: 75, margin: 5, color: 'white', fontSize: 15, marginLeft: 'auto', }}>2a. dose</Text>
                        </View>
                        <View style={styles.containerRadios}>
                            <RadioButton
                                value="3a. dose"
                                color="#419ed7"
                                uncheckedColor="#fff"
                                status={dose === '3a. dose' ? 'checked' : 'unchecked'}
                                onPress={() => setDose('3a. dose')}
                            />
                            <Text style={styles.label}>3a. dose</Text>
                        </View>
                        <View style={styles.containerRadios}>
                            <RadioButton
                                value="Dose única"
                                color="#419ed7"
                                uncheckedColor="#fff"
                                status={dose === 'Dose única' ? 'checked' : 'unchecked'}
                                onPress={() => setDose('Dose única')}
                            />
                            <Text style={styles.label}>Dose única</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.container}>
                    <Text style={styles.label}>Comprovante</Text>

                    <View style={styles.containerImagem}>
                        <TouchableOpacity onPress={() => showCamera()}>
                            <Text style={[styles.btnTirarFoto, styles.sombra]}>
                                Tirar Foto
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => showImagePicker()}>
                            <Text style={[styles.btnSelecionarFoto, styles.sombra]}>
                                Selecionar Imagem
                            </Text>
                        </TouchableOpacity>
                        {
                            (comprovante != '')
                                ?
                                <Image source={{ uri: comprovante }} style={{ marginTop: 20, width: 200, height: 100 }} />
                                :
                                <Image source={PlaceHolder} style={{ marginTop: 20, width: 200, height: 100 }} />
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

            <TouchableOpacity onPress={salvarVacina}>
                <Text style={[styles.btnCadastrar, styles.sombra]}>
                    Cadastrar
                </Text>
            </TouchableOpacity>

        </View>
    );
}

export default Nova