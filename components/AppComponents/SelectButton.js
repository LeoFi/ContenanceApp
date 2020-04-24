import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";

export default class SelectButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  switchStyleBorder = () => {
    switch (this.props.colour) {
      case "purple":
        return "#A28AD4";
      case "yellow":
        return "#F6B563";
      case "salmon":
        return "#F87B7B";
      case "green":
        return "#B8EDE3";
      default:
        return null;
    }
  };

  calc = () => {
    if (this.props.num === this.props.max) {
      if (this.state.isActive) {
        this.props.callback(1 - 1)
        this.setState({
          isActive: false
        });
      } else {
        return false;
      }
    } else {
      if (this.state.isActive) {
        this.props.callback(1 - 1),
          this.setState({
            isActive: false
          });
      } else {
        this.props.callback(1);
        this.setState({
          isActive: true
        });
      }
    }
  };

  render() {
    const buttonProps = {
      label: this.props.label,
      disabled: this.props.disabled,
      onPress: this.props.onPress,
      isBottom: this.props.isBottom,
      colour: this.props.colour,
      style: this.props.style
    };

    return (
      <TouchableOpacity
        //style={this.props.style}
        style={{
          backgroundColor: this.state.isActive? this.switchStyleBorder() : "#E2DFD1",
          width: "100%",
          height: 60,
          justifyContent: "center",
          marginBottom: 13,
          borderWidth: this.state.isActive ? 2 : 0,
          borderColor: this.switchStyleBorder(),
          borderRadius: 10
        }}
        onPress={() => this.calc()}
        disabled={buttonProps.disabled}
      >
        <Text style={[this.state.isActive? styles.button_text_primary_bold : styles.button_text_primary ]}>
          {buttonProps.label}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button_primary: {
    backgroundColor: "#2C3B51",
    borderWidth: 2,
    borderColor: "#2C3B51",
    borderRadius: 99,
    overflow: "hidden",
    padding: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "stretch",
    marginBottom: 0,
    height: 56
  },
  button_text_primary: {
    color: "#2C3B51",
    fontSize: 16,
    lineHeight: 23,
    textAlign: "left",
    fontFamily: "roboto-regular",
    alignSelf: "stretch",
    paddingLeft: 20
  },
  button_text_primary_bold: {
    color: "#2C3B51",
    fontSize: 16,
    lineHeight: 23,
    textAlign: "left",
    fontFamily: "roboto-medium",
    alignSelf: "stretch",
    paddingLeft: 18
  }
});
