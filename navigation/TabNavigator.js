import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import routeNames from "./routeNames";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import ProfileScreen from "../screens/ProfileScreen";
import ProfileStack from "./ProfileStack";
import HomeStackNavgator from "./HomeStackNavgator";
import config from "../config.json";

const BottomTap = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <BottomTap.Navigator
      screenOptions={{
        tabBarInactiveTintColor: config.colors.medium,
        tabBarActiveTintColor: config.colors.primary,
        headerShown: false,
      }}
    >
      <BottomTap.Screen
        name={routeNames.APP_HOME}
        component={HomeStackNavgator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTap.Screen
        name={routeNames.APP_PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </BottomTap.Navigator>
  );
}

const styles = StyleSheet.create({});
