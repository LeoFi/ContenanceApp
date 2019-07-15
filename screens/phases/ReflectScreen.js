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

class ReflectScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: this.props.user.nickname || "",
      exercice_state_5: this.props.exercices.exercice_state_5 || "",
      exercice_state_6: this.props.exercices.exercice_state_6 || "",
      exercice_state_7: this.props.exercices.exercice_state_7 || "",
      exercice_state_8: this.props.exercices.exercice_state_8 || ""
    };
  }

  onSignoutPress = () => {
    firebase.auth().signOut();
  };

  render() {
    let ExerciceStyle_5 = "";

    switch (this.props.exercices.exercice_state_5) {
      case "completed":
        ExerciceStyle_5 = styles.completed;
        break;
      case "next":
        ExerciceStyle_5 = styles.next;
        break;
      case "new":
        ExerciceStyle_5 = styles.new;
        break;
      default:
        ExerciceStyle_5 = styles.locked;
    }

    let ExerciceTextStyle_5 = "";

    switch (this.props.exercices.exercice_state_5) {
      case "completed":
        ExerciceTextStyle_5 = styles.text_completed;
        break;
      case "next":
        ExerciceTextStyle_5 = styles.text_next;
        break;
      case "new":
        ExerciceTextStyle_5 = styles.text_new;
        break;
      default:
        ExerciceTextStyle_5 = styles.text_locked;
    }

    let IconsExercice_5 = "";

    switch (this.props.exercices.exercice_state_5) {
      case "completed":
        IconsExercice_5 = require("./../../assets/images/checkmark_reflect.png");
        break;
      case "next":
        IconsExercice_5 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        IconsExercice_5 = require("./../../assets/images/newmark_reflect.png");
        break;
      default:
        IconsExercice_5 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceStyle_6 = "";

    switch (this.props.exercices.exercice_state_6) {
      case "completed":
        ExerciceStyle_6 = styles.completed;
        break;
      case "next":
        ExerciceStyle_6 = styles.next;
        break;
      case "new":
        ExerciceStyle_6 = styles.new;
        break;
      default:
        ExerciceStyle_6 = styles.locked;
    }

    let ExerciceTextStyle_6 = "";

    switch (this.props.exercices.exercice_state_6) {
      case "completed":
        ExerciceTextStyle_6 = styles.text_completed;
        break;
      case "next":
        ExerciceTextStyle_6 = styles.text_next;
        break;
      case "new":
        ExerciceTextStyle_6 = styles.text_new;
        break;
      default:
        ExerciceTextStyle_6 = styles.text_locked;
    }

    let IconsExercice_6 = "";

    switch (this.props.exercices.exercice_state_6) {
      case "completed":
      IconsExercice_6 = require("./../../assets/images/checkmark_reflect.png");
        break;
      case "next":
      IconsExercice_6 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
      IconsExercice_6 = require("./../../assets/images/newmark_reflect.png");
        break;
      default:
      IconsExercice_6 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceStyle_7 = "";

    switch (this.props.exercices.exercice_state_7) {
      case "completed":
        ExerciceStyle_7 = styles.completed;
        break;
      case "next":
        ExerciceStyle_7 = styles.next;
        break;
      case "new":
        ExerciceStyle_7 = styles.new;
        break;
      default:
        ExerciceStyle_7 = styles.locked;
    }

    let ExerciceTextStyle_7 = "";

    switch (this.props.exercices.exercice_state_7) {
      case "completed":
        ExerciceTextStyle_7 = styles.text_completed;
        break;
      case "next":
        ExerciceTextStyle_7 = styles.text_next;
        break;
      case "new":
        ExerciceTextStyle_7 = styles.text_new;
        break;
      default:
        ExerciceTextStyle_7 = styles.text_locked;
    }

    let IconsExercice_7 = "";

    switch (this.props.exercices.exercice_state_7) {
      case "completed":
      IconsExercice_7 = require("./../../assets/images/checkmark_reflect.png");
        break;
      case "next":
      IconsExercice_7 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
      IconsExercice_7 = require("./../../assets/images/newmark_reflect.png");
        break;
      default:
      IconsExercice_7 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceStyle_8 = "";

    switch (this.props.exercices.exercice_state_8) {
      case "completed":
        ExerciceStyle_8 = styles.completed;
        break;
      case "next":
        ExerciceStyle_8 = styles.next;
        break;
      case "new":
        ExerciceStyle_8 = styles.new;
        break;
      default:
        ExerciceStyle_8 = styles.locked;
    }

    let ExerciceTextStyle_8 = "";

    switch (this.props.exercices.exercice_state_8) {
      case "completed":
        ExerciceTextStyle_8 = styles.text_completed;
        break;
      case "next":
        ExerciceTextStyle_8 = styles.text_next;
        break;
      case "new":
        ExerciceTextStyle_8 = styles.text_new;
        break;
      default:
        ExerciceTextStyle_8 = styles.text_locked;
    }

    let IconsExercice_8 = "";

    switch (this.props.exercices.exercice_state_8) {
      case "completed":
      IconsExercice_8 = require("./../../assets/images/checkmark_reflect.png");
        break;
      case "next":
      IconsExercice_8 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
      IconsExercice_8 = require("./../../assets/images/newmark_reflect.png");
        break;
      default:
      IconsExercice_8 = require("./../../assets/images/lockmark.png");
    }

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={{ flex: 1 }}>
          <Text style={styles.header}>
            Reflect
          </Text>

          <Image
              style={styles.center}
              source={require("./../../assets/images/ReflectPhase.png")}
            />

          <View style={styles.bottom}>
            <ExerciceButton
              onPress={() => {
                console.log(this.props.exercices.exercice_state_5);
              }}
              style={ExerciceStyle_5}
            >
              <Text style={ExerciceTextStyle_5}>Day 5 - Habit Loop</Text>
              <Image
                style={styles.exercice_button_icon}
                source={IconsExercice_5}
              />
            </ExerciceButton>

            <ExerciceButton
              onPress={() => {
                console.log(this.props.exercices.exercice_state_6);
              }}
              style={ExerciceStyle_6}
            >
              <Text style={ExerciceTextStyle_6}>
                Day 6 - Exploring Emotional Triggers
              </Text>
              <Image
                style={styles.exercice_button_icon}
                source={IconsExercice_6}
              />
            </ExerciceButton>

            <ExerciceButton
              onPress={() => {
                console.log(this.props.exercices.exercice_state_7);
              }}
              style={ExerciceStyle_7}
            >
              <Text style={ExerciceTextStyle_7}>Day 7 - Getting Lost</Text>
              <Image
                style={styles.exercice_button_icon}
                source={IconsExercice_7}
              />
            </ExerciceButton>

            <ExerciceButton
              onPress={() => {
                console.log(this.props.exercices.exercice_state_7);
              }}
              style={ExerciceStyle_8}
            >
              <Text style={ExerciceTextStyle_8}>Day 8 - Mindful Social Media Use</Text>
              <Image
                style={styles.exercice_button_icon}
                source={IconsExercice_8}
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

export default connect(mapStateToProps)(ReflectScreen);
