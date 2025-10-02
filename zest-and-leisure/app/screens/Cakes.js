import React from "react";
import { ScrollView} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/Header";
import InstagramGrid from "../components/InstagramGrid";
import MenuSection from "../components/MenuSection";
import PricingSection from "../components/PricingSection";

import styles from "../styles/homeScreenStyles";


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

const cakeSections = {
  Flavours: ["Vanilla", "Red Velvet", "Chocolate", "Lemon", "Marble", "Pistachio", "Straberry", "Funfetti", "Orea", "Raspberry"],
  Fillings: ["Ganache", "Oreo", "jam", "Fresh berry/ fruits", "Mousse", "Gulabjamun", "Rasmalai"],
  Frostings: ["Chocolate", "Cardamom", "Rose", "Lemon", "Oreo"],
};

const cakePrices = [
  { size: "6-inch 3 layes", price: "$50", servings: "8–12" },
  { size: "8-inch 3 layers", price: "$85", servings: "15–24" },
  { size: "10-inch 3 layers", price: "$110", servings: "30–38" },
  { size: "Quarter Sheet Cake", price: "$90", servings: "35" },
  { size: "Half Sheet Cake", price: "$160", servings: "60" },
];

const Cakes = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header navigation={navigation} />
          <InstagramGrid posts={posts} title="Cakes Page" />
          <MenuSection title="Cake Menu" sections={cakeSections} />
          <PricingSection title="Cake Pricing" prices={cakePrices} note_1={"Below prices are for Vanilla/Chocolate cake flavor with Vanilla buttercream only."} note_2={"for pricing with custom flavors, filling and/or theme."}/>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Cakes;