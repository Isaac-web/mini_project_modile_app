import { StyleSheet, Text } from "react-native";
import React from "react";
import TextInput from "./AppTextInput";
import { colors } from "./../config.json";

import { useFormikContext } from "formik";

export default function AppFormInput({ name, ...rest }) {
  const { handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <TextInput
        onChangeText={handleChange(name)}
        error={touched[name] && errors[name]}
        {...rest}
      />
      {touched[name] && errors[name] ? (
        <Text style={styles.warningText}>{errors[name]}</Text>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  warningText: {
    color: colors.danger,
    paddingHorizontal: 10,
  },
});
