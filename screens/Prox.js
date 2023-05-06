import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CardVacina from '../components/CardVacina';
import CardProximaVacina from '../components/CardProximaVacina';

const Prox = (props) => {

    const listaVacinas = [
        {
            id: 1,
            nome: 'BCG',
            data: '11/06/2022',
            dose: 'Dose única',
            comprovante: '',
            proxima: '20/09/2022'
        },
        {
            id: 2,
            nome: 'DTpa',
            data: '05/10/2022',
            dose: '1a. dose',
            comprovante: '',
            proxima: '20/09/2024'
        },
        {
            id: 3,
            nome: 'Sarampo',
            data: '05/10/2022',
            dose: '1a. dose',
            comprovante: '',
            proxima: '03/04/2026'
        },
        
        
    ]


    const showNovaVacina = () => {
        props.navigation.navigate('HomeNavigator', { screen: 'Nova Vacina' });
    }

    const styles = StyleSheet.create({
        main: {
            backgroundColor: '#add4d1',
            flex: 1
        },
        btnNovaVacina: {
            backgroundColor: 'green',
            textAlign: 'center',
            paddingVertical: 10,
            width: 180,
            color: 'white',
            marginTop: 300,
            
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: 20,
        },
    });

    return (
        <View style={styles.main}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <FlatList data={listaVacinas} renderItem={({ item }) => <CardProximaVacina item={item} navigation={props.navigation} />} keyExtractor={item => item.id} numColumns={1} />
            </View>
            <TouchableOpacity onPress={showNovaVacina}>
                <Text style={[styles.btnNovaVacina, styles.shadow]}>
                    Nova Vacina
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Prox