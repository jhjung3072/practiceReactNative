import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import ConfirmOrderItem from "../components/ConfirmOrderItem";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

const ConfirmOrder = () => {
  const navigate = useNavigation();

  const cartItems = [
    {
      name: "sample item",
      image:
        "https://i.pinimg.com/originals/ab/94/af/ab94afad0d4b0ff2340fbc6490c28c3e.png",
      product: "jghhjkafsdasf",
      stock: 3,
      price: 4543253,
      quantity: 2,
    },
    {
      name: "sample item",
      image:
        "https://i.pinimg.com/originals/ab/94/af/ab94afad0d4b0ff2340fbc6490c28c3e.png",
      product: "asrtgtr",
      stock: 3,
      price: 4543253,
      quantity: 2,
    },
    {
      name: "sample item",
      image:
        "https://i.pinimg.com/originals/ab/94/af/ab94afad0d4b0ff2340fbc6490c28c3e.png",
      product: "jghhjkafsdfsdsdasf",
      stock: 3,
      price: 4543253,
      quantity: 2,
    },
    {
      name: "sample item",
      image:
        "https://i.pinimg.com/originals/ab/94/af/ab94afad0d4b0ff2340fbc6490c28c3e.png",
      product: "ett6trdf",
      stock: 3,
      price: 4543253,
      quantity: 2,
    },
  ];

  const itemsPrice = 40000;
  const shippingCharges = itemsPrice > 10000 ? 0 : 200;
  const tax = Number((0.18 * itemsPrice).toFixed());
  const totalAmount = itemsPrice + shippingCharges + tax;
  return (
    <View style={defaultStyle}>
      <Header back={true} />
      {/* Heading */}
      <Heading
        containerStyle={{
          paddingTop: 70,
        }}
        text1="Confirm"
        text2="Order"
      />

      <View
        style={{
          paddingVertical: 20,
          flex: 1,
        }}
      >
        <ScrollView>
          {cartItems.map((i) => (
            <ConfirmOrderItem
              key={i.product}
              price={i.price}
              image={i.image}
              name={i.name}
              quantity={i.quantity}
            />
          ))}
        </ScrollView>
      </View>

      <PriceTag heading={"Subtotal"} value={itemsPrice} />
      <PriceTag heading={"Shipping"} value={shippingCharges} />
      <PriceTag heading={"Tax"} value={tax} />
      <PriceTag heading={"Total"} value={totalAmount} />

      <TouchableOpacity
        onPress={() =>
          navigate.navigate("payment", {
            itemsPrice,
            shippingCharges,
            tax,
            totalAmount,
          })
        }
      >
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 10,
          }}
          textColor={colors.color2}
          icon={"chevron-right"}
        >
          Payment
        </Button>
      </TouchableOpacity>
    </View>
  );
};
const PriceTag = ({ heading, value }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 5,
    }}
  >
    <Text style={{ fontWeight: "800" }}>{heading}</Text>
    <Text>₹{value}</Text>
  </View>
);

export default ConfirmOrder;
