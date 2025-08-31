import React, { Component } from "react";
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Card from "./components/Card";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import Ex01 from "./pages/Ex01";
import Ex02 from "./pages/Ex02";
import Ex03 from "./pages/Ex03";
import Ex04 from "./pages/Ex04";

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        {/* Tela inicial */}
        <Stack.Screen name="Home" component={Home} options={{ title: "3 Bimestre" }} />

        {/* Exercícios */}
        <Stack.Screen name="Ex01" component={Ex01} options={{ title: "Ex01 — Saudação" }} />
        <Stack.Screen name="Ex02" component={Ex02} options={{ title: "Ex02 — Counter" }} />
        <Stack.Screen name="Ex03" component={Ex03} options={{ title: "Ex03 — Alinhamentos na prática" }} />
        <Stack.Screen name="Ex04" component={Ex04} options={{ title: "Ex04 — Tamanhos Fixos vs Dinâmicos" }} />
        
      </Stack.Navigator>

      <StatusBar/>
    </NavigationContainer>
    )
  }
}

export default App;
