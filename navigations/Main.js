import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'//criarmos o componente de pilha

import Home from '../pages/Home';
import Abastecimento from "../pages/Abastecimento";

const Stack = createNativeStackNavigator(); // criando pilhas de navegação

const Main = () => {
    return (
        //<NavigationContainer> posso tirar esse container pq ele já foi inserido e importado em App.js
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ //propriedade
                    header: () => null // integrando app bar com native navigation 
                }}
            />
            <Stack.Screen
                name="Abastecimento"
                component={Abastecimento}
                options={{ //propriedade
                    header: () => null // integrando app bar com native navigation 
                }}
            />

        </Stack.Navigator>
        //</NavigationContainer>
    );
}

export default Main;