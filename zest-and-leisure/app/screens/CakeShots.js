import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import styles from '../styles/homeScreenStyles';
import itemStyles from '../styles/itemStyles';

const CakeShots = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container} edges={["top"]}>
                <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                    <Header />
                    <View style={itemStyles.container}>
                        <Text style={itemStyles.title}>🎂 Cake Shots
                         Page</Text>
                        <Text>Here you'll see all our delicious cake shots!</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};


export default CakeShots;
