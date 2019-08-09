import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";

class CanvasPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props, "<<<< canvas props");
    const { navigation } = this.props;
    return (
      <View
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {this.props.cap.map((image, index) => {
          return (
            <Image
              source={{ uri: image.uri }}
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: image.width * 100,
                height: image.height * 100,
                right: (image.position[0] - image.width / 2) * 100,
                top: (image.position[1] + image.height / 2) * 100
              }}
            />
          );
        })}
      </View>
    );
  }
}

export default CanvasPreview;
