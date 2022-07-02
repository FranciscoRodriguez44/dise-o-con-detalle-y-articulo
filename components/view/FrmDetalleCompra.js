import React from 'react';

import { StyleSheet, Text, Button, View,Image, ActivityIndicator, TextInput, ScrollView,TouchableOpacity } from 'react-native';
import { CardMercancia } from '../utility/FrmMercancia';

import Flatbutton, { } from "../../button/button";

import Flatbutton2, { } from "../../button/button2";
import { TblDetalleCompra } from '../../Model/TblDetalleCompra';

class FrmDetalleCompra extends React.Component {
    constructor(props) {
        super();
		this.props = props;
        this.Detalle = new TblDetalleCompra();
        this.state = {
            Id: "",
            articulo: "",
            precio:"",
            cantidad:"",
            descuentocompra:"",
        }
     
        this.nombrearticulo = "";

        this.GuardarDetalleCompra = this.props.route.params.GuardarDetalleCompra;
        ///this.Editardatos(this.props.route.params.Datos ?? null)
        this.Editar(this.props.route.params.Datos ?? null)
        this.flag = true;
    }
    Editar = async (obje = (new TblDetalleCompra())) => {
      
        if(obje != null) {
            const a = await this.Detalle.TblArticulos.get();
            

            const NameProduct = a.filter(i => i.idarticulo == obje.idarticulo);
        

            NameProduct.forEach(element => {
                this.nombrearticulo = element.nombrearticulo;
            });
            

            this.setState({
                Id: obje.idarticulo,
                articulo:this.nombrearticulo,
                precio:obje.preciocompra,
                cantidad: obje.cantidadcompra,
                descuentocompra:obje.descuentocompra

            });

            this.Detalle.idarticulo = obje.idarticulo;
            this.Detalle.preciocompra = obje.preciocompra;
            this.Detalle.Cantidad = obje.cantidadcompra;
            this.Detalle.descuentocompra = obje.descuentocompra;
            
            this.flag = false;
        }
       
    }
    GuardarArticulo = async (key, Name) => {
    
        this.setState({
            Id: key,
            articulo: Name
        });

        this.Detalle.idarticulo = key.toString();
    }

   
    render() {
        return (<ScrollView style={styles.container}>
              <Image
			style={{width:480,height:700,position:"absolute"}} 
			source={require('../../components/img/libreria.jpg')}/>

               <View> 
                   <Text style={{ color: "black", alignSelf: "center", fontSize: 25,fontWeight:'bold',}}>REGISTRAR DETALLE</Text>
                   
                   </View>
        
            <View style = { styles.Frm }>
        
                <View style = { styles.box_row }>
                    <TextInput style = {styles.InputStyle}
                        placeholder='Articulo'
                        value = {this.state.articulo }
                        disabled />

                    <TextInput style = {styles.subitem_2}
                        placeholder = 'ID'
                        value = { this.state.Id }
                        disabled />

            <TouchableOpacity onPress= { async () => {
                this.props.navigation.navigate("ArticulosView", {
                    GuardarArticulo: this.GuardarArticulo ,
                    selecct: true
                });
            }} style={styles.buttonAñadir}>
                <Text style={styles.ButtonText}>Añadir</Text>
                 </TouchableOpacity>
                </View>
            </View>
            
            <View>
            <TextInput style={styles.InputStyle}
                placeholder="Precio Compra"
                multiline
                onChangeText={(val) => this.Detalle.preciocompra = val}
                //value={this.state.precio}
              // editable={true}
                >
                </TextInput>
            <TextInput style={styles.InputStyle}
                placeholder="Cantidad Compra"
                multiline
                onChangeText={(val) => this.Detalle.cantidadcompra = val}
                //value={this.state.cantidad}
               //editable={true}
               >
            </TextInput>
            <TextInput style={styles.InputStyle}
                placeholder="Descuento"
                //multiline
                onChangeText={(val) => this.Detalle.descuentocompra = val}
               // value ={this.state.descuentocompra}
               >
            </TextInput>


            {/* Gjuardar y regresar*/}
            {/* <Button title='Guardar Compra' onPress={() => {
            }}></Button> */}


            <Flatbutton2 text='AÑADIR DATOS ' onPress={async () => {
                //this.Detalle.descuentocompra =this.state.descuentocompra;
                 this.GuardarDetalleCompra(this.Detalle, this.state.Id, this.flag); 
            }} />
            <Flatbutton text='Cancelar y Regresar' onPress={() =>
                this.props.navigation.navigate("ArticulosView")} />
            </View>
            

        </ScrollView>)
    }
}


export { FrmDetalleCompra }
const styles = StyleSheet.create({
    InputStyle: {
        marginBottom: 4,
        marginTop: 4,
        flex: 1,
        padding: 4,
        margin: 2,  
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: "white",
    }, container: {
        backgroundColor: "#536878",
    }, Frm: {
        display: 'flex',
        flexDirection: 'column',
        padding: 4,
        marginTop: 4,
        marginBottom: 4,
        marginLeft: 4,
        marginRight: 4,

        borderWidth: 2,
        borderRadius: 4,
        borderColor: "black"
    },
    box_row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },    
    subitem_2: {
        padding: 4,
        margin: 2,
        width: 60,
        backgroundColor: "white",
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#999"
    },
    ButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 17
    },buttonAñadir:{
        color:"black",
        flex: 1,
        marginTop: 2,
        paddingTop: 4,
        paddingBottom: 6,
        backgroundColor: '#55FF75',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'white'
    }
});