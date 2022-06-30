import { StyleSheet, TouchableOpacity, Text, View} from "react-native";
import Flatbutton2 from "../../button/button2";



const CardArticulo = (props) => {
	return (
		<View style={styles.CardStyle}>
			<Text style={styles.Title}>ARTICULOS</Text>
			<Text style={styles.Atribute}>Nombre: {props.data.nombrearticulo} </Text>
			{/* <Text style={styles.Atribute}>Fecha: {props.data.FechaCreacion} </Text> */}

			<TouchableOpacity 
				title="Add"
				color="#168aad"
				onPress={() => {
					props.selecct ? props.GuardarArticulo(props.data.idarticulo, props.data.nombrearticulo) : false
				   }}
	   
				   style = {styles.button} >
					   {
						   props.selecct ? <Text style = {styles.ButtonText}>ADD</Text> : <Text style = {styles.ButtonText}>Ver Detalle</Text>
					   }
			</TouchableOpacity>
		
		

		</View>
	);
};

export { CardArticulo };

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
	  },ButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 17
      }
	 
});
