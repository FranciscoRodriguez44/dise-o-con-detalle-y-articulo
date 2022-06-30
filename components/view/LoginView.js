import { StyleSheet, Text, View, Button,Image,TextInput } from "react-native";
import Flatbutton5 from "../../button/buttonlogin";
const LoginView = (props) => {
	return (
		<View style={styles.container}>
			<Image
			style={{width:480,height:700,position:"absolute"}} 
			source={require('../../components/img/libreriaMA.jpg')}
			
			
			/>
				
				<View styles ={styles.OptionContainer}>
				<Text style={styles.Title}>LIBRERIA MARIA AUXILIADORA</Text>

				<TextInput style = {styles.input} placeholder = "USER" />
                <TextInput style = {styles.input} placeholder = "PASSWORD" />


               <Flatbutton5 text="LOGIN IN" onPress={()=>{
                    props.navigation.navigate('Home')
               }}
               />
            
				
				</View>
			
            
		</View>
	);
};

export { LoginView };

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#536878",
		justifyContent:"center",
	},
	Title: {
        
		color: "#f8f9fa",
		fontSize: 19,
		flex:3,
		fontWeight:'bold',
        justifyContent: "center",
		padding:40,
		top:10,
		paddingLeft:50
	},
    OptionContainer: {
		
		justifyContent: "center"
		
    } ,
	input: {
        height: 50,
        margin: 12,
        fontSize: 15,
        padding: 8,
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
		
      },
});
