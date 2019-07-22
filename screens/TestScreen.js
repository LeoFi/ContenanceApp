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
  Alert
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  ExerciceButton,
  HeaderComponent
} from "./../components/AppComponents";

import {
  updateState_Ex1,
  updateState_Ex2,
  updateState_Ex3,
  updateState_Ex4,
  updateState_Ex5,
  updateState_Ex6,
  updateState_Ex7,
  updateState_Ex8,
  updateState_Ex9,
  updateState_Ex10,
  updateState_Ex11,
  updateState_Ex12,
  updateState_Ex13,
  updateState_Ex14,
  updateState_Ex15,
  updateState_Ex16,
  updateState_Ex17,
  updateState_Ex18,
  updateState_Ex19,
  updateState_Ex20,
  updateState_Ex21
} from "./../redux-persist/redux/exercices";

import * as firebase from "firebase";

import { connect } from "react-redux";

class TestScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.compareDates();
  }

  compareDates = () => {
    const initialDate = this.props.user.initialDate;

    diff_days = (dt2, dt1) => {
      var diff = (dt2.getTime() - dt1.getTime()) / 1000;
      diff /= 60 * 60 * 24;
      return Math.abs(Math.round(diff));
    };

    dt1 = new Date(initialDate);
    dt2 = new Date(2019, 6, 29);
    //dt2 = new Date();

    var x = diff_days(dt1, dt2);

    console.log("DIFFERENCE" + x);
    const data = [
      {
        day: 1,
        function: updateState_Ex1,
        exercice: this.props.exercices.exercice_state_1
      },
      {
        day: 2,
        function: updateState_Ex2,
        exercice: this.props.exercices.exercice_state_2
      },
      {
        day: 3,
        function: updateState_Ex3,
        exercice: this.props.exercices.exercice_state_3
      },
      {
        day: 4,
        function: updateState_Ex4,
        exercice: this.props.exercices.exercice_state_4
      },
      {
        day: 5,
        function: updateState_Ex5,
        exercice: this.props.exercices.exercice_state_5
      },
      {
        day: 6,
        function: updateState_Ex6,
        exercice: this.props.exercices.exercice_state_6
      },
      {
        day: 7,
        function: updateState_Ex7,
        exercice: this.props.exercices.exercice_state_7
      },
      {
        day: 8,
        function: updateState_Ex8,
        exercice: this.props.exercices.exercice_state_8
      },
      {
        day: 9,
        function: updateState_Ex9,
        exercice: this.props.exercices.exercice_state_9
      },
      {
        day: 10,
        function: updateState_Ex10,
        exercice: this.props.exercices.exercice_state_10
      },
      {
        day: 11,
        function: updateState_Ex11,
        exercice: this.props.exercices.exercice_state_11
      },
      {
        day: 12,
        function: updateState_Ex12,
        exercice: this.props.exercices.exercice_state_12
      },
      {
        day: 13,
        function: updateState_Ex13,
        exercice: this.props.exercices.exercice_state_13
      },
      {
        day: 14,
        function: updateState_Ex14,
        exercice: this.props.exercices.exercice_state_14
      },
      {
        day: 15,
        function: updateState_Ex15,
        exercice: this.props.exercices.exercice_state_15
      },
      {
        day: 16,
        function: updateState_Ex16,
        exercice: this.props.exercices.exercice_state_16
      },
      {
        day: 17,
        function: updateState_Ex17,
        exercice: this.props.exercices.exercice_state_17
      },
      {
        day: 18,
        function: updateState_Ex18,
        exercice: this.props.exercices.exercice_state_18
      },
      {
        day: 19,
        function: updateState_Ex19,
        exercice: this.props.exercices.exercice_state_19
      },
      {
        day: 20,
        function: updateState_Ex20,
        exercice: this.props.exercices.exercice_state_20
      },
      {
        day: 21,
        function: updateState_Ex21,
        exercice: this.props.exercices.exercice_state_21
      }
    ];

    if (isNaN(x)) {
      //
    } else {
      for (let programLength = 0; programLength < 21; programLength++) {
        if (programLength === x && data[programLength].exercice == "locked") {
          console.log("Current Day AND exercice Locked");

          const TodayLocked = data
            .filter(item => item.exercice == "locked")
            .map(item => {
              return this.setState({ TodayLocked: "next" }, function() {
                this.props.dispatch(
                  data[programLength].function(this.state.TodayLocked)
                );
              });
            });
        } else if (programLength <= x) {
          const PastLocked = data
            .filter(item => item.exercice == "locked")
            .filter(item => item.day <= x)
            .map(item => {
              return this.setState({ item: "next" }, function() {
                this.props.dispatch(item.function(this.state.item));
              });
            });

          const PastUndefined = data
            .filter(item => item.exercice === undefined)
            .filter(item => item.day <= x)
            .map(item => {
              return this.setState({ item: "new" }, function() {
                this.props.dispatch(item.function(this.state.item));
              });
            });
        }
      }
    }
  };

  render() {
    let ExerciceTextStyle_1 = "";
    let ExerciceStyle_1 = "";

    switch (this.props.exercices.exercice_state_1) {
      case "completed":
        ExerciceTextStyle_1 = styles.text_completed;
        ExerciceStyle_1 = styles.completed;
        IconsExercice_1 = require("./../assets/images/checkmark_observe.png");
        break;
      case "next":
        ExerciceTextStyle_1 = styles.text_next;
        ExerciceStyle_1 = styles.next;
        IconsExercice_1 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_1 = styles.text_new;
        ExerciceStyle_1 = styles.new;
        IconsExercice_1 = require("./../assets/images/newmark_observe.png");
        break;
      case "locked":
        ExerciceTextStyle_1 = styles.text_locked;
        ExerciceStyle_1 = styles.locked;
        IconsExercice_1 = require("./../assets/images/lockmark.png");
        break;
      default:
        ExerciceTextStyle_1 = styles.text_locked;
        ExerciceStyle_1 = styles.locked;
        IconsExercice_1 = require("./../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_2 = "";
    let ExerciceStyle_2 = "";

    switch (this.props.exercices.exercice_state_2) {
      case "completed":
        ExerciceTextStyle_2 = styles.text_completed;
        ExerciceStyle_2 = styles.completed;
        IconsExercice_2 = require("./../assets/images/checkmark_observe.png");
        break;
      case "next":
        ExerciceTextStyle_2 = styles.text_next;
        ExerciceStyle_2 = styles.next;
        IconsExercice_2 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_2 = styles.text_new;
        ExerciceStyle_2 = styles.new;
        IconsExercice_2 = require("./../assets/images/newmark_observe.png");
        break;
      case "locked":
        ExerciceTextStyle_2 = styles.text_locked;
        ExerciceStyle_2 = styles.locked;
        IconsExercice_2 = require("./../assets/images/lockmark.png");
        break;
      default:
        ExerciceTextStyle_2 = styles.text_locked;
        ExerciceStyle_2 = styles.locked;
        IconsExercice_2 = require("./../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_3 = "";
    let ExerciceStyle_3 = "";

    switch (this.props.exercices.exercice_state_3) {
      case "completed":
        ExerciceTextStyle_3 = styles.text_completed;
        ExerciceStyle_3 = styles.completed;
        IconsExercice_3 = require("./../assets/images/checkmark_observe.png");
        break;
      case "next":
        ExerciceTextStyle_3 = styles.text_next;
        ExerciceStyle_3 = styles.next;
        IconsExercice_3 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_3 = styles.text_new;
        ExerciceStyle_3 = styles.new;
        IconsExercice_3 = require("./../assets/images/newmark_observe.png");
        break;
      case "locked":
        ExerciceTextStyle_3 = styles.text_locked;
        ExerciceStyle_3 = styles.locked;
        IconsExercice_3 = require("./../assets/images/lockmark.png");
        break;
      default:
        ExerciceTextStyle_3 = styles.text_locked;
        ExerciceStyle_3 = styles.locked;
        IconsExercice_3 = require("./../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_4 = "";
    let ExerciceStyle_4 = "";

    switch (this.props.exercices.exercice_state_4) {
      case "completed":
        ExerciceTextStyle_4 = styles.text_completed;
        ExerciceStyle_4 = styles.completed;
        IconsExercice_4 = require("./../assets/images/checkmark_observe.png");
        break;
      case "next":
        ExerciceTextStyle_4 = styles.text_next;
        ExerciceStyle_4 = styles.next;
        IconsExercice_4 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_4 = styles.text_new;
        ExerciceStyle_4 = styles.new;
        IconsExercice_4 = require("./../assets/images/newmark_observe.png");
        break;
      case "locked":
        ExerciceTextStyle_4 = styles.text_locked;
        ExerciceStyle_4 = styles.locked;
        IconsExercice_4 = require("./../assets/images/lockmark.png");
        break;
      default:
        ExerciceTextStyle_4 = styles.text_locked;
        ExerciceStyle_4 = styles.locked;
        IconsExercice_4 = require("./../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_5 = "";
    let ExerciceStyle_5 = "";

    switch (this.props.exercices.exercice_state_5) {
      case "completed":
        ExerciceTextStyle_5 = styles.text_completed;
        ExerciceStyle_5 = styles.completed;
        IconsExercice_5 = require("./../assets/images/checkmark_reflect.png");
        break;
      case "next":
        ExerciceTextStyle_5 = styles.text_next;
        ExerciceStyle_5 = styles.next;
        IconsExercice_5 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_5 = styles.text_new;
        ExerciceStyle_5 = styles.new;
        IconsExercice_5 = require("./../assets/images/newmark_reflect.png");
        break;
      case "locked":
        ExerciceTextStyle_5 = styles.text_locked;
        ExerciceStyle_5 = styles.locked;
        IconsExercice_5 = require("./../assets/images/lockmark.png");
        break;
      default:
        ExerciceTextStyle_5 = styles.text_locked;
        ExerciceStyle_5 = styles.locked;
        IconsExercice_5 = require("./../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_6 = "";
    let ExerciceStyle_6 = "";

    switch (this.props.exercices.exercice_state_6) {
      case "completed":
        ExerciceTextStyle_6 = styles.text_completed;
        ExerciceStyle_6 = styles.completed;
        IconsExercice_6 = require("./../assets/images/checkmark_reflect.png");
        break;
      case "next":
        ExerciceTextStyle_6 = styles.text_next;
        ExerciceStyle_6 = styles.next;
        IconsExercice_6 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_6 = styles.text_new;
        ExerciceStyle_6 = styles.new;
        IconsExercice_6 = require("./../assets/images/newmark_reflect.png");
        break;
      case "locked":
        ExerciceTextStyle_6 = styles.text_locked;
        ExerciceStyle_6 = styles.locked;
        IconsExercice_6 = require("./../assets/images/lockmark.png");
        break;
      default:
        ExerciceTextStyle_6 = styles.text_locked;
        ExerciceStyle_6 = styles.locked;
        IconsExercice_6 = require("./../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_7 = "";
    let ExerciceStyle_7 = "";

    switch (this.props.exercices.exercice_state_7) {
      case "completed":
        ExerciceTextStyle_7 = styles.text_completed;
        ExerciceStyle_7 = styles.completed;
        IconsExercice_7 = require("./../assets/images/checkmark_reflect.png");
        break;
      case "next":
        ExerciceTextStyle_7 = styles.text_next;
        ExerciceStyle_7 = styles.next;
        IconsExercice_7 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_7 = styles.text_new;
        ExerciceStyle_7 = styles.new;
        IconsExercice_7 = require("./../assets/images/newmark_reflect.png");
        break;
      case "locked":
        ExerciceTextStyle_7 = styles.text_locked;
        ExerciceStyle_7 = styles.locked;
        IconsExercice_7 = require("./../assets/images/lockmark.png");
        break;
      default:
        ExerciceTextStyle_7 = styles.text_locked;
        ExerciceStyle_7 = styles.locked;
        IconsExercice_7 = require("./../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_8 = "";
    let ExerciceStyle_8 = "";

    switch (this.props.exercices.exercice_state_8) {
      case "completed":
        ExerciceTextStyle_8 = styles.text_completed;
        ExerciceStyle_8 = styles.completed;
        IconsExercice_8 = require("./../assets/images/checkmark_reflect.png");
        break;
      case "next":
        ExerciceTextStyle_8 = styles.text_next;
        ExerciceStyle_8 = styles.next;
        IconsExercice_8 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_8 = styles.text_new;
        ExerciceStyle_8 = styles.new;
        IconsExercice_8 = require("./../assets/images/newmark_reflect.png");
        break;
      case "locked":
        ExerciceTextStyle_8 = styles.text_locked;
        ExerciceStyle_8 = styles.locked;
        IconsExercice_8 = require("./../assets/images/lockmark.png");
        break;
      default:
        ExerciceTextStyle_8 = styles.text_locked;
        ExerciceStyle_8 = styles.locked;
        IconsExercice_8 = require("./../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_9 = "";
    let ExerciceStyle_9 = "";

    switch (this.props.exercices.exercice_state_9) {
      case "completed":
        ExerciceTextStyle_9 = styles.text_completed;
        ExerciceStyle_9 = styles.completed;
        IconsExercice_9 = require("./../assets/images/checkmark_vision.png");
        break;
      case "next":
        ExerciceTextStyle_9 = styles.text_next;
        ExerciceStyle_9 = styles.next;
        IconsExercice_9 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_9 = styles.text_new;
        ExerciceStyle_9 = styles.new;
        IconsExercice_9 = require("./../assets/images/newmark_vision.png");
        break;
      case "locked":
        ExerciceTextStyle_9 = styles.text_locked;
        ExerciceStyle_9 = styles.locked;
        IconsExercice_9 = require("./../assets/images/lockmark.png");
        break;
      default:
        ExerciceTextStyle_9 = styles.text_locked;
        ExerciceStyle_9 = styles.locked;
        IconsExercice_9 = require("./../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_10 = "";
    let ExerciceStyle_10 = "";

    switch (this.props.exercices.exercice_state_10) {
      case "completed":
        ExerciceTextStyle_10 = styles.text_completed;
        ExerciceStyle_10 = styles.completed;
        IconsExercice_10 = require("./../assets/images/checkmark_vision.png");
        break;
      case "next":
        ExerciceTextStyle_10 = styles.text_next;
        ExerciceStyle_10 = styles.next;
        IconsExercice_10 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_10 = styles.text_new;
        ExerciceStyle_10 = styles.new;
        IconsExercice_10 = require("./../assets/images/newmark_vision.png");
        break;
      case "locked":
        ExerciceTextStyle_10 = styles.text_locked;
        ExerciceStyle_10 = styles.locked;
        IconsExercice_10 = require("./../assets/images/lockmark.png");
        break;
      default:
        ExerciceTextStyle_10 = styles.text_locked;
        ExerciceStyle_10 = styles.locked;
        IconsExercice_10 = require("./../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_11 = "";
    let ExerciceStyle_11 = "";

    switch (this.props.exercices.exercice_state_11) {
      case "completed":
        ExerciceTextStyle_11 = styles.text_completed;
        ExerciceStyle_11 = styles.completed;
        IconsExercice_11 = require("./../assets/images/checkmark_vision.png");
        break;
      case "next":
        ExerciceTextStyle_11 = styles.text_next;
        ExerciceStyle_11 = styles.next;
        IconsExercice_11 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_11 = styles.text_new;
        ExerciceStyle_11 = styles.new;
        IconsExercice_11 = require("./../assets/images/newmark_vision.png");
        break;
      case "locked":
        ExerciceTextStyle_11 = styles.text_locked;
        ExerciceStyle_11 = styles.locked;
        IconsExercice_11 = require("./../assets/images/lockmark.png");
        break;
      default:
        ExerciceTextStyle_11 = styles.text_locked;
        ExerciceStyle_11 = styles.locked;
        IconsExercice_11 = require("./../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_12 = "";
    let ExerciceStyle_12 = "";

    switch (this.props.exercices.exercice_state_12) {
      case "completed":
        ExerciceTextStyle_12 = styles.text_completed;
        ExerciceStyle_12 = styles.completed;
        IconsExercice_12 = require("./../assets/images/checkmark_vision.png");
        break;
      case "next":
        ExerciceTextStyle_12 = styles.text_next;
        ExerciceStyle_12 = styles.next;
        IconsExercice_12 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_12 = styles.text_new;
        ExerciceStyle_12 = styles.new;
        IconsExercice_12 = require("./../assets/images/newmark_vision.png");
        break;
      case "locked":
        ExerciceTextStyle_12 = styles.text_locked;
        ExerciceStyle_12 = styles.locked;
        IconsExercice_12 = require("./../assets/images/lockmark.png");
        break;
      default:
        ExerciceTextStyle_12 = styles.text_locked;
        ExerciceStyle_12 = styles.locked;
        IconsExercice_12 = require("./../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_13 = "";
    let ExerciceStyle_13 = "";

    switch (this.props.exercices.exercice_state_13) {
      case "completed":
        ExerciceTextStyle_13 = styles.text_completed;
        ExerciceStyle_13 = styles.completed;
        IconsExercice_13 = require("./../assets/images/checkmark_plan.png");
        break;
      case "next":
        ExerciceTextStyle_13 = styles.text_next;
        ExerciceStyle_13 = styles.next;
        IconsExercice_13 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_13 = styles.text_new;
        ExerciceStyle_13 = styles.new;
        IconsExercice_13 = require("./../assets/images/newmark_plan.png");
        break;
      case "locked":
        ExerciceTextStyle_13 = styles.text_locked;
        ExerciceStyle_13 = styles.locked;
        IconsExercice_13 = require("./../assets/images/lockmark.png");
        break;
      default:
        ExerciceTextStyle_13 = styles.text_locked;
        ExerciceStyle_13 = styles.locked;
        IconsExercice_13 = require("./../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_14 = "";
    let ExerciceStyle_14 = "";

    switch (this.props.exercices.exercice_state_14) {
      case "completed":
        ExerciceTextStyle_14 = styles.text_completed;
        ExerciceStyle_14 = styles.completed;
        IconsExercice_14 = require("./../assets/images/checkmark_plan.png");
        break;
      case "next":
        ExerciceTextStyle_14 = styles.text_next;
        ExerciceStyle_14 = styles.next;
        IconsExercice_14 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_14 = styles.text_new;
        ExerciceStyle_14 = styles.new;
        IconsExercice_14 = require("./../assets/images/newmark_plan.png");
        break;
      case "locked":
        ExerciceTextStyle_14 = styles.text_locked;
        ExerciceStyle_14 = styles.locked;
        IconsExercice_14 = require("./../assets/images/lockmark.png");
        break;
      default:
        ExerciceTextStyle_14 = styles.text_locked;
        ExerciceStyle_14 = styles.locked;
        IconsExercice_14 = require("./../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_15 = "";
    let ExerciceStyle_15 = "";

    switch (this.props.exercices.exercice_state_15) {
      case "completed":
        ExerciceTextStyle_15 = styles.text_completed;
        ExerciceStyle_15 = styles.completed;
        IconsExercice_15 = require("./../assets/images/checkmark_plan.png");
        break;
      case "next":
        ExerciceTextStyle_15 = styles.text_next;
        ExerciceStyle_15 = styles.next;
        IconsExercice_15 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_15 = styles.text_new;
        ExerciceStyle_15 = styles.new;
        IconsExercice_15 = require("./../assets/images/newmark_plan.png");
        break;
      case "locked":
        ExerciceTextStyle_15 = styles.text_locked;
        ExerciceStyle_15 = styles.locked;
        IconsExercice_15 = require("./../assets/images/lockmark.png");
        break;
      default:
        ExerciceTextStyle_15 = styles.text_locked;
        ExerciceStyle_15 = styles.locked;
        IconsExercice_15 = require("./../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_16 = "";
    let ExerciceStyle_16 = "";

    switch (this.props.exercices.exercice_state_16) {
      case "completed":
        ExerciceTextStyle_16 = styles.text_completed;
        ExerciceStyle_16 = styles.completed;
        IconsExercice_16 = require("./../assets/images/checkmark_plan.png");
        break;
      case "next":
        ExerciceTextStyle_16 = styles.text_next;
        ExerciceStyle_16 = styles.next;
        IconsExercice_16 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_16 = styles.text_new;
        ExerciceStyle_16 = styles.new;
        IconsExercice_16 = require("./../assets/images/newmark_plan.png");
        break;
      case "locked":
        ExerciceTextStyle_16 = styles.text_locked;
        ExerciceStyle_16 = styles.locked;
        IconsExercice_16 = require("./../assets/images/lockmark.png");
        break;
      default:
        ExerciceTextStyle_16 = styles.text_locked;
        ExerciceStyle_16 = styles.locked;
        IconsExercice_16 = require("./../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_17 = "";
    let ExerciceStyle_17 = "";

    switch (this.props.exercices.exercice_state_17) {
      case "completed":
        ExerciceTextStyle_17 = styles.text_completed;
        ExerciceStyle_17 = styles.completed;
        IconsExercice_17 = require("./../assets/images/checkmark_support.png");
        break;
      case "next":
        ExerciceTextStyle_17 = styles.text_next;
        ExerciceStyle_17 = styles.next;
        IconsExercice_17 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_17 = styles.text_new;
        ExerciceStyle_17 = styles.new;
        IconsExercice_17 = require("./../assets/images/newmark_support.png");
        break;
      case "locked":
        ExerciceTextStyle_17 = styles.text_locked;
        ExerciceStyle_17 = styles.locked;
        IconsExercice_17 = require("./../assets/images/lockmark.png");
        break;
      default:
        ExerciceTextStyle_17 = styles.text_locked;
        ExerciceStyle_17 = styles.locked;
        IconsExercice_17 = require("./../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_18 = "";
    let ExerciceStyle_18 = "";

    switch (this.props.exercices.exercice_state_18) {
      case "completed":
        ExerciceTextStyle_18 = styles.text_completed;
        ExerciceStyle_18 = styles.completed;
        IconsExercice_18 = require("./../assets/images/checkmark_support.png");
        break;
      case "next":
        ExerciceTextStyle_18 = styles.text_next;
        ExerciceStyle_18 = styles.next;
        IconsExercice_18 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_18 = styles.text_new;
        ExerciceStyle_18 = styles.new;
        IconsExercice_18 = require("./../assets/images/newmark_support.png");
        break;
      case "locked":
        ExerciceTextStyle_18 = styles.text_locked;
        ExerciceStyle_18 = styles.locked;
        IconsExercice_18 = require("./../assets/images/lockmark.png");
        break;
      default:
        ExerciceTextStyle_18 = styles.text_locked;
        ExerciceStyle_18 = styles.locked;
        IconsExercice_18 = require("./../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_19 = "";
    let ExerciceStyle_19 = "";

    switch (this.props.exercices.exercice_state_19) {
      case "completed":
        ExerciceTextStyle_19 = styles.text_completed;
        ExerciceStyle_19 = styles.completed;
        IconsExercice_19 = require("./../assets/images/checkmark_support.png");
        break;
      case "next":
        ExerciceTextStyle_19 = styles.text_next;
        ExerciceStyle_19 = styles.next;
        IconsExercice_19 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_19 = styles.text_new;
        ExerciceStyle_19 = styles.new;
        IconsExercice_19 = require("./../assets/images/newmark_support.png");
        break;
      case "locked":
        ExerciceTextStyle_19 = styles.text_locked;
        ExerciceStyle_19 = styles.locked;
        IconsExercice_19 = require("./../assets/images/lockmark.png");
        break;
      default:
        ExerciceTextStyle_19 = styles.text_locked;
        ExerciceStyle_19 = styles.locked;
        IconsExercice_19 = require("./../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_20 = "";
    let ExerciceStyle_20 = "";

    switch (this.props.exercices.exercice_state_20) {
      case "completed":
        ExerciceTextStyle_20 = styles.text_completed;
        ExerciceStyle_20 = styles.completed;
        IconsExercice_20 = require("./../assets/images/checkmark_support.png");
        break;
      case "next":
        ExerciceTextStyle_20 = styles.text_next;
        ExerciceStyle_20 = styles.next;
        IconsExercice_20 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_20 = styles.text_new;
        ExerciceStyle_20 = styles.new;
        IconsExercice_20 = require("./../assets/images/newmark_support.png");
        break;
      case "locked":
        ExerciceTextStyle_20 = styles.text_locked;
        ExerciceStyle_20 = styles.locked;
        IconsExercice_20 = require("./../assets/images/lockmark.png");
        break;
      default:
        ExerciceTextStyle_20 = styles.text_locked;
        ExerciceStyle_20 = styles.locked;
        IconsExercice_20 = require("./../assets/images/lockmark.png");
    }

    let ExerciceTextStyle_21 = "";
    let ExerciceStyle_21 = "";

    switch (this.props.exercices.exercice_state_21) {
      case "completed":
        ExerciceTextStyle_21 = styles.text_completed;
        ExerciceStyle_21 = styles.completed;
        IconsExercice_21 = require("./../assets/images/checkmark_support.png");
        break;
      case "next":
        ExerciceTextStyle_21 = styles.text_next;
        ExerciceStyle_21 = styles.next;
        IconsExercice_21 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_21 = styles.text_new;
        ExerciceStyle_21 = styles.new;
        IconsExercice_21 = require("./../assets/images/newmark_support.png");
        break;
      case "locked":
        ExerciceTextStyle_21 = styles.text_locked;
        ExerciceStyle_21 = styles.locked;
        IconsExercice_21 = require("./../assets/images/lockmark.png");
        break;
      default:
        ExerciceTextStyle_21 = styles.text_locked;
        ExerciceStyle_21 = styles.locked;
        IconsExercice_21 = require("./../assets/images/lockmark.png");
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
        path: "Intro_Phase_Reflect",
        label: "Day 5 - Habit Loop",
        styleButton: ExerciceStyle_5,
        styleText: ExerciceTextStyle_5,
        IconSource: IconsExercice_5,
        state: this.props.exercices.exercice_state_5
      },
      {
        id: 6,
        path: "Exercice_6_Intro",
        label: "Day 6 - Exploring Emotional Triggers",
        styleButton: ExerciceStyle_6,
        styleText: ExerciceTextStyle_6,
        IconSource: IconsExercice_6,
        state: this.props.exercices.exercice_state_6
      },
      {
        id: 7,
        path: "Exercice_7_Intro",
        label: "Day 7 - Getting Lost",
        styleButton: ExerciceStyle_7,
        styleText: ExerciceTextStyle_7,
        IconSource: IconsExercice_7,
        state: this.props.exercices.exercice_state_7
      },
      {
        id: 8,
        path: "Exercice_8_Intro",
        label: "Day 8 - Mindful Social Media Use",
        styleButton: ExerciceStyle_8,
        styleText: ExerciceTextStyle_8,
        IconSource: IconsExercice_8,
        state: this.props.exercices.exercice_state_8
      },
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
      }
    ];

    // const state = ExercicesArray.filter(item => item.state === "locked");

    return (
      <View
        style={{
          flex: 2,
          alignItems: "center",
          paddingLeft: 30,
          paddingRight: 30
        }}
      >
        <StatusBar barStyle="light-content" />
        <ScrollView
          contentContainerStyle={{
            // flexGrow: 1,
            justifyContent: "space-between"
          }}
        >
          <View style={{ flex: 1, paddingTop: 50, marginTop: 10 }}>
            <Image
              style={styles.center}
              source={require("./../assets/images/home_1.png")}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.header_left}>
              Hey, {this.props.user.nickname}
              {/* {this.props.user.initialDate} */}
              {/* {this.state.exercices.exercice_state_1}! */}
            </Text>

            <Text style={styles.text_left}>
              {"\n"}Continue with your next session.
            </Text>
            
            {ExercicesArray.map((item, key) =>
              item.state === "next" ||
              item.state === "locked" ||
              item.state === "completed" ||
              item.state === "new" ? (
                <View key={key}>
                  <ExerciceButton
                    onPress={() => {
                      {
                        this.props.navigation.navigate(item.path);
                      }
                    }}
                    style={item.styleButton}
                    state={item.state}
                    //disabled={item.state === undefined ? true : false}
                  >
                    <Text style={item.styleText}>{item.label}</Text>
                    <Image
                      style={styles.exercice_button_icon}
                      source={item.IconSource}
                    />
                  </ExerciceButton>
                </View>
              ) : null
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 40,
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
    justifyContent: "center",
    alignItems: "center"
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
    justifyContent: "flex-end",
    alignSelf: "stretch"
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
    paddingBottom: 10
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
    top: "50%",
    marginTop: 3,
    right: 20,
    position: "absolute"
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
    alignSelf: "stretch",
    letterSpacing: 1,
    paddingRight: 15,
    marginLeft: -5
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
    alignSelf: "stretch",
    letterSpacing: 1,
    paddingRight: 15,
    marginLeft: -5
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
    color: "#9B51E0",
    fontSize: 17,
    lineHeight: 23,
    textAlign: "left",
    fontFamily: "roboto-medium",
    textTransform: "capitalize",
    alignSelf: "stretch",
    letterSpacing: 1,
    paddingRight: 15,
    marginLeft: -5
  },
  locked: {
    backgroundColor: "#E2DFD1",
    borderWidth: 2,
    borderColor: "#E2DFD1",
    borderRadius: 12,
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
    alignSelf: "stretch",
    letterSpacing: 1,
    paddingRight: 15,
    marginLeft: -5
  }
});

const mapStateToProps = state => ({
  user: state.user,
  exercices: state.exercices
});

export default connect(mapStateToProps)(TestScreen);
