import React from 'react';
import { View } from 'react-native';
import styles from '../styles/homeScreenStyles';
import CustomButton from './CustomButton';
import { useNavigation } from '@react-navigation/native';

const ButtonSection = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.buttonContainer}>
            <View style={styles.buttonRow}>
                <CustomButton title="Cakes" onPress={() => navigation.navigate('Cakes')} />
                <CustomButton title="Cupcakes" onPress={() => navigation.navigate('Cupcakes')}/>
                <CustomButton title="Speciality Flavours" onPress={() => navigation.navigate('SpecialityFlavours')}/>
                <CustomButton title="Tea Cakes" onPress={() => navigation.navigate('TeaCakes')}/>
                <CustomButton title="Cake Shots" onPress={() => navigation.navigate('CakeShots')}/>
                <CustomButton title="Order" onPress={() => navigation.navigate('Order')}/>
                    <CustomButton title="Contact" onPress={() => navigation.navigate('Contact')}/>
            </View>
        </View>
    );
};

export default ButtonSection;
