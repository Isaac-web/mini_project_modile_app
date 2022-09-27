import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { LoginScreen, WelcomeScreen, RegisterScreen } from "./../screens";
import routeNames from "./routeNames";
import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createStackNavigator();

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator initialRouteName={routeNames.WELCOME}>
      <Stack.Screen
        name={routeNames.WELCOME}
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={routeNames.LOGIN} component={LoginScreen} />
      <Stack.Screen name={routeNames.REGISTER} component={RegisterScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
