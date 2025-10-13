import React from 'react';
import { Text, ScrollView, View, useWindowDimensions, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';

import Header from '../components/Header';
import styles from '../styles/homeScreenStyles';
import colors from '../config/colors';
import measurements from '../config/measurements';

function AboutMe({ navigation }) {
    const { width } = useWindowDimensions();
    const isDesktop = width >= measurements.mobileWidthThreshold;

    const aboutSections = [
        {
            image: require('../assets/person_icon.png'),
            text: "Hi, I’m Soma — a scientist by profession and a baker by passion!",
        },
        {
            image: require('../assets/family_pic.png'),
            text: "I live in a cozy suburb just north of Boston with my husband and our daughter. Originally from a small town in West Bengal, India, I moved to Boston to pursue my Master’s degree and have since built a life that blends both science and creativity.",
        },
        {
            image: require('../assets/baby_pic.png'),
            text: "While I’ve always loved cooking, my real journey into baking began after the birth of my daughter. What started as a fun way to create sweet moments soon turned into something much deeper — baking became my happy place, my creative outlet, and even my therapy. Encouraged by my family and friends (and fueled by countless late-night experiments!), I decided to take the leap and begin baking professionally.",
        },
        {
            image: require('../assets/different_cakes.png'),
            text: "I specialize in custom cakes and love crafting Indian-fusion desserts that bring together the flavors of my roots with a modern twist. Whether it’s a celebration cake or a unique sweet treat, I put my heart into every creation.",
        },
        {
            image: require('../assets/family_pic_2.png'),
            text: "When I’m not in the kitchen or the lab, you’ll find me traveling, gardening, listening to audiobooks, or catching up with friends.\n\nThank you for being here — I hope my bakes bring a little joy and sweetness to your day.",
        },
    ];

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container} edges={["top"]}>
                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    showsVerticalScrollIndicator={false}
                >
                    <Header navigation={navigation} />

                    {aboutSections.map((section, index) => {
                        const flexDirection = isDesktop
                            ? index % 2 === 0
                                ? 'row'
                                : 'row-reverse'
                            : 'column';

                        return (
                            <LinearGradient
                                key={index}
                                colors={index % 2 === 0 ? [colors.gradientDark, colors.gradientLight] : [colors.gradientLight, colors.gradientDark]}
                                style={[
                                    styles.aboutSection,
                                    { flexDirection },
                                ]}
                            >
                                <Image
                                    source={section.image}
                                    style={[
                                        styles.aboutImage,
                                        isDesktop ? styles.desktopImage : styles.mobileImage
                                    ]}
                                />
                                <View style={styles.textContainer}>
                                    <Text style={styles.aboutText}>
                                        {section.text}
                                    </Text>
                                </View>
                            </LinearGradient>
                        );
                    })}
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

export default AboutMe;
