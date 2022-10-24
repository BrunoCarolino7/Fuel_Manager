import React from "react";
import { View, StyleSheet } from 'react-native';

const Container = ({children}) => {

    return(
        <View style={estilo.container}>{children}</View>
    )
}

const estilo = StyleSheet.create({
    container:{ 
        flex: 1,
        backgroundColor: '#FFF'
    }
})

export default Container;