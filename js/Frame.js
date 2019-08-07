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
import debounce from "./utils/utils";

export default class Frame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: [0, 0, -0.1],
      scale: 1,
      prevScale: 0
    };
  }

  render() {
    return (
      <View>
        <ViroImage
          scale={[
            (0.5 * this.props.image.width * this.state.scale) /
              this.props.image.height,
            0.5 * this.state.scale,
            1
          ]}
          position={this.state.position}
          source={this.props.image}
          dragPlane={{
            planePoint: [0, 0, -0.1],
            planeNormal: [0, 0, -0.1],
            maxDistance: 5
          }}
          dragType={"FixedToPlane"}
          onDrag={this.handleDrag}
          onPinch={this.handlePinch}
        />
      </View>
    );
  }

  handlePinch = (pinchState, scaleFactor, source) => {
    console.log("pinch end");
    debounce(this.setState({ scale: scaleFactor }), 5, false);
  };
  handleDrag = (dragToPos, source) => {
    let transformed = [...dragToPos];
    // debounce(
    //   this.setState({
    //     position: [
    //       Math.round(transformed[0] * 2) / 2,
    //       Math.round(transformed[1] * 2) / 2,
    //       -0.1
    //     ]
    //   }),
    //   5,
    //   false
    // );
    const { height, width } = this.props.heightWidthMain;

    const finHeight = height / 10;
    const botFinHeight = finHeight * -1;
    const finWidth = width / 10;
    const botFinWidth = finWidth * -1;
    const pixleH = this.props.image.height / 3779.52;
    const pixleW = this.props.image.width / 3779.52;

    console.log(this.state.scale);

    if (transformed[1] + pixleH > finHeight) {
      transformed[1] = finHeight;
    }
    if (transformed[1] + pixleH * -1 < botFinHeight) {
      transformed[1] = botFinHeight;
    }
    if (transformed[0] > finWidth + pixleW / this.props.image.height) {
      transformed[0] = finWidth + pixleW / this.props.image.height;
    }
    if (
      transformed[0] <
      botFinWidth + (pixleW / this.props.image.height) * -1
    ) {
      transformed[0] = botFinWidth + (pixleW / this.props.image.height) * -1;
    }

    this.props.cap({
      index: this.props.index,
      position: transformed,
      uri: this.props.image.uri,
      scale: this.state.scale
    });
    this.setState({ position: transformed });
  };
}
