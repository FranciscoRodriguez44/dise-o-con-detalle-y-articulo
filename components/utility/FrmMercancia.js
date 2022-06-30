import { StyleSheet, Text, View } from "react-native";



const FrmMercancia = (props) => {
	return (
		<View style={styles.CardStyle}>
			<Text style={styles.Title}>MERCANCIA</Text>
			
			
		</View>
	);
};

export {FrmMercancia };

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
	},
});
