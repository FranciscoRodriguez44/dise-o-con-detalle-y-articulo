import { createNativeStackNavigator } from '@react-navigation/native-stack';

//views
import { ArticulosView } from "./ArticulosView";
import { BottomTab } from './BottomTab';
import { CompraView } from './CompraView';
import { MercanciaView } from "./MercanciaView";
import { ProveedorView } from "./ProveedorView";

const Stack = createNativeStackNavigator();

export default function MainView() {
	return (
		
	    <Stack.Navigator screenOptions={{headerShown: false}} >
		    {/* <Stack.Screen name="ArticulosView" component={ArticulosView} />
			<Stack.Screen name="FrmCompra" component={FrmCompra} />
			<Stack.Screen name="ProveedorView" component={ProveedorView} />
			<Stack.Screen name="CompraView" component={CompraView} /> */}
	    </Stack.Navigator>
	);
}

