import React, { Component } from "react";
import { View, Text } from "react-native";
import { observer } from "mobx-react";

export default class SizeBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static contextType = UiContext;
  render() {
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
}
