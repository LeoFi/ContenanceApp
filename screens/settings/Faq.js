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

export default class Faq extends React.Component {
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
          alignItems: "center",
          justifyContent: "flex-start"
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.header}>FAQ</Text>

          <View
            style={{
              borderBottomColor: "#2C3B51",
              borderBottomWidth: 1,
              width: "100%",
              marginBottom: 30
            }}
          />
          <TouchableOpacity
            onPress={() => {
              {
                this.props.navigation.navigate("Question1");
              }
            }}
          >
            <Text style={styles.question}>Is the participation for free?</Text>
          </TouchableOpacity>

          <View
            style={{
              borderBottomColor: "#2C3B51",
              borderBottomWidth: 1,
              width: "100%",
              marginBottom: 30
            }}
          />
          <TouchableOpacity
            onPress={() => {
              {
                this.props.navigation.navigate("Question2");
              }
            }}
          >
            <Text style={styles.question}>
              Do I have to do the daily exercise for 21 days straight?
            </Text>
          </TouchableOpacity>

          <View
            style={{
              borderBottomColor: "#2C3B51",
              borderBottomWidth: 1,
              width: "100%",
              marginBottom: 30
            }}
          />
          <TouchableOpacity
            onPress={() => {
              {
                this.props.navigation.navigate("Question3");
              }
            }}
          >
            <Text style={styles.question}>
              I’m not sure if I am going to do the entire program. Should I
              still register for participation?
            </Text>
          </TouchableOpacity>

          <View
            style={{
              borderBottomColor: "#2C3B51",
              borderBottomWidth: 1,
              width: "100%",
              marginBottom: 30
            }}
          />
          <TouchableOpacity
            onPress={() => {
              {
                this.props.navigation.navigate("Question4");
              }
            }}
          >
            <Text style={styles.question}>
              What kind of data is assessed throughout the study?
            </Text>
          </TouchableOpacity>

          <View
            style={{
              borderBottomColor: "#2C3B51",
              borderBottomWidth: 1,
              width: "100%",
              marginBottom: 30
            }}
          />
          <TouchableOpacity
            onPress={() => {
              {
                this.props.navigation.navigate("Question5");
              }
            }}
          >
            <Text style={styles.question}>
              What does the declaration of consent form look like and where can
              I find it?
            </Text>
          </TouchableOpacity>

          <View
            style={{
              borderBottomColor: "#2C3B51",
              borderBottomWidth: 1,
              width: "100%",
              marginBottom: 30
            }}
          />
          <TouchableOpacity
            onPress={() => {
              {
                this.props.navigation.navigate("Question6");
              }
            }}
          >
            <Text style={styles.question}>
              I have another question. How can I reach out to you?
            </Text>
          </TouchableOpacity>
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
    fontFamily: "roboto-regular",
    alignSelf: "stretch",
    marginBottom: 30
  }
});
