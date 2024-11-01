import * as React from "react";
import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native";

export default function WelcomeScreen() {
  return (
    <ScrollView indicatorStyle={"white"} style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
});
