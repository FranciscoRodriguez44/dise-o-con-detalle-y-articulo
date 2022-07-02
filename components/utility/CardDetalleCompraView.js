import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, ScrollView, TextInput } from 'react-native';

//Componentes

class CardDetalleCompraView extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        
        this.state = {
            isLoading: true,
            Dataset: []
        }
     this.CargarArticulo(this.props.data)
     //this.Editardatos=this.props.EditarVacio;
     this.Editar = this.props.FunEditar;
     this.EliminarDetalleCompra = this.props.EliminarDetalleCompra;
    }

    CargarArticulo = async (e = (new TblDetalleCompra())) => {
      const list = await e.TblArticulos.get();
      const result = list.filter(i => i.idarticulo == e.idarticulo);

      this.setState({
          Dataset: result
      });
  }

    render() {

        return (<View style={styles.CardStyles}>
             {
            this.state.Dataset.map(m => 
                <Text key = {m.idarticulo} style = {styles.Atribute}>Nombre de Articulos: {m.nombrearticulo}</Text> )
             }
            <Text style= {styles.Atribute}>Cantidad: {this.props.data.cantidadcompra}</Text>
            <Text style= {styles.Atribute}>Precio: {this.props.data.preciocompra}</Text>
            <Text style= {styles.Atribute}>Descuento: {this.props.data.descuentocompra}</Text>

          <View style = {styles.box_row}>
            <TouchableOpacity onPress={() => {
              //this.props.EditarVacio(this.props.data);
              this.props.FunEditar(this.props.data);
                }} style = {styles.btneditar} >
            <Text style = {styles.ButtonText}>Editar Compra</Text> 
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
               this.EliminarDetalleCompra(this.props.data);
              }} style = {styles.btneliminar} >
          <Text style = {styles.ButtonText}>Eliminar Compra</Text> 
          </TouchableOpacity>
            </View>
        </View>)
    }
}

export { CardDetalleCompraView }

const styles = StyleSheet.create({
    CardStyles:{
      justifyContent: "center",
      borderWidth: 1,
      margin: 8,
      padding: 8, 
      borderRadius: 6,
      marginTop: 4,
      backgroundColor: "#212529",
      marginBottom: 4,
        },
        Atribute: {
            color: "white",
            fontSize: 16,
            marginBottom: 8
        },
       text_input: {
        height: 50,
        margin: 12,
        fontSize: 20,
        padding: 8,
        backgroundColor: '#e0e0e0',
        borderRadius: 10
      },
      btneditar: {
        flex: 1,
        marginTop: 4,
        paddingTop: 4,
        paddingBottom: 10,
        backgroundColor: '#ABFFB6',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'white'
    },
    btneliminar: {
      flex: 1,
      marginTop: 4,
      paddingTop: 4,
      paddingBottom: 10,
      backgroundColor: '#AD2924',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: 'white'
  },
  ButtonText: {
      color: 'black',
      textAlign: 'center',
      fontSize: 17,
    
      },
      box_row: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }
    
  });