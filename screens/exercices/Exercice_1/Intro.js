import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import {
  PrimaryButton,
  SecondaryButton
} from "../../../components/AppComponents";
import { styles } from "./style";
import * as Progress from "react-native-progress";

export default class Exercice_1_Intro extends React.Component {
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
        progress={0.2}
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
        <Image
          style={styles.image}
          source={require("../../../assets/images/placeholder.png")}
        />
        <Text style={styles.intro_header}>Day 1</Text>
        <Text style={styles.intro_header}>Contenance</Text>
        <Text style={styles.intro_header}>5 MIN</Text>
        <Text style={styles.intro_text}>
          {"\n"}In this exercise, you will discover what Contenance is and why it should not be about less but better.
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
