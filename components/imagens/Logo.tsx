import React from "react";
import { Image, View } from "react-native";

export default function Logo() {
  return (
    <View style={{}}>
      <Image
        source={require("../../assets/images/Logo.png")}
        style={{ width: 165, height: 46 }}
      />
    </View>
  );
}
