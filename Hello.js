import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ color: "red" }}> Hello WORRRLLLLDDDDDDD </Text>
      </View>
    );
  }
}
