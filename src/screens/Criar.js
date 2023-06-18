import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import MaskInput, { Masks } from 'react-native-mask-input';
import { RadioButton } from 'react-native-paper';
import { styles } from './Criar_sty';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app, db } from '../config/firebase';
import { addDoc, collection, setDoc, doc } from 'firebase/firestore';

const Criar = (props) => {
    const [nome, setNome] = useState('');
    const [sexo, setSexo] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [showIncorrectPassword, setShowIncorrectPassword] = useState(false);


    const salvarUsuario = (id) => {
        setDoc(doc(db, "User", id), {
            nome: nome,
            email: email,
            sexo: sexo,
            dataNascimento: dataNasc
        });
    }
    const cadastrar = () => {
          const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, senha)
            .then((userRecord) => {
                salvarUsuario(userRecord.user.uid)
                props.navigation.pop()
            })
            .catch((error) => {
                console.log("Ocorreu um erro ao cadastrar o usuário: " + error)
            })
        };


    return (
        <View style={styles.main}>


            <View>

                <View style={styles.formContainer}>
                    <Text style={styles.textInput}>Nome Completo </Text>
                    <TextInput
                        style={styles.input}
                        value={nome}
                        onChangeText={setNome}
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
                    <MaskInput
                        style={styles.input}
                        value={dataNasc}
                        onChangeText={setDataNasc}
                        mask={Masks.DATE_DDMMYYYY}
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
                    {showIncorrectPassword || (senha === '' || confirmarSenha === '') ? (
                        <Text style={styles.error}>Senha não confere ou está vazia</Text>
                    ) : null}
                </View>


            </View>

            <View style={styles.click}>
                <TouchableOpacity style={styles.button} onPress={() => { cadastrar() }}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Criar;










