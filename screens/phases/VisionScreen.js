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

class VisionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: this.props.user.nickname || "",
      exercice_state_9: this.props.exercices.exercice_state_9 || "",
      exercice_state_10: this.props.exercices.exercice_state_10 || "",
      exercice_state_11: this.props.exercices.exercice_state_11 || "",
      exercice_state_12: this.props.exercices.exercice_state_12 || ""
    };
  }

  onSignoutPress = () => {
    firebase.auth().signOut();
  };

  render() {
    let ExerciceStyle_9 = "";

    switch (this.props.exercices.exercice_state_9) {
      case "completed":
        ExerciceStyle_9 = styles.completed;
        break;
      case "next":
        ExerciceStyle_9 = styles.next;
        break;
      case "new":
        ExerciceStyle_9 = styles.new;
        break;
      default:
        ExerciceStyle_9 = styles.locked;
    }

    let ExerciceTextStyle_9 = "";

    switch (this.props.exercices.exercice_state_9) {
      case "completed":
        ExerciceTextStyle_9 = styles.text_completed;
        break;
      case "next":
        ExerciceTextStyle_9 = styles.text_next;
        break;
      case "new":
        ExerciceTextStyle_9 = styles.text_new;
        break;
      default:
        ExerciceTextStyle_9 = styles.text_locked;
    }

    let IconsExercice_9 = "";

    switch (this.props.exercices.exercice_state_9) {
      case "completed":
        IconsExercice_9 = require("./../../assets/images/checkmark_vision.png");
        break;
      case "next":
        IconsExercice_9 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        IconsExercice_9 = require("./../../assets/images/newmark_vision.png");
        break;
      default:
        IconsExercice_9 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceStyle_10 = "";

    switch (this.props.exercices.exercice_state_10) {
      case "completed":
        ExerciceStyle_10 = styles.completed;
        break;
      case "next":
        ExerciceStyle_10 = styles.next;
        break;
      case "new":
        ExerciceStyle_10 = styles.new;
        break;
      default:
        ExerciceStyle_10 = styles.locked;
    }

    let ExerciceTextStyle_10 = "";

    switch (this.props.exercices.exercice_state_10) {
      case "completed":
        ExerciceTextStyle_10 = styles.text_completed;
        break;
      case "next":
        ExerciceTextStyle_10 = styles.text_next;
        break;
      case "new":
        ExerciceTextStyle_10 = styles.text_new;
        break;
      default:
        ExerciceTextStyle_10 = styles.text_locked;
    }

    let IconsExercice_10 = "";

    switch (this.props.exercices.exercice_state_10) {
      case "completed":
      IconsExercice_10 = require("./../../assets/images/checkmark_vision.png");
        break;
      case "next":
      IconsExercice_10 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
      IconsExercice_10 = require("./../../assets/images/newmark_vision.png");
        break;
      default:
      IconsExercice_10 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceStyle_11 = "";

    switch (this.props.exercices.exercice_state_11) {
      case "completed":
        ExerciceStyle_11 = styles.completed;
        break;
      case "next":
        ExerciceStyle_11 = styles.next;
        break;
      case "new":
        ExerciceStyle_11 = styles.new;
        break;
      default:
        ExerciceStyle_11 = styles.locked;
    }

    let ExerciceTextStyle_11 = "";

    switch (this.props.exercices.exercice_state_11) {
      case "completed":
        ExerciceTextStyle_11 = styles.text_completed;
        break;
      case "next":
        ExerciceTextStyle_11 = styles.text_next;
        break;
      case "new":
        ExerciceTextStyle_11 = styles.text_new;
        break;
      default:
        ExerciceTextStyle_11 = styles.text_locked;
    }

    let IconsExercice_11 = "";

    switch (this.props.exercices.exercice_state_11) {
      case "completed":
      IconsExercice_11 = require("./../../assets/images/checkmark_vision.png");
        break;
      case "next":
      IconsExercice_11 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
      IconsExercice_11 = require("./../../assets/images/newmark_vision.png");
        break;
      default:
      IconsExercice_11 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceStyle_12 = "";

    switch (this.props.exercices.exercice_state_12) {
      case "completed":
        ExerciceStyle_12 = styles.completed;
        break;
      case "next":
        ExerciceStyle_12 = styles.next;
        break;
      case "new":
        ExerciceStyle_12 = styles.new;
        break;
      default:
        ExerciceStyle_12 = styles.locked;
    }

    let ExerciceTextStyle_12 = "";

    switch (this.props.exercices.exercice_state_12) {
      case "completed":
        ExerciceTextStyle_12 = styles.text_completed;
        break;
      case "next":
        ExerciceTextStyle_12 = styles.text_next;
        break;
      case "new":
        ExerciceTextStyle_12 = styles.text_new;
        break;
      default:
        ExerciceTextStyle_12 = styles.text_locked;
    }

    let IconsExercice_12 = "";

    switch (this.props.exercices.exercice_state_12) {
      case "completed":
      IconsExercice_12 = require("./../../assets/images/checkmark_vision.png");
        break;
      case "next":
      IconsExercice_12 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
      IconsExercice_12 = require("./../../assets/images/newmark_vision.png");
        break;
      default:
      IconsExercice_12 = require("./../../assets/images/lockmark.png");
    }

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={{ flex: 1 }}>
          <Text style={styles.header}>
            Vision
          </Text>

          <Image
              style={styles.center}
              source={require("./../../assets/images/ObservePhase.png")}
            />

          <View style={styles.bottom}>
            <ExerciceButton
              onPress={() => {
                console.log(this.props.exercices.exercice_state_9);
              }}
              style={ExerciceStyle_9}
            >
              <Text style={ExerciceTextStyle_9}>Day 9 - Exploring Values</Text>
              <Image
                style={styles.exercice_button_icon}
                source={IconsExercice_9}
              />
            </ExerciceButton>

            <ExerciceButton
              onPress={() => {
                console.log(this.props.exercices.exercice_state_10);
              }}
              style={ExerciceStyle_10}
            >
              <Text style={ExerciceTextStyle_10}>
              Day 10 - Meaningful Smartphone Activities
              </Text>
              <Image
                style={styles.exercice_button_icon}
                source={IconsExercice_10}
              />
            </ExerciceButton>

            <ExerciceButton
              onPress={() => {
                console.log(this.props.exercices.exercice_state_11);
              }}
              style={ExerciceStyle_11}
            >
              <Text style={ExerciceTextStyle_11}>Day 11 - 54321 Trick</Text>
              <Image
                style={styles.exercice_button_icon}
                source={IconsExercice_11}
              />
            </ExerciceButton>

            <ExerciceButton
              onPress={() => {
                console.log(this.props.exercices.exercice_state_12);
              }}
              style={ExerciceStyle_12}
            >
              <Text style={ExerciceTextStyle_12}>Day 12 - Inner Scientist</Text>
              <Image
                style={styles.exercice_button_icon}
                source={IconsExercice_12}
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

export default connect(mapStateToProps)(VisionScreen);
