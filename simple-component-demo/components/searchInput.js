import React, { Component } from "react";
import { TextInput, StyleSheet } from "react-native";

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleUpdateText(text){
    this.state = {text};
  }

  handleSubmitText(){
    const {text} = this.state;
    const {onSubmit} = this.props;

    if(!text) return;
  }

  render() {
    const { placeholder } = this.props;
    return <TextInput placeholder={placeholder} style={styles.searchtext}
    onChangeText={} onEndEditing={}/>;
  }
}

const style = StyleSheet.create({
  searchtext: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
  }
});
