import { View, Text, SectionList, StyleSheet } from "react-native";
import React from "react";
import { menuSectionItemsToDisplay } from "@/static/menu";

const Item = ({ name, price }: any) => {
  return (
    <View style={menuStyles.innerContainer}>
      <Text style={menuStyles.itemText}>{name}</Text>
      <Text style={menuStyles.itemText}>{price}</Text>
    </View>
  );
};

const MenuSectionList = () => {
  const renderItem = ({ item }: any) => (
    <Item name={item.name} price={item.price} />
  );

  const renderSectionHeader = ({ section: { title } }: any) => (
    <View style={menuStyles.headerStyle}>
      <Text style={menuStyles.sectionHeader}>{title}</Text>
    </View>
  );
  return (
    <View style={menuStyles.container}>
      <SectionList
        // keyExtractor={(item, index) => item + index}
        sections={menuSectionItemsToDisplay}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      ></SectionList>
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
  headerStyle: {
    backgroundColor: "#F4CE14",
  },
  sectionHeader: {
    color: "black",
    fontSize: 26,
    flexWrap: "wrap",
    textAlign: "center",
  },
});

export default MenuSectionList;
