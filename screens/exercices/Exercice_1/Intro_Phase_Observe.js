import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  Button,
  StatusBar,
  ImageBackground
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  HeaderComponent
} from "../../../components/AppComponents";
import { styles } from "./style";
import * as Progress from "react-native-progress";

export default class Exercice_1_Intro_Phase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container_background}>
        <StatusBar hidden />
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableWithoutFeedback
            onPress={() => {
              this.props.navigation.navigate("Exercice_1_Intro");
            }}
          >
            <View style={styles.container_scroll_img_absolute}>
              <Image
                style={styles.image_height}
                source={require("../../../assets/images/Day1_IntroPhase.png")}
                resizeMode="stretch"
              />

              <View style={styles.middle}>
                <Text style={styles.intro_header}>Observe</Text>
                <Text style={styles.intro_text}>
                  {"\n"}<Text style={styles.intro_text_bold}>Welcome to the wide ocean!</Text>{"\n"}This is how being on
                  the smartphone can feel like with all its’ great
                  opportunities. But sometimes, it’s hard to navigate. There are
                  impulse waves pulling you underwater when you’re hit by them.
                  {"\n"}{"\n"}Leo explores how being in the digital ocean feels.
                </Text>
                <Text style={styles.intro_text_bold}>
                  {"\n"}This module is all about observing yourself while you’re
                  on the smartphone. No judgements, no changes. Just observe
                  yourself in the wide, digital ocean.
                </Text>
              </View>

              <View style={styles.tap_pos_relative}>
                <Text style={styles.tap_text}>TAP ANYWHERE TO CONTINUE</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    );
  }
}
