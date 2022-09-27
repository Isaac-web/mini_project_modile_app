import { StyleSheet, TouchableOpacity, Image, View } from "react-native";
import React from "react";
import Text from "./AppText";
import { colors } from "./../config.json";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function HorizontalScrollCard({
  imageUri,
  title,
  location,
  category,
  onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={imageUri} />
        <View style={styles.detailsContainer}>
          <Text numOfLines={2} style={styles.title}>
            {title}
          </Text>
          <View style={styles.chip}>
            <Text style={styles.chipText}>{category}</Text>
          </View>
          <View style={styles.locationDetailsContainer}>
            <MaterialCommunityIcons
              name="location-enter"
              size={20}
              color={colors.medium}
            />
            <Text style={styles.locationText}>{location}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 220,
    borderWidth: 1,
    borderColor: colors.light,
    borderRadius: 20,
    overflow: "hidden",
  },
  chip: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderWidth: 1,
    borderColor: colors.primary,
    width: 80,
    padding: 5,
    paddingHorizontal: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 5,
  },
  chipText: {
    color: colors.primary,
  },
  detailsContainer: {
    padding: 10,
    flex: 1,
    padding: 15,
  },
  image: {
    width: "100%",
    height: 180,
  },
  locationDetailsContainer: {
    flexDirection: "row",
  },
  locationText: {
    color: colors.dark,
    marginLeft: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
  },
});
