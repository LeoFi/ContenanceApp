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
  Alert,
  Dimensions,
  Modal,
  TouchableHighlight
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  ExerciceButton,
  HeaderComponent,
  HomeIllustration,
  ChallengeModal
} from "./../components/AppComponents";

import * as Amplitude from "expo-analytics-amplitude";

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

import {
  updateWelcomeTitle,
  updateWelcomeSubTitle,
  updateCompletedList,
  updateTotalChallenge,
  updateAllExercises
} from "./../redux-persist/redux/user";

import { BlurView } from "expo-blur";
import Constants from "expo-constants";

import * as firebase from "firebase";
import { Svg, Path, G, Defs, ClipPath, Rect } from "react-native-svg";
import * as Progress from "react-native-progress";

import { connect } from "react-redux";

class TestScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progressCircle: 1 / 22,
      welcomeTitle: this.props.user.welcomeTitle || "Welcome",
      welcomeSubTitle:
        this.props.user.welcomeSubTitle || "Start your journey now.",
      welcomeTitleContinue: "Hey",
      welcomeSubTitleContinue: "Continue with your next session.",
      observeStarted: true,
      reflectStarted: false,
      visionStarted: false,
      planStarted: false,
      supportStarted: false,
      colorProgress: "#A28AD4",
      count: 1,
      modalVisible: false,
      completedExercices: false,
      leftItemArray: 0,
      rightItemArray: 0,
      lastItemArray: false,
      visible: false
    };
  }

  setPhases = () => {
    if (
      (this.props.exercices.exercice_state_13 === "completed" ||
        this.props.exercices.exercice_state_13 === "DONE") &&
      (this.props.exercices.exercice_state_14 === "completed" ||
        this.props.exercices.exercice_state_14 === "DONE") &&
      (this.props.exercices.exercice_state_15 === "completed" ||
        this.props.exercices.exercice_state_15 === "DONE") &&
      (this.props.exercices.exercice_state_16 === "completed" ||
        this.props.exercices.exercice_state_16 === "DONE")
    ) {
      this.setState({
        observeStarted: true,
        reflectStarted: true,
        visionStarted: true,
        planStarted: true,
        supportStarted: true,
        colorProgress: "#6A97D8"
      });
    } else if (
      (this.props.exercices.exercice_state_9 === "completed" ||
        this.props.exercices.exercice_state_9 === "DONE") &&
      (this.props.exercices.exercice_state_10 === "completed" ||
        this.props.exercices.exercice_state_10 === "DONE") &&
      (this.props.exercices.exercice_state_11 === "completed" ||
        this.props.exercices.exercice_state_11 === "DONE") &&
      (this.props.exercices.exercice_state_12 === "completed" ||
        this.props.exercices.exercice_state_12 === "DONE")
    ) {
      this.setState({
        observeStarted: true,
        reflectStarted: true,
        visionStarted: true,
        planStarted: true,
        supportStarted: false,
        colorProgress: "#4CBB92"
      });
    } else if (
      (this.props.exercices.exercice_state_5 === "completed" ||
        this.props.exercices.exercice_state_5 === "DONE") &&
      (this.props.exercices.exercice_state_6 === "completed" ||
        this.props.exercices.exercice_state_6 === "DONE") &&
      (this.props.exercices.exercice_state_7 === "completed" ||
        this.props.exercices.exercice_state_7 === "DONE") &&
      (this.props.exercices.exercice_state_8 === "completed" ||
        this.props.exercices.exercice_state_8 === "DONE")
    ) {
      this.setState({
        observeStarted: true,
        reflectStarted: true,
        visionStarted: true,
        planStarted: false,
        supportStarted: false,
        colorProgress: "#F87B7B"
      });
    } else if (
      (this.props.exercices.exercice_state_1 === "completed" ||
        this.props.exercices.exercice_state_1 === "DONE") &&
      (this.props.exercices.exercice_state_2 === "completed" ||
        this.props.exercices.exercice_state_2 === "DONE") &&
      (this.props.exercices.exercice_state_3 === "completed" ||
        this.props.exercices.exercice_state_3 === "DONE") &&
      (this.props.exercices.exercice_state_4 === "completed" ||
        this.props.exercices.exercice_state_4 === "DONE")
    ) {
      this.setState({
        observeStarted: true,
        reflectStarted: true,
        visionStarted: false,
        planStarted: false,
        supportStarted: false,
        colorProgress: "#F6B563"
      });
    } else {
      null;
    }
  };

  componentDidUpdate() {
    if (
      (this.props.exercices.exercice_state_21 === "completed" ||
        this.props.exercices.exercice_state_21 === "DONE") &&
      (this.props.exercices.exercice_state_20 === "completed" ||
        this.props.exercices.exercice_state_20 === "DONE") &&
      (this.props.exercices.exercice_state_19 === "completed" ||
        this.props.exercices.exercice_state_19 === "DONE") &&
      (this.props.exercices.exercice_state_18 === "completed" ||
        this.props.exercices.exercice_state_18 === "DONE") &&
      (this.props.exercices.exercice_state_17 === "completed" ||
        this.props.exercices.exercice_state_17 === "DONE") &&
      (this.props.exercices.exercice_state_13 === "completed" ||
        this.props.exercices.exercice_state_13 === "DONE") &&
      (this.props.exercices.exercice_state_14 === "completed" ||
        this.props.exercices.exercice_state_14 === "DONE") &&
      (this.props.exercices.exercice_state_15 === "completed" ||
        this.props.exercices.exercice_state_15 === "DONE") &&
      (this.props.exercices.exercice_state_16 === "completed" ||
        this.props.exercices.exercice_state_16 === "DONE") &&
      (this.props.exercices.exercice_state_9 === "completed" ||
        this.props.exercices.exercice_state_9 === "DONE") &&
      (this.props.exercices.exercice_state_10 === "completed" ||
        this.props.exercices.exercice_state_10 === "DONE") &&
      (this.props.exercices.exercice_state_11 === "completed" ||
        this.props.exercices.exercice_state_11 === "DONE") &&
      (this.props.exercices.exercice_state_12 === "completed" ||
        this.props.exercices.exercice_state_12 === "DONE") &&
      (this.props.exercices.exercice_state_5 === "completed" ||
        this.props.exercices.exercice_state_5 === "DONE") &&
      (this.props.exercices.exercice_state_6 === "completed" ||
        this.props.exercices.exercice_state_6 === "DONE") &&
      (this.props.exercices.exercice_state_7 === "completed" ||
        this.props.exercices.exercice_state_7 === "DONE") &&
      (this.props.exercices.exercice_state_8 === "completed" ||
        this.props.exercices.exercice_state_8 === "DONE") &&
      (this.props.exercices.exercice_state_1 === "completed" ||
        this.props.exercices.exercice_state_1 === "DONE") &&
      (this.props.exercices.exercice_state_2 === "completed" ||
        this.props.exercices.exercice_state_2 === "DONE") &&
      (this.props.exercices.exercice_state_3 === "completed" ||
        this.props.exercices.exercice_state_3 === "DONE") &&
      (this.props.exercices.exercice_state_4 === "completed" ||
        this.props.exercices.exercice_state_4 === "DONE") &&
      this.props.user.allExercises === false
    ) {
      this.setState(
        {
          welcomeSubTitle:
            "You’re done with the 21-day program. We will email you with the next steps in the study.",
          progressCircle: 22 / 22
        },
        function() {
          this.props.dispatch(
            updateWelcomeSubTitle(this.state.welcomeSubTitle)
          );
          this.props.dispatch(updateAllExercises(true));
        }
      );
    } else {
      return false;
    }
  }

  componentDidMount() {
    this.compareDates();
    this.timeLogic();
    this.setPhases();
    Amplitude.logEvent("Home Page");
  }

  compareDates = () => {
    diff_days = (dt2, dt1) => {
      var diff = (dt2.getTime() - dt1.getTime()) / 1000;
      diff /= 60 * 60 * 24;
      return Math.abs(Math.round(diff));
    };
  };

  isEmpty = obj => {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };

  timeLogic = () => {
    const initialDate = this.props.user.initialDate;
    dt1 = new Date(initialDate);

    defaultdate = new Date();
    var locales = ["en-US"];
    var options = {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit"
    };
    //dt2 = new Date("12/21/19");
    dt2Prep = defaultdate.toLocaleString(locales, options);
    dt2 = new Date(dt2Prep);

    var x = diff_days(dt1, dt2);
    console.log(
      "Date first exercice " + dt1,
      " / Date today " + dt2,
      " / Difference " + x
    );
    console.log(this.props.exercices);
    console.log(x);

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
        // GET ALL COMPLETED EXERCISES
        var myOrderedArray = data
          .filter(
            item => item.exercice == "completed" || item.exercice == "DONE"
          )
          // GET AN ARRAY OF ALL ITEM.DAY COMPLETED EXERCISES
          .map(item => {
            return item.day;
          })
          // GET ARRAY OF UNIQUES VALUES
          .reduce(function(accumulator, currentValue) {
            if (accumulator.indexOf(currentValue) === -1) {
              accumulator.push(currentValue);
            }
            return accumulator;
          }, []);

        var myNextArray = data.filter(item => item.exercice == "next");
        var myNewArray = data.filter(item => item.exercice == "new");

        // FIND ALL UNDEFINED PAST EXERCICES AND GET FIRST EXERCISE
        var LockedExercises = data.filter(item => item.exercice == "locked");

        // FIND ALL UNDEFICOMPLETEDNED PAST EXERCICES AND GET FIRST EXERCISE
        var CompletedExercises = data.filter(
          item => item.exercice == "completed" || item.exercice == "DONE"
        );

        if (
          // FUTURE DAY = SKIPPED DAYS
          programLength <= x
        ) {
          // HOT FIX TIME LOGIC
          var HotFixLogic = data.reduce((acc, item) => {
            if (
              (item.exercice === "new" ||
                item.exercice === "next" ||
                item.exercice === "completed" ||
                item.exercice === "locked" ||
                item.exercice === "DONE") &&
              item.day > x + 2
            ) {
              return [
                ...acc,
                {
                  ...item
                },
                this.setState(
                  {
                    newstate: undefined
                  },
                  function() {
                    this.props.dispatch(item.function(this.state.newstate));
                  }
                )
              ];
            } else {
              return [...acc];
            }
          }, []);

          // END HOT FIX

          // FIND ALL UNDEFINED PAST EXERCICES AND CHANGE THEM INTO NEW EXERCISES
          var PastUndefined = data.reduce((acc, item) => {
            if (
              (item.exercice === undefined || item.exercice === "locked") &&
              // item.exercice === "new" &&
              item.day <= x + 1
            ) {
              return [
                ...acc,
                {
                  ...item
                },
                //Alert.alert("Hello"),
                this.setState(
                  {
                    newstate: "new",
                    welcomeTitle: "Hey",
                    welcomeSubTitle: "Continue with your next session."
                  },
                  function() {
                    this.props.dispatch(item.function(this.state.newstate));
                    this.props.dispatch(
                      updateWelcomeTitle(this.state.welcomeTitle)
                    );
                    this.props.dispatch(
                      updateWelcomeSubTitle(this.state.welcomeSubTitle)
                    );
                  }
                )
              ];
            } else {
              return [...acc];
            }
          }, []);

          // FIND ALL UNDEFINED PAST EXERCICES AND GET FIRST EXERCISE
          var PastUndefinedNext = data
            .filter(
              item =>
                (item.exercice === undefined ||
                  item.exercice === "locked" ||
                  item.exercice === "new") &&
                item.day <= x + 1
            )
            .shift();

          // FIND ALL COMPLETED PAST EXERCICES
          var PastCompleted = data.filter(
            item => item.exercice === "completed"
          );

          if (this.isEmpty(PastCompleted)) {
            //.alert("EMPTY");
          } else if (
            !this.isEmpty(PastCompleted) &&
            this.props.user.isCompletedList === x
          ) {
            //Alert.alert("Premier "+PastCompleted.length);
            this.setState(
              {
                visible: false,
                isCompletedList: x,
                totalChallenge: PastCompleted.length
              },
              function() {
                this.props.dispatch(
                  updateCompletedList(this.state.isCompletedList)
                  //updateTotalChallenge(this.state.totalChallenge)
                );
              }
            );
            //Alert.alert(PastCompleted);
          } else if (
            !this.isEmpty(PastCompleted) &&
            this.props.user.isCompletedList < x
          ) {
            //Alert.alert("Deuxieme "+PastCompleted.length);
            this.setState(
              {
                visible: true,
                isCompletedList: x,
                totalChallenge: PastCompleted.length
              },
              function() {
                this.props.dispatch(
                  updateCompletedList(this.state.isCompletedList)
                  //updateTotalChallenge(this.state.totalChallenge)
                );
              }
            );
          }
        }
      }

      // IF LOCKED = DOES EXIST THEN SET THE STATE
      if (
        !this.isEmpty(LockedExercises) &&
        (this.isEmpty(myNextArray) && this.isEmpty(myNewArray))
      ) {
        this.setState({
          welcomeTitle: "Well done,",
          welcomeSubTitle: "Come back tomorrow to continue."
        });
        this.props.dispatch(updateWelcomeTitle(this.state.welcomeTitle));
        this.props.dispatch(updateWelcomeSubTitle(this.state.welcomeSubTitle));
      } else {
        //
      }

      // IF NEXT = DOES NOT EXIST THEN SET THE STATE
      if (this.isEmpty(myNextArray) && !this.isEmpty(PastUndefinedNext)) {
        resultFunction = PastUndefinedNext.function;
        resultDay = "exercice_state_" + PastUndefinedNext.day;
        //Alert.alert(this.state.welcomeSubTitleContinue);
        this.setState(
          {
            resultDay: "next"
          },
          function() {
            this.props.dispatch(resultFunction(this.state.resultDay));
          }
        );
        // UDATE WELCOME TEXT
        const welcomeTitleContinue = this.state.welcomeTitleContinue;
        this.setState({ welcomeTitle: welcomeTitleContinue });
        this.props.dispatch(updateWelcomeTitle(this.state.welcomeTitle));
        const welcomeSubTitleContinue = this.state.welcomeSubTitleContinue;
        this.setState({ welcomeSubTitle: welcomeSubTitleContinue });
        this.props.dispatch(updateWelcomeSubTitle(this.state.welcomeSubTitle));
      } else {
        //
      }

      // IF COMPLETED = DOES EXIST
      if (!this.isEmpty(CompletedExercises)) {
        // TOTAL AMOUNT OF DAYS MISSED
        const Days_Missed_TotalValue = x - (myOrderedArray.length - 1);

        //CALCUL OF THE PROGRESS BAR
        const numbers = myOrderedArray;
        let chunks = [];
        let prev = -1;
        numbers.forEach(current => {
          if (current - prev != 1) chunks.push([]);
          chunks[chunks.length - 1].push(current);
          prev = current;
        });
        const progressCircleCompleted = chunks[0].length / 21;
        this.setState({ progressCircle: progressCircleCompleted });

        // DAYS MISSED SINCE LAST COMPLETED EXERCISE
        const Days_Missed_LastExValue = myOrderedArray.pop();

        // NUMBER OF EXERCISES MISSED SINCE LAST COMPLETION
        const ExMissedSinceLastCompletion = x + 1 - Days_Missed_LastExValue;

        if (this.props.user.UID === undefined) {
          //
        } else {
          firebase
            .database()
            .ref()
            .child("accounts")
            .child(this.props.user.UID)
            .update({
              TotalExMissed: Days_Missed_TotalValue,
              LastExDone: Days_Missed_LastExValue,
              ExMissedSinceLastComple: ExMissedSinceLastCompletion
            });
        }
      } else {
        //
      }
    }
  };

  getDate = () => {
    var date = new Date();
    var locales = ["en-US"];
    var options = {
      weekday: "short",
      month: "long",
      day: "2-digit"
    };

    var todayDate = date.toLocaleString(locales, options);

    return todayDate;
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
        ExerciceStyle_1 = styles.next_observe;
        IconsExercice_1 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_1 = styles.text_new_observe;
        ExerciceStyle_1 = styles.new_observe;
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
        ExerciceStyle_2 = styles.next_observe;
        IconsExercice_2 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_2 = styles.text_new_observe;
        ExerciceStyle_2 = styles.new_observe;
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
        ExerciceStyle_3 = styles.next_observe;
        IconsExercice_3 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_3 = styles.text_new_observe;
        ExerciceStyle_3 = styles.new_observe;
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
        ExerciceStyle_4 = styles.next_observe;
        IconsExercice_4 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_4 = styles.text_new_observe;
        ExerciceStyle_4 = styles.new_observe;
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
        ExerciceStyle_5 = styles.next_reflect;
        IconsExercice_5 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_5 = styles.text_new_reflect;
        ExerciceStyle_5 = styles.new_reflect;
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
        ExerciceStyle_6 = styles.next_reflect;
        IconsExercice_6 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_6 = styles.text_new_reflect;
        ExerciceStyle_6 = styles.new_reflect;
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
        ExerciceStyle_7 = styles.next_reflect;
        IconsExercice_7 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_7 = styles.text_new_reflect;
        ExerciceStyle_7 = styles.new_reflect;
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
        ExerciceStyle_8 = styles.next_reflect;
        IconsExercice_8 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_8 = styles.text_new_reflect;
        ExerciceStyle_8 = styles.new_reflect;
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
        ExerciceStyle_9 = styles.next_vision;
        IconsExercice_9 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_9 = styles.text_new_vision;
        ExerciceStyle_9 = styles.new_vision;
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
        ExerciceStyle_10 = styles.next_vision;
        IconsExercice_10 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_10 = styles.text_new_vision;
        ExerciceStyle_10 = styles.new_vision;
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
        ExerciceStyle_11 = styles.next_vision;
        IconsExercice_11 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_11 = styles.text_new_vision;
        ExerciceStyle_11 = styles.new_vision;
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
        ExerciceStyle_12 = styles.next_vision;
        IconsExercice_12 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_12 = styles.text_new_vision;
        ExerciceStyle_12 = styles.new_vision;
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
        ExerciceStyle_13 = styles.next_plan;
        IconsExercice_13 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_13 = styles.text_new_plan;
        ExerciceStyle_13 = styles.new_plan;
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
        ExerciceStyle_14 = styles.next_plan;
        IconsExercice_14 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_14 = styles.text_new_plan;
        ExerciceStyle_14 = styles.new_plan;
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
        ExerciceStyle_15 = styles.next_plan;
        IconsExercice_15 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_15 = styles.text_new_plan;
        ExerciceStyle_15 = styles.new_plan;
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
        ExerciceStyle_16 = styles.next_plan;
        IconsExercice_16 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_16 = styles.text_new_plan;
        ExerciceStyle_16 = styles.new_plan;
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
        ExerciceStyle_17 = styles.next_support;
        IconsExercice_17 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_17 = styles.text_new_support;
        ExerciceStyle_17 = styles.new_support;
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
        ExerciceStyle_18 = styles.next_support;
        IconsExercice_18 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_18 = styles.text_new_support;
        ExerciceStyle_18 = styles.new_support;
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
        ExerciceStyle_19 = styles.next_support;
        IconsExercice_19 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_19 = styles.text_new_support;
        ExerciceStyle_19 = styles.new_support;
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
        ExerciceStyle_20 = styles.next_support;
        IconsExercice_20 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_20 = styles.text_new_support;
        ExerciceStyle_20 = styles.new_support;
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
        ExerciceStyle_21 = styles.next_support;
        IconsExercice_21 = require("./../assets/images/nextmark.png");
        break;
      case "new":
        ExerciceTextStyle_21 = styles.text_new_support;
        ExerciceStyle_21 = styles.new_support;
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
        //path: "Exercice_1_Congratulations",
        label: "Contenance",
        styleButton: ExerciceStyle_1,
        styleText: ExerciceTextStyle_1,
        IconSource: IconsExercice_1,
        state: this.props.exercices.exercice_state_1,
        function: updateState_Ex1,
        title: <Text style={styles.header_challenge}>Contenance</Text>,
        text_content: (
          <Text style={styles.text_challenge}>
            From now on, whenever you open Contenance, take on a good posture
            first.
          </Text>
        )
      },
      {
        id: 2,
        path: "Exercice_2_Intro",
        //path: "Exercice_2_Congratulations",
        label: "Notice Your Impulses",
        styleButton: ExerciceStyle_2,
        styleText: ExerciceTextStyle_2,
        IconSource: IconsExercice_2,
        state: this.props.exercices.exercice_state_2,
        function: updateState_Ex2,
        title: (
          <Text style={styles.header_challenge}>Notice Your Impulses</Text>
        ),
        text_content: (
          <Text style={styles.text_challenge}>
            Whenever you catch yourself grabbing your smartphone, stop for a
            moment and try to see if you can identify the impulse. Notice it
            with curiosity and without judging it.{"\n"}
            {"\n"}Try to let the impulse come over you, like a wave, without
            reacting to it immediately. And then decide consciously if you want
            to follow your impulse right now - or not.
          </Text>
        )
      },
      {
        id: 3,
        path: "Exercice_3_Intro",
        //path: "Exercice_3_6",
        label: "Solution Triangle",
        styleButton: ExerciceStyle_3,
        styleText: ExerciceTextStyle_3,
        IconSource: IconsExercice_3,
        state: this.props.exercices.exercice_state_3,
        function: updateState_Ex3,
        title: (
          <Text style={styles.header_challenge}>The Solution Triangle</Text>
        ),
        text_content: (
          <Text style={styles.text_challenge}>
            Look around you today: what are other people doing to take control
            of their smartphone use?{"\n"}
            {"\n"}
            What factor do they belong to?{"\n"}
            {"\n"}
            The smartphone, the environment or the person?
          </Text>
        )
      },
      {
        id: 4,
        path: "Exercice_4_Intro",
        //path: "Exercice_4_Congratulations",
        label: "Keep Breathing",
        styleButton: ExerciceStyle_4,
        styleText: ExerciceTextStyle_4,
        IconSource: IconsExercice_4,
        state: this.props.exercices.exercice_state_4,
        function: updateState_Ex4,
        title: <Text style={styles.header_challenge}>Keep Breathing</Text>,
        text_content: (
          <Text style={styles.text_challenge}>
            Whenever you use your smartphone until tomorrow, be aware of your
            breathing.{"\n"}
            {"\n"}
            Follow one breath all the way through.
          </Text>
        )
      },
      {
        id: 5,
        path: "Intro_Phase_Reflect",
        //path: "Exercice_5_Congratulations",
        label: "Habit Loop",
        styleButton: ExerciceStyle_5,
        styleText: ExerciceTextStyle_5,
        IconSource: IconsExercice_5,
        state: this.props.exercices.exercice_state_5,
        function: updateState_Ex5,
        title: <Text style={styles.header_challenge}>The Habit Loop</Text>,
        text_content: (
          <Text style={styles.text_challenge}>
            The next time when you are in one of these situations, take a moment
            to check if the decision to grab your smartphone happens
            automatically or if you consciously decide to do so.
          </Text>
        )
      },
      {
        id: 6,
        path: "Exercice_6_Intro",
        //path: "Exercice_6_Congratulations",
        label: "Exploring Emotional Triggers",
        styleButton: ExerciceStyle_6,
        styleText: ExerciceTextStyle_6,
        IconSource: IconsExercice_6,
        state: this.props.exercices.exercice_state_6,
        function: updateState_Ex6,
        title: (
          <Text style={styles.header_challenge}>
            Exploring Emotional Triggers
          </Text>
        ),
        text_content: (
          <Text style={styles.text_challenge}>
            Next time when you catch yourself grabbing the smartphone, stop for
            a moment and check your inner state of mind. Ask yourself: How am I
            feeling at this moment?{"\n"}
            {"\n"}Notice the feeling, and then consciously decide if you want to
            use your smartphone as a reaction to it.
          </Text>
        )
      },
      {
        id: 7,
        path: "Exercice_7_Intro",
        //path: "Exercice_7_Congratulations",
        label: "Getting Lost",
        styleButton: ExerciceStyle_7,
        styleText: ExerciceTextStyle_7,
        IconSource: IconsExercice_7,
        state: this.props.exercices.exercice_state_7,
        function: updateState_Ex7,
        title: <Text style={styles.header_challenge}>Getting Lost</Text>,
        text_content: (
          <Text style={styles.text_challenge}>
            When you continue using your smartphone today, think of the traffic
            light and the apps you use. How does their design add to the
            experience of losing yourself in the app?{"\n"}
            {"\n"}Become aware of that.
          </Text>
        )
      },
      {
        id: 8,
        path: "Exercice_8_Intro",
        //path: "Exercice_8_Congratulations",
        label: "Mindful Social Media Use",
        styleButton: ExerciceStyle_8,
        styleText: ExerciceTextStyle_8,
        IconSource: IconsExercice_8,
        state: this.props.exercices.exercice_state_8,
        function: updateState_Ex8,
        title: (
          <Text style={styles.header_challenge}>Mindful Social Media Use</Text>
        ),
        text_content: (
          <Text style={styles.text_challenge}>
            Until tomorrow, look at the pictures in your feed a little bit
            longer than usual, asking yourself: What do I actually see in front
            of me?
          </Text>
        )
      },
      {
        id: 9,
        path: "Intro_Phase_Vision",
        //path: "Exercice_9_Congratulations",
        label: "Exploring Values",
        styleButton: ExerciceStyle_9,
        styleText: ExerciceTextStyle_9,
        IconSource: IconsExercice_9,
        state: this.props.exercices.exercice_state_9,
        function: updateState_Ex9,
        title: <Text style={styles.header_challenge}>Exploring Values</Text>,
        text_content: (
          <Text style={styles.text_challenge}>
            Until tomorrow, observe your actions and ask yourself how they might
            be connected to your values.
          </Text>
        )
      },
      {
        id: 10,
        path: "Exercice_10_Intro",
        //path: "Exercice_10_Congratulations",
        label: "Meaningful Smartphone Activities",
        styleButton: ExerciceStyle_10,
        styleText: ExerciceTextStyle_10,
        IconSource: IconsExercice_10,
        state: this.props.exercices.exercice_state_10,
        function: updateState_Ex10,
        title: (
          <Text style={styles.header_challenge}>
            Meaningful Smartphone Activities
          </Text>
        ),
        text_content: (
          <Text style={styles.text_challenge}>
            Until tomorrow, do a test run of the meaningful smartphone activity
            you defined today!
          </Text>
        )
      },
      {
        id: 11,
        path: "Exercice_11_Intro",
        //path: "Exercice_11_Congratulations",
        label: "54321 Trick",
        styleButton: ExerciceStyle_11,
        styleText: ExerciceTextStyle_11,
        IconSource: IconsExercice_11,
        state: this.props.exercices.exercice_state_11,
        function: updateState_Ex11,
        title: <Text style={styles.header_challenge}>54321 Trick</Text>,
        text_content: (
          <Text style={styles.text_challenge}>
            The next time you are using{" "}
            {this.props.user_values.AppsRed1_D7 == undefined
              ? null
              : this.props.user_values.AppsRed1_D7}
            ,{" "}
            {this.props.user_values.AppsRed2_D7 == undefined
              ? null
              : this.props.user_values.AppsRed2_D7}{" "}
            and{" "}
            {this.props.user_values.AppsRed3_D7 == undefined
              ? null
              : this.props.user_values.AppsRed3_D7}
            , give it a try and do the 54321 trick and find:{"\n"}
            {"\n"}5 things you can see, 4 things you can touch, 3 things you can
            hear, 2 things you can smell, 1 thing you can taste!
          </Text>
        )
      },
      {
        id: 12,
        path: "Exercice_12_Intro",
        //path: "Exercice_12_Congratulations",
        label: "Inner Scientist",
        styleButton: ExerciceStyle_12,
        styleText: ExerciceTextStyle_12,
        IconSource: IconsExercice_12,
        state: this.props.exercices.exercice_state_12,
        function: updateState_Ex12,
        title: <Text style={styles.header_challenge}>Inner Scientist</Text>,
        text_content: (
          <Text style={styles.text_challenge}>
            Next time you notice any emotional trigger or impulse:{"\n"}
            {"\n"}Stop, notice it, most importantly accept it and then decide
            what to do!
          </Text>
        )
      },
      {
        id: 13,
        path: "Intro_Phase_Plan",
        //path: "Exercice_13_Congratulations",
        label: "Meaningful Smartphone Habits",
        styleButton: ExerciceStyle_13,
        styleText: ExerciceTextStyle_13,
        IconSource: IconsExercice_13,
        state: this.props.exercices.exercice_state_13,
        function: updateState_Ex13,
        title: (
          <Text style={styles.header_challenge}>
            Meaningful Smartphone Habits
          </Text>
        ),
        text_content: (
          <Text style={styles.text_challenge}>
            Let’s walk the walk. Do a first run of your new activity:{"\n"}
            {"\n"}
            {this.props.user_values.NewHabitCommit_D13 == undefined
              ? null
              : this.props.user_values.NewHabitCommit_D13}
          </Text>
        )
      },
      {
        id: 14,
        path: "Exercice_14_Intro",
        label: "Being Prepared for Challenges",
        styleButton: ExerciceStyle_14,
        styleText: ExerciceTextStyle_14,
        IconSource: IconsExercice_14,
        state: this.props.exercices.exercice_state_14,
        function: updateState_Ex14,
        title: (
          <Text style={styles.header_challenge}>
            Being Prepared for Challenges
          </Text>
        ),
        text_content: (
          <Text style={styles.text_challenge}>
            Do a test-run of one of your newly defined coping plans!{"\n"}
            {"\n"}There might be challenges to realize my plan:{" "}
            {this.props.user_values.NewHabitCommit_D13 === undefined
              ? null
              : this.props.user_values.NewHabitCommit_D13}
            . But I am prepared.
            {"\n"}
            {"\n"}If{" "}
            {this.props.user_values.Obstacle1_D14 == undefined
              ? null
              : this.props.user_values.Obstacle1_D14}
            , then{" "}
            {this.props.user_values.CopingStrategy1_D14 == undefined
              ? null
              : this.props.user_values.CopingStrategy1_D14}
            .{"\n"}
            {"\n"}If{" "}
            {this.props.user_values.Obstacle2_D14 == undefined
              ? null
              : this.props.user_values.Obstacle2_D14}
            , then{" "}
            {this.props.user_values.CopingStrategy2_D14 == undefined
              ? null
              : this.props.user_values.CopingStrategy2_D14}
            .{"\n"}
            {"\n"}If{" "}
            {this.props.user_values.Obstacle3_D14 == undefined
              ? null
              : this.props.user_values.Obstacle3_D14}
            , then{" "}
            {this.props.user_values.CopingStrategy3_D14 == undefined
              ? null
              : this.props.user_values.CopingStrategy3_D14}
            .
          </Text>
        )
      },
      {
        id: 15,
        path: "Exercice_15_Intro",
        label: "Beauty of Imagination",
        styleButton: ExerciceStyle_15,
        styleText: ExerciceTextStyle_15,
        IconSource: IconsExercice_15,
        state: this.props.exercices.exercice_state_15,
        function: updateState_Ex15,
        title: (
          <Text style={styles.header_challenge}>Beauty of Imagination</Text>
        ),
        text_content: (
          <Text style={styles.text_challenge}>
            Next time you find yourself in an empty moment today, try another
            one of these thought experiments. Or come up with your own!
          </Text>
        )
      },
      {
        id: 16,
        path: "Exercice_16_Intro",
        label: "Brain Reset",
        styleButton: ExerciceStyle_16,
        styleText: ExerciceTextStyle_16,
        IconSource: IconsExercice_16,
        state: this.props.exercices.exercice_state_16,
        function: updateState_Ex16,
        title: <Text style={styles.header_challenge}>Brain Reset</Text>,
        text_content: (
          <Text style={styles.text_challenge}>
            Give your brain the chance to have a moment without any guided input
            in an empty moment.{"\n"}
            {"\n"}Treat yourself with another micro-break today, lasting 3 - 10
            minutes instead of using your smartphone.
          </Text>
        )
      },
      {
        id: 17,
        path: "Intro_Phase_Support",
        label: "Taking Control on the Smartphone",
        styleButton: ExerciceStyle_17,
        styleText: ExerciceTextStyle_17,
        IconSource: IconsExercice_17,
        state: this.props.exercices.exercice_state_17,
        function: updateState_Ex17,
        title: (
          <Text style={styles.header_challenge}>
            Taking Control of the Smartphone
          </Text>
        ),
        text_content: (
          <Text style={styles.text_challenge}>
            Choose your favorite option:{"\n"}
            {"\n"}1. Turn-off non-human notifications{"\n"}
            {"\n"}2. Design a home screen that feels like home{"\n"}
            {"\n"}3. Free yourself from social media apps
          </Text>
        )
      },
      {
        id: 18,
        path: "Exercice_18_Intro",
        label: "Taking Control of the Environment",
        styleButton: ExerciceStyle_18,
        styleText: ExerciceTextStyle_18,
        IconSource: IconsExercice_18,
        state: this.props.exercices.exercice_state_18,
        function: updateState_Ex18,
        title: (
          <Text style={styles.header_challenge}>
            Taking Control of the Environment
          </Text>
        ),
        text_content: (
          <Text style={styles.text_challenge}>
            From now on, stick to these situations in which you will have your
            smartphone around - or not.{"\n"}
            {"\n"}This might be quite a radical change. Here comes a little tip:
            You can start with implementing one GO and one NO GO per day.
          </Text>
        )
      },
      {
        id: 19,
        path: "Exercice_19_Intro",
        label: "Me, the Smartphone and Others",
        styleButton: ExerciceStyle_19,
        styleText: ExerciceTextStyle_19,
        IconSource: IconsExercice_19,
        state: this.props.exercices.exercice_state_19,
        function: updateState_Ex19,
        title: (
          <Text style={styles.header_challenge}>
            Me, the Smartphone and Others
          </Text>
        ),
        text_content: (
          <Text style={styles.text_challenge}>
            From now on, share with the people around you what you are doing on
            the smartphone if you are using it around them.{"\n"}
            {"\n"}If you don’t feel comfortable sharing your activity, think
            about if it is even necessary doing that right that second.
          </Text>
        )
      },
      {
        id: 20,
        path: "Exercice_20_Intro",
        label: "Daddeln is Okay",
        styleButton: ExerciceStyle_20,
        styleText: ExerciceTextStyle_20,
        IconSource: IconsExercice_20,
        state: this.props.exercices.exercice_state_20,
        function: updateState_Ex20,
        title: <Text style={styles.header_challenge}>Daddeln is Okay</Text>,
        text_content: (
          <Text style={styles.text_challenge}>
            Do one more Daddeln session until tomorrow. Lose yourself and have
            fun!
          </Text>
        )
      },
      {
        id: 21,
        path: "Exercice_21_Intro",
        //path: "Closing_Screen_T2",
        label: "Closing",
        styleButton: ExerciceStyle_21,
        styleText: ExerciceTextStyle_21,
        IconSource: IconsExercice_21,
        state: this.props.exercices.exercice_state_21,
        function: updateState_Ex21
      }
    ];
    return (
      <>
        <BlurView
          tint="dark"
          intensity={this.state.visible ? 30 : 0}
          style={
            this.state.visible ? styles.notBlurredIndex : styles.notBlurred
          }
        />
        <View
          style={{
            alignItems: "stretch",
            flex: 1,
            height: "100%"
          }}
        >
          <StatusBar hidden />
          {/* <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ height: Dimensions.get("window").height }}
          > */}
          {/* <View
              style={{
                flex: 1,
                paddingTop: 50,
                justifyContent: "flex-start"
              }}
            >
              <Progress.Circle
                progress={
                  this.props.user.allExercises === true
                    ? 1
                    : this.state.progressCircle
                }
                size={Dimensions.get("window").width - 70}
                height={Dimensions.get("window").width - 70}
                thickness={12}
                strokeCap={"round"}
                borderWidth={0}
                borderRadius={0}
                color={this.state.colorProgress}
                unfilledColor={"#E2DFD1"}
                animated={true}
                style={{ alignSelf: "center" }}
              />

              <View
                style={{
                  position: "relative",
                  left: 0,
                  top: -Dimensions.get("window").width + 45,
                  marginBottom: -Dimensions.get("window").width + 45,
                  alignItems: "center"
                }}
              >
                <HomeIllustration
                  observeStarted={true}
                  reflectStarted={this.state.reflectStarted}
                  visionStarted={this.state.visionStarted}
                  planStarted={this.state.planStarted}
                  supportStarted={this.state.supportStarted}
                />
              </View>
            </View> */}

          <View
            style={{
              height: "100%",
              paddingTop: 60,
              paddingRight: 30,
              paddingLeft: 30,
              flex: 1,
              justifyContent: "center"
            }}
          >
            {/* <View style={{justifyContent:"center", flex: 1}}> */}
            <Text style={styles.date}>{this.getDate()}</Text>
            <Text style={styles.header_center}>
              {this.state.welcomeTitle} {this.props.user.nickname}
            </Text>
            {/* </View> */}

            <View
              style={{
                marginTop: 30,
                width: Dimensions.get("window").width - 60,
                justifyContent: "flex-end",
                shadowColor: "#000",
                shadowOffset: { width: 3, height: 3 },
                shadowOpacity: 0.3,
                shadowRadius: 2
              }}
            >
              {ExercicesArray.map((item, key) =>
                item.state === "next" ||
                item.state === "locked" ||
                item.state === "new" ? (
                  <View
                    key={key}
                    style={{
                      backgroundColor: item.state === "locked" ? "#F0F0F0" : "#E8E8FF",
                      justifyContent: "flex-end",
                      width: "100%",
                      borderRadius: 10,
                      paddingLeft: 30,
                      paddingRight: 30,
                      paddingBottom: 20
                    }}
                  >
                    <View style={{left: -30}}>
                      <Svg width={Dimensions.get("window").width - 60} height="142" viewBox="0 0 336 142" fill="none">
                        <Path
                          d="M110.702 8.59399C109.166 9.41395 107.849 10.3174 106.693 11.6314"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M138.385 11.2517C137.564 11.6742 136.772 12.1274 136.005 12.6438"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M142.77 3.91064C142.389 4.2486 142.118 4.59596 141.893 5.04965"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M152.29 1C151.499 1.5998 151.016 2.15242 150.537 3.0249"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M152.541 12.2639C152.024 12.7705 150.894 13.2396 151.288 14.0357"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M162.061 9.35352C160.96 9.58638 160.433 9.97626 160.433 11.1253"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M163.564 3.53101C162.999 3.65051 162.548 3.70662 162.186 4.16379"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M170.579 13.0234C169.209 13.0542 168.226 13.3197 167.322 14.4156"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M168.199 17.7061C166.731 17.9038 165.512 18.0156 164.441 19.0982"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M178.667 15.1409C177.242 15.4151 176.266 15.9275 175.364 17.1434"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M175.86 23.3174C173.792 23.3568 172.556 23.5679 171.4 25.3199"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M191.386 28.4904C189.843 27.6587 187.802 27.7467 186.431 28.8242"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M162.48 46.0127C161.238 46.3024 161.091 46.7829 160.498 47.6815"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M153.561 48.3486C152.043 48.8516 151.768 49.469 151.083 50.8518"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M161.985 54.1897C161.654 54.9128 161.324 55.636 160.994 56.3591"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M166.28 48.8496C165.329 49.81 164.895 50.4891 165.784 51.6865"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M174.043 43.6763C172.694 43.8842 171.803 43.9941 171.07 45.1782"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M173.878 50.1846C173.246 50.6405 171.861 50.9311 172.226 51.8533"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M170.74 55.1909C170.423 55.5305 169.939 55.9348 170.079 56.3591"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M266.642 105.979C270.637 103.777 274.953 101.583 279.295 100.146C286.573 97.7374 294.875 99.546 302.271 100.48C306.928 101.068 311.744 102.049 316.441 102.09C317.887 102.103 326.591 102.199 326.47 102.444"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M287.634 108.807C293.988 108.807 299.89 111.215 306.255 111.281C310.045 111.32 313.821 110.71 317.373 109.514"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M200.304 53.0049C199.046 52.757 196.993 52.7344 195.997 53.7413C195.534 54.2091 195.003 54.5777 194.546 55.0133C194.119 55.4209 193.193 56.2909 192.617 56.3521C192.25 56.3912 191.934 56.6666 191.587 56.7836C191.094 56.9496 190.669 56.9748 190.158 57.029C189.228 57.1279 188.323 57.2894 187.383 57.2894C186.844 57.2894 185.991 57.1107 185.991 57.8919C185.991 58.5602 186.507 59.2217 186.845 59.7589C187.902 61.4369 185.918 61.8985 184.769 62.6449C183.447 63.5034 182.14 65.4849 183.017 67.1302C184.118 69.1966 185.885 70.8146 187.287 72.6865C187.968 73.5954 189.022 74.1831 189.834 74.9626C190.496 75.5978 191.131 75.7564 191.955 76.0338"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M197.282 56.3657C196.94 56.3657 196.641 56.2452 196.421 56.5963C196.208 56.9363 196.534 57.2768 196.702 57.5418C196.957 57.9429 197.095 58.3067 197.08 58.7897C197.077 58.8884 196.739 59.9211 196.795 59.9375C196.941 59.9796 197.173 59.6579 197.241 59.565C197.39 59.3623 197.422 59.0683 197.467 58.8275C197.582 58.2212 197.591 57.622 197.553 57.0123C197.546 56.8944 197.564 56.3496 197.333 56.4016C197.128 56.4476 196.823 56.7245 196.878 56.9443"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M193.408 58.0671C193.774 58.2756 194.385 58.5842 194.385 59.1033C194.385 59.3736 194.38 59.591 194.284 59.8445C194.219 60.0163 194.142 60.1825 194.25 60.3475"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M193.812 58.7139C193.713 58.7906 193.213 59.3605 193.61 59.3605"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M186.224 64.3054C186.463 64.6994 186.807 65.0849 187.253 65.2407C187.639 65.3759 188.027 65.3526 188.436 65.3446C188.643 65.3406 188.851 65.3287 188.756 65.1368C188.682 64.988 188.641 64.888 188.641 64.7211"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M188.847 65.2925C188.852 65.5083 188.899 65.7089 189.052 65.864"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M214.202 45.5873C213.12 45.6784 212.035 45.4374 210.952 45.5406C209.921 45.6389 208.948 45.9854 207.934 46.1412C204.883 46.6093 202.043 48.6814 201.064 51.6999C200.406 53.7305 200.689 55.8468 200.516 57.9394C200.361 59.8158 199.497 61.4875 198.759 63.1711C198.411 63.9655 197.884 64.406 197.293 64.9862C197.153 65.1229 196.537 65.4717 196.546 65.6469C196.569 66.054 197.378 65.9472 197.603 65.9472C198.221 65.9472 198.742 65.9843 199.188 66.4477C199.694 66.9723 199.405 68.068 199.03 68.5764C198.508 69.2837 197.794 69.4574 197.055 69.8043C196.356 70.132 195.349 70.1431 194.895 70.8119C194.673 71.1391 194.557 71.7471 194.631 72.1332C194.779 72.9042 194.304 73.7662 193.931 74.4021C193.521 75.0988 192.945 75.4999 192.385 76.037C192.27 76.1477 192.104 76.2443 192.042 76.3974C191.983 76.542 192.583 76.6191 192.636 76.6243C193.017 76.6615 193.385 76.654 193.766 76.6376C194.046 76.6255 194.301 76.4862 194.578 76.4441C195.358 76.3254 196.093 76.1571 196.883 76.1571C197.911 76.1571 198.902 76.0339 199.922 75.9036C200.299 75.8553 200.631 75.6647 200.992 75.5566C201.434 75.424 201.863 75.2632 202.28 75.0627C203.068 74.6833 203.868 74.3582 204.651 73.9683C205.134 73.7279 205.595 73.4966 206.058 73.2143C206.487 72.952 207.015 72.7724 207.379 72.4202C207.721 72.0889 208.079 71.8096 208.389 71.4459C208.77 70.9996 209.137 70.5424 209.519 70.0979C210.436 69.0304 211.223 67.7798 211.811 66.501C212.195 65.666 212.346 64.5921 212.359 63.6783C212.373 62.733 212.324 61.7449 211.903 60.8756C211.339 59.7092 210.795 58.5458 210.312 57.3388C209.846 56.1754 209.795 55.0274 209.625 53.802C209.421 52.3384 209.785 50.5562 210.279 49.1908C210.657 48.1432 211.389 47.34 212.161 46.5683C212.387 46.3426 212.623 46.1615 212.871 45.9643C213.095 45.7861 213.271 45.5386 213.528 45.4071C213.585 45.3782 214.035 45.084 213.964 45.2269"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M213.726 45.5869C212.497 45.9721 211.147 46.2664 210.001 46.8882C209.4 47.2143 208.801 47.5599 208.214 47.9125C207.162 48.5457 206.268 49.3052 205.483 50.2515C204.847 51.0192 204.56 51.7785 204.268 52.7606C203.75 54.503 203.264 56.2747 202.996 58.0758C202.874 58.8997 202.665 59.7428 202.339 60.5115C201.765 61.8647 200.896 62.9118 199.733 63.808C199.221 64.2026 198.666 64.4768 198.151 64.8524C198.068 64.913 197.953 64.9574 197.854 64.9859C197.788 65.0049 197.735 65.0977 197.735 65.0459"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M211.646 46.8481C210.375 47.3768 209.401 48.0557 208.687 49.2638C208.039 50.3612 207.701 51.6209 207.293 52.8206C206.856 54.1091 206.412 55.4203 206.025 56.7245C205.685 57.8721 205.394 59.0478 204.856 60.1211C204.23 61.3715 203.21 62.451 202.148 63.3376C201.563 63.8255 200.842 64.0668 200.173 64.3986C199.618 64.6737 199.032 64.7122 198.449 64.8991C198.062 65.0233 197.66 65.0988 197.26 65.166"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M209.565 49.8513C209.461 50.6373 209.043 51.3093 208.852 52.0735C208.635 52.9392 208.733 53.889 208.733 54.7728C208.733 57.5521 207.849 60.5344 206.091 62.7172C205.403 63.5712 204.621 64.1605 203.554 64.3855C203.221 64.4559 202.896 64.5444 202.557 64.5924C201.995 64.6718 201.424 64.5977 200.86 64.6591C199.717 64.7834 198.52 64.9499 197.498 65.4666"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M199.221 65.2864C199.716 66.4695 200.648 67.7091 200.443 69.0634C200.241 70.398 199.466 71.9445 198.303 72.6869C197.901 72.9431 193.887 75.2397 195.357 75.7966"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M201.957 64.6858C202.116 65.2302 202.357 65.7308 202.581 66.2507C202.905 67.0063 202.911 67.6093 202.818 68.4161C202.635 70.0265 201.966 71.2391 201.015 72.5101C200.469 73.24 199.533 73.7402 199.414 74.7156C199.401 74.8187 199.313 75.4697 199.519 75.4697C199.64 75.4697 199.912 75.0394 199.995 74.9558"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M203.561 64.8657C204.046 65.7415 204.092 66.745 204.178 67.7319C204.26 68.6626 204.415 69.8265 204.215 70.7715C204.141 71.1191 203.85 71.4965 203.647 71.7791C203.354 72.1862 203.038 72.7282 202.973 73.2372C202.894 73.8516 203.202 74.4755 203.917 74.2949"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M205.047 63.905C205.751 64.8046 206.607 65.7893 206.873 66.9313C207.084 67.8349 206.884 68.8077 206.771 69.7107C206.691 70.3466 206.826 71.0726 206.645 71.686C206.577 71.9189 206.45 72.1622 206.487 72.4133C206.616 73.2819 207.921 71.9787 208.138 71.8328"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M205.404 63.905C206.45 63.4743 208.204 62.7738 209.282 62.2568C209.595 62.1063 210.228 61.8092 210.503 61.4693C210.655 61.283 210.628 60.8885 210.639 60.6619C210.653 60.377 210.738 60.1801 210.873 59.9412"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M205.345 63.845C206.366 64.5921 207.616 65.2986 208.129 66.5176C208.37 67.0919 208.546 67.6891 208.733 68.2826C208.892 68.7853 208.962 69.3189 209.153 69.8108C209.195 69.9203 209.508 70.3938 209.268 70.0911"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M206.176 63.7246C206.852 63.9434 208.071 64.3303 208.779 64.5854C209.202 64.738 209.666 64.8873 210.004 65.2027C210.271 65.4518 210.51 65.7464 210.727 66.0402C211.116 66.566 211.52 66.996 212.002 67.4482"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M190.464 76.125C189.752 78.3404 189.165 80.3854 187.489 82.0787C185.619 83.9679 183.463 85.4931 181.534 87.3078C179.901 88.8432 178.341 90.2443 177.368 92.3291C176.21 94.8094 175.016 97.5463 174.867 100.33C174.803 101.525 174.608 102.694 174.499 103.884C174.197 107.207 173.514 110.491 173.514 113.832C173.514 114.434 173.514 115.037 173.514 115.64C173.514 116.169 173.514 116.698 173.514 117.227C173.514 117.793 173.694 117.175 173.739 116.95"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M184.963 97.5581C184.963 98.9168 184.963 100.276 184.963 101.634C184.963 102.575 185.188 103.474 185.188 104.419C185.188 106.651 185.188 108.884 185.188 111.116C185.188 112.769 184.882 114.312 184.764 115.955C184.708 116.735 184.627 117.529 184.627 118.311C184.627 118.6 184.617 118.626 184.851 118.311"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M200.566 76.9189C200.289 79.5985 202.181 81.7925 204.146 83.3262C206.549 85.2025 209.112 87.3943 210.494 90.1871C212.081 93.3944 212.537 96.5694 212.577 100.179C212.614 103.54 212.671 106.993 213.138 110.323C213.318 111.606 213.278 112.78 213.144 114.065C213.074 114.738 213.197 115.639 213.026 114.342"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M3.47803 104.522C10.367 103.031 17.152 100.219 22.2468 95.3428C25.2896 92.4305 29.6512 90.6843 32.8014 87.8554C35.7562 85.2018 39.5202 83.3933 42.7135 81.0633C45.3664 79.1276 48.0843 77.5562 50.9506 75.9635C53.2608 74.6798 55.4289 72.9596 57.857 71.9532C61.3921 70.488 64.5656 68.7126 68.228 67.4793C72.0275 66.1997 76.0268 65.5127 79.8839 64.4657C84.2049 63.2929 88.6064 62.7967 93.0542 62.7967C94.8901 62.7967 97.62 62.278 99.3181 63.0285C99.6281 63.1655 102.864 64.3812 102.76 64.4657C102.147 64.9613 101.487 65.4525 100.924 65.9262C98.47 67.9923 95.1347 68.8545 92.7788 71.2346C89.5468 74.4999 87.249 79.6141 85.9413 83.9378C82.2666 96.0879 88.9896 108.861 95.8534 118.338C99.3149 123.118 105.093 126.28 110.859 127.379C114.96 128.161 119.343 129.224 123.502 129.535C131.259 130.115 138.49 127.352 146.24 126.544C154.871 125.645 163.264 123.716 171.984 123.716"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M1 92.8391C9.65097 91.25 16.1411 87.4296 23.0728 82.2222C30.7181 76.4787 37.8379 69.838 44.7556 63.2602C51.4005 56.9417 59.0785 51.588 65.5664 45.1326C73.7427 36.9973 82.8516 28.7503 93.5589 24.177C99.1574 21.7858 105.51 20.602 111.41 19.1931C118.083 17.5997 124.419 16.8982 131.28 16.8982C136.931 16.8982 142.15 17.8715 147.433 19.8422C152.95 21.9001 159.921 23.9203 164.55 27.7469C167.997 30.5963 171.761 33.0418 175.196 35.9066C175.669 36.3009 180.338 39.173 177.353 38.5029C171.656 37.2238 166.061 37.5742 160.328 37.7611C152.96 38.0012 144.375 40.793 137.934 44.4372C132.89 47.2912 129.218 51.0408 126.117 55.935C119.444 66.4689 121.829 80.8215 128.71 90.7528C140.411 107.641 152.943 115.622 172.93 115.02"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M159.164 120.315C163.098 119.016 167.153 118.756 171.231 118.219C173.601 117.906 176.34 117.679 178.701 118.138C181.408 118.664 184.257 118.886 187.001 119.138C189.401 119.358 191.851 119.691 194.28 119.38C197.95 118.909 201.793 118.777 205.357 117.703C209.559 116.437 213.744 115.201 217.903 113.8C223.932 111.77 230.197 108.912 235.749 105.818C239.94 103.482 244.537 101.874 248.742 99.5446C251.798 97.8511 255.157 96.6423 258.287 95.0615C261.458 93.4598 264.806 91.9477 268.231 90.9977C279.485 87.8765 291.085 84.8626 302.789 86.5146C310.814 87.6473 318.864 88.6596 326.907 89.6753C329.552 90.0093 332.766 90.0739 335 91.5782"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M78.3716 71.2082C80.6906 70.0508 83.8297 68.1531 86.5363 68.1531"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M90.085 129.265C92.7883 129.265 94.9109 130.345 97.3601 131.301C100.862 132.668 104.439 133.779 108.142 134.429C115.949 135.801 123.639 135.935 131.46 134.618C135.263 133.977 139.422 134.026 143.063 132.658C147.848 130.859 153.25 131.052 158.248 130.283C162.414 129.642 166.938 129.66 171.156 129.605C174.202 129.565 177.251 129.605 180.297 129.605C184.227 129.605 187.386 131.103 191.191 131.828C192.199 132.021 196.862 132.466 196.862 133.675"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M125.83 38.6885C129.838 35.9536 133.686 33.6006 138.441 32.4627C143.165 31.3325 147.861 31.5539 152.699 31.5539"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M155.11 35.9044C156.416 35.6846 157.753 35.6589 159.072 35.5564"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M119.457 48.9553C119.657 48.9889 120.533 49.2361 120.634 48.8779C120.677 48.7263 120.37 48.7978 120.318 48.8199C119.972 48.9672 119.655 48.9553 119.285 48.9553"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M91.727 48.6113C91.1746 49.0217 90.5732 49.3629 90.0874 49.8537"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M105.868 50.4749C105.122 51.4524 104.316 52.3607 103.614 53.3737"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M117.345 55.2373C113.392 59.3262 112.488 64.9334 111.606 70.3298C111.227 72.6565 111.111 74.8729 111.527 77.2089C111.852 79.0363 113.246 80.9523 113.246 82.7766"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M132.314 43.7964C131.216 44.636 130.2 45.564 129.142 46.4514C127.897 47.4964 126.577 48.4034 125.479 49.6295C121.508 54.0636 118.216 59.3234 118.216 65.4548"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M213.155 109.619C214.341 109.483 215.524 109.436 216.705 109.295C217.918 109.149 219.183 109.044 220.38 108.802C220.984 108.68 221.609 108.623 222.222 108.568C222.904 108.506 223.573 108.356 224.254 108.282C225.037 108.196 225.829 108.157 226.608 108.034C227.19 107.942 227.787 107.729 228.352 107.561C228.865 107.407 229.399 107.399 229.921 107.294C230.537 107.169 231.153 107.064 231.76 106.895C232.46 106.699 233.165 106.472 233.849 106.226C234.498 105.992 235.202 105.877 235.86 105.656"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M225.504 117.05C231.492 113.811 237.938 111.457 244.082 108.529C250.129 105.647 256.028 102.456 262.207 99.8751C267.212 97.7852 272.351 96.1982 277.43 94.3658C279.955 93.4547 282.571 93.0857 285.212 92.6707C287.455 92.3181 289.801 92.5873 292.067 92.3584"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M125.872 140.638C130.648 140.326 135.283 140.617 140.037 140.261C144.343 139.939 148.152 138.425 152.337 137.709C158.105 136.721 163.479 135.365 169.401 135.365C174.603 135.365 180.272 135.191 185.388 136.202C196.091 138.318 206.607 140.638 217.569 140.638"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M83.378 76.9937C81.3518 82.0511 79.7767 88.3171 80.4788 93.8147C80.7925 96.2704 80.6543 99.4651 81.5143 101.765C82.2968 103.858 83.0192 107.758 84.869 109.004"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M77.0415 101.096C77.0415 103.641 77.3644 105.62 77.8077 108.084C78.4705 111.767 82.1682 114.592 84.1238 117.666"
                          stroke="#2C3B51"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </Svg>
                    </View>

                    <View style={{ justifyContent: "flex-end" }}>
                      <Text style={styles.exercise_date}>
                        Day {item.id} of 20
                      </Text>
                      <Text style={styles.exercise_label}>{item.label}</Text>
                      <ExerciceButton
                        onPress={() => {
                          {
                            this.props.navigation.navigate(item.path);
                          }
                        }}
                        style={item.styleButton}
                        state={item.state}
                        disabled={item.state === "locked" ? true : false}
                      >
                        <Text style={styles.exercise_button_label}>{item.state === "locked" ? "Available Tomorrow" : "Start"}</Text>
                        <Image
                          style={styles.exercice_button_icon}
                          source={item.IconSource}
                        />
                      </ExerciceButton>
                    </View>
                  </View>
                ) : null
              )}
            </View>

            <Modal
              visible={this.state.visible}
              animationType="slide"
              transparent={true}
            >
              <View
                style={{
                  padding: 30,
                  flexDirection: "column",
                  backgroundColor: "#FDFDF7",
                  height: Dimensions.get("window").height,
                  justifyContent: "space-between",
                  paddingBottom: 30,
                  top: 50,
                  borderRadius: 10
                }}
              >
                {ExercicesArray.filter(item => item.state == "completed").map(
                  (item, key) =>
                    key == this.state.rightItemArray ? (
                      <View key={key}>
                        {this.state.totalChallenge === 1 ? null : (
                          <>
                            <Text style={styles.counter_modal}>
                              {this.state.leftItemArray +
                                this.state.rightItemArray +
                                1}
                              /{this.state.totalChallenge}
                            </Text>
                          </>
                        )}

                        <ChallengeModal
                          label={item.title}
                          content={item.text_content}
                          current={
                            this.state.leftItemArray + this.state.rightItemArray
                          }
                          total={this.state.totalChallenge}
                          onPressLeft={() => {
                            this.setState(
                              {
                                newstate: "DONE",
                                leftItemArray: this.state.leftItemArray + 1
                              },
                              function() {
                                this.props.dispatch(
                                  item.function(this.state.newstate)
                                );
                              }
                            );
                          }}
                          onPressRight={() => {
                            this.setState(
                              {
                                newstate: "completed",
                                rightItemArray: this.state.rightItemArray + 1
                              },
                              function() {
                                this.props.dispatch(
                                  item.function(this.state.newstate)
                                );
                              }
                            );
                          }}
                          onPressLeftLast={() => {
                            //const newstate = "DONE";
                            this.setState(
                              {
                                newstate: "DONE",
                                leftItemArray: this.state.leftItemArray + 1,
                                lastItemArray: true
                              },
                              function() {
                                this.props.dispatch(
                                  item.function(this.state.newstate)
                                );
                              }
                            );
                          }}
                          onPressRightLast={() => {
                            this.setState(
                              {
                                newstate: "completed",
                                rightItemArray: this.state.rightItemArray + 1,
                                lastItemArray: true
                              },
                              function() {
                                this.props.dispatch(
                                  item.function(this.state.newstate)
                                );
                              }
                            );
                          }}
                        ></ChallengeModal>
                      </View>
                    ) : null
                )}

                {this.state.lastItemArray ? (
                  <View
                    style={{
                      padding: 30,
                      flexDirection: "column",
                      backgroundColor: "#FDFDF7",
                      height: Dimensions.get("window").height,
                      justifyContent: "space-between",
                      paddingBottom: 50
                    }}
                  >
                    {this.state.leftItemArray / this.state.totalChallenge >=
                    1 ? (
                      <View
                        style={{
                          flexDirection: "column",
                          justifyContent: "center",
                          height: Dimensions.get("window").height - 110,
                          paddingLeft: 15,
                          paddingRight: 15
                        }}
                      >
                        <View
                          style={{
                            paddingTop: 5,
                            position: "absolute",
                            right: 0,
                            top: 0
                          }}
                        >
                          <TouchableOpacity
                            onPress={() => {
                              this.setState({
                                visible: false
                              });
                            }}
                          >
                            <Svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <Path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M18 15.48L15.48 18L9 11.52L2.52 18L0 15.48L6.48 9L0 2.52L2.52 0L9 6.48L15.48 0L18 2.52L11.52 9L18 15.48Z"
                                fill="#2C3B51"
                              />
                            </Svg>
                          </TouchableOpacity>
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            paddingBottom: 20
                          }}
                        >
                          <Svg
                            width="72"
                            height="71"
                            viewBox="0 0 72 71"
                            fill="none"
                          >
                            <Path
                              d="M66.1324 27.8582C67.4307 26.5861 67.8891 24.7191 67.3289 22.9858C66.7686 21.2525 65.3059 20.0131 63.5116 19.7511L47.8219 17.4595C47.5139 17.4146 47.2477 17.2202 47.1099 16.9395L40.0933 2.64953C39.2909 1.01522 37.6661 0 35.8529 0C34.0396 0 32.4148 1.01522 31.6124 2.64953L24.5958 16.9397C24.4579 17.2202 24.1918 17.4146 23.8837 17.4597L8.19424 19.7511C6.39993 20.0131 4.9374 21.2525 4.37692 22.9858C3.81644 24.7191 4.27496 26.5861 5.5735 27.8582L16.9266 38.9815C17.1494 39.1999 17.2512 39.5146 17.1986 39.823L14.5184 55.5293C14.212 57.3256 14.9327 59.1067 16.3996 60.178C17.8665 61.2495 19.7751 61.3879 21.3797 60.54L35.4128 53.1245C35.6884 52.9788 36.0174 52.9788 36.2932 53.1245L50.3264 60.54C51.0244 60.9088 51.7797 61.0911 52.5313 61.091C53.5075 61.091 54.4774 60.7835 55.3061 60.1778C56.773 59.1064 57.4938 57.3252 57.1873 55.5291L54.5071 39.8228C54.4546 39.5144 54.5563 39.1998 54.7791 38.9813L66.1324 27.8582ZM50.7789 40.4659L53.459 56.1724C53.5486 56.698 53.2258 56.9977 53.0828 57.1021C52.9397 57.2062 52.5563 57.4226 52.0868 57.1743L38.0536 49.7588C37.3647 49.3949 36.609 49.2127 35.8531 49.2127C35.0973 49.2127 34.3414 49.3949 33.6527 49.7586L19.6196 57.174C19.1499 57.4222 18.7666 57.2061 18.6236 57.1018C18.4806 56.9975 18.1576 56.6978 18.2474 56.1721L20.9275 40.4659C21.1907 38.9238 20.6824 37.3511 19.5675 36.2589L8.21441 25.1356C7.83446 24.7631 7.92045 24.33 7.9752 24.161C8.02968 23.992 8.21357 23.5907 8.73861 23.5141L24.4279 21.2225C25.9683 20.9976 27.2995 20.0257 27.9885 18.6224L35.0051 4.33226C35.24 3.85407 35.6764 3.80241 35.8533 3.80241C36.0299 3.80241 36.4663 3.85393 36.7013 4.33226V4.3324L43.7179 18.6226C44.4068 20.0259 45.7378 20.9977 47.2782 21.2227L62.9678 23.5142C63.4928 23.5908 63.6766 23.9921 63.7312 24.1612C63.7858 24.3303 63.872 24.7635 63.4919 25.1357L52.1388 36.259C51.024 37.3511 50.5157 38.9238 50.7789 40.4659Z"
                              fill="#2C3B51"
                            />
                            <Path
                              d="M57.95 2.64834C57.1047 2.03122 55.922 2.21956 55.308 3.06895L53.3001 5.84658C52.6861 6.69597 52.8734 7.88503 53.7186 8.50216C54.0545 8.74723 54.4435 8.86534 54.8289 8.86534C55.4139 8.86534 55.9906 8.59351 56.3606 8.08168L58.3685 5.30406C58.9825 4.45453 58.7952 3.26546 57.95 2.64834Z"
                              fill="#2C3B51"
                            />
                            <Path
                              d="M18.3968 5.83661L16.3889 3.05899C15.775 2.20988 14.5922 2.02153 13.7468 2.63837C12.9018 3.2555 12.7144 4.44456 13.3284 5.29395L15.3363 8.07158C15.7064 8.58383 16.2831 8.85551 16.8683 8.85551C17.2538 8.85551 17.6429 8.73741 17.9784 8.49219C18.8235 7.8752 19.0109 6.68614 18.3968 5.83661Z"
                              fill="#2C3B51"
                            />
                            <Path
                              d="M6.93969 42.654C6.61688 41.6555 5.54984 41.1089 4.55619 41.4334L1.30747 42.4945C0.313822 42.819 -0.229709 43.8918 0.0931045 44.8902C0.352756 45.6939 1.09432 46.2046 1.89162 46.2046C2.08531 46.2046 2.28235 46.1743 2.4766 46.1108L5.72533 45.0497C6.71884 44.7252 7.26251 43.6527 6.93969 42.654Z"
                              fill="#2C3B51"
                            />
                            <Path
                              d="M35.8532 63.7637C34.8085 63.7637 33.9617 64.6149 33.9617 65.6649V69.0985C33.9617 70.1485 34.8085 70.9997 35.8532 70.9997C36.8978 70.9997 37.7447 70.1485 37.7447 69.0985V65.6649C37.7447 64.6147 36.8979 63.7637 35.8532 63.7637Z"
                              fill="#2C3B51"
                            />
                            <Path
                              d="M70.3977 42.4983L67.149 41.4372C66.1557 41.113 65.0883 41.6592 64.7655 42.6579C64.4427 43.6567 64.9862 44.7292 65.9798 45.0537L69.2286 46.1148C69.4228 46.1781 69.6197 46.2082 69.8134 46.2082C70.6108 46.2082 71.3524 45.6974 71.6121 44.8939C71.9349 43.8953 71.3912 42.8228 70.3977 42.4983Z"
                              fill="#2C3B51"
                            />
                          </Svg>
                        </View>
                        <Text style={styles.header_modal}>Awesome!</Text>
                        <Text style={styles.text_modal}>
                          If you liked it, keep on doing it.
                        </Text>
                      </View>
                    ) : (
                      <View
                        style={{
                          flexDirection: "column",
                          justifyContent: "center",
                          height: Dimensions.get("window").height - 140,
                          paddingLeft: 15,
                          paddingRight: 15
                        }}
                      >
                        <View
                          style={{
                            paddingTop: 5,
                            position: "absolute",
                            right: 0,
                            top: 0
                          }}
                        >
                          <TouchableOpacity
                            onPress={() => {
                              this.setState({
                                visible: false
                              });
                            }}
                          >
                            <Svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <Path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M18 15.48L15.48 18L9 11.52L2.52 18L0 15.48L6.48 9L0 2.52L2.52 0L9 6.48L15.48 0L18 2.52L11.52 9L18 15.48Z"
                                fill="#2C3B51"
                              />
                            </Svg>
                          </TouchableOpacity>
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            paddingBottom: 20
                          }}
                        >
                          <Svg
                            width="65"
                            height="65"
                            viewBox="0 0 65 65"
                            fill="none"
                          >
                            <G clip-path="url(#clip0)">
                              <Path
                                d="M32.5 65C26.1077 65 19.945 63.1532 14.6363 59.6521L3.46592 63.123C3.01563 63.2628 2.52468 63.1418 2.19143 62.8086C1.85818 62.4748 1.73718 61.9844 1.87702 61.5341L5.3479 50.3637C1.84677 45.055 0 38.8923 0 32.5C0 23.8191 3.38062 15.6574 9.519 9.519C15.6574 3.38062 23.8191 0 32.5 0C41.1809 0 49.3426 3.38062 55.481 9.519C61.6194 15.6574 65 23.8191 65 32.5C65 41.1809 61.6194 49.3426 55.481 55.481C49.3426 61.6194 41.1809 65 32.5 65ZM14.8406 56.9896C15.094 56.9896 15.3455 57.0659 15.5592 57.2127C20.5575 60.6464 26.4157 62.4609 32.5 62.4609C49.0208 62.4609 62.4609 49.0208 62.4609 32.5C62.4609 15.9792 49.0208 2.53906 32.5 2.53906C15.9792 2.53906 2.53906 15.9792 2.53906 32.5C2.53906 38.5843 4.3536 44.4425 7.78728 49.4408C8.00697 49.7612 8.06847 50.1648 7.95292 50.5363L5.01762 59.9819L14.4637 57.0471C14.5872 57.0089 14.7142 56.9896 14.8406 56.9896Z"
                                fill="#2C3B51"
                              />
                              <Path
                                d="M32.5 50.9082C32.2505 50.9082 32.0016 50.8348 31.7864 50.6885C31.6064 50.566 27.3296 47.6461 22.9815 43.6238C16.9676 38.0602 13.9182 33.2677 13.9182 29.3792C13.9182 22.6299 18.9859 17.1387 25.2151 17.1387C27.884 17.1387 30.4742 18.1761 32.5 20.0234C34.5258 18.1761 37.1159 17.1387 39.7844 17.1387C46.014 17.1387 51.0818 22.6299 51.0818 29.3792C51.0818 33.2677 48.0324 38.0602 42.018 43.6238C37.6703 47.6461 33.3936 50.566 33.2136 50.6885C32.9984 50.8348 32.7494 50.9082 32.5 50.9082ZM25.2156 19.6777C20.3859 19.6777 16.4573 24.0298 16.4573 29.3792C16.4573 35.4854 27.4288 44.5105 32.5 48.0934C37.5707 44.5085 48.5427 35.4799 48.5427 29.3792C48.5427 24.0298 44.6141 19.6777 39.7849 19.6777C37.3758 19.6777 35.1298 20.7405 33.4606 22.6706C33.2191 22.9498 32.8689 23.1099 32.5005 23.1099C32.1315 23.1099 31.7814 22.9498 31.5399 22.6706C29.8707 20.7405 27.6247 19.6777 25.2156 19.6777Z"
                                fill="#2C3B51"
                              />
                              <Path
                                d="M32.5793 9.26758C32.5784 9.26758 32.5774 9.26758 32.5764 9.26758H32.5C31.7988 9.26758 31.2305 8.69926 31.2305 7.99805C31.2305 7.29683 31.7988 6.72852 32.5 6.72852H32.5823C33.2835 6.7305 33.8504 7.2998 33.8489 8.00102C33.8474 8.70125 33.2791 9.26758 32.5793 9.26758Z"
                                fill="#2C3B51"
                              />
                              <Path
                                d="M49.8136 16.4319C49.4888 16.4319 49.164 16.3085 48.9165 16.061C45.6539 12.8029 41.5538 10.6085 37.0583 9.71434C36.3705 9.57746 35.9242 8.90898 36.0611 8.22165C36.1979 7.53382 36.8659 7.087 37.5537 7.22387C42.5426 8.21619 47.0921 10.6506 50.7107 14.2643C51.2067 14.7597 51.2072 15.5636 50.7117 16.0595C50.4638 16.308 50.1385 16.4319 49.8136 16.4319Z"
                                fill="#2C3B51"
                              />
                            </G>
                            <Defs>
                              <ClipPath id="clip0">
                                <Rect width="65" height="65" fill="white" />
                              </ClipPath>
                            </Defs>
                          </Svg>
                        </View>
                        <Text style={styles.header_modal}>That’s okay!</Text>
                        <Text style={styles.text_modal}>
                          Another day, another challenge.
                        </Text>
                      </View>
                    )}
                  </View>
                ) : null}
              </View>
            </Modal>
          </View>
          {/* </ScrollView> */}
        </View>
      </>
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
  header_modal: {
    color: "#2C3B51",
    fontSize: 24,
    lineHeight: 28,
    textAlign: "center",
    fontFamily: "roboto-black",
    paddingBottom: 25,
    paddingTop: 30
  },
  text_modal: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "center",
    fontFamily: "roboto-regular"
  },
  counter_modal: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "center",
    fontFamily: "roboto-regular",
    paddingTop: 30
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
  date: {
    color: "#868D91",
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center",
    fontFamily: "roboto-medium",
    textTransform: "uppercase"
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
  header_center: {
    color: "#2C3B51",
    fontSize: 30,
    lineHeight: 37,
    textAlign: "center",
    fontFamily: "roboto-black",
    paddingTop: 20,
    paddingBottom: 20,
    alignSelf: "stretch"
  },
  exercise_date: {
    color: "#2C3B51",
    fontSize: 22,
    lineHeight: 26,
    textAlign: "center",
    fontFamily: "roboto-bold",
    paddingTop: 20,
    alignSelf: "stretch"
  },
  exercise_label: {
    color: "#2C3B51",
    fontSize: 18,
    lineHeight: 37,
    textAlign: "center",
    fontFamily: "roboto-regular",
    paddingBottom: 20,
    paddingTop: 10,
    alignSelf: "stretch"
  },
  exercise_button_label: {
    color: "#FFFFFF",
    fontSize: 13,
    textAlign: "center",
    fontFamily: "roboto-bold",
    paddingBottom: 5,
    paddingTop: 5,
    alignSelf: "stretch",
    textTransform: "uppercase",
    width: "100%"
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
    //lineHeight: 25,
    textAlign: "left",
    fontFamily: "roboto-regular",
    alignSelf: "stretch",
    marginTop: -15,
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
    right: 25,
    position: "absolute"
  },
  completed: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "transparent",
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginBottom: 15,
    paddingTop: 0,
    paddingBottom: 0
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
    paddingRight: 40,
    paddingLeft: 5,
    marginLeft: 0
  },
  next_observe: {
    backgroundColor: "#A28AD4",
    borderWidth: 2,
    borderColor: "#A28AD4",
    borderRadius: 10,
    overflow: "hidden",
    padding: 15,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginBottom: 15
  },
  next_reflect: {
    backgroundColor: "#F6B563",
    borderWidth: 2,
    borderColor: "#F6B563",
    borderRadius: 10,
    overflow: "hidden",
    padding: 15,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginBottom: 15
  },
  next_vision: {
    backgroundColor: "#F87B7B",
    borderWidth: 2,
    borderColor: "#F87B7B",
    borderRadius: 10,
    overflow: "hidden",
    padding: 15,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginBottom: 15
  },
  next_plan: {
    backgroundColor: "#4CBB92",
    borderWidth: 2,
    borderColor: "#4CBB92",
    borderRadius: 10,
    overflow: "hidden",
    padding: 15,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginBottom: 15
  },
  next_support: {
    backgroundColor: "#6A97D8",
    borderWidth: 2,
    borderColor: "#6A97D8",
    borderRadius: 10,
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
    paddingRight: 40,
    paddingLeft: 5,
    marginLeft: 0
  },
  new_observe: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#A28AD4",
    borderRadius: 10,
    overflow: "hidden",
    padding: 15,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginBottom: 15
  },
  text_new_observe: {
    color: "#A28AD4",
    fontSize: 17,
    lineHeight: 23,
    textAlign: "left",
    fontFamily: "roboto-medium",
    textTransform: "capitalize",
    alignSelf: "stretch",
    letterSpacing: 1,
    paddingRight: 40,
    paddingLeft: 5,
    marginLeft: 0
  },
  new_reflect: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#F6B563",
    borderRadius: 10,
    overflow: "hidden",
    padding: 15,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginBottom: 15
  },
  text_new_reflect: {
    color: "#F6B563",
    fontSize: 17,
    lineHeight: 23,
    textAlign: "left",
    fontFamily: "roboto-medium",
    textTransform: "capitalize",
    alignSelf: "stretch",
    letterSpacing: 1,
    paddingRight: 40,
    paddingLeft: 5,
    marginLeft: 0
  },
  new_vision: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#F87B7B",
    borderRadius: 10,
    overflow: "hidden",
    padding: 15,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginBottom: 15
  },
  text_new_vision: {
    color: "#F87B7B",
    fontSize: 17,
    lineHeight: 23,
    textAlign: "left",
    fontFamily: "roboto-medium",
    textTransform: "capitalize",
    alignSelf: "stretch",
    letterSpacing: 1,
    paddingRight: 40,
    paddingLeft: 5,
    marginLeft: 0
  },
  new_plan: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#4CBB92",
    borderRadius: 10,
    overflow: "hidden",
    padding: 15,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginBottom: 15
  },
  text_new_plan: {
    color: "#4CBB92",
    fontSize: 17,
    lineHeight: 23,
    textAlign: "left",
    fontFamily: "roboto-medium",
    textTransform: "capitalize",
    alignSelf: "stretch",
    letterSpacing: 1,
    paddingRight: 40,
    paddingLeft: 5,
    marginLeft: 0
  },
  new_support: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#6A97D8",
    borderRadius: 10,
    overflow: "hidden",
    padding: 15,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginBottom: 15
  },
  text_new_support: {
    color: "#6A97D8",
    fontSize: 17,
    lineHeight: 23,
    textAlign: "left",
    fontFamily: "roboto-medium",
    textTransform: "capitalize",
    alignSelf: "stretch",
    letterSpacing: 1,
    paddingRight: 40,
    paddingLeft: 5,
    marginLeft: 0
  },
  locked: {
    backgroundColor: "#E2DFD1",
    borderWidth: 2,
    borderColor: "#E2DFD1",
    borderRadius: 10,
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
    paddingRight: 40,
    paddingLeft: 5,
    marginLeft: 0
  },
  notBlurred: {
    ...StyleSheet.absoluteFill,
    top: Constants.statusBarHeight
  },
  notBlurredIndex: {
    ...StyleSheet.absoluteFill,
    top: Constants.statusBarHeight,
    zIndex: 2
  }
});

const mapStateToProps = state => ({
  user: state.user,
  exercices: state.exercices,
  user_values: state.user_values
});

export default connect(mapStateToProps)(TestScreen);
