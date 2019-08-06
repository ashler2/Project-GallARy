import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";

import { human } from "react-native-typography";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={{ height: "80%", justifyContent: "center" }}>
          <Image source={require("./js/res/logo.png")} style={styles.logo} />
        </View>
        <View style={{ height: "20%" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("cameraRollScreen");
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Choose Photos</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#eb9080",
    height: "100%"
  },
  logo: {
    flex: 0.6,
    resizeMode: "contain"
  },

  button: { borderRadius: 10, borderWidth: 3, borderColor: "#fff" },
  buttonText: {
    fontSize: 20,
    alignItems: "center",
    color: "#fff",
    padding: 10,
    fontFamily: "monospace"
  }
});
