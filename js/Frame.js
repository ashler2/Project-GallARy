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

export default class Frame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: [0, 0, -0.1]
    };
  }

  render() {
    console.log(this.state);
    return (
      <View>
        <ViroImage
          scale={[(1 * this.props.image.width) / this.props.image.height, 1, 1]}
          position={this.state.position}
          source={this.props.image}
          dragPlane={{
            planePoint: [0, 0, -0.1],
            planeNormal: [0, 0, -0.1],
            maxDistance: 5
          }}
          dragType={"FixedToPlane"}
          onDrag={this.handleDrag}
        />
      </View>
    );
  }

  handleMove = event => {};
  handleDrag = (dragToPos, source) => {
    let transformed = [...dragToPos];
    // transformed = transformed.map(pos => {
    //   return Math.round(pos);
    // });

    this.setState({
      position: [
        Math.round(transformed[0] * 5) / 5,
        Math.round(transformed[1] * 5) / 5,
        -0.1
      ]
    });
  };
}
