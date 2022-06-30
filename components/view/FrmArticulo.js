import React from 'react';

import { StyleSheet, Text, Button, View, ActivityIndicator, TextInput, ScrollView } from 'react-native';
import Flatbutton, { } from "../../button/button";

import Flatbutton2, { } from "../../button/button2";
import { TblArticulos } from '../../Model/TblArticulos';

class FrmArticulo extends React.Component {
    constructor(props) {
        super()
            this.props=props;
            this.articulo= new TblArticulos();
            this.state ={

            }
        

    }
    GuardarArticulo = async()=>{
        await this.articulo.Save("idarticulo");
        this.CargarArticulos();
    }
    render() {
        return (<ScrollView style={styles.container}>
            <Text style={{ color: "white", alignSelf: "center", fontSize: 25 }}>REGISTRAR ARTICULO COMPRADO</Text>
            <TextInput style={styles.InputStyle}
                placeholder="Nombre Articulo"
                onChangeText ></TextInput>
            <TextInput style={styles.InputStyle}
                placeholder="Descripcion Articulo"
                multiline
                numberOfLines={1}
                onChangeText ></TextInput>
            <TextInput style={styles.InputStyle}
                placeholder="Id Categoria"
                multiline
                numberOfLines={1}
                onChangeText ></TextInput>
            <TextInput style={styles.InputStyle}
                placeholder="Id Marca"
                multiline
                numberOfLines={1}
                onChangeText ></TextInput>
  

            <Flatbutton2 text='Guardar Articulo'onPress={() =>
                this.props.navigation.navigate("FrmDetalleCompra")} />

            <Flatbutton text='Cancelar y Regresar' onPress={() =>
                this.props.navigation.navigate("FrmCompra")} />

        </ScrollView>)
    }
}


export { FrmArticulo }
const styles = StyleSheet.create({
    InputStyle: {
        padding: 10,
        paddingLeft: 10,
        color: "white",

        backgroundColor: "white",
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        marginLeft: 30
    }, container: {
        backgroundColor: "#536878",
    },
});