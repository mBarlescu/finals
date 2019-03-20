import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './app/components/Home/Home'
import { createStackNavigator, createAppContainer } from "react-navigation";
import Users from './app/components/Users/Users'


const AppNavigator = createStackNavigator({
  Home: Home,
  Users: Users
},
{
  initialRouteName: "Home",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
  navigationOptions: {
      tabBarLabel: 'Home!',
    },
}
);

export default AppNavigator;