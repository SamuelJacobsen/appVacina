import React, { useEffect, useState } from 'react'
import { Searchbar } from 'react-native-paper';
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import CardVacina from '../../components/CardVacina';
import { styles } from './Home_sty';
import { db } from '../config/firebase';
import { collection, doc, getDoc, onSnapshot, query, where } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { reducerSetUsuario } from '../redux/usuarioSlice';



const Home = (props) => {

    const [vacinas, setVacinas] = useState([]);
    const [pesquisa, setPesquisa] = useState([]);
    const idUsuario = useSelector((state) => state.usuario.id)
    const dispatch = useDispatch();

    console.log(idUsuario);

    useEffect(() => {
         getDoc(doc(db, "User", idUsuario))
            .then((doc) => {
                dispatch(reducerSetUsuario({ nome: doc.data().nome, id: doc.id }))
            })
            .catch((error) => {
                console.log("Erro: " + error)
            })

        const q = query(collection(db, "MyHealth"), where('idUsuario', '==', idUsuario));

        onSnapshot(q, (result) => {
            const colecaoVacinas = []
            result.forEach((doc) => {
                const vacina = {
                    ...doc.data(),
                    id: doc.id
                }
                colecaoVacinas.push(vacina)
            })
            setVacinas(colecaoVacinas)
        })
        //})

    }, []);


    const showNovaVacina = () => {
        props.navigation.navigate('HomeNavigator', { screen: 'Nova Vacina' });
    }

    // const [searchQuery, setSearchQuery] = useState('');

    // const Search = query => setSearchQuery(query);

   


    return (
        <ScrollView horizontal={false} style={styles.main}>
            <Searchbar
                icon={require('../../assets/images/pes.png')}
                style={styles.srcBar}
                placeholder="Pesquisar Vacina..."
                onChangeText={setPesquisa}
                value={pesquisa}
                iconColor="#8B8B8B"
                placeholderTextColor="#8B8B8B"
            />

            <ScrollView horizontal={true} contentContainerStyle={{ flexDirection: 'row', width: '100%' }}>
            <FlatList data={vacinas.filter((vacina) => vacina.nome.includes(pesquisa))} renderItem={({ item }) => <CardVacina item={item} navigation={props.navigation} />} keyExtractor={item => item.id} numColumns={2} />
            </ScrollView >
            <TouchableOpacity onPress={showNovaVacina}>
                <Text style={[styles.btnNovaVacina, styles.shadow]}>
                    Nova Vacina
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

export default Home