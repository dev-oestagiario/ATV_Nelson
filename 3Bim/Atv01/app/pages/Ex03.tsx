import React, { Component } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";

type AlinhamentosState = {
  justify: "flex-start" | "center" | "flex-end";
  align: "flex-start" | "center" | "flex-end";
};

class Ex03 extends Component<AlinhamentosState> {
  state: AlinhamentosState = {
    justify: "flex-start",
    align: "flex-start",
  };

  toggleJustify = () => {
    const next =
      this.state.justify === "flex-start"
        ? "center"
        : this.state.justify === "center"
        ? "flex-end"
        : "flex-start";
    this.setState({ justify: next });
  };

  toggleAlign = () => {
    const next =
      this.state.align === "flex-start"
        ? "center"
        : this.state.align === "center"
        ? "flex-end"
        : "flex-start";
    this.setState({ align: next });
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={[
            styles.card,
            {
              justifyContent: this.state.justify,
              alignItems: this.state.align,
            },
          ]}
        >
          <View style={styles.box}>
            <Text>1</Text>
          </View>
          <View style={styles.box}>
            <Text>2</Text>
          </View>
          <View style={styles.box}>
            <Text>3</Text>
          </View>
        </View>

        <View style={styles.buttons}>
          <Button title="Alternar Justify" onPress={this.toggleJustify} />
          <Button title="Alternar Align" onPress={this.toggleAlign} />
        </View>

        <Text style={styles.info}>justifyContent: {this.state.justify}</Text>
        <Text style={styles.info}>alignItems: {this.state.align}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  card: {
    width: 250,
    height: 150,
    borderWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row",
    marginBottom: 20,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: "#f2a154",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 250,
    marginBottom: 10,
    gap: 10,
  },
  info: { fontSize: 16 },
});

export default Ex03;
