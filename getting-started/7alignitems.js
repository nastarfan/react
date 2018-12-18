import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';

export default class AlignItemsBasics extends Component{
  render(){
    return(
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
      }}>
        <View style={{height: 50, width: 50, backgroundColor: 'powderblue'}}/>
        <View style={{height: 50, width: 50, backgroundColor: 'skyblue'}}/>
        <View style={{height: 100, width: 50, backgroundColor: 'steelblue'}}/>
      </View>
    );
  }
}
