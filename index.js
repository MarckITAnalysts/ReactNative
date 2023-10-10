/**
 * @format
 */
import React from 'react'
import {AppRegistry,View} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const HelloWorld = () => {
    return (
        <View style={{fontsize:20,alignContent:'center',height:'100%',width:'100%',textalign:'center'}}>
            <App />   
        </View>
    );
    }



AppRegistry.registerComponent(appName, () => HelloWorld);
