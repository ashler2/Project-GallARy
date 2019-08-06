import React, { Component } from "react";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";

import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { human } from "react-native-typography";

export default class Instructions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    console.log(this.props);
    return (
      <View
        style={{
          position: "absolute",
          height: "100%",
          backgroundColor: "transparent",
          backfaceVisibility: "hidden",
          flex: 1
        }}
      >
        <Text
          style={{
            height: 100,
            color: "#fff",
            fontSize: 20,
            alignItems: "center",
            marginTop: 200,
            textAlign: "center",
            margin: 20
          }}
        >
          1. Walk up to the wall where you would like to position your gallARy.
        </Text>
        <Text
          style={{
            height: 100,
            color: "#fff",
            fontSize: 20,
            alignItems: "center",
            margin: 20,
            textAlign: "center"
          }}
        >
          2. Align the white line along the floor-wall intersection.
        </Text>

        <Text
          style={{
            backfaceVisibility: "hidden",
            width: "110%",
            backgroundColor: "white",
            position: "absolute",
            bottom: 200,
            zIndex: 100
          }}
        />

        <TouchableOpacity
          onPress={() => {
            this.props.nextScene();
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>3. Begin!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
    padding: 7,
    fontWeight: "bold"
  }
});
