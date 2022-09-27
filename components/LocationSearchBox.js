import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TextInput from "./AppTextInput";
import { colors } from "../config.json";
import AppText from "./AppText";

export default function LocationSearchBox({ onChangeText, locationText }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.locationText}>{locationText}</AppText>
      <TextInput
        placeholder="Search..."
        style={styles.textInput}
        outlineColor={colors.light}
        activeOutlineColor={colors.medium}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    elevation: 2,
    width: "100%",
    borderRadius: 15,
    padding: 15,
    height: 140,
    justifyContent: "center",
  },
  locationText: {
    fontSize: 15,
    paddingHorizontal: 8,
    paddingBottom: 10,
  },
  textInput: {
    backgroundColor: colors.light,
    paddingHorizontal: 10,
  },
});
