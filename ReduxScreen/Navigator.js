import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductList from './ProductList';
import Card from './Card';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="Card" component={Card} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator