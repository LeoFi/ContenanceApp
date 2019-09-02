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
import HeaderTabBar from "./../../components/HeaderTabBar";

import { connect } from "react-redux";

class ObserveScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: this.props.user.nickname || "",
      exercice_state_1: this.props.exercices.exercice_state_1 || "",
      exercice_state_2: this.props.exercices.exercice_state_2 || "",
      exercice_state_3: this.props.exercices.exercice_state_3 || "",
      exercice_state_4: this.props.exercices.exercice_state_4 || "",
      reflection_state_1: this.props.exercices.reflection_state_1 || ""
    };
  }

  render() {
    let ExerciceTextStyle_1 = "";
    let ExerciceStyle_1 = "";

    switch (this.props.exercices.exercice_state_1) {
      case "completed":
        ExerciceTextStyle_1 = styles.text_completed;
        ExerciceStyle_1 = styles.completed;
        IconsExercice_1 = require("./../../assets/images/checkmark_observe.png");
        break;
      case "next":
        ExerciceTextStyle_1 = styles.text_next;
        ExerciceStyle_1 = styles.next;
        IconsExercice_1 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_1 = styles.text_new;
        ExerciceStyle_1 = styles.new;
        IconsExercice_1 = require("./../../assets/images/newmark_observe.png");
        break;
      default:
        ExerciceTextStyle_1 = styles.text_locked;
        ExerciceStyle_1 = styles.locked;
        IconsExercice_1 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_2 = "";
    let ExerciceStyle_2 = "";

    switch (this.props.exercices.exercice_state_2) {
      case "completed":
        ExerciceTextStyle_2 = styles.text_completed;
        ExerciceStyle_2 = styles.completed;
        IconsExercice_2 = require("./../../assets/images/checkmark_observe.png");
        break;
      case "next":
        ExerciceTextStyle_2 = styles.text_next;
        ExerciceStyle_2 = styles.next;
        IconsExercice_2 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_2 = styles.text_new;
        ExerciceStyle_2 = styles.new;
        IconsExercice_2 = require("./../../assets/images/newmark_observe.png");
        break;
      default:
        ExerciceTextStyle_2 = styles.text_locked;
        ExerciceStyle_2 = styles.locked;
        IconsExercice_2 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_3 = "";
    let ExerciceStyle_3 = "";

    switch (this.props.exercices.exercice_state_3) {
      case "completed":
        ExerciceTextStyle_3 = styles.text_completed;
        ExerciceStyle_3 = styles.completed;
        IconsExercice_3 = require("./../../assets/images/checkmark_observe.png");
        break;
      case "next":
        ExerciceTextStyle_3 = styles.text_next;
        ExerciceStyle_3 = styles.next;
        IconsExercice_3 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_3 = styles.text_new;
        ExerciceStyle_3 = styles.new;
        IconsExercice_3 = require("./../../assets/images/newmark_observe.png");
        break;
      default:
        ExerciceTextStyle_3 = styles.text_locked;
        ExerciceStyle_3 = styles.locked;
        IconsExercice_3 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_4 = "";
    let ExerciceStyle_4 = "";

    switch (this.props.exercices.exercice_state_4) {
      case "completed":
        ExerciceTextStyle_4 = styles.text_completed;
        ExerciceStyle_4 = styles.completed;
        IconsExercice_4 = require("./../../assets/images/checkmark_observe.png");
        break;
      case "next":
        ExerciceTextStyle_4 = styles.text_next;
        ExerciceStyle_4 = styles.next;
        IconsExercice_4 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_4 = styles.text_new;
        ExerciceStyle_4 = styles.new;
        IconsExercice_4 = require("./../../assets/images/newmark_observe.png");
        break;
      default:
        ExerciceTextStyle_4 = styles.text_locked;
        ExerciceStyle_4 = styles.locked;
        IconsExercice_4 = require("./../../assets/images/lockmark.png");
    }

    let ReflectionTextStyle_1 = "";
    let ReflectionStyle_1 = "";

    switch (this.props.exercices.reflection_state_1) {
      case "completed":
        ReflectionTextStyle_1 = styles.text_completed;
        ReflectionStyle_1 = styles.completed;
        IconsReflection_1 = require("./../../assets/images/checkmark_observe.png");
        break;
      case "next":
        ReflectionTextStyle_1 = styles.text_next;
        ReflectionStyle_1 = styles.next;
        IconsReflection_1 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        ReflectionTextStyle_1 = styles.text_new;
        ReflectionStyle_1 = styles.new;
        IconsReflection_1 = require("./../../assets/images/newmark_observe.png");
        break;
      default:
        ReflectionTextStyle_1 = styles.text_locked;
        ReflectionStyle_1 = styles.locked;
        IconsReflection_1 = require("./../../assets/images/lockmark.png");
    }

    var ExercicesArray = [
      {
        id: 1,
        path: "Intro_Phase_Observe",
        label: "Day 1 - Contenance",
        styleButton: ExerciceStyle_1,
        styleText: ExerciceTextStyle_1,
        IconSource: IconsExercice_1,
        state: this.props.exercices.exercice_state_1
      },
      {
        id: 2,
        path: "Exercice_2_Intro",
        label: "Day 2 - Notice Your Impulses",
        styleButton: ExerciceStyle_2,
        styleText: ExerciceTextStyle_2,
        IconSource: IconsExercice_2,
        state: this.props.exercices.exercice_state_2
      },
      {
        id: 3,
        path: "Exercice_3_Intro",
        label: "Day 3 - Solution Triangle",
        styleButton: ExerciceStyle_3,
        styleText: ExerciceTextStyle_3,
        IconSource: IconsExercice_3,
        state: this.props.exercices.exercice_state_3
      },
      {
        id: 4,
        path: "Exercice_4_Intro",
        label: "Day 4 - Keep Breathing",
        styleButton: ExerciceStyle_4,
        styleText: ExerciceTextStyle_4,
        IconSource: IconsExercice_4,
        state: this.props.exercices.exercice_state_4
      },
      {
        id: 5,
        path: "Reflection_1_Intro",
        label: "Module Reflection",
        styleButton: ReflectionStyle_1,
        styleText: ReflectionTextStyle_1,
        IconSource: IconsReflection_1
      }
    ];

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ flex: 1 }}>
            {/* <Text style={styles.header}>Observe</Text> */}

            {/* <Image
              style={styles.center}
              source={require("./../../assets/images/ObservePhase.png")}
            /> */}

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
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
    alignItems: "center",
    alignSelf: "stretch",
    width: Dimensions.get("window").width,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
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
    left: 0,
    width: Dimensions.get("window").width
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
    bottom: 0,
    width: Dimensions.get("window").width
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
    backgroundColor: "#A28AD4",
    borderWidth: 2,
    borderColor: "#A28AD4",
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
    borderColor: "#A28AD4",
    borderRadius: 12,
    overflow: "hidden",
    padding: 15,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginBottom: 15
  },
  text_new: {
    color: "#A28AD4",
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

export default connect(mapStateToProps)(ObserveScreen);
