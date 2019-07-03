import React from "react";
import { View, Text, TextInput } from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  Timer,
  AudioCompenent
} from "./../../../components/AppComponents";
import { styles } from "./style";
import * as Progress from "react-native-progress";

export default class Exercice_1_5 extends React.Component {
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
        <Text style={styles.header}>Fifth Page of Exercice !</Text>
        <Text style={styles.text}>
          {"\n"}Create an account to start your journey.
        </Text>
        
        <DeckSwiperExample></DeckSwiperExample>

        <PrimaryButton
          label="Sign Up"
          onPress={() => {
            this.props.navigation.navigate("Anchor");
          }}
        />
      </View>
    );
  }
}
