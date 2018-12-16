import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

class Blink extends Component{
  constructor(props){
    super(props);
    this.state = {isShowingText: true};

    setInterval(() => (
      this.setState(previousState => (
        {isShowingText: !previousState.isShowingText}
      ))
    ), 1000);
  }

  render(){
    if(!this.state.isShowingText){
      return null;
    }

    return(
      <Text>{this.props.text}</Text>
    );
  }
}

export default class BlinkApp extends Component{
  render(){
    return(
      <View>
        <Blink text='React native seems to be fun'/>
        <Blink text='Need to allocate my resource to master it'/>
        <Blink text='If I really want to'/>
        <Blink text='I think I want to'/>
        <Blink text="Nah, I decide I want to do it"/>
      </View>
    );
  }
}
