import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



export default class Home extends React.Component {
  constructor(props){
    super(props);

  }

  static navigationOptions = ({ navigation }) => {
    return {
    headerTitle: 'Finals'

  }
  };


  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Find a Mentor"
          onPress={() => this.props.navigation.navigate('PostalCode')}
        />
        <Button
          title="Mentor Login"
          onPress={() => this.props.navigation.navigate('MentorLogin')}
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
