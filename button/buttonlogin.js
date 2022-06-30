import React from "react";
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';

export default function Flatbutton5({text,onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles =StyleSheet.create({

    button: {
        paddingHorizontal:8,
        paddingVertical: 10,
        borderRadius: 15,
        backgroundColor: "white",
        left:55,
        width:250,
        
    },
    buttonText: {
        color: "black",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 16,
        textAlign: "center"
    }
})