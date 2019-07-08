import React from "react";
import { View, Text, TextInput, Image, StatusBar } from "react-native";
import {
  PrimaryButton,
  SecondaryButton
} from "../../../components/AppComponents";
import { styles } from "./style";
import * as Progress from "react-native-progress";

export default class Exercice_1_Intro extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container_background_color}>
        <StatusBar hidden />
        <Image
          style={styles.image_absolute}
          source={require("../../../assets/images/pink_shape.png")}
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
