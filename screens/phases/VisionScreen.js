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
      exercice_state_12: this.props.exercices.exercice_state_12 || "",
      reflection_state_3: this.props.exercices.reflection_state_3 || ""
    };
  }

  onSignoutPress = () => {
    firebase.auth().signOut();
  };

  render() {

    let ExerciceTextStyle_9 = "";
    let ExerciceStyle_9 = "";

    switch (this.props.exercices.exercice_state_9) {
      case "completed":
        ExerciceTextStyle_9 = styles.text_completed;
        ExerciceStyle_9 = styles.completed;
        IconsExercice_9 = require("./../../assets/images/checkmark_vision.png");
        break;
      case "next":
        ExerciceTextStyle_9 = styles.text_next;
        ExerciceStyle_9 = styles.next;
        IconsExercice_9 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_9 = styles.text_new;
        ExerciceStyle_9 = styles.new;
        IconsExercice_9 = require("./../../assets/images/newmark_vision.png");
        break;
      default:
        ExerciceTextStyle_9 = styles.text_locked;
        ExerciceStyle_9 = styles.locked;
        IconsExercice_9 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_10 = "";
    let ExerciceStyle_10 = "";

    switch (this.props.exercices.exercice_state_10) {
      case "completed":
        ExerciceTextStyle_10 = styles.text_completed;
        ExerciceStyle_10 = styles.completed;
        IconsExercice_10 = require("./../../assets/images/checkmark_vision.png");
        break;
      case "next":
        ExerciceTextStyle_10 = styles.text_next;
        ExerciceStyle_10 = styles.next;
        IconsExercice_10 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_10 = styles.text_new;
        ExerciceStyle_10 = styles.new;
        IconsExercice_10 = require("./../../assets/images/newmark_vision.png");
        break;
      default:
        ExerciceTextStyle_10 = styles.text_locked;
        ExerciceStyle_10 = styles.locked;
        IconsExercice_10 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_11 = "";
    let ExerciceStyle_11 = "";

    switch (this.props.exercices.exercice_state_11) {
      case "completed":
        ExerciceTextStyle_11 = styles.text_completed;
        ExerciceStyle_11 = styles.completed;
        IconsExercice_11 = require("./../../assets/images/checkmark_vision.png");
        break;
      case "next":
        ExerciceTextStyle_11 = styles.text_next;
        ExerciceStyle_11 = styles.next;
        IconsExercice_11 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_11 = styles.text_new;
        ExerciceStyle_11 = styles.new;
        IconsExercice_11 = require("./../../assets/images/newmark_vision.png");
        break;
      default:
        ExerciceTextStyle_11 = styles.text_locked;
        ExerciceStyle_11 = styles.locked;
        IconsExercice_11 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_12 = "";
    let ExerciceStyle_12 = "";

    switch (this.props.exercices.exercice_state_12) {
      case "completed":
        ExerciceTextStyle_12 = styles.text_completed;
        ExerciceStyle_12 = styles.completed;
        IconsExercice_12 = require("./../../assets/images/checkmark_vision.png");
        break;
      case "next":
        ExerciceTextStyle_12 = styles.text_next;
        ExerciceStyle_12 = styles.next;
        IconsExercice_12 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_12 = styles.text_new;
        ExerciceStyle_12 = styles.new;
        IconsExercice_12 = require("./../../assets/images/newmark_vision.png");
        break;
      default:
        ExerciceTextStyle_12 = styles.text_locked;
        ExerciceStyle_12 = styles.locked;
        IconsExercice_12 = require("./../../assets/images/lockmark.png");
    }

    let ReflectionTextStyle_3 = "";
    let ReflectionStyle_3 = "";

    switch (this.props.exercices.reflection_state_3) {
      case "completed":
        ReflectionTextStyle_3 = styles.text_completed;
        ReflectionStyle_3 = styles.completed;
        IconsReflection_3 = require("./../../assets/images/checkmark_vision.png");
        break;
      case "next":
        ReflectionTextStyle_3 = styles.text_next;
        ReflectionStyle_3 = styles.next;
        IconsReflection_3 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        ReflectionTextStyle_3 = styles.text_new;
        ReflectionStyle_3 = styles.new;
        IconsReflection_3 = require("./../../assets/images/newmark_vision.png");
        break;
      default:
        ReflectionTextStyle_3 = styles.text_locked;
        ReflectionStyle_3 = styles.locked;
        IconsReflection_3 = require("./../../assets/images/lockmark.png");
    }

    var ExercicesArray = [
      {
        id: 9,
        path: "Intro_Phase_Vision",
        label: "Day 9 - Exploring Values",
        styleButton: ExerciceStyle_9,
        styleText: ExerciceTextStyle_9,
        IconSource: IconsExercice_9,
        state: this.props.exercices.exercice_state_9
      },
      {
        id: 10,
        path: "Exercice_10_Intro",
        label: "Day 10 - Meaningful Smartphone Activities",
        styleButton: ExerciceStyle_10,
        styleText: ExerciceTextStyle_10,
        IconSource: IconsExercice_10,
        state: this.props.exercices.exercice_state_10
      },
      {
        id: 11,
        path: "Exercice_11_Intro",
        label: "Day 11 - 54321 Trick",
        styleButton: ExerciceStyle_11,
        styleText: ExerciceTextStyle_11,
        IconSource: IconsExercice_11,
        state: this.props.exercices.exercice_state_11
      },
      {
        id: 12,
        path: "Exercice_12_Intro",
        label: "Day 12 - Inner Scientist",
        styleButton: ExerciceStyle_12,
        styleText: ExerciceTextStyle_12,
        IconSource: IconsExercice_12,
        state: this.props.exercices.exercice_state_12
      },
      {
        id: 13,
        path: "Reflection_3_Intro",
        label: "Module Reflection",
        styleButton: ReflectionStyle_3,
        styleText: ReflectionTextStyle_3,
        IconSource: IconsReflection_3
      }
    ];

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={{ flex: 1 }}>
          <Text style={styles.header}>Vision</Text>

          <Image
            style={styles.center}
            source={require("./../../assets/images/ObservePhase.png")}
          />

          <View style={styles.bottom}>

            {ExercicesArray.map((item, key) => (
              <ExerciceButton
                key={key}
                onPress={() => {
                  {
                    this.props.navigation.navigate(item.path);
                  }
                }}
                style={item.styleButton}
                disabled={item.state === "locked" ? true : false}
              >
                <Text style={item.styleText}>{item.label}</Text>
                <Image
                  style={styles.exercice_button_icon}
                  source={item.IconSource}
                />
              </ExerciceButton>
            ))}

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
    backgroundColor: "#F87B7B",
    borderWidth: 2,
    borderColor: "#F87B7B",
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
    borderColor: "#F87B7B",
    borderRadius: 12,
    overflow: "hidden",
    padding: 15,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginBottom: 15
  },
  text_new: {
    color: "#F87B7B",
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
