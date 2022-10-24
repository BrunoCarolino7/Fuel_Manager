import React from "react";
import { View, StyleSheet } from 'react-native';

const Body = ({children}) => {

    return(
        <View style={estilo.container}>{children}</View>
    )
}

const estilo = StyleSheet.create({
    container:{ 
        flex: 1,
        backgroundColor: '#FFF',
        margin: 8
    }
})

export default Body;