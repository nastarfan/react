import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';

export default class TestLayoutBasics extends Component{
  render(){
    return(
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
        <View style={{height: 50, width: 50, backgroundColor: 'powderblue'}}/>
        <View style={{height: 50, width: 50, backgroundColor: 'skyblue'}}/>
        <View style={{height: 50, width: 50, backgroundColor: 'steelblue'}}/>
      </View>
    );
  }
}
