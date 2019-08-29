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

export default class Exercice_17_Aha_1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/purple_shape.png")}
        style={styles.image_background}
      >
        <StatusBar hidden />
        <ScrollView>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback
              style={styles.scroll}
              onPress={() => {
                this.props.navigation.navigate("Exercice_17_Challenge");
              }}
            >
              <View style={styles.container_scroll}>
                <Text style={styles.header}>Aha!</Text>
                <Text style={styles.intro_text_italic}>
                {"\n"}“Never before in history have the decisions of a handful of
                  designers (mostly men, white, living in SF, aged 25–35)
                  working at three companies —Google, Apple, and Facebook— had
                  so much impact on how millions of people around the world
                  spend their attention.”
                </Text>
                <Text style={styles.text}>
                Tristan Harris, Ex-Google Product Manager, Design Ethic
                  {"\n"}
                  {"\n"}Take back control of your attention by taking back
                  control of the design of your smartphone.
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
