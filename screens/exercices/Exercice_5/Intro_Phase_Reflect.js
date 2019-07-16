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

export default class Exercice_5_Intro_Phase extends React.Component {
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
              this.props.navigation.navigate("Exercice_5_Intro");
            }}
          >
            <View style={styles.container_scroll_img_absolute}>
              <Image
                style={styles.image_height}
                source={require("../../../assets/images/Day5_IntroPhase.png")}
                resizeMode="stretch"
              />

              <View style={styles.middle}>
                <Text style={styles.intro_header}>Reflect</Text>
                <Text style={styles.intro_text}>
                  {"\n"}<Text style={styles.intro_text_bold}>Studying the waves</Text>
                  {"\n"}You might know the feeling of being hooked to your smartphone and losing yourself in it. It’s like getting hit by a big wave in the ocean that pulls you underwater.
                  {"\n"}Leo is standing at the beach. With a bit of distance, he tries to understand the dynamics of the impulse waves in the digital ocean.
                </Text>
                <Text style={styles.intro_text_bold}>
                  {"\n"}This module is about understanding the drivers of your unconscious smartphone use. Explore why it’s so hard to resist the pull and discover how to regain control over your smartphone use, so you don’t get dragged underwater.
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
