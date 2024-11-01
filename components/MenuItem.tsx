import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { menuItemsToDisplay } from "@/static/menu";

const MenuItem = () => {
  const renderItem = ({ item }: any) => (
    <View style={menuStyles.innerContainer}>
      <Text style={menuStyles.itemText}>{item.name}</Text>
      <Text style={menuStyles.itemText}>{item.price}</Text>
    </View>
  );

  return (
    <View style={menuStyles.container}>
      <FlatList
        data={menuItemsToDisplay}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      ></FlatList>
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 20,
  },
});

export default MenuItem;
