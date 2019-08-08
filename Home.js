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
        <View style={{ height: "70%", justifyContent: "center" }}>
          <Image source={require("./js/res/logo.png")} style={styles.logo} />
        </View>
        <View
          style={{
            height: "30%",
            flex: 1,
            flexDirection: "row"
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("loginScreen");
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("createUserScreen");
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Sign up</Text>
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
    flex: 0.7,
    resizeMode: "contain"
  },

  button: {
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#fff",
    flex: 1,
    height: "25%",
    margin: 20,
    marginTop: 0
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    padding: 10,
    fontFamily: "monospace"
  }
});
