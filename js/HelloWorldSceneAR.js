"use strict";

import React, { Component } from "react";

import { StyleSheet } from "react-native";

import {
  ViroARScene,
  ViroBox,
  ViroMaterials,
  ViroNode,
  ViroImage,
  ViroConstants,
  ViroButton
} from "react-viro";

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    this.state = {
      text: "Initializing AR...",
      height: 5,
      h: [1, 2, 3],
      width: 5,
      scale: [0.3, 0.3, 0.1]
    };

    this._onInitialized = this._onInitialized.bind(this);
    this._onPinch = this._onPinch.bind(this);
    this._onRotate = this._onRotate.bind(this);
  }

  render() {
    return (
      <ViroARScene
        onTrackingUpdated={this._onInitialized}
        displayPointCloud={true}
      >
        <ViroBox
          position={[0, 0, -2]}
          height={this.state.height}
          width={this.state.width}
          length={1}
          onPinch={this._onPinch}
          scale={[0.3, 0.3, 0.1]}
          materials={["grid"]}
        />

        <ViroButton
          source={require("./res/button.png")}
          gazeSource={require("./res/button.png")}
          tapSource={require("./res/button.png")}
          position={[0.05, 0.05, -1]}
          height={0.25}
          width={0.25}
          onTap={this._onButtonTap}
          onGaze={this._onButtonGaze}
        />
      </ViroARScene>
    );
  }
  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: "Hello World!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
  _onPinch(pinchState, scaleFactor, source) {
    if (pinchState == 2) {
      this.setState({ height: scaleFactor, width: scaleFactor });

      return;
    }
    //set scale using native props to reflect pinch.
  }
  _onRotate(rotateState, rotationFactor, source) {
    if (rotateState == 3) {
      this.setState({ width: rotationFactor / 360 });
      return;
    }
    //update rotation using setNativeProps
  }

  _onButtonGaze() {
    this.setState({
      buttonStateTag: "onGaze"
    });
  }

  _onButtonTap() {
    this.setState({
      buttonStateTag: "onTap"
    });
  }
}

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require("./res/grid_bg.jpg")
  }
});

module.exports = HelloWorldSceneAR;
