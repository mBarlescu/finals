import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



export default class Users extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'users'
    }
  }

  render() {
    let name = this.state.name ? this.state.name : 'yo dude'
    return (
      <View style={styles.container}>
        <Text>users here</Text>
        <Text>you are {name}  </Text>
        <Button
          title="Go to Users... again"
          onPress={() => this.props.navigation.push('Users')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
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