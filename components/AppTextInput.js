import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { colors } from "../config.json";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput as PaperTextInput, useTheme } from "react-native-paper";

export default function AppTextInput({
  icon,
  rightIcon,
  onChangeText,
  mode = "outlined",
  style,
  ...rest
}) {
  const { colors } = useTheme();

  return (
    <PaperTextInput
      mode="outlined"
      left={icon && <PaperTextInput.Icon name={icon} />}
      right={rightIcon && <PaperTextInput.Icon name={rightIcon} />}
      style={[styles.paperInput, style]}
      onChangeText={onChangeText}
      theme={{ roundness: 30 }}
      activeOutlineColor={colors.primary}
      outlineColor={colors.light}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    borderWidth: 2,
    borderRadius: 60,
    borderColor: colors.light,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  paperInput: {
    width: "100%",
  },
  textInput: {
    fontSize: 16,
    paddingHorizontal: 10,
    width: "100%",
  },
  active: {
    borderColor: colors.medium,
  },
});
