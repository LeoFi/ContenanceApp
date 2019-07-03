import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import {
  PrimaryButton,
  SecondaryButton
} from "../../../components/AppComponents";
import { styles } from "./style";
import * as Progress from "react-native-progress";

export default class Challenge extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#F4F1DE",
      shadowOpacity: 0,
      elevation: 0,
      borderBottomWidth: 0
    },
    headerBackTitle: null,
    headerTitle: (
      <Progress.Bar
        progress={0.1}
        borderWidth={0}
        width={250}
        color={"rgba(44, 59, 81, 1)"}
        unfilledColor={"rgba(255, 255, 255, 1)"}
      />
    ),
    headerTintColor: "#2C3B51"
  };
  state = {
    password: ""
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>The Challenge</Text>
        <Text style={styles.intro_text}>
          {"\n"}Let’s walk the walk. Do a first run until tomorrow.
          {"\n"}{"\n"}If am Trigger, then I will new activity
        </Text>

      </View>
    );
  }
}
