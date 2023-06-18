import React, { useEffect, useState } from 'react'
import { ScrollView, FlatList, Text, TouchableOpacity, View } from 'react-native'
import CardProximaVacina from '../../components/CardProximaVacina';
import { styles } from './Prox_sty';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useSelector } from 'react-redux';

const Prox = (props) => {

    const idUser = useSelector((state) => state.usuario.id)
    const [vacinas, setVacinas] = useState([])

    useEffect(() => {

        const q = query(collection(db, "MyHealth"), where('proxVacina', '!=', ''));

        onSnapshot(q, (result) => {
            const colecaoVacinas = []
            result.forEach((doc) => {
                if (doc.data().idUsuario == idUser) {
                    colecaoVacinas.push({
                        ...doc.data(),
                        id: doc.id
                    })
                }
            });
            setVacinas(colecaoVacinas)
        });

    }, []);


    const goToNova = () => {
        props.navigation.navigate('HomeNavigator', { screen: 'Nova Vacina' });
    }



    return (
        <ScrollView horizontal={false} style={styles.main}>
            <ScrollView horizontal={true} contentContainerStyle={{ flexDirection: 'row', width: '100%' }}>
                <FlatList data={vacinas} renderItem={({ item }) => <CardProximaVacina item={item} navigation={props.navigation} />} keyExtractor={item => item.id} numColumns={1} />
            </ScrollView>
            <TouchableOpacity onPress={goToNova}>
                <Text style={[styles.btnNovaVacina, styles.shadow]}>
                    Nova Vacina
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
export default Prox