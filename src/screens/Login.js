import { Text, TextInput, View, TouchableOpacity, Image, ImageBackground } from "react-native"
import { useState } from "react"
import { estilos } from "./Login_sty"
import LinearGradient from 'react-native-linear-gradient';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import  app  from "../config/firebase";
import { ActivityIndicator } from 'react-native-paper';

const Login = (props) => {


    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [showInvalidMsg, setShowInvalidMsg] = useState('');
    const [isLoading, setLoading] = useState(false)

    const goToHome = (event) => {
        
        console.log(email);
        console.log(senha);

        setShowInvalidMsg(true)

        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, senha)
            .then((user) => {
                console.log("Usuario autenticado com sucesso: " + JSON.stringify(user))
                setShowInvalidMsg(false)
                showHome()
            })
            .catch((error) => {
                setShowInvalidMsg(false)
                console.log("Falha ao autenticar o usuario: " + JSON.stringify(error))
                
            })

    };

    const showHome = () => {
        props.navigation.navigate('HomeNavigator', { screen: 'Minhas Vacinas' });
    }
    const goToCriar = () => {
        props.navigation.push('Criar Conta')
    }
    const goToEsqueci = () => {
        props.navigation.push('Recuperar Senha')
    }



    return (

        <View style={estilos.main}>
            <ImageBackground source={require('../../assets/images/bg.jpg')} style={estilos.bg} blurRadius={2}>
                <LinearGradient
                    colors={['rgba(84, 131, 126, 0.5)', 'rgba(255, 255, 255, 0.7)', 'rgba(221, 230, 229, 0.7)', 'rgba(59, 94, 90, 0.51)']} style={estilos.bgG}
                />








                <View style={estilos.title}>
                    <Image style={estilos.logo}
                        source={require('../../assets/images/logo.png')}
                    />
                    <Text style={estilos.title.text}>MyHealth</Text>
                </View>


                <View style={estilos.home}>
                    <Text style={estilos.home.text}>Controle as suas vacinas   e fique seguro</Text>
                </View>



                <View style={estilos.inputContainer} >


                    <View style={estilos.containerInput}>
                        <Text style={estilos.textInput}>E-mail </Text>


                        <TextInput
                            style={estilos.Input}
                            value={email}
                            onChangeText={setEmail}
                            placeholder={"E-mail"}
                            placeholderTextColor="#419ED7"
                        />
                    </View>



                    <View style={estilos.containerInput}>
                        <Text style={estilos.textInput}>Senha </Text>


                        <TextInput
                            style={estilos.Input}
                            value={senha}
                            secureTextEntry={true}
                            onChangeText={setSenha}
                            placeholder={"senha"}
                            placeholderTextColor="#419ED7"
                        />

                    </View>
                    {showInvalidMsg !== '' && <Text style={{ width: '80%', marginTop: -15, textAlign: 'center', color: '#ff0000' }}>E-mail e/ou senha inválidos</Text>}
                </View>








                <View style={estilos.click}>
                    <TouchableOpacity onPress={() => { goToHome() }} style={estilos.button}>
                    {
                        isLoading ?
                            <ActivityIndicator size={'small'} color={'white'} />
                            :
                        <Text style={estilos.button.text}>Entrar</Text>
                    }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={goToCriar} style={estilos.buttonS}>
                        <Text style={estilos.buttonS.text}>Criar minha conta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={goToEsqueci} style={estilos.buttonF}>
                        <Text style={estilos.buttonF.text}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                </View>




            </ImageBackground>


        </View>

    )
}






export default Login
