import React, { Component } from "react";
import { View, Text } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import App from "./App";
import Home from "./Home";
import CameraRoll from "./CameraRoll";
import Instructions from "./Instructions";
import CanvasPreview from "./CanvasPreview";
const switcher = createSwitchNavigator({
  homeScreen: Home,
  cameraRollScreen: CameraRoll,
  instructionsScreen: Instructions,
  arScreen: App,
  CanvasPreview: CanvasPreview
});
const PageNavigator = createAppContainer(switcher);

export default class NavigationMaster extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return <PageNavigator />;
  }
}
