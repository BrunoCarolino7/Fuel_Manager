import React from "react";
import {StyleSheet} from 'react-native'
import {TextInput} from 'react-native-paper';

const Input = (props) => {
    return (
        <TextInput
        style={estilo.input}
        {...props}
      />
    );
};

const estilo = StyleSheet.create({  
    input: {
      backgroundColor: '#fff',
      marginBottom: 8
    },
})

export default Input;