import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import styles from "../styles/homeScreenStyles";
import itemStyles from "../styles/itemStyles";
import Header from "../components/Header";
import InstagramGrid from "../components/InstagramGrid";

const posts = [
  { id: "1", url: "https://www.instagram.com/reel/DPEdGEVDSJU/", thumbnail: require("../assets/DPEdGEVDSJU.png") },
  { id: "2", url: "https://www.instagram.com/reel/DO8vcdUDUrI/", thumbnail: require("../assets/DO8vcdUDUrI.png") },
  { id: "3", url: "https://www.instagram.com/reel/DOycYmiDY2_/", thumbnail: require("../assets/DOycYmiDY2_.png") },
  { id: "4", url: "https://www.instagram.com/reel/DOq4H_fjR7X/", thumbnail: require("../assets/DOq4H_fjR7X.png") },
  { id: "5", url: "https://www.instagram.com/reel/DOgZQblDRBV/", thumbnail: require("../assets/DOgZQblDRBV.png") },
  { id: "6", url: "https://www.instagram.com/reel/DOL2M2fDQzI/", thumbnail: require("../assets/DOL2M2fDQzI.png") },
  { id: "7", url: "https://www.instagram.com/reel/DOGryoRDYK6/", thumbnail: require("../assets/DOGryoRDYK6.png") },
  { id: "8", url: "https://www.instagram.com/reel/DNyE0tkWtCw/", thumbnail: require("../assets/DNyE0tkWtCw.png") },
  { id: "9", url: "https://www.instagram.com/reel/DNs9rLPWjsL/", thumbnail: require("../assets/DNs9rLPWjsL.png") },
  { id: "10", url: "https://www.instagram.com/reel/DNnweUhxePV/", thumbnail: require("../assets/DNnweUhxePV.png") },
];

const Cakes = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header navigation={navigation} />
          <InstagramGrid posts={posts} title="🎂 Cakes Page"/>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Cakes;
