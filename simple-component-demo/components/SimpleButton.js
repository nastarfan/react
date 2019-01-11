import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function SimpleButton({ color, small, title, onPress }) {
  return (
    <TouchableOpacity
      style={[
        styles.buttonStyle,
        small ? styles.smallButton : styles.largeButton,
        { borderColor: color }
      ]}
      onPress={onPress}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 3,
    borderWidth: 2,
    minWidth: 100,
    marginTop: 5,
    alignItems: "center"
  },
  smallButton: {
    padding: 3
  },
  largeButton: {
    padding: 6
  },
  textStyle: {
    fontSize: 14,
    fontWeight: "bold"
  }
});
