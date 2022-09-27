import { StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../config.json";
import { Button, TouchableRipple } from "react-native-paper";

export default function AppButton({
  title = "App Button",
  onPress,
  mode = "contained",
  uppercase = true,
  style,
  ...rest
}) {
  if (mode == "outlined") {
    return (
      <TouchableOpacity onPress={onPress}>
        <Button
          mode={mode}
          onPress={onPress}
          style={[styles.outlined, style]}
          uppercase={uppercase}
          {...rest}
        >
          {title}
        </Button>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Button
        mode={mode}
        style={[styles.button, style]}
        uppercase={uppercase}
        labelStyle={styles.text}
        {...rest}
      >
        {title}
      </Button>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: "100%",
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    fontSize: 20,
  },
  outlined: {
    borderRadius: 30,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.medium,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
