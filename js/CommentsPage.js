import React, { Component } from "react";

import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text
} from "native-base";

import { TouchableHighlight, Image } from "react-native";
import CommentSection from "./CommentComponents/CommentCard";

export default class CommentsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: true
    };
  }
  render() {
    const { navigation } = this.props;
    return (
      <Container
        style={{
          backgroundColor: "#eb9080"
        }}
      >
        <Header
          style={{
            backgroundColor: "#eb9080"
          }}
        >
          <TouchableHighlight
            onPress={() => {
              navigation.navigate("ProfileScreen");
            }}
            style={{
              marginTop: 10,
              marginLeft: 20,
              position: "absolute",
              zIndex: 100
            }}
          >
            <Image source={require("./res/back.png")} />
          </TouchableHighlight>
          <Text
            style={{
              marginTop: 10,
              marginLeft: 20,
              position: "absolute",
              zIndex: 100
            }}
            style={{ color: "white" }}
          >
            Comments:
          </Text>
        </Header>
        <Content
          style={{
            backgroundColor: "#eb9080"
          }}
        >
          <List>
            <CommentSection />
          </List>
        </Content>
      </Container>
    );
  }
}
