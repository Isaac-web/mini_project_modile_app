import { StyleSheet, View, Dimensions, TouchableOpacity } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Text from "../AppText";
import { colors } from "../../config.json";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");
export default function AppTileOutline({
  style,
  label,
  icon,
  Icon,
  onPress,
  tintColor,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        {Icon}
        {!Icon && icon && (
          <MaterialCommunityIcons
            name={icon}
            size={65}
            color={tintColor || colors.primary}
          />
        )}
        <Text style={[styles.text, { color: tintColor || colors.primary }]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const TILE_SIZE = SCREEN_WIDTH * 0.45;
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.light,
    width: TILE_SIZE,
    height: TILE_SIZE,
    borderRadius: TILE_SIZE * 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 12,
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
