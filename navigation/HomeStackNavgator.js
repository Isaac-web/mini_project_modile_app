import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import EventDetailsScreen from "../screens/EventDetailsScreen";
import routeNames from "./routeNames";
import ChcekoutScreen from "../screens/ChcekoutScreen";

const Stack = createStackNavigator();
export default function HomeStackNavgator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routeNames.HOME} component={HomeScreen} />
      <Stack.Screen
        name={routeNames.EVNET_DETAIL}
        component={EventDetailsScreen}
      />
      <Stack.Screen name={routeNames.CHECKOUT} component={ChcekoutScreen} />
    </Stack.Navigator>
  );
}
