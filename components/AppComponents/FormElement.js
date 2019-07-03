import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button } from "react-native";
//import { defaultStyle } from './style'

export default class FormElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFrom: 0
    };
  }

  getInitialState = () => {
    return {
      value: 0
    };
  };

  render() {
    var radio_props = [
      { label: "param1", value: 0 },
      { label: "param2", value: 1 }
    ];

    return (
      <View>
        <Button
          title="Show Form 1"
          onPress={() => this.setState({ showForm: 0 })}
        />
        <Button
          title="Show Form 2"
          onPress={() => this.setState({ showForm: 1 })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "center",
    fontFamily: "roboto-regular"
  },
  link: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    textAlign: "center",
    fontFamily: "roboto-regular",
    textDecorationLine: "underline"
  }
});