
import React from 'react';

import { StyleSheet, Text, View, ActivityIndicator, TextInput, ScrollView, Button,Image } from "react-native";
import Flatbutton5, {} from "../../button/buttonlogin";

const DatosLogin ={usuario: 'GabrielGay', password:'selacome'}

class LoginView extends React.Component{
constructor(props){
	super(props);
	this.state={
		usuario :'',//aqui declaro lo estados
		password:'',
	}
}
render(){
	return (
			<View style={styles.container}>
				<Image
				style={{width:480,height:700,position:"absolute"}} 
				source={require('../../components/img/libreriaMA.jpg')}
				/>
					<View styles ={styles.OptionContainer}>
						<Text style={styles.Title}>LIBRERIA MARIA AUXILIADORA</Text>
		
				<TextInput style = {styles.input} placeholder = "USUARIO" 
				//se le pasa el estado a input para que reconozca el estado(state),
						onChangeText={(usuario) => this.setState({usuario})}
					value={this.state.usuario}/>
		               <TextInput style = {styles.input} placeholder = "PASSWORD"
					   secureTextEntry
					   onChangeText={(password) => this.setState({password})}
					   value={this.state.password} />
	
		
		               <Flatbutton5 text="LOGIN IN"
					   onPress={this._login}
					   // onPress={()=>{  this.props.navigation.navigate('Home')}}
		               />
					
						
						</View>
					
					
	 		</View>
			);
	 };

	 //se hace una funcion 
	 _login=async()=>{
		 //verificamos que si nuestro datologin de  usuario y contraseña  coincide con el estado 
		 if(DatosLogin.usuario === this.state.usuario&& DatosLogin.password === this.state.password)
		 //si coinciden usuari y contra
		 {
			this.props.navigation.navigate('Home')
			// alert('Logged in');
		 }else{
			 //si no coinciden los datos 
			 alert('usuario o password incorrectos');
		 }
             //return;
	 }
	 
		
}


export {LoginView}

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
