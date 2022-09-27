import { StyleSheet, View, FlatList } from "react-native";
import Tile from "./AppTile/AppTile";

export default function PreferenceList({ items = [] }) {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item._id}
      renderItem={({ item, index }) => (
        <View style={{ width: "50%", alignItems: "center", marginBottom: 18 }}>
          <Tile
            label={item.label}
            icon={item.icon}
            variant={index % 3 != 0 && "outlined"}
          />
        </View>
      )}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({});
