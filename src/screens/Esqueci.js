import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { styles } from './Esqueci_sty';
import { sendPasswordResetEmail, getAuth  } from 'firebase/auth';
import { app } from '../config/firebase';


const Esqueci = (props) => {

    const [email, setEmail] = useState('');

    

    const Recuperar = () => {
        const auth = getAuth(app);
        sendPasswordResetEmail(auth, email)
        .then((user)=>{
            console.log("Email de redefinição enviado com sucesso. Verifique sua caixa de entrada"+ JSON.stringify(user))
            props.navigation.pop();
        })
        .catch((error)=> {
            console.log("Falha ao enviar email de redefinição: " + JSON.stringify(error))
        })
       
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
                <TouchableOpacity style={[styles.button, { backgroundColor: '#37BD6D' }]} onPress={()=>{Recuperar()}}>
                    <Text style={styles.buttonText}>Recuperar senha</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


export default Esqueci;
