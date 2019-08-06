import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Image
} from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import CameraRollPicker from "react-native-camera-roll-picker";

export default class CameraRoll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 0,
      selected: []
    };

    this.getSelectedImages = this.getSelectedImages.bind(this);
  }

  getSelectedImages = (images, current) => {
    var num = images.length;
    this.setState({
      num: num,
      selected: images
    });
    console.log(this.state.selected);
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableHighlight
            onPress={() => {
              navigation.navigate("homeScreen");
            }}
          >
            <Image source={require("./js/res/back.png")} />
          </TouchableHighlight>
          <Text style={styles.text}>
            <Text style={styles.bold}> {this.state.num} </Text>
            photos selected
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("arScreen", {
                images: this.state.selected
              });
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Create gallARy</Text>
          </TouchableOpacity>
        </View>
        <CameraRollPicker
          groupTypes="SavedPhotos"
          maximum={10}
          selected={this.state.selected}
          assetType="Photos"
          imagesPerRow={3}
          imageMargin={5}
          callback={this.getSelectedImages}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eb9080"
  },
  content: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap"
  },
  text: {
    fontSize: 16,
    alignItems: "center",
    color: "#fff"
  },

  button: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  buttonText: {
    fontSize: 14,
    alignItems: "center",
    color: "#fff",
    padding: 5,
    fontWeight: "bold",
    fontFamily: "monospace"
  },

  bold: {
    fontWeight: "bold"
  },
  info: {
    fontSize: 12
  }
});
