import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, StyleSheet, Text, View, } from 'react-native';
import { CustomDrawer } from '../components/CustomDrawer';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Login from './Login';
import Editar from './Editar';
import Home from './Home';
import Criar from './Criar';
import Esqueci from './Esqueci';
import Nova from './Nova';
import Prox from './Prox';



const HomeDrawer = () => {
  const Drawer = createDrawerNavigator();


  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>

      <Drawer.Screen
        name="Minhas Vacinas"
        component={Home}
        options={{
          drawerIcon: () => <Image source={require('../assets/images/logo.png')} style={{ height: 30, width: 30 }} />,
          headerStyle: { backgroundColor: '#c0e7e2' },
          headerTintColor: '#add4d1',
          headerTitleStyle: { fontWeight: 'AveriaLibre-Bold', fontSize: 30, color: '#429ed5' },
        }} />


      <Drawer.Screen
        name="Proximas vacinas"
        component={Prox}
        options={{
          drawerIcon: () => <Image source={require('../assets/images/cal.png')} style={{ height: 30, width: 30 }} />,
          headerStyle: { backgroundColor: '#c0e7e2' },
          headerTintColor: '#add4d1',
          headerTitleStyle: { fontFamily: 'AveriaLibre-Bold', fontSize: 30, color: '#429ed5' },
          
        }} />


      <Drawer.Screen
            

        name="Sair"
        component={Login}
        options={{

          drawerIcon: () => <Image source={require('../assets/images/sair.png')} style={{ height: 30, width: 30 }} />,
          headerStyle: { backgroundColor: '#c0e7e2' },
          headerTintColor: '#add4d1',
          headerTitleStyle: { fontFamily: 'AveriaLibre-Bold', fontSize: 30, color: '#419ED7' },
          
          headerShown: false,
          
        }}
      />


    </Drawer.Navigator>
  );
};

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={
            {
              headerShown: false,
            }}
        />
        <Stack.Screen
          name="Home"
          component={HomeDrawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Nova Conta" component={Criar}
          options={
            {

              headerStyle: { backgroundColor: '#C1E7E3' },
              headerTintColor: '#ADD4D0',
              headerTitleStyle: { fontFamily: 'AveriaLibre-Bold', fontSize: 30, color: '#429ed5' },

            }
          }
        />
        <Stack.Screen name="Esqueci" component={Esqueci}
          options={
            {
              headerStyle: { backgroundColor: '#C1E7E3' },
              headerLeft: null,
              headerTitle: () => <LogoTitle />,
              headerTintColor: 'white',
              headerTitleStyle: { fontFamily: 'AveriaLibre-Bold', fontSize: 30, color: '#429ed5' },
            }
          }
        />
        <Stack.Screen name="Editar vacina" component={Editar}
          options={
            {
              headerStyle: { backgroundColor: '#C1E7E3' },
              headerTintColor: '#ADD4D0',
              headerTitleStyle: { fontFamily: 'AveriaLibre-Bold', fontSize: 30, color: '#429ed5' },
            }
          }
        />
        <Stack.Screen name="Nova vacina" component={Nova}
          options={
            {
              headerStyle: { backgroundColor: '#C1E7E3' },
              headerTintColor: '#ADD4D0',
              headerTitleStyle: { fontFamily: 'AveriaLibre-Bold', fontSize: 30, color: '#429ed5' },
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation; 