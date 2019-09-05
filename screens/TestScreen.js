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
  updateWelcomeSubTitle
} from "./../redux-persist/redux/user";

import * as firebase from "firebase";
import { Svg, Path, Circle } from "react-native-svg";
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
      challengePending: undefined,
      completedExercices: 0
    };
  }

  setPhases = () => {
    if (
      this.props.exercices.exercice_state_13 === "completed" &&
      this.props.exercices.exercice_state_14 === "completed" &&
      this.props.exercices.exercice_state_15 === "completed" &&
      this.props.exercices.exercice_state_16 === "completed"
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
      this.props.exercices.exercice_state_9 === "completed" &&
      this.props.exercices.exercice_state_10 === "completed" &&
      this.props.exercices.exercice_state_11 === "completed" &&
      this.props.exercices.exercice_state_12 === "completed"
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
      this.props.exercices.exercice_state_5 === "completed" &&
      this.props.exercices.exercice_state_6 === "completed" &&
      this.props.exercices.exercice_state_7 === "completed" &&
      this.props.exercices.exercice_state_8 === "completed"
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
      this.props.exercices.exercice_state_1 === "completed" &&
      this.props.exercices.exercice_state_2 === "completed" &&
      this.props.exercices.exercice_state_3 === "completed" &&
      this.props.exercices.exercice_state_4 === "completed"
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

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

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
    this.setState({
      modalVisible: true
    });
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
    dt2 = new Date("September 18, 2019 16:44:30");
    //dt2 = new Date();
    var x = diff_days(dt1, dt2);
    //Alert.alert(x);
    //console.log(this.props.exercices);
    //console.log(x);

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
          .filter(item => item.exercice == "completed")
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
          item => item.exercice == "completed"
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
        this.props.dispatch(updateWelcomeTitle(this.state.welcomeSubTitle));
      } else {
        //
      }

      // IF COMPLETED = DOES EXIST
      if (!this.isEmpty(CompletedExercises)) {
        // TOTAL AMOUNT OF DAYS MISSED
        const Days_Missed_TotalValue = x - myOrderedArray.length;

        //CALCUL OF THE PROGRESS BAR
        const numbers = myOrderedArray;
        this.setState({ completedExercices: myOrderedArray.length });
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

        const currentUser = firebase.auth().currentUser;

        if (currentUser != null) {
          firebase
            .database()
            .ref("accounts")
            .child(currentUser.uid)
            .update({
              DaysMissedTotal: Days_Missed_TotalValue,
              DaysMissedLastEx: Days_Missed_LastExValue
            });
        }
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
        title: <Text style={styles.header_challenge}>Contenance</Text>,
        visible: true,
        state_name: "exercice_state_21",
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
        label: "Day 2 - Notice Your Impulses",
        styleButton: ExerciceStyle_2,
        styleText: ExerciceTextStyle_2,
        IconSource: IconsExercice_2,
        state: this.props.exercices.exercice_state_2,
        visible: true,
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
        label: "Day 3 - Solution Triangle",
        styleButton: ExerciceStyle_3,
        styleText: ExerciceTextStyle_3,
        IconSource: IconsExercice_3,
        state: this.props.exercices.exercice_state_3,
        visible: true,
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
        //path: "Closing_Screen_PM1",
        label: "Day 4 - Keep Breathing",
        styleButton: ExerciceStyle_4,
        styleText: ExerciceTextStyle_4,
        IconSource: IconsExercice_4,
        state: this.props.exercices.exercice_state_4,
        visible: true,
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
        visible: true,
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
        //path: "Exercice_6_3",
        label: "Day 6 - Exploring Emotional Triggers",
        styleButton: ExerciceStyle_6,
        styleText: ExerciceTextStyle_6,
        IconSource: IconsExercice_6,
        state: this.props.exercices.exercice_state_6,
        visible: true,
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
        visible: true,
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
        visible: true,
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
        //path: "Exercice_9_Challenge",
        label: "Day 9 - Exploring Values",
        styleButton: ExerciceStyle_9,
        styleText: ExerciceTextStyle_9,
        IconSource: IconsExercice_9,
        state: this.props.exercices.exercice_state_9,
        visible: true,
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
        //path: "Exercice_10_4",
        label: "Day 10 - Meaningful Smartphone Activities",
        styleButton: ExerciceStyle_10,
        styleText: ExerciceTextStyle_10,
        IconSource: IconsExercice_10,
        state: this.props.exercices.exercice_state_10,
        visible: true,
        title: (
          <Text style={styles.header_challenge}>
            Meaninngful Smartphone Activities
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
        //path: "Exercice_11_3",
        label: "Day 11 - 54321 Trick",
        styleButton: ExerciceStyle_11,
        styleText: ExerciceTextStyle_11,
        IconSource: IconsExercice_11,
        state: this.props.exercices.exercice_state_11,
        visible: true,
        title: <Text style={styles.header_challenge}>54321 Trick</Text>,
        text_content: (
          <Text style={styles.text_challenge}>
            {/* The next time you are using {this.props.user_values.AppsRed1_D7},
            {this.props.user_values.AppsRed2_D7} and
            {this.props.user_values.AppsRed3_D7}, give it a try and do the trick */}
            to find: Give it a try and do the 54321 trick and find:{"\n"}
            {"\n"}5 things you can see, 4 things you can touch, 3 things you can
            hear, 2 things you can smell, 1 thing you can taste!
          </Text>
        )
      },
      {
        id: 12,
        path: "Exercice_12_Intro",
        label: "Day 12 - Inner Scientist",
        styleButton: ExerciceStyle_12,
        styleText: ExerciceTextStyle_12,
        IconSource: IconsExercice_12,
        state: this.props.exercices.exercice_state_12,
        visible: true,
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
        label: "Day 13 - Meaningful Smartphone Habits",
        styleButton: ExerciceStyle_13,
        styleText: ExerciceTextStyle_13,
        IconSource: IconsExercice_13,
        state: this.props.exercices.exercice_state_13,
        visible: true,
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
        visible: true,
        title: (
          <Text style={styles.header_challenge}>
            Being Prepared for Challenges
          </Text>
        ),
        text_content: (
          <Text style={styles.text_challenge}>
            Do a test-run of one of your newly defined coping plans!{"\n"}
            {"\n"}There might be challenges to realize my plan:{" "}
            {/* {this.props.user_values.NewHabitCommit_D13}. But I am prepared.
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
        visible: true,
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
        visible: true,
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
        visible: true,
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
        visible: true,
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
        visible: true,
        state_name: "exercice_state_10",
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
        visible: true,
        title: <Text style={styles.header_challenge}>Daddeln is Okay</Text>,
        state_name: "exercice_state_20",
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
        visible: true,
        state_name: "exercice_state_21"
      }
    ];

    let { challengePending } = this.state;

    return (
      <View
        style={{
          alignItems: "stretch"
        }}
      >
        <StatusBar barStyle="dark-content" />
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
                position: "absolute",
                paddingTop: 25,
                left: 25,
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

            {ExercicesArray.filter(item => item.state == "completed").map(
              (item, key) => (
                <ChallengeModal
                  key={key}
                  label={item.title}
                  content={item.text_content}
                  allpopups={this.state.completedExercices}
                  function={item.function}
                ></ChallengeModal>
              )
            )}

            {/* {ExercicesArray.filter(item => item.state == "completed").map(
              (item, key) => (
                <>
                  <View style={{ flex: 1 }} key={key}>
                    <Modal
                      animationType="fade"
                      transparent={false}
                      visible={this.state.modalVisible}
                      onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                      }}
                    >
                      <ScrollView
                        showsVerticalScrollIndicator={false}
                        ref={c => {
                          this.scroll = c;
                        }}
                        style={{
                          alignContent: "flex-start",
                          flex: 1
                        }}
                      >
                        <View
                          style={{
                            padding: 30,
                            backgroundColor: "#F4F1DE",
                            height: Dimensions.get("window").height,
                            justifyContent: "center"
                          }}
                        >
                          <Text style={styles.text_modal}>
                            {key + 1}/{this.state.completedExercices}
                          </Text>
                          <Text style={styles.header_modal}>
                            {item.title}: Challenge accomplished?
                          </Text>
                          <Text style={styles.text_modal}>
                            {'"'}
                            {item.text_content}
                            {'"'}
                          </Text>
                          <Text style={styles.text_modal}>
                            {item.id}
                            {this.state.completedExercices}
                          </Text>
                          <View
                            style={{
                              flexDirection: "row",
                              justifyContent: "space-between",
                              width: "auto"
                            }}
                          >
                            <PrimaryButton
                              label="Oh Yes"
                              onPress={this.incrementCount}
                            />
                            <PrimaryButton
                              label="Not Yet"
                              // onPress={this.decrementCount}
                              onPress={() => {
                                this.setState({
                                  completedExercices:
                                    this.state.completedExercices + 1
                                });
                              }}
                            />
                          </View>
                        </View>
                      </ScrollView>
                    </Modal>
                  </View>
                </>
              )
            )} */}
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
  header_modal: {
    color: "#2C3B51",
    fontSize: 24,
    lineHeight: 28,
    textAlign: "center",
    fontFamily: "roboto-black",
    paddingBottom: 50
  },
  text_modal: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "center",
    fontFamily: "roboto-regular",
    paddingBottom: 50
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
    paddingRight: 15,
    marginLeft: -5
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
    paddingRight: 30,
    marginLeft: -5
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
    paddingRight: 30,
    marginLeft: -5
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
    paddingRight: 30,
    marginLeft: -5
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
    paddingRight: 30,
    marginLeft: -5
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
    paddingRight: 30,
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
