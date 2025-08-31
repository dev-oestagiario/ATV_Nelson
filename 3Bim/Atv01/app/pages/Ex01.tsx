import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Greeting from "../components/Greeting";

class Ex01 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Greeting name="Kainã" size={80} />
        <Greeting name="Ana Pedrosa" size={6} />
        <Greeting name="Lucas" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Ex01;
