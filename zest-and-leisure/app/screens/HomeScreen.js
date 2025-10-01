import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import styles from '../styles/homeScreenStyles';
import Header from '../components/Header';
import ButtonSection from '../components/ButtonSection';
import AboutSection from '../components/AboutSection';
import BottomSection from '../components/BottomSection';

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container} edges={["top"]}>
                <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                    <Header navigation={navigation}/>
                    <ButtonSection />
                    <AboutSection />
                    <BottomSection />
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default HomeScreen;
