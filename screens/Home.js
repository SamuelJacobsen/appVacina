import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CardVacina from '../components/CardVacina';

const Home = (props) => {

    const [vacinas, setVacinas] = useState([])

    const listaVacinas = [
        {
            id: 1,
            nome: 'BCG',
            data: '11/06/2022',
            dose: 'Dose única',
            comprovante: '',
            proxima: ''
        },
        {
            id: 2,
            nome: 'Febre Amarela',
            data: '05/10/2022',
            dose: '1a. dose',
            comprovante: '',
            proxima: '11/10/2023'
        },
        {
            id: 3,
            nome: 'Febre Amarela',
            data: '05/10/2022',
            dose: '1a. dose',
            comprovante: '',
            proxima: '11/10/2023'
        },
        {
            id: 4,
            nome: 'Febre Amarela',
            data: '05/10/2022',
            dose: '1a. dose',
            comprovante: '',
            proxima: '11/10/2023'
        },
    ]

    if (vacinas.length == 0) {
        setVacinas(listaVacinas)
    }

    if (typeof props.route.params !== 'undefined') {
        if (typeof props.route.params.itemAdicionar !== 'undefined') {
            console.log(props.route.params.itemAdicionar);
            vacinas.push({
                id: props.route.params.itemAdicionar.id,
                nome: props.route.params.itemAdicionar.nome,
                data: props.route.params.itemAdicionar.data,
                dose: props.route.params.itemAdicionar.dose,
                proxima: props.route.params.itemAdicionar.proxima,
            })
        }
        if (typeof props.route.params.itemEditar !== 'undefined') {
            var index = vacinas.findIndex((item) => item.id == props.route.params.itemEditar.id)
            if (index !== -1) {
                let arrayTemporario = vacinas.slice();
                arrayTemporario[index] = props.route.params.itemEditar;
                setVacinas(arrayTemporario);
                props.route.params.itemEditar = 'undefined';
            }
        }
        if (typeof props.route.params.idApagar !== 'undefined') {
            var index = vacinas.findIndex((item) => item.id == props.route.params.idApagar)
            if (index !== -1) {
                vacinas.splice(index, 1);
            }
        }
    }

    const showNovaVacina = () => {
        props.navigation.navigate('HomeNavigator', { screen: 'Nova Vacina' });
    }

    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);


    return (
        <View style={styles.main}>
            <Searchbar
                icon={require('../assets/images/pes.png')}
                style={styles.srcBar}
                placeholder="Pesquisar Vacina..."
                onChangeText={onChangeSearch}
                value={searchQuery}
                iconColor="#8B8B8B"
                placeholderTextColor="#8B8B8B"
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <FlatList data={vacinas} renderItem={({ item }) => <CardVacina item={item} navigation={props.navigation} />} keyExtractor={item => item.id} numColumns={2} />
            </View>

            <TouchableOpacity onPress={showNovaVacina}>
                <Text style={[styles.btnNovaVacina, styles.shadow]}>
                    Nova Vacina
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#add4d1',
        flex: 1
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        marginTop: 30,
        color: '#429ed7',
        fontFamily: 'AveriaLibre-Bold',
        textDecorationLine: 'underline'
    },
    btnNovaVacina: {
        backgroundColor: '#37BD6D',
        textAlign: 'center',
        paddingVertical: 7,
        width: 140,
        color: 'white',
        marginTop: 150,

        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 16,
        fontFamily: 'AveriaLibre-Bold',
    },
    srcBar: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 1,

    }
});

export default Home