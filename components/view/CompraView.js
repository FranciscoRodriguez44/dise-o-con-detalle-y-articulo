import { TabActions } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, ActivityIndicator, TextInput, ScrollView, Button,Image } from "react-native";
import Flatbutton from "../../button/button";
import Flatbutton2 from "../../button/button2";
//Model
import { TblCompra } from "../../Model/TblCompra";
//Components
import { CardCompra } from "../utility/CardCompra";


class CompraView extends React.Component {
	constructor(props) {
		super();
		this.props = props
		this.state = {
			isLoading: true,
			Dataset: [],
			CompraSeleccionada: {}
		};
		this.Compras = new TblCompra();
		this.CargarCompra();
	}
	
	CargarCompra = async (param = "") => {
		const Compras = await this.Compras.Get(param);
		this.setState({
			isLoading: false,
			Dataset: Compras,
		});
	};

	CargarDetalle = async (Compra = (new TblCompra())) => {
		const DetalleCompra = await Compra.TblDetalleCompra.get();
		this.setState({
			CompraSeleccionada: Compra,
			DetalleCompra: DetalleCompra
		});
		this.props.navigation.navigate('DetalleCompraView', 
		{
			Compras: Compra,
			Dataset: this.state.DetalleCompra,
		})
	};


	render() {
		/**
		 * parte del mapeo CardCursoComp
		 * this.state.Dataset.map(curso => <CardCursosComp data ={curso} cargar ={this.CargarMatriculados}/>)
		 */
		return (
			// <View style={{ flex: 5 }}>
			
			<ScrollView style={styles.Container}>	
			<Image
			style={{width:480,height:700,position:"absolute"}} 
			source={require('../../components/img/libreriaMA2.jpg')}
			/>
				{/* <Text style={styles.Title}>Compras View</Text> */}
				<Flatbutton  text='<- Regresar' onPress={() =>
                this.props.navigation.navigate("Home")}/>
                 <Flatbutton text="+ Realizar Nueva Compra" onPress={()=>{
				this.props.navigation.navigate("FrmCompra",{
				CargarCompra:this.CargarCompra});
				}}/> 
				<TextInput
					style={styles.InputStyle}
					placeholder="Buscar"
					onChangeText={(val) => this.CargarCompra(val)}
				></TextInput>
				{this.state.isLoading ? (
					<ActivityIndicator />
				) : (
					this.state.Dataset.map((compra) => (
						<CardCompra key={compra.idcompra} 
						CargarDetalle={this.CargarDetalle}
						data={compra} />
					))
				)}

			</ScrollView>
			
		);
	}

}
export { CompraView };

const styles = StyleSheet.create({
	Title: {
		color: "#fff",
		fontSize: 26,
        backgroundColor: "#212529",
	},
	Container: {
        backgroundColor: "#536878",
    },InputStyle: {
		color: "white",
        backgroundColor:"white",
        marginTop: 25,
		padding:8,
        borderWidth: 2,
        borderRadius: 10,
	}
    }
);