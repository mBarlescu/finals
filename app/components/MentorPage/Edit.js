import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, FlatList} from 'react-native';
import { ListItem, SearchBar} from 'react-native-elements';
import axios from 'axios';

export default class Edit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'empty for now',
      loading: false,
      data: [],
      error: null,
      text: '',
      subjects: [],
    }
    let data = [];
    let subjects = ['math', 'english', 'science']

}
  componentDidMount() {
    this.makeRemoteRequest();

  }

   makeRemoteRequest = () => {
    const {page, seed} = this.state
    const url = `https://randomuser.me/api/?&results=20`;
    this.setState({loading: true})
    axios.get(url)
      .then((res) => {
        console.log("POST RESPONSE: " , JSON.stringify(res));
        this.setState({
          data: res.data.results,
          error: res.error || null,
          loading: false,
        })
        this.data = res.data.results;

      })
      .catch((err) => {
        this.setState({err, loading: false})
        console.log(err);
      })
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height:1,
          width: "86%",
          backgroundColor: '#CED0CE',
          marginLeft: "14%"
        }}
      >
      </View>
    );
  };

  searchFilterFunction = text => {
    this.setState({text})
    const newData= this.data.filter(item => {
      const itemData= `${item.name.title.toUpperCase()}
      ${item.name.first.toUpperCase()}
      ${item.name.last.toUpperCase()}`;

      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({data: newData})
  }

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type here..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value= {this.state.text}
      />
    )
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
      <View>

          <FlatList
            data={this.state.data}

            renderItem={({item}) => (
              <ListItem
                roundAvatar
                title={`${item.name.first} ${item.name.last}`}
                subtitle={item.email}
                avatar={{uri: item.picture.thumbnail}}
                containerStyle={{borderBottomWidth: 0}}
              />

            )}
            ItemSeparatorComponent= {this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
            keyExtractor={item => item.email}
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
