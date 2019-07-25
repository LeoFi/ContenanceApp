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

export default class Exercice_9_Intro_Phase extends React.Component {
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
              this.props.navigation.navigate("Exercice_9_Intro");
            }}
          >
            <View style={styles.container_scroll_img_absolute}>
              <Image
                style={styles.image_height}
                source={require("../../../assets/images/Day1_IntroPhase.png")}
                resizeMode="stretch"
              />

              <View style={styles.middle}>
                <Text style={styles.intro_header}>Vision</Text>
                <Text style={styles.intro_text}>
                  {"\n"}<Text style={styles.intro_text_bold}>Finding meaning</Text>{"\n"}No matter how good you can surf: if you’re unsure about the direction you’re heading, you will eventually go down. It’s similar to your smartphone use: if you know what’s important to yourself, you’re more likely to handle mindless scrolling on the screen.
                  {"\n"}Leo learned why some waves soak him underwater. Suddenly, he sees a bright light on the horizon and turns his head towards the lights. It’s a big star! Leo is fascinated by the power of the star and wants to find out more about it. So he does the obvious: he reaches for the star.
                </Text>
                <Text style={styles.intro_text_bold}>
                  {"\n"}This module is about exploring your values. Based on them, you will define a new way to use your smartphone. This might sound challenging but we will support you.
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
