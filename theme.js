import { DefaultTheme } from "react-native-paper";
import { colors } from "./config.json";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    secondary: "red",
    white: colors.white,
  },
};

export default theme;
