import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'mark'
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
    headerTitle: 'Home',
    headerRight: (
      <Button
        onPress={navigation.getParam('increaseCount')}
        title='+1'
        color='black'
      />
    )
  }
  };
  componentDidMount() {
    this.props.navigation.setParams({increaseCount: this._increaseCount});
  }

  state = {
    count: 0
  }

  _increaseCount = () => {
    this.setState({ count: this.state.count++})
  }


  render() {
    let name = this.state.name ? this.state.name : 'yo dude'
    return (
      <View style={styles.container}>
        <Text>{this.props.message}</Text>
        <Text>you are {name}  </Text>
        <Button
          title="Go to Users"
          onPress={() => this.props.navigation.navigate('Users',
            {
            name: 'user1',
            age: 26
            }
            )}
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
