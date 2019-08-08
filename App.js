import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  ScrollView,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
  Button,
  Image,
  TouchableOpacity
} from "react-native";
import Slider from "react-native-slider";
import { ViroARSceneNavigator } from "react-viro";
import Instructions from "./Instructions";
import StoreGlobal from "./GLOBALSTATE";

var sharedProps = {
  apiKey: "7BB9691F-8936-47AC-9FB7-12FD72152B10"
};
var Empty = require("./js/empty");
var InitialARScene = require("./js/HelloWorldSceneAR");

export default class ViroSample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sharedProps: sharedProps,
      status: false,
      fullCamera: "100%",
      toggler: "height",
      oppToggler: "Width",
      toggleAllowed: true,
      sliderValueWidth: 5,
      sliderValueHeight: 5,
      sliderValue: 5,
      imagePressed: [],
      cap: [],
      test: null
    };
  }

  render() {
    const { navigation } = this.props;

    return (
      <View
        style={{
          height: "100%",
          backfaceVisibility: "hidden",
          marginTop: 23
        }}
      >
        <TouchableHighlight
          style={{
            marginTop: 20,
            marginLeft: 20,
            position: "absolute",
            backgroundColor: "transparent",
            backfaceVisibility: "hidden",
            zIndex: 100
          }}
          onPress={() => {
            navigation.navigate("cameraRollScreen");
          }}
        >
          <Image source={require("./js/res/back.png")} />
        </TouchableHighlight>
        <View
          style={{
            height: this.state.fullCamera
          }}
        >
          <ViroARSceneNavigator
            {...this.state.sharedProps}
            initialScene={{
              scene: InitialARScene
            }}
            viroAppProps={{
              images: this.state.imagePressed,
              clicked: this.state.status,
              control: this.state.toggler,
              sliderHeight: this.state.sliderValueHeight,
              sliderWidth: this.state.sliderValueWidth,
              cap: things => {
                let { index } = things;
                let array = [...this.state.cap];
                array[index] = things;
                this.setState({
                  cap: array
                });
              },
              test: this.state.test
            }}
          />
        </View>
        {this.state.status ? this.NavBar() : this.overlay()}
      </View>
    );
  }
  nextScene = () => {
    this.setState({
      status: true,
      fullCamera: "87%",
      test: true
    });
  };

  overlay() {
    return <Instructions nextScene={this.nextScene} />;
  }
  NavBar = () => (this.state.toggleAllowed ? this.sizeBar() : this.photoBar());

  sizeBar() {
    return (
      <View
        style={{
          height: "10%",
          flexDirection: "row",
          backfaceVisibility: "hidden",
          backgroundColor: "#eb9080",
          justifyContent: "space-around"
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#eb9080",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            underlayColor="#00000000"
            title="Learn More"
            style={{
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "#fff",
              width: "80%"
            }}
            onPress={() => {
              {
                this.state.toggleAllowed ? this._onButtonTap() : null;
                if (this.state.toggler === "width") {
                  this.setState({
                    oppToggler: "Width"
                  });
                }

                if (this.state.toggler === "height") {
                  this.setState({
                    oppToggler: "Height"
                  });
                }
              }
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "#fff",
                alignItems: "center",
                padding: 2,
                fontWeight: "bold",
                fontFamily: "monospace",
                textAlign: "center"
              }}
            >
              Change Canvas {this.state.oppToggler}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 2,
            backgroundColor: "#eb9080"
          }}
        >
          <Slider
            minimumTrackTintColor="#fff"
            thumbTintColor="#fff"
            value={this.state.sliderValue}
            onValueChange={value => {
              if (this.state.toggler === "width") {
                this.setState({
                  sliderValueWidth: value
                });
              }

              if (this.state.toggler === "height") {
                this.setState({
                  sliderValueHeight: value
                });
              }
            }}
            maximumValue={10}
            style={{
              margin: 10,
              alignItems: "stretch",
              justifyContent: "center"
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "#eb9080",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            underlayColor="#00000000"
            title="Confirm Canvas"
            style={{
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "#fff",
              width: "80%"
            }}
            onPress={() => {
              this.allowToggle();
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "#fff",
                alignItems: "center",
                padding: 2,
                fontWeight: "bold",
                fontFamily: "monospace",
                textAlign: "center"
              }}
            >
              Confirm Canvas Size
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  photoBar() {
    const images = this.props.navigation.state.params.images;
    const { navigation } = this.props;
    return (
      <ScrollView
        horizontal={true}
        style={{
          backgroundColor: "#fff",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.5,
          shadowRadius: 3.84,
          elevation: 6
        }}
      >
        <TouchableHighlight
          onPress={() => {
            let prev = StoreGlobal({ type: "get", key: "saved" });
            prev.push(this.state.cap);
            StoreGlobal({ type: "set", key: "saved", value: prev });
            navigation.navigate("ProfileScreen");
          }}
          style={{
            borderRadius: 10,
            borderWidth: 3,
            borderColor: "#605F5E",
            margin: 30
          }}
        >
          <Text
            style={{
              fontSize: 20,
              alignItems: "center",
              padding: 5,
              fontWeight: "bold",
              fontFamily: "monospace"
            }}
          >
            Save gallARy
          </Text>
        </TouchableHighlight>
        {images.map((image, index) => {
          return (
            <TouchableHighlight
              key={index}
              underlayColor="white"
              style={{
                flex: 1,
                width: "100%",
                height: "100%",
                margin: 2
              }}
              onPress={() => {
                let arr = [];

                arr.push(...this.state.imagePressed, image);
                this.setState({ imagePressed: arr });
                images.splice(index, 1);
              }}
            >
              <View
                style={{
                  borderRadius: 3,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,
                  marginHorizontal: 15,
                  marginVertical: 10
                }}
              >
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 3
                  }}
                  source={{ uri: image.uri }}
                />
              </View>
            </TouchableHighlight>
          );
        })}
      </ScrollView>
    );
  }
  componentDidUpdate() {
    if (
      this.state.toggler === "width" &&
      this.state.sliderValue !== this.state.sliderValueWidth
    ) {
      this.setState({ sliderValue: this.state.sliderValueWidth });
    }
    if (
      this.state.toggler === "height" &&
      this.state.sliderValue !== this.state.sliderValueHeight
    ) {
      this.setState({ sliderValue: this.state.sliderValueHeight });
    }
  }
  allowToggle() {
    this.setState({ toggleAllowed: false });
  }
  _onButtonTap() {
    if (this.state.toggler !== "width") {
      return this.setState({
        toggler: "width"
      });
    }

    if (this.state.toggler === "width") {
      return this.setState({
        toggler: "height"
      });
    }
  }
}

var localStyles = StyleSheet.create({
  nav: {
    flex: 1,
    flexDirection: "row",
    backfaceVisibility: "visible"
  },
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
    backfaceVisibility: "hidden",
    backgroundColor: "yellow",
    fontSize: 30,
    zIndex: 100
  },
  instructionsBar: {
    backfaceVisibility: "hidden",
    width: "110%",
    backgroundColor: "blue",
    position: "absolute",
    top: 400,
    zIndex: 100
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
