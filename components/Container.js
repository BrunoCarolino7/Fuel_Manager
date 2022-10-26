import React from "react";
import { StyleSheet, View } from 'react-native';


//ao invés de usar props, já usa direto a propriedade children
const Container = ({children}) => {
//todo conteúdo que for dentro da tag Container, é filho dela recebe suas propriedades de estilo
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});

export default Container;