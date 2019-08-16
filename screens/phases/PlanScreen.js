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
      exercice_state_16: this.props.exercices.exercice_state_16 || "",
      reflection_state_4: this.props.exercices.reflection_state_4 || ""
    };
  }

  onSignoutPress = () => {
    firebase.auth().signOut();
  };

  render() {

    let ExerciceTextStyle_13 = "";
    let ExerciceStyle_13 = "";

    switch (this.props.exercices.exercice_state_13) {
      case "completed":
        ExerciceTextStyle_13 = styles.text_completed;
        ExerciceStyle_13 = styles.completed;
        IconsExercice_13 = require("./../../assets/images/checkmark_plan.png");
        break;
      case "next":
        ExerciceTextStyle_13 = styles.text_next;
        ExerciceStyle_13 = styles.next;
        IconsExercice_13 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_13 = styles.text_new;
        ExerciceStyle_13 = styles.new;
        IconsExercice_13 = require("./../../assets/images/newmark_plan.png");
        break;
      default:
        ExerciceTextStyle_13 = styles.text_locked;
        ExerciceStyle_13 = styles.locked;
        IconsExercice_13 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_14 = "";
    let ExerciceStyle_14 = "";

    switch (this.props.exercices.exercice_state_14) {
      case "completed":
        ExerciceTextStyle_14 = styles.text_completed;
        ExerciceStyle_14 = styles.completed;
        IconsExercice_14 = require("./../../assets/images/checkmark_plan.png");
        break;
      case "next":
        ExerciceTextStyle_14 = styles.text_next;
        ExerciceStyle_14 = styles.next;
        IconsExercice_14 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_14 = styles.text_new;
        ExerciceStyle_14 = styles.new;
        IconsExercice_14 = require("./../../assets/images/newmark_plan.png");
        break;
      default:
        ExerciceTextStyle_14 = styles.text_locked;
        ExerciceStyle_14 = styles.locked;
        IconsExercice_14 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_15 = "";
    let ExerciceStyle_15 = "";

    switch (this.props.exercices.exercice_state_15) {
      case "completed":
        ExerciceTextStyle_15 = styles.text_completed;
        ExerciceStyle_15 = styles.completed;
        IconsExercice_15 = require("./../../assets/images/checkmark_plan.png");
        break;
      case "next":
        ExerciceTextStyle_15 = styles.text_next;
        ExerciceStyle_15 = styles.next;
        IconsExercice_15 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_15 = styles.text_new;
        ExerciceStyle_15 = styles.new;
        IconsExercice_15 = require("./../../assets/images/newmark_plan.png");
        break;
      default:
        ExerciceTextStyle_15 = styles.text_locked;
        ExerciceStyle_15 = styles.locked;
        IconsExercice_15 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_16 = "";
    let ExerciceStyle_16 = "";

    switch (this.props.exercices.exercice_state_16) {
      case "completed":
        ExerciceTextStyle_16 = styles.text_completed;
        ExerciceStyle_16 = styles.completed;
        IconsExercice_16 = require("./../../assets/images/checkmark_plan.png");
        break;
      case "next":
        ExerciceTextStyle_16 = styles.text_next;
        ExerciceStyle_16 = styles.next;
        IconsExercice_16 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_16 = styles.text_new;
        ExerciceStyle_16 = styles.new;
        IconsExercice_16 = require("./../../assets/images/newmark_plan.png");
        break;
      default:
        ExerciceTextStyle_16 = styles.text_locked;
        ExerciceStyle_16 = styles.locked;
        IconsExercice_16 = require("./../../assets/images/lockmark.png");
    }

    let ReflectionTextStyle_4 = "";
    let ReflectionStyle_4 = "";

    switch (this.props.exercices.reflection_state_4) {
      case "completed":
        ReflectionTextStyle_4 = styles.text_completed;
        ReflectionStyle_4 = styles.completed;
        IconsReflection_4 = require("./../../assets/images/checkmark_plan.png");
        break;
      case "next":
        ReflectionTextStyle_4 = styles.text_next;
        ReflectionStyle_4 = styles.next;
        IconsReflection_4 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        ReflectionTextStyle_4 = styles.text_new;
        ReflectionStyle_4 = styles.new;
        IconsReflection_4 = require("./../../assets/images/newmark_plan.png");
        break;
      default:
        ReflectionTextStyle_4 = styles.text_locked;
        ReflectionStyle_4 = styles.locked;
        IconsReflection_4 = require("./../../assets/images/lockmark.png");
    }

    var ExercicesArray = [
      {
        id: 13,
        path: "Intro_Phase_Plan",
        label: "Day 13 - Meaningful Smartphone Habits",
        styleButton: ExerciceStyle_13,
        styleText: ExerciceTextStyle_13,
        IconSource: IconsExercice_13,
        state: this.props.exercices.exercice_state_13
      },
      {
        id: 14,
        path: "Exercice_14_Intro",
        label: "Day 14 - Being Prepared for Challenges",
        styleButton: ExerciceStyle_14,
        styleText: ExerciceTextStyle_14,
        IconSource: IconsExercice_14,
        state: this.props.exercices.exercice_state_14
      },
      {
        id: 15,
        path: "Exercice_15_Intro",
        label: "Day 15 - Beauty of Imagination",
        styleButton: ExerciceStyle_15,
        styleText: ExerciceTextStyle_15,
        IconSource: IconsExercice_15,
        state: this.props.exercices.exercice_state_15
      },
      {
        id: 16,
        path: "Exercice_16_Intro",
        label: "Day 16 - Brain Reset",
        styleButton: ExerciceStyle_16,
        styleText: ExerciceTextStyle_16,
        IconSource: IconsExercice_16,
        state: this.props.exercices.exercice_state_16
      },
      {
        id: 17,
        path: "Reflection_4_Intro",
        label: "Module Reflection",
        styleButton: ReflectionStyle_4,
        styleText: ReflectionTextStyle_4,
        IconSource: IconsReflection_4
      }
    ];

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={{ flex: 1 }}>
          <Text style={styles.header}>Plan</Text>

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
    backgroundColor: "#4CBB92",
    borderWidth: 2,
    borderColor: "#4CBB92",
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
    borderColor: "#4CBB92",
    borderRadius: 12,
    overflow: "hidden",
    padding: 15,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginBottom: 15
  },
  text_new: {
    color: "#4CBB92",
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
