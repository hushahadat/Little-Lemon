import LittleLemonFooter from "@/components/LittleLemonFooter";
import LittleLemonHeader from "@/components/LittleLemonHeader";
import WelcomeScreen from "@/components/WelcomeScreen";
import MenuItem from "@/components/MenuItem";
// import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MenuSectionList from "@/components/MenuSectionList";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        <WelcomeScreen />
        {/* <MenuSectionList /> */}
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  footerContainer: { backgroundColor: "#333333" },
});
