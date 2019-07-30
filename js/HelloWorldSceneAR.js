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
  ViroButton,
  ViroText
} from "react-viro";
import Frame from "./Frame.js";
export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    this.state = {
      text: "Initializing AR...",

      height: 5,
      width: 5,
      status: "height",
      images: [
        require("./res/temp1.png"),
        require("./res/temp2.png"),
        require("./res/temp3.png"),
        require("./res/temp4.png")
      ]
    };

    this._onInitialized = this._onInitialized.bind(this);
    this._onPinch = this._onPinch.bind(this);
    this._onRotate = this._onRotate.bind(this);
    this._onButtonTap = this._onButtonTap.bind(this);
  }

  render() {
    let { images } = this.state;
    return (
      <ViroARScene
        onTrackingUpdated={this._onInitialized}
        displayPointCloud={true}
      >
        <ViroBox
          position={[0, 0, -0.2]}
          height={this.state.height}
          width={this.state.width}
          length={1}
          onPinch={this._onPinch}
          scale={[0.3, 0.3, 0.1]}
          materials={["grid"]}
        />
        {images.map(image => {
          return <Frame size={[this.state.height]} image={image} />;
        })}

        {/* <ViroText
          text={this.state.text}
          textAlign="left"
          textAlignVertical="top"
          textLineBreakMode="justify"
          textClipMode="clipToBounds"
          color="#ff0000"
          width={0.5}
          height={0.5}
          position={[0.5, 0.1, -1]}
        /> */}
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
        text: this.state.height.toString()
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
  _onPinch(pinchState, scaleFactor, source) {
    if (pinchState == 2) {
      if (this.state.status === "width") {
        this.setState({ width: scaleFactor, text: scaleFactor.toString() });
        return;
      }

      if (this.state.status === "height") {
        this.setState({ height: scaleFactor });
        return;
      }
    }
    if (pinchState == 3) {
      if (this.state.status === "width") {
        this.setState({ width: scaleFactor, text: scaleFactor.toString() });
        return;
      }

      if (this.state.status === "height") {
        this.setState({ height: scaleFactor, text: scaleFactor.toString() });
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

  _onButtonTap() {
    if (this.state.status !== "width") {
      this.setState({
        status: "width"
      });
      return;
    }

    if (this.state.status === "width") {
      this.setState({
        status: "height"
      });
      return;
    }
  }
}

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require("./res/grid_bg.jpg")
  }
});

module.exports = HelloWorldSceneAR;
