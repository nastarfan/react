import React, {Component} from 'react';
import {AppRegistry, Image} from 'react-native';

export default class Panda extends Component {
  render(){
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Panda.jpg'
    };
    return(
      <Image source={pic} style={{width: 500, height: 110}}/>
    )
  }
}
