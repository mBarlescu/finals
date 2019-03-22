import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, FlatList} from 'react-native';
import { ListItem, SearchBar} from 'react-native-elements';
import axios from 'axios';

export default class Subjects extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'empty for now',
      loading: false,
      error: null,
      text: '',
      subjects: ['DataScience', 'Psychology'],
    }

    this.subjects = ['math', 'english', 'science', 'computer Science']


}
  componentDidMount() {


  }


delete = (subject) => {
  console.log('delete here being fired', this.state.subjects)
  const filtered = this.state.subjects.filter((x, i) => {
    console.log('DUDE', subject)
    return x !== subject

  })
  this.setState({subjects: filtered})
  console.log('new', this.state.subjects)
}





  static navigationOptions = ({ navigation }) => {
    return {
    headerTitle: 'Subjects'

    }
  };




  render() {


  // console.log('yoooooooooooooooooooooooooo', this.state.text)

    // const { navigation } = this.props;
    return (
      <View>
        {
          this.state.subjects.map((subject) => {
            return (
              <View key = {subject}>
                <Text>{subject}</Text>
                <TouchableOpacity
                style={styles.button}
                onPress={()=> this.delete(subject)}
                >
                <Text>Remove</Text>

                </TouchableOpacity>
              </View>
            )
          })
        }
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
