import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CheckoutScreen from "../components/AppDialog";
import ProfileScreen from "../screens/ProfileScreen";
import routeNames from "./routeNames";

const Stack = createStackNavigator();
export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routeNames.PROFILE} component={ProfileScreen} />
      <Stack.Screen name={routeNames.CHECKOUT} component={CheckoutScreen} />
    </Stack.Navigator>
  );
}
