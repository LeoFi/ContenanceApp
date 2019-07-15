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

class ObserveScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: this.props.user.nickname || "",
      exercice_state_1: this.props.exercices.exercice_state_1 || "",
      exercice_state_2: this.props.exercices.exercice_state_2 || ""
    };
  }

  onSignoutPress = () => {
    firebase.auth().signOut();
  };

  render() {
    let ExerciceStyle_1 = "";

    switch (this.props.exercices.exercice_state_1) {
      case "completed":
        ExerciceStyle_1 = styles.completed;
        break;
      case "next":
        ExerciceStyle_1 = styles.next;
        break;
      case "new":
        ExerciceStyle_1 = styles.new;
        break;
      default:
        ExerciceStyle_1 = styles.locked;
    }

    let ExerciceTextStyle_1 = "";

    switch (this.props.exercices.exercice_state_1) {
      case "completed":
        ExerciceTextStyle_1 = styles.text_completed;
        break;
      case "next":
        ExerciceTextStyle_1 = styles.text_next;
        break;
      case "new":
        ExerciceTextStyle_1 = styles.text_new;
        break;
      default:
        ExerciceTextStyle_1 = styles.text_locked;
    }

    let IconsExercice_1 = "";

    switch (this.props.exercices.exercice_state_1) {
      case "completed":
        IconsExercice_1 = require("./../../assets/images/checkmark_observe.png");
        break;
      case "next":
        IconsExercice_1 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
        IconsExercice_1 = require("./../../assets/images/newmark_observe.png");
        break;
      default:
        IconsExercice_1 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceStyle_2 = "";

    switch (this.props.exercices.exercice_state_2) {
      case "completed":
        ExerciceStyle_2 = styles.completed;
        break;
      case "next":
        ExerciceStyle_2 = styles.next;
        break;
      case "new":
        ExerciceStyle_2 = styles.new;
        break;
      default:
        ExerciceStyle_2 = styles.locked;
    }

    let ExerciceTextStyle_2 = "";

    switch (this.props.exercices.exercice_state_2) {
      case "completed":
        ExerciceTextStyle_2 = styles.text_completed;
        break;
      case "next":
        ExerciceTextStyle_2 = styles.text_next;
        break;
      case "new":
        ExerciceTextStyle_2 = styles.text_new;
        break;
      default:
        ExerciceTextStyle_2 = styles.text_locked;
    }

    let IconsExercice_2 = "";

    switch (this.props.exercices.exercice_state_2) {
      case "completed":
      IconsExercice_2 = require("./../../assets/images/checkmark_observe.png");
        break;
      case "next":
      IconsExercice_2 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
      IconsExercice_2 = require("./../../assets/images/newmark_observe.png");
        break;
      default:
      IconsExercice_2 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceStyle_3 = "";

    switch (this.props.exercices.exercice_state_3) {
      case "completed":
        ExerciceStyle_3 = styles.completed;
        break;
      case "next":
        ExerciceStyle_3 = styles.next;
        break;
      case "new":
        ExerciceStyle_3 = styles.new;
        break;
      default:
        ExerciceStyle_3 = styles.locked;
    }

    let ExerciceTextStyle_3 = "";

    switch (this.props.exercices.exercice_state_3) {
      case "completed":
        ExerciceTextStyle_3 = styles.text_completed;
        break;
      case "next":
        ExerciceTextStyle_3 = styles.text_next;
        break;
      case "new":
        ExerciceTextStyle_3 = styles.text_new;
        break;
      default:
        ExerciceTextStyle_3 = styles.text_locked;
    }

    let IconsExercice_3 = "";

    switch (this.props.exercices.exercice_state_3) {
      case "completed":
      IconsExercice_3 = require("./../../assets/images/checkmark_observe.png");
        break;
      case "next":
      IconsExercice_3 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
      IconsExercice_3 = require("./../../assets/images/newmark_observe.png");
        break;
      default:
      IconsExercice_3 = require("./../../assets/images/lockmark.png");
    }

    let ExerciceStyle_4 = "";

    switch (this.props.exercices.exercice_state_4) {
      case "completed":
        ExerciceStyle_4 = styles.completed;
        break;
      case "next":
        ExerciceStyle_4 = styles.next;
        break;
      case "new":
        ExerciceStyle_4 = styles.new;
        break;
      default:
        ExerciceStyle_4 = styles.locked;
    }

    let ExerciceTextStyle_4 = "";

    switch (this.props.exercices.exercice_state_4) {
      case "completed":
        ExerciceTextStyle_4 = styles.text_completed;
        break;
      case "next":
        ExerciceTextStyle_4 = styles.text_next;
        break;
      case "new":
        ExerciceTextStyle_4 = styles.text_new;
        break;
      default:
        ExerciceTextStyle_4 = styles.text_locked;
    }

    let IconsExercice_4 = "";

    switch (this.props.exercices.exercice_state_4) {
      case "completed":
      IconsExercice_4 = require("./../../assets/images/checkmark_observe.png");
        break;
      case "next":
      IconsExercice_4 = require("./../../assets/images/nextmark.png");
        break;
      case "new":
      IconsExercice_4 = require("./../../assets/images/newmark_observe.png");
        break;
      default:
      IconsExercice_4 = require("./../../assets/images/lockmark.png");
    }

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={{ flex: 1 }}>
          <Text style={styles.header}>
            Observe
            {/* {this.state.exercices.exercice_state_1}! */}
          </Text>

          <Image
              style={styles.center}
              source={require("./../../assets/images/ObservePhase.png")}
            />

          <View style={styles.bottom}>
            <ExerciceButton
              onPress={() => {
                console.log(this.props.exercices.exercice_state_1);
                //this.props.navigation.navigate("Intro_Phase_Observe");
              }}
              style={ExerciceStyle_1}
            >
              <Text style={ExerciceTextStyle_1}>Day 1 - Contenance</Text>
              <Image
                style={styles.exercice_button_icon}
                source={IconsExercice_1}
              />
            </ExerciceButton>

            <ExerciceButton
              onPress={() => {
                console.log(this.props.exercices.exercice_state_2);
                //this.props.navigation.navigate("Exercice_2_Intro");
              }}
              style={ExerciceStyle_2}
            >
              <Text style={ExerciceTextStyle_2}>
                Day 2 - Notice Your Impulses
              </Text>
              <Image
                style={styles.exercice_button_icon}
                source={IconsExercice_2}
              />
            </ExerciceButton>

            <ExerciceButton
              onPress={() => {
                console.log(this.props.exercices.exercice_state_3);
                //this.props.navigation.navigate("Exercice_2_Intro");
              }}
              style={ExerciceStyle_3}
            >
              <Text style={ExerciceTextStyle_3}>Day 3 - Solution Triangle</Text>
              <Image
                style={styles.exercice_button_icon}
                source={IconsExercice_3}
              />
            </ExerciceButton>

            <ExerciceButton
              onPress={() => {
                console.log(this.props.exercices.exercice_state_3);
                //this.props.navigation.navigate("Exercice_2_Intro");
              }}
              style={ExerciceStyle_4}
            >
              <Text style={ExerciceTextStyle_4}>Day 4 - Keep Breathing</Text>
              <Image
                style={styles.exercice_button_icon}
                source={IconsExercice_4}
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
    backgroundColor: "#A878CE",
    borderWidth: 2,
    borderColor: "#A878CE",
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
    borderColor: "#A878CE",
    borderRadius: 12,
    overflow: "hidden",
    padding: 15,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginBottom: 15
  },
  text_new: {
    color: "#A878CE",
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
