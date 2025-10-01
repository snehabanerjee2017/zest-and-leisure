import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CakeShots = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🎂 CakeShots Page</Text>
            <Text>Here you'll see all our delicious CakeShots!</Text>
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

export default CakeShots;
