import 'react-native-gesture-handler';
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native'
import Drawer from './src/navigation/Drawer';


function App() {
  return (
       <NavigationContainer>
        <Drawer />
       </NavigationContainer>
  );
}


export default App;
