import React, { useState } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import theme from "./../theme";
import AuthStackNavigator from "../navigation/AuthStackNavigator";

import OnBoardingScreen from "./OnBoardingScreen";

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <NavigationFlow />
    </PaperProvider>
  );
}

const NavigationFlow = () => {
  const [newUser, setNewUser] = useState(true);
  if (newUser) return <OnBoardingScreen onEnd={() => setNewUser(false)} />;
  else return <AuthStackNavigator />;
};
