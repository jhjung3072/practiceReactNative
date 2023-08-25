import { View, Text } from "react-native";
import React from "react";

const Heading = ({ text1 = "Our", text2 = "products", containerStyle }) => {
  return (
    <View style={containerStyle}>
      <Text style={{ fontSize: 25 }}>{text1}</Text>
      <Text style={{ fontSize: 25, fontWeight: "900" }}>pro{text2}</Text>
    </View>
  );
};

export default Heading;