import { StyleSheet } from "react-native";
import AppTileContained from "./AppTileContained";
import AppTileOutlined from "./AppTileOutined";

import React from "react";

export default function AppTile({ icon, Icon, label, onPress, variant }) {
  if (variant === "outlined")
    return (
      <AppTileOutlined
        icon={icon}
        label={label}
        onPress={onPress}
        Icon={Icon}
      />
    );

  return (
    <AppTileContained icon={icon} label={label} onPress={onPress} Icon={Icon} />
  );
}

const styles = StyleSheet.create({});
