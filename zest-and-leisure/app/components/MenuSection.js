import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../config/colors';
import measurements from "../config/measurements";
import itemStyles from "../styles/itemStyles";

const MenuSection = ({ title, sections }) => (
  <LinearGradient
      colors={[colors.gradientDark, colors.gradientLight]}
      style={itemStyles.container}
  >
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
  </LinearGradient>
);

export default MenuSection;
