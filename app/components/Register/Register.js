import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

export default class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  // console.log('yoooooooooooooooooooooooooo', this.state.text)
  }


  static navigationOptions = ({ navigation }) => {
    return {
    headerTitle: 'SignUp'

  }
  };


  render() {
    // const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Registration</Text>
        <TextInput style={styles.textinput}
          underlineColorAndroid={'transparent'}
          placeholder='email'
        />
        <TextInput style={styles.textinput}
          underlineColorAndroid={'transparent'}
          placeholder='email'
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btntext}>Sign up</Text>
        </TouchableOpacity>

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
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#fff',
    borderBottomColor:'#f8f8f8',
    borderBottomWidth: 1,
  },
  button: {
    alignSelf: 'strech',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 30,
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold'
  },
});
