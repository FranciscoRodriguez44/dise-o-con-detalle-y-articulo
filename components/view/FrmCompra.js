import React from 'react';

import { StyleSheet, Text, Button, View, TouchableOpacity,Image, TextInput, ScrollView } from 'react-native';

import Flatbutton, { } from "../../button/button";

import Flatbutton2, { } from "../../button/button2";
import { TblArticulos } from '../../Model/TblArticulos';

import { TblCompra } from "../../Model/TblCompra";
import { TblDetalleCompra } from '../../Model/TblDetalleCompra';
import { CardArticulo } from '../utility/CardArticulos';
import { CardDetalleCompraView } from '../utility/CardDetalleCompraView';

class FrmCompra extends React.Component {
    constructor(props) {
        super()
        this.props = props;
        this.compra = new TblCompra();
        this.state = {
            ID: "",
            detallecompra: [],
            proveedor: "",
            fecha: Date().toString(),
        }
        this.CargarCompra = this.props.route.params.CargarCompra;


    }

    // GuardarDetalleCompra = async (Detalle = (new TblDetalleCompra), key) => {

    //     if (this.state.detallecompra.length > 0) {

    //         const detallecompras = this.state.detallecompra.map(p => {
    //             if (p.idarticulo === key) {
    //                 this.keys = p.idarticulo;


    //                 return p;
    //             }
    //             return p;
    //         });

    //         console.log(this.keys + " == " + key);

    //         if (this.keys == key) {


    //             this.setState({
    //                 detallecompra: detallecompras,
    //                 Total: this.OpA,
    //                 IVA: this.OpB
    //             });

    //         } else {

    //             this.state.detallecompra.push(Detalle);

    //             this.setState({
    //                 detallecompra: this.state.detallecompra,

    //             });

    //         }

    //     } else {

    //         this.state.detallecompra.push(Detalle);

    //         this.setState({
    //             detallecompra: this.state.detallecompra,

    //         });
    //     }


    //     this.props.navigation.navigate("FrmCompra");
    // }

    GuardarDetalleCompra =async(Detalle=(new TblDetalleCompra()))=>{
        this.state.detallecompra.push(Detalle);
        this.setState({
            detallecompra:this.state.detallecompra
        })
        this.props.navigation.navigate("FrmCompra");
    }
    SeleccionProveedor = async (key, Name) => {
        this.setState({
            ID: key,
            proveedor: Name
        });

        this.compra.idproveedor = key;
    }
    Save =async()=> {
        this.compra.fecha=this.state.fecha;

        await this.compra.Save("idcompra")
        for(const key in this.state.detallecompra){
            const detallecompra = this.state.detallecompra[key];
            detallecompra.idcompra = this.compra.idcompra;
            await detallecompra.Save("iddetallecompra")
        }
    }



    render() {
        return (<ScrollView style={styles.container}>
                <Image
			style={{width:480,height:700,position:"absolute"}} 
			source={require('../../components/img/libreria.jpg')}/>
            <View> <Text style={{ color: "black", alignSelf: "center", fontSize: 25,fontWeight:'bold', }}>REGISTRAR COMPRAS</Text></View>
           
            <View style={styles.FrmProveedor}>
                <Text style={{ color: "white", alignSelf: "center", fontSize: 20,fontWeight:'bold' }}>Datos Proveedor</Text>
                <View style={styles.box_row}>
                    <TextInput style={styles.InputStyle}
                        placeholder='Proveedor'
                        value={this.state.proveedor}
                        disabled />

                    <TextInput style={styles.subitem_2}
                        placeholder='ID'
                        value={this.state.ID}
                        disabled />

                    <TouchableOpacity  onPress={async () => {
                        this.props.navigation.navigate("ProveedorView", {
                            SeleccionProveedor: this.SeleccionProveedor,
                        });
                    }}style={styles.buttonAñadir} >
                        <Text style={styles.ButtonText} >Añadir</Text>
                        
                        
                         </TouchableOpacity>
                </View>
                <TextInput style={styles.InputStyle}
                    placeholder='Fecha de Compra'
                    value={this.state.fecha} />
            </View>


            <ScrollView style={styles.FrmProveedor}>
                <Text style={{ color: "white", alignSelf: "center", fontSize: 20,fontWeight:'bold' }}>
                    Detalle de compra</Text>
                <TouchableOpacity onPress={async () => {
                    this.props.navigation.navigate("FrmDetalleCompra", {
                        GuardarDetalleCompra: this.GuardarDetalleCompra
                    });

                }} style={styles.buttonArt}>
                    <Text style={styles.ButtonText}>Agregar Articulo</Text>
                </TouchableOpacity>

                {
                    this.state.detallecompra.map(
                        c => <CardDetalleCompraView key={c.idarticulo} data={c}
                        />
                    )
                }

            </ScrollView>

            <View style={styles.FrmProveedor}>
                <Text style={{ color: "white", alignSelf: "center", fontSize: 20,fontWeight:'bold' }}>Datos de Compra</Text>
                <TextInput style={styles.InputStyle}
                    placeholder="IdUsuario"
                    multiline
                    numberOfLines={1}
                    onChangeText={val => this.compra.idusuario = val} ></TextInput>
                <TextInput style={styles.InputStyle}
                    placeholder="Sub Total"
                    multiline
                    numberOfLines={1}
                    onChangeText={val => this.compra.subtotalcompra = val} ></TextInput>
                <TextInput style={styles.InputStyle}
                    placeholder="Iva"
                    multiline
                    numberOfLines={1}
                    onChangeText={val => this.compra.iva = val} ></TextInput>
                <TextInput style={styles.InputStyle}
                    placeholder="Descuento"
                    multiline
                    numberOfLines={1}
                    onChangeText={val => this.compra.descuentocompra = val} ></TextInput>
                <TextInput style={styles.InputStyle}
                    placeholder="Total Compra"
                    multiline
                    numberOfLines={1}
                    onChangeText={val => this.compra.totalcompra = val} ></TextInput>

            </View>





            <Flatbutton2 text='Finalizar Compra' onPress={async () => {
                await this.Save();
                this.props.navigation.navigate("CompraView");
            }} ></Flatbutton2>


            <Flatbutton text='Cancelar y Regresar' onPress={() =>
                this.props.navigation.navigate("Home")} />

        </ScrollView>)
    }
}


export { FrmCompra }
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
    }, FrmProveedor: {
        display: 'flex',
        flexDirection: 'column',
        padding: 4,
        marginTop: 10,
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
    }, buttonArt: {
        paddingHorizontal: 8,
        paddingVertical: 10,
        borderRadius: 15,
        backgroundColor: "black",
        alignSelf:'center' ,
        width: 300,
    }, ButtonText: {
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