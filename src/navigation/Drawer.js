import 'react-native-gesture-handler';
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screen/HomeScreen';
import SettingsScreen from '../screen/SettingsScreen';
import ProfileScreen from '../screen/ProfileScreen';
import NotificationsScreen from '../screen/NotificationScreen';
import CustomDrawer from '../component/CustomDrawer';
import Icon from 'react-native-vector-icons/Ionicons';




const drawer=createDrawerNavigator();

const Drawer=()=>{
  return (
       <drawer.Navigator 
       drawerContent={props=><CustomDrawer {...props} />} 
       initialRouteName="Home" 
       screenOptions={{
        headerShown:false,
        drawerLabelStyle:{
          marginLeft:-25,
          fontSize:15
        },
        drawerActiveBackgroundColor:'#043891',
        drawerActiveTintColor:'#fff',
        drawerInactiveTintColor:'#333',
        
       }}>
      <drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({color})=>(
            <Icon name={'home-outline'} size={22} color={color} />
          )
        }}
      />
      <drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerLabel: 'Profile',
          drawerIcon: ({color})=>(
            <Icon name={'person-outline'} size={22} color={color} />
          )
        }}
      />
      <drawer.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          drawerLabel: 'Notifications',
          drawerIcon: ({color})=>(
            <Icon name={'notifications-outline'} size={22} color={color} />
          )
        }}
      />
      <drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerLabel: 'Settings',
          drawerIcon: ({color})=>(
            <Icon name={'settings-outline'} size={22} color={color} />
          )
        }}
      />
      
    </drawer.Navigator>
  );
}


export default Drawer;
