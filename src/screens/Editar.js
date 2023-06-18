import React, { useEffect, useState } from 'react'
import { RadioButton } from 'react-native-paper';
import { Modal, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import MaskInput, { Masks } from 'react-native-mask-input';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { styles } from './Editar_sty';
import { updateDoc, doc, deleteDoc, getDoc } from 'firebase/firestore';
import {db, storage} from "../config/firebase";
import { useSelector } from 'react-redux';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import PlaceHolder from '../../assets/images/placeholder.jpg'

const Editar = (props) => {

    const idVacina = useSelector((state) => state.vacina.id)
    const idUsuario = useSelector((state) => state.usuario.id)

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVerificar, setModalVerificar] = useState(false);
    const [dose, setDose] = useState('');
    const [dataVacina, setDataVacina] = useState('');
    const [proxVacina, setProxVacina] = useState('');
    const [nome, setNome] = useState('');
    const [comprovante, setComprovante] = useState('');
    const [pathFoto, setPathFoto] = useState('');
   

    useEffect(() => {

        getDoc(doc(db, "MyHealth", idVacina))
            .then((doc) => {
                setDataVacina(doc.data().dataVacina)
                setProxVacina((doc.data().proxVacina) ? (doc.data().proxVacina) : '')
                setNome(doc.data().nome)
                setDose(doc.data().dose)
                setComprovante(doc.data().comprovante)
                setPathFoto(doc.data().pathFoto)

            })
            .catch((error) => {
                console.log("Erro: " + error)
            })

    }, [idVacina])

    const editarVacina = async () => {
        if (comprovante) {

            const file = await fetch(comprovante)
            const blob = await file.blob()

            if (nome && dataVacina && dose) {

                uploadBytes(ref(storage, pathFoto), blob)
                    .then((resposta) => {
                        getDownloadURL(ref(storage, resposta.ref.fullPath))
                            .then((urlDownload) => {
                                updateDoc(doc(db, "MyHealth", idVacina), {
                                    nome: nome,
                                    dataVacina: dataVacina,
                                    dose: dose,
                                    proxVacina: proxVacina,
                                    comprovante: urlDownload,
                                    pathFoto: pathFoto,
                                    idUsuario: idUsuario
                                })
                                    .then((res) => {
                                        props.navigation.navigate('Minhas Vacinas')
                                    })
                                    .catch((error) => {
                                        console.log("Error: " + error)
                                    })
                            })
                    })
            } else {
                setModalVerificar(true);
            }
        } else {
            setModalVerificar(true);
        }
    }

    const excluirVacina = () => {

        setModalVisible(!modalVisible)



        deleteObject(ref(storage, pathFoto))
            .then(() => {
                deleteDoc(doc(db, "MyHealth", idVacina))
                    .then(() => {
                        props.navigation.navigate('Minhas Vacinas')
                    })
            })
            .catch((error) => {
                console.log("Erro ao excluir a imagem."+ error)
            })


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

    return (

        <View style={styles.main}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}>
                
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Tem certeza que deseja remover essa vacina?</Text>
                        <View style={styles.modalButtons}>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonAceitar]}
                                onPress={() => excluirVacina()}>
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
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVerificar}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Preencha os campos corretamente</Text>
                        <View style={styles.modalButtons}>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonCancelar]}
                                onPress={() => setModalVerificar(!modalVerificar)}>
                                <Text style={styles.textStyle}>OK</Text>
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
                                Selecionar Imagem...
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