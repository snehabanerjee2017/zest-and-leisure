import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import styles from '../styles/homeScreenStyles';
import itemStyles from '../styles/itemStyles';

function Contact({navigation}) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container} edges={["top"]}>
                <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                    <Header navigation={navigation}/>
                    <View style={itemStyles.container}>
                        <Text style={itemStyles.title}>Contact Us Page</Text>
                        <Text>Here you'll see our contact details!</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

export default Contact;