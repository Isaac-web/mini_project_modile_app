import { StyleSheet, View, TouchableOpacity } from "react-native";
import Text from "../components/AppText";
import { TextInput, Button } from "../components";
import { colors } from "../config.json";
import { useContext } from "react";
import { AppContext } from "../App";

export default function LoginScreen() {
  const { setLoggedIn } = useContext(AppContext);
  return (
    <View style={styles.container}>
      <View style={styles.logo} />
      <Text style={styles.descriptionText}>Sign into your account</Text>
      <View style={styles.inputsContainer}>
        <View style={styles.textBoxContainer}>
          <TextInput
            icon="email"
            keyboardType="email-address"
            placeholder="email"
          />
        </View>
        <View style={styles.textBoxContainer}>
          <TextInput
            icon="account-lock"
            inputType="password"
            placeholder="password"
            secureTextEntry={true}
          />
        </View>
        <View>
          <Button title="Sign In" onPress={() => setLoggedIn(true)} />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    backgroundColor: colors.primary,
    height: 120,
    width: 120,
    borderRadius: 60,
    marginBottom: 40,
  },
  container: {
    width: "100%",
    flex: 1,
    paddingVertical: 50,
    alignItems: "center",
    paddingHorizontal: 20,
    maxWidth: 400,
  },
  descriptionText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.dark,
    marginBottom: 15,
  },
  forgotPassword: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  inputsContainer: {
    width: "100%",
  },
  textBoxContainer: {
    width: "100%",
    marginBottom: 20,
  },
});
