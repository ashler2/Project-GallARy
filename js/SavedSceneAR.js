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
  ViroText,
  ViroFlexView
} from "react-viro";
import Frame from "./Frame.js";

export default class SavedSceneAR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Initializing AR...",
      images: this.props.arSceneNavigator.viroAppProps.images //images from db?
    };
  }

  render() {
    return (
      <ViroARScene
        onTrackingUpdated={this._onInitialized}
        displayPointCloud={true}
      >
        {images.map((image, index) => {
          return (
            <Frame
              size={[this.state.height]}
              image={image}
              key={index}
              index={index}
            />
          );
        })}
      </ViroARScene>
    );
  }
  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}
