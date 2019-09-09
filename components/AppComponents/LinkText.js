import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from "react-native";
//import { defaultStyle } from './style'

export default class LinkText extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const buttonProps = {
      textLabel: this.props.textLabel,
      linkLabel: this.props.linkLabel,
      linkOnPress: this.props.linkOnPress,
      style: this.props.style
    };

    return (
      <TouchableOpacity onPress={buttonProps.linkOnPress}>
        <Text style={[styles.text_container, buttonProps.style]}>
          <Text style={styles.text}>{buttonProps.textLabel}</Text>
          <Text style={styles.link}>{buttonProps.linkLabel}</Text>
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  text_container: {
    flexDirection: "row",
    width: Dimensions.get("window").width - 126
  },
  text: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    fontFamily: "roboto-regular"
  },
  link: {
    color: "#2C3B51",
    fontSize: 19,
    lineHeight: 25,
    fontFamily: "roboto-regular",
    textDecorationLine: "underline",
    flexWrap: "wrap"
  }
});
