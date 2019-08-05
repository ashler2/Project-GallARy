"use strict";

import React, { Component } from "react";

import { StyleSheet } from "react-native";
import _ from "lodash";

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
      render: this.props.arSceneNavigator.viroAppProps.clicked,
      photo: true
    };

    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    let { images } = this.state;

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
    const {
      arSceneNavigator: {
        viroAppProps: {
          clicked,
          control,
          sliderHeight,
          sliderWidth,
          images,
          takePhoto
        }
      }
    } = this.props;
    const { render, status, width, height, photo } = this.state;

    if (clicked !== render) {
      this.setState({ render: true });
    }
    if (control !== status) {
      this.setState({
        status: control
      });
    }
    if (control === "width" && sliderWidth !== width) {
      this.setState({ width: sliderWidth });
    }
    if (control === "height" && sliderHeight !== height) {
      this.setState({ height: sliderHeight });
    }
    if (images !== this.state.images) {
      this.setState({ images: images });
    }
    if (takePhoto === photo) {
      // console.log(this.props.sceneNavigator.takeScreenshot);
      const { takeScreenshot } = this.props.sceneNavigator;
      console.log(this);
      console.log(takeScreenshot("test", true));
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
      </ViroARScene>
    );
  };
  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require("./res/grid.png")
  }
});

module.exports = HelloWorldSceneAR;
