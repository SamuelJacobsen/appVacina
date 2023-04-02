import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ImageBackground } from "react-native"
import { useState } from "react"
import { estilos } from "./Login_sty"
import { LinearGradient } from 'expo-linear-gradient'

const Login = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')


    return (
        <View style={estilos.main}>
            <ImageBackground source={require('../assets/images/bg.jpg')} style={estilos.bg}>
            <LinearGradient
            colors={['#54837','#FFFFFF','#DDE6E5', '#3B5E5A' ]}
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





                <View style={estilos.login} >
                    <View style={estilos.iEmail}>
                    <View style={estilos.loginI}>
                        <Text style={estilos.loginT}>E-mail</Text>
                    </View>
                    <View style={estilos.loginI}>
                    <TextInput
                        style={estilos.TextInput}
                        value={email}
                        onChangeText={setEmail}
                        placeholder={"Email"}
                        placeholderTextColor="#419ED7"
                    />
                    </View>
                    </View>

                    <View style={estilos.iSenha}> 
                    <View style={estilos.loginI}>
                    <Text style={estilos.loginT}>Senha</Text>
                    </View>
                    <View style={estilos.loginI}>
                    <TextInput
                        style={estilos.TextInput}
                        value={senha}
                        secureTextEntry={true}
                        onChangeText={setSenha}
                        placeholder={"senha"}
                        placeholderTextColor="#419ED7"
                    />
                    </View>
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