import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './app/components/Home/Home'
import { createStackNavigator, createAppContainer } from "react-navigation";
import MentorLogin from './app/components/MentorLogin/MentorLogin';
import PostalCode from './app/components/PostalCode/PostalCode';
import Register from './app/components/Register/Register';
import MentorPage from './app/components/MentorPage/MentorPage';
import Add from './app/components/MentorPage/Add';


const AppNavigator = createStackNavigator({
  Home: Home,
  MentorLogin: MentorLogin,
  PostalCode: PostalCode,
  Register: Register,
  MentorPage: MentorPage,
  Add: Add,
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