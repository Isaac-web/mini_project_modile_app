import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "./AppButton";
import { useFormikContext } from "formik";

export default function AppSubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <Button title={title || "Submit"} onPress={handleSubmit} />;
}
