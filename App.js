import React, { useState } from "react";
import { StyleSheet } from 'react-native';
import {Button, Text } from "react-native-paper";

import Header from "./src/components/Header";
import Container from "./src/components/Container";
import Body from "./src/components/Body";
import Input from "./src/components/Input";

const App = () => {

  const [gas, setGas] = useState(0);
  const [eta, setEta] = useState(0);
  const [retorno, setRetorno] = useState(0);

  return (
    <Container>
      <Header title={'Calculadora Flez'} />
      <Body>
        <Input
          label='Preço da Gasolina'
          keyboardType="numeric"
          value={gas}
          onChangeText={text => setGas((text))}
        />
        <Input
          label='Preço do Etanol'
          keyboardType="numeric"
          value={eta}
          onChangeText={text => setEta((text))}
        />
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Calcular
        </Button>
        <Text style={styles.text}>olha: {gas}</Text>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    margin: 8
  },
})

export default App;