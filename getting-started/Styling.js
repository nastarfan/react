import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default class LotsOfStyles extends Component{
  render(){
    return(
      <View>
        <Text style={styles.red}>Just red</Text>
        <Text style={styles.bigblue}>Just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>Bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>Red, then bigblue</Text>
      </View>
    );
  }
}