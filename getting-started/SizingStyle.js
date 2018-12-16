import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  smallbox: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
  mediumbox: {
    flex: 2,
    backgroundColor: 'skyblue',
  },
  largebox: {
    flex: 3,
    backgroundColor: 'steelblue',
  },
});

export default class SizingWithStyles extends Component{
  render(){
    return(
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={styles.smallbox}/>
        <View style={styles.mediumbox}/>
        <View style={styles.largebox}/>
      </View>
    );
  }
}
