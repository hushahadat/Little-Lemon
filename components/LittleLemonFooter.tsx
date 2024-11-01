import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function LittleLemonFooter() {
  return (
    <View style={footerStyle.container}>
      <Text numberOfLines={1} style={footerStyle.footerText}>
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  );
}

const footerStyle = StyleSheet.create({
  container: {
    backgroundColor: "#EE9972",
    marginBottom: 10,
  },
  footerText: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
    fontStyle: "italic",
  },
});
