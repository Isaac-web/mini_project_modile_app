import { StyleSheet, Text, View } from "react-native";
import React, { createContext } from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./navigation/AuthStackNavigator";

import TabNavigator from "./navigation/TabNavigator";
import { useState } from "react";
import theme from "./navigation/theme";

export const AppContext = createContext();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <AppContext.Provider value={{ loggedIn, setLoggedIn }}>
      <NavigationContainer>
        <Provider>
          {loggedIn ? <TabNavigator /> : <AuthStackNavigator />}
        </Provider>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({});
