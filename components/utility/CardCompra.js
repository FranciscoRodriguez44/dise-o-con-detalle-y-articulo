import { StyleSheet, Button, Text, View} from "react-native";



const CardCompra = (props) => {
	return (
		<View style={styles.CardStyle}>
			<Text style={styles.Title}>Compras</Text>
			<Text style={styles.Atribute}>Fecha compra: {props.data.fechacompra} </Text>
            <Text style={styles.Atribute}>Id Usuario: {props.data.idusuario} </Text>
            <Text style={styles.Atribute}>Id Proveedor: {props.data.idproveedor} </Text>
			<Text style={styles.Atribute}>Total compra: {props.data.totalcompra} </Text> 
			<Button 
				title="Ver Detalle"
				color="#168aad"
				onPress={() => {
					props.CargarDetalle(props.data);
				}}
			></Button>
		
		

		</View>
	);
};

export { CardCompra };

const styles = StyleSheet.create({
	CardStyle: {
		backgroundColor: "#212529",
		// height: "20%",
		padding: 20,
		margin: 15,
		borderRadius: 10
	},
	Title: {
		color: "#f8f9fa",
		fontSize: 25,
	},
	Atribute: {
		color: "#e9ecef",
		fontSize: 16,
	},
	Resumen: {
		color: "#e9ecef",
		fontSize: 12,
	},button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: 'black',
	  },
	 
});
