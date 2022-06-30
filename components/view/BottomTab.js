import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import react from "react";
import { StyleSheet,Image } from "react-native";
import { ArticulosView } from "./ArticulosView";
import { CompraView } from "./CompraView";

import AntDesign from "react-native-vector-icons/AntDesign";
import { DetalleCompraView } from "./DetalleCompraView";

const Tab = createBottomTabNavigator();

 const BottomTab = (props) => {

    return(
        <Tab.Navigator screenOptions={{
          //tabBarShowLabel:false,
         // tabBarShowLabel:false,
          tabBarStyle:{backgroundColor:"#536878"},
          tabBarInactiveTintColor:"#fff",
          tabBarActiveTintColor:"yellow",

        }}>
        <Tab.Screen name="CompraView" component={CompraView} options={{
           tabBarBadge:0,
          tabBarIcon:()=>{
            return <AntDesign name="shoppingcart" size={25} color="white"/>
          }} 
         
        }/>      
          <Tab.Screen name="ArticulosView" component={ArticulosView} 
          options={{
            tabBarBadge:0,
          tabBarIcon:()=>{
            return <AntDesign name="edit" size={25} color="white"/>
          }} 
        
        }/>
          
    </Tab.Navigator>
    );
}
export{BottomTab};