import React, { Component } from "react";
import { TextInput, StyleSheet } from "react-native";

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleUpdateText = text => {
    const { onChange } = this.props;
    this.setState({ text });
    onChange(text);
  };

  handleSubmitText = () => {
    const { text } = this.state;
    const { onSubmit } = this.props;

    if (!text) return;
    onSubmit(text);
    this.setState({ text: ''});
  };

  render() {
    const { placeholder } = this.props;
    return (
      <TextInput
        placeholder={placeholder}
        style={styles.searchtext}
        onChangeText={this.handleUpdateText}
        onEndEditing={this.handleSubmitText}
      />
    );
  }
}

const styles = StyleSheet.create({
  searchtext: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 5
  }
});
