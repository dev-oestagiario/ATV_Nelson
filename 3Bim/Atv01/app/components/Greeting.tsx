import { Component } from "react";
import { Text } from "react-native";

type GreetingProps = {
  name: string;
  size?: number;
};

class Greeting extends Component<GreetingProps> {
    render(){
        const {name, size} = this.props
        return(
            <Text style={{fontSize: size || 15}}>
                Olá, {name}!
            </Text>
        )
    }
}

export default Greeting;
