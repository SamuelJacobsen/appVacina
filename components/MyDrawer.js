import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Nova from "../screens/Nova";
import Editar from "../screens/Editar";
import Prox from "../screens/Prox";
import CustomComponent from "../components/CustomComponent";

const Drawer = createDrawerNavigator()

const MyDrawer = (props) => {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomComponent {...props} />} initialRouteName="Home" screenOptions={{ drawerActiveBackgroundColor: 'red', drawerLabelStyle: { color: 'gray' } }}>
            <Drawer.Screen name="Minhas Vacinas" component={Home} />
            <Drawer.Screen name="Nova" component={Nova} />
            <Drawer.Screen name="Editar" component={Editar} />
            <Drawer.Screen name="Prox" component={Prox} />
        </Drawer.Navigator>
    )
}

export default MyDrawer