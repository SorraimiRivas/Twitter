import React from "react";
import { View, Text } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

type IconButtonProp = {
  icon: React.ComponentProps<typeof EvilIcons>["name"];
  text?: number | string;
};

const IconButton = ({ icon, text }: IconButtonProp) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <EvilIcons name={icon} size={22} color="grey" />
      <Text style={{ fontSize: 12, color: "grey" }}>{text}</Text>
    </View>
  );
};

export default IconButton;
