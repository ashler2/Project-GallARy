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
      width: 5,
      status: "height"
    };

    this._onInitialized = this._onInitialized.bind(this);
    this._onPinch = this._onPinch.bind(this);
    this._onRotate = this._onRotate.bind(this);
    this._onButtonTap = this._onButtonTap.bind(this);
    this._onButtonGaze = this._onButtonGaze.bind(this);
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
          position={[-0.22, -0.6, -1]}
          height={0.25}
          width={0.25}
          onTap={this._onButtonTap}
          onGaze={this._onButtonGaze}
          onClick={this._onButtonTap}
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
      if (this.state.status === "width") {
        this.setState({ width: scaleFactor });
        return;
      }

      if (this.state.status === "height") {
        this.setState({ height: scaleFactor });
        return;
      }
    }
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
      status: "width"
    });
    return;
  }

  _onButtonTap() {
    this.setState({
      status: "width"
    });
    return;
  }
}

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require("./res/grid_bg.jpg")
  }
});

module.exports = HelloWorldSceneAR;
