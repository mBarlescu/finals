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








  static navigationOptions = ({ navigation }) => {
    return {
    headerTitle: 'Subjects'

    }
  };




  render() {
    console.log('YO', this.state.data)


  // console.log('yoooooooooooooooooooooooooo', this.state.text)

    // const { navigation } = this.props;
    return (
      <View>
        {
          this.state.subjects.map((subject) => {
          return (<Text key={subject}>{subject}</Text>)
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
