import { StyleSheet, TouchableOpacity, View, Dimensions } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import { colors } from "./../config.json";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");
export default function AppMenuTile({ variant }) {
  return (
    <TouchableOpacity>
      <View style={[styles.container, { backgroundColor: "navy" }]}>
        <MaterialCommunityIcons
          name="music-note-eighth"
          color={"white"}
          size={65}
        />
        <AppText style={styles.containedVaraintText}>Music</AppText>
      </View>
    </TouchableOpacity>
  );
}

const TILE_SIZE = SCREEN_WIDTH * 0.4;
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    width: TILE_SIZE,
    height: TILE_SIZE,
    maxWidth: 250,
    maxHeight: 250,
    borderRadius: TILE_SIZE * 0.22,
  },
  containedVaraintText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
});
p;
