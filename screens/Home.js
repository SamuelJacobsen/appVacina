import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = (props) => {
    const navigation = useNavigation();

    const Nova = () => {
        navigation.navigate('Nova vacina')
    };
    const goToEditar = () => {
        props.navigation.push('Editar vacina')
    }
    return (
        <View style={styles.main}>

            <View style={styles.aContainer}>
                <View style={styles.pContainer}>
                    <View >
                        <Image source={require('../assets/images/pes.png')} style={styles.vaccineIcon} />
                    </View>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="PESQUISAR VACINA..."
                        placeholderTextColor="#8B8B8B"
                        clearButtonMode="while-editing"
                        returnKeyType="search"
                        onSubmitEditing={() => console.log('Pesquisa iniciada')}
                    />
                </View>
            </View>

            <View style={styles.aCard}>
                <TouchableOpacity onPress={goToEditar} style={styles.card}>
                    <Text style={styles.title}>BCG</Text>
                    <View style={styles.cardContainer}>
                        <Text style={styles.cardContainer.text}>Dose única</Text>
                    </View>
                    <Text>11/06/2022</Text>
                    <View style={styles.imgCard}>
                        <Image source={require('../assets/images/vac.jpg')} style={styles.imgVac} />
                    </View>
                    <Text style={{ width: '90%', textAlign: 'right', color: '#ff0000', fontSize: 9 }}>Não há próxima dose</Text>

                </TouchableOpacity>

                <TouchableOpacity onPress={goToEditar} style={styles.card}>
                    <Text style={styles.title}>Febre amarela</Text>
                    <View style={styles.cardContainer}>
                        <Text style={styles.cardContainer.text}>1a. dose</Text>
                    </View>
                    <Text>11/10/2022</Text>
                    <View style={styles.imgCard}>
                        <Image source={require('../assets/images/vac.jpg')} style={styles.imgVac} />
                    </View>
                    <Text style={{ width: '90%', textAlign: 'right', color: '#ff0000', fontSize: 9 }}>Próxima dose em: 11/10/2023</Text>

                </TouchableOpacity>

                <TouchableOpacity onPress={goToEditar} style={styles.card}>
                    <Text style={styles.title}>Hepatite B</Text>
                    <View style={styles.cardContainer}>
                        <Text style={styles.cardContainer.text}>1a. dose</Text>
                    </View>
                    <Text>11/08/2022</Text>
                    <View style={styles.imgCard}>
                        <Image source={require('../assets/images/vac.jpg')} style={styles.imgVac} />
                    </View>
                    <Text style={{ width: '90%', textAlign: 'right', color: '#ff0000', fontSize: 9 }}>Próxima dose em: 11/10/2022</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={goToEditar} style={styles.card}>
                    <Text style={styles.title}>Poliomelite</Text>
                    <View style={styles.cardContainer}>
                        <Text style={styles.cardContainer.text}>1a. dose</Text>
                    </View>
                    <Text>11/08/2022</Text>
                    <View style={styles.imgCard}>
                        <Image source={require('../assets/images/vac.jpg')} style={styles.imgVac} />
                    </View>
                    <Text style={{ width: '90%', textAlign: 'right', color: '#ff0000', fontSize: 9 }}>Próxima dose em: 11/10/2022</Text>
                </TouchableOpacity>
                

            </View>

            <View style={styles.click}>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#37BD6D' }]} onPress={Nova}>
                    <Text style={styles.buttonText}>Nova vacina</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ADD4D0',
    },
    aContainer: {
        paddingBottom: 20,
        paddingTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    pContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        height: 25,
        width: '90%',
        paddingHorizontal: 10,

    },

    searchInput: {
        padding: 3,
        marginLeft: 5,
        fontSize: 14,
        fontFamily: 'AveriaLibre-Bold',
        paddingLeft: 1,
    },
    vaccineIcon: {
        width: 18,
        height: 18,
        tintColor: 'grey',
    },

    aCard: {
        flex: 7,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    card: {
        width: '45%',
        margin: 5,
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 5,
    },

    imgVac: {
        resizeMode: 'cover',
        width: 150,
        height: 80,
    },
    cardContainer: {
        text: {
            color: 'white',
            fontSize: 12,
            fontFamily: 'AveriaLibre-Bold'
        },
        height: 15,
        width: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#419ED7',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        color: '#3F92C5',
        fontFamily: 'AveriaLibre-Bold',
    },

    click: {
        flex: 2,
        justifyContent: 'space-around',
        alignItems: 'center',
  
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 3,
        padding: 7,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'AveriaLibre-Bold',
    }
});
export default Home;