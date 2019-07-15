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

class SupportScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: this.props.user.nickname || "",
      exercice_state_17: this.props.exercices.exercice_state_17 || "",
      exercice_state_18: this.props.exercices.exercice_state_18 || "",
      exercice_state_19: this.props.exercices.exercice_state_19 || "",
      exercice_state_20: this.props.exercices.exercice_state_20 || ""
    };
  }

  onSignoutPress = () => {
    firebase.auth().signOut();
  };

  render() {
    let ExerciceStyle_17 = "";

    switch (this.props.exercices.exercice_state_17) {
      case "completed":
        ExerciceStyle_17 = styles.completed;
        break;
      case "next":
        ExerciceStyle_17 = styles.next;
        break;
      case "new":
        ExerciceStyle_17 = styles.new;
        break;
      default:
        ExerciceStyle_17 = styles.locked;
    }

    let ExerciceTextStyle_17 = "";

    switch (this.props.exercices.exercice_state_17) {
      case "completed":
        ExerciceTextStyle_17 = styles.text_completed;
        break;
      case "next":
        ExerciceTextStyle_17 = styles.text_next;
        break;
      case "new":
        ExerciceTextStyle_17 = styles.text_new;
        break;
      default:
        ExerciceTextStyle_17 = styles.text_locked;
    }

    let IconsExercice_17 = "";

    switch (this.props.exercices.exercice_state_17) {
      case "completed":
        IconsExercice_17 = require("./../../assets/images/checkmark_support.png");
        break;
      case "next":
        IconsExercice_17 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        IconsExercice_17 = require("./../../assets/images/newmark_support.png");
        break;
      default:
        IconsExercice_17 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceStyle_18 = "";

    switch (this.props.exercices.exercice_state_18) {
      case "completed":
        ExerciceStyle_18 = styles.completed;
        break;
      case "next":
        ExerciceStyle_18 = styles.next;
        break;
      case "new":
        ExerciceStyle_18 = styles.new;
        break;
      default:
        ExerciceStyle_18 = styles.locked;
    }

    let ExerciceTextStyle_18 = "";

    switch (this.props.exercices.exercice_state_18) {
      case "completed":
        ExerciceTextStyle_18 = styles.text_completed;
        break;
      case "next":
        ExerciceTextStyle_18 = styles.text_next;
        break;
      case "new":
        ExerciceTextStyle_18 = styles.text_new;
        break;
      default:
        ExerciceTextStyle_18 = styles.text_locked;
    }

    let IconsExercice_18 = "";

    switch (this.props.exercices.exercice_state_18) {
      case "completed":
      IconsExercice_18 = require("./../../assets/images/checkmark_support.png");
        break;
      case "next":
      IconsExercice_18 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
      IconsExercice_18 = require("./../../assets/images/newmark_support.png");
        break;
      default:
      IconsExercice_18 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceStyle_19 = "";

    switch (this.props.exercices.exercice_state_19) {
      case "completed":
        ExerciceStyle_19 = styles.completed;
        break;
      case "next":
        ExerciceStyle_19 = styles.next;
        break;
      case "new":
        ExerciceStyle_19 = styles.new;
        break;
      default:
        ExerciceStyle_19 = styles.locked;
    }

    let ExerciceTextStyle_19 = "";

    switch (this.props.exercices.exercice_state_19) {
      case "completed":
        ExerciceTextStyle_19 = styles.text_completed;
        break;
      case "next":
        ExerciceTextStyle_19 = styles.text_next;
        break;
      case "new":
        ExerciceTextStyle_19 = styles.text_new;
        break;
      default:
        ExerciceTextStyle_19 = styles.text_locked;
    }

    let IconsExercice_19 = "";

    switch (this.props.exercices.exercice_state_19) {
      case "completed":
      IconsExercice_19 = require("./../../assets/images/checkmark_support.png");
        break;
      case "next":
      IconsExercice_19 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
      IconsExercice_19 = require("./../../assets/images/newmark_support.png");
        break;
      default:
      IconsExercice_19 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceStyle_20 = "";

    switch (this.props.exercices.exercice_state_20) {
      case "completed":
        ExerciceStyle_20 = styles.completed;
        break;
      case "next":
        ExerciceStyle_20 = styles.next;
        break;
      case "new":
        ExerciceStyle_20 = styles.new;
        break;
      default:
        ExerciceStyle_20 = styles.locked;
    }

    let ExerciceTextStyle_20 = "";

    switch (this.props.exercices.exercice_state_20) {
      case "completed":
        ExerciceTextStyle_20 = styles.text_completed;
        break;
      case "next":
        ExerciceTextStyle_20 = styles.text_next;
        break;
      case "new":
        ExerciceTextStyle_20 = styles.text_new;
        break;
      default:
        ExerciceTextStyle_20 = styles.text_locked;
    }

    let IconsExercice_20 = "";

    switch (this.props.exercices.exercice_state_20) {
      case "completed":
      IconsExercice_20 = require("./../../assets/images/checkmark_support.png");
        break;
      case "next":
      IconsExercice_20 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
      IconsExercice_20 = require("./../../assets/images/newmark_support.png");
        break;
      default:
      IconsExercice_20 = require("./../../assets/images/lockmark.png");
    }

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={{ flex: 1 }}>
          <Text style={styles.header}>
            Support
          </Text>

          <Image
              style={styles.center}
              source={require("./../../assets/images/ObservePhase.png")}
            />

          <View style={styles.bottom}>
            <ExerciceButton
              onPress={() => {
                console.log(this.props.exercices.exercice_state_17);
              }}
              style={ExerciceStyle_17}
            >
              <Text style={ExerciceTextStyle_17}>Day 17 - Taking Control on the Smartphone</Text>
              <Image
                style={styles.exercice_button_icon}
                source={IconsExercice_17}
              />
            </ExerciceButton>

            <ExerciceButton
              onPress={() => {
                console.log(this.props.exercices.exercice_state_18);
              }}
              style={ExerciceStyle_18}
            >
              <Text style={ExerciceTextStyle_18}>
              Day 18 - Taking Control of the Environment
              </Text>
              <Image
                style={styles.exercice_button_icon}
                source={IconsExercice_18}
              />
            </ExerciceButton>

            <ExerciceButton
              onPress={() => {
                console.log(this.props.exercices.exercice_state_19);
              }}
              style={ExerciceStyle_19}
            >
              <Text style={ExerciceTextStyle_19}>Day 19 - Me, the Smartphone and Others</Text>
              <Image
                style={styles.exercice_button_icon}
                source={IconsExercice_19}
              />
            </ExerciceButton>

            <ExerciceButton
              onPress={() => {
                console.log(this.props.exercices.exercice_state_20);
              }}
              style={ExerciceStyle_20}
            >
              <Text style={ExerciceTextStyle_20}>Day 20 - Daddeln is Okay</Text>
              <Image
                style={styles.exercice_button_icon}
                source={IconsExercice_20}
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
    backgroundColor: "#6A97D8",
    borderWidth: 2,
    borderColor: "#6A97D8",
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
    borderColor: "#6A97D8",
    borderRadius: 12,
    overflow: "hidden",
    padding: 15,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginBottom: 15
  },
  text_new: {
    color: "#6A97D8",
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

export default connect(mapStateToProps)(SupportScreen);
