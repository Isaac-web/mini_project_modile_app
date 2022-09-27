import { useEffect, useState } from "react";
import MapView from "react-native-maps";
import Screen from "./Screen";
import { StyleSheet, View, Dimensions } from "react-native";
import * as Location from "expo-location";
import { LocationSearchBox, Button } from "./../components";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");
export default function MapScreen() {
  const [mapView, setMapView] = useState(null);

  const getLocationPermision = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted")
      return alert("Please grant premission use location.");
  };

  const handleRegionChange = (mapView) => {
    setMapView(mapView);
  };

  const getLocation = async () => {
    const { coords } = await Location.getCurrentPositionAsync();
    if (!coords) return;

    setMapView({
      longitude: coords.longitude,
      latitude: coords.latitude,
      longitudeDelta: 0.0421,
      latitudeDelta: 0.0922,
    });
  };

  useEffect(() => {
    getLocationPermision();
    getLocation();
  }, []);

  return (
    <Screen>
      <View style={styles.searchBoxContainer}>
        <LocationSearchBox locationText={"Accra, Ghana"} />
      </View>
      <MapView
        region={mapView}
        onRegionChange={handleRegionChange}
        style={styles.mapView}
      />

      <View style={styles.buttonContainer}>
        <Button title="Add My Location" uppercase={false} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  mapView: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  searchBoxContainer: {
    width: SCREEN_WIDTH - SCREEN_WIDTH * 0.06,
    position: "absolute",
    top: 50,
    left: SCREEN_WIDTH * 0.03,
    zIndex: 10,
  },
  buttonContainer: {
    width: SCREEN_WIDTH - SCREEN_WIDTH * 0.06,
    position: "absolute",
    bottom: 20,
    left: SCREEN_WIDTH * 0.03,
    zIndex: 10,
  },
});
