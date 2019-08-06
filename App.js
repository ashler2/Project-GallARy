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
  Image
} from "react-native";
import Slider from "react-native-slider";
import { ViroARSceneNavigator } from "react-viro";
import Instructions from "./Instructions";

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
      toggleAllowed: true,
      sliderValueWidth: 5,
      sliderValueHeight: 5,
      sliderValue: 5,
      imagePressed: [],
      test: null,
      picture: false
    };
  }

  render() {
    return (
      <View
        style={{
          height: "100%",
          backfaceVisibility: "hidden"
        }}
      >
        <View
          style={{
            height: this.state.fullCamera
          }}
        >
          <ViroARSceneNavigator
            {...this.state.sharedProps}
            ref={ARSceneNav => (this.ARSceneNav = ARSceneNav)}
            initialScene={{
              scene: Empty
            }}
            viroAppProps={{
              images: this.state.imagePressed,
              clicked: this.state.status,
              control: this.state.toggler,
              sliderHeight: this.state.sliderValueHeight,
              sliderWidth: this.state.sliderValueWidth,
              test: this.state.test
            }}
          />
          <TouchableHighlight
            style={{
              position: "absolute",
              bottom: 20,
              backgroundColor: "red",
              height: 100
            }}
            onPress={this.testButton}
          >
            <Text>test</Text>
          </TouchableHighlight>
        </View>
        {this.state.status ? this.NavBar() : this.overlay()}
      </View>
    );
  }
  testButton = () => {
    this.setState({ picture: !this.state.picture });
    const test = async () => {
      return await this.ARSceneNav.sceneNavigator.takeScreenshot(
        "etesatg",
        true
      );
    };
    console.log(test());
  };

  // this.ARSceneNav.sceneNavigator.takeScreenshot("picture", true);
  // alert("TOUCHED!");

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
          backfaceVisibility: "hidden"
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "white"
          }}
        >
          <TouchableHighlight
            underlayColor="#00000000"
            title="Learn More"
            style={{
              backgroundColor: "white",
              height: "100%"
            }}
            onPress={() => {
              {
                this.state.toggleAllowed ? this._onButtonTap() : null;
              }
            }}
          >
            <Text
              style={{
                fontSize: 16,
                alignItems: "center",
                padding: 7,
                fontWeight: "bold"
              }}
            >
              Toggle canvas re-sizing!
            </Text>
          </TouchableHighlight>
        </View>
        <View
          style={{
            flex: 2,
            backgroundColor: "white"
          }}
        >
          <Slider
            value={this.state.sliderValue}
            onValueChange={value => {
              if (this.state.toggler === "width") {
                this.setState({ sliderValueWidth: value });
              }

              if (this.state.toggler === "height") {
                this.setState({ sliderValueHeight: value });
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
            backgroundColor: "white"
          }}
        >
          <TouchableHighlight
            underlayColor="#00000000"
            title="Learn More"
            style={{
              backgroundColor: "white",
              height: "100%"
            }}
            onPress={() => {
              this.allowToggle();
            }}
          >
            <Text
              style={{
                fontSize: 16,
                alignItems: "center",
                padding: 7,
                fontWeight: "bold"
              }}
            >
              Confirm canvas size
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
  photoBar() {
    const images = this.props.navigation.state.params.images;
    console.log(images);
    return (
      <ScrollView
        horizontal={true}
        style={{
          backgroundColor: "white",
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
                console.log(this.state.imagePressed);
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
