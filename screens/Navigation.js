import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Image, StyleSheet, Text } from "react-native";

import MyDrawer from "../components/MyDrawer";
import Login from "./Login";
import Home from "./Home";
import Criar from "./Criar";
import Esqueci from "./Esqueci";
import Nova from "./Nova";
import Prox from "./Prox";
import Editar from "./Editar";

const Stack = createStackNavigator();

const LogoTitle = () => {
  return (
    <View style={styles.headerTitle}>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>MyHealth</Text>
    </View>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={MyDrawer} options={{ headerShown: false }}/>
        
        <Stack.Screen name="Criar" component={Criar} options={{   headerStyle: {backgroundColor: 'rgba(193, 231, 227, 1)'}, headerLeft: null, headerTitle: () => <LogoTitle /> }} />
        <Stack.Screen name="Esqueci" component={Esqueci} options={{  headerStyle: {backgroundColor: 'rgba(193, 231, 227, 1)'}, headerLeft: null, headerTitle: () => <LogoTitle /> }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  title: {

    color: '#419ED7',
    fontSize: 30,
    fontFamily: 'AveriaLibre-Bold',
  },
});

export default Navigation;
