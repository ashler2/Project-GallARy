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

export default class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: true
    };
  }
  render() {
    return (
      <ListItem style={{ borderTopWidth: 1, borderBottomWidth: 1 }} avatar>
        <Left>
          <Thumbnail small source={require("../res/temp2.png")} />
        </Left>
        <Body>
          <Text
            style={{
              marginTop: 2,
              // marginBottom: ,
              fontSize: 16,
              textAlign: "left",
              color: "#fff",
              fontWeight: "bold",
              fontFamily: "monospace",
              color: "#605F5E"
            }}
          >
            Test_User123
          </Text>
          <Text
            style={{
              color: "white",
              marginBottom: 10,
              color: "#605F5E"
            }}
            note
          >
            1 hour ago
          </Text>
          <Text
            style={{ color: "white", textAlign: "justify", marginRight: 30 }}
            note
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            ad neque voluptatem corrupti? Eveniet amet iusto aliquid corporis ad
            laborum?
          </Text>
        </Body>
        {/* <Right>
          <Text style={{ color: "white", marginTop: 10 }} note>
            1 hour ago
          </Text>
        </Right> */}
      </ListItem>
    );
  }
}
