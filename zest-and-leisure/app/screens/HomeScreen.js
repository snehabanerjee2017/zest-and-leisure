import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    ScrollView,
    useWindowDimensions
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function HomeScreen(props) {
    const { width } = useWindowDimensions();
    const isDesktop = width >= 768;

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container} edges={["top"]}>
                <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                    <View style={styles.headerContainer}>
                        <Image
                            style={styles.headerLogo}
                            source={require("../assets/background.png")}
                        />
                    </View>

                    {/* Buttons */}
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonRow}>
                            <CustomButton title="Cakes" />
                            <CustomButton title="Cupcakes" />
                            <CustomButton title="Speciality Flavours" />
                            <CustomButton title="Tea Cakes" />
                            <CustomButton title="Cake Shots" />
                        </View>
                    </View>

                    {/* About Section (Responsive Layout) */}
                    <View style={[
                        styles.aboutSection,
                        { flexDirection: isDesktop ? 'row' : 'column' }
                    ]}>
                        <Image
                            source={require('../assets/family_pic.png')} // Replace with your actual about image
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
                            <CustomButton title="Read More"/>
                        </View>
                    </View>
                    </View>

                    {/* Bottom Section */}
                    <View style={styles.bottomSection} />
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const CustomButton = ({ title, onPress }) => (
    <TouchableOpacity style={styles.button} onPress={onPress || (() => {})}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        flexGrow: 1,
        flexDirection: "column",
    },
    headerContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
    },
    headerLogo: {
        width: 300,
        height: 300,
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    buttonRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: "#9b51e0",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        margin: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },
    aboutSection: {
        backgroundColor: "gold",
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    aboutImage: {
        marginBottom: 15,
        width: 250,
        height: 250,
        borderRadius: 10,
        
    },
    mobileImage: {
        resizeMode: 'contain',
    },
    desktopImage: {
        marginRight: 20,
    },
    aboutText: {
        flex: 1,
        fontSize: 16,
        lineHeight: 24,
        color: "#333",
        textAlign: "left",
    },
    bottomSection: {
        backgroundColor: "tomato",
        height: 150,
    },
});

export default HomeScreen;
