import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Text } from "../components";
import { colors } from "../config.json";
import MapView from "react-native-maps";
import Button from "../components/AppButton";
import config from "../config.json";
import data from "../data";
import AppDialog from "../components/AppDialog";
import { useNavigation } from "@react-navigation/native";
import routeNames from "../navigation/routeNames";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("screen");
export default function EventDetailsScreen({
  title = data.eventDetails.title,
  imageUri = data.eventDetails.backgroundImage,
  organizerName = data.eventDetails.organizer.name,
  organizerEmail = data.eventDetails.organizer.email,
  organizerImage,
  description = data.eventDetails.description,
  location,
  subtitle,
  similarEvents = [],
}) {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();

  const mapRegion = {
    longitude: 100,
    latitude: 100,
    longitudeDelta: 0.0421,
    latitudeDelta: 0.0922,
  };

  const handleReserveTicket = () => {
    setOpen(true);
  };

  const handlePurchaseTicket = () => {
    setOpen(false);
    navigation.navigate(routeNames.CHECKOUT);
  };

  return (
    <ScrollView>
      <ImageBackground style={styles.image} source={imageUri}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{organizerName}</Text>
        <Text style={styles.titleStamp}>{organizerName}</Text>
      </ImageBackground>

      <View style={styles.detailsContainer}>
        <View style={styles.organizerView}>
          <Image source={organizerImage} style={styles.organizerImage} />
          <View>
            <Text style={styles.organizerName}>{organizerName}</Text>
            <Text style={styles.organizerEmail}>{organizerEmail}</Text>
          </View>

          <View style={styles.description}>
            <Text>{}</Text>
          </View>
        </View>

        <Text style={styles.description}>{description}</Text>

        <MapView
          style={{
            width: "100%",
            height: SCREEN_HEIGHT * 0.25,
            marginBottom: 30,
          }}
          region={mapRegion}
        />
        <Button
          title="Reserve Ticket"
          uppercase={false}
          onPress={handleReserveTicket}
        />
      </View>
      {open && (
        <AppDialog
          onDismiss={() => setOpen(false)}
          visible={open}
          title="Your ticket has been secured."
          primaryActionTitle={"Okay"}
          secondaryActionTitle={"Purchase It Now"}
          Banner={
            <Image
              source={require("../assets/icons/ticket.png")}
              style={{ width: "100%", height: "100%" }}
              resizeMode={"contain"}
            />
          }
          onPrimaryAction={() => setOpen(false)}
          onSecondaryAction={handlePurchaseTicket}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  description: {
    color: colors.medium,
    fontSize: 14,
    marginBottom: 15,
    marginBottom: 30,
  },
  detailsContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  image: {
    height: SCREEN_HEIGHT * 0.4,
    backgroundColor: config.colors.light,
    justifyContent: "flex-end",
    padding: 20,
    marginBottom: 30,
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 40,
  },
  subtitle: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  organizerView: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 10,
  },
  organizerImage: {
    height: 70,
    width: 70,
    borderRadius: 40,
    backgroundColor: colors.light,
    marginRight: 10,
  },
  organizerName: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  organizerEmail: {
    color: colors.medium,
  },
  titleStamp: {
    color: "white",
    fontSize: 12,
  },
});
