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
          <Thumbnail source={require("../res/temp2.png")} />
        </Left>
        <Body>
          <Text>Test_User123</Text>
          <Text style={{ color: "white" }} note>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            ad neque voluptatem corrupti? Eveniet amet iusto aliquid corporis ad
            laborum? Molestiae excepturi illum esse dolorem consequuntur
            dignissimos debitis ad veritatis ipsum exercitationem omnis
            temporibus, iure dolor voluptatem culpa impedit eveniet aspernatur,
            optio fuga. Voluptatibus quasi fuga obcaecati corrupti cupiditate
            cum saepe, dignissimos officia assumenda nobis distinctio iure
            deleniti fugiat id eveniet consectetur laborum aspernatur dicta
            dolores, nulla totam repellendus accusantium! Dolor sequi iusto
            nulla dignissimos fugit blanditiis necessitatibus error omnis, modi
            nihil eligendi porro voluptatem perspiciatis ipsum exercitationem
            iure placeat quibusdam beatae neque suscipit? Labore sequi dolores
            temporibus error repudiandae!
          </Text>
        </Body>
        <Right>
          <Text style={{ color: "white" }} note>
            1 hour ago
          </Text>
        </Right>
      </ListItem>
    );
  }
}
