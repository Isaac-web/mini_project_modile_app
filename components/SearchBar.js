import { StyleSheet, TouchableOpacity, View, TextInput } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../config.json";

export default function SearchBar({ onChangeText, onSort }) {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={"Search..."}
          onChangeText={onChangeText}
        />
        <MaterialCommunityIcons
          name="search-web"
          size={30}
          color={colors.primary}
        />
      </View>

      <TouchableOpacity onPress={onSort}>
        <View style={styles.filterContainer}>
          <MaterialCommunityIcons
            name="filter-outline"
            size={24}
            color={colors.primary}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  filterContainer: {
    height: 46,
    width: 46,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 10,
  },
  inputContainer: {
    height: 46,
    width: "80%",
    backgroundColor: colors.white,
    backgroundColor: colors.light,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
});
