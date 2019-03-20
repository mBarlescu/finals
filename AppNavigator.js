import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './app/components/Home/Home'
import { createStackNavigator, createAppContainer } from "react-navigation";
import MentorLogin from './app/components/MentorLogin/MentorLogin';
import PostalCode from './app/components/PostalCode/PostalCode';

const AppNavigator = createStackNavigator({
  Home: Home,
  MentorLogin: MentorLogin,
  PostalCode: PostalCode,
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