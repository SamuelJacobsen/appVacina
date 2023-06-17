import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { StyleSheet } from "react-native"
import { UserHeader } from './UserHeader'
import { TouchableOpacity,Image, Text, View } from 'react-native';

export const CustomDrawer = (props) => {
    
    const sair = () => {
        props.navigation.pop();
        console.log("chegou")
    }
    return (
        <DrawerContentScrollView {...props} style={styles.container}>
            <UserHeader />
            <DrawerItemList {...props}  />
            <View style={{ flexDirection: 'row', marginLeft: 18 }}>
                <Image source={require('../assets/images/sair.png')} style={{ height: 40, width: 40 }} />
                <TouchableOpacity onPress={sair}>
                    <Text style={{ color: '#419ED7', paddingTop: 10, marginLeft: 28, fontSize: 15 }}>
                        Sair
                    </Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#add4d1',
    },

})
