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

export default class Exercice_13_Intro_Phase extends React.Component {
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
              this.props.navigation.navigate("Exercice_13_Intro");
            }}
          >
            <View style={styles.container_scroll_img_absolute}>
              <Image
                style={styles.image_height}
                source={require("../../../assets/images/Day1_IntroPhase.png")}
                resizeMode="stretch"
              />

              <View style={styles.middle}>
                <Text style={styles.intro_header}>Plan</Text>
                <Text style={styles.intro_text}>
                  {"\n"}
                  <Text style={styles.intro_text_bold}>
                    Preparing for the waves
                  </Text>
                  {"\n"}Turns out that values are the secret of success to
                  handle the waves! Having learned this on the beach, Leo is
                  back on his way to the ocean. It’s time to prepare for the big
                  challenge: mastering and surfing the waves.
                </Text>
                <Text style={styles.intro_text_bold}>
                  {"\n"}This module is about introducing meaningful smartphone
                  habits. The goal is to learn new ways to react to impulses.
                  Prepare for the rough part of the digital ocean and discover
                  how to surf the impulse waves.
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
