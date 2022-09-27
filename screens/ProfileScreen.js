import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import config from "../config.json";
import Screen from "./Screen";
import Text from "../components/AppText";
import Container from "../components/Container";
import { List } from "react-native-paper";
import AppButton from "../components/AppButton";
import data from "../data";
import { useState } from "react";
import AppDialog from "../components/AppDialog";
import routeNames from "../navigation/routeNames";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "../App";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const [verification, setVerification] = useState(false);
  const { setLoggedIn } = useContext(AppContext);

  const handleVerification = () => {
    setVerification(true);
  };

  return (
    <Screen>
      <ScrollView>
        <Container>
          <View style={styles.profileInfo}>
            <Image
              style={styles.profileImage}
              resizeMode="cover"
              source={require("../assets/images/profileImage.jpg")}
            />
            <View>
              <Text style={styles.name}>Isaac Kanyiti</Text>
              <Text style={styles.email}>kanytakiy@gmail.com</Text>
            </View>
          </View>

          <List.Section title="Tickets Reserved">
            {data.tickets.map((t) => (
              <TouchableOpacity
              // onPress={navigation.navigate(routeNames.CHECKOUT)}
              >
                <List.Item
                  key={t.id.toString()}
                  title={t.title}
                  left={() => (
                    <View
                      style={{
                        width: 40,
                        height: 40,
                        backgroundColor: t.iconColor,
                        borderRadius: 30,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <FontAwesome name="ticket" size={24} color="black" />
                    </View>
                  )}
                />
              </TouchableOpacity>
            ))}
          </List.Section>

          <List.Section title="Tickets Purchased">
            {data.ticketsPurchased.map((t) => (
              <TouchableOpacity onPress={handleVerification}>
                <List.Item
                  key={t.id.toString()}
                  title={t.title}
                  left={() => (
                    <View
                      style={{
                        width: 40,
                        height: 40,
                        backgroundColor: t.iconColor,
                        borderRadius: 30,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <FontAwesome name="ticket" size={24} color="black" />
                    </View>
                  )}
                />
              </TouchableOpacity>
            ))}
          </List.Section>

          <List.Section style={styles.notification} title="Notifications">
            {data.notification.map((n) => (
              <List.Item
                title={n.title}
                left={() => (
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      backgroundColor: n.iconColor,
                      borderRadius: 30,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AntDesign name="bells" size={24} color="black" />
                  </View>
                )}
              />
            ))}
          </List.Section>

          <List.Item
            style={styles.settings}
            title={"Settings"}
            left={() => (
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "skyblue",
                  borderRadius: 30,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Feather name="settings" size={24} color="black" />
              </View>
            )}
          />

          <AppButton
            style={styles.logoutButton}
            title="Logout"
            onPress={() => setLoggedIn(false)}
          />
        </Container>
        {verification && (
          <AppDialog
            visible={verification}
            title={"Scan to Verifiy"}
            secondaryActionTitle="Close"
            onSecondaryAction={() => setVerification(false)}
            onDismiss={() => setVerification(false)}
            Banner={
              <Image
                style={{ width: "100%", height: "100%" }}
                resizeMode={"contain"}
                source={require("../assets/icons/qr-code.png")}
              />
            }
          />
        )}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  profileInfo: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 80,
    height: 80,
    backgroundColor: config.colors.light,
    borderRadius: 50,
    marginRight: 20,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
  },
  email: {
    color: config.colors.medium,
  },
  logoutButton: {
    backgroundColor: "rgba(255, 0, 0, 0.8)",
    marginVertical: 50,
  },
  notification: {
    marginTop: 20,
  },
  settings: {
    marginTop: 20,
  },
});
