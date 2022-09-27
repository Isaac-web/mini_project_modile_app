import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";

import config from "../config.json";
import Text from "../components/AppText";
import Screen from "./Screen";
import Container from "../components/Container";
import { RadioButton } from "react-native-paper";
import { useState } from "react";
import AppButton from "../components/AppButton";
import AppDialog from "../components/AppDialog";
import { useNavigation } from "@react-navigation/native";
import routeNames from "../navigation/routeNames";

export default function ChcekoutScreen() {
  const [ticketType, setticketType] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();

  const ticketTypes = [
    {
      price: 80,
      title: "Regular",
      value: "regular",
      onPress: () => {
        setticketType("regular");
        setTotal(80);
      },
    },
    {
      price: 120,
      title: "VIP",
      value: "vip",
      onPress: () => {
        setticketType("vip");
        setTotal(120);
      },
    },
    {
      price: 180,
      title: "VVIP",
      value: "vvip",
      onPress: () => {
        setticketType("vvip");
        setTotal(180);
      },
    },
  ];

  const paymentMethods = [
    {
      title: "MTN Momo",
      value: "mtn_momo",
      onPress: () => {
        setPaymentMethod("mtn_momo");
      },
    },
    {
      title: "Vodafone Cash",
      value: "vodafone_cash",
      onPress: () => {
        setPaymentMethod("vodafone_cash");
      },
    },
    {
      title: "Credit Card",
      value: "credit_card",
      onPress: () => {
        setPaymentMethod("credit_card");
      },
    },
  ];

  const handleDone = () => {
    setOpen(false);
    navigation.navigate(routeNames.HOME);
  };

  return (
    <Screen>
      <Container>
        <Text style={{ fontSize: 20, marginBottom: 10, marginTop: 30 }}>
          Total
        </Text>
        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>
            Ghc {total}.00
          </Text>
          <View></View>
        </View>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>Ticket Type</Text>
        {ticketTypes.map((t) => (
          <AppRadioList
            label={t.title}
            value={t.value}
            onPress={t.onPress}
            status={ticketType}
          />
        ))}
        <Text style={{ fontSize: 20, marginBottom: 20, marginTop: 30 }}>
          Payment Method
        </Text>
        {paymentMethods.map((p) => (
          <AppRadioList
            label={p.title}
            value={p.value}
            onPress={p.onPress}
            status={paymentMethod}
          />
        ))}

        <AppButton
          title="Purchase"
          uppercase={false}
          style={{ marginTop: 30 }}
          onPress={() => setOpen(true)}
        />
      </Container>
      <AppDialog
        title="Success. Ticket has been purchased."
        visible={open}
        secondaryActionTitle="Close"
        onSecondaryAction={handleDone}
        onDismiss={handleDone}
        Banner={
          <Image
            style={{ height: "100%", width: "100%" }}
            source={require("../assets/icons/check.png")}
          />
        }
      />
    </Screen>
  );
}

const AppRadioList = ({ image, label, status, onPress, value }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <Image
          style={{
            width: 40,
            height: 40,
            marginrigh: 5,
            backgroundColor: image ? "rgba(0, 0, 0, 0)" : config.colors.light,
          }}
        />
        <View
          style={{
            width: "80%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text>{label}</Text>
          <RadioButton
            value={value}
            status={status === value ? "checked" : "unchecked"}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
