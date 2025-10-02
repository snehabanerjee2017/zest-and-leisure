import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import itemStyles from "../styles/itemStyles";

const PricingSection = ({ title, prices, note_1, note_2 }) => {
  const navigation = useNavigation();

  return (
    <View style={itemStyles.textContainer}>
      <Text style={itemStyles.title}>{title}</Text>
      <View style={itemStyles.table}>
        <View style={itemStyles.tableHeader}>
          <Text style={itemStyles.cellHeader}>Size</Text>
          <Text style={itemStyles.cellHeader}>Price</Text>
          <Text style={itemStyles.cellHeader}>Servings</Text>
        </View>
        {prices.map((row) => (
          <View key={row.size} style={itemStyles.tableRow}>
            <Text style={itemStyles.cell}>{row.size}</Text>
            <Text style={itemStyles.cell}>{row.price}</Text>
            <Text style={itemStyles.cell}>{row.servings}</Text>
          </View>
        ))}
        <Text style={itemStyles.note}>
          *({note_1} Please{" "}
          <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
            <Text style={itemStyles.contactLink}>contact us</Text>
          </TouchableOpacity>{" "}
          {note_2})
        </Text>
      </View>
    </View>
  );
};

export default PricingSection;
