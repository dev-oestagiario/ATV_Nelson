import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text } from 'react-native';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import { Ionicons } from '@expo/vector-icons';

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

export default class AuthRoutes extends Component {
  render() {
    return (
      <AuthStack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#3b3dbf' },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}
      >
        <AuthStack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />

        <AuthStack.Screen
          name="SignUp"
          component={SignUp}
          options={({ navigation }) => ({
            title: '',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ marginLeft: 15 }}
              >
                <Text style={{display: "flex", color: '#fff', fontSize: 16, marginLeft: 4 }}><Ionicons name="arrow-back" size={24} color="#fff" />  Voltar</Text>
              </TouchableOpacity>
            ),
          })}
        />
      </AuthStack.Navigator>
    );
  }
}
