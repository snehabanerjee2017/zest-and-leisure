import React from 'react';
import { View, Image, Text, useWindowDimensions } from 'react-native';
import styles from '../styles/homeScreenStyles';
import CustomButton from './CustomButton';

const AboutSection = () => {
    const { width } = useWindowDimensions();
    const isDesktop = width >= 768;

    return (
        <View style={[
            styles.aboutSection,
            { flexDirection: isDesktop ? 'row' : 'column' }
        ]}>
            <Image
                source={require('../assets/family_pic.png')}
                style={[
                    styles.aboutImage,
                    isDesktop ? styles.desktopImage : styles.mobileImage
                ]}
                resizeMode="cover"
            />
            <Text style={styles.aboutText} numberOfLines={10} ellipsizeMode="tail">
                Hi, I’m Soma — a scientist by profession and a baker by passion!{"\n\n"}
                I live in a cozy suburb just north of Boston with my husband and our daughter. Originally from a small town in West Bengal, India, I moved to Boston to pursue my Master’s degree and have since built a life that blends both science and creativity.{"\n\n"}
                While I’ve always loved cooking, my real journey into baking began after the birth of my daughter. What started as a fun way to create sweet moments soon turned into something much deeper — baking became my happy place, my creative outlet, and even my therapy. Encouraged by my family and friends (and fueled by countless late-night experiments!), I decided to take the leap and begin baking professionally.{"\n\n"}
                I specialize in custom cakes and love crafting Indian-fusion desserts that bring together the flavors of my roots with a modern twist. Whether it’s a celebration cake or a unique sweet treat, I put my heart into every creation.{"\n\n"}
                When I’m not in the kitchen or the lab, you’ll find me traveling, gardening, listening to audiobooks, or catching up with friends.{"\n\n"}
                Thank you for being here — I hope my bakes bring a little joy and sweetness to your day.
            </Text>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonRow}>
                    <CustomButton title="Read More" />
                </View>
            </View>
        </View>
    );
};

export default AboutSection;
