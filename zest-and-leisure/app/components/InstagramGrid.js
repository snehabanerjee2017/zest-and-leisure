import React from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../config/colors';
import measurements from "../config/measurements";
import itemStyles from "../styles/itemStyles";

const InstagramGrid = ({ posts, title }) => {
  const { width } = useWindowDimensions();
  const isDesktop = width >= measurements.mobileWidthThreshold;

  const numColumns = isDesktop ? 5 : 2;
  const itemSpacing = isDesktop ? 20 : 10;
  const containerPadding = isDesktop ? 10 : 5;

  const scaleFactor = isDesktop ? 1 : 0.85;
  const itemWidth =
    ((width - containerPadding * 2 - itemSpacing * (numColumns - 1)) / numColumns) * scaleFactor;

  return (
    <LinearGradient
        colors={[colors.gradientDark, colors.gradientLight]}
        style={itemStyles.container}
    >
      {title && <Text style={itemStyles.title}>{title}</Text>}
      <View style={[itemStyles.grid, { paddingHorizontal: containerPadding }]}>
        {posts.map((post) => (
          <TouchableOpacity
            key={post.id}
            style={[itemStyles.item, { width: itemWidth }]}
            onPress={() => Linking.openURL(post.url)}
          >
            <Image
              source={post.thumbnail}
              style={[itemStyles.thumbnail, { width: itemWidth, height: itemWidth }]}
              resizeMode="cover"
            />
            <Text style={itemStyles.caption}>{post.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </LinearGradient>
  );
};

export default InstagramGrid;
