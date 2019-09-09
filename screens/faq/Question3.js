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

export default class Question3 extends React.Component {
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

          <Text style={styles.question}>I’m not sure if I am going to do the entire program. Should I
              still register for participation?</Text>

          <Text style={styles.answer}>You always have the right to skip study exercises and questionnaires. Additionally, you have the right to end your participation at any point of the study. In this case, you will not be eligible for the lottery of the online shop vouchers and not receive lifetime access to the Contenance App library. Moreover, you have the right of having all your data deleted. If you are a student, you’re lucky: We are able to give out “Versuchspersonenstunden” based on the time you spent in the study. (e.g. you stop after 10 days à 21/10 = 0,47 à you completed 0,47%. This means you get 0,47% of the 4 Versuchspersonenstunden = 0.47x4= 1.9 à this translates into 2 Versuchspersonenstunden)</Text>

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
