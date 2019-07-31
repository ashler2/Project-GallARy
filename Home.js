import React, { Component } from "react";
import { View, Text } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import App from "./App";
import Hello from "./Hello";
import CameraRoll from "./CameraRoll";
const switcher = createSwitchNavigator({
  cameraRollScreen: CameraRoll,
  anotherScreen: Hello,
  welcomeScreen: App
});
const PageNavigator = createAppContainer(switcher);

export default class Home extends Component {
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
// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen
//   }
// });
