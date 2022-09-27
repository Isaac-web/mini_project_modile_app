import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";
import AppSliderCard from "./AppSliderCard";

const data = [
  {
    title: "International concert",
    imageUri: require("../../assets/images/expore-image.jpg"),
  },
  {
    title: "Christmas comdey concert",
    imageUri: require("../../assets/images/location-image.jpg"),
  },
  {
    title: "Premier League",
    imageUri: require("../../assets/images/calendar-image.jpg"),
  },
];
const { width: SCREEN_WIDTH } = Dimensions.get("screen");
export default function AppSlider() {
  return (
    <View style={{ paddingLeft: SCREEN_WIDTH * 0.025 }}>
      <Carousel
        loop
        autoPlay
        autoPlayInterval={3000}
        scrollAnimationDuration={1500}
        onSnapToItem={(index) => console.log(index)}
        width={SCREEN_WIDTH}
        height={SCREEN_WIDTH / 2}
        data={data}
        pagingEnabled
        snapEnabled
        renderItem={({ item }) => (
          <AppSliderCard title={item.title} imageUri={item.imageUri} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
