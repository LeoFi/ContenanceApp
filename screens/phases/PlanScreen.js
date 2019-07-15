import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
  StatusBar,
  Dimensions
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  ExerciceButton,
  HeaderComponent
} from "./../../components/AppComponents";
import * as firebase from "firebase";

import { connect } from "react-redux";

class PlanScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: this.props.user.nickname || "",
      exercice_state_13: this.props.exercices.exercice_state_13 || "",
      exercice_state_14: this.props.exercices.exercice_state_14 || "",
      exercice_state_15: this.props.exercices.exercice_state_15 || "",
      exercice_state_16: this.props.exercices.exercice_state_16 || ""
    };
  }

  onSignoutPress = () => {
    firebase.auth().signOut();
  };

  render() {
    let ExerciceStyle_13 = "";

    switch (this.props.exercices.exercice_state_13) {
      case "completed":
        ExerciceStyle_13 = styles.completed;
        break;
      case "next":
        ExerciceStyle_13 = styles.next;
        break;
      case "new":
        ExerciceStyle_13 = styles.new;
        break;
      default:
        ExerciceStyle_13 = styles.locked;
    }

    let ExerciceTextStyle_13 = "";

    switch (this.props.exercices.exercice_state_13) {
      case "completed":
        ExerciceTextStyle_13 = styles.text_completed;
        break;
      case "next":
        ExerciceTextStyle_13 = styles.text_next;
        break;
      case "new":
        ExerciceTextStyle_13 = styles.text_new;
        break;
      default:
        ExerciceTextStyle_13 = styles.text_locked;
    }

    let IconsExercice_13 = "";

    switch (this.props.exercices.exercice_state_13) {
      case "completed":
        IconsExercice_13 = require("./../../assets/images/checkmark_plan.png");
        break;
      case "next":
        IconsExercice_13 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        IconsExercice_13 = require("./../../assets/images/newmark_plan.png");
        break;
      default:
        IconsExercice_13 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceStyle_14 = "";

    switch (this.props.exercices.exercice_state_14) {
      case "completed":
        ExerciceStyle_14 = styles.completed;
        break;
      case "next":
        ExerciceStyle_14 = styles.next;
        break;
      case "new":
        ExerciceStyle_14 = styles.new;
        break;
      default:
        ExerciceStyle_14 = styles.locked;
    }

    let ExerciceTextStyle_14 = "";

    switch (this.props.exercices.exercice_state_14) {
      case "completed":
        ExerciceTextStyle_14 = styles.text_completed;
        break;
      case "next":
        ExerciceTextStyle_14 = styles.text_next;
        break;
      case "new":
        ExerciceTextStyle_14 = styles.text_new;
        break;
      default:
        ExerciceTextStyle_14 = styles.text_locked;
    }

    let IconsExercice_14 = "";

    switch (this.props.exercices.exercice_state_14) {
      case "completed":
      IconsExercice_14 = require("./../../assets/images/checkmark_plan.png");
        break;
      case "next":
      IconsExercice_14 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
      IconsExercice_14 = require("./../../assets/images/newmark_plan.png");
        break;
      default:
      IconsExercice_14 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceStyle_15 = "";

    switch (this.props.exercices.exercice_state_15) {
      case "completed":
        ExerciceStyle_15 = styles.completed;
        break;
      case "next":
        ExerciceStyle_15 = styles.next;
        break;
      case "new":
        ExerciceStyle_15 = styles.new;
        break;
      default:
        ExerciceStyle_15 = styles.locked;
    }

    let ExerciceTextStyle_15 = "";

    switch (this.props.exercices.exercice_state_15) {
      case "completed":
        ExerciceTextStyle_15 = styles.text_completed;
        break;
      case "next":
        ExerciceTextStyle_15 = styles.text_next;
        break;
      case "new":
        ExerciceTextStyle_15 = styles.text_new;
        break;
      default:
        ExerciceTextStyle_15 = styles.text_locked;
    }

    let IconsExercice_15 = "";

    switch (this.props.exercices.exercice_state_15) {
      case "completed":
      IconsExercice_15 = require("./../../assets/images/checkmark_plan.png");
        break;
      case "next":
      IconsExercice_15 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
      IconsExercice_15 = require("./../../assets/images/newmark_plan.png");
        break;
      default:
      IconsExercice_15 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceStyle_16 = "";

    switch (this.props.exercices.exercice_state_16) {
      case "completed":
        ExerciceStyle_16 = styles.completed;
        break;
      case "next":
        ExerciceStyle_16 = styles.next;
        break;
      case "new":
        ExerciceStyle_16 = styles.new;
        break;
      default:
        ExerciceStyle_16 = styles.locked;
    }

    let ExerciceTextStyle_16 = "";

    switch (this.props.exercices.exercice_state_16) {
      case "completed":
        ExerciceTextStyle_16 = styles.text_completed;
        break;
      case "next":
        ExerciceTextStyle_16 = styles.text_next;
        break;
      case "new":
        ExerciceTextStyle_16 = styles.text_new;
        break;
      default:
        ExerciceTextStyle_16 = styles.text_locked;
    }

    let IconsExercice_16 = "";

    switch (this.props.exercices.exercice_state_16) {
      case "completed":
      IconsExercice_16 = require("./../../assets/images/checkmark_plan.png");
        break;
      case "next":
      IconsExercice_16 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
      IconsExercice_16 = require("./../../assets/images/newmark_plan.png");
        break;
      default:
      IconsExercice_16 = require("./../../assets/images/lockmark.png");
    }

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={{ flex: 1 }}>
          <Text style={styles.header}>
            Plan
          </Text>

          <Image
              style={styles.center}
              source={require("./../../assets/images/ObservePhase.png")}
            />

          <View style={styles.bottom}>
            <ExerciceButton
              onPress={() => {
                console.log(this.props.exercices.exercice_state_13);
              }}
              style={ExerciceStyle_13}
            >
              <Text style={ExerciceTextStyle_13}>Day 13 - Meaningful Smartphone Habits</Text>
              <Image
                style={styles.exercice_button_icon}
                source={IconsExercice_13}
              />
            </ExerciceButton>

            <ExerciceButton
              onPress={() => {
                console.log(this.props.exercices.exercice_state_14);
              }}
              style={ExerciceStyle_14}
            >
              <Text style={ExerciceTextStyle_14}>
              Day 14 - Being Prepared for Challenges
              </Text>
              <Image
                style={styles.exercice_button_icon}
                source={IconsExercice_14}
              />
            </ExerciceButton>

            <ExerciceButton
              onPress={() => {
                console.log(this.props.exercices.exercice_state_15);
              }}
              style={ExerciceStyle_15}
            >
              <Text style={ExerciceTextStyle_15}>Day 15 - Beauty of Imagination</Text>
              <Image
                style={styles.exercice_button_icon}
                source={IconsExercice_15}
              />
            </ExerciceButton>

            <ExerciceButton
              onPress={() => {
                console.log(this.props.exercices.exercice_state_16);
              }}
              style={ExerciceStyle_16}
            >
              <Text style={ExerciceTextStyle_16}>Day 16 - Brain Reset</Text>
              <Image
                style={styles.exercice_button_icon}
                source={IconsExercice_16}
              />
            </ExerciceButton>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch"
  },
  container_scroll: {
    paddingTop: 80,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 40,
    flex: 1,
    alignSelf: "stretch"
  },
  center: {
    position: "relative",
    top: 0,
    left: 0
  },
  top: {
    flex: 1,
    justifyContent: "flex-start",
    alignSelf: "stretch"
  },
  middle: {
    justifyContent: "center",
    alignSelf: "stretch"
  },
  inline: {
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    alignSelf: "stretch",
    paddingTop: 20
  },
  bottom: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    //height: Dimensions.get("window").height / 2,
    position: "relative",
    bottom: 0
  },
  keyboard_view: {
    flex: 1
  },
  header: {
    color: "#2C3B51",
    fontSize: 30,
    lineHeight: 37,
    textAlign: "center",
    fontFamily: "roboto-black",
    paddingTop: 10,
    paddingBottom: 0
  },
  header_left: {
    color: "#2C3B51",
    fontSize: 30,
    lineHeight: 37,
    textAlign: "left",
    fontFamily: "roboto-black",
    paddingTop: 30,
    alignSelf: "stretch"
  },
  text: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "center",
    fontFamily: "roboto-regular"
  },
  text_left: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "left",
    fontFamily: "roboto-regular",
    alignSelf: "stretch",
    paddingBottom: 30
  },
  text_scroll: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "left",
    fontFamily: "roboto-regular"
  },
  codeInput: {
    marginTop: 43,
    alignSelf: "stretch",
    textAlign: "center",
    height: 40,
    fontSize: 19,
    borderBottomWidth: 2
  },
  usernameInput: {
    marginTop: 43,
    marginBottom: 43,
    alignSelf: "stretch",
    textAlign: "center",
    height: 40,
    fontSize: 19,
    borderBottomWidth: 2
  },
  exercice_button_icon: {
    alignSelf: "flex-end",
    top: -5,
    right: 20
  },
  completed: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "transparent",
    borderRadius: 12,
    padding: 15,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginBottom: 15
  },
  text_completed: {
    color: "#2C3B51",
    fontSize: 17,
    lineHeight: 23,
    textAlign: "left",
    fontFamily: "roboto-regular",
    textTransform: "capitalize",
    letterSpacing: 1,
    alignSelf: "flex-start"
  },
  next: {
    backgroundColor: "#F6B563",
    borderWidth: 2,
    borderColor: "#F6B563",
    borderRadius: 12,
    overflow: "hidden",
    padding: 15,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginBottom: 15
  },
  text_next: {
    color: "#FFFFFF",
    fontSize: 17,
    lineHeight: 23,
    textAlign: "left",
    fontFamily: "roboto-medium",
    textTransform: "capitalize",
    alignSelf: "flex-start",
    letterSpacing: 1
  },
  new: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#F6B563",
    borderRadius: 12,
    overflow: "hidden",
    padding: 15,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginBottom: 15
  },
  text_new: {
    color: "#F6B563",
    fontSize: 17,
    lineHeight: 23,
    textAlign: "left",
    fontFamily: "roboto-medium",
    textTransform: "capitalize",
    alignSelf: "flex-start",
    letterSpacing: 1
  },
  locked: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderTopColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "rgba(44, 59, 81, 0.3)",
    borderRadius: 0,
    overflow: "hidden",
    padding: 15,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginBottom: 15
  },
  text_locked: {
    color: "rgba(44, 59, 81, 0.3)",
    fontSize: 17,
    lineHeight: 23,
    textAlign: "left",
    fontFamily: "roboto-regular",
    textTransform: "capitalize",
    alignSelf: "flex-start",
    letterSpacing: 1
  }
});

const mapStateToProps = state => ({
  user: state.user,
  exercices: state.exercices
});

export default connect(mapStateToProps)(PlanScreen);
