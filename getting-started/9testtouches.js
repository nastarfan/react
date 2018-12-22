import React, {Component} from 'react';
import {StyleSheet, View, Button, AppRegistry, Alert, TextInput, Text} from 'react-native';

export default class TestTouches extends Component{
  _onPressButton(){
    Alert.alert("This is just a dummy login!");
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Login</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputText} placeholder="Your input here"/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputText} placeholder="Your another input here"/>
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button onPress={this._onPressButton} title="Login"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    margin: 25
  },
  inputContainer: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
  },
  alternativeLayoutButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 25,
  },
  headerText: {
    fontSize: 32
  },
  headerContainer: {
    marginLeft: 25,
    marginRight: 25,
  },
  inputText: {
    height: 45,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 15,
  }
});
