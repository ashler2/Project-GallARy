import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Button } from "react-native";
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
            <Text style={styles.bold}> {this.state.num} </Text> images has been
            selected
          </Text>
          <Button
            title="Choose Photos"
            onPress={() => {
              navigation.navigate("welcomeScreen", {
                images: this.state.selected
              });
            }}
          />
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
    backgroundColor: "#F6AE2D"
  },
  content: {
    marginTop: 15,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap"
  },
  text: {
    fontSize: 16,
    alignItems: "center",
    color: "#fff"
  },
  bold: {
    fontWeight: "bold"
  },
  info: {
    fontSize: 12
  }
});
