import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ImageBackground } from "react-native"
import { useState } from "react"
import { estilos } from "./Login_sty"
import LinearGradient from 'react-native-linear-gradient';

const Login = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')


    return (
        <View style={estilos.main}>
            <ImageBackground source={require('../assets/images/bg.jpg')} style={estilos.bg}blurRadius={2}>
            <LinearGradient
            colors={['rgba(84, 131, 122, 0.55)','rgba(255, 255, 255, 0.9)','rgba(255, 255, 255, 0.9)', 'rgba(255, 255, 255, 0.7)', 'rgba(221, 230, 229, 0.7)', 'rgba(59, 94, 90, 0.7)']} style={estilos.bgG}
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

                </View>




                <View style={estilos.click}>
                    <TouchableOpacity style={estilos.button}>
                        <Text style={estilos.button.text}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.buttonS}>
                        <Text style={estilos.buttonS.text}>Criar minha conta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.buttonF}>
                        <Text style={estilos.buttonF.text}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                </View>


            </ImageBackground>

        </View>
    )
}



export default Login