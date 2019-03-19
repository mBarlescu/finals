import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './app/components/Home/Home'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Home message='wat'/>
      </View>
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
