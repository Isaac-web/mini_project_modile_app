import { DefaultTheme } from "@react-navigation/native";
import { colors } from "../config.json";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondary: colors.secondary,
    background: colors.white,
  },
};

export default theme;
