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
        <Text style={[buttonProps.style === "small" ? styles.text_container_small : styles.text_container, buttonProps.style]}>
          <Text style={buttonProps.style === "small" ? styles.text_small : styles.text}>{buttonProps.textLabel}</Text>
          <Text style={buttonProps.style === "small" ? styles.link_small : styles.link}>{buttonProps.linkLabel}</Text>
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  text_container: {
    flexDirection: "row",
    width: Dimensions.get("window").width - 60,
    textAlign: "center"
  },
  text_container_small: {
    //flexDirection: "row",
    //width: Dimensions.get("window").width - 60,
    //paddingTop: 30
  },
  text: {
    color: "#2C3B51",
    fontSize: 15,
    lineHeight: 20,
    fontFamily: "roboto-regular"
  },
  text_small: {
    color: "#2C3B51",
    fontSize: 13,
    lineHeight: 18,
    textAlign: "left",
    fontFamily: "roboto-regular"
  },
  link: {
    color: "#2C3B51",
    fontSize: 15,
    lineHeight: 20,
    fontFamily: "roboto-regular",
    textDecorationLine: "underline",
    flexWrap: "wrap"
  },
  link_small: {
    color: "#2C3B51",
    fontSize: 13,
    lineHeight: 18,
    fontFamily: "roboto-regular",
    textDecorationLine: "underline",
    flexWrap: "wrap"
  }
});
