import React from 'react';
import { View, Image } from 'react-native';
import styles from '../styles/homeScreenStyles';

const Header = () => (
    <View style={styles.headerContainer}>
        <Image
            style={styles.headerLogo}
            source={require('../assets/background.png')}
        />
    </View>
);

export default Header;
