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
      style: this.props.style,
      //state: this.props.state
    };

    return (
      <TouchableOpacity
        //style={this.props.style}
        style={exerciceProps.style}
        onPress={exerciceProps.onPress}
        disabled={exerciceProps.disabled}
        state={exerciceProps.state}
      >

        {this.props.children}

      </TouchableOpacity>
    );
  }
}