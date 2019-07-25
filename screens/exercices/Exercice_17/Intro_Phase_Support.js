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

export default class Exercice_17_Intro_Phase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container_background}>
        <StatusBar hidden />
        <ScrollView>
          <TouchableWithoutFeedback
            onPress={() => {
              this.props.navigation.navigate("Exercice_17_Intro");
            }}
          >
            <View style={styles.container_scroll_img_absolute}>
              <Image
                style={styles.image_height}
                source={require("../../../assets/images/Day1_IntroPhase.png")}
                resizeMode="stretch"
              />

              <View style={styles.middle}>
                <Text style={styles.intro_header}>Support</Text>
                <Text style={styles.intro_text}>
                  {"\n"}<Text style={styles.intro_text_bold}>Mastering the waves</Text>{"\n"}It’s time to surf! In the last 16 days, Leo learned how to handle the stormy waves of distraction in the digital ocean. Now it’s about refining his surfing gear to make sure it supports him in mastering and surfing the waves.
    
                </Text>
                <Text style={styles.intro_text_bold}>
                  {"\n"}This module is about redesigning your smartphone and environment to support your new smartphone practice. Create the perfect surf environment!
                </Text>
              </View>

              <View style={styles.tap_pos_relative}>
                <Text style={styles.tap_text}>TAP ANYWHERE TO CONTINUE.</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    );
  }
}
