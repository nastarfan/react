import React, {Component} from 'react';
import {FlatList, Text, AppRegistry, View, StyleSheet} from 'react-native';

export default class FlatListBasics extends Component{
  render(){
    let names = [
      {key: 'Dudi'},
      {key: 'Dudo'},
      {key: 'Joko'},
      {key: 'Jos'},
      {key: 'Juki'},
      {key: 'Jojo'},
      {key: 'Koko'},
      {key: 'Koro'},
    ];
    return(
      <View style={styles.container}>
        <FlatList
          data={names}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
