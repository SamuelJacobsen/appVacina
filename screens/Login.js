import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ImageBackground } from "react-native"
import { useState } from "react"
import { estilos } from "./Login_sty"
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from "@react-navigation/native";


const Login = (props) => {


    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [showIncorrectPassword, setShowIncorrectPassword] = useState(false);
    const navigation = useNavigation();
    const [error, setError] = useState(null);
    const handleLogin = () => {
        if (email.trim() === '' || senha.trim() === '') {
            // Exibe uma mensagem de erro caso o email ou senha estejam vazios
            alert('Por favor, preencha os campos de email e senha');
            return;
        }

        // Se a senha estiver incorreta, defina showIncorrectPassword como true
        setShowIncorrectPassword(true);

        // Se as credenciais estiverem corretas, navegue para a tela de entrada
        if (email === 'a' && senha === 'a') {
          navigation.push('Home');
        } else {
            setError("E-mail e/ou senha inválidos.");
        }
    };
    const goToCriar = () => {
        props.navigation.navigate('Criar')
    }
    const goToEsqueci = () => {
        props.navigation.navigate('Esqueci')
    }



    return (
    
            <View style={estilos.main}>
                <ImageBackground source={require('../assets/images/bg.jpg')} style={estilos.bg} blurRadius={2}>
                    <LinearGradient
                        colors={['rgba(84, 131, 126, 0.5)', 'rgba(255, 255, 255, 0.62)', 'rgba(221, 230, 229, 0.68)', 'rgba(59, 94, 90, 0.51)']}   style={estilos.bgG}
                    />








                    <View style={estilos.title}>
                        <Image style={estilos.logo}
                            source={require('../assets/images/logo.png')}
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
                        {error && (
                            <View style={estilos.errorContainer}>
                                <Text style={estilos.errorText}>{error}</Text>
                            </View>
                        )}

                    </View>








                    <View style={estilos.click}>
                        <TouchableOpacity onPress={handleLogin} style={estilos.button}>
                            <Text style={estilos.button.text}>Entrar</Text>
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
