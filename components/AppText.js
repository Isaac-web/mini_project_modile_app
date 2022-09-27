import { StyleSheet, Text, Platform } from "react-native";

export default function AppText({ children, weigth, style, ...rest }) {
  return (
    <Text style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  );
}

const fontFamily = Platform.select({
  ios: {
    fontFamily: "Avenir",
  },
  android: {
    fontFamily: "Roboto",
  },
});
const styles = StyleSheet.create({
  ...fontFamily,
  text: {
    fontSize: 14,
  },
});
