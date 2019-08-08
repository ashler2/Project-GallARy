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
        <TouchableHighlight
          onPress={() => {
            navigation.navigate("ProfileScreen");
          }}
          style={{
            marginTop: 20,
            marginLeft: 20,
            position: "absolute",
            zIndex: 100
          }}
        >
          <Image source={require("./res/back.png")} />
        </TouchableHighlight>
        <Content
          style={{
            backgroundColor: "#eb9080"
          }}
        >
          <Text
            style={{
              fontSize: 24,
              textAlign: "center",
              color: "#fff",
              fontWeight: "bold",
              fontFamily: "monospace",
              margin: 20
            }}
          >
            Comments
          </Text>
          <List>
            <CommentSection />
          </List>
        </Content>
      </Container>
    );
  }
}
