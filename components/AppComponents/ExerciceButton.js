import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default class ExerciceButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const exerciceProps = {
      label: this.props.label,
      disabled: this.props.disabled,
      onPress: this.props.onPress,
      isBottom: this.props.isBottom,
      style: this.props.style,
      //state: this.props.state
    };

    return (
      <TouchableOpacity
        //style={this.props.style}
        style={[
          styles.button_exercice,
          {
            backgroundColor: exerciceProps.state ? "#E0DFD0" : "#A878CE",
            borderColor: exerciceProps.disabled ? "#E0DFD0" : "#A878CE",
            marginBottom: exerciceProps.isBottom ? 0 : 15
          },
          exerciceProps.style
        ]}
        onPress={exerciceProps.onPress}
        disabled={exerciceProps.disabled}
        state={exerciceProps.state}
        // style={[
        //   styles.button_exercice,
        //   {
        //     fontSize:
        //       this.props.exercices.exercice_state_1 == "completed" ? "17" : "55",
        //   },
        //   exerciceProps.style
        // ]}
      >
        <Text
          style={[
            styles.button_text_exercice,
            {
              color: exerciceProps.disabled
                ? "rgba(44, 59, 81, 0.3)"
                : "#F4F1DE"
            },
            exerciceProps.style
          ]}
        >
          {exerciceProps.label}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button_exercice: {
    backgroundColor: "#A878CE",
    borderWidth: 2,
    borderColor: "#A878CE",
    borderRadius: 12,
    overflow: "hidden",
    padding: 15,
    flexDirection: "row",
    alignSelf: "stretch",
    marginBottom: 0
  },
  button_text_exercice: {
    color: "#F4F1DE",
    fontSize: 17,
    lineHeight: 23,
    textAlign: "left",
    fontFamily: "roboto-medium",
    textTransform: "capitalize",
    alignSelf: "stretch",
    letterSpacing: 1
  }
});
