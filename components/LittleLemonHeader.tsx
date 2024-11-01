import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

const LittleLemonHeader = () => {
  return (
    <View style={headerStyle.container}>
      <Text style={headerStyle.headerText}>Welcome to Little Lemon</Text>
    </View>
  );
};
export default LittleLemonHeader;

const headerStyle = StyleSheet.create({
  container: { flex: 0.2, backgroundColor: "#EE9972" },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
});


