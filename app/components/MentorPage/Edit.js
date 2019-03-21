import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, FlatList} from 'react-native';
import { ListItem} from 'react-native-elements';
import axios from 'axios';

export default class Edit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'empty for now',
      loading: false,
      data: [],
    }

}
  componentDidMount() {
    this.makeRemoteRequest();

  }

   makeRemoteRequest = () => {
    const {page, seed} = this.state
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    axios.get(url)
      .then((res) => {
        console.log("POST RESPONSE: " , JSON.stringify(res));
        this.setState({data: res.data.results})
      })
      .catch((err) => {
        console.log(err);
      })
  }



  static navigationOptions = ({ navigation }) => {
    return {
    headerTitle: 'Edit'

  }
}
  ;




  render() {
    console.log('YO', this.state.data)


  // console.log('yoooooooooooooooooooooooooo', this.state.text)

    // const { navigation } = this.props;
    return (


          <FlatList
            data={this.state.data}
            renderItem={({item}) => (
              <ListItem
                roundAvatar
                title={`${item.name.first} ${item.name.last}`}
                subtitle={item.email}
                avatar={{uri: item.picture.thumbnail}}
              />
            )}
          />


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
