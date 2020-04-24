import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          paddingTop: 50,
          paddingLeft: 30,
          paddingRight: 30,
          alignItems: "center"
        }}
      >
        <Text style={styles.header}>Contact Us</Text>

        <Text style={styles.bold}>
          Do you have any comments, questions or feedback?
        </Text>

        <Text style={styles.text}>
          Shoot a message to:{"\n"}
          <Text style={styles.bold}>hello@notlessbutbetter.com</Text> and we’re
          going to come back to you asap.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    color: "#2C3B51",
    fontSize: 30,
    lineHeight: 37,
    textAlign: "center",
    fontFamily: "roboto-black",
    paddingBottom: 30
  },
  bold: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "left",
    fontFamily: "roboto-bold",
    alignSelf: "stretch",
    marginBottom: 30
  },
  text: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "left",
    fontFamily: "roboto-regular",
    alignSelf: "stretch",
    marginBottom: 30
  }
});
