import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Left,
  Body
} from "native-base";
import {
  TouchableHighlight,
  Image,
  TouchableOpacity,
  Text,
  View
} from "react-native";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: true
    };
  }
  render() {
    const { password } = this.state;
    const { navigation } = this.props;
    return (
      <Container style={{ backgroundColor: "#eb9080", marginTop: 23 }}>
        <TouchableHighlight
          onPress={() => {
            navigation.navigate("homeScreen");
          }}
          style={{
            marginTop: 20,
            marginLeft: 20,
            position: "absolute",
            zIndex: 100
          }}
        >
          <Image source={require("./js/res/back.png")} />
        </TouchableHighlight>
        <Text
          style={{
            marginTop: 100,
            zIndex: 100,
            color: "#fff",
            textAlign: "center",
            fontFamily: "monospace",
            fontSize: 60
          }}
        >
          Hello!
        </Text>
        {/* <Image
            source={require("./js/res/logo.png")}
          /> */}
        <Form
          style={{
            marginHorizontal: 30,
            marginTop: 100,
            marginBottom: 50,
            backgroundColor: "#fff",
            borderRadius: 10
          }}
        >
          <Item>
            <Input placeholder="Username" />
          </Item>
          <Item last>
            <Input
              placeholder="Password"
              secureTextEntry={this.state.password}
            />
          </Item>
        </Form>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ProfileScreen");
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
            Login
          </Text>
        </TouchableOpacity>
      </Container>
    );
  }
}
