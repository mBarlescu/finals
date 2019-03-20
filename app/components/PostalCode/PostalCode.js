import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class PostalCode extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  // console.log('yoooooooooooooooooooooooooo', this.state.text)
  }


  static navigationOptions = ({ navigation }) => {
    return {
    headerTitle: 'Finals'

  }
  };


  render() {
    // const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => {this.setState({text})
        console.log('yoooo', this.state)}
        }
        value={this.state.text}
        />
        <Button
          title="Back"
          onPress={() => {this.props.navigation.navigate('Home')

          }
          }
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
