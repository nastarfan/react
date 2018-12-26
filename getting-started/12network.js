import React, { Component } from 'react';
import {FlatList, ActivityIndicator, Text, View} from 'react-native';

export default class FetchBasics extends Component {
  constructor(props){
    super(props);
    this.state = {isLoading: true};
  }

  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson.movies,
      }, function(){

      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  arbitraryFunction(){
    console.log('is it executed? just wondering'); // it's not, it turns out that componentDidMount is a special method related to component lifecycle
    // more at https://reactjs.org/docs/react-component.html
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }

}
