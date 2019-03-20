import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'mark'
    }
  }

  render() {
    let name = this.state.name ? this.state.name : 'yo dude'
    return (
      <View style={styles.container}>
        <Text>{this.props.message}</Text>
        <Text>you are {name}  </Text>
        <Button
          title="Go to Users"
          onPress={() => this.props.navigation.navigate('Users')}
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
