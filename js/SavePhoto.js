import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import {
  ViroARScene,
  ViroBox,
  ViroMaterials,
  ViroNode,
  ViroImage,
  ViroConstants,
  ViroButton,
  ViroText,
  ViroFlexView
} from "react-viro";
import _ from "lodash";
export default class SavePhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "hello"
    };
  }

  render() {
    return (
      <View
        style={{
          position: "absolute",
          bottom: "25%",
          left: "50%",
          justifyContent: "center"
        }}
      >
        <Button
          onPress={() => {
            this.props.photo();
            _.delay(this.props.photo, 500);
          }}
          title="Save Photo"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
