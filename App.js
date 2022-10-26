import React, { useState } from "react";
import { StyleSheet,View } from 'react-native';
import { Appbar,TextInput, Button, Text } from "react-native-paper";

const App = () => {

  const [gas, setGas] = useState(0);
  const [eta, setEta] = useState(0);
  const [retorno, setRetorno] = useState(0);


  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Calculadora Flex" />
      </Appbar.Header>
      <TextInput
        label='Preço da Gasolina'
        keyboardType="numeric"
        style={styles.input}
        value={gas}
        onChangeText={text => setGas((text))}
      />
      <TextInput
        label='Preço do Etanol'
        keyboardType="numeric"
        style={styles.input}
        value={eta}
        onChangeText={text => setEta((text))}
      />
      <Button mode="contained" onPress={() => console.log('Pressed')}>
        Calcular
      </Button>
      <Text>olha: {gas}</Text>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    padding: 10,
  },
})

export default App;