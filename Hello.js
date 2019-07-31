import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image
} from "react-native";

export default class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>gallARy</Text>
        <Image style={styles.logo} source={require("./js/res/gallery.jpg")} />
        <Button
          title="Choose Photos"
          onPress={() => this.props.navigation.navigate("CameraRoll")}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "white"
  },
  paragraph: {
    margin: 20,
    fontFamily: "ShadowsIntoLight-Regular",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  },
  logo: {
    height: 240,
    width: 280,
    margin: 20
  },
  button: {}
});
