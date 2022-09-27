import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../config.json/";

import { Button, Text } from "../components";
import routeNames from "../navigation/routeNames";
import { useNavigation } from "@react-navigation/native";

export default function WelcomScreen() {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate(routeNames.LOGIN);
  };

  const handleSignUp = () => {
    navigation.navigate(routeNames.REGISTER);
  };

  const handleGoogleAuth = () => {
    console.log("Calling O-Auth...");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logo} />
        <Text style={styles.sloganText}>One ticket for endless memories</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Button onPress={handleLogin} title="Login" />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={handleSignUp}
            style={styles.signUpButton}
            title="Sign Up"
          />
        </View>

        <Text style={styles.continueWithText}>or continue with</Text>

        <View styles={styles.buttonsContainer}>
          <Button
            labelStyle={styles.googleButtonTextStyle}
            onPress={handleGoogleAuth}
            title="Google"
            mode={"outlined"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 70,
    width: "100%",
  },
  buttonsContainer: {
    width: "100%",
    marginBottom: 100,
  },
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column-reverse",
    paddingHorizontal: 15,
  },
  continueWithText: {
    color: colors.medium,
    textAlign: "center",
    marginVertical: 20,
    marginBottom: 15,
  },
  googleButton: {
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.light,
    flexDirection: "row",
  },
  googleButtonTextStyle: {
    color: colors.dark,
  },
  googleIconContainer: {
    transform: [{ scale: 0.6 }],
  },
  logo: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginBottom: 12,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    top: 100,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  signUpButton: {
    backgroundColor: colors.secondary,
  },
  sloganText: {
    color: colors.medium,
    textAlign: "center",
    fontSize: 18,
  },
});
