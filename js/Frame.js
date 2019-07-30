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
  ViroText
} from "react-viro";
export default class Frame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: [0, 0, -0.1]
    };
  }

  render() {
    return (
      <View>
        <ViroImage
          scale={[0.2, 0.2, 0.2]}
          position={this.state.position}
          source={this.props.image}
          // position={this.props.children.position}
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
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.position !== prevState.position) {
    }
  };
  handleDrag = (dragToPos, source) => {
    this.setState({ position: [dragToPos[0], dragToPos[1], dragToPos[2]] });
  };
}
