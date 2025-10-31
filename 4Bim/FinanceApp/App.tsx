import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { Component } from 'react';
import Routes from './routes';

type AppProps = Record<string, never>;
type AppState = Record<string, never>;

export default class App extends Component<AppProps, AppState> {
  render(){
    return(
      <NavigationContainer>
        <StatusBar backgroundColor="#F0F4FF" barStyle="dark-content" translucent/>
        <Routes />
      </NavigationContainer>
    )
  }
}