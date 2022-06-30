import { StyleSheet, Text, View,Button } from "react-native";
import { TouchableOpacity } from "react-native-web";



const CardProveedores = (props) => {
	return (
		<View style={styles.CardStyle}>
			<Text style={styles.Title}>PROVEEDORES</Text>
			<Text style={styles.Atribute}>Nombre: {props.data.nombreproveedor} </Text>
			
			<TouchableOpacity onPress={() => {
            props.SeleccionProveedor(props.data.idproveedor, props.data.nombreproveedor);
            }}

            style = {styles.Button} >
            <Text style = {styles.ButtonText}>Seleccionar</Text>
       </TouchableOpacity>
		</View>
	);
};

export {CardProveedores };

const styles = StyleSheet.create({
	CardStyle: {
		flex: 4,
		backgroundColor: "#212529",
		// height: "20%",
		padding: 20,
		margin: 15,
		borderRadius: 10,
	},
	Title: {
		color: "#f8f9fa",
		fontSize: 32,
	},
	Atribute: {
		color: "#e9ecef",
		fontSize: 20,
	},    Button: {
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'black',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'white'
    },
    ButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 17
      }
});