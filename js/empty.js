"use strict";

import React, { Component } from "react";

import { StyleSheet, PermissionsAndroid } from "react-native";

import { ViroARScene } from "react-viro";
var tests = require("./HelloWorldSceneAR");
export default class Empty extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: false,
      once: false,
      writeAccessPermission: false
    };
  }

  render() {
    let { images } = this.state;

    console.log(this.props.sceneNavigator);

    return <ViroARScene displayPointCloud={true} />;
  }

  componentDidUpdate() {
    const {
      arSceneNavigator: {
        viroAppProps: { test }
      }
    } = this.props;

    if (test !== this.state.test && this.state.once === false) {
      this.props.sceneNavigator.replace({ scene: tests });

      this.setState({ once: true });
    }
  }
}

module.exports = Empty;
