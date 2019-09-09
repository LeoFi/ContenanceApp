import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity
} from "react-native";

export default class Question2 extends React.Component {
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
          flex: 1,
          alignItems: "flex-start"
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.header}>FAQ</Text>

          <Text style={styles.question}>Do I have to do the daily exercise for 21 days straight?</Text>

          <Text style={styles.answer}>We strongly encourage you to take a bit of time every day to keep practicing continuously. But as we all know, life does not always happen as planned. Thus, you can catch up exercises if you happened to miss a day.</Text>

        </ScrollView>
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
    paddingBottom: 40
  },
  question: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "left",
    fontFamily: "roboto-bold",
    alignSelf: "stretch",
    marginBottom: 30
  },
  answer: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "left",
    fontFamily: "roboto-regular",
    alignSelf: "stretch",
    marginBottom: 30
  }
});
