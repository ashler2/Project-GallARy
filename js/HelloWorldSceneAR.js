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
  ViroText,
  ViroFlexView
} from "react-viro";
import Frame from "./Frame.js";
export default class HelloWorldSceneAR extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Initializing AR...",
      height: 5,
      width: 5,
      status: "height",
      images: this.props.arSceneNavigator.viroAppProps.images,
      render: this.props.arSceneNavigator.viroAppProps.clicked
    };

    this._onInitialized = this._onInitialized.bind(this);
    this._onPinch = this._onPinch.bind(this);
    this._onButtonTap = this._onButtonTap.bind(this);
  }

  render() {
    let { images } = this.state;

    console.log(this.props.arSceneNavigator.viroAppProps);
    console.log(this.state);
    return this.state.render ? (
      this.statusTrue()
    ) : (
      <ViroARScene
        onTrackingUpdated={this._onInitialized}
        displayPointCloud={true}
      />
    );
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (
      this.props.arSceneNavigator.viroAppProps.clicked !== this.state.render
    ) {
      this.setState({ render: true });
    }
  };
  statusTrue = () => {
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
          opacity={0.5}
        />
        {images.map((image, index) => {
          return <Frame size={[this.state.height]} image={image} key={index} />;
        })}
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
  };
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
    diffuseTexture: require("./res/grid.png")
  }
});

module.exports = HelloWorldSceneAR;
