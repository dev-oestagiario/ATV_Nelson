import { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

type CounterProps = {}

type CounterState = {
  count: number;
}

class Counter extends Component<CounterProps, CounterState> {
    state: CounterState = { count: 0 };
  

  incrementar = () => this.setState({ count: this.state.count + 1 });
  decrementar = () => this.setState({ count: this.state.count - 1 });

  render() {
    return (
      <View style={styles.container}>
        <Button title="-1" onPress={this.decrementar} />
        <Text style={styles.count}>{this.state.count}</Text>
        <Button title="+1" onPress={this.incrementar} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  count: {
    fontSize: 30,
    marginHorizontal: 20,
  },
});

export default Counter;
