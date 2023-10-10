/**
 * @format
 */
import React from 'react'
import {AppRegistry,View} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native'

const HelloWorld = () => {
    return (
        <View style={{fontsize:20,alignContent:'center',height:'100%',width:'100%',textalign:'center'}}>
            <NavigationContainer>
                <App />
            </NavigationContainer>
        </View>
    );
    }



AppRegistry.registerComponent(appName, () => HelloWorld);
