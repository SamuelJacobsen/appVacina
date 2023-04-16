import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import Login from "./Login";
import Entrar from "./Entrar";
import Criar from "./Criar";
import Esqueci from "./Esqueci";

const Stack = createStackNavigator();

  
const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Entrar" component={Entrar}   options={{title: 'Minhas vacinas',}}/>
                <Stack.Screen name="Criar" component={Criar}  options={{title: 'MyHealth',}}/>
                <Stack.Screen name="Esqueci" component={Esqueci}  options={{title: 'MyHealth',}}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;