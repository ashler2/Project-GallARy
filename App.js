import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight
} from "react-native";

import { ViroARSceneNavigator } from "react-viro";
var sharedProps = {
  apiKey: "7BB9691F-8936-47AC-9FB7-12FD72152B10"
};

var InitialARScene = require("./js/HelloWorldSceneAR");

export default class ViroSample extends Component {
  constructor() {
    super();

    this.state = {
      sharedProps: sharedProps
    };
  }

  render() {
    return (
      <View style={localStyles.baseView}>
        <View style={localStyles.ARView}>
          <ViroARSceneNavigator
            {...this.state.sharedProps}
            initialScene={{ scene: InitialARScene }}
          />
        </View>
        <View style={localStyles.instructions}>
          <Text style={localStyles.instructionsText}>
            Align yellow line below along floor-wall intersection. Tap red
            button when happy.
          </Text>
          <Text style={localStyles.instructionsBar} />
        </View>
      </View>
    );
  }
}

var localStyles = StyleSheet.create({
  baseView: {
    position: "relative",
    flex: 9,
    zIndex: 0,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    backfaceVisibility: "hidden",
    alignSelf: "stretch",
    width: "100%"
    // opacity: 1
  },
  ARView: {
    position: "relative",
    width: "100%",
    flex: 1,
    marginTop: 40,
    marginBottom: 40,

    zIndex: 10
  },
  instructions: {
    flex: 1,
    alignContent: "stretch",
    position: "absolute",
    top: 150,

    alignSelf: "center",
    padding: 10,
    width: "100%",
    fontSize: 40,
    textAlign: "center",
    backgroundColor: "transparent",
    backfaceVisibility: "hidden",
    marginTop: 40,
    zIndex: 10
  },
  instructionsText: {
    backgroundColor: "yellow",
    fontSize: 30
  },
  instructionsBar: {
    width: "110%",
    backgroundColor: "blue",
    position: "absolute",
    top: 400
  },
  outer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 2
  },
  inner: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color: "#fff",
    textAlign: "center",
    fontSize: 25
  },
  buttonText: {
    flex: 1,
    position: "absolute",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
    top: "25%",
    right: 10,
    width: 80,
    height: 220
  },
  buttons: {
    height: 80,
    width: 150,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    marginBottom: 10,

    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  exitButton: {
    height: 50,
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,

    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  }
});

module.exports = ViroSample;
