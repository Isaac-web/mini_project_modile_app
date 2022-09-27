import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Container({ children, padding = true }) {
  return (
    <View style={{ paddingHorizontal: padding ? 20 : 0 }}>{children}</View>
  );
}

const styles = StyleSheet.create({});
