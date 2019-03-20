import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './app/components/Home/Home'
import { createStackNavigator, createAppContainer } from "react-navigation";
import MentorLogin from './app/components/MentorLogin/MentorLogin';
import AppNavigator from './AppNavigator';
import PostalCode from './app/components/PostalCode/PostalCode';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {



  render() {


    return (
      <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




