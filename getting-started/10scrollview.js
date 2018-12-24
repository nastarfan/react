import React, { Component } from 'react';
import {ScrollView, Text, View, Image, StyleSheet, Alert, TouchableHighlight, TouchableOpacity} from 'react-native';

export default class TestScrollView extends Component {
  _onPressPanda(){
    Alert.alert('Ouch, dont you dare to touch the cute panda')
  }

  render() {
    let panda = {
      uri: 'https://www.telegraph.co.uk/content/dam/news/2016/08/23/106598324PandawaveNEWS_trans_NvBQzQNjv4Bqeo_i_u9APj8RuoebjoAHt0k9u7HhRJvuo-ZLenGRumA.jpg?imwidth=1400',
      width: 200,
      height: 200
    }
    return (
      <ScrollView>
        <View style={{flex:1, alignItems: 'center'}}>
        <TouchableHighlight underlayColor="white" onPress={this._onPressPanda}>
          <Image source={panda} style={styles.picture}/>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressPanda}>
          <Image source={panda} style={styles.picture}/>
        </TouchableOpacity>
        <Image source={panda} style={styles.picture}/>
        <Image source={panda} style={styles.picture}/>
        <Image source={panda} style={styles.picture}/>
        <Image source={panda} style={styles.picture}/>
        <Image source={panda} style={styles.picture}/>
        <Image source={panda} style={styles.picture}/>
        <Image source={panda} style={styles.picture}/>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  picture: {
    margin: 20,
    borderRadius: 10
  }
});
