"use strict";

import React, { Component } from "react";

import { StyleSheet } from "react-native";
import StoreGlobal from "./GLOBALSTATE";

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
import Frame from "./js/Frame";

export default class SavedARScene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Initializing AR...",
      height: 5,
      width: 5,
      images: StoreGlobal({ type: "get", key: "saved" })[0]
    };

    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    let { images } = this.state;
    return (
      <ViroARScene
        onTrackingUpdated={this._onInitialized}
        displayPointCloud={true}
      >
        {images.map((image, index) => {
          return (
            <Frame
              heightWidthMain={{
                height: this.state.height,
                width: this.state.width
              }}
              size={[this.state.height]}
              image={image}
              key={index}
              cap={this.state}
              index={index}
            />
          );
        })}
      </ViroARScene>
    );
  }
  handleClose = () => {
    this.setState({ visible: !this.state.visible });
  };
  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

module.exports = SavedARScene;
