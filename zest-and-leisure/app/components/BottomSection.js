// BottomSection.js
import React from 'react';
import { View, TouchableOpacity, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; // make sure expo-vector-icons is installed
import styles from '../styles/homeScreenStyles';
import colors from '../config/colors';

const BottomSection = () => {
  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error('Error opening link:', err));
  };

  return (
    <LinearGradient
                colors={[colors.gradientDark, colors.gradientLight]}
                style={styles.bottomSection}>
        <TouchableOpacity onPress={() => openLink('https://www.instagram.com/zestandleisure/?hl=en')}>
            <FontAwesome name="instagram" size={30} color="#E1306C" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openLink('https://www.facebook.com/ZestandLeisure?rdid=CN0m46zaHXBlXbPO&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18yaiqbbuZ%2F#')}>
            <FontAwesome name="facebook" size={30} color="#1877F2" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openLink('zestnleisure@gmail.com')}>
            <MaterialIcons name="email" size={30} color="#D44638" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openLink('https://www.google.com/maps/place/Zest+and+Leisure+Bakery+(PRE-ORDER+Only)/@42.593734,-71.4492415,15z/data=!4m6!3m5!1s0x89e3bdc818ec9bb7:0x7f023570e8628a2c!8m2!3d42.5893404!4d-71.4572004!16s%2Fg%2F11l68rn3l1?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D')}>
            <FontAwesome name="google" size={30} color="#DB4437" />
        </TouchableOpacity>
    </LinearGradient>
  );
};

export default BottomSection;
