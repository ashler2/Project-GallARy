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
import Profile from "./Profile";
import CreateUser from "./CreateUser";
import Login from "./Login";
const switcher = createSwitchNavigator({
  homeScreen: Home,
  cameraRollScreen: CameraRoll,
  instructionsScreen: Instructions,
  arScreen: App,
  CanvasPreview: CanvasPreview,
  ProfileScreen: Profile,
  createUserScreen: CreateUser,
  loginScreen: Login
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
