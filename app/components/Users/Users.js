import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



export default class Users extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'users'
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
    };
  };

  render() {
    const { navigation } = this.props;
    const namee = navigation.getParam('name', 'unknown');
    const age = navigation.getParam('age', 'unknown');

    let name = this.state.name ? this.state.name : 'yo dude'
    return (
      <View style={styles.container}>
        <Text>users here</Text>
        <Text>you are {name}  </Text>
        <Text>you are really {namee}, and your age is {age}</Text>
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
        <Button
          title='update the title of this header'
          onPress= {() => this.props.navigation.setParams({otherParam:'other title'})}
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