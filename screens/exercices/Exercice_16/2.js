import React from "react";
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  GreyInputButton
} from "../../../components/AppComponents";
import { styles } from "./style";
import * as Progress from "react-native-progress";

export default class Exercice_16_2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/green_shape_full.png")}
        style={styles.image_background}
      >
        <StatusBar hidden />
        <ScrollView>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback
              style={styles.scroll}
              onPress={() => {
                this.props.navigation.navigate("Exercice_16_3");
              }}
            >
              <View style={styles.container_scroll}>
                <Text style={styles.intro_text}>
                ... nothing!{"\n"}{"\n"}Allow your mind to wander and do whatever it wants to do.{"\n"}{"\n"}Let it do what it does best: think, watch, remember, imagine and dream.{"\n"}{"\n"}Whatever might come up, just let it come up. It’s okay.{"\n"}{"\n"}Start the timer in the next screen.
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
