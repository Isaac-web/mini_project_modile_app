import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import AppSlider from "../components/Slider/AppSlider";
import Screen from "./Screen";
import { colors } from "../config.json";
import data from "../data";

import SearchBar from "../components/SearchBar";
import Text from "./../components/AppText";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import { useNavigation } from "@react-navigation/native";
import routeNames from "../navigation/routeNames";

export default function HomeScreen() {
  return (
    <Screen>
      <SearchBar
        onSort={() => alert("This feature is yet to be implemented")}
      />
      <ScrollView style={{ paddingBottom: 100 }}>
        <Featured />
        <NearYouLocation />
      </ScrollView>
    </Screen>
  );
}

const SectionHeader = ({ title, actionText = "See All" }) => {
  return (
    <View style={sectionHeaderStyles.textContainer}>
      <Text style={sectionHeaderStyles.text}>{title}</Text>
      <Text style={sectionHeaderStyles.seeAllText}>{actionText}</Text>
    </View>
  );
};

const Featured = () => {
  return (
    <View style={featureStyle.container}>
      <SectionHeader title={"Featured"} />
      <AppSlider />
      <View style={{ paddingHorizontal: 8 }}>
        <Trending />
      </View>
    </View>
  );
};

const Trending = () => {
  const navigation = useNavigation();
  return (
    <View style={featureStyle.container}>
      <SectionHeader title={"Trending"} />
      <ScrollView horizontal>
        {data.events.map((item, index) => (
          <View style={{ marginRight: 20 }}>
            <HorizontalScrollCard
              key={index.toString()}
              imageUri={item.image}
              title={item.title}
              category={item.category}
              location={item.location}
              onPress={() => navigation.navigate(routeNames.EVNET_DETAIL)}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const NearYouLocation = () => {
  const data = [
    {
      title: "DJ Osocity",
      category: "Music",
      location: "Accra, Spintex",
      image: require("../assets/images/calendar-image.jpg"),
    },
    {
      title: "DJ Osocity",
      category: "Music",
      location: "Accra, Spintex",
      image: require("../assets/images/location-image.jpg"),
    },
    {
      title: "DJ Osocity",
      category: "Music",
      location: "Accra, Spintex",
      image: require("../assets/images/expore-image.jpg"),
    },
  ];

  return (
    <View style={featureStyle.container}>
      <SectionHeader title={"Near Your Location"} />
      <ScrollView horizontal style={{ paddingHorizontal: 10 }}>
        {data.map((item, index) => (
          <View style={{ marginRight: 20 }}>
            <HorizontalScrollCard
              key={index.toString() + item.title}
              imageUri={item.image}
              title={item.title}
              category={item.category}
              location={item.location}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const featureStyle = StyleSheet.create({
  container: {},
});

const sectionHeaderStyles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: 30,
  },
  text: {
    color: colors.dark,
    fontWeight: "bold",
    fontSize: 18,
  },
  seeAllText: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 16,
  },
});

const styles = StyleSheet.create({});
