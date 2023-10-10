import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screen/HomeScreen';
import ProfileScreen from '../screen/ProfileScreen';
import NotificationsScreen from '../screen/NotificationScreen';
import SettingsScreen from '../screen/SettingsScreen';


const Tab = createMaterialBottomTabNavigator();
const TabScreen=()=>{

  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={ {backgroundColor: '#3BAD87'} }
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused,color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'notifications-sharp' : 'notifications-outline';
          }else if (route.name === 'Profile') {
            iconName = focused ? 'person-sharp' : 'person-outline';
          }else if (route.name === 'Settings') {
            iconName = focused ? 'settings-sharp' : 'settings-outline';
          }
          return <Icon name={iconName} size={25} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default TabScreen;