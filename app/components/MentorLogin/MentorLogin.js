import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

export default class MentorLogin extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'okay'
    }
  // console.log('yoooooooooooooooooooooooooo', this.state.text)
  }


  static navigationOptions = ({ navigation }) => {
    return {
    headerTitle: 'Login'

  }
  };


  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>

        <TextInput style={styles.textinput}
          underlineColorAndroid={'transparent'}
          placeholder='email'
        />
        <TextInput style={styles.textinput}
          underlineColorAndroid={'transparent'}
          placeholder='password'
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button}

          onPress={() => this.props.navigation.navigate('MentorPage')}
          >
          <Text style={styles.btntext}>Login</Text>
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
    paddingLeft: 60,
    paddingRight: 60
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 8,
    color: '#fff',
    borderBottomColor:'#f8f8f8',
    borderBottomWidth: 1,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#59cbbd',
    marginTop: 8,
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold'
  },
});
