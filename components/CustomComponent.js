import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import MyDrawer from './MyDrawer';

const CustomComponent = (props) => {
  return (
    <DrawerContentScrollView style={styles.drawerContent}>
      <View style={styles.header}>
        <Text>TESTE</Text>
      </View>
      <DrawerItemList {...{props}} />
      <TouchableOpacity style={styles.button}>
        <Image source={require('../assets/images/logo.png')} style={styles.icon} />
        <DrawerItem
          label="Minhas Vacinas"
          onPress={() => navigation.navigate('Home')}
          labelStyle={styles.label}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={require('../assets/images/cal.png')} style={styles.icon} />
        <DrawerItem
          label="Próximas Vacinas"
          onPress={() => navigation.navigate('Prox')}
          labelStyle={styles.label}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={require('../assets/images/sair.png')} style={styles.icon} />
        <DrawerItem
          label="Sair"
          onPress={() => {
            navigation.pop()
          }}
          labelStyle={styles.label}
        />
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: 10,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CustomComponent;
