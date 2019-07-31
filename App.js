import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight
} from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
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
      <View style={localStyles.viroContainer}>
        <View style={localStyles.instructions}>
          <TouchableHighlight
            style={localStyles.buttons}
            underlayColor={"#68a0ff"}
          >
            <Text style={localStyles.buttonText}>AR</Text>
          </TouchableHighlight>
        </View>
        <Text
          style={{
            color: "white"
          }}
        >
          Align yellow line below along floor-wall intersection. Tap red button
          when happy.
        </Text>
        <ViroARSceneNavigator
          {...this.state.sharedProps}
          initialScene={{ scene: InitialARScene }}
        />
      </View>
    );
  }
}

var localStyles = StyleSheet.create({
  viroContainer: {
    flex: 3,
    marginTop: 40,
    marginBottom: 40,
    paddingTop: 30
  },
  instructions: {
    position: "absolute",
    marginTop: 40
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
