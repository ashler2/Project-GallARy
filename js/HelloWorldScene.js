"use strict";

import React, { Component } from "react";

import { StyleSheet } from "react-native";

import {
  ViroARScene,
  ViroBox,
  ViroMaterials,
  ViroNode,
  ViroImage
} from "react-viro";

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    this.state = {
      text: "Initializing AR...",
      times: [1, 2, 3, 4],
      pos: 1
    };

    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene
        onTrackingUpdated={this._onInitialized}
        displayPointCloud={true}
      >
        <ViroNode position={[0, 0, 0]} dragType="FixedToWorld">
          <ViroBox
            position={[0, 0, -1]}
            height={5}
            width={5}
            length={1}
            scale={[0.3, 0.3, 0.1]}
            materials={["grid"]}
          />
        </ViroNode>
      </ViroARScene>
    );
  }
}

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require("./res/grid_bg.jpg")
  }
});

module.exports = HelloWorldSceneAR;
