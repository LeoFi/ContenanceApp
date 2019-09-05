import React, { PureComponent } from "react";
import { Text, View, Modal, Dimensions, StyleSheet, Alert } from "react-native";
import PrimaryButton from "./../AppComponents/PrimaryButton";

import { connect } from "react-redux";
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
} from "./../../redux-persist/redux/exercices";

import { updateTotalChallenge } from "./../../redux-persist/redux/user";

class ChallengeModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      firstItemArray: null,
      firstCompleted: null,
      totalChallenge: null
    };
  }

  componentWillMount = () => {
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
    var CompletedExercises = data
      .filter(item => item.exercice == "completed")
      .map(item => {
        return [item, item.function];
      });

    var totalChallenge = CompletedExercises.length;

    this.setState(
      {
        firstCompleted: 1,
        firstItemArray: 0,
        totalChallenge: totalChallenge
      },
      function() {
        this.props.dispatch(updateTotalChallenge(this.state.totalChallenge));
      }
    );
  };

  render() {
    const popUpProps = {
      item: this.props.item,
      label: this.props.label,
      content: this.props.content,
      function: this.props.function,
      onPress: this.props.onPress,
      onPressLast: this.props.onPressLast,
      current: this.props.current+1
    };

    return (
      <>
        <View
          style={{
            padding: 30,
            backgroundColor: "#F4F1DE",
            height: Dimensions.get("window").height,
            justifyContent: "center"
          }}
        >
          <Text style={styles.text_modal}>
            {popUpProps.current}/{this.state.totalChallenge}
          </Text>
          <Text style={styles.header_modal}>
            {popUpProps.label}: Challenge accomplished?
          </Text>
          <Text style={styles.text_modal}>
            {'"'}
            {popUpProps.content}
            {'"'}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: Dimensions.get("window").width - 60,
              paddingLeft: 15,
              paddingRight: 15
            }}
          >
            <View style={{ width: "50%", marginRight: 15 }}>
              <PrimaryButton
                onPress={popUpProps.onPressLast}
                label="OH YES"
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                }}
              />
            </View>
            <View style={{ width: "50%", marginLeft: 15 }}>
              <PrimaryButton
                onPress={
                  popUpProps.current < this.state.totalChallenge
                    ? popUpProps.onPress
                    : popUpProps.onPressLast
                }
                label="Not Yet"
              />
            </View>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
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
  }
});

const mapStateToProps = state => ({
  user: state.user,
  exercices: state.exercices
});

export default connect(mapStateToProps)(ChallengeModal);
