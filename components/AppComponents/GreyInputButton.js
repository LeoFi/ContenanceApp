import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default class GreyInputButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const buttonProps = {
      label: this.props.label,
      onPress: this.props.onPress,
      isBottom: this.props.isBottom,
      style: this.props.style,
    };

    return (
      <TouchableOpacity
        //style={this.props.style}
        style={[
          styles.button_grey_input,
          {
            backgroundColor: this.state.active
              ? "#B8EDE3"
              : "rgba(44, 59, 81, 0.1)",
            marginBottom: buttonProps.isBottom ? 0 : 15
          },
          buttonProps.style
        ]}
        onPress={this.props.onPress}
      >
        <Text
          style={[
            styles.button_grey_input_text,
            {
              color: buttonProps.isSelected
                ? "rgba(44, 59, 81, 0.3)"
                : "#2C3B51",
              fontWeight: buttonProps.isSelected ? "normal" : "bold",
              fontFamily: buttonProps.isSelected
                ? "roboto-medium"
                : "roboto-regular"
            },
            buttonProps.style
          ]}
        >
          {buttonProps.label}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "column",
    marginBottom: 56,
    alignSelf: "stretch"
  },
  button_grey_input: {
    backgroundColor: "rgba(44, 59, 81, 0.1)",
    borderRadius: 99,
    overflow: "hidden",
    padding: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "stretch",
    marginBottom: 0
  },
  button_grey_input_text: {
    color: "#2C3B51",
    fontSize: 17,
    lineHeight: 23,
    textAlign: "center",
    fontFamily: "roboto-regular",
    alignSelf: "stretch",
    letterSpacing: 2,
    fontWeight: "normal"
  }
});
