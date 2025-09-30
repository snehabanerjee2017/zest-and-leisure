// components/CustomButton.js

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/homeScreenStyles';

const CustomButton = ({ title, onPress }) => (
    <TouchableOpacity style={styles.button} onPress={onPress || (() => {})}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
);

export default CustomButton;
