import { Card } from 'antd';
import React from 'react';

import { StyleSheet, Text, TextInput, View, ActivityIndicator, ScrollView, Button } from 'react-native';
import { CardProveedores } from '../utility/CardProveedores';

import { TblProveedor } from "../../Model/TblProveedor";

import Flatbutton, { } from "../../button/button";
class ProveedorView extends React.Component {
    constructor(props) {
        super();
        this.props = props
        this.state = {
            isloding: false,
            Dataset: [],
        };
        this.Proveedor = new TblProveedor();
        this.CargarProveedores();

    }

    CargarProveedores = async (param = "") => {
        const Proveedor = await this.Proveedor.Get(param);
        this.setState({
            isloading: true,
            Dataset: Proveedor,
        });
    };

    SeleccionProveedor = async (key, name) => {
        this.props.route.params.SeleccionProveedor(key, name);
        this.props.navigation.navigate("FrmCompra");
    }

    render() {
        return (

            <ScrollView style={styles.container}>
                <Text style={{ color: "white", alignSelf: 'center', fontSize: 30, fontWeight: 150 }}>Proveedor View</Text>
                {/* <Button title="<- Regresar" onPress={()=>{
				this.props.navigation.navigate("Home");
				}}/> */}
                <Flatbutton text='<- Regresar' onPress={() =>
                    this.props.navigation.navigate("Home")} />

                <TextInput
                    style={styles.InputStyle}
                    placeholder="Buscar"
                    onChangeText={(val) => this.CargarProveedores(val)}
                ></TextInput>
                {this.state.isloding ?
                    <ActivityIndicator /> :
                    this.state.Dataset.map(
                        c => <CardProveedores key={c.idproveedor}
                            data={c} SeleccionProveedor={this.SeleccionProveedor} />
                    )}

            </ScrollView>)
    }
}


export { ProveedorView };

const styles = StyleSheet.create({

    Title: {
        color: "#fff",
        fontSize: 26,
        backgroundColor: "#212529",
    }, container: {
        backgroundColor: "#536878",
        color: "white"
    }, InputStyle: {
        color: "white",
        backgroundColor: "white",
        marginTop: 25,
        padding: 8,
        borderWidth: 2,
        borderRadius: 10,
    }

}
);