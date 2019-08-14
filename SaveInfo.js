import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Left,
  Body,
  Icon,
  Picker
} from "native-base";
import {
  TouchableHighlight,
  Image,
  TouchableOpacity,
  Text,
  View
} from "react-native";

export default class SaveInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      public: true
    };
  }
  onValueChange(value) {
    this.setState({
      public: value
    });
  }
  render() {
    console.log(this.state);
    const { password } = this.state;
    const { navigation } = this.props;
    return (
      <Container
        style={{
          backgroundColor: "#605F5E",

          marginTop: 23
        }}
      >
        {/* <TouchableHighlight
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
        </TouchableHighlight> */}
        <Text
          style={{
            marginTop: 200,
            zIndex: 100,
            color: "#fff",
            textAlign: "left",
            marginLeft: 30,
            fontFamily: "monospace",
            fontSize: 24
          }}
        >
          New design:
        </Text>
        <Form
          style={{
            marginHorizontal: 20,
            marginTop: 20,
            marginBottom: 50
            // backgroundColor: "#fff",
          }}
        >
          <Item>
            <Input
              placeholder="Title"
              placeholderTextColor="#fff"
              style={{ color: "#fff", marginBottom: 10 }}
              onChangeText={title => this.setState({ title })}
              value={this.state.title}
            />
          </Item>
          <Item last>
            <Input
              placeholder="Description"
              placeholderTextColor="#fff"
              multiline={true}
              numberOfLines={1}
              style={{ color: "#fff" }}
              onChangeText={description => this.setState({ description })}
              value={this.state.description}
            />
          </Item>
          <Item picker last style={{ color: "fff" }} color="#fff">
            <Picker
              color="#fff"
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Share your design?"
              placeholderStyle={{ color: "#fff" }}
              placeholderIconColor="#fff"
              selectedValue={this.state.public}
              onValueChange={this.onValueChange.bind(this)}
              style={{ color: "fff", placeholderText: { color: "fff" } }}
              itemStyle={{ color: "fff" }}
            >
              <Picker.Item color="#eb9080" label="Public" value={true} />
              <Picker.Item color="#eb9080" label="Private" value={false} />
            </Picker>
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
            Save
          </Text>
        </TouchableOpacity>
      </Container>
    );
  }
}
