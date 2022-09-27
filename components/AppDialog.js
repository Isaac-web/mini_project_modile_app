import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Portal, Dialog } from "react-native-paper";

import config from "./../config.json";
import Screen from "../screens/Screen";
import Button from "../components/AppButton";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");
export default function CheckoutScreen({
  primaryActionTitle,
  secondaryActionTitle,
  Banner,
  onPrimaryAction,
  onSecondaryAction,
  title,
  text,
  visible = false,
  onDismiss,
}) {
  return (
    <Screen>
      <Portal>
        <Dialog visible={visible} style={styles.dialog} onDismiss={onDismiss}>
          <Dialog.Content style={styles.dialogContent}>
            <View
              style={[
                styles.animationContainer,
                {
                  backgroundColor: Banner
                    ? "rgba(0, 0, 0, 0)"
                    : config.colors.light,
                },
              ]}
            >
              {Banner}
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.dialogText}>{text}</Text>

            {primaryActionTitle && (
              <View style={{ width: "100%", marginBottom: 20 }}>
                <Button
                  title={primaryActionTitle}
                  onPress={onPrimaryAction}
                  mode="outlined"
                  uppercase={false}
                />
              </View>
            )}

            {secondaryActionTitle && (
              <View style={{ width: "100%" }}>
                <Button
                  title={secondaryActionTitle}
                  onPress={onSecondaryAction}
                  uppercase={false}
                />
              </View>
            )}
          </Dialog.Content>
        </Dialog>
      </Portal>
    </Screen>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    height: 120,
    width: 120,
    backgroundColor: config.colors.light,
    marginBottom: 20,
  },
  dialog: {
    borderRadius: 0,
    borderRadius: 12,
    overflow: "hidden",
    height: SCREEN_WIDTH,
  },
  dialogContent: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
  dialogText: {
    marginBottom: 12,
    textAlign: "center",
  },
});
