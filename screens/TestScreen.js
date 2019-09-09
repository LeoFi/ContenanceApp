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
  updateTotalChallenge
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

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  componentDidMount() {
    this.compareDates();
    this.timeLogic();
    this.setPhases();

    // const uid = firebase.auth().currentUser.uid;

    // firebase
    //   .database()
    //   .ref()
    //   .child("accounts")
    //   .child(uid)
    //   .update({
    //     DaysMissedTotal: Days_Missed_TotalValue,
    //     DaysMissedLastEx: Days_Missed_LastExValue
    //   });
  }

  goToTop = () => {
    this.scroll.scrollTo({
      x: -Dimensions.get("window").height,
      y: 0,
      animated: true
    });
  };

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
    dt2 = new Date("October 20 2019 16:44:30");
    //dt2 = new Date();
    var x = diff_days(dt1, dt2);
    //Alert.alert(x);
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
      if (!this.isEmpty(LockedExercises)) {
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
      } else {
        //
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
        //path: "Exercice_1_Congratulations",
        label: "Day 1 - Contenance",
        styleButton: ExerciceStyle_1,
        styleText: ExerciceTextStyle_1,
        IconSource: IconsExercice_1,
        state: this.props.exercices.exercice_state_1,
        function: updateState_Ex1,
        title: <Text style={styles.header_challenge}>Contenance</Text>,
        text_content: (
          <Text style={styles.text_challenge}>
            From now on, whenever you open Contencance, take on a good posture
            first.
          </Text>
        )
      },
      {
        id: 2,
        path: "Exercice_2_Intro",
        //path: "Exercice_2_Congratulations",
        label: "Day 2 - Notice Your Impulses",
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
        //path: "Exercice_3_Intro",
        path: "Exercice_3_3",
        label: "Day 3 - Solution Triangle",
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
        label: "Day 4 - Keep Breathing",
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
        label: "Day 5 - Habit Loop",
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
        label: "Day 6 - Exploring Emotional Triggers",
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
        label: "Day 7 - Getting Lost",
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
        label: "Day 8 - Mindful Social Media Use",
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
        label: "Day 9 - Exploring Values",
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
        label: "Day 10 - Meaningful Smartphone Activities",
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
        label: "Day 11 - 54321 Trick",
        styleButton: ExerciceStyle_11,
        styleText: ExerciceTextStyle_11,
        IconSource: IconsExercice_11,
        state: this.props.exercices.exercice_state_11,
        function: updateState_Ex11,
        title: <Text style={styles.header_challenge}>54321 Trick</Text>,
        text_content: (
          <Text style={styles.text_challenge}>
            The next time you are using
            {this.state.AppsRed1_D7 == undefined
              ? null
              : this.props.user_values.AppsRed1_D7}
            ,
            {this.state.AppsRed2_D7 == undefined
              ? null
              : this.props.user_values.AppsRed2_D7}{" "}
            and
            {this.state.AppsRed3_D7 == undefined
              ? null
              : this.props.user_values.AppsRed3_D7}
            , give it a try and do the trick to find: Give it a try and do the
            54321 trick and find:{"\n"}
            {"\n"}5 things you can see, 4 things you can touch, 3 things you can
            hear, 2 things you can smell, 1 thing you can taste!
          </Text>
        )
      },
      {
        id: 12,
        path: "Exercice_12_Intro",
        //path: "Exercice_12_Congratulations",
        label: "Day 12 - Inner Scientist",
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
        label: "Day 13 - Meaningful Smartphone Habits",
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
            {/* {this.props.user_values.NewHabitCommit_D13} */}
          </Text>
        )
      },
      {
        id: 14,
        path: "Exercice_14_Intro",
        label: "Day 14 - Being Prepared for Challenges",
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
            {/* {this.props.user_values.NewHabitCommit_D13 === undefined
              ? null
              : this.props.user_values.NewHabitCommit_D13}
            . But I am prepared.
            {"\n"}
            {"\n"}If {this.props.user_values.Obstacle1_D14}, then{" "}
            {this.props.user_values.CopingStrategy1_D14}.{"\n"}
            {"\n"}If {this.props.user_values.Obstacle2_D14}, then{" "}
            {this.props.user_values.CopingStrategy2_D14}.{"\n"}
            {"\n"}If {this.props.user_values.Obstacle3_D14}, then{" "}
            {this.props.user_values.CopingStrategy3_D14}. */}
          </Text>
        )
      },
      {
        id: 15,
        path: "Exercice_15_Intro",
        label: "Day 15 - Beauty of Imagination",
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
        label: "Day 16 - Brain Reset",
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
        label: "Day 17 - Taking Control on the Smartphone",
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
        label: "Day 18 - Taking Control of the Environment",
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
        label: "Day 19 - Me, the Smartphone and Others",
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
        label: "Day 20 - Daddeln is Okay",
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
        path: "Exercice_20_Intro",
        label: "Day 21 - Brain Reset",
        styleButton: ExerciceStyle_21,
        styleText: ExerciceTextStyle_21,
        IconSource: IconsExercice_21,
        state: this.props.exercices.exercice_state_21,
        function: updateState_Ex21
      }
    ];
    //this.state.visible ? 70 : 0
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
            alignItems: "stretch"
          }}
        >
          <StatusBar hidden />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                flex: 1,
                paddingTop: 50,
                justifyContent: "flex-start"
              }}
            >
              <Progress.Circle
                progress={this.state.progressCircle}
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
            </View>

            <View
              style={{
                flex: 1,
                paddingRight: 30,
                paddingLeft: 30,
                justifyContent: "flex-start"
              }}
            >
              <Text style={styles.header_left}>
                {this.state.welcomeTitle} {this.props.user.nickname}!
              </Text>

              <Text style={styles.text_left}>
                {"\n"}
                {this.state.welcomeSubTitle}
              </Text>

              {ExercicesArray.map((item, key) =>
                item.state === "next" ||
                item.state === "locked" ||
                //item.state === "completed" ||
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
                      disabled={item.state === "locked" ? true : false}
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

              <Modal
                visible={this.state.visible}
                animationType="slide"
                transparent={true}
              >
                <View
                  style={{
                    padding: 30,
                    flexDirection: "column",
                    backgroundColor: "#F4F1DE",
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
                              this.state.leftItemArray +
                              this.state.rightItemArray
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
                        backgroundColor: "#F4F1DE",
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
          </ScrollView>
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
    marginTop: 6,
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
    borderRadius: 12,
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
    borderRadius: 12,
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
    borderRadius: 12,
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
    borderRadius: 12,
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
    paddingRight: 40,
    paddingLeft: 5,
    marginLeft: 0
  },
  new_observe: {
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
  text_new_observe: {
    color: "#9B51E0",
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
    borderRadius: 12,
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
    borderRadius: 12,
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
    borderRadius: 12,
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
    borderRadius: 12,
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
  exercices: state.exercices
});

export default connect(mapStateToProps)(TestScreen);
