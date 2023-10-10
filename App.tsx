import React from 'react'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screen/HomeScreen';
import NotificationsScreen from './src/screen/NotificationScreen';
import ProfileScreen from './src/screen/ProfileScreen';
import SettingsScreen from './src/screen/SettingsScreen';

const Tab = createMaterialBottomTabNavigator();
function App() {

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
          // You can return any component that you like here!
          return <Icon name={iconName} size={25} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
      
  );
}


export default App;
