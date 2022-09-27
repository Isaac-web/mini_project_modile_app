import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import routeNames from "./routeNames";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{ headerShown: false }}
      name={routeNames.ONBOARDING}
      component={OnBoardingScreen}
    />
  </Stack.Navigator>
);

export default function OnBoardingNavigator() {
  return <StackNavigator />;
}
