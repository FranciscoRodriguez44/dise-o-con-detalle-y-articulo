import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
//views
import { LoginView } from "./components/view/LoginView";
import { Home } from "./components/view/Home";
import { ArticulosView } from "./components/view/ArticulosView";
import { FrmCompra } from "./components/view/FrmCompra";
import { ProveedorView } from "./components/view/ProveedorView";
import { CompraView } from "./components/view/CompraView";
import { BottomTab } from "./components/view/BottomTab";
import { FrmDetalleCompra } from "./components/view/FrmDetalleCompra";
import { DetalleCompraView } from "./components/view/DetalleCompraView";
import { FrmArticulo } from "./components/view/FrmArticulo";


export default function App() {
	return (

		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }} >
				<Stack.Screen name="LoginView" component={LoginView} />
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="BottomTab" component={BottomTab} />
				<Stack.Screen name="ArticulosView" component={ArticulosView} />
				<Stack.Screen name="FrmCompra" component={FrmCompra} /> 
				<Stack.Screen name="FrmDetalleCompra" component={FrmDetalleCompra} /> 
				<Stack.Screen name="FrmArticulo" component={FrmArticulo} /> 
				<Stack.Screen name="ProveedorView" component={ProveedorView} />
				<Stack.Screen name="CompraView" component={CompraView}/>
				<Stack.Screen name="DetalleCompraView" component={DetalleCompraView}/>


			</Stack.Navigator>
		</NavigationContainer>
		

		// <View style={styles.container}>
		// 	<Text style={styles.title}>ReactNative</Text>

		// 	{/* <CursosView style={styles.container}></CursosView> */}
		// 	{/* <MatriculadoView></MatriculadoView> */}
		// 	<StatusBar style="auto" />
		// </View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		height: 40,
		fontSize: 25,
	},
});
