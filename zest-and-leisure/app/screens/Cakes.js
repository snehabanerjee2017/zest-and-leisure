import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cakes = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🎂 Cakes Page</Text>
            <Text>Here you'll see all our delicious cakes!</Text>
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

export default Cakes;
