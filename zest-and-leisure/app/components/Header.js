import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/homeScreenStyles';

const Header = ({navigation}) => (
    <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
                style={styles.headerLogo}
                source={require('../assets/background.png')}
            />
        </TouchableOpacity>
    </View>
);

export default Header;
