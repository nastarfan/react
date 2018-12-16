import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

class Blink extends Component{
  constructor(props){
    super(props);
    this.state = {isShowingText: true, isWhatever: false};

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
      <View style={{alignItems: 'center'}}>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}

export default class BlinkApp extends Component{
  render(){
    return(
      <View>
        <Blink text='Holla, I am the blinking app'/>
        <Blink text='Ive been reborn!!'/>
        <Blink text='You See? Im so excited about it!'/>
      </View>
    );
  }
}
