"use strict";

import React, { Component } from "react";

import { StyleSheet } from "react-native";

import {
  ViroARScene,
  ViroBox,
  ViroMaterials,
  ViroNode,
  ViroImage,
  ViroConstants
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
  }

  render() {
    return (
      <ViroARScene
        onTrackingUpdated={this._onInitialized}
        displayPointCloud={true}
      >
        <ViroBox
          position={[0, 0, -1]}
          height={this.state.height}
          width={this.state.width}
          length={1}
          onPinch={this._onPinch}
          scale={[0.3, 0.3, 0.1]}
          materials={["grid"]}
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
}

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require("./res/grid_bg.jpg")
  }
});

module.exports = HelloWorldSceneAR;
