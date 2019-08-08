import React, { Component } from "react";
import {
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";
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
import GallaryCard from "./GallaryCard";

class Profile extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header style={{ backgroundColor: "#eb9080" }}>
          {/* <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left> */}
          <Body
            style={{
              flex: 1,
              alignItems: "center"
            }}
          >
            <Image
              source={require("./js/res/headerLogo.png")}
              style={{
                height: 50,
                width: 170,
                flex: 1,
                alignContent: "center"
              }}
            />
          </Body>
          {/* <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right> */}
        </Header>
        <Grid>
          <Row size={1} style={{ backgroundColor: "#eb9080", opacity: 0.95 }}>
            <View
              style={{
                flex: 1,
                alignItems: "center"
              }}
            >
              <Thumbnail
                large
                source={{
                  uri:
                    "https://d339b5nop2tkmp.cloudfront.net/uploads/pictures/456/Viola_201044.jpg"
                }}
              />

              <Text
                style={{
                  fontSize: 24,
                  color: "#fff",
                  fontFamily: "monospace",
                  fontWeight: "bold"
                }}
              >
                Rex
              </Text>
              <View style={{ height: "20%" }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("cameraRollScreen");
                  }}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>New gallAry</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Row>
          <Row size={0.2}>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "#605F5E",
                  fontFamily: "monospace"
                }}
              >
                Current Designs
              </Text>
            </View>
          </Row>
          <Row size={2.9} style={{ backgroundColor: "#fff" }}>
            <ScrollView>
              <Content>
                <GallaryCard
                  cap={this.props.navigation.state.params.cap}
                  navigation={navigation}
                />
              </Content>
            </ScrollView>
          </Row>
        </Grid>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#eb9080",
    height: "100%"
  },
  logo: {
    flex: 0.6,
    resizeMode: "contain"
  },

  button: { borderRadius: 10, borderWidth: 3, borderColor: "#fff", margin: 10 },
  buttonText: {
    fontSize: 16,
    alignItems: "center",
    color: "#fff",
    padding: 8,
    fontFamily: "monospace"
  }
});

export default Profile;
