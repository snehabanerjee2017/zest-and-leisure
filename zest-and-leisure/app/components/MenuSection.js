import React from "react";
import { View, Text } from "react-native";
import itemStyles from "../styles/itemStyles";

const MenuSection = ({ title, sections }) => (
  <View style={itemStyles.textContainer}>
    <Text style={itemStyles.title}>{title}</Text>
    <View style={itemStyles.sectionContainer}>
      {Object.entries(sections).map(([sectionTitle, items]) => (
        <View key={sectionTitle} style={itemStyles.card}>
          <Text style={itemStyles.cardTitle}>{sectionTitle}</Text>
          {items.map((item) => (
            <Text key={item} style={itemStyles.itemText}>
              • {item}
            </Text>
          ))}
        </View>
      ))}
    </View>
  </View>
);

export default MenuSection;
