import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { StyleSheet, Text,  View } from 'react-native';
import React from 'react';
import Criar from './screens/Criar';
import Home from './screens/Home';
import Login from './screens/Login';
import Esqueci from './screens/Esqueci';
import { CustomDrawer } from './components/CustomDrawer';
import Nova from './screens/Nova';
import { Image } from 'react-native';
import Editar from './screens/Editar';
import Prox from './screens/Prox';


const EsqueciH = () => {
  return (
    <View style={estilos.vtitle} >
      <Image
        style={estilos.tinyLogo}
        source={require('./assets/images/logo.png')}
      />
      <Text style={estilos.ttitle}>MyHealth</Text>
    </View>
  );
}
const HomeNavigator = () => {
  const Drawer = createDrawerNavigator()
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>


      <Drawer.Screen
        name="Minhas Vacinas"
        component={Home}
        options={{
          drawerIcon: () => <Image source={require('./assets/images/logo.png')} style={{ height: '120%', width: '15%' }} />,
          headerStyle: { backgroundColor: '#c0e7e2' },
          drawerActiveTintColor: "#429ed7",
          drawerInactiveTintColor: "#429ed7",
          headerTintColor: '#add4d1',
          headerTitleStyle: { fontFamily: 'AveriaLibre-Bold', fontSize: 30, color: '#429ed5' },
        }} />

      <Drawer.Screen name="Próximas Vacinas" component={Prox} options={{
        drawerIcon: () => <Image source={require('./assets/images/cal.png')} style={{ height: '120%', width: '15%' }} />,
        headerStyle: { backgroundColor: '#c0e7e2' },
        drawerActiveTintColor: "#429ed7",
        drawerInactiveTintColor: "#429ed7",
        headerTintColor: '#add4d1',
        headerTitleStyle: { fontFamily: 'AveriaLibre-Bold', fontSize: 30, color: '#429ed5' },
      }} />


      <Drawer.Screen name="Nova Vacina" component={Nova} options={{
        title: "Minhas Vacinas",
        drawerItemStyle: { height: 0 },
        headerStyle: { backgroundColor: '#c0e7e2' },
        headerTintColor: '#add4d1',
        headerTitleStyle: { fontFamily: 'AveriaLibre-Bold', fontSize: 30, color: '#429ed5' },
      }} />

      <Drawer.Screen name="Editar Vacina" component={Editar} options={{
        title: "Minhas Vacinas",
        drawerItemStyle: { height: 0 },
        headerStyle: { backgroundColor: '#c0e7e2' },
        headerTintColor: '#add4d1',
        headerTitleStyle: { fontFamily: 'AveriaLibre-Bold', fontSize: 30, color: '#429ed5' },
      }} />

    </Drawer.Navigator>
  )
}

const Navigation = () => {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Inicial"
          component={Login}
          options={
            {
              title: 'Tela Inicial',
              headerStyle: { backgroundColor: '#c0e7e2' },
              headerTintColor: '#ADD4D0',
              headerTitleStyle: { fontFamily: 'AveriaLibre-Bold', fontSize: 30, color: '#429ed5' },
              headerShown: false
            }} />

        <Stack.Screen name="HomeNavigator" component={HomeNavigator} options={{ headerShown: false }} />

        <Stack.Screen name="Criar Conta" component={Criar}
          options={
            {

              title: 'MyHealth',
              headerStyle: { backgroundColor: '#c0e7e2' },
              headerTintColor: '#ADD4D0',
              headerTitleStyle: { fontFamily: 'AveriaLibre-Bold', fontSize: 30, color: '#429ed5' },
            }} />

        <Stack.Screen name="Recuperar Senha" component={Esqueci}
          options={
            {

              headerStyle: { backgroundColor: '#c0e7e2' },
              headerTintColor: '#ADD4D0',
              headerTitle: () => <EsqueciH />,
              headerLeft: null,
              headerTitleStyle: { fontFamily: 'AveriaLibre-Bold', fontSize: 30, color: '#429ed5' },

            }} />



      </Stack.Navigator>
    </NavigationContainer>
  );

};

const estilos = StyleSheet.create({
  vtitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ttitle: {
    color: '#419ED7',
    fontSize: 30
  },
  tinyLogo: {
    width: 30,
    height: 30
  }
})
export default Navigation;
