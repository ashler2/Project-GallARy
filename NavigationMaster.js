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
const switcher = createSwitchNavigator({
  homeScreen: Home,
  cameraRollScreen: CameraRoll,
  instructionsScreen: Instructions,
  arScreen: App
});
const PageNavigator = createAppContainer(switcher);

export default class NavigationMaster extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    console.log(navigation);
    return <PageNavigator />;
  }
}
