import React from 'react'
import DrawerScreen from './src/Navigation/Drawer';
import { NavigationContainer } from '@react-navigation/native';


function App() {

  return (
      <NavigationContainer>
        <DrawerScreen />
      </NavigationContainer>
  );
}


export default App;
