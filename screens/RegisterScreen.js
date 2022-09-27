import { StyleSheet, View, ScrollView } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Headline } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors } from "../config.json";
import Button from "../components/AppButton";
import FormInput from "../components/AppFormInput";
import AppSubmitButton from "../components/AppSubmitButton";
import Form from "../components/AppForm";

export default function RegisterScreen() {
  const handleSignUp = (data) => {
    console.log(data);
  };

  const validationschema = Yup.object().shape({
    name: Yup.string().min(3).max(150).required().label("Name"),
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().min(7).max(150).required().label("Password"),
    confirmPassword: Yup.string().min(7).max(150).required().label("Password"),
    confirmPassword: Yup.string()
      .min(7)
      .max(150)
      .required()
      .label("Confirm Password"),
  });
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Headline style={styles.headline}>Sign Up</Headline>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSignUp}
            validationSchema={validationschema}
          >
            {() => (
              <>
                <View style={styles.textInputContainer}>
                  <FormInput icon="account" name="name" placeholder="Name" />
                </View>
                <View style={styles.textInputContainer}>
                  <FormInput
                    name="email"
                    icon="email"
                    keyboardType="email-address"
                    placeholder="Email"
                  />
                </View>
                <View style={styles.textInputContainer}>
                  <FormInput
                    name="password"
                    icon="lock"
                    inputType="password"
                    placeholder="Password"
                    secureTextEntry
                  />
                </View>
                <View style={styles.textInputContainer}>
                  <FormInput
                    name="confirmPassword"
                    icon="lock"
                    inputType="password"
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                  />
                </View>
                <View style={styles.signUpButtonContainer}>
                  <AppSubmitButton />
                </View>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 40,
    maxWidth: 400,
  },
  descriptionText: {
    fontSize: 20,
    marginBottom: 20,
  },
  headline: {
    color: colors.black,
    fontSize: 30,
  },
  logo: {
    height: 100,
    width: 100,
    backgroundColor: colors.primary,
    borderRadius: 50,
    marginTop: 50,
    marginBottom: 30,
  },
  signUpButtonContainer: {
    width: "100%",
  },
  textInputContainer: {
    marginBottom: 20,
    width: "100%",
  },
});
