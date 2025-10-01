import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TeaCakes = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🎂 Tea Cakes Page</Text>
            <Text>Here you'll see all our delicious Tea Cakes!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default TeaCakes;
