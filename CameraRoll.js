import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
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
          <Text style={styles.text}>
            <Text style={styles.bold}> {this.state.num} </Text> images have been
            selected
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("instructionsScreen", {
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
          maximum={3}
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
    backgroundColor: "#254E58"
  },
  content: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
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
    fontSize: 16,
    alignItems: "center",
    color: "#fff",
    padding: 7,
    fontWeight: "bold"
  },

  bold: {
    fontWeight: "bold"
  },
  info: {
    fontSize: 12
  }
});
