import React from "react";
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground,
  Image
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import { styles } from "./style";

export default class Exercice_14_Intro extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.background_intro}>
        <StatusBar hidden />
        <ScrollView>
          <View style={styles.container_scroll_img_absolute}>
            <Image
              style={styles.image_height}
              source={require("../../../assets/images/Day14_Intro.png")}
              resizeMode="stretch"
            />
            <View style={styles.middle}>
              <Text style={styles.intro_header_day_light}>Day 14</Text>
              <Text style={styles.intro_header_light}>Being Prepared for Challenges</Text>

              <Text style={styles.intro_text_light}>
                {"\n"}6 MIN{"\n"}In this exercise, you will discover how to make your plans even stronger.
              </Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottom_button}>
          <PrimaryButton
            label="Start"
            isBottom={true}
            style={{backgroundColor: "#F4F1DE", borderColor: "#F4F1DE", color: "#2C3B51"}}
            onPress={() => {
              this.props.navigation.navigate("Exercice_14_1");
            }}
          />
        </View>
      </View>
    );
  }
}