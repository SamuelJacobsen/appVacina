import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Esqueci_sty';
const Esqueci = (props) => {

    const [email, setEmail] = useState('');

    const navigation = useNavigation();

    const Recuperar = () => {
        navigation.navigate('Inicial')
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
                <TouchableOpacity style={[styles.button, { backgroundColor: '#37BD6D' }]} onPress={Recuperar}>
                    <Text style={styles.buttonText}>Recuperar senha</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


export default Esqueci;
