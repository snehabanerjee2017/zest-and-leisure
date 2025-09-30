import React from 'react';
import { View } from 'react-native';
import styles from '../styles/homeScreenStyles';
import CustomButton from './CustomButton';

const ButtonSection = () => (
    <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
            <CustomButton title="Cakes" />
            <CustomButton title="Cupcakes" />
            <CustomButton title="Speciality Flavours" />
            <CustomButton title="Tea Cakes" />
            <CustomButton title="Cake Shots" />
        </View>
    </View>
);

export default ButtonSection;
