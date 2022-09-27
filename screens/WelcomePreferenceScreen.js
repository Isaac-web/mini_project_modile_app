import { StyleSheet, Dimensions, View } from "react-native";
import Screen from "./Screen";
import { PreferenceList, Button } from "../components";

const items = [
  { label: "Art", _id: "1", icon: "draw" },
  { label: "Music", _id: "2", icon: "music-note-eighth" },
  { label: "Sports", _id: "3", icon: "volleyball" },
  { label: "Food", _id: "4", icon: "food" },
  { label: "Party", _id: "5", icon: "party-popper" },
  { label: "Technology", _id: "6", icon: "laptop" },
  { label: "Comedy", _id: "7", icon: "music-note-eighth" },
  { label: "Education", _id: "8", icon: "book-education-outline" },
];

const { SCREEN_WIDTH } = Dimensions.get("screen");
export default function WelcomePreferenceScreen() {
  return (
    <Screen style={styles.screen}>
      <PreferenceList items={items} />
      <View style={styles.buttonContainer}>
        <Button title="Next" uppercase={false} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    position: "absolute",
    bottom: 20,
    paddingHorizontal: 10,
    // backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  screen: {
    paddingBottom: 90,
  },
});
