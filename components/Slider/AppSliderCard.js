import { Dimensions, ImageBackground, StyleSheet, View } from "react-native";
import React from "react";
import Text from "../AppText";
import Button from "../AppButton";
import { colors } from "../../config.json";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");
export default function AppSliderCard({
  title,
  onAction,
  buttonTitle = "Book Now",
  imageUri,
}) {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImage} source={imageUri}>
        <Text style={styles.title}>{title}</Text>
        <View style={{ width: 120 }}>
          <Button
            uppercase={false}
            onPress={onAction}
            style={styles.button}
            title={buttonTitle}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 130,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  container: {
    width: SCREEN_WIDTH * 0.95,
    height: SCREEN_WIDTH * 0.45,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: 26,
    color: colors.white,
    marginBottom: 15,
    fontWeight: "bold",
  },
});
