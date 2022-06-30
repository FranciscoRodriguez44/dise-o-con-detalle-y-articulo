import React from "react";
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';

export default function Flatbutton({text,onPress}){
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
        backgroundColor: "black",
        top:20,
        left:35,
        width:300,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 16,
        textAlign: "center"

    }
})