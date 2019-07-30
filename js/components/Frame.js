import React, { Component } from "react";
import { View, Text } from "react-native";
import {
  ViroARScene,
  ViroBox,
  ViroMaterials,
  ViroNode,
  ViroImage,
  ViroConstants,
  ViroButton,
  ViroText
} from "react-viro";
export default class Frame extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <ViroImage
          height={2}
          width={2}
          source={require("./res/placeHolder.png")}
          position={this.props}
        />
      </View>
    );
  }
}
