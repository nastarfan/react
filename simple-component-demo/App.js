import React from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";

import SearchInput from "./components/SearchInput";
import SimpleButton from "./components/SimpleButton";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleSubmit = text => {
    alert(text);
    this.setState({ text });
  };

  handleChange = text => {
    this.setState({ text });
  };

  checkText = () => {
    const { text } = this.state;
    alert(text);
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <SearchInput
          placeholder="Type something here"
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        <SimpleButton title="Submit" color="green" onPress={this.checkText} />
        <SimpleButton
          title="Check State"
          color="blue"
          onPress={this.checkText}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 15,
  }
});
