import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import OnBoardingSlide from "./OnBoardingSlide";
import Animated, {
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");
export default function OnBoardingSlider({ slides = [], onEnd }) {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index == slides.length - 1) onEnd();
    else setIndex((prev) => prev + 1);
  };

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateX: index * -SCREEN_WIDTH }] },
      ]}
    >
      {slides.map((slide, index) => (
        <OnBoardingSlide
          key={index.toString()}
          title={slide.title}
          text={slide.text}
          image={slide.image}
          onNext={handleNext}
          index={index}
          slidesCount={slides.length}
        />
      ))}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});
