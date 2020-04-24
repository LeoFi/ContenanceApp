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

export default class Question4 extends React.Component {
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

          <Text style={styles.question}>What kind of data is assessed throughout the study?</Text>

          <Text style={styles.answer}>The only personal data we ask you to provide is an email address. We need it to send you the download link the study app. If you want to, we also send you reminders of the daily exercise, but only if you want us to do so. Most data is self-reports, meaning that there will be questionnaires in the app. They will be about your smartphone use, your feelings about it and your general wellbeing. The app can only track what you are doing directly on it while you are using it. This includes: Average Daily Sessions per Daily Active User (how many times you open and engage with the app, Average Session Length (how much time you spend in a session), Screen Flow (how you interact within the app), Completion Rate (how many exercises you complete). The app does not acquire or track any other smartphone data like e.g. gyroscope/accelerometry, screen on/off.</Text>

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
