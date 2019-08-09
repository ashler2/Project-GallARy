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
  Text,
  Form,
  Input,
  Item
} from "native-base";

import { TouchableHighlight, Image, TouchableOpacity } from "react-native";
import CommentSection from "./CommentComponents/CommentCard";

export default class CommentsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Rex",
      password: true,
      comment: "",
      posted: false,
      date: "Just now"
    };
  }
  render() {
    const { navigation } = this.props;
    console.log(this.state);
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
            <CommentSection
              comment={"great design"}
              username={"Holly"}
              date={"1hr ago"}
              avatarUrl={false}
            />

            {this.state.posted ? (
              <CommentSection
                comment={this.state.comment}
                username={this.state.username}
                date={this.state.date}
                avatarUrl={true}
              />
            ) : null}
          </List>
          <Form style={{ backgroundColor: "#eb9080" }}>
            <Item
              style={{
                backgroundColor: "#fff",
                margin: 40,
                marginRight: 20,
                marginBottom: 20,
                borderRadius: 10
              }}
            >
              <Input
                placeholder="Enter Comment"
                multiline={true}
                numberOfLines={4}
                onChangeText={comment => this.setState({ comment })}
                value={this.state.comment}
              />
            </Item>
          </Form>
          <TouchableOpacity
            onPress={() => {
              this.setState({ posted: true });
              // navigation.navigate("ProfileScreen");
            }}
            style={{
              borderRadius: 10,
              borderWidth: 3,
              borderColor: "#fff",
              marginHorizontal: 100
            }}
          >
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
                color: "#fff",
                padding: 5,
                fontWeight: "bold",
                fontFamily: "monospace"
              }}
            >
              Add Comment
            </Text>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}
