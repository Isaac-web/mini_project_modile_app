import { Dimensions, Image, StyleSheet, View } from "react-native";
import React from "react";
import { Shadow } from "react-native-shadow-2";

import { Button, Text } from ".";
import { colors } from "../config.json";

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("screen");
export default function OnBoardingSlide({
  title,
  text,
  image,
  index: dotIndex,
  onNext,
  onSkip,
  slidesCount,
}) {
  const range = [1, 2, 3];
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} resizeMode="cover" />
      <View style={styles.bottomContainer}>
        <View style={styles.tipBar} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
        <View style={styles.indicatorContainer}>
          {range.map((map, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                {
                  backgroundColor:
                    index == dotIndex ? colors.primary : colors.light,
                },
              ]}
            />
          ))}
        </View>
        <View style={styles.buttonsWrapper}>
          <Button
            title="Skip"
            style={styles.skipButton}
            labelStyle={styles.skipButtonText}
            uppercase={false}
            onPress={onSkip}
          />
          <Button
            title="Next"
            style={styles.nextButton}
            uppercase={false}
            onPress={onNext}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    backgroundColor: colors.white,
    bottom: 100,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.5,
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
  },
  buttonsWrapper: {
    width: "100%",
  },
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    position: "relative",
  },
  image: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.6,
  },
  indicator: {
    height: 10,
    width: 10,
    backgroundColor: colors.primary,
    borderRadius: 10,
    marginHorizontal: 8,
  },
  indicatorContainer: {
    marginVertical: 15,
    flexDirection: "row",
  },

  nextButtonText: {
    fontWeight: "bold",
  },
  skipButton: {
    backgroundColor: colors.transparent,
    marginBottom: 15,
  },
  skipButtonText: {
    color: colors.primary,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    color: colors.dark,
    textAlign: "center",
  },
  textContainer: {
    // backgroundColor: "red",
    red: "100%",
    height: 150,
  },
  tipBar: {
    height: 5,
    width: SCREEN_WIDTH * 0.15,
    marginBottom: 20,
    marginTop: -10,
    backgroundColor: colors.light,
    borderRadius: 5,
  },
  title: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
});
