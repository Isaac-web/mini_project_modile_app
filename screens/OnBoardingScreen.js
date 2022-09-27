import React from "react";
import OnBoardingSlider from "../components/OnBoardingSlider";
import { useNavigation } from "@react-navigation/native";
import routeNames from "../navigation/routeNames";
import { createStackNavigator } from "@react-navigation/stack";

const slides = [
  {
    title: "Exploring Nearby Upcoming And Nearby Events",
    text: "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. ",
    image: require("../assets/images/expore-image.jpg"),
  },
  {
    title: "Easily add events to your calendar.",
    text: "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. ",
    image: require("../assets/images/calendar-image.jpg"),
  },
  {
    title: "Instantly search for event around you with maps",
    text: "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. ",
    image: require("../assets/images/location-image.jpg"),
  },
];

export default function OnBoardingScreen({ onEnd }) {
  return <OnBoardingSlider slides={slides} onEnd={onEnd} />;
}
