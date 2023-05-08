import React from 'react'
import { FlatList,  Text, TouchableOpacity, View } from 'react-native'

import CardProximaVacina from '../components/CardProximaVacina';
import { styles } from './Prox_sty';

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


    const goToNova = () => {
        props.navigation.navigate('HomeNavigator', { screen: 'Nova Vacina' });
    }



    return (
        <View style={styles.main}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <FlatList data={listaVacinas} renderItem={({ item }) => <CardProximaVacina item={item} navigation={props.navigation} />} keyExtractor={item => item.id} numColumns={1} />
            </View>
            <TouchableOpacity onPress={goToNova}>
                <Text style={[styles.btnNovaVacina, styles.shadow]}>
                    Nova Vacina
                </Text>
            </TouchableOpacity>
        </View>
    );
}
export default Prox