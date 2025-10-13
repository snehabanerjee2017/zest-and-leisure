import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './app/screens/HomeScreen';
import Cakes from './app/screens/Cakes';
import Cupcakes from './app/screens/Cupcakes';
import SpecialityFlavours from './app/screens/SpecialityFlavours';
import TeaCakes from './app/screens/TeaCakes';
import CakeShots from './app/screens/CakeShots';
import Order from './app/screens/Order';
import Contact from './app/screens/Contact';
import AboutMe from './app/screens/AboutMe';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false,}}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Cakes" component={Cakes} />
                <Stack.Screen name="Cupcakes" component={Cupcakes} />
                <Stack.Screen name="SpecialityFlavours" component={SpecialityFlavours} />
                <Stack.Screen name="TeaCakes" component={TeaCakes} />
                <Stack.Screen name="CakeShots" component={CakeShots} />
                <Stack.Screen name="Order" component={Order} />
                <Stack.Screen name="Contact" component={Contact} />
                <Stack.Screen name="AboutMe" component={AboutMe} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
