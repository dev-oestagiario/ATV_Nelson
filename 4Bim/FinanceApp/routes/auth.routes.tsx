import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import { Component } from "react";


export type AuthStackParamList = {
    SignIn: undefined;
    SignUp: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

export default class AuthRoutes extends Component {
    render() {
        return (
            <AuthStack.Navigator>
                <AuthStack.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{ headerShown: false }}
                />
                <AuthStack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{ headerShown: false }}
                />

            </AuthStack.Navigator>
        );
    }
}
