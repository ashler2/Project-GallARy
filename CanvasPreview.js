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
    console.log(this.state);
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
          console.log(image.position[0], image.position[1]);
          let style = {
            position: "absolute",
            width: image.width * 100,
            height: image.height * 100
          };

          if (image.position[0] < 0) {
            style.right = 200 - image.position[0] * 100;
          }
          if (image.position[0] > 0) {
            style.left = 200 - image.position[0] * 100;
          }
          if (image.position[1] < 0) {
            style.bottom = 50 - image.position[1] * 45;
          }
          if (image.position[1] > 0) {
            style.top = 50 - image.position[1] * 45;
          }

          return (
            <Image key={index} source={{ uri: image.uri }} style={style} />
          );
        })}
      </View>
    );
  }
}

export default CanvasPreview;
