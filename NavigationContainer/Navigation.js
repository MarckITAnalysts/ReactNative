import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Login from '../src/screens/Login';
import Home from '../src/screens/Home';

const Stack = createStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation