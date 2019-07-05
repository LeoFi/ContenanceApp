import React from "react";
import { View, Text, TextInput, Image, StatusBar } from "react-native";
import {
  PrimaryButton,
  SecondaryButton
} from "../../../components/AppComponents";
import { styles } from "./style";
import * as Progress from "react-native-progress";

export default class Aha extends React.Component {
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
      <StatusBar hidden />
        <Text style={styles.header}>Aha!</Text>
        <Text style={styles.intro_text}>
          {"\n"}About 90% of new year resolutions fail. Having a gap between knowing what you want to do and actually getting it done is very human.
        </Text>

        <PrimaryButton
          label="Start"
          onPress={() => {
            this.props.navigation.navigate("Exercice_1_1");
          }}
        />
      </View>
    );
  }
}
