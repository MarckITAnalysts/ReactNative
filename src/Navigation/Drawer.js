import 'react-native-gesture-handler';
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabScreen from './Tab';
import ProfileScreen from '../screen/ProfileScreen';
import NotificationsScreen from '../screen/NotificationScreen';
import SettingsScreen from '../screen/SettingsScreen';

const drawer=createDrawerNavigator();

const DrawerScreen=()=>{
  return (
    <drawer.Navigator initialRouteName="Home1"  screenOptions={{
      headerShown:false
    }}>
      <drawer.Screen
        name="Home1"
        component={TabScreen}
        options={{ drawerLabel: 'Home' }}
      />
      <drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ drawerLabel: 'Profile' }}
      />
      <drawer.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ drawerLabel: 'Notifictions' }}
      />
      <drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ drawerLabel: 'Settings' }}
      />
      
    </drawer.Navigator>
  );
}


export default DrawerScreen;
