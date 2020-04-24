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
      isActive: this.props.isActive,
      mainColor: this.props.mainColor,
      mainColorReduced: this.props.mainColorReduced,
    };

    return (
      <TouchableOpacity
        //style={this.props.style}
        style={[
          styles.button_grey_input,
          {
            backgroundColor: buttonProps.isActive
              ? buttonProps.mainColor
              : buttonProps.mainColorReduced,
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
              color: buttonProps.isActive
                ? "#FFFFFF"
                : "#2C3B51",
              fontWeight: buttonProps.isActive ? "bold" : "normal",
              fontFamily: buttonProps.isActive
                ? "roboto-bold"
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
    fontSize: 14,
    lineHeight: 23,
    textAlign: "center",
    fontFamily: "roboto-regular",
    alignSelf: "stretch",
    fontWeight: "normal"
  }
});
