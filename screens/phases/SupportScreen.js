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
      exercice_state_20: this.props.exercices.exercice_state_20 || "",
      exercice_state_21: this.props.exercices.exercice_state_21 || "",
      reflection_state_5: this.props.exercices.reflection_state_5 || ""
    };
  }

  onSignoutPress = () => {
    firebase.auth().signOut();
  };

  render() {
    let ExerciceTextStyle_17 = "";
    let ExerciceStyle_17 = "";

    switch (this.props.exercices.exercice_state_17) {
      case "completed":
        ExerciceTextStyle_17 = styles.text_completed;
        ExerciceStyle_17 = styles.completed;
        IconsExercice_17 = require("./../../assets/images/checkmark_support.png");
        break;
      case "next":
        ExerciceTextStyle_17 = styles.text_next;
        ExerciceStyle_17 = styles.next;
        IconsExercice_17 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_17 = styles.text_new;
        ExerciceStyle_17 = styles.new;
        IconsExercice_17 = require("./../../assets/images/newmark_support.png");
        break;
      default:
        ExerciceTextStyle_17 = styles.text_locked;
        ExerciceStyle_17 = styles.locked;
        IconsExercice_17 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_18 = "";
    let ExerciceStyle_18 = "";

    switch (this.props.exercices.exercice_state_18) {
      case "completed":
        ExerciceTextStyle_18 = styles.text_completed;
        ExerciceStyle_18 = styles.completed;
        IconsExercice_18 = require("./../../assets/images/checkmark_support.png");
        break;
      case "next":
        ExerciceTextStyle_18 = styles.text_next;
        ExerciceStyle_18 = styles.next;
        IconsExercice_18 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_18 = styles.text_new;
        ExerciceStyle_18 = styles.new;
        IconsExercice_18 = require("./../../assets/images/newmark_support.png");
        break;
      default:
        ExerciceTextStyle_18 = styles.text_locked;
        ExerciceStyle_18 = styles.locked;
        IconsExercice_18 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_19 = "";
    let ExerciceStyle_19 = "";

    switch (this.props.exercices.exercice_state_19) {
      case "completed":
        ExerciceTextStyle_19 = styles.text_completed;
        ExerciceStyle_19 = styles.completed;
        IconsExercice_19 = require("./../../assets/images/checkmark_support.png");
        break;
      case "next":
        ExerciceTextStyle_19 = styles.text_next;
        ExerciceStyle_19 = styles.next;
        IconsExercice_19 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_19 = styles.text_new;
        ExerciceStyle_19 = styles.new;
        IconsExercice_19 = require("./../../assets/images/newmark_support.png");
        break;
      default:
        ExerciceTextStyle_19 = styles.text_locked;
        ExerciceStyle_19 = styles.locked;
        IconsExercice_19 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_20 = "";
    let ExerciceStyle_20 = "";

    switch (this.props.exercices.exercice_state_20) {
      case "completed":
        ExerciceTextStyle_20 = styles.text_completed;
        ExerciceStyle_20 = styles.completed;
        IconsExercice_20 = require("./../../assets/images/checkmark_support.png");
        break;
      case "next":
        ExerciceTextStyle_20 = styles.text_next;
        ExerciceStyle_20 = styles.next;
        IconsExercice_20 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_20 = styles.text_new;
        ExerciceStyle_20 = styles.new;
        IconsExercice_20 = require("./../../assets/images/newmark_support.png");
        break;
      default:
        ExerciceTextStyle_20 = styles.text_locked;
        ExerciceStyle_20 = styles.locked;
        IconsExercice_20 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_21 = "";
    let ExerciceStyle_21 = "";

    switch (this.props.exercices.exercice_state_21) {
      case "completed":
        ExerciceTextStyle_21 = styles.text_completed;
        ExerciceStyle_21 = styles.completed;
        IconsExercice_21 = require("./../../assets/images/checkmark_support.png");
        break;
      case "next":
        ExerciceTextStyle_21 = styles.text_next;
        ExerciceStyle_21 = styles.next;
        IconsExercice_21 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_21 = styles.text_new;
        ExerciceStyle_21 = styles.new;
        IconsExercice_21 = require("./../../assets/images/newmark_support.png");
        break;
      default:
        ExerciceTextStyle_21 = styles.text_locked;
        ExerciceStyle_21 = styles.locked;
        IconsExercice_21 = require("./../../assets/images/lockmark.png");
    }

    let ReflectionTextStyle_4 = "";
    let ReflectionStyle_4 = "";

    switch (this.props.exercices.reflection_state_4) {
      case "completed":
        ReflectionTextStyle_4 = styles.text_completed;
        ReflectionStyle_4 = styles.completed;
        IconsReflection_4 = require("./../../assets/images/checkmark_support.png");
        break;
      case "next":
        ReflectionTextStyle_4 = styles.text_next;
        ReflectionStyle_4 = styles.next;
        IconsReflection_4 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        ReflectionTextStyle_4 = styles.text_new;
        ReflectionStyle_4 = styles.new;
        IconsReflection_4 = require("./../../assets/images/newmark_support.png");
        break;
      default:
        ReflectionTextStyle_4 = styles.text_locked;
        ReflectionStyle_4 = styles.locked;
        IconsReflection_4 = require("./../../assets/images/lockmark.png");
    }

    var ExercicesArray = [
      {
        id: 17,
        path: "Intro_Phase_Support",
        label: "Day 17 - Taking Control on the Smartphone",
        styleButton: ExerciceStyle_17,
        styleText: ExerciceTextStyle_17,
        IconSource: IconsExercice_17,
        state: this.props.exercices.exercice_state_17
      },
      {
        id: 18,
        path: "Exercice_18_Intro",
        label: "Day 18 - Taking Control of the Environment",
        styleButton: ExerciceStyle_18,
        styleText: ExerciceTextStyle_18,
        IconSource: IconsExercice_18,
        state: this.props.exercices.exercice_state_18
      },
      {
        id: 19,
        path: "Exercice_19_Intro",
        label: "Day 19 - Me, the Smartphone and Others",
        styleButton: ExerciceStyle_19,
        styleText: ExerciceTextStyle_19,
        IconSource: IconsExercice_19,
        state: this.props.exercices.exercice_state_19
      },
      {
        id: 20,
        path: "Exercice_20_Intro",
        label: "Day 20 - Daddeln is Okay",
        styleButton: ExerciceStyle_20,
        styleText: ExerciceTextStyle_20,
        IconSource: IconsExercice_20,
        state: this.props.exercices.exercice_state_20
      },
      {
        id: 21,
        path: "Exercice_20_Intro",
        label: "Day 21 - Brain Reset",
        styleButton: ExerciceStyle_21,
        styleText: ExerciceTextStyle_21,
        IconSource: IconsExercice_21,
        state: this.props.exercices.exercice_state_21
      },
      {
        id: 22,
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
          <Text style={styles.header}>Support</Text>

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
    flex: 1,
    paddingBottom: 10,
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
