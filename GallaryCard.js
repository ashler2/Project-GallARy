import React, { Component } from "react";
import { View, Image } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Card,
  CardItem,
  Content,
  Text,
  Thumbnail
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import CanvasPreview from "./CanvasPreview";
export default class GallaryCard extends Component {
  constructor(props) {
    super(props);
    this.state = { cap: this.props.cap };
  }

  render() {
    const { navigation } = this.props;
    console.log(this.state, "card state");
    return (
      <View>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail
                small
                source={{
                  uri:
                    "https://d339b5nop2tkmp.cloudfront.net/uploads/pictures/456/Viola_201044.jpg"
                }}
              />
              <Body>
                <Text>My Best Pal</Text>
                <Text note>By Rex</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            {/* <Image
                    source={{
                      uri:
                        "https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg"
                    }}
                    style={{ height: 200, width: null, flex: 1 }}
                  /> */}
            <View style={{ height: 200, width: null, flex: 1 }}>
              {!this.state.cap ? null : <CanvasPreview cap={this.state.cap} />}
            </View>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Image source={require("./js/res/heart.png")} />
                <Text style={{ color: "#605F5E" }}>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Image source={require("./js/res/comments.png")} />
                <Text style={{ color: "#605F5E" }}>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Button
                transparent
                onPress={() => {
                  navigation.navigate("arScreen", {
                    saved: this.props.cap
                  });
                }}
              >
                {/* <Image source={require("./js/res/ar_icon.png")} /> */}
                <Text style={{ color: "#605F5E" }}>View in AR</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
      </View>
    );
  }
}
