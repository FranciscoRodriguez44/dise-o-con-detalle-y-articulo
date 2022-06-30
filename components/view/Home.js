import Card from 'antd/lib/card/Card';
import { StyleSheet, Text, View, Button,Image } from 'react-native';

import Flatbutton, { } from "../../button/button";

import Flatbutton2, { } from "../../button/button2";

import Flatbutton3, { } from "../../button/button3";

import Flatbutton4, { } from "../../button/buttonvercompra";





const Home = (props) => {
  return (<View style={styles.container}>
<Image
			style={{width:480,height:700,position:"absolute"}} 
			source={require('../../components/img/libreriaMA.jpg')}
			
			
			/>
    <View>
    <Text style={{ color: "black", alignSelf: 'center', fontSize: 25, fontWeight:'bold' }}>LIBRERIA MARIA AUXILIADORA </Text>
    <Text style={styles.title}>MENU </Text>

    

    {/* <Button 
      title="ver Articulos" color={"red"}  onPress={() =>
        props.navigation.navigate('ArticulosView')
      }
    />  */}
    <Flatbutton text='Ver Articulos' onPress={() =>
      props.navigation.navigate("ArticulosView")} />

    {/* <Button 
      title="ver Compras" onPress={() =>
        props.navigation.navigate('MercanciaView')
      }
    /> */}
    <Flatbutton4 text='Ver Compras' onPress={() =>
      props.navigation.navigate("BottomTab")} />


    {/* <Button 
      title="ver proveedor" onPress={() =>
        props.navigation.navigate('ProveedorView')
      }
    /> */}
    <Flatbutton3 text='Ver Proveedores ' onPress={() => {
      props.navigation.navigate('ProveedorView')
    }} />
    </View>
    

  </View>)
}
export { Home }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#536878",
  }, title: {
    color: "black",
    fontWeight:'bold',
    fontSize: 19,
    padding: 20
  }, Buttons: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
});